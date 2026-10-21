// "Más vendidos" = productos marcados como destacados en la base de Supabase.
import { getProductosDestacados } from './tiendaDb'

export async function getMasVendidos() {
  return getProductosDestacados()
}
