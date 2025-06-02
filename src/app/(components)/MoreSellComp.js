import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const MoreSellComp = ({ img, title, desc, id, category }) => {
  const bgImage = `${img}`
  return (
    <Link
      href={`/producto/${category}/${id}`}
      className=' rounded-lg px-4 py-4 cursor-pointer'>
      <div className=' h-[70vh] bg-[#d9d9d9] rounded-lg  flex flex-col gap-4 px-4 py-4  '>
        <div className='relative h-[80%] rounded-lg w-full '>
          <Image
            src={img}
            alt='imageEJ'
            fill
            className='object-cover rounded'
          />
          <div className='absolute left-0 top-0 bg-white/50 px-2 py-2 rounded m-2'>
            <p className='text-[#1e1e1e] text-xs'>Más Vendido</p>
          </div>
        </div>
        <div className='flex flex-col '>
          <h4 className=' text-[#1e1e1e]  font-semibold text-[1.8rem] md:text-[2.2rem] -tracking-wider'>
            {title}
          </h4>
          <p className=' text-gray-500 font-light text-[1rem] '>{desc}</p>
          <div className='self-end'>
            <button className='px-4 py-2 bg-black text-white  rounded-xl  cursor-pointer'>
              Ver más
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}
export default MoreSellComp
