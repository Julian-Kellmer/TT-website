'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { Catalog } from '../../mockdata/mockdata'
import CategoryItem from './categoryItem'
import { gsap } from 'gsap'
import { usePathname } from 'next/navigation'

const Header = () => {
  const [isCatalogOpen, setIsCatalogOpen] = useState(false)
  const [showCatalog, setShowCatalog] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileCatalog, setIsMobileCatalog] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const categoryRef = useRef(null)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const pathname =usePathname()
  const isHome=pathname==='/'

  const handleCatalogClick = () => {
    if (!isCatalogOpen) setShowCatalog(true)
    setIsCatalogOpen((prev) => !prev)
  }
  const handleWhatsAppRedirect = () => {
    const message =
      'Hola, estoy interesado en comprarles, ¿podrian asesorarme? '

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/+5491124040808?text=${encodedMessage}`

    window.open(whatsappUrl, '_blank')
  }
  // Animación de catálogo (desktop)
  useEffect(() => {
    if (isCatalogOpen && categoryRef.current) {
      gsap.fromTo(
        categoryRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
      )
    } else if (!isCatalogOpen && categoryRef.current) {
      gsap.to(categoryRef.current, {
        opacity: 0,
        y: 70,
        duration: 0.5,
        ease: 'power2.out',
        onComplete: () => setShowCatalog(false),
      })
    }
  }, [isCatalogOpen])

  return (
    <header
  className={`fixed top-0 left-0 w-full z-50 px-4 md:px-32 py-2 ${
    isHome ? (scrolled ? 'md:py-2' : 'md:py-10') : 'md:py-2'
  } transition-all duration-300`}>
      {/* NAV DESKTOP */}
      <nav
        className={`hidden lg:flex items-center justify-between px-16 py-2 bg-[#eaeaea] rounded`}>
        <Link href='/'>
          <Image
            src='/images/TT.svg'
            width={35}
            height={35}
            alt='logo'
          />
        </Link>
        <div className='flex gap-8'>
          {/* <Link
            href='/aboutUs'
            className='hover:text-white hover:bg-black px-3 py-2 rounded'>
            Sobre Nosotros
          </Link> */}
          <button
            onClick={handleCatalogClick}
            className='hover:text-white hover:bg-black px-3 py-2 rounded'>
            Catálogo
          </button>
          <Link
            href='/buySteps'
            className='hover:text-white hover:bg-black px-3 py-2 rounded'>
            Cómo Comprar
          </Link>
        </div>
        <button
          onClick={handleWhatsAppRedirect}
          className='bg-[#dadada] px-4 py-2 rounded hover:text-white hover:bg-[#1e1e1e]'>
          Comprar
        </button>
      </nav>

      {/* NAV MOBILE */}
      <nav className='lg:hidden rounded-xl flex items-center justify-between px-6 py-2 bg-[#eaeaea]'>
        <Link href='/'>
          <Image
            src='/images/TT.svg'
            width={35}
            height={35}
            alt='logo'
          />
        </Link>
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className='text-2xl'>
          ☰
        </button>
      </nav>

      {/* OVERLAY */}
      {(isMobileMenuOpen || showCatalog) && (
        <div
          className='fixed inset-0 bg-black/50 z-40'
          onClick={() => {
            setIsMobileMenuOpen(false)
            setIsCatalogOpen(false)
            setIsMobileCatalog(false)
            setShowCatalog(false)
          }}
        />
      )}

      {/* MOBILE MENU SLIDE-IN */}
      {isMobileMenuOpen && !isMobileCatalog && (
        <div className='fixed z-50 top-0 left-0 w-full h-full bg-[#1e1e1e] px-8 py-6 flex flex-col gap-6 animate-fade-in'>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className='self-end text-2xl font-bold text-white'>
            ✕
          </button>
          <ul className='flex flex-col gap-16 justify-start  '>
            <li>
              <Link
                href='/aboutUs'
                onClick={() => setIsMobileMenuOpen(false)}
                className='text-white font-semibold tracking-tighter text-6xl'>
                Sobre Nosotros
              </Link>
            </li>
            <li>
              <button
                onClick={() => {
                  setIsMobileCatalog(true)
                }}
                className='text-white font-semibold tracking-tighter text-6xl'>
                Catálogo
              </button>
            </li>
            <li>
              <Link
                href='/buySteps'
                onClick={() => setIsMobileMenuOpen(false)}
                className='text-white font-semibold tracking-tighter text-6xl'>
                Cómo Comprar
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* MOBILE CATÁLOGO SLIDE */}
      {isMobileCatalog && (
        <div className='fixed z-50 top-0 left-0 w-full h-full bg-[#1e1e1e] text-white px-4 py-6 flex flex-col gap-4 overflow-y-auto animate-slide-left'>
          <button
            onClick={() => setIsMobileCatalog(false)}
            className='text-left text-white text-3xl tracking-tighter mb-4'>
            ← Volver
          </button>
          <div className='flex flex-wrap justify-center gap-4'>
            {Catalog.map((item, index) => (
              <CategoryItem
                key={index}
                img={item.img}
                nombre={item.titulo}
                isCatalogOpen={isCatalogOpen}
                setIsCatalogOpen={setIsCatalogOpen}
                setIsMobileCatalog={setIsMobileCatalog}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
              />
            ))}
          </div>
        </div>
      )}

      {/* DESKTOP CATÁLOGO */}
      <div
        onMouseLeave={() => {
          if (window.innerWidth > 768) {
            setIsCatalogOpen(false)
          }
        }}
        className='relative'>
        {/* Botón catálogo */}

        {/* Catálogo visible solo si showCatalog */}
        {showCatalog && (
          <div
            ref={categoryRef}
            className='absolute z-50 top-12 left-1/2 -translate-x-1/2 w-[90vw] max-h-[60vh] overflow-y-auto bg-[#1e1e1e] rounded-3xl p-4 flex flex-wrap justify-center gap-4 capitalize'>
            {Catalog.map((item, index) => (
              <CategoryItem
                key={index}
                img={item.img}
                nombre={item.titulo}
                isCatalogOpen={isCatalogOpen}
                setIsCatalogOpen={setIsCatalogOpen}
              />
            ))}
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
