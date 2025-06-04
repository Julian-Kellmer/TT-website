import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

const sections = [
  {
    title: 'Envíos',
    summary: 'Te ofrecemos opciones seguras y flexibles para tu compra.',
    content: (
      <p className='text-sm text-gray-700 leading-relaxed'>
        Realizamos envíos a todo el país de forma segura y rápida, para que
        recibas tu compra donde estés. Si preferís, también podés retirar tu
        pedido sin costo por nuestras oficinas, coordinando previamente con
        nuestro equipo. Importante: Los pedidos con envío deben abonarse
        previamente por un medio electrónico.
      </p>
    ),
  },
  {
    title: 'Garantía oficial',
    summary: 'Política pensada para brindarte respaldo y tranquilidad.',
    content: (
      <p className='text-sm text-gray-700 leading-relaxed'>
        Todos nuestros productos cuentan con garantía oficial del fabricante,
        lo que asegura respaldo directo y cobertura ante cualquier falla de
        fabricación. Comprá con total tranquilidad: en caso de inconvenientes,
        gestionamos el contacto con el servicio técnico autorizado
        correspondiente.
      </p>
    ),
  },
  {
    title: 'Soporte 24/7',
    summary: 'Asistencia permanente en cualquier momento.',
    content: (
      <p className='text-sm text-gray-700 leading-relaxed'>
        Nuestro equipo está disponible las 24 horas, los 7 días de la semana
        para brindarte atención personalizada y resolver cualquier consulta que
        tengas. Estamos para ayudarte siempre que lo necesites, con respuestas
        claras, rápidas y a medida.
      </p>
    ),
  },
]

export default function InfoAccordion() {
  const [openSections, setOpenSections] = useState([])

  const toggleSection = (index) => {
    if (openSections.includes(index)) {
      setOpenSections(openSections.filter((i) => i !== index))
    } else {
      setOpenSections([...openSections, index])
    }
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 border-t pt-8'>
      {sections.map((section, index) => {
        const isOpen = openSections.includes(index)

        return (
          <div
            key={index}
            className=' rounded-xl p-6 bg-white  transition-all duration-300'>
            <button
              className='w-full flex justify-between items-center text-left'
              onClick={() => toggleSection(index)}
            >
              <div>
                <h3 className='font-bold text-2xl'>{section.title}</h3>
                <p className='text-sm text-gray-600 mt-1'>{section.summary}</p>
              </div>
              {isOpen ? (
                <ChevronUp className='w-5 h-5' />
              ) : (
                <ChevronDown className='w-5 h-5' />
              )}
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key={`content-${index}`} // ← Key única por sección
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className='overflow-hidden'>
                  <div className='mt-4'>{section.content}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
