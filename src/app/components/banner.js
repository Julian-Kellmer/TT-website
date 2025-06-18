import React from 'react'

const Banner = () => {
  return (
    <div className='  stock-ticker  '>
      <ul className='whitespace-nowrap animate-marquee text-white flex gap-64 items-center '>
        <li>
          <span>Soporte 24/7</span>{' '}
        </li>
        <li>
          <span>Todos nuestros producto son originales</span>{' '}
        </li>
        <li>
          <span>Garantia Oficial</span>{' '}
        </li>
        <li>
          <span>Soporte 24/7</span>{' '}
        </li>
        <li>
          <span>Todos Nuestros Producto Son Originales</span>{' '}
        </li>
        <li>
          <span>Garantia Oficial</span>{' '}
        </li>
      </ul>
      <ul
        aria-hidden='true'
        className='whitespace-nowrap animate-marquee text-white flex gap-64 items-center '>
        <li>
          <span>Soporte 24/7</span>{' '}
        </li>
        <li>
          <span>Todos nuestros producto son originales</span>{' '}
        </li>
        <li>
          <span>Garantia 24/4</span>{' '}
        </li>
        <li>
          <span>Soporte 24/7</span>{' '}
        </li>
        <li>
          <span>Todos nuestros producto son originales</span>{' '}
        </li>
        <li>
          <span>Garantia 24/4</span>{' '}
        </li>
      </ul>
    </div>
  )
}

export default Banner
