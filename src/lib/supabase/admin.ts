// Cliente con la service_role key: puede leer y escribir sin restricciones de RLS.
// SOLO se importa desde Server Actions / Route Handlers / Server Components.
// Nunca lo importes desde un archivo con "use client".
import { createClient } from "@supabase/supabase-js";
import type { Database } from "./types";

export function createAdminClient() {
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!serviceRoleKey) {
    throw new Error(
      "Falta SUPABASE_SERVICE_ROLE_KEY en las variables de entorno (Settings → API en Supabase)."
    );
  }

  return createClient<Database>(process.env.NEXT_PUBLIC_SUPABASE_URL!, serviceRoleKey, {
    auth: { persistSession: false },
  });
}
