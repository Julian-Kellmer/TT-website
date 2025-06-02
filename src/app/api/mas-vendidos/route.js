import { NextResponse } from 'next/server'
import { getMasVendidos } from '../../lib/getMasVendidos'

let cache = null
let lastFetched = 0
const CACHE_TIME = 1000 * 60 * 5 // 5 minutos

export async function GET() {
  const now = Date.now()

  if (!cache || now - lastFetched > CACHE_TIME) {
    try {
      const data = await getMasVendidos()
      cache = data
      lastFetched = now
    } catch (error) {
      console.error('Error al obtener más vendidos:', error)
      return NextResponse.json({ error: 'Error al cargar datos' }, { status: 500 })
    }
  }

  return NextResponse.json(cache)
}
