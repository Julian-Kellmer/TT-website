'use client'
import { useState, useRef, useEffect } from 'react'
import ProgressBar from '../components/ProgresBar'
import Step from '../components/Step'

const steps = [
  {
    title: 'Elegí el producto y sus opciones',
    description:
      'Navegá por nuestra web, seleccioná el producto que te interesa y, si aplica, elegí las variantes disponibles (como color, almacenamiento o procesador).',
    videoPlaceholder: '/images/banners/banner2.jpg',
  },
  {
    title: 'Hacé clic en “Consultar Ahora',
    description:
      'Te redirigimos automáticamente a un chat con nuestro asesor, ya con el producto y las opciones seleccionadas.',
    videoPlaceholder: '/images/banners/banner2.jpg',
  },
  {
    title: 'Coordiná todo con el asesor',
    description:
      'Vas a poder definir medio de pago, envío o retiro por nuestras oficinas de forma rápida y segura.',
    videoPlaceholder: '/images/banners/banner2.jpg',
  },
]

const TengoTecnoGuide = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const containerRef = useRef(null)
  const stepRefs = useRef([])

  const goToStep = (step) => {
    if (step >= 0 && step < steps.length) {
      setCurrentStep(step)

      // Scroll to the step
      if (containerRef.current && stepRefs.current[step]) {
        containerRef.current.scrollTo({
          top: step * containerRef.current.clientHeight,
          behavior: 'smooth',
        })
      }
    }
  }

  const handleNext = () => goToStep(currentStep + 1)
  const handlePrev = () => goToStep(currentStep - 1)

  // Set up scroll snapping and scroll event handling
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      const scrollPosition = container.scrollTop
      const height = container.clientHeight
      const newStep = Math.round(scrollPosition / height)

      if (newStep !== currentStep) {
        setCurrentStep(newStep)
      }
    }

    container.addEventListener('scroll', handleScroll)
    return () => container.removeEventListener('scroll', handleScroll)
  }, [currentStep])

  return (
    <div className='flex flex-col mt-[15vh] h-screen bg-white overflow-hidden'>
      <header className='text-center pt-8 pb-4 px-4'>
        <h1 className='text-3xl font-bold text-gray-900 sm:text-4xl mb-1'>
          Comprar en Tengo Tecno siempre fue fácil.
        </h1>
        <p className='text-gray-600'>
          Seguí estos simples pasos y descubrí lo simple que es.
        </p>
      </header>

      <ProgressBar
        currentStep={currentStep}
        totalSteps={steps.length}
        onStepClick={goToStep}
      />

      <div
        ref={containerRef}
        className='flex-1 overflow-y-auto snap-y snap-mandatory'
        style={{ scrollSnapType: 'y mandatory' }}>
        {steps.map((step, index) => (
          <div
            key={index}
            ref={(el) => (stepRefs.current[index] = el)}
            className='min-h-full snap-start'>
            <Step
              number={index + 1}
              title={step.title}
              description={step.description}
              videoPlaceholder={step.videoPlaceholder}
              isActive={currentStep === index}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TengoTecnoGuide
