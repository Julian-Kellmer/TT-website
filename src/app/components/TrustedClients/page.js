'use client'

import { useState } from 'react'
import Image from 'next/image'

const successCases = [
  {
    id: 'lamborghini',
    title: 'Lamborghini',
    description:
      'Comprar mi computadora en Tengo Tecno fue una experiencia simplemente asombrosa. Desde el primer momento, la atención que recibí fue personalizada, cordial y muy profesional, ayudándome a encontrar exactamente lo que necesitaba para gestionar los desarrollos de producto con máxima eficiencia',
    logo: '/images/trustedUs/LAMBO.png',
    clientName: 'Milena Soria',
    clientTitleReview: 'Servicio increíble, rápido y confiable',
    clientReview:
      'Comprar mi computadora en Tengo Tecno fue una experiencia simplemente asombrosa. Desde el primer momento, la atención que recibí fue personalizada, cordial y muy profesional, ayudándome a encontrar exactamente lo que necesitaba para gestionar los desarrollos de producto con máxima eficiencia',
    clientRole: 'Product Manager • Lamborghini Argentina',
    clientPhoto: '/images/trustedUs/employer1.jpg',
  },
  {
    id: 'dypsa',
    title: 'Dypsa',
    description:
      'Nuestra experiencia con Tengo Tecno fue excelente. Nos ofrecieron asesoramiento profesional desde el inicio, logrando una solución ideal para nuestras necesidades tecnológicas. Todo el proceso de compra fue claro, rápido y eficiente, facilitando la toma de decisiones en nuestro departamento',
    logo: '/images/trustedUs/DYPSANegra.png',
    clientName: 'Bruno Larralde',
    clientTitleReview: 'Atención impecable y soluciones efectivas',
    clientReview:
      'Nuestra experiencia con Tengo Tecno fue excelente. Nos ofrecieron asesoramiento profesional desde el inicio, logrando una solución ideal para nuestras necesidades tecnológicas. Todo el proceso de compra fue claro, rápido y eficiente, facilitando la toma de decisiones en nuestro departamento',
    clientRole: 'Gerente de Compras • Dypsa',
    clientPhoto: '/images/trustedUs/employer2.jpg',
  },
  {
    id: 'mundo-juguete',
    title: 'Mundo Juguete',
    description:
      'Necesitábamos renovar gran parte del equipamiento del equipo técnico. En Tengo Tecno no solo entendieron lo que buscábamos, sino que nos recomendaron opciones que optimizaron el rendimiento sin salirnos del presupuesto. Un proveedor que habla nuestro mismo lenguaje técnico',
    logo: '/images/trustedUs/EMDJ.png',
    clientName: 'Franco Salvatierra',
    clientTitleReview: 'Un servicio que marca la diferencia',
    clientReview:
      'Necesitábamos renovar gran parte del equipamiento del equipo técnico. En Tengo Tecno no solo entendieron lo que buscábamos, sino que nos recomendaron opciones que optimizaron el rendimiento sin salirnos del presupuesto. Un proveedor que habla nuestro mismo lenguaje técnico',
    clientRole: 'Gerente de Sistemas • El Mundo del Juguete',
    clientPhoto: '/images/trustedUs/employer3.jpg',
  },
  {
    id: 'ditoys',
    title: 'Ditoys',
    description:
      'Como responsable de la operación general, valoro los proveedores que entienden lo que significa el tiempo y la confiabilidad. Tengo Tecno cumplió en cada etapa: desde el asesoramiento hasta la entrega puntual, permitiéndonos enfocarnos en lo estratégico sin preocuparnos por lo operativo',
    logo: '/images/trustedUs/DITOYS.png',
    clientName: 'Catalina Bustos',
    clientTitleReview: 'Profesionales de principio a fin',
    clientReview:
      'Como responsable de la operación general, valoro los proveedores que entienden lo que significa el tiempo y la confiabilidad. Tengo Tecno cumplió en cada etapa: desde el asesoramiento hasta la entrega puntual, permitiéndonos enfocarnos en lo estratégico sin preocuparnos por lo operativo',
    clientRole: 'Gerenta General • Ditoys',
    clientPhoto: '/images/trustedUs/employer4.jpg',
  },
]

export default function StackedSuccessCases() {
  const [activeId, setActiveId] = useState(successCases[0].id)
  const activeCase = successCases.find((item) => item.id === activeId)

  return (
    <section
      id='Testimonios'
      className='w-full mx-auto md:px-16 px-4 py-12 bg-white border-blue-100 rounded-lg md:mt-24 mt-8 container'>
      <h2 className='text-[3rem] md:text-[4.8rem] font-semibold tracking-tighter text-center mb-10'>
        Casos de Éxito.
      </h2>

      {/* Logos */}
      <div className='flex flex-col md:flex-row '>
        <div className='order-1 md:order-2  flex flex-row md:flex-col flex-wrap justify-around items-center content-center gap-6 md:gap-4 w-full md:w-1/3 lg:w-1/4 '>
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
        <div className='order-2 md:order-1 h-full flex  flex-col justify-center items-center  w-full md:w-2/3 lg:w-3/4 gap-8 '>
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
            <p className='text-[0.8rem] md:text-[1rem]    font-semibold text-black'>
              “{activeCase.clientReview}”
            </p>
          </div>
          <div className=' flex lg:self-start gap-3 my-4 '>
            <div className=' h-auto'>
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
                {activeCase.clientRole}  
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
