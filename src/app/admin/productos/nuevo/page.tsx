import { createAdminClient } from "@/lib/supabase/admin";
import { createProduct } from "../actions";
import VariantsField from "../VariantsField";

export const dynamic = "force-dynamic";

export default async function NuevoProductoPage() {
  const supabase = createAdminClient();
  const { data: categories } = await supabase.from("categories").select("id, name").order("name");

  return (
    <div>
      <h1>Nuevo producto</h1>
      <form
        action={createProduct}
        encType="multipart/form-data"
        style={{ display: "grid", gap: 12, maxWidth: 480 }}
      >
        <label>
          Nombre
          <input name="name" required style={{ width: "100%", padding: 6 }} />
        </label>
        <label>
          Slug (opcional, se genera solo a partir del nombre)
          <input name="slug" style={{ width: "100%", padding: 6 }} />
        </label>
        <label>
          Descripción
          <textarea name="description" rows={4} style={{ width: "100%", padding: 6 }} />
        </label>
        <label>
          Precio (opcional, se usa si el producto no tiene variantes)
          <input
            name="price"
            type="number"
            step="0.01"
            min="0"
            style={{ width: "100%", padding: 6 }}
          />
        </label>

        <fieldset>
          <legend>Variantes</legend>
          <VariantsField />
        </fieldset>

        <label>
          <input name="active" type="checkbox" defaultChecked /> Activo (visible en la tienda)
        </label>

        <fieldset>
          <legend>Categorías</legend>
          <div className="category-tags">
            {categories?.map((category) => (
              <label key={category.id} className="category-tag">
                <input type="checkbox" name="categories" value={category.id} />
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

        <label>
          Fotos
          <input name="images" type="file" accept="image/*" multiple />
        </label>

        <button type="submit" style={{ padding: 10 }}>
          Crear producto
        </button>
      </form>
    </div>
  );
}
