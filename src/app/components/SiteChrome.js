'use client'
import { usePathname } from 'next/navigation'
import Header from './header'
import ResponsiveFooter from './responsiveFooter'
import WhatsapFloat from './WhatsapFloat'

export default function SiteChrome({ children }) {
  const pathname = usePathname()
  const isAdmin = pathname?.startsWith('/admin')

  if (isAdmin) return children

  return (
    <>
      <WhatsapFloat />
      <Header className='z-100' />
      {children}
      <ResponsiveFooter />
    </>
  )
}
