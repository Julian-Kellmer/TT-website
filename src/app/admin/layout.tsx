import Link from "next/link";
import { logout } from "./login/actions";
import "./admin.css";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="admin-panel" style={{ fontFamily: "sans-serif" }}>
      <nav
        style={{
          display: "flex",
          gap: 16,
          padding: 16,
          borderBottom: "1px solid #eee",
          alignItems: "center",
        }}
      >
        <Link href="/admin/productos">Productos</Link>
        <Link href="/admin/categorias">Categorías</Link>
        <form action={logout} style={{ marginLeft: "auto" }}>
          <button type="submit">Cerrar sesión</button>
        </form>
      </nav>
      <main style={{ padding: 24 }}>{children}</main>
    </div>
  );
}
