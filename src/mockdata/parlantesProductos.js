import {
  BRAND_JBL,
  BRAND_SONOS,
  TYPE_BARRAS_DE_SONIDO,
  TYPE_PORTATILES,
  TYPE_SUB_WOOFERS,
  TYPE_SISTEMAS_DE_AUDIO,
  COLOR_NEGRO,
  COLOR_BLANCO,
  COLOR_VERDE_OLIVA,
  COLOR_NARANJA,
  COLOR_GRIS
} from '../constantes/parlantes'

export const parlantesProductos = [
  {
    id: 'Sonos Arc',
    name: 'Sonos Arc',
    type: TYPE_BARRAS_DE_SONIDO,
    category: 'Parlantes',
    brand: BRAND_SONOS,
    desc: 'Sonos Arc es una barra de sonido premium diseñada para ofrecer una experiencia de audio cinematográfica en el hogar. Con tecnología Dolby Atmos y altavoces orientados hacia arriba, proporciona un sonido envolvente tridimensional que te sumerge en cada escena. Su diseño elegante y minimalista se integra perfectamente en cualquier espacio, y su configuración es rápida y sencilla gracias a la app Sonos y la conectividad HDMI eARC.​',
    descSpecs: [
      {
        title: 'Altavoces',
        desc: '11 amplificadores digitales de clase D, incluidos 8 woofers elípticos y 3 tweeters con cúpula de seda orientados hacia arriba para un sonido envolvente.',
      },
      {
        title: 'Compatibilidad',
        desc: 'Dolby Atmos, Dolby Digital 5.1 y Dolby Digital Plus ',
      },
      {
        title: 'Conectividad',
        desc: 'HDMI eARC, WiFi,Apple AirPlay 2, Control por voz AMazon Alexa y Google Asistant',
      },
      {
        title: 'Controles',
        desc: 'Táctiles en la parte superior para reproducción, pausa, ajuste de volumen y más ',
      },
      {
        title: 'Funciones adicionales',
        desc: 'Trueplay: calibra la barra según la acústica de la habitación (requiere dispositivo iOS,compatible).Mejora de la Voz: enfatiza las frecuencias de la voz para diálogos más nítidos.Sonido Nocturno: reduce la intensidad de efectos sonoros fuertes y aumenta los sonidos más suaves.',
      },
      {
        title: 'Dimensiones',
        desc: '87 mm (alto) x 1.142 mm (ancho) x 116 mm (profundidad).​',
      },
      {
        title: 'Peso',
        desc: '6,35 kg',
      },
    ],
    techSpecs: [
      {
        ram: [],
      },
      {
        color: [COLOR_BLANCO, COLOR_NEGRO],
      },
      {
        storage: [],
      },
      {
        chip: [],
      },
      {
        process: [],
      },
      {
        pantalla: [],
      },
    ],
    price: 123345,
    image: ['/images/macbook.png'],
  },
  {
    id: 'beam-2nd-gen',
    name: 'Beam 2nd Gen',
    type: TYPE_BARRAS_DE_SONIDO,
    category: 'Parlantes',
    brand: BRAND_SONOS,
    desc: 'Sonos Beam (2.ª generación) es una barra de sonido compacta e inteligente que transforma tu experiencia audiovisual. Con soporte para Dolby Atmos, ofrece un sonido envolvente tridimensional que llena la habitación, ideal para películas, música y juegos. Su diseño elegante y minimalista se integra perfectamente en cualquier espacio, y su configuración es rápida y sencilla gracias a la app Sonos y la conectividad HDMI eARC.​​',
    descSpecs: [
      {
        title: 'Amplificadores',
        desc: ' Cinco amplificadores digitales de clase D calibrados para la arquitectura acústica de la barra.',
      },
      {
        title: 'Tweeter',
        desc: 'Uno central para frecuencias altas nítidas ',
      },
      {
        title: 'Woofers de rango medio',
        desc: 'Cuatro elípticos que aseguran una reproducción fiel de frecuencias medias y graves.',
      },
      {
        title: 'Radiadores pasivos',
        desc: 'Tres que mejoran las frecuencias bajas para un sonido potente y equilibrado.',
      },
      {
        title: 'Micrófonos',
        desc: 'Matriz de micrófonos de largo alcance con detección avanzada de fuentes de sonido y cancelación multicanal de ecos',
      },
      {
        title: 'Ecualización ajustable',
        desc: 'Configurable mediante la app Sonos para ajustar graves, agudos e intensidad.​',
      },
      {
        title: 'Funciones adicionales',
        desc: 'Trueplay: Calibra la barra según la acústica de la habitación (requiere dispositivo iOS compatible). Mejora de la Voz: Enfatiza las frecuencias de la voz para diálogos más nítidos.Sonido Nocturno: Reduce la intensidad de efectos sonoros fuertes y aumenta los sonidos más suaves.',
      },
      {
        title: 'Conectividad',
        desc: 'HDMI eARC, Wi-Fi, Apple AirPlay 2, Control por voz con Amazon Alexa y Google Assistant.',
      },
      {
        title: 'Controles',
        desc: 'Táctiles en la parte superior para reproducción, pausa, ajuste de volumen y más.',
      },
      {
        title: 'Dimensiones',
        desc: '69 mm (alto) x 651 mm (ancho) x 100 mm (profundidad).',
      },
      {
        title: 'Peso',
        desc: '2,8 kg',
      },
      {
        title: 'Montaje',
        desc: 'Compatible con soporte de montaje con rosca de 12.7 mm (0.5 pulgadas) / orificio de montaje con rosca 10-32.​',
      },
    ],
    techSpecs: [
      {
        ram: [],
      },
      {
        color: [COLOR_BLANCO, COLOR_NEGRO],
      },
      {
        storage: [],
      },
      {
        chip: [],
      },
      {
        process: [],
      },
      {
        pantalla: [],
      },
    ],
    price: 123345,
    image: ['/images/macbook.png'],
  },
  {
    id: 'sonos-ray',
    name: 'Sonos Ray',
    type: TYPE_BARRAS_DE_SONIDO,
    category: 'Parlantes',
    brand: BRAND_SONOS,
    desc: 'Sonos Ray es una barra de sonido compacta y elegante que transforma el audio de tu televisor, ofreciendo una experiencia envolvente y nítida. Ideal para habitaciones pequeñas y medianas, combina un diseño minimalista con tecnología avanzada para mejorar tus películas, series y videojuegos.​',
    descSpecs: [
      {
        title: 'Amplificadores',
        desc: ' 4 digitales de clase D, calibrados para la arquitectura acústica de la barra',
      },
      {
        title: 'Altavoces',
        desc: '2 tweeters para frecuencias altas nítidas, 2 woofers de rango medio para graves equilibrados.',
      },
      {
        title: 'Compatibilidad',
        desc: 'Dolby Atmos, Dolby Digital 5.1 y Dolby Digital Plus ',
      },
      {
        title: 'Conectividad',
        desc: 'Entrada óptica (TOSLINK), WiFi 802.11n, Apple AirPlay 2, Puerto Ethernet 10-100',
      },
      {
        title: 'Controles',
        desc: 'Táctiles en la parte superior para reproducción, pausa, ajuste de volumen, Receptor infrarojo (IR) para sincronización con el control remoto del televisor ',
      },
      {
        title: 'Funciones adicionales',
        desc: 'Trueplay: calibra la barra según la acústica de la habitación (requiere dispositivo iOS,compatible).Mejora de la Voz: enfatiza las frecuencias de la voz para diálogos más nítidos.Sonido Nocturno: reduce la intensidad de efectos sonoros fuertes y aumenta los sonidos más suaves.',
      },
      {
        title: 'Dimensiones',
        desc: '559 mm (ancho) x 95 mm (profundidad) x 71 mm (alto).​',
      },
      {
        title: 'Peso',
        desc: '1,95 kg',
      },
    ],
    techSpecs: [
      {
        ram: [],
      },
      {
        color: [COLOR_BLANCO, COLOR_NEGRO],
      },
      {
        storage: [],
      },
      {
        chip: [],
      },
      {
        process: [],
      },
      {
        pantalla: [],
      },
    ],
    price: 123345,
    image: ['/images/macbook.png'],
  },
  // portatiles
  {
    id: 'Sonos Move-2',
    name: 'Sonos Move 2',
    category: 'Parlantes',
    brand: BRAND_SONOS,
    Type: TYPE_PORTATILES,
    desc: 'Sonos Move 2 es un altavoz portátil de alto rendimiento que combina la calidad de sonido característica de Sonos con una notable autonomía y resistencia. Diseñado para adaptarse a cualquier entorno, ofrece un sonido estéreo potente y equilibrado, ideal tanto para interiores como exteriores. Con una batería de hasta 24 horas y conectividad Wi-Fi y Bluetooth, es perfecto para quienes buscan versatilidad sin sacrificar calidad.​',
    descSpecs: [
      {
        title: 'Audio',
        desc: '3 amplificadores digitales de clase D. 2 tweeters para agudos nítidos. 1 woofer de rango medio para graves profundos.Trueplay™ automático que ajusta el sonido según el entorno.​',
      },
      {
        title: 'Conectividad',
        desc: ' WiFi 6 , Bluethoot 5.0 Apple AirPlay 2,Puerto USB-C con alimentación PD de 45 W, Entrada auxiliar mediante adaptador USB-C (se vende por separado)',
      },
      {
        title: 'Batería',
        desc: 'Capacidad de 44 Wh, ofreciendo hasta 24 horas de reproducción continua,Carga mediante base incluida o puerto USB-C ',
      },
      {
        title: 'Peso y dimensiones',
        desc: '3KG, Dimensiones: 242 x 160 x 126 mm',
      },
      {
        title: 'Diseño y Durabilidad',
        desc: 'Resistencia al agua y al polvo con certificación IP56, Diseño resistente a caídas',
      },
      {
        title: 'Controles y Funciones Adicionales',
        desc: 'Controles táctiles en la parte superior, Control por voz compatible con Sonos Voice Control y Amazon Alexa, Modo de sonido nocturno y mejora de voz para diálogos más claros​',
      },
    ],
    techSpecs: [
      {
        ram: ['1 GB SDRAM'],
      },
      {
        color: [COLOR_BLANCO, COLOR_NEGRO, COLOR_VERDE_OLIVA],
      },
      {
        storage: ['8 GB NV'],
      },
      {
        chip: [],
      },
      {
        process: ['CPU Quad Core'],
      },
      {
        pantalla: [],
      },
    ],
    price: 123345,
    image: ['/images/macbook.png'],
  },
  {
    id: 'sonos-roam',
    name: 'Sonos Roam',
    category: 'Parlantes',
    brand: 'SONOS',
    Type: 'PORTATILES',
    desc: 'El Sonos Roam es un altavoz inteligente ultra portátil que ofrece un sonido sorprendentemente potente en un diseño compacto y resistente. Ideal para usar en casa o al aire libre, combina conectividad Wi-Fi y Bluetooth, permitiéndote disfrutar de tu música en cualquier lugar. Con una batería de hasta 10 horas y resistencia al agua y al polvo (certificación IP67), es el compañero perfecto para tus aventuras.​',
    descSpecs: [
      {
        title: 'Audio',
        desc: '2 amplificadores digitales de clase H, 1 tweeter para agudos nítidos, 1 woofer de rango medio para graves equilibrados, Tecnología Trueplay™ automática que ajusta el sonido según el entorno.',
      },
      {
        title: 'Conectividad',
        desc: ' Wi-Fi 802.11 a/b/g/n/ac (2.4 y 5 GHz), Bluetooth 5.0, Apple AirPlay 2. Control por voz compatible con Amazon Alexa y Google Assistant (requiere conexión Wi-Fi).',
      },
      {
        title: 'Batería',
        desc: 'Capacidad de 18 Wh, ofreciendo hasta 10 horas de reproducción continua.Carga mediante cable USB-C incluido o cargador inalámbrico Qi (se vende por separado).​',
      },
      {
        title: 'Peso y Dimensiones',
        desc: 'Dimensiones: 168 x 62 x 60 mm, Peso: 0.43 kg.',
      },
      {
        title: 'Diseño y Durabilidad',
        desc: 'Resistencia al agua y al polvo con certificación IP67, diseño resistente a caídas.​',
      },
      {
        title: 'Controles y Funciones Adicionales',
        desc: 'Botones físicos para reproducción, pausa, ajuste de volumen y encendido/apagado.Integración con la app Sonos para configuración y control.​',
      },
    ],
    techSpecs: [
      {
        ram: [],
      },
      {
        color: ['Negro', 'Blanco', 'Verde Oliva', 'Naranja', 'gris'],
      },
      {
        storage: [],
      },
      {
        chip: [],
      },
      {
        process: [],
      },
      {
        pantalla: [],
      },
    ],
    price: 123345,
    image: ['/images/macbook.png'],
  },
  //sistemas de audio
  {
    id: 'sonos-era-100',
    name: 'Sonos Era 100',
    category: 'Parlantes',
    brand: BRAND_SONOS,
    Type: TYPE_SISTEMAS_DE_AUDIO,
    desc: 'Sonos Era 100 es un altavoz inteligente de última generación que combina un diseño elegante con tecnología avanzada para ofrecer una experiencia de sonido excepcional. Con un woofer más grande y un procesador más rápido, proporciona un sonido estéreo potente y detallado, ideal para cualquier espacio del hogar. Su compatibilidad con Wi-Fi 6 y Bluetooth 5.3 garantiza una conectividad versátil y estable.​​',
    descSpecs: [
      {
        title: 'Audio',
        desc: '2 amplificadores digitales de clase H, 1 tweeter para agudos nítidos, 1 woofer de rango medio para graves equilibrados, Tecnología Trueplay™ automática que ajusta el sonido según el entorno.',
      },
      {
        title: 'Conectividad',
        desc: ' Wi-Fi 802.11 a/b/g/n/ac (2.4 y 5 GHz), Bluetooth 5.0, Apple AirPlay 2. Control por voz compatible con Amazon Alexa y Google Assistant (requiere conexión Wi-Fi).',
      },
      {
        title: 'Batería',
        desc: 'Capacidad de 18 Wh, ofreciendo hasta 10 horas de reproducción continua.Carga mediante cable USB-C incluido o cargador inalámbrico Qi (se vende por separado).​',
      },
      {
        title: 'Peso y Dimensiones',
        desc: 'Dimensiones: 168 x 62 x 60 mm, Peso: 0.43 kg.',
      },
      {
        title: 'Diseño y Durabilidad',
        desc: 'Resistencia al agua y al polvo con certificación IP67, diseño resistente a caídas.​',
      },
      {
        title: 'Controles y Funciones Adicionales',
        desc: 'Botones físicos para reproducción, pausa, ajuste de volumen y encendido/apagado.Integración con la app Sonos para configuración y control.​',
      },
    ],
    techSpecs: [
      {
        ram: [],
      },
      {
        color: [COLOR_NEGRO, COLOR_BLANCO, COLOR_VERDE_OLIVA, COLOR_NARANJA, COLOR_GRIS],
      },
      {
        storage: [],
      },
      {
        chip: [],
      },
      {
        process: [],
      },
      {
        pantalla: [],
      },
    ],
    price: 123345,
    image: ['/images/macbook.png'],
  },
  {
    id: 'sonos-era-300',
    name: 'Sonos era-300',
    category: 'Parlantes',
    brand: BRAND_SONOS,
    Type: TYPE_SISTEMAS_DE_AUDIO,
    desc: 'El Sonos Roam es un altavoz inteligente ultra portátil que ofrece un sonido sorprendentemente potente en un diseño compacto y resistente. Ideal para usar en casa o al aire libre, combina conectividad Wi-Fi y Bluetooth, permitiéndote disfrutar de tu música en cualquier lugar. Con una batería de hasta 10 horas y resistencia al agua y al polvo (certificación IP67), es el compañero perfecto para tus aventuras.​',
    descSpecs: [
      {
        title: 'Audio',
        desc: '2 amplificadores digitales de clase H, 1 tweeter para agudos nítidos, 1 woofer de rango medio para graves equilibrados, Tecnología Trueplay™ automática que ajusta el sonido según el entorno.',
      },
      {
        title: 'Conectividad',
        desc: ' Wi-Fi 802.11 a/b/g/n/ac (2.4 y 5 GHz), Bluetooth 5.0, Apple AirPlay 2. Control por voz compatible con Amazon Alexa y Google Assistant (requiere conexión Wi-Fi).',
      },
      {
        title: 'Batería',
        desc: 'Capacidad de 18 Wh, ofreciendo hasta 10 horas de reproducción continua.Carga mediante cable USB-C incluido o cargador inalámbrico Qi (se vende por separado).​',
      },
      {
        title: 'Peso y Dimensiones',
        desc: 'Dimensiones: 168 x 62 x 60 mm, Peso: 0.43 kg.',
      },
      {
        title: 'Durabilidad',
        desc: 'Resistencia al agua y al polvo con certificación IP67, diseño resistente a caídas.​',
      },
      {
        title: 'Funciones Adicionales',
        desc: 'Botones físicos para reproducción, pausa, ajuste de volumen y encendido/apagado.Integración con la app Sonos para configuración y control.​',
      },
    ],
    techSpecs: [
      {
        ram: [],
      },
      {
        color: ['Negro', 'Blanco', 'Verde Oliva', 'Naranja', 'gris'],
      },
      {
        storage: [],
      },
      {
        chip: [],
      },
      {
        process: [],
      },
      {
        pantalla: [],
      },
    ],
    price: 123345,
    image: ['/images/macbook.png'],
  },
]
