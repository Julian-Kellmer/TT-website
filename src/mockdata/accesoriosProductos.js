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

export const accesoriosProductos = [
  {
    id: 'pencil',
    name: 'Pencil USB-C',
    category: 'accesorios',
    brand: 'APPLE',
    desc: 'El Apple Pencil (USB-C) es la opción perfecta para quienes buscan precisión y una experiencia fluida al escribir, dibujar o editar en su iPad. Con conexión USB-C para carga y emparejamiento sin complicaciones, este lápiz digital ofrece una precisión milimétrica y una sensación natural, ideal para tareas creativas y profesionales.',
    type: TYPE_PENCIL,
    mostSell: true,
    descSpecs: [
      {
        title: 'Conexión USB-C',
        desc: 'Se enmpareja y carga mediante un cable USB-C, eliminando la necesidad de adaptadores.',
      },
      {
        title: 'Precisión y sencibilidad',
        desc: 'Ofrece una precisión en pixeles, baja latencia y sencibilidad a la inclinacion, brindando una experiencia natural al escribir o dibujar. ',
      },
      {
        title: 'Función de puntero flotante',
        desc: 'Al usarlo con iPad Pro de 12.9" (6ª generación) o iPad Pro de 11" (4ª generación), permite previsualizar el trazo antes de hacerlo .',
      },
      {
        title: 'Almacenamiento magnético',
        desc: ' Se adhiere magnéticamente al lateral del iPad para guardarlo y entrar en modo de reposo, conservando la batería.',
      },
    ],
    price: 123456789,
    image: ['/images/macbook.png'],
  },
  //Pencil segunda generacion
  {
    id: 'pencil-2nda',
    name: 'Pencil 2NDA Gen',
    category: 'accesorios',
    brand: 'Apple',
    type: TYPE_PENCIL,
    desc: 'El Apple Pencil de segunda generación es un lápiz digital avanzado diseñado para complementar los iPad compatibles, ofreciendo una experiencia de escritura y dibujo precisa y fluida.​',
    mostSell: false,
    descSpecs: [
      {
        title: 'Precisión y baja latencia',
        desc: 'Ideal para dibujar, tomar notas y editar documentos con una sensación natural',
      },
      {
        title: 'Superficie táctil',
        desc: ' Permite cambiar de herramienta con un doble toque. ',
      },
      {
        title: 'Carga y emparejamiento magnéticos',
        desc: 'Se acopla al lateral del iPad para cargar y sincronizar automáticamente.',
      },
      {
        title: 'Compatibilidad',
        desc: ' Funciona con modelos de iPad que admiten el Apple Pencil de segunda generación.',
      },
    ],
    price: 123456789,
    image: [
      '/images/macbook.png',
      '/images/macbook.png',
      '/images/macbook.png',
    ],
  },
  //Pencil segunda PRo
  {
    id: 'pencil-pro',
    name: 'Pencil Prp',
    category: 'accesorios',
    brand: 'Apple',
    type: TYPE_PENCIL,
    desc: 'El Apple Pencil Pro es la herramienta perfecta para creativos, ofreciendo precisión extrema y una experiencia fluida al dibujar, escribir o editar. Su diseño avanzado y funciones personalizables lo hacen ideal para profesionales que buscan un control total en sus iPads compatibles.',
    mostSell: false,
    descSpecs: [
      {
        title: 'Sensor de presión y sensibilidad a la inclinación',
        desc: 'Permite un control preciso del trazo, ideal para dibujar y escribir con naturalidad.',
      },
      {
        title: 'Gesto de apretón (Squeeze)',
        desc: ' Al presionar el cuerpo del lápiz, se activa un menú radial personalizable en pantalla para cambiar herramientas rápidamente',
      },
      {
        title: 'Gesto de rotación (Barrel Roll)',
        desc: 'Gracias a un giroscopio integrado, puedes rotar el lápiz para ajustar el ángulo de pinceles y otras herramientas digitales.',
      },
      {
        title: 'Respuesta háptica',
        desc: ' Proporciona retroalimentación táctil al realizar acciones como cambiar de herramienta o seleccionar elementos.',
      },
      {
        title: 'Integración con la app Buscar (Find My)',
        desc: ' Facilita la localización del lápiz en caso de extravío.',
      },
      {
        title: 'Carga y emparejamiento magnéticos',
        desc: 'Se acopla magnéticamente al lateral del iPad compatible para cargar y sincronizar automáticamente.',
      },
      {
        title: 'Compatibilidad',
        desc: 'iPad Pro de 11 pulgadas (M4),iPad Pro de 13 pulgadas (M4),iPad Air de 11 pulgadas (M2),iPad Air de 13 pulgadas (M2)',
      },
    ],
    price: 123456789,
    image: [
      '/images/macbook.png',
      '/images/macbook.png',
      '/images/macbook.png',
    ],
  },
  //magic mouse
  {
    id: 'magic-mouse',
    name: 'Magic Mouse 2',
    category: 'accesories',
    type: TYPE_MAGIC_MOUSE,
    brand: 'Apple',
    desc: 'El Apple Magic Mouse 2 es un mouse inalámbrico y recargable que ofrece una experiencia fluida y precisa, especialmente diseñado para integrarse perfectamente con dispositivos Apple.​',
    mostSell: false,
    descSpecs: [
      {
        title: 'Diseño elegante y minimalista',
        desc: 'Disponible en colores blanco y negro (gris espacial), con una superficie Multi-Touch que permite realizar gestos como desplazamiento y deslizamiento.',
      },
      {
        title: 'Conectividad inalámbrica',
        desc: 'Se conecta a través de Bluetooth y cuenta con un puerto Lightning para recarga',
      },
      {
        title: 'Batería recargable',
        desc: 'Ofrece una duración prolongada entre cargas, dependiendo del uso',
      },
      {
        title: 'Compatibilidad',
        desc: 'Funciona en Mac con Bluetooth y OS X 10.11 o posterior, y con iPad con iPadOS 13.4 posterior.',
      },
      {
        title: 'Dimensiones y Peso',
        desc: 'Alto: 2,16 cm, Ancho: 5,71cm, Profundidad: 11,35cm, Peso:99 g',
      },
    ],
    price: 123456789,
    image: [
      '/images/macbook.png',
      '/images/macbook.png',
      '/images/macbook.png',
    ],
  },
  //magic TrackaPAd
  {
    id: 'magic-trackpad',
    name: 'Apple Magic Trackpad',
    category: 'accesories',
    brand: 'Apple',
    type: TYPE_MAGIC_TRACKPAD,
    desc: 'El Apple Magic Trackpad es un dispositivo de entrada inalámbrico que ofrece una experiencia de navegación fluida y precisa, especialmente diseñado para integrarse perfectamente con dispositivos Apple.​',
    mostSell: false,
    descSpecs: [
      {
        title: 'Superficie Multi-Touch',
        desc: 'Permite realizar gestos como desplazamiento, deslizamiento y zoom, mejorando la interacción con macOS.',
      },
      {
        title: 'Force Touch',
        desc: 'Detecta diferentes niveles de presión, ofreciendo nuevas formas de interactuar con el contenido.',
      },
      {
        title: 'Diseño elegante y minimalista',
        desc: 'Disponible en colores blanco y negro (gris espacial), con una superficie de vidrio que se extiende hasta los bordes.',
      },
      {
        title: 'Conectividad inalámbrica',
        desc: 'Se conecta a través de Bluetooth y cuenta con un puerto Lightning para recarga.',
      },
      {
        title: 'Batería recargable',
        desc: 'Ofrece una duración prolongada entre cargas, dependiendo del uso.',
      },
      {
        title: 'Compatibilidad',
        desc: 'Funciona con Mac con Bluetooth y OS X 10.11 o posterior, y con iPad con iPadOS 13.4 o posterior.',
      },
      {
        title: 'Dimensiones y peso',
        desc: 'Alto: 0,49 a 1,09 cm,Ancho: 16,0 cm, Profundidad: 11,49 cm, Peso: 230 g​',
      },
    ],
    price: 123456789,
    image: [
      '/images/macbook.png',
      '/images/macbook.png',
      '/images/macbook.png',
    ],
  },
  //apple tv
  {
    id: 'apple-tv',
    name: 'Apple TV 4K',
    category: 'accesories',
    brand: 'Apple',
    type: TYPE_APPLE_TV,
    desc: 'El Apple TV 4K es el centro de entretenimiento definitivo para tu hogar, combinando streaming de alta calidad, gaming y control de dispositivos inteligentes en un diseño compacto y elegante. Con soporte para 4K HDR10+, Dolby Vision y Dolby Atmos, ofrece una experiencia visual y sonora inmersiva, ideal para disfrutar de Apple TV+, Netflix, o juegos de Apple Arcade. Su integración con HomeKit y Matter la convierte en un hub versátil para el hogar inteligente, mientras que el Siri Remote con USB-C asegura un control preciso y cómodo. ',
    mostSell: false,
    descSpecs: [
      {
        title: 'Resolución y formatos compatibles',
        desc: 'Hasta 4K a 60 fps, compatible con HDR10+, Dolby Vision y Dolby Atmos.',
      },
      {
        title: 'Procesador',
        desc: ' Chip A15 Bionic, que proporciona un rendimiento fluido y eficiente',
      },
      {
        title: 'Almacenamiento',
        desc: '64 GB en el modelo Wi-Fi, 128 GB en el modelo Wi-Fi + Ethernet',
      },
      {
        title: 'Conectividad',
        desc: 'Wi-Fi 6 (802.11ax) con MIMO 2x2,Bluetooth 5.0,HDMI 2.1., Puerto Ethernet',
      },
      {
        title: 'Control Remoto',
        desc: 'Apple TV Remote con conector USB-C para carga',
      },
      {
        title: 'Compatibilidad con redes Thread',
        desc: 'Disponible en el modelo Wi-Fi + Ethernet, lo que mejora la integración con dispositivos de hogar inteligente.',
      },
    ],
    price: 123456789,
    image: [
      '/images/macbook.png',
      '/images/macbook.png',
      '/images/macbook.png',
    ],
  },
  // magic keyboard
  {
    id: 'magic-keyboard-touchId-numeric',
    name: 'Magic Keyboard con Touch ID y teclado numérico',
    category: 'accesories',
    brand: 'Apple',
    type: TYPE_MAGIC_KEYBOARD,
    desc: 'El Apple Magic Keyboard con Touch ID y teclado numérico es un teclado inalámbrico diseñado para ofrecer una experiencia de escritura cómoda y precisa, integrándose perfectamente con los dispositivos Mac que cuentan con chip Apple Silicon.​',
    descSpecs: [
      {
        title: 'Diseño ampliado',
        desc: 'Incluye teclado numérico y teclas de flecha de tamaño completo, ideal para tareas que requieren navegación y entrada de datos numéricos.',
      },
      {
        title: 'Touch ID integrado',
        desc: 'Permite desbloquear el Mac, realizar compras con Apple Pay y acceder a configuraciones de seguridad mediante la huella digital. ',
      },
      {
        title: 'Conectividad',
        desc: 'Se conecta de forma inalámbrica a través de Bluetooth y cuenta con un puerto USB-C para recarga.',
      },
      {
        title: 'Compatibilidad',
        desc: 'Funciona con modelos de Mac que tienen chip Apple Silicon y ejecutan macOS 11.4 o posterior',
      },
      {
        title: 'Batería recargable',
        desc: 'Ofrece una duración prolongada entre cargas, dependiendo del uso',
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
    id: 'magic-keyboard-ipadAir-11',
    name: 'Magic Keyboard iPad Air 11" M2',
    category: 'accesories',
    brand: 'Apple',
    type: TYPE_MAGIC_KEYBOARD,
    desc: 'El Magic Keyboard para iPad Air es un accesorio premium que transforma tu iPad en una herramienta de productividad avanzada. Diseñado para ofrecer una experiencia de escritura cómoda y precisa, se integra perfectamente con las funciones de iPadOS.​',
    descSpecs: [
      {
        title: 'Diseño flotante magnético',
        desc: 'Permite ajustar el ángulo de visión de forma suave y precisa.',
      },
      {
        title: 'Teclado retroiluminado',
        desc: 'Con mecanismo de tijera y recorrido de 1 mm para una escritura silenciosa y ágil. ',
      },
      {
        title: 'Trackpad integrado',
        desc: 'Compatible con gestos Multi-Touch y el cursor de iPadOS, ampliando las posibilidades de interacción',
      },
      {
        title: 'Puerto USB-C adicional',
        desc: 'Para carga simultánea, dejando libre el puerto del iPad para otros accesorios.',
      },
      {
        title: 'Protección completa',
        desc: 'Se pliega como una funda, protegiendo el iPad por ambos lados.',
      },
      {
        title: 'Compatibilidad',
        desc: 'Diseñado para el iPad Air de 11 pulgadas y modelos anteriores compatibles.',
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
    id: 'magic-keyboard-ipadAir-13-M2',
    name: 'Magic Keyboard iPad Air 13" M2',
    category: 'accesories',
    brand: 'Apple',
    type: TYPE_MAGIC_KEYBOARD,
    desc: 'El Magic Keyboard para iPad Air es un accesorio premium que transforma tu iPad en una herramienta de productividad avanzada. Diseñado para ofrecer una experiencia de escritura cómoda y precisa, se integra perfectamente con las funciones de iPadOS.​',
    descSpecs: [
      {
        title: 'Diseño flotante magnético',
        desc: 'Permite ajustar el ángulo de visión de forma suave y precisa.',
      },
      {
        title: 'Teclado retroiluminado',
        desc: 'Con mecanismo de tijera y recorrido de 1 mm para una escritura silenciosa y ágil. ',
      },
      {
        title: 'Trackpad integrado',
        desc: 'Compatible con gestos Multi-Touch y el cursor de iPadOS, ampliando las posibilidades de interacción',
      },
      {
        title: 'Puerto USB-C adicional',
        desc: 'Para carga simultánea, dejando libre el puerto del iPad para otros accesorios.',
      },
      {
        title: 'Protección completa',
        desc: 'Se pliega como una funda, protegiendo el iPad por ambos lados.',
      },
      {
        title: 'Compatibilidad',
        desc: 'Diseñado para el iPad Air de 13 pulgadas y modelos anteriores compatibles.',
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
    id: 'magic-keyboard-ipadPro-13-M4',
    name: 'Magic Keyboard iPad Pro 13" M4',
    category: 'accesories',
    type: TYPE_MAGIC_KEYBOARD,
    brand: 'Apple',
    desc: 'El Magic Keyboard para iPad Pro es un accesorio premium que transforma tu iPad en una herramienta de productividad avanzada. Diseñado para ofrecer una experiencia de escritura cómoda y precisa, se integra perfectamente con las funciones de iPadOS.​​',
    descSpecs: [
      {
        title: 'Diseño flotante magnético',
        desc: 'Permite ajustar el ángulo de visión de forma suave y precisa.',
      },
      {
        title: 'Teclado retroiluminado',
        desc: 'Con mecanismo de tijera y recorrido de 1 mm para una escritura silenciosa y ágil. ',
      },
      {
        title: 'Trackpad integrado',
        desc: 'Compatible con gestos Multi-Touch y el cursor de iPadOS, ampliando las posibilidades de interacción',
      },
      {
        title: 'Puerto USB-C adicional',
        desc: 'Para carga simultánea, dejando libre el puerto del iPad para otros accesorios.',
      },
      {
        title: 'Protección completa',
        desc: 'Se pliega como una funda, protegiendo el iPad por ambos lados.',
      },
      {
        title: 'Compatibilidad',
        desc: 'Diseñado para el iPad Air de 13 pulgadas y modelos anteriores compatibles.',
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
    id: 'magic-keyboard-ipadPro-11-M4',
    name: 'Magic Keyboard iPad Pro 11" M4',
    category: 'accesories',
    brand: 'Apple',
    type: TYPE_MAGIC_KEYBOARD,
    desc: 'El Magic Keyboard para iPad Pro es un accesorio premium que transforma tu iPad en una herramienta de productividad avanzada. Diseñado para ofrecer una experiencia de escritura cómoda y precisa, se integra perfectamente con las funciones de iPadOS.​​',
    descSpecs: [
      {
        title: 'Diseño flotante magnético',
        desc: 'Permite ajustar el ángulo de visión de forma suave y precisa.',
      },
      {
        title: 'Teclado retroiluminado',
        desc: 'Con mecanismo de tijera y recorrido de 1 mm para una escritura silenciosa y ágil. ',
      },
      {
        title: 'Trackpad integrado',
        desc: 'Compatible con gestos Multi-Touch y el cursor de iPadOS, ampliando las posibilidades de interacción',
      },
      {
        title: 'Puerto USB-C adicional',
        desc: 'Para carga simultánea, dejando libre el puerto del iPad para otros accesorios.',
      },
      {
        title: 'Protección completa',
        desc: 'Se pliega como una funda, protegiendo el iPad por ambos lados.',
      },
      {
        title: 'Compatibilidad',
        desc: 'Diseñado para el iPad Air de 11 pulgadas y modelos anteriores compatibles.',
      },
    ],
    price: 123456789,
    image: [
      '/images/macbook.png',
      '/images/macbook.png',
      '/images/macbook.png',
    ],
  },
  //air Tag
  {
    id: 'air-tag',
    name: 'Apple AirTag',
    type: TYPE_AIR_TAG,
    category: 'accesories',
    brand: 'Apple',
    desc: 'El Apple AirTag es un dispositivo compacto diseñado para ayudarte a localizar objetos personales como llaves, billeteras, mochilas o equipaje mediante la app Buscar en tu iPhone o iPad.​',
    descSpecs: [
      {
        title: 'Tamaño y peso',
        desc: ' Diámetro de 31,9 mm, grosor de 8 mm y peso de 11 gramos',
      },
      {
        title: 'Conectividad: Bluetooth LE',
        desc: 'Bluetooth LE, chip U1 con tecnología de banda ultraancha para Rastreo Preciso (requiere iPhone 11 o posterior) y NFC para activar el Modo Perdido ',
      },
      {
        title: 'Batería',
        desc: ' Pila CR2032 reemplazable por el usuario, con una duración estimada de un año',
      },
      {
        title: 'Resistencia',
        desc: 'Certificación IP67, resistente al agua y al polvo (hasta 1 metro de profundidad durante 30 minutos)',
      },
      {
        title: 'Funciones adicionales',
        desc: ' Altavoz integrado para emitir sonidos que faciliten la localización y acelerómetro incorporado.',
      },
    ],
    price: 123456789,
    image: [
      '/images/macbook.png',
      '/images/macbook.png',
      '/images/macbook.png',
    ],
  },
  //Adaptador Multipuerto de USB-C a AV Digital de Apple
  {
    id: 'Adaptador-Multipuerto-de-USB-C-a-AV-Digital-de-Apple',
    name: 'Adaptador Multipuerto de USB-C a AV Digital de Apple',
    category: 'accesories',
    brand: 'Apple',
    type: TYPE_ADAPTADOR,
    desc: 'El Adaptador Multipuerto de USB-C a AV Digital de Apple es una solución versátil que te permite conectar tu Mac, iPad o iPhone con puerto USB-C a una pantalla HDMI, un dispositivo USB-A y un cable de carga USB-C simultáneamente. Es ideal para presentaciones, trabajo multitarea o entretenimiento en pantallas externas',
    descSpecs: [
      {
        title: 'Puertos disponibles',
        desc: '1 × HDMI (compatible con HDCP), 1 × USB-A,1 × USB-C (solo para carga) ',
      },
      {
        title: 'Resoluciones admitidas',
        desc: ' Hasta 4K a 60 Hz (modelo A2119), Hasta 4K a 30 Hz (modelos anteriores)​',
      },
      {
        title: 'Compatibilidad',
        desc: 'MacBook, MacBook Pro, iMac, iPad Pro y iPhone con puerto USB-C o Thunderbolt 3,Sistemas operativos: macOS Mojave 10.14.6 o posterior, iOS 12.4 o posterior',
      },
    ],
    price: 123456789,
    image: [
      '/images/macbook.png',
      '/images/macbook.png',
      '/images/macbook.png',
    ],
  },
]
