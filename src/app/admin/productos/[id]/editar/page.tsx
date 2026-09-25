import { notFound } from "next/navigation";
import { createAdminClient } from "@/lib/supabase/admin";
import { getProductImageUrl } from "@/lib/supabase/public";
import { updateProduct, deleteProductImage } from "../../actions";
import VariantsField from "../../VariantsField";

export const dynamic = "force-dynamic";

export default async function EditarProductoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = createAdminClient();

  const { data: product } = await supabase
    .from("products")
    .select(
      "id, name, slug, description, price, active, product_categories(category_id), product_images(id, storage_path, position), product_variants(name, price, position)"
    )
    .eq("id", id)
    .single();

  if (!product) notFound();

  const { data: categories } = await supabase.from("categories").select("id, name").order("name");

  const selectedCategoryIds = new Set(product.product_categories?.map((pc) => pc.category_id) ?? []);
  const images = [...(product.product_images ?? [])].sort((a, b) => a.position - b.position);
  const variants = [...(product.product_variants ?? [])].sort((a, b) => a.position - b.position);
  const updateProductWithId = updateProduct.bind(null, product.id);

  return (
    <div>
      <h1>Editar producto</h1>
      <form
        action={updateProductWithId}
        encType="multipart/form-data"
        style={{ display: "grid", gap: 12, maxWidth: 480 }}
      >
        <label>
          Nombre
          <input name="name" defaultValue={product.name} required style={{ width: "100%", padding: 6 }} />
        </label>
        <label>
          Slug
          <input name="slug" defaultValue={product.slug} style={{ width: "100%", padding: 6 }} />
        </label>
        <label>
          Descripción
          <textarea
            name="description"
            rows={4}
            defaultValue={product.description ?? ""}
            style={{ width: "100%", padding: 6 }}
          />
        </label>
        <label>
          Precio (opcional, se usa si el producto no tiene variantes)
          <input
            name="price"
            type="number"
            step="0.01"
            min="0"
            defaultValue={product.price ?? ""}
            style={{ width: "100%", padding: 6 }}
          />
        </label>

        <fieldset>
          <legend>Variantes</legend>
          <VariantsField initialVariants={variants} />
        </fieldset>

        <label>
          <input name="active" type="checkbox" defaultChecked={product.active} /> Activo
        </label>

        <fieldset>
          <legend>Categorías</legend>
          <div className="category-tags">
            {categories?.map((category) => (
              <label key={category.id} className="category-tag">
                <input
                  type="checkbox"
                  name="categories"
                  value={category.id}
                  defaultChecked={selectedCategoryIds.has(category.id)}
                />
                {category.name}
              </label>
            ))}
          </div>
          {categories?.length === 0 && (
            <p style={{ fontSize: 14, color: "#666" }}>
              No hay categorías todavía. Creá una en la sección Categorías.
            </p>
          )}
        </fieldset>

        {images.length > 0 && (
          <div>
            <p>Fotos actuales</p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {images.map((image) => (
                <div key={image.id}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={getProductImageUrl(image.storage_path)}
                    alt=""
                    width={80}
                    height={80}
                    style={{ objectFit: "cover", borderRadius: 4, display: "block" }}
                  />
                  <form action={deleteProductImage.bind(null, image.id, image.storage_path)}>
                    <button type="submit" style={{ fontSize: 12 }}>
                      Borrar
                    </button>
                  </form>
                </div>
              ))}
            </div>
          </div>
        )}

        <label>
          Agregar más fotos
          <input name="images" type="file" accept="image/*" multiple />
        </label>

        <button type="submit" style={{ padding: 10 }}>
          Guardar cambios
        </button>
      </form>
    </div>
  );
}
