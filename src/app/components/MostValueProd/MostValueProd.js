'use client'
import React, { useEffect, useState } from 'react'
import DragCarousel from '../categoryCarousel/DragCarousel'
import MoreSellComp from '../MoreSellComp'

const getPublicDriveUrl = (url) => {
  const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/)
  return match ? `https://drive.google.com/uc?export=view&id=${match[1]}` : url
}

export default function MostValueProd() {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/mas-vendidos')
      .then((res) => res.json())
      .then((data) => {
        setProductos(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Error al cargar más vendidos', err)
        setLoading(false)
      })
  }, [])

  return (
    <div
      id='masVendidos'
      className='overflow-hidden w-full flex flex-col md:gap-32 md:mt-48'>
      <section className='flex flex-col md:gap-16'>
        <h3 className='md:px-16 text-[2rem] px-4 md:text-[4rem] tracking-tighter font-semibold'>
          Más Vendidos
        </h3>

        {loading ? (
          // SKELETON LOADING
          <div className='flex gap-4 overflow-x-auto px-4'>
            {Array.from({ length: 4 }).map((_, idx) => (
              <div
                key={idx}
                className='w-3/4 md:w-1/3 lg:w-1/4 h-[300px] bg-gray-200 animate-pulse rounded-xl'
              />
            ))}
          </div>
        ) : (
          <DragCarousel
            className='h-full'
            slideClassName='pl-4 md:pl-6 w-3/4 md:w-1/3 lg:w-1/4'>
            {productos.map((item) => {
              let imageArray = []

              if (Array.isArray(item.image)) {
                imageArray = item.image
              } else if (
                typeof item.image === 'string' &&
                item.image.trim() !== ''
              ) {
                imageArray = item.image.split(',').map((url) => url.trim())
              }

              const publicUrls = imageArray.map((url) => getPublicDriveUrl(url))

              const firstImage = publicUrls[0]

              return (
                <MoreSellComp
                  key={item.id}
                  img={firstImage}
                  title={item.name}
                  desc={
                    item.desc.length > 150
                      ? item.desc.slice(0, 100).trim() + '...'
                      : item.desc
                  }
                  category={item.category}
                  id={item.id}
                />
              )
            })}
          </DragCarousel>
        )}
      </section>
    </div>
  )
}
