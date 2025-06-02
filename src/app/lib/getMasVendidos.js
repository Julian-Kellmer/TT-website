export async function getMasVendidos() {
  const res = await fetch(
    `https://opensheet.elk.sh/1MX4ALW2TJbmfB28e_bHec2ZrGuGrCLo8XCYFj-4ztVw/masvendidos`
  )
  const data = await res.json()
  console.log(data)

  return data.map(({ id, name, category, price, brand, image, desc }) => ({
    id,
    name,
    category,
    brand,
    desc,
    price: Number(price),
    image: image.split(','),
  }))
}
