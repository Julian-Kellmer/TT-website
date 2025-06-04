'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from './ui/badge'
import { Catalog } from '../../mockdata/mockdata'

const getPublicDriveUrl = (url) => {
  const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/)
  return match ? `https://drive.google.com/uc?export=view&id=${match[1]}` : url
}

const Displaygrid = ({ category, products }) => {
  const [filteredProducts, setFilteredProducts] = useState([])
  const [filters, setFilters] = useState(null)
  const [activeFilters, setActiveFilters] = useState({})

  useEffect(() => {
    if (!category) return

    const categoryObj = Catalog.find((cat) => cat.titulo === category)
    if (!categoryObj) {
      setFilters(null)
      setFilteredProducts([])
      return
    }

    const { filtros, productos } = categoryObj
    setFilters(filtros)
    setFilteredProducts(productos)
    setActiveFilters({})
  }, [category])

  useEffect(() => {
    if (!products) return

    if (Object.keys(activeFilters).length === 0) {
      setFilteredProducts(products)
      return
    }

    const result = products.filter((product) =>
      Object.entries(activeFilters).every(
        ([groupKey, selectedValue]) => product[groupKey] === selectedValue
      )
    )

    setFilteredProducts(result)
  }, [activeFilters, products])

  const handleSelect = (groupKey, value) => {
    setActiveFilters((prev) => ({
      ...prev,
      [groupKey]: value,
    }))
  }

  const handleDeselect = (groupKey) => {
    setActiveFilters((prev) => {
      const updated = { ...prev }
      delete updated[groupKey]
      return updated
    })
  }

  const formatText = (text) =>
    text
      .replace(/_/g, ' ')
      .toLowerCase()
      .replace(/(^|\s)\S/g, (l) => l.toUpperCase())

  return (
    <main>
      {/* Filtros en fila */}
      {filters && (
        <div className='flex flex-wrap gap-4 mb-6'>
          {Object.entries(filters).map(([groupKey, values]) => (
            <div
              key={groupKey}
              className='flex flex-col'>
              <label className='text-sm font-medium capitalize mb-1'>
                {formatText(groupKey)}
              </label>
              <select
                value={activeFilters[groupKey] || ''}
                onChange={(e) => {
                  const selected = e.target.value
                  selected
                    ? handleSelect(groupKey, selected)
                    : handleDeselect(groupKey)
                }}
                className='capitalize border border-gray-300 rounded-md px-4 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition'>
                <option value=''>Todas</option>
                {values.map((value, index) => (
                  <option
                    key={index}
                    value={value}>
                    {formatText(value)}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
      )}

      {/* Productos */}
      {filteredProducts?.length > 0 ? (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border-t border-gray-200 pt-4'>
          {filteredProducts.map((product) => {
            const [firstImage, secondImage] =
              product.image.map(getPublicDriveUrl)

            return (
              <Link
                key={product.id}
                href={`/producto/${category}/${product.id}`}
                className='border border-gray-200 p-4 rounded-md hover:shadow-md transition-shadow'>
                <div className='flex flex-col items-center group'>
                  <div className='relative w-[300px] h-[200px] overflow-hidden'>
                    <Image
                      sizes='(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw'
                      priority
                      src={firstImage}
                      alt={product.name}
                      fill
                      className='object-contain absolute inset-0 transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0'
                    />
                    {secondImage && (
                      <Image
                        sizes='(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw'
                        priority
                        src={secondImage}
                        alt={`${product.name} alternate`}
                        fill
                        className='object-contain absolute inset-0 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100'
                      />
                    )}
                  </div>

                  <div className='w-full mt-4 text-center '>
                    <Badge className='mb-2 capitalize'>{product.brand}</Badge>
                    <h3 className='text-lg font-medium'>{product.name}</h3>
                    <div className='flex text-center justify-center gap-2  mt-2'>
                      <p className='text-gray-600 text-xl '>Desde</p>
                      <p className='text-xl font-bold mb-2'>{product.price} </p>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      ) : (
        <div>
          <h1 className='text-center text-lg mt-10'>
            Lo siento, no contamos con productos que coincidan con este filtro.
          </h1>
        </div>
      )}
    </main>
  )
}

export default Displaygrid
