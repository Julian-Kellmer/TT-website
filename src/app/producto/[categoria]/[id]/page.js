import Image from 'next/image'
import InfoProduct from '../../../(components)/InfoProduct'
import { getProducts } from '../../../lib/getProducts'

export default async function ProductPage({ params }) {
  const { categoria, id } = await params
  const products = await getProducts({ category: categoria })
  const selectProduct = products.find((p) => p.id === id)
  if (!selectProduct) {
    return (
      <div className='container mx-auto px-4 py-8 mt-[15vh]'>
        <h1 className='text-2xl font-bold text-center text-red-600'>
          producto no encontrado
        </h1>
      </div>
    )
  }
  
  return (
    <main className='container mx-auto px-4 py-8 mt-[15vh]'>
      <InfoProduct
        categoria={categoria}
        selectProduct={selectProduct}
      />
    </main>
  )
}
