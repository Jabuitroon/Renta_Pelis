'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useCartStore } from '@/store/cart.store'
import { EmptyCart } from '@/components/cart/empty-cart'
import CartWithItems from '@/components/cart/cart-with-items'

export default function CartPage() {
  const cartItems = useCartStore((state) => state.items)
  const getTotal = useCartStore((state) => state.getTotal)
  const total = getTotal()
  return (
    <main className='flex h-full w-full overflow-y-auto bg-background font-sans dark:bg-gray-900'>
      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <CartWithItems cartItems={cartItems} total={total} />
      )}

      {/* <aside className='bg-white rounded-xl shadow-2xl p-8 w-full text-accent-foreground'>
        <h2 className='mb-4 text-2xl font-bold'>Carrito de Pelis</h2>

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
      </aside> */}
    </main>
  )
}
