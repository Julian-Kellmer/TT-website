import React from 'react'
import { Card, CardContent } from '../(components)/ui/card'
import Image from 'next/image'

const teamMembers = [
  {
    name: 'Meet our Team',
    role: 'CEO & Founder',
    description: 'Somos la empresa líder en ventas',
    image: '/images/GUTO.png',
  },
  {
    name: 'Meet our Team',
    role: 'CTO',
    description: 'Somos la empresa líder en ventas',
    image: '/images/GUTO.png',
  },
  {
    name: 'Meet our Team',
    role: 'Lead Designer',
    description: 'Somos la empresa líder en ventas',
    image: '/images/GUTO.png',
  },
  {
    name: 'Meet our Team',
    role: 'Marketing Director',
    description: 'Somos la empresa líder en ventas',
    image: '/images/GUTO.png',
  },
]

const Page = () => {
  return (
    <section className=' md:mt-28 w-full min-h-screen py-12 bg-white'>
      <div className='container max-w-6xl mx-auto px-6'>
        {/* Título principal */}
        <h1 className='text-5xl md:text-6xl font-bold text-center mb-4'>Quienes somos.</h1>
        <p className='text-center text-gray-600 max-w-2xl mx-auto mb-12'>
          Somos la empresa líder en ventas de tecnología de última generación. Contamos con un amplio stock y te ofrecemos hasta 5 años de garantía para tu tranquilidad
        </p>

        {/* Recuadro grande */}
        <div className='w-full h-64 md:h-96 bg-gray-200 rounded-3xl border-4 border-blue-500 mb-16'></div>

        {/* Nuestro equipo de trabajo */}
        <h2 className='text-3xl font-semibold mb-8'>Nuestro equipo de trabajo</h2>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
          {teamMembers.map((member, index) => (
            <Card key={index} className='overflow-hidden bg-gray-100 border-none'>
              <div className='aspect-square relative'>
                <Image
                  width={400}
                  height={400}
                  src={member.image}
                  alt={member.name}
                  className='object-cover w-full h-full'
                />
              </div>
              <CardContent className='p-4'>
                <h3 className='text-base font-semibold mb-1'>{member.name}</h3>
                <p className='text-sm text-gray-600'>{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Page