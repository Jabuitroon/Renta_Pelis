'use client'

import CardItem from '@/components/cart/card-item'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useCartStore } from '@/store/cart.store'

export default function CartPage() {
  const items = useCartStore((state) => state.items)
  const getTotal = useCartStore((state) => state.getTotal)

  const totalToPay = getTotal()

  return (
    <main className='flex h-full mx-auto md:w-5xl bg-blue-500 font-sans dark:bg-gray-900'>
      <div className='overflow-y-auto w-6xl'>
        {items.length === 0 && (
          <p className='text-white p-4'>Tu carrito está vacío</p>
        )}

        {items.map((movie) => (
          <CardItem key={movie.imdbID} movie={movie} />
        ))}
      </div>

      <aside className='bg-white rounded-xl shadow-2xl p-8 w-full text-accent-foreground'>
        <h2 className='mb-4 text-2xl font-bold'>Resumen de orden</h2>

        <div className='grid grid-cols-2'>
          <span>N° de items</span>
          <span className='text-right'>{items.length}</span>

          <span className='mt-5 text-2xl'>Total:</span>
          <span className='mt-5 text-2xl text-right'>
            {totalToPay}
          </span>
        </div>

        <Button
          asChild
          className='w-full mt-5 mb-2'
          size='lg'
          disabled={items.length === 0}
        >
          <Link href='/checkout'>Checkout</Link>
        </Button>
      </aside>
    </main>
  )
}
