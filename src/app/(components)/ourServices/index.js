import React from 'react'
import Image from 'next/image'

const ourServices = () => {
  const services = [
    {
      title: 'Garantía',
      icon: '/images/warranty.svg',
      desc: 'Disfrutá de hasta 12 meses de garantía oficial en todos nuestros productos. Tu compra está protegida ante cualquier falla de fábrica, con soporte técnico y atención inmediata.',
    },
    {
      title: 'Servicio técnico',
      icon: '/images/technical.svg',
      desc: 'Contamos con un equipo especializado para brindarte soporte técnico certificado. Realizamos diagnóstico, reparación y mantenimiento con repuestos originales y atención personalizada.',
    },
    {
      title: 'Pick-up',
      icon: '/images/pickup.svg',
      desc: 'Retirá tu compra en nuestras sucursales de forma rápida y sin costo adicional. Te avisamos cuando esté lista para que la retires en el horario que prefieras.',
    },
    {
      title: 'Envíos a todo el país',
      icon: '/images/shipping-truck.svg',
      desc: 'Realizamos envíos seguros y rápidos a todo el territorio nacional. Recibí tu producto donde estés, con seguimiento en tiempo real y garantía de entrega.',
    },
  ]

  return (
    <section className='flex flex-col items-center gap-16 px-4 md:px-16 py-10'>
      <h1 className='text-[2.5rem] md:text-[4rem] tracking-tighter font-semibold text-center'></h1>

      <div className='grid grid-cols-1 md:grid-cols-4 gap-4 w-full'>
        {services.map((service, index) => (
          <div
            key={index}
            className='flex flex-col  justify-center text-center border border-gray-300 p-6 min-h-[250px] gap-4'>
            <Image
              src={service.icon}
              alt={service.title}
              width={100}
              height={100}
              className='w-8 h-8 self-end md:w-12 md:h-12'
            />
            <div className='flex flex-col justify-end text-start gap-8'>
              <p className='text-xl font-medium md:text-4xl'>{service.title}</p>
              <p className='text-sm text-black'>{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ourServices
