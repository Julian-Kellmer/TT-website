import { TYPE_4GEN, TYPE_PRO2, TYPE_MAX } from '../constantes/airpods'
export const airPodsProductos = [
  {
    id: 'airpods-max',
    name: 'AirPods 4.ª Generación',
    Type: TYPE_4GEN,
    category: 'airpods',
    brand: 'Apple',
    desc: 'Los AirPods 4.ª generación ofrecen un diseño renovado con mejor ergonomía y calidad de sonido. Equipados con el chip H2 y Bluetooth 5.3, brindan una experiencia auditiva optimizada y una conectividad más estable. El estuche de carga, ahora un 10% más compacto, incluye puerto USB-C y proporciona hasta 30 horas de reproducción.​​​',
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
        color: ['Plata', 'Luz estelar', 'Medianoche'],
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
      {
        noiseCanceling: false,
      },
    ],
    price: 123345,
    image: ['/images/macbook.png'],
  },
  {
    id: 'aipods-4ta-gen',
    name: 'AirPods 4.ª Generación',
    Type: TYPE_4GEN,
    category: 'airpods',
    brand: 'Apple',
    desc: 'La versión con cancelación activa de ruido (ANC) de los AirPods 4.ª generación ofrece una experiencia auditiva más inmersiva, reduciendo eficazmente el ruido ambiental sin necesidad de almohadillas. Además, incluye un estuche de carga compatible con carga inalámbrica y con altavoz integrado para facilitar su localización mediante la función "Buscar".​',
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
        color: ['Plata', 'Luz estelar', 'Medianoche'],
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
      {
        noiseCanceling: true,
      },
    ],
    price: 123345,
    image: ['/images/macbook.png'],
  },
  {
    id: 'aipods-pro',
    name: 'AirPods PRO 2da Gen',
    Type: TYPE_PRO2,
    category: 'airpods',
    brand: 'Apple',
    desc: 'Los AirPods Pro (2.ª generación) ofrecen una experiencia auditiva superior con mejoras en calidad de sonido, cancelación activa de ruido (ANC) y nuevas funciones de accesibilidad. Equipados con el chip H2 y conectividad Bluetooth 5.3, brindan una conexión más estable y eficiente. El estuche de carga actualizado incluye puerto USB-C, resistencia al polvo y compatibilidad con la función "Buscar" gracias al chip U1.​​​',
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
        color: ['Gris', 'Plata', 'Azul', 'Verde', 'Rosado'],
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
]
export default airPodsProductos
