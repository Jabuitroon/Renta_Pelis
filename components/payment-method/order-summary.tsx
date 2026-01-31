'use client'

import { MovieInCart } from '@/interfaces/movie'
import { Button } from '../ui/button'
import Link from 'next/link'

interface OrderSummaryProps {
  movies: MovieInCart[]
  total: number
}

export function OrderSummary({ movies, total }: OrderSummaryProps) {
  return (
    <div className='p-6 rounded-xl shadow-xl w-full max-w-xl mx-auto h-full'>
      <ul className='space-y-4 max-h-2/3 overflow-y-auto'>
        {movies.map((movie) => (
          <li
            key={movie.imdbID}
            className='flex justify-between items-center border-b border-zinc-700 pb-3'
          >
            <div>
              <p className='text-accent-foreground font-medium'>
                {movie.Type}: {movie.Title}
              </p>
              <p className='text-sm text-zinc-400'>
                {movie.quality} • {movie.state}
              </p>
            </div>

            <span className='text-green-400 font-semibold'>
              {movie.price.currency} {movie.price.amount.toLocaleString()}
            </span>
          </li>
        ))}
      </ul>

      {/* TOTAL */}
      <div className='flex justify-between items-center mt-6 text-lg font-bold text-accent-foreground'>
        <span>Total</span>
        <span className='text-green-500'>COP {total.toLocaleString()}</span>
      </div>
      <Button
        asChild
        className='mt-6 w-full transition text-white py-2 rounded-lg'
        size='lg'
      >
        <Link href='/orders/abc'>Confirmar Pago</Link>
      </Button>
    </div>
  )
}
