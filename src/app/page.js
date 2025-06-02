import React from 'react'
import Banner from './(components)/banner'
import AutoCarousel from './(components)/auto-carusel'
import DragCarousel from './(components)/categoryCarousel/DragCarousel'
import CategoryCarrusel from './(components)/categoryCarousel/CategoryCarrusel'
import TtNumbers from './(components)/TTNumbers/ttNumbers'
import Image from 'next/image'
import MostValuedProducts from './(components)/MostValueProd/MostValueProd'
import TrustedClients from './(components)/TrustedClients/page'
import OurServices from './(components)/OurServices/page'
const carouselImages = [
  {
    src: '/images/banners/banner1.jpg',
    alt: 'Eleva tu experiencia. Descubre lo mejor en tecnología.',
  },
  {
    src: '/images/banners/BannerNotebooks.jpg',
    alt: 'Productos de última generación',
  },
  {
    src: '/images/banners/BannerMac.jpg',
    alt: 'Garantía extendida en todos nuestros productos',
  },
  {
    src: '/images/banners/pruebafinal.jpg',
    alt: 'Garantía extendida en todos nuestros productos',
  },
  
]
const page = () => {
  return (
    <div className='w-full relative flex flex-col '>
      <Banner />
      <AutoCarousel images={carouselImages} />
      <CategoryCarrusel />
      <TtNumbers />
      <MostValuedProducts />
      <TrustedClients />
      <OurServices />
    </div>
  )
}

export default page
