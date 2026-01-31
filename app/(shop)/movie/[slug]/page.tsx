/* eslint-disable @next/next/no-img-element */
import { notFound } from 'next/navigation'
import { fetchMoviesId } from '@/lib/tmdb'
import { Movie } from '@/interfaces/movie'
import { Button } from '@/components/ui/button'
import { Video, Plus, ThumbsUp, Share2, ArrowUpIcon } from 'lucide-react'
import { ActionButton } from '@/components/ui/action-button/button'
import Badge from '@/components/ui/badges'
import ModalRentSell from '@/components/movie/modal-rent-sell'

interface Props {
  params: Promise<{ slug: string }>
}

export default async function MoviePage({ params }: Props) {
  const { slug } = await params

  const movie: Movie = await fetchMoviesId({ id: slug })

  if (!movie) {
    notFound()
  }

  return (
    <main className='flex flex-col h-screen w-full overflow-y-auto bg-background font-sans dark:bg-gray-900 lg:flex-row lg:items-start lg:justify-center 2xl:gap-20 2xl:px-24'>
      {/* Poster */}
      <div className='w-full max-w-xs mx-auto p-4 sm:max-w-sm md:max-w-md lg:max-w-sm 2xl:max-w-lg'>
        <img
          src={movie?.Poster}
          alt={movie?.Title}
          className=' w-full object-cover rounded-xl shadow-lg'
        />
      </div>

      {/* Info */}
      <article className='flex flex-col gap-6 px-6 py-4 sm:px-8 md:max-w-3xl lg:max-w-4xl lg:py-12 2xl:max-w-5xl 2xl:gap-8'>
        <h1 className='text-2xl font-bold text-white sm:text-3xl lg:text-4xl 2xl:text-5xl'>
          {movie?.Title}
        </h1>
        <div className='space-y-2 text-white/90'>
          <p className='text-base sm:text-lg 2xl:text-xl'>{movie?.Plot} </p>
          <div className='flex flex-wrap gap-x-4 gap-y-1 text-sm sm:text-base'>
            <span>{movie?.Runtime}</span>
            <span>{movie?.Year}</span>
            {movie?.Genre.split(', ').map((genre) => (
              <Badge key={genre} variant='info' size='sm'>
                {genre}
              </Badge>
            ))}
          </div>
          <p className='text-sm sm:text-base'>
            <span className='font-semibold'>Director:</span> {movie?.Director}
          </p>
          <p className='text-sm sm:text-base'>
            <span className='font-semibold'>Actores:</span> {movie?.Actors}
          </p>
        </div>

        {/* Actions */}
        <footer className='flex flex-col gap-6 pt-4'>
          {/* Compra o Alquiler*/}
          <div className='flex gap-4 flex-wrap'>
            <Button className=' bg-gray-300 text-xl text-background hover:text-white w-full sm:w-auto h-12 grow'>
              Ver con Emirp <ArrowUpIcon />
            </Button>
            <ModalRentSell
              movie={movie}
              buttonSpan='Alquilar'
              availableQualities={{
                '720p': 'COP 9900',
                '1080p': 'COP 19900',
                '4k': 'COP 29900',
              }}
            />
            <ModalRentSell
              movie={movie}
              buttonSpan='Comprar'
              availableQualities={{
                '720p': 'COP 15900',
                '1080p': 'COP 30900',
                '4k': 'COP 45900',
              }}
            />
          </div>

          {/* Acciones secundarias */}
          <div className='flex flex-wrap gap-3 sm:gap-4 2xl:gap-6'>
            <ActionButton
              icon={<Video className='w-5 h-5' />}
              label='Ver trailer'
            />
            <ActionButton
              icon={<Plus className='w-6 h-6' />}
              label='Mi lista'
              active
            />
            <ActionButton
              icon={<ThumbsUp className='w-5 h-5' />}
              label='Me gusta'
            />
            <ActionButton
              icon={<Share2 className='w-5 h-5' />}
              label='Compartir'
            />
          </div>
        </footer>
      </article>
    </main>
  )
}
