// Productos de una categoría, leídos de la base de Supabase de Tengo Todo Tecno.
// (Antes salían de la planilla de Google vía opensheet.)
import { getProductosPorCategoria } from './tiendaDb'

export async function getProducts({ category }) {
  return getProductosPorCategoria(category)
}
