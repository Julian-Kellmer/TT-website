'use client'
import { useState, useRef, useEffect } from 'react'
import ProgressBar from '../components/ProgresBar'
import Step from '../components/Step'

const steps = [
  {
    title: 'Elegí el producto y sus opciones',
    description:
      'Explora nuestra web y selecciona el producto que te interesa. Si corresponde, elige las variantes disponibles, como procesador, RAM y almacenamiento, para personalizar tu compra según tus necesidades.',
    video: '/images/banners/Video1.mp4',
  },
  {
    title: 'Hacé clic en “Consultar Ahora',
    description:
      'Una vez que hayas seleccionado tu producto y opciones, Hacé clic en el botón "Comprar". Vas a ser redirigido automáticamente a un chat con uno de nuestros asesores, quien tendrá acceso a la información de tu compra.',
    video: '/images/banners/Video2.mp4',
  },
  {
    title: 'Coordiná todo con el asesor',
    description:
      'En el chat, podrás definir los detalles finales de tu compra, incluyendo el medio de pago, envío o retiro en nuestras oficinas. Nuestros asesores están disponibles para ayudarte de manera rápida y segura.',
    video: '/images/banners/Video3.mp4',
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
    <div className='flex flex-col mt-[6vh] h-screen bg-white overflow-hidden'>
      <header className='text-center pt-8 pb-4 px-4'>
        <h1 className='text-3xl font-bold text-gray-900 sm:text-4xl mb-1'>
          Comprar en Tengo Tecno siempre fue fácil.
        </h1>
        <p className='text-gray-600'>
          Seguí estos pasos para completar tu compra
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
            className='min-h-full snap-start '>
            <video
              controls
              className='w-full max-w-3xl h-auto rounded-lg mx-auto'
              src={step.video}
              title={step.title}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TengoTecnoGuide
