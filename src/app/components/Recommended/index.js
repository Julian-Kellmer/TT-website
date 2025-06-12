'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState, useRef } from 'react'
import { Badge } from '../ui/badge'

const getPublicDriveUrl = (url) => {
  const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/)
  return match ? `https://drive.google.com/uc?export=view&id=${match[1]}` : url
}

export default function RecommendedProducts() {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeIndex, setActiveIndex] = useState(1)
  const intervalRef = useRef(null)

  // Fetch productos
  useEffect(() => {
    fetch('/api/mas-vendidos')
      .then((res) => res.json())
      .then((data) => {
        setProductos(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Error al cargar recomendados', err)
        setLoading(false)
      })
  }, [])

  // Intervalo automático de cambio
  useEffect(() => {
    if (!loading && productos.length > 0) {
      startAutoSlide()
      return () => clearInterval(intervalRef.current)
    }
  }, [loading, productos])

  const startAutoSlide = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % productos.length)
    }, 3000)
  }

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + productos.length) % productos.length)
    startAutoSlide()
  }

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % productos.length)
    startAutoSlide()
  }

  if (loading || productos.length === 0) return null

  return (
    <div className='flex flex-col  w-full max-w-screen-xl mx-auto px-4 py-10'>
      <h2 className='text-center text-xl font-medium mb-6'>
        También te puede interesar
      </h2>
      <div className='sm:hidden flex gap-4 py-4 self-end'>
        <button
          onClick={goToPrev}
          className=' bg-black bg-opacity-50 text-white rounded-full  w-8 h-8 flex items-center justify-center'>
          ‹
        </button>
        <button
          onClick={goToNext}
          className=' bg-black bg-opacity-50 text-white rounded-full w-8 h-8 flex items-center justify-center'>
          ›
        </button>
      </div>
      {/* Mobile - Carrusel */}
      <div className='relative sm:hidden h-64 overflow-hidden'>
        {productos.map((item, index) => {
          let imageArray = []

          if (Array.isArray(item.image)) {
            imageArray = item.image
          } else if (typeof item.image === 'string') {
            imageArray = item.image.split(',').map((url) => url.trim())
          }

          const publicUrls = imageArray.map(getPublicDriveUrl)
          const selectedImage = publicUrls[1] || publicUrls[0] || ''

          const isActive = index === activeIndex

          return (
            <div
              key={item.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
              } flex md:flex-col flex-row items-center justify-center text-center p-4 bg-white border border-gray-300 rounded-md`}>
              <div className='h-full w-full max-w-[200px]'>
                <Image
                  width={500}
                  height={500}
                  src={selectedImage}
                  alt={item.name}
                  className='object-contain mb-2'
                />
              </div>
              <div className='w-full mt-4 flex-col flex justify-center items-center gap-2'>
                <div className='flex flex-col md:flex-row gap-4'>
                  <Badge className='mb-2 capitalize max-w-1/4 flex justify-start self-start'>
                    {item.brand}
                  </Badge>
                  <div className='flex items-center justify-between w-full'>
                    <h3 className='text-lg font-medium'>{item.name}</h3>
                  </div>
                  <Link
                    href={`/producto/${item.category}/${item.id}`}
                    className='border rounded shadow hover:bg-[#1e1e1e] text-gray-500  self-start md:self-end hover:text-white border-none py-0.5 px-2 capitalize '>
                    consultar precio
                  </Link>
                </div>
              </div>
            </div>
          )
        })}

        {/* Controles */}
      </div>

      {/* Desktop - Grid */}
      <div className='hidden sm:grid grid-cols-2 w-full gap-16 overflow-hidden'>
        {productos.slice(0, 4).map((item, index) => {
          let imageArray = []

          if (Array.isArray(item.image)) {
            imageArray = item.image
          } else if (typeof item.image === 'string') {
            imageArray = item.image.split(',').map((url) => url.trim())
          }

          const publicUrls = imageArray.map(getPublicDriveUrl)
          const selectedImage = publicUrls[1] || publicUrls[0] || ''

          return (
            <div
              key={item.id}
              className='border border-gray-300 rounded-md flex flex-col items-center justify-center text-center p-4 bg-white'>
              <div className='h-full w-full max-w-[250px]'>
                <Image
                  width={500}
                  height={500}
                  src={selectedImage}
                  alt={item.name}
                  className='object-contain mb-2'
                />
              </div>
              <div className='w-full mt-4 flex-col flex justify-center items-center gap-2'>
                <Badge className='mb-2 capitalize max-w-1/4 flex justify-start self-start'>
                  {item.brand}
                </Badge>
                <div className='flex items-center justify-between w-full'>
                  <h3 className='text-lg font-medium'>{item.name}</h3>
                  <Link
                    href={`/producto/${item.category}/${item.id}`}
                    className='border rounded shadow hover:bg-[#1e1e1e] text-gray-500 self-end hover:text-white border-none py-0.5 px-2 capitalize '>
                    consultar precio
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
