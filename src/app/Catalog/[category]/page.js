import DisplayGrid from '../../ components/Displaygrid'
import { getProducts } from '../../lib/getProducts'

export default async function page({ params }) {
  const { category } = await params
  const Products = await getProducts({ category })
  // console.log(Products)
  return (
    <main className='container mx-auto px-4 py-8 mt-[15vh] mb-64'>
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
