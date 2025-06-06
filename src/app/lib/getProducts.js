export async function getProducts({ category }) {
  const res = await fetch(
    `https://opensheet.elk.sh/1MX4ALW2TJbmfB28e_bHec2ZrGuGrCLo8XCYFj-4ztVw/${category}`
  )
  const data = await res.json()

  const productos = data.map((item, index) => {
    let parsedDescSpecs = []
    let parsedTechSpecs = []

    try {
      // Intentar parsear 'descSpecs' y 'techSpecs' de forma segura
      const cleanedDescSpecs = item.descSpecs ? item.descSpecs.trim() : ''
      if (cleanedDescSpecs) {
        parsedDescSpecs = JSON.parse(cleanedDescSpecs)
      }
    } catch (error) {
      console.error(`Error en item ${index} al parsear descSpecs:`, error)
      console.warn('descSpecs recibido:', item.descSpecs)
    }

    try {
      const cleanedTechSpecs = item.techSpecs ? item.techSpecs.trim() : ''
      if (cleanedTechSpecs) {
        console.log('estos son los clened tech specs', cleanedTechSpecs)
        parsedTechSpecs = JSON.parse(cleanedTechSpecs)
      }
    } catch (error) {
      console.error(`Error en item ${index} al parsear techSpecs:`, error)
      console.warn('techSpecs recibido:', item.techSpecs)
    }

    return {
      id: item.id,
      name: item.name,
      type: item.type,
      chip: item.chip,
      category: item.category,
      brand: item.brand,
      desc: item.desc,
      descSpecs: parsedDescSpecs,
      techSpecs: parsedTechSpecs,
      price: item.price,
      size: item.size,
      image: item.image?.split(',').map((url) => url.trim()) || [],
    }
  })

  return productos
}
