import { login } from "./actions";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <main style={{ maxWidth: 360, margin: "80px auto", fontFamily: "sans-serif" }}>
      <h1>Panel admin</h1>
      <form action={login}>
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          required
          style={{ width: "100%", padding: 8, marginBottom: 12, boxSizing: "border-box" }}
        />
        <button type="submit" style={{ width: "100%", padding: 8 }}>
          Entrar
        </button>
      </form>
      {error && <p style={{ color: "crimson" }}>Contraseña incorrecta.</p>}
    </main>
  );
}
