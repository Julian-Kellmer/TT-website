import { BRAND_PS5, BRAND_METAQUEST } from '../constantes/consolas'
export const ConsolasProductos = [
  {
    id: 'Joystick-DualSense-PS5 ',
    name: 'Joystick DualSense PS5 ',
    category: 'console',
    brand: BRAND_PS5,
    desc: 'El DualSense es el controlador oficial de la PlayStation 5, diseñado para ofrecer una experiencia de juego más inmersiva y sensorial. Con innovaciones como la retroalimentación háptica y los gatillos adaptativos, transforma la manera en que los jugadores interactúan con los videojuegos, proporcionando sensaciones realistas que reflejan las acciones en pantalla. ',
    descSpecs: [
      {
        title: 'Retroalimentación háptica',
        desc: 'Proporciona vibraciones precisas que simulan sensaciones táctiles del juego, como la resistencia de diferentes superficies o el impacto de acciones específicas',
      },
      {
        title: 'Gatillos adaptativos (L2 y R2',
        desc: ' Ofrecen resistencia variable según las acciones del juego, como tensar una cuerda o frenar un vehículo, aumentando la inmersión.',
      },
      {
        title: 'Diseño ergonómico',
        desc: 'Más grande y redondeado que su predecesor, el DualShock 4, para un agarre más cómodo durante sesiones prolongadas.',
      },
      {
        title: 'Botón "Crear"',
        desc: 'Sustituye al botón "Compartir", permitiendo capturar y transmitir contenido de manera más intuitiva.',
      },
      {
        title: 'Conectividad',
        desc: 'Puerto USB-C para carga rápida, conector de audio de 3.5 mm y conectividad Bluetooth para uso inalámbrico.',
      },
      {
        title: 'Micrófono y altavoz integrados',
        desc: 'Permiten comunicación sin necesidad de auriculares adicionales. ​',
      },
      {
        title: 'Batería recargable',
        desc: 'Incorpora una batería de 1560 mAh que ofrece varias horas de juego continuo.',
      },
    ],
    techSpecs: [
      {
        color: [
          'Blanco',
          'Negro',
          'Rojo',
          'Púrgpura',
          'Azul',
          'Rosa',
          'Camuflaje',
        ],
      },
    ],
    price: 123456789,
    image: [
      '/images/macbook.png',
      '/images/macbook.png',
      '/images/macbook.png',
    ],
  },
  {
    id: 'Meta-Quest-3S ',
    name: 'Meta Quest 3S ',
    category: 'console',
    brand: BRAND_METAQUEST,
    descSpecs: [
      {
        title: 'Procesador',
        desc: 'Snapdragon XR2 Gen 2',
      },
      {
        title: 'Pantalla',
        desc: ' LCD 1832×1920 por ojo – 90/120 Hz',
      },
      {
        title: 'Lentes',
        desc: 'Fresnel',
      },
      {
        title: 'Campo de visión',
        desc: '96° H / 90° V',
      },
      {
        title: 'Cámaras',
        desc: 'RGB 4 MP + infrarrojas',
      },
      {
        title: 'Audio',
        desc: '​Altavoces integrados',
      },
      {
        title: 'Conectividad',
        desc: 'Wi-Fi 6E / Bluetooth 5.2',
      },
      {
        title: 'Controladores',
        desc: 'Touch Plus',
      },
      {
        title: 'Peso',
        desc: '514 G',
      },
      {
        title: 'Batería',
        desc: '4324 mAh (hasta 2.5 hs de uso',
      },
      {
        title: 'Compatibilidad',
        desc: 'Juegos Quest 2 y Quest 3',
      },
      {
        title: 'Sistema',
        desc: 'Meta Horizon OS (Android)',
      },
    ],
    techSpecs: [
      {
        storage: ['128 GB', '256 GB'],
      },
      {
        Ram: ['8 GB'],
      },
      {
        process: ['Snapdragon XR2 Gen 2'],
      },
    ],
    price: 123345,
    image: ['/images/macbook.png'],
  },
  {
    id: 'PS5',
    name: 'PlayStation 5',
    category: 'console',
    brand: BRAND_PS5,
    descSpecs: [
      {
        title: 'Gráficos (GPU)',
        desc: 'AMD RDNA 2 personalizada, 10.28 TFLOPs, 36 unidades de cómputo a 2.23 GHz (frecuencia variable), con soporte para ray tracing.',
      },
      {
        title: 'Unidad Óptica',
        desc: '  Lector Ultra HD Blu-ray 4K (solo modelo base, no en Digital Edition).Pantalla y Salida: Soporte para resoluciones hasta 8K (requiere actualización de firmware), 4K a 120 Hz, HDR, y HDMI 2.1',
      },
      {
        title: 'Audio',
        desc: 'Tecnología Tempest 3D AudioTech para sonido inmersivo 360°',
      },
      {
        title: 'Conectividad',
        desc: 'Wi-Fi 6 (802.11ax), Bluetooth 5.1, Gigabit Ethernet, 1 puerto USB-C (3.1 Gen 2), 1 puerto USB-A (2.0) en la parte frontal, 2 puertos USB-A (3.1 Gen 2) en la parte trasera.',
      },
      {
        title: 'Controlador',
        desc: 'DualSense inalámbrico con retroalimentación háptica, gatillos adaptativos, micrófono integrado y puerto USB-C',
      },
      {
        title: 'Dimensiones y Peso',
        desc: '​Modelo con disco: 390 x 104 x 260 mm, 4.5 kg. Digital Edition: 390 x 92 x 260 mm, 3.9 kg.',
      },
      {
        title: 'Sistema Operativo',
        desc: 'Software propietario basado en FreeBSD, con interfaz optimizada y compatibilidad con juegos de PS4 (99% de los títulos).',
      },
      {
        title: 'Consumo Energético',
        desc: 'Aproximadamente 180 W (máximo).',
      },
    ],
    techSpecs: [
      {
        ram: ['16 GB'],
      },
      {
        color: [],
      },
      {
        storage: ['825 GB'],
      },
      {
        chip: ['Lector Edition', 'Digital Edition'],
      },
      {
        process: ['AMD Ryzen zen 2'],
      },
      {
        pantalla: [],
      },
    ],
    price: 123345,
    image: ['/images/macbook.png'],
  },
]
export default ConsolasProductos
