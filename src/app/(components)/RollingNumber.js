'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const RollingNumber = ({ number = 0 }) => {
  const containerRef = useRef(null)
  const boxesRef = useRef([])

  // Ensure number is converted to string and split into digits
  const finalDigits = number.toString().padStart(1, '0').split('').map(Number)

  useEffect(() => {
    // Create ScrollTrigger instance
    const scrollTriggers = []

    // Animate each digit box
    boxesRef.current.forEach((box, index) => {
      if (!box) return

      // Calculate the correct position based on the digit (each digit is 10% of the total height)
      // For a digit '7', we need to move up by 7 * 10% = 70%
      const movePercent = finalDigits[index] * -10

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          toggleActions: 'play none none reset',
        },
      })

      tl.fromTo(
        box,
        { y: 0 },
        {
          y: `${movePercent}%`,
          duration: 1.5,
          delay: index * 0.2,
          ease: 'power3.out',
        }
      )

      scrollTriggers.push(tl.scrollTrigger)
    })

    // Cleanup function
    return () => {
      scrollTriggers.forEach((trigger) => {
        if (trigger) trigger.kill()
      })
    }
  }, [number, finalDigits])

  return (
    <div
      ref={containerRef}
      className='flex '>
      {finalDigits.map((digit, index) => (
        <div
          key={index}
          className='overflow-hidden h-[5.5rem] w-[2rem]  '>
          <div
            className='flex flex-col'
            ref={(el) => (boxesRef.current[index] = el)}>
            {Array.from({ length: 10 }, (_, i) => (
              <div
                key={i}
                className='h-[5.5rem] w-[2rem] flex items-center justify-center text-[3.5rem] font-bold'>
                {i}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default RollingNumber
