// Cliente para lecturas públicas (tienda: listado de productos, categorías, etc.)
// Usa la publishable/anon key — es seguro usarlo en el navegador.
import { createClient } from "@supabase/supabase-js";
import type { Database } from "./types";

export function createPublicClient() {
  return createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

// Arma la URL pública de una foto de producto a partir de su storage_path
// (el valor que se guarda en la tabla product_images).
export function getProductImageUrl(storagePath: string): string {
  const base = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  return `${base}/storage/v1/object/public/product-images/${storagePath}`;
}
