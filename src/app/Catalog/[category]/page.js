import DisplayGrid from '../../components/Displaygrid'
import { getProducts } from '../../lib/getProducts'

export default async function page({ params }) {
  const { category } = await params

  let Products = []
  try {
    Products = await getProducts({ category })
  } catch (error) {
    console.error('Error al obtener productos del catálogo:', error)
    return (
      <div className='container mx-auto px-4 py-8 mt-16'>
        <h1 className='text-2xl font-bold text-center text-red-600'>
          No se pudieron cargar los productos, intenta nuevamente más tarde
        </h1>
      </div>
    )
  }

  return (
    <main className='container mx-auto px-4 py-8 mb-64 mt-16'>
      <h1 className='text-[4rem] font-bold mb-6 text-center uppercase'>
        {category}
      </h1>
      <DisplayGrid
        products={Products}
        category={category}
      />
    </main>
  )
}
