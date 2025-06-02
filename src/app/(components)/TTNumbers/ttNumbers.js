'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'
import RollingNumber from '../RollingNumber'

const stats = [
  { number: 250, label: 'Productos en Stock' },
  { number: 1000, label: 'Clientes satisfechos' },
  { number: 50, label: 'Ofertas Activas' },
  { number: 30, label: 'Empresas Abastecidas' },
]

const TtNumbers = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const [index, setIndex] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % stats.length)
      }, 2000)
      return () => clearInterval(interval)
    }
  }, [isMobile])

  return (
    <section className='flex flex-col content-center justify-center w-full md:px-16 gap-16 px-4 py-12'>
      <div className='flex flex-col mx-auto text-center justify-start'>
        <h2 className='text-black text-[2.5rem] md:text-[5rem] tracking-tighter font-semibold'>
          Números de TT
        </h2>
        <p className='md:text-[1.6rem] text-[1.2rem] font-light'>
          Estadísticas que demuestran nuestra efectividad y profesionalismo.
        </p>
      </div>

      {isMounted && (
        isMobile ? (
          <div className='relative h-[150px] overflow-hidden'>
            <AnimatePresence mode='wait'>
              <motion.div
                key={index}
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className='absolute w-full flex flex-col items-center'
              >
                <RollingNumber number={stats[index].number} />
                <p className='text-[1.5rem] font-light text-gray-900 text-center mt-2'>
                  {stats[index].label}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        ) : (
          <div className='md:flex grid grid-cols-2 gap-8 justify-between px-16'>
            {stats.map((item, i) => (
              <div
                key={i}
                className='flex flex-col content-center items-center text-center'
              >
                <RollingNumber number={item.number} />
                <p className='text-[1.5rem] font-light text-gray-900'>
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        )
      )}
    </section>
  )
}

export default TtNumbers
