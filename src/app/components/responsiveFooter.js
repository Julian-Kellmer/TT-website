'use client'

import Link from 'next/link'
import { Instagram, Linkedin, ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function ResponsiveFooter() {
  const [openSection, setOpenSection] = useState(null)

  const toggleSection = (section) => {
    if (openSection === section) {
      setOpenSection(null)
    } else {
      setOpenSection(section)
    }
  }
  const handleWhatsAppRedirect = () => {
    const message =
      'Hola, estoy interesado en comprarles, ¿podrian asesorarme? '

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/+5491124040808?text=${encodedMessage}`

    window.open(whatsappUrl, '_blank')
  }
  return (
    <footer className='bg-white  py-8 px-4 md:px-6'>
      <div className='container mx-auto'>
        {/* Versión móvil con acordeón */}
        <div className='md:hidden'>
          <div className='mb-6'>
            <div className='mb-4'>
              <h2 className='text-4xl font-bold'>TT</h2>
              <p className='font-medium text-lg'>Tengo Tecno</p>
            </div>
            <div className='space-y-2 text-gray-600'>
              <p>Ventas@tengotecno.com.ar</p>
              <p>O&apos;higgins 1784, CABA</p>
            </div>
          </div>
          <div className='max-w-xl text-start mt-12'>
            <h3 className='text-2xl md:text-2xl font-semibold mb-4'>
              Suscribite a las últimas noticias
            </h3>

            {/* Web3Forms Form */}
            <form
              action='https://api.web3forms.com/submit'
              method='POST'
              className='flex flex-col items-start gap-4'>
              {/* ACCESS KEY DE WEB3FORMS */}
              <input
                type='hidden'
                name='access_key'
                value='9c1eb716-aeb4-4b21-b49c-f950be72c061'
              />

              {/* Redireccionar luego del submit (opcional) */}
              {/* <input
                  type='hidden'
                  name='redirect'
                  value='https://tengotecno.com.ar/gracias'
                /> */}

              <input
                type='email'
                name='email'
                placeholder='Ingresá tu correo electrónico'
                required
                className='w-full sm:flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
              <button
                type='submit'
                className='px-6 py-2 bg-black text-white rounded-md hover:bg-gray-300 hover:text-black transition duration-75 ease-in'>
                Suscribirme
              </button>
            </form>
          </div>
          {/* Acordeón para Productos */}
          <div className='border-b'>
            <button
              className='flex justify-between items-center w-full py-3'
              onClick={() => toggleSection('productos')}>
              <h3 className='font-medium text-lg'>Productos</h3>
              <ChevronDown
                size={20}
                className={`transition-transform ${
                  openSection === 'productos' ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openSection === 'productos' && (
              <ul className='space-y-2 text-gray-600 pb-4'>
                <li>
                  <Link
                    href='/Catalog/macbook'
                    className='hover:underline'>
                    Mackbook Pro
                  </Link>
                </li>
                <li>
                  <Link
                    href='/Catalog/macbook'
                    className='hover:underline'>
                    Mackbook air
                  </Link>
                </li>
                <li>
                  <Link
                    href='/Catalog/ipad'
                    className='hover:underline'>
                    iPad Pro
                  </Link>
                </li>
                <li>
                  <Link
                    href='/Catalog/ipad'
                    className='hover:underline'>
                    iPad Air
                  </Link>
                </li>
                <li>
                  <Link
                    href='/Catalog/notebooks'
                    className='hover:underline'>
                    NoteBooks
                  </Link>
                </li>
                <li>
                  <Link
                    href='/Catalog/notebooks'
                    className='hover:underline'>
                    NoteBooks Gamers
                  </Link>
                </li>
                <li>
                  <Link
                    href='/Catalog/parlantes'
                    className='hover:underline'>
                    Parlantes
                  </Link>
                </li>
              </ul>
            )}
          </div>

          {/* Acordeón para Institucional */}
          <div className='border-b'>
            <button
              className='flex justify-between items-center w-full py-3'
              onClick={() => toggleSection('institucional')}>
              <h3 className='font-medium text-lg'>Institucional</h3>
              <ChevronDown
                size={20}
                className={`transition-transform ${
                  openSection === 'institucional' ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openSection === 'institucional' && (
              <ul className='space-y-2 text-gray-600 pb-4'>
                <li>
                  <Link
                    href='#'
                    className='hover:underline'>
                    Términos y condiciones
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='hover:underline'>
                    Ventas mayoristas
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='hover:underline'>
                    Políticas
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleWhatsAppRedirect}
                    className='hover:underline'>
                    Contacto
                  </button>
                </li>
              </ul>
            )}
          </div>

          {/* Acordeón para Nosotros */}
          <div className='border-b'>
            <button
              className='flex justify-between items-center w-full py-3'
              onClick={() => toggleSection('nosotros')}>
              <h3 className='font-medium text-lg'>Nosotros</h3>
              <ChevronDown
                size={20}
                className={`transition-transform ${
                  openSection === 'nosotros' ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openSection === 'nosotros' && (
              <ul className='space-y-2 text-gray-600 pb-4'>
                <li>
                  <Link
                    href='#'
                    className='hover:underline'>
                    Testimonios
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='hover:underline'>
                    Nosotros
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='hover:underline'>
                    Equipo
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='hover:underline'>
                    Comunidad
                  </Link>
                </li>
              </ul>
            )}
          </div>

          {/* Redes sociales */}
          <div className='flex space-x-4 mt-6'>
            <Link
              href='https://www.instagram.com/tengotodotecno/'
              className='hover:text-gray-600'>
              <Instagram size={24} />
            </Link>
            <Link
              href='#'
              className='hover:text-gray-600'>
              <Linkedin size={24} />
            </Link>
          </div>
        </div>

        {/* Versión desktop */}
        <div className='hidden md:grid md:grid-cols-4 gap-8'>
          {/* Columna 1: Logo y contacto */}
          <div>
            <div className='mb-4'>
              <h2 className='text-4xl font-bold'>TT</h2>
              <p className='font-medium text-lg'>Tengo Tecno</p>
            </div>
            <div className='space-y-2 text-gray-600'>
              <p>Ventas@tengotecno.com.ar</p>
              <p>O&apos;higgins 1784, C1426 CABA, Argentina</p>
            </div>

            <div className='max-w-xl text-start mt-12'>
              <h3 className='text-2xl md:text-2xl font-semibold mb-4'>
                Suscribite a las últimas noticias
              </h3>

              {/* Web3Forms Form */}
              <form
                action='https://api.web3forms.com/submit'
                method='POST'
                className='flex flex-col items-start gap-4'>
                {/* ACCESS KEY DE WEB3FORMS */}
                <input
                  type='hidden'
                  name='access_key'
                  value='9c1eb716-aeb4-4b21-b49c-f950be72c061'
                />

                {/* Redireccionar luego del submit (opcional) */}
                {/* <input
                  type='hidden'
                  name='redirect'
                  value='https://tengotecno.com.ar/gracias'
                /> */}

                <input
                  type='email'
                  name='email'
                  placeholder='Ingresá tu correo electrónico'
                  required
                  className='w-full sm:flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                <button
                  type='submit'
                  className='px-6 py-2 bg-black text-white rounded-md hover:bg-gray-300 hover:text-black transition duration-75 ease-in'>
                  Suscribirme
                </button>
              </form>
            </div>
          </div>

          {/* Columna 2: Productos */}
          <div>
            <h3 className='font-medium text-lg mb-4'>Productos</h3>
            <ul className='space-y-2 text-gray-600'>
              <li>
                <Link
                  href='/Catalog/macbook'
                  className='hover:underline'>
                  Mackbook Pro
                </Link>
              </li>
              <li>
                <Link
                  href='/Catalog/macbook'
                  className='hover:underline'>
                  Mackbook air
                </Link>
              </li>
              <li>
                <Link
                  href='/Catalog/ipad'
                  className='hover:underline'>
                  iPad Pro
                </Link>
              </li>
              <li>
                <Link
                  href='/Catalog/ipad'
                  className='hover:underline'>
                  Ipad Air
                </Link>
              </li>
              <li>
                <Link
                  href='/Catalog/notebook'
                  className='hover:underline'>
                  Notebook
                </Link>
              </li>
              <li>
                <Link
                  href='/Catalog/notebook'
                  className='hover:underline'>
                  Notebooks Gamer
                </Link>
              </li>
              <li>
                <Link
                  href='/Catalog/parlantes'
                  className='hover:underline'>
                  Parlantes
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Institucional */}
          <div>
            <h3 className='font-medium text-lg mb-4'>Institucional</h3>
            <ul className='space-y-2 text-gray-600'>
              <li>
                <button
                  onClick={handleWhatsAppRedirect}
                  className='hover:underline'>
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Columna 4: Nosotros y redes sociales */}
          <div className='flex flex-col justify-between'>
            <div>
              <h3 className='font-medium text-lg mb-4'>Secciones</h3>
              <ul className='space-y-2 text-gray-600'>
                <li>
                  <a
                    href='#Categorias'
                    className='hover:underline'>
                    Categorias
                  </a>
                </li>
                <li>
                  <a
                    href='#masVendidos'
                    className='hover:underline'>
                    Más vendidos
                  </a>
                </li>
                <li>
                  <a
                    href='#Testimonios'
                    className='hover:underline'>
                    Testimonios
                  </a>
                </li>
              </ul>
            </div>
            <div className='flex space-x-4 mt-6'>
              <a
                href='https://www.instagram.com/tengotodotecno/'
                className='hover:text-gray-600'>
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
