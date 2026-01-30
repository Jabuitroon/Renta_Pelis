'use client'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useForm, Controller } from 'react-hook-form'

import { Button } from '../ui/button'
import { QualitySelector } from '@/components/movie/quality-selector'
import { CounterRent } from '@/components/movie/counter-rent'
import { Movie, QualityOption } from '@/interfaces/movie'

import { useCartStore } from '@/store/cart.store'

interface ModalRentSellProps {
  movie: Movie
  buttonSpan: 'Alquilar' | 'Comprar'
  availableQualities: Record<string, string>
  daysToRent?: boolean
}

type FormValues = {
  quality: QualityOption
  days?: number
}

export default function ModalRentSell({
  movie,
  buttonSpan,
  availableQualities,
}: ModalRentSellProps) {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      quality: '720p',
      days: 1,
    },
  })

  const addItem = useCartStore((state) => state.addItem)

  const onSubmit = (data: FormValues) => {
    const strPrice = availableQualities[data.quality]
    console.log(strPrice)

    const [currency, amount] = strPrice.split(' ')

    const movieInCart = {
      Title: movie.Title,
      Year: movie.Year,
      imdbID: movie.imdbID,
      Type: movie.Type,
      Poster: movie.Poster,
      Genre: movie.Genre,
      quality: data.quality,
      state: buttonSpan,
      price: {
        amount: Number(amount),
        currency: currency,
      },
    }

    addItem(movieInCart)
  }
  return (
    <Dialog>
      <form id='form-Rent-Sell' onSubmit={handleSubmit(onSubmit)}>
        <DialogTrigger asChild>
          <Button
            className='bg-gray-300 text-accent-foreground hover:text-white w-3xs h-12 text-xl'
            aria-label='Submit'
            variant='outline'
          >
            {buttonSpan}
          </Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-106.25'>
          <DialogHeader>
            <DialogTitle className='text-wrap'>
              <span>Elige tus preferencias para {buttonSpan}:</span>
              <span className='block'>{movie.Title}</span>
            </DialogTitle>
          </DialogHeader>
          <div className='grid gap-4'>
            <Controller
              name='quality'
              control={control}
              render={({ field }) => (
                <QualitySelector
                  availableQualities={availableQualities}
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
            {buttonSpan === 'Alquilar' && (
              <Controller
                name='days'
                control={control}
                render={({ field }) => (
                  <CounterRent
                    value={field.value ?? 1}
                    onChange={field.onChange}
                  />
                )}
              />
            )}
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant='outline'>Cancel</Button>
            </DialogClose>
            <Button type='submit' form='form-Rent-Sell'>
              Confirmar preferencias
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
