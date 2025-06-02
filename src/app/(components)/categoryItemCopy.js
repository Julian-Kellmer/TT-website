import React from 'react'
import Image from 'next/image'

const categoryItem = ({ img, nombre }) => {
  return (
    <div className=' relative flex-col w-full  content-center  cursor-pointer  '>
      <Image
        width={300}
        height={350}
        className=' absolute top-0 left-[28%] hover:translate-y-[-10px] transition-all duration-300 ease-in-out'
        src={img}
        alt='item'
      />
      <div className=' '>
        <div className='bg-[#d9d9d9] w-[80%] h-[15rem]  mx-auto rounded-3xl'>
          {' '}
        </div>
        {/* <p className='text-black text-[3rem] font-medium text-center'>{nombre}</p> */}
      </div>
    </div>
  )
}

export default categoryItem
