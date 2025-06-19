import React from 'react'
import Banner from './components/banner'
import AutoCarousel from './components/auto-carusel'
import CategoryCarrusel from './components/categoryCarousel/CategoryCarrusel'
import TtNumbers from './components/TTNumbers/ttNumbers'
import MostValuedProducts from './components/MostValueProd/MostValueProd'
import TrustedClients from './components/TrustedClients/page'
import OurServices from './components/OurServices'
const carouselImages = [
  {
    src: '/images/banners/Banners2-01.jpg',
    alt: 'Eleva tu experiencia. Descubre lo mejor en tecnología.',
  },
  {
    src: '/images/banners/Banners3-01.jpg',
    alt: 'Productos de última generación',
  },
  {
    src: '/images/banners/Banners-01.jpg',
    alt: 'Garantía extendida en todos nuestros productos',
  },
]
const page = () => {
  return (
    <div className='w-full relative flex flex-col '>
      <Banner />
      <AutoCarousel  />
      <CategoryCarrusel id='Categorias' />
      {/* <TtNumbers /> */}
      <MostValuedProducts />
      <TrustedClients id='Testimonios' />
      <OurServices />
    </div>
  )
}

export default page
