'use client'

interface Props {
  value: number
  onChange: (value: number) => void
}
import { IoAddCircleOutline, IoRemoveCircleOutline } from 'react-icons/io5'

interface Props {
  quantity?: number
}
export function CounterRent({ value, onChange }: Props) {
  // Convierte CounterRent en un componente controlado
  const increment = () => onChange(value + 1)
  const decrement = () => onChange(value > 1 ? value - 1 : 1)

  return (
    <div className='flex items-center gap-2'>
      <span>N° de días</span>
      <button
        type='button'
        onClick={decrement}
        className='text-gray-500 hover:text-gray-700'
      >
        <IoRemoveCircleOutline className='w-6 h-6' />
      </button>

      <span className='text-white'>{value}</span>

      {/* Los botones llevan type="button" para que no envíen el formulario accidentalmente. */}
      <button
        type='button'
        onClick={increment}
        className='text-gray-500 hover:text-gray-700'
      >
        <IoAddCircleOutline className='w-6 h-6' />
      </button>
    </div>
  )
}
