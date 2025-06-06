import React from 'react'
import Image from 'next/image'
import DragCarousel from './DragCarousel'
import { Catalog } from '../../../mockdata/mockdata'
import Link from 'next/link'

// {Catalog.map((item, index) => (
//               <CategoryItem
//                 isCatalogOpen={isCatalogOpen}
//                 setIsCatalogOpen={setIsCatalogOpen}
//                 key={index}
//                 img={item.img}
//                 nombre={item.titulo}
//               />
//             ))}

const CategoryCarrusel = () => {
  return (
    <section id='Categorias' className='w-full flex flex-col mt-16'>
      <h3 className='md:text-[5rem] text-[3rem] tracking-tighter px-4 md:px-16 font-semibold'>
        Categorias
      </h3>
      <DragCarousel
        className='h-2/3'
        slideClassName='pl-4 md:pl-6 w-3/4 md:w-1/3 lg:w-1/4'>
        {Catalog.map((item, index) => (
          <Link
            href={`/Catalog/${item.titulo}`}
            key={index}
            className='aspect-square relative bg-white rounded-lg flex flex-col items-center justify-center'>
            <div className='relative w-full h-44 md:h-52 flex items-center justify-center bg-gray-200 rounded-lg py-2 overflow-hidden'>
              <Image
                src={item.img}
                alt={item.titulo}
                width={200}
                height={200}
                className='object-contain max-h-full h-auto w-auto transition-transform duration-300 ease-in-out hover:-translate-y-2'
              />
            </div>
            <p className='text-[1.3rem] font-semibold pt-8 capitalize'>
              {item.titulo || ''}
            </p>
          </Link>
        ))}
      </DragCarousel>
    </section>
  )
}

export default CategoryCarrusel
