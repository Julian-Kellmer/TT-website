// Genera el token de sesión del panel admin a partir de ADMIN_SESSION_SECRET.
// Usa Web Crypto (crypto.subtle) para que funcione tanto en el middleware (Edge)
// como en las Server Actions (Node).
const encoder = new TextEncoder();

export async function getSessionToken(): Promise<string> {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) {
    throw new Error(
      "Falta la variable de entorno ADMIN_SESSION_SECRET. Generá una con: openssl rand -hex 32"
    );
  }

  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode("admin-session"));

  return Array.from(new Uint8Array(signature))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}
