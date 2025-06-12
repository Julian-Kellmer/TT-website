'use client'
import React, { useEffect, useState } from 'react'
import ProductOptions from '../components/product-opinions'
import { ProductTabs } from '../components/product-tabs'
import Image from 'next/image'
import InfoAccordion from './infoAccordion'
import Reccommended from './Recommended'

const getPublicDriveUrl = (url) => {
  const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/)
  return match ? `https://drive.google.com/uc?export=view&id=${match[1]}` : url
}

const InfoProduct = ({ categoria, selectProduct }) => {
  const [selectedSpecs, setSelectedSpecs] = useState({})
  const [mainImageIndex, setMainImageIndex] = useState(0)
  const variants = selectProduct.techSpecs || []
  const optionKeys =
    variants.length > 0
      ? Object.keys(variants[0]).filter((k) => k !== 'price')
      : []

  const imageUrls = Array.isArray(selectProduct.image)
    ? selectProduct.image.map((url) => getPublicDriveUrl(url.trim()))
    : selectProduct.image.split(',').map((url) => getPublicDriveUrl(url.trim()))

  // 🧠 Autoseleccionar valores únicos
  useEffect(() => {
    if (!variants.length) return

    const newSelectedSpecs = { ...selectedSpecs }

    optionKeys.forEach((key, index) => {
      const options = getOptionsForKey(index)
      if (options.length === 1 && !newSelectedSpecs[key]) {
        newSelectedSpecs[key] = options[0]
      }
    })

    setSelectedSpecs(newSelectedSpecs)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [variants])

  const getOptionsForKey = (keyIndex) => {
    const key = optionKeys[keyIndex]
    if (!key) return []

    const filtered = variants.filter((variant) =>
      optionKeys
        .slice(0, keyIndex)
        .every((prevKey) =>
          selectedSpecs[prevKey]
            ? variant[prevKey] === selectedSpecs[prevKey]
            : true
        )
    )

    return [...new Set(filtered.map((variant) => variant[key]))]
  }

  const isSelectionComplete = optionKeys.every((k) => selectedSpecs[k])

  const selectedVariant = isSelectionComplete
    ? variants.find((v) => optionKeys.every((k) => v[k] === selectedSpecs[k]))
    : null

  const canBuy = !variants.length || !!selectedVariant
  const priceToDisplay = !variants.length
    ? selectProduct.price
    : selectedVariant
    ? selectedVariant.price
    : null

  const handleSpecSelect = (key, value) => {
    const keyIndex = optionKeys.indexOf(key)
    const updatedSpecs = { ...selectedSpecs }

    optionKeys.forEach((k, i) => {
      if (i < keyIndex) return
      if (i === keyIndex) updatedSpecs[k] = value
      else delete updatedSpecs[k]
    })

    setSelectedSpecs(updatedSpecs)
  }

  const handleWhatsAppRedirect = () => {
    const specSummary = Object.entries(selectedSpecs)
      .map(([key, val]) => `${key}: ${val}`)
      .join(', ')

    const message = `Hola, estoy interesado en el producto ${
      selectProduct.name
    }${
      specSummary ? ` con las siguientes características: ${specSummary}` : ''
    }`

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/+5491124040808?text=${encodedMessage}`

    window.open(whatsappUrl, '_blank')
  }

  return (
    <div>
      <div className='flex flex-col md:flex-row gap-8 mb-12'>
        <div className='flex-1 flex flex-col items-center bg-gray-50 rounded-lg p-4'>
          <Image
            src={imageUrls[mainImageIndex] || '/images/macbook.png'}
            alt={`${selectProduct.name} main`}
            width={500}
            height={400}
            className='object-contain'
          />
          <div className='flex gap-2 mt-4 md:flex-nowrap flex-wrap'>
            {imageUrls.map((img, index) => (
              <button
                key={index}
                onClick={() => setMainImageIndex(index)}
                className={`w-16 h-16 border rounded overflow-hidden ${
                  mainImageIndex === index
                    ? 'ring-2 ring-gray-500'
                    : 'opacity-60 hover:opacity-100'
                }`}>
                <Image
                  src={img}
                  alt={`${selectProduct.name} ${index}`}
                  width={64}
                  height={64}
                  className='object-cover w-full h-full'
                />
              </button>
            ))}
          </div>
        </div>

        <div className='flex-1 order-2 md:order-1 flex flex-col justify-between shadow-xl rounded-2xl py-4 pb-8 px-8'>
          <div className='flex flex-col gap-4 py-16 px-8 '>
            <h1 className='text-4xl font-bold uppercase'>
              {selectProduct.name}
            </h1>
            {priceToDisplay ? (
              <p className='text-2xl font-light mb-6 text-black/50'>
                {priceToDisplay}
              </p>
            ) : (
              <p className='text-xl font-light tracking-tighter text-black p-2 bg-gray-100 rounded mx-auto text-start'>
                Por favor termine de seleccionar las variantes para mostrar el
                precio correcto
              </p>
            )}
            <div className='border-t border-gray-200 pt-6  gap-4'>
              {optionKeys.map((key, i) => (
                <div
                  key={key}
                  className='mb-4'>
                  <h4 className='text-sm font-medium capitalize mb-2'>{key}</h4>
                  <div className='flex gap-2 flex-wrap'>
                    {getOptionsForKey(i).map((val) => {
                      const isSelected = selectedSpecs[key] === val
                      return (
                        <button
                          key={val}
                          onClick={() => handleSpecSelect(key, val)}
                          className={`hover:bg-gray-500 hover:text-white hover:border-white transition-all duration-200 ease-in-out flex items-center justify-center rounded-full border text-sm px-3 py-1 ${
                            isSelected
                              ? 'bg-black text-white'
                              : 'bg-white text-black'
                          }`}>
                          {val}
                        </button>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            disabled={!canBuy}
            onClick={handleWhatsAppRedirect}
            className={
              canBuy
                ? `self-start px-8 py-4 rounded bg-gray-200 hover:bg-[#1e1e1e] shadow-2xl hover:text-white transition-colors duration-200 cursor-pointer font-semibold text-xl tracking-tight`
                : `self-start px-6 py-4 rounded bg-gray-200 shadow-2xl cursor-not-allowed font-semibold text-xl tracking-tight`
            }>
            Comprar
          </button>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div>
          <h2 className='text-2xl font-bold mb-4'>Descripción</h2>
          <p className='text-gray-700'>{selectProduct.desc}</p>
        </div>
        {/* <div className='rounded-lg flex flex-col gap-4 justify-between'>
          <ProductTabs descSpecs={selectProduct.descSpecs} />
        </div> */}
      </div>
      <Reccommended/>
      <InfoAccordion />
    </div>
  )
}

export default InfoProduct
