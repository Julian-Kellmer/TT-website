'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const CategoryItem = ({
  img,
  nombre,
  isCatalogOpen,
  setIsCatalogOpen,
  setIsMobileCatalog,
  setIsMobileMenuOpen
}) => {
  const router = useRouter()

  const handleClick = () => {
    setIsCatalogOpen(false)

    // Verifica si es mobile antes de ejecutar las funciones correspondientes
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setIsMobileCatalog(false)
      setIsMobileMenuOpen(false)
    }

    setTimeout(() => {
      router.push(`/Catalog/${nombre}`)
    }, 500)
  }

  return (
    <div
      onClick={handleClick}
      className='relative flex flex-col items-center justify-end w-[280px] h-[200px] cursor-pointer'>
      {/* Imagen contenida y centrada */}
      <div className='absolute top-0 left-0 w-full h-[140px] flex items-center justify-center'>
        <Image
          width={120}
          height={120}
          src={img}
          alt='item'
          className='transition-transform duration-300 hover:-translate-y-2 object-contain'
        />
      </div>

      {/* Fondo gris */}
      <div className='bg-[#d9d9d9] w-[15rem] h-[9rem] rounded-3xl'></div>

      {/* Texto */}
      <p className='text-white font-medium text-center mt-2'>{nombre}</p>
    </div>
  )
}

export default CategoryItem
