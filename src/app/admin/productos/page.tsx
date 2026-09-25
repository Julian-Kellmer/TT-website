import Link from "next/link";
import { createAdminClient } from "@/lib/supabase/admin";
import { getProductImageUrl } from "@/lib/supabase/public";
import { deleteProduct } from "./actions";

export const dynamic = "force-dynamic";

export default async function ProductosPage() {
  const supabase = createAdminClient();
  const { data: products } = await supabase
    .from("products")
    .select("id, name, price, active, product_images(storage_path, position)")
    .order("created_at", { ascending: false });

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>Productos</h1>
        <Link href="/admin/productos/nuevo">+ Nuevo producto</Link>
      </div>

      <table cellPadding={8} style={{ borderCollapse: "collapse", width: "100%", marginTop: 16 }}>
        <thead>
          <tr style={{ textAlign: "left", borderBottom: "1px solid #eee" }}>
            <th></th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Activo</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => {
            const images = [...(product.product_images ?? [])].sort(
              (a, b) => a.position - b.position
            );
            const firstImage = images[0]?.storage_path;

            return (
              <tr key={product.id} style={{ borderBottom: "1px solid #f3f3f3" }}>
                <td>
                  {firstImage ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={getProductImageUrl(firstImage)}
                      alt=""
                      width={48}
                      height={48}
                      style={{ objectFit: "cover", borderRadius: 4, display: "block" }}
                    />
                  ) : null}
                </td>
                <td>{product.name}</td>
                <td>{product.price === null ? "—" : `$${product.price}`}</td>
                <td>{product.active ? "Sí" : "No"}</td>
                <td style={{ display: "flex", gap: 8 }}>
                  <Link href={`/admin/productos/${product.id}/editar`}>Editar</Link>
                  <form action={deleteProduct.bind(null, product.id)}>
                    <button type="submit">Eliminar</button>
                  </form>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {products?.length === 0 && <p>Todavía no hay productos cargados.</p>}
    </div>
  );
}
