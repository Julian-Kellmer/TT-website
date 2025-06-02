import { accesoriosProductos } from './accesoriosProductos'
import consolasProductos from './consolasProductos'
import { parlantesProductos } from './parlantesProductos'
import { escritorioProductos } from './escritorioProductos'
import { relojesProductos } from './relojesProductos'
import airpodsProductos from './airPodsProductos'
import { macProductos } from './macProductos'
import macbooksProductos from './macbooksProductos'
import notebookProductos from './notebooksProductos'
import ipadProductos from './ipadProductos'

export const MasVendidos = [
  {
    id: 'prod001',
    title: 'Auriculares Bluetooth In-ear F9-5',
    desc: 'Auriculares inalámbricos con tecnología Bluetooth 5.0, diseño ergonómico y estuche de carga portátil.',
    img: '/images/airpods.png',
  },
  {
    id: 'prod002',
    title: 'Macbook Pro 14 M2 Pro',
    desc: 'Auriculares inalámbricos con sonido de alta calidad, resistencia al agua y batería de larga duración.',
    img: '/images/macbook.png',
  },
  {
    id: 'prod003',
    title: 'PlayStation 5',
    desc: 'Auriculares supraaurales con sonido JBL Pure Bass, conexión multipunto y hasta 57 horas de batería.',
    img: '/images/PS5.png',
  },
  {
    id: 'prod004',
    title: 'Smartwatch Apple Watch Series 9',
    desc: 'Reloj inteligente con pantalla siempre activa, sensores avanzados de salud y chip S9 para un rendimiento superior.',
    img: '/images/apple-watch.png',
  },
  {
    id: 'prod007',
    title: 'Imac mini',
    desc: 'Consola híbrida con pantalla OLED de 7 pulgadas, colores vibrantes y sonido mejorado para una experiencia de juego inmersiva.',
    img: '/images/MacMini.png',
  },
  {
    id: 'prod008',
    title: 'Parlante Sony Sonos',
    desc: 'Auriculares premium con audio espacial, cancelación activa de ruido y hasta 30 horas de batería para una experiencia auditiva superior.',
    img: '/images/parlante.png',
  },
]
// a partir de aca es la real no fake lista lo de arriba es caca

export const macbookObjeto = {
  img: '/images/macbook.png',
  titulo: 'macbooks',
  filtros: { nombre: 'TIPO', type: ['pro', 'air'] },
  productos: macbooksProductos,
}
export const parlanteObjeto = {
  img: '/images/parlante.png',
  titulo: 'parlantes',
  filtros: {
    type: [
      'BARRAS-DE-SONIDO',
      'PORTATILES',
      'SISTEMAS-DE-AUDIO',
      'SUB-WOOFERS',
    ],
    brand: ['JBL', 'SONOS'],
  },
  productos: parlantesProductos,
}

export const escritorioObjeto = {
  img: '/images/escritorio.png',
  titulo: 'Pc-Escritorio',
  filtros: {
    brand: ['LENOVO', 'HP', 'DELL', 'ACEMAGICIAN', 'ASUS'],
  },
  productos: escritorioProductos,
}

export const notebookObjeto = {
  img: '/images/notebook.png',
  titulo: 'Notebooks',
  filtros: { brand: ['LENOVO', 'HP', 'ASUS', 'MICROSOFT'] },
  productos: notebookProductos,
}

export const ipadObjeto = {
  img: '/images/ipad.png',
  titulo: 'iPad',
  filtros: { type: ['AIR', 'PRO', 'GENERACION'], chip: ['M1', 'M2', 'M3'] },
  productos: ipadProductos,
}
export const macObjeto = {
  img: '/images/MacMini.png',
  titulo: 'Mac',
  filtros: { type: ['IMAC', 'MAC', 'SCREEN'], chip: ['M3', 'M4'] },
  productos: macProductos,
}

export const consolasObjeto = {
  img: '/images/PS5.png',
  titulo: 'consolas',
  filtros: { brand: [, 'PLAY STATION', 'GOOGLE', 'XBOX'] },
  productos: consolasProductos,
}

export const relojesObjeto = {
  img: '/images/apple-watch.png',
  titulo: 'Apple-Watch',
  filtros: { type: ['SE', 'SERIE-10', 'ULTRA-1', 'ULTRA-2'] },
  productos: relojesProductos,
}

export const airpodsObjeto = {
  img: '/images/airpods.png',
  titulo: 'airpods',
  filtros: { type: [, '4GEN', 'MAX', 'PRO-2'] },
  productos: airpodsProductos,
}

export const accesoriosObjeto = {
  img: '/images/Accesorios.png',
  titulo: 'accesorios',
  filtros: {
    type: [
      'ADAPTADOR',
      'AIRTAG',
      'APPLE-TV',
      'MAGIC-KEYBOARD',
      'MAGIC-MOUSE',
      'MAGIC-TRACKPAD',
      'PENCIL',
    ],
  },
  productos: accesoriosProductos,
}

export const Catalog = [
  macbookObjeto,
  parlanteObjeto,
  accesoriosObjeto,
  airpodsObjeto,
  ipadObjeto,
  macObjeto,
  notebookObjeto,
  escritorioObjeto,
  consolasObjeto,
  relojesObjeto,
]
