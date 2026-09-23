import { createAdminClient } from "@/lib/supabase/admin";
import { createCategory, deleteCategory } from "./actions";

export const dynamic = "force-dynamic";

export default async function CategoriasPage() {
  const supabase = createAdminClient();
  const { data: categories } = await supabase.from("categories").select("id, name, slug").order("name");

  return (
    <div>
      <h1>Categorías</h1>
      <p style={{ color: "#666", fontSize: 14 }}>
        &quot;Más vendidos&quot; ya viene creada de fábrica: asignala a un producto desde su ficha
        para que aparezca ahí, además de en su categoría normal.
      </p>

      <form action={createCategory} style={{ display: "flex", gap: 8, margin: "16px 0" }}>
        <input name="name" placeholder="Nombre de la categoría" required style={{ padding: 6 }} />
        <button type="submit">Agregar</button>
      </form>

      <table cellPadding={8} style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr style={{ textAlign: "left", borderBottom: "1px solid #eee" }}>
            <th>Nombre</th>
            <th>Slug</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {categories?.map((category) => (
            <tr key={category.id} style={{ borderBottom: "1px solid #f3f3f3" }}>
              <td>{category.name}</td>
              <td>{category.slug}</td>
              <td>
                <form action={deleteCategory.bind(null, category.id)}>
                  <button type="submit">Eliminar</button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
