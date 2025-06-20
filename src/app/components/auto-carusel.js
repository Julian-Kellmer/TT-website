'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
const carouselImages = [
  {
    src: '/images/banners/ipad.jpg',
    alt: 'Eleva tu experiencia. Descubre lo mejor en tecnología.',
  },
  {
    src: '/images/banners/macbook.jpg',
    alt: 'Productos de última generación',
  },
  {
    src: '/images/banners/notebook.jpg',
    alt: 'Garantía extendida en todos nuestros productos',
  },
]
export default function AutoCarousel({  interval = 3000 }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    )
  }, [carouselImages.length])

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    )
  }, [carouselImages.length])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  // Configurar el intervalo para cambiar automáticamente
  useEffect(() => {
    const slideInterval = setInterval(goToNext, interval)
    return () => clearInterval(slideInterval)
  }, [goToNext, interval])

  return (
    <div className='relative w-full h-[80vh]  mx-auto overflow-hidden    '>
      {/* Carrusel */}
      <div className='relative  w-full h-full '>
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 object-cover ${
              index === currentIndex
                ? 'opacity-100'
                : 'opacity-0 pointer-events-none'
            }`}>
            <Image
              src={image.src || '/placeholder.svg'}
              alt={image.alt}
              fill
              className='object-cover aspect-video'
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Botones de navegación */}
      <button
        onClick={goToPrevious}
        className='absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 backdrop-blur-sm transition-colors'
        aria-label='Anterior'>
        <ChevronLeft className='h-6 w-6' />
      </button>
      <button
        onClick={goToNext}
        className='absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 backdrop-blur-sm transition-colors'
        aria-label='Siguiente'>
        <ChevronRight className='h-6 w-6' />
      </button>

      {/* Indicadores */}
      <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center space-x-2'>
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? 'w-8 h-2 bg-black'
                : 'w-2 h-2 bg-gray-400'
            }`}
            aria-label={`Ir a la diapositiva ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
