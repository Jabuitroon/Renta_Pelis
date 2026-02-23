'use client'

import { Plus, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCartStore } from '@/store/cart.store'
import { MovieInCart } from '@/interfaces/movie'

interface Props {
  movie: MovieInCart
}

export default function MovieActions({ movie }: Props) {
  const addItem = useCartStore((s) => s.addItem)
  const removeItem = useCartStore((s) => s.removeItem)
  const isInCart = useCartStore((s) => s.isInCart)

  const inCart = isInCart(movie.imdbID)

  const handleCartToggle = () => {
    if (inCart) {
      removeItem(movie.imdbID)
    } else {
      addItem(movie)
    }
  }

  return (
    <Button
      variant={inCart ? 'secondary' : 'default'}
      onClick={handleCartToggle}
      className='flex gap-2'
    >
      {inCart ? (
        <>
          <Check className='h-4 w-4' />
          En el carrito
        </>
      ) : (
        <>
          <Plus className='h-4 w-4' />
          Agregar al carrito
        </>
      )}
    </Button>
  )
}
