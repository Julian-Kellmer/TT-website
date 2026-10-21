// Conexión a la base de datos nueva de Tengo Todo Tecno (Supabase, proyecto qnhsrnglvaunsayzempx).
// Se lee por la API REST con la publishable key (es pública: solo permite lo que dejan las políticas RLS).
// Si algún día cambia el proyecto, alcanza con definir estas dos variables de entorno en Netlify.
const SUPABASE_URL =
  process.env.NEXT_PUBLIC_TTT_SUPABASE_URL ||
  'https://qnhsrnglvaunsayzempx.supabase.co'
const SUPABASE_KEY =
  process.env.NEXT_PUBLIC_TTT_SUPABASE_KEY ||
  'sb_publishable__u4mfJrui427_nVmAV5MfA_vBvrpes0'

// Cada cuántos segundos Next vuelve a pedir los datos a Supabase.
const REVALIDATE_SECONDS = 300

// Categorías de la página (las del menú, en mockdata.js) → valores de "categoria" en la base.
export const CATEGORIAS = {
  macBook: ['MacBook'],
  notebooks: ['Windows Laptop', 'Windows Gamer'],
  ipad: ['Ipad'],
  macs: ['Imac - Mini - Studio'],
  iphone: ['Iphone'],
  parlantes: ['Parlantes'],
  airPods: ['AirPods'],
  appleWatch: ['Watch'],
  consolas: ['Consolas'],
  accesorios: ['Accesorios'],
  escritorio: [],
}

// Categoría de la base → categoría de la página (para armar los links).
function slugDeCategoria(categoriaDb) {
  const entrada = Object.entries(CATEGORIAS).find(([, valores]) =>
    valores.includes(categoriaDb)
  )
  return entrada ? entrada[0] : categoriaDb
}

async function consultar(path) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
    headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}` },
    next: { revalidate: REVALIDATE_SECONDS },
  })
  if (!res.ok) {
    throw new Error(`Supabase respondió ${res.status} en ${path}: ${await res.text()}`)
  }
  return res.json()
}

async function getConfig() {
  const filas = await consultar('config?select=margen_base_pct,usd_rate&limit=1')
  return filas[0] || { margen_base_pct: 0, usd_rate: null }
}

const CAMPOS =
  'id,modelo,marca,categoria,tamano,specs,colores,costo_usd,precio_override_usd,imagen_url,destacado,orden,ram_gb,almacenamiento_gb,pantalla_in'

function formatearUsd(valor) {
  if (valor == null || Number.isNaN(valor)) return null
  return `USD ${Math.round(valor).toLocaleString('es-AR')}`
}

function formatearAlmacenamiento(gb) {
  if (!gb) return undefined
  return gb >= 1024 ? `${gb / 1024}TB` : `${gb}GB`
}

// Convierte una fila de la base al formato que ya usan los componentes de la tienda.
function mapearProducto(fila, config) {
  const margen = Number(config.margen_base_pct) || 0
  const precioUsd =
    fila.precio_override_usd != null
      ? Number(fila.precio_override_usd)
      : fila.costo_usd != null
      ? Number(fila.costo_usd) * (1 + margen / 100)
      : null
  const price = formatearUsd(precioUsd) || 'Consultar precio'

  const colores = (fila.colores || '')
    .split(/\s+-\s+|,/)
    .map((c) => c.trim())
    .filter(Boolean)

  const specs = (fila.specs || '').trim()
  const descSpecs = []
  if (specs) descSpecs.push({ title: 'Especificaciones', desc: specs })
  if (colores.length) descSpecs.push({ title: 'Colores', desc: colores.join(' · ') })

  return {
    id: fila.id,
    name: fila.modelo,
    brand: fila.marca || '',
    category: slugDeCategoria(fila.categoria),
    type:
      fila.categoria === 'Windows Gamer'
        ? 'GAMER'
        : fila.categoria === 'Windows Laptop'
        ? 'NOTEBOOK'
        : undefined,
    desc: specs || fila.modelo || '',
    descSpecs,
    // Si hay más de un color, se ofrecen como opciones en la ficha (y viajan en el mensaje de WhatsApp).
    techSpecs: colores.length > 1 ? colores.map((color) => ({ color, price })) : [],
    price,
    precioUsd,
    size: fila.pantalla_in ? `${Number(fila.pantalla_in)}"` : fila.tamano || undefined,
    ram: fila.ram_gb ? `${fila.ram_gb}GB` : undefined,
    storage: formatearAlmacenamiento(fila.almacenamiento_gb),
    destacado: !!fila.destacado,
    image: fila.imagen_url ? [fila.imagen_url] : [],
  }
}

function filtroIn(valores) {
  const lista = valores.map((v) => `"${v.replace(/"/g, '\\"')}"`).join(',')
  return encodeURIComponent(`(${lista})`)
}

export async function getProductosPorCategoria(slug) {
  const valores = CATEGORIAS[slug] ?? [slug]
  if (valores.length === 0) return []

  const [config, filas] = await Promise.all([
    getConfig(),
    consultar(
      `products?select=${CAMPOS}&activo=eq.true&categoria=in.${filtroIn(valores)}&order=orden.asc,modelo.asc`
    ),
  ])
  return filas.map((fila) => mapearProducto(fila, config))
}

export async function getProductosDestacados() {
  const [config, filas] = await Promise.all([
    getConfig(),
    consultar(
      `products?select=${CAMPOS}&activo=eq.true&destacado=eq.true&order=orden.asc,modelo.asc`
    ),
  ])
  return filas.map((fila) => mapearProducto(fila, config))
}
