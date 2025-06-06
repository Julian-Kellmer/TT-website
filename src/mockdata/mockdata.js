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
import {
  TYPE_PENCIL,
  TYPE_MAGIC_TRACKPAD,
  TYPE_AIR_TAG,
  TYPE_APPLE_TV,
  TYPE_MAGIC_KEYBOARD,
  TYPE_MAGIC_MOUSE,
  TYPE_CARGADOR,
  TYPE_ADAPTADOR,
} from '../constantes/accesorios'
import { TYPE_4GEN, TYPE_PRO2, TYPE_MAX } from '../constantes/airpods'
import { BRAND_PS5, BRAND_METAQUEST } from '../constantes/consolas'
import {
  BRAND_DELL,
  BRAND_ACEMAGICAN,
  BRAND_ASUS,
  BRAND_HP,
  BRAND_LENOVO,
  SIZE_PC,
  SIZE_MINI,
} from '../constantes/escritorio'
import {
  TYPE_AIR,
  TYPE_PRO,
  TYPE_GENERACION,
  CHIP_M2,
  CHIP_M3,
  STORAGE_64GB,
  STORAGE_128GB,
  STORAGE_256GB,
  STORAGE_512GB,
  STORAGE_1TB,
} from '../constantes/ipad'
import {
  TYPE_STUDIO_DISPLAY,
  TYPE_IMAC,
  TYPE_MAC_STUDIO,
  TYPE_MAC_MINI,
  CHIP_M4_PRO,
  CHIP_M4,
} from '../constantes/mac'
import {
  TYPE_GAMER,
  TYPE_NOTEBOOK,
  RAM_8GB,
  RAM_16GB,
  RAM_32GB,
  RAM_64GB,
  CHIP_INTEL_I5,
  CHIP_INTEL_I7,
  CHIP_INTEL_I9,
  CHIP_RYZEN_5,
  CHIP_RYZEN_7,
  CHIP_RYZEN_9,
  CHIP_SNAPDRAGON,
  BRAND_ACER,
  BRAND_SAMSUNG,
  BRAND_MSI,
  SCREEN_13,
  SCREEN_14,
  SCREEN_15,
  SCREEN_16,
  SCREEN_17,
} from '../constantes/notebook'
import {
  BRAND_JBL,
  BRAND_SONOS,
  TYPE_BARRAS_DE_SONIDO,
  TYPE_PORTATILES,
  TYPE_SUB_WOOFERS,
  TYPE_SISTEMAS_DE_AUDIO,
} from '../constantes/parlantes'
import {
  TYPE_WATCH_SE,
  TYPE_WATCH_SERIE_10,
  TYPE_WATCH_ULTRA,
} from '../constantes/watch.js'

export const macbookObjeto = {
  img: '/images/categorias/macbook.png',
  titulo: 'macbook',
  filtros: {
    type: ['PRO', 'AIR'],
    chip: ['M1', 'M2', 'M3', 'M4', 'M4_PRO_&_MAX', 'M2_PRO', 'M3_PRO_&_MAX'],
    size: [
      '13,3_PULGADAS',
      '13,6_PULGADAS',
      '14,2_PULGADAS',
      '15,3_PULGADAS',
      '16,3_PULGADAS',
    ],
  },
  productos: macbooksProductos,
}
export const parlanteObjeto = {
  img: '/images/categorias/parlante.png',
  titulo: 'parlantes',
  filtros: {
    type: ['BARRAS_DE_SONIDO', 'PORTATILES', 'SUB_WOOFER', 'SISTEMAS_DE_AUDIO'],
    brand: [BRAND_JBL, BRAND_SONOS],
  },
  productos: parlantesProductos,
}

export const escritorioObjeto = {
  img: '/images/categorias/escritorio.png',
  titulo: 'escritorio',
  filtros: {
    brand: [BRAND_DELL, BRAND_ACEMAGICAN, BRAND_ASUS, BRAND_HP, BRAND_LENOVO],
    type: [SIZE_PC, SIZE_MINI],
  },

  productos: escritorioProductos,
}

export const notebookObjeto = {
  img: '/images/categorias/notebook.png',
  titulo: 'notebooks',
  filtros: {
    brand: [
      BRAND_DELL,
      BRAND_HP,
      BRAND_ASUS,
      BRAND_LENOVO,
      BRAND_ACER,
      BRAND_SAMSUNG,
      BRAND_MSI,
      'MICROSOFT',
      'ACEMAGICAN',
    ],
    type: [TYPE_GAMER, TYPE_NOTEBOOK],
    storage: ['2TB', '1TB', '512GB', '256GB'],
    ram: [RAM_8GB, RAM_16GB, RAM_32GB, RAM_64GB],
    chip: [
      CHIP_INTEL_I5,
      CHIP_INTEL_I7,
      CHIP_INTEL_I9,
      'RYZEN_5',
      CHIP_RYZEN_7,
      CHIP_RYZEN_9,
      CHIP_SNAPDRAGON,
      'INTEL_ULTRA_5',
      'INTEL_ULTRA_7',
      'INTEL_ULTRA_9',
      'SNAPDRAGON_PLUS',
      'SNAPDRAGON_ELITE',
    ],
  },
  productos: notebookProductos,
}

export const ipadObjeto = {
  img: '/images/categorias/ipad.png',
  titulo: 'ipad',
  filtros: {
    type: [TYPE_AIR, TYPE_PRO, TYPE_GENERACION],
    chip: [CHIP_M2, CHIP_M3, CHIP_M4],
  },
  productos: ipadProductos,
}
export const macObjeto = {
  img: '/images/categorias/Mac-Mini.png',
  titulo: 'mac',
  filtros: {
    type: ['STUDIO_DISPLAY', TYPE_IMAC, TYPE_MAC_STUDIO, TYPE_MAC_MINI],
    chip: [CHIP_M4_PRO, CHIP_M3, CHIP_M4],
  },
  productos: macProductos,
}

export const consolasObjeto = {
  img: '/images/categorias/PS5.png',
  titulo: 'consolas',
  filtros: { brand: [BRAND_PS5, BRAND_METAQUEST] },
  productos: consolasProductos,
}

export const relojesObjeto = {
  img: '/images/categorias/apple-watch.png',
  titulo: 'applewatch',
  filtros: { type: [TYPE_WATCH_SE, TYPE_WATCH_SERIE_10, TYPE_WATCH_ULTRA] },
  productos: relojesProductos,
}

export const accesoriosObjeto = {
  img: '/images/categorias/Accesorios.png',
  titulo: 'accesorios',
  filtros: {
    type: [
      TYPE_MAGIC_TRACKPAD,
      TYPE_AIR_TAG,
      TYPE_APPLE_TV,
      TYPE_MAGIC_KEYBOARD,
      TYPE_MAGIC_MOUSE,
      TYPE_CARGADOR,
      TYPE_ADAPTADOR,
      TYPE_PENCIL,
    ],
  },
  productos: accesoriosProductos,
}

export const airpodsObjeto = {
  img: '/images/categorias/airpods.png',
  titulo: 'airpods',
  filtros: { type: [TYPE_4GEN, TYPE_PRO2, TYPE_MAX] },
  productos: airpodsProductos,
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
