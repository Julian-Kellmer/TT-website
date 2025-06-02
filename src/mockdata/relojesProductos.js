import {
  COLOR_AMARILLO,
  COLOR_GRIS,
  COLOR_NEGRO,
  COLOR_PLATA,
  COLOR_ROSA,
  TYPE_WATCH_SE,
  TYPE_WATCH_SERIE_10,
  TYPE_WATCH_ULTRA,
} from '../constantes/watch.js'

export const relojesProductos = [
  {
    id: 'apple-watch',
    name: 'Apple watch SE',
    Type: TYPE_WATCH_SE,
    category: 'relojes',
    brand: 'Apple',
    desc: 'El Apple Watch SE (2022) ofrece las funciones esenciales de salud, seguridad y conectividad de Apple en un diseño liviano y moderno. Disponible en tamaños de 40 mm y 44 mm, es compatible con watchOS 9 y versiones posteriores, brindando una experiencia fluida y actualizada.​​',
    descSpecs: [
      {
        title: 'Altavoces',
        desc: '11 amplificadores digitales de clase D, incluidos 8 woofers elípticos y 3 tweeters con cúpula de seda orientados hacia arriba para un sonido envolvente.',
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
        ram: [''],
      },
      {
        color: [COLOR_GRIS, COLOR_AMARILLO, COLOR_NEGRO],
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
    id: 'apple-watch-Serie-10',
    name: 'Apple watch Serie 10',
    Type: TYPE_WATCH_SERIE_10,
    category: 'relojes',
    brand: 'Apple',
    desc: 'El Apple Watch Series 10 combina un diseño delgado con una pantalla grande y brillante. Incorpora sensores de temperatura del agua y profundímetro, además de detección del sueño. Ideal para quienes buscan salud, conectividad y rendimiento en un solo reloj.​​',
    descSpecs: [
      {
        title: 'Altavoces',
        desc: '11 amplificadores digitales de clase D, incluidos 8 woofers elípticos y 3 tweeters con cúpula de seda orientados hacia arriba para un sonido envolvente.',
      },
      {
        title: 'Sensores',
        desc: 'Frecuencia cardíaca óptica y eléctrica (ECG),Oxígeno en sangre (SpO₂), Temperatura corporal y del agua, Profundímetro,Acelerómetro de alta fuerza g (hasta 256 g), Giroscopio mejorado,Altímetro siempre activo, BrújulaSensor de luz ambiental',
      },
      {
        title: 'sistema',
        desc: 'Windows 11 Home x64 bits, preinstalado.',
      },
    ],
    techSpecs: [
      {
        ram: [''],
      },
      {
        color: [COLOR_NEGRO, COLOR_ROSA, COLOR_PLATA],
      },
      {
        storage: ['32GB'],
      },
      {
        chip: [' Apple S10 SiP de doble núcleo '],
      },
      {
        process: [' 13th Gen Intel® Core™ i7-1355U, '],
      },
      {
        pantalla: [' 42mm ', ' 46mm '],
      },
    ],
    price: 123345,
    image: ['/images/macbook.png'],
  },
  {
    id: 'apple-watch-ultra',
    name: 'Apple watch ultra',
    Type: TYPE_WATCH_ULTRA,
    category: 'relojes',
    brand: 'Apple',
    desc: 'El Apple Watch Ultra es un reloj inteligente que cuenta con un diseño resistente y duradero, con características adecuadas para senderismo, buceo y carreras. Ofrece una pantalla más grande y brillante, resistencia al agua hasta 100 metros y una impresionante duración de batería de hasta 60 horas en modo de bajo consumo. Las funcionalidades avanzadas incluyen GPS de doble frecuencia para un seguimiento preciso, rastreo de rutas virtuales y una sirena de emergencia. ​',
    descSpecs: [
      {
        title: 'Altavoces',
        desc: '11 amplificadores digitales de clase D, incluidos 8 woofers elípticos y 3 tweeters con cúpula de seda orientados hacia arriba para un sonido envolvente.',
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
        ram: [''],
      },
      {
        color: [COLOR_NEGRO, COLOR_ROSA, COLOR_PLATA],
      },
      {
        storage: ['32GB'],
      },
      {
        chip: [' Apple S10 SiP de doble núcleo '],
      },
      {
        process: [' 13th Gen Intel® Core™ i7-1355U, '],
      },
      {
        pantalla: [' 42mm ', ' 46mm '],
      },
    ],
    price: 123345,
    image: ['/images/macbook.png'],
  },
]
