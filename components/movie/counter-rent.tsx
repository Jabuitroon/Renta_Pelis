'use client'

import { useState } from 'react'
import { IoAddCircleOutline, IoRemoveCircleOutline } from 'react-icons/io5'

interface Props {
  quantity?: number
}
export function CounterRent({ quantity }: Props) {
  const [count, setCount] = useState(quantity || 1)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count > 1 ? count - 1 : 1)

  return (
    <div className='flex items-center gap-2'>
        <span>N° de días</span>
      <button onClick={decrement} className='text-gray-500 hover:text-gray-700'>
        <IoRemoveCircleOutline className='w-6 h-6' />
      </button>
      <span className='text-white'>{count}</span>
      <button onClick={increment} className='text-gray-500 hover:text-gray-700'>
        <IoAddCircleOutline className='w-6 h-6' />
      </button>
    </div>
  )
}