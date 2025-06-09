'use client'

import React from 'react'

import Image from 'next/image'
const WhatsapFloat = () => {
  const handleWhatsAppRedirect = () => {
    const message =
      'Hola, estoy interesado en comprarles, ¿podrian asesorarme? '

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/+5491124040808?text=${encodedMessage}`

    window.open(whatsappUrl, '_blank')
  }
  return (
    <div className='z-500 h-16 w-16 fixed bottom-4 right-4 rounded-4xl '>
      <Image
        alt='whatsap'
        src={'/images/whatsapp.svg'}
        fill={true}
        className='object-contain hover:scale-110 transition-all duration-300'
        onClick={handleWhatsAppRedirect}
      />
    </div>
  )
}
export default WhatsapFloat
