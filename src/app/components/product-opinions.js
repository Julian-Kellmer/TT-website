'use client'

import { useState } from 'react'
import { Button } from '../(components)/ui/button'
import { RadioGroup, RadioGroupItem } from '../(components)/ui/radio-group'
import { Label } from '../(components)/ui/radio-group'

export default function ProductOptions({ product }) {
  const [selectedColor, setSelectedColor] = useState('black')
  // const [selectedMemory, setSelectedMemory] = useState(product.memory[0])
  // const [selectedRam, setSelectedRam] = useState(product.ram[0])

  const colorMap = {
    black: 'bg-black',
    gray: 'bg-gray-400',
    white: 'bg-white border border-gray-300',
  }

  return (
    <div className='space-y-6'>
      {/* Opciones de color */}
      <div>
        <h3 className='text-sm font-medium mb-3'>Color</h3>
        <div className='flex gap-2'>
          {/* {product.colors.map((color) => (
            <button
              key={color}
              className={`w-8 h-8 rounded-full ${colorMap[color]} ${
                selectedColor === color ? 'ring-2 ring-offset-2 ring-black' : ''
              }`}
              onClick={() => setSelectedColor(color)}
              aria-label={`Color ${color}`}
            />
          ))} */}
        </div>
      </div>

      {/* Opciones de almacenamiento */}
      <div></div>

      {/* Opciones de RAM */}
      <div>
        <h3 className='text-sm font-medium mb-3'>RAM</h3>
      </div>

      <Button className='w-full mt-6'>Hacer consulta ahora</Button>
    </div>
  )
}
