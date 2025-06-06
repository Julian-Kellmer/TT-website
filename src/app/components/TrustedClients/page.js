'use client'

import { useState } from 'react'
import Image from 'next/image'

const successCases = [
  {
    id: 'lamborghini',
    title: 'Lamborghini',
    description:
      'Comprar mi computadora en Tengo Tecno fue una experiencia simplemente asombrosa. Desde el primer momento, la atención que recibí fue personalizada, cordial y muy profesional, ayudándome a encontrar exactamente lo que necesitaba.',
    logo: '/images/trustedUs/LAMBO.png',
    clientName: 'Karina Rodriguez',
    clientTitleReview: 'Servicio increíble, rápido y confiable',
    clientReview:
      'Comprar mi computadora en Tengo Tecno fue una experiencia simplemente asombrosa. Desde el primer momento, la atención que recibí fue personalizada, cordial y muy profesional, ayudándome a encontrar exactamente lo que necesitaba.',
    clientRole: 'Product Manager',
    clientPhoto: '/images/trustedUs/employer1.jpg',
  },
  {
    id: 'dypsa',
    title: 'Dypsa',
    description:
      'Nuestra experiencia con Tengo Tecno fue excelente. Nos ofrecieron asesoramiento profesional desde el inicio, logrando una solución ideal para nuestras necesidades tecnológicas.Nuestra experiencia con Tengo Tecno fue excelente. Nos ofrecieron asesoramiento profesional desde el inicio, logrando una solución ideal para nuestras necesidades tecnológicas.',
    logo: '/images/trustedUs/DYPSANegra.png',
    clientName: 'Luis Fernández',
    clientTitleReview: 'Atención impecable y soluciones efectivas',
    clientReview:
      'Nuestra experiencia con Tengo Tecno fue excelente. Nos ofrecieron asesoramiento profesional desde el inicio, logrando una solución ideal para nuestras necesidades tecnológicas.Nuestra experiencia con Tengo Tecno fue excelente. Nos ofrecieron asesoramiento profesional desde el inicio, logrando una solución ideal para nuestras necesidades tecnológicas.',
    clientRole: 'Gerente de Compras',
    clientPhoto: '/images/trustedUs/employer2.jpg',
  },
  {
    id: 'mundo-juguete',
    title: 'Mundo Juguete',
    description:
      'Confiamos en Tengo Tecno para equipar nuestras oficinas, y superaron nuestras expectativas. Todo llegó en tiempo y forma, y el soporte postventa fue clave.',
    logo: '/images/trustedUs/EMDJ.png',
    clientName: 'Cristian Núñez',
    clientTitleReview: 'Un servicio que marca la diferencia',
    clientReview:
      'Confiamos en Tengo Tecno para equipar nuestras oficinas, y superaron nuestras expectativas. Todo llegó en tiempo y forma, y el soporte postventa fue clave.',
    clientRole: 'Directora Comercial',
    clientPhoto: '/images/trustedUs/employer3.jpg',
  },
  {
    id: 'ditoys',
    title: 'Ditoys',
    description:
      'Elegimos Tengo Tecno para la renovación tecnológica de nuestra empresa. La experiencia fue profesional, ágil y con una atención destacable en cada paso.',
    logo: '/images/trustedUs/DITOYS.png',
    clientName: 'Martín Pereyra',
    clientTitleReview: 'Profesionales de principio a fin',
    clientReview:
      'Elegimos Tengo Tecno para la renovación tecnológica de nuestra empresa. La experiencia fue profesional, ágil y con una atención destacable en cada paso.',
    clientRole: 'CTO',
    clientPhoto: '/images/trustedUs/employer4.jpg',
  },
]

export default function StackedSuccessCases() {
  const [activeId, setActiveId] = useState(successCases[0].id)
  const activeCase = successCases.find((item) => item.id === activeId)

  return (
    <section id='Testimonios' className='w-full mx-auto md:px-16 px-4 py-12 bg-white border-blue-100 rounded-lg md:mt-32 mt-8 '>
      <h2 className='text-[3rem] md:text-[4.8rem] font-semibold tracking-tighter text-center mb-10'>
        Casos de Éxito.
      </h2>

      {/* Logos */}
      <div className='flex flex-wrap justify-around items-center content-center gap-6 mb-10 '>
        {successCases.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveId(item.id)}
            className={`p-2 rounded transition duration-300 hover:scale-105 ${
              item.id === activeId ? ' rounded-2xl' : 'grayscale opacity-60'
            }`}>
            <Image
              src={item.logo}
              alt={item.title}
              width={100}
              height={80}
              className=''
            />
          </button>
        ))}
      </div>

      {/* Active Testimonial */}
      <div className='flex flex-col md:grid grid-cols-1 md:grid-cols-2  flex-1   '>
        <div className='flex flex-col justify-between gap-4 '>
          <div className='flex flex-col gap-4'>
            <h3 className='text-[2.5rem] md:text-[4rem]  font-light text-black'>
              Testimonios
            </h3>
            <p className=' text-[1rem] md:text-[1.2rem] text-black'>
              Tenemos una tasa de 100% de éxito en cuanto a clientes contentos.
            </p>
            <div className='h-[1px] bg-gray-300 w-full my-2 '></div>
            <p className='md:text-[2.1rem] text-[1.7rem] font-light'>
              {activeCase.clientTitleReview}
            </p>
            <p className='text-[0.8rem] md:text-[1rem]  max-w-[75%]  font-semibold text-black'>
              “{activeCase.clientReview}”
            </p>
          </div>
          <div className=' flex lg:self-end gap-3 my-4 '>
            <div className='w-16 h-auto'>
              <Image
                src={activeCase.logo}
                alt='logo empresa'
                width={100}
                height={40}
                className=' object-contain  '
              />
            </div>
            <div>
              <p className='text-xl md:text-xl font-bold'>
                {activeCase.clientName}
              </p>
              <p className=' text-sm lg:text-xl text-gray-500'>
                {activeCase.clientRole} • {activeCase.title}
              </p>
            </div>
          </div>
        </div>

        <div className='flex  flex-1  w-full md:justify-end justify-center '>
          <Image
            src={activeCase.clientPhoto}
            alt={activeCase.clientName}
            width={400}
            height={500}
            className='rounded-lg object-cover'
          />
        </div>
      </div>
    </section>
  )
}
