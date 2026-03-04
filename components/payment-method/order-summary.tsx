'use client'
import { useSession } from 'next-auth/react'
import { apiClient } from '@/lib/api-client'
import { useRouter } from 'next/navigation'
import { MovieInCart } from '@/interfaces/movie'
import { Button } from '../ui/button'

interface OrderSummaryProps {
  movies: MovieInCart[]
  total: number
}

export function OrderSummary({ movies, total }: OrderSummaryProps) {
  const { data: session, status } = useSession()
  console.log('🔍 Estado actual de la sesión:', { status, session })
  const router = useRouter()

  const handleConfirmOrder = async () => {
    if (!session?.accessToken) {
      console.log('Debes iniciar sesión para realizar el pedido')

      // toast.error('Debes iniciar sesión para realizar el pedido')
      return
    }

    const orderData = {
      items: [
        {
          imdbId: 'tt0133093',
          type: 'RENT',
          quality: 'p1080',
        },
      ],
    }

    try {
      // Usamos el apiClient que ya maneja el Bearer Token automáticamente
      const response = await apiClient.post(
        '/orders',
        orderData,
        session.accessToken
      )

      console.log('¡Orden creada con éxito!, respuesta...', response)

      router.push('/orders/my-orders') // O tu página de confirmación
    } catch (error) {
      console.error('Error al crear orden:', error)
    }
  }
  return (
    <div className='mx-auto h-full w-full max-w-xl rounded-xl p-6 shadow-xl'>
      <ul className='max-h-2/3 space-y-4 overflow-y-auto'>
        {movies.map((movie) => (
          <li
            key={movie.imdbID}
            className='flex items-center justify-between border-b border-zinc-700 pb-3'
          >
            <div>
              <p className='text-accent-foreground font-medium'>
                {movie.Type}: {movie.Title}
              </p>
              <p className='text-sm text-zinc-400'>
                {movie.quality} • {movie.state}
              </p>
            </div>

            <span className='font-semibold text-green-400'>
              {movie.price.currency} {movie.price.amount.toLocaleString()}
            </span>
          </li>
        ))}
      </ul>

      {/* TOTAL */}
      <div className='text-accent-foreground mt-6 flex items-center justify-between text-lg font-bold'>
        <span>Total</span>
        <span className='text-green-500'>COP {total.toLocaleString()}</span>
      </div>
      <Button
        onClick={handleConfirmOrder}
        className='mt-6 w-full rounded-lg py-2 text-white transition'
        size='lg'
      >
        Confirmar Pago
      </Button>
    </div>
  )
}
