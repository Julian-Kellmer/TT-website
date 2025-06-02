import {
  TYPE_STUDIO_DISPLAY,
  TYPE_IMAC,
  TYPE_MAC_STUDIO,
  TYPE_MAC_MINI,
  CHIP_M4_PRO,
  CHIP_M3,
  CHIP_M4,
} from '../constantes/mac'
export const macProductos = [
  {
    id: 'apple-studio-display',
    name: 'Apple Studio Display ',
    type: TYPE_STUDIO_DISPLAY,
    category: 'mac',
    brand: 'Apple',
    desc: 'El Apple Studio Display es un monitor de alta gama que combina una impresionante pantalla 5K Retina de 27" con tecnologías avanzadas de audio y video. Diseñado para profesionales creativos y usuarios exigentes, ofrece una integración perfecta con dispositivos Mac, brindando una experiencia visual y sonora envolvente. Su diseño elegante y minimalista, junto con opciones de montaje versátiles, lo convierten en una opción ideal para cualquier espacio de trabajo moderno.​​​​',
    descSpecs: [
      {
        title: 'Tamaño',
        desc: 'Tamaño de pantalla: 27 pulgadas (68,58 cm) en diagonal',
      },
      {
        title: 'extras',
        desc: 'Integrated FHD 1080p Webcam, Dual array microphone, Dell Pro Wireless White Keyboard + Wireless White Mouse',
      },
      {
        title: 'sistema',
        desc: 'Windows 11 Home x64 bits, preinstalado.',
      },
    ],
    techSpecs: [
      {
        ram: [],
      },
      {
        color: [],
      },
      {
        storage: ['32GB'],
      },
      {
        chip: [' Apple S8 SiP'],
      },
      {
        process: [' 13th Gen Intel® Core™ i7-1355U, '],
      },
      {
        pantalla: [' 44mm ', ' 40mm '],
      },
    ],
    price: 123345,
    image: ['/images/macbook.png'],
  },
  {
    id: 'apple-imac-m3',
    name: 'iMac 24" (M3)',
    type: TYPE_IMAC,
    chip: CHIP_M3,
    category: 'mac',
    brand: 'Apple',
    desc: 'iMac de 24" con chip M3 combina un diseño elegante con un rendimiento potente gracias al chip Apple M3. Ofrece una experiencia visual impresionante con su pantalla Retina 4.5K, ideal para tareas creativas y profesionales. Su sistema de audio avanzado y la cámara FaceTime HD mejoran la comunicación y el entretenimiento. Con opciones de conectividad modernas y un rendimiento eficiente, es una excelente opción para usuarios que buscan un equipo todo en uno versátil y potente.​​​​​',
    descSpecs: [
      {
        title: 'Tamaño',
        desc: 'Tamaño de pantalla: 27 pulgadas (68,58 cm) en diagonal',
      },
      {
        title: 'extras',
        desc: 'Integrated FHD 1080p Webcam, Dual array microphone, Dell Pro Wireless White Keyboard + Wireless White Mouse',
      },
      {
        title: 'sistema',
        desc: 'Windows 11 Home x64 bits, preinstalado.',
      },
    ],
    techSpecs: [
      {
        ram: ['8', '16', '32'],
      },
      {
        color: ['Plata', 'verde', 'rosa'],
      },
      {
        storage: ['32GB', ''],
      },

      {
        process: [' 8 nucleos', '10 nucleos'],
      },
      {
        pantalla: [' 44mm ', ' 40mm '],
      },
    ],
    price: 123345,
    image: ['/images/macbook.png'],
  },
  {
    id: 'apple-imac-m4',
    name: 'iMac 24" (M4)',
    type: TYPE_IMAC,
    chip: CHIP_M4,
    category: 'imac',
    brand: 'Apple',
    desc: 'iMac de 24" con chip M4 combina un diseño elegante con un rendimiento potente gracias al chip Apple M3. Ofrece una experiencia visual impresionante con su pantalla Retina 4.5K, ideal para tareas creativas y profesionales. Su sistema de audio avanzado y la cámara FaceTime HD mejoran la comunicación y el entretenimiento. Con opciones de conectividad modernas y un rendimiento eficiente, es una excelente opción para usuarios que buscan un equipo todo en uno versátil y potente.​​​​​',
    descSpecs: [
      {
        title: 'Tamaño',
        desc: 'Tamaño de pantalla: 27 pulgadas (68,58 cm) en diagonal',
      },
      {
        title: 'extras',
        desc: 'Integrated FHD 1080p Webcam, Dual array microphone, Dell Pro Wireless White Keyboard + Wireless White Mouse',
      },
      {
        title: 'sistema',
        desc: 'Windows 11 Home x64 bits, preinstalado.',
      },
    ],
    techSpecs: [
      {
        ram: ['8', '16', '32'],
      },
      {
        color: ['Plata', 'verde', 'rosa'],
      },
      {
        storage: ['32GB', ''],
      },

      {
        process: [' 8 nucleos', '10 nucleos'],
      },
      {
        pantalla: [' 44mm ', ' 40mm '],
      },
    ],
    price: 123345,
    image: ['/images/macbook.png'],
  },
  {
    id: 'apple-imac-mini',
    name: 'Apple Mac mini (M4)',
    type: TYPE_MAC_MINI,
    chip: CHIP_M4,
    category: 'mac',
    brand: 'Apple',
    desc: 'Mac mini con chip M4 combina un diseño compacto y elegante con un rendimiento potente gracias al chip Apple M4. Ofrece una experiencia fluida para tareas diarias y profesionales, con soporte para múltiples pantallas y conectividad avanzada. Su diseño ecológico y eficiencia energética lo convierten en una opción ideal para usuarios que buscan un equipo de escritorio versátil y sostenible.',
    descSpecs: [
      {
        title: 'Tamaño',
        desc: 'Tamaño de pantalla: 27 pulgadas (68,58 cm) en diagonal',
      },
      {
        title: 'extras',
        desc: 'Integrated FHD 1080p Webcam, Dual array microphone, Dell Pro Wireless White Keyboard + Wireless White Mouse',
      },
      {
        title: 'sistema',
        desc: 'Windows 11 Home x64 bits, preinstalado.',
      },
    ],
    techSpecs: [
      {
        ram: ['8', '16', '32'],
      },
      {
        color: ['Plata', 'verde', 'rosa'],
      },
      {
        storage: ['32GB'],
      },
      {
        process: [' 8 nucleos', '10 nucleos'],
      },
      {
        pantalla: [' 44mm ', ' 40mm '],
      },
    ],
    price: 123345,
    image: ['/images/macbook.png'],
  },
]
