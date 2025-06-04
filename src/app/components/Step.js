import Image from 'next/image'
import { ReactNode } from 'react'

const Step = ({ number, title, description, videoPlaceholder, isActive }) => {
  return (
    <div
      className={`min-h-[calc(80vh-180px)] flex flex-col justify-center items-center px-4 py-8 transition-opacity duration-300 ${
        isActive ? 'opacity-100' : 'opacity-0'
      }`}>
      <div className='max-w-4xl w-full'>
        <div className='mb-6'>
          <div className='flex items-center mb-2'>
            <div className='flex items-center justify-center w-8 h-8 rounded-full bg-black text-white font-semibold mr-3'>
              {number}
            </div>
            <h2 className='text-2xl font-bold text-gray-900 sm:text-3xl'>
              {title}
            </h2>
          </div>
          <p className='text-gray-700 text-lg'>{description}</p>
        </div>

        <div className='relative w-[80%] mx-auto overflow-hidden bg-gray-100 rounded-lg shadow-md aspect-video'>
          <Image
            height={300}
            width={300}
            src={videoPlaceholder}
            alt={`Video placeholder para ${title}`}
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 flex items-center justify-center'>
            <div className='w-16 h-16 bg-black bg-opacity-70 rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-80 transition-all'>
              <svg
                className='w-6 h-6 text-white'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M8 5V19L19 12L8 5Z'
                  fill='currentColor'
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Step
