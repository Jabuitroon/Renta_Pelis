/* eslint-disable @next/next/no-img-element */
import { notFound } from 'next/navigation'
import { fetchMoviesId } from '@/lib/tmdb'
import { Movie } from '@/interfaces/movie'
import { Button } from '@/components/ui/button'
import { Video, Plus, ThumbsUp, Share2, ArrowUpIcon } from 'lucide-react'
import { ActionButton } from '@/components/ui/action-button/button'
import { QualitySelector } from '@/components/movie/quality-selector'
import { CounterRent } from '@/components/movie/counter-rent'

interface Props {
  params: Promise<{ slug: string }>
}

export default async function MoviePage({ params }: Props) {
  const { slug } = await params

  const movie: Movie = await fetchMoviesId({ id: slug })

  if (!movie) {
    notFound()
  }
  console.log(movie)

  return (
    <main className='flex h-full w-screen items-center justify-center bg-accent-foreground font-sans dark:bg-gray-900'>
      <div>
        <img
          src={movie?.Poster}
          alt={movie?.Title}
          className='w-full h-full object-cover rounded-md'
          width={200}
          height={300}
        />
      </div>

      <article className='flex flex-col md:w-4xl p-8 gap-4'>
        <h1 className='mb-4 text-4xl font-bold text-white '>{movie?.Title}</h1>
        <div>
          <p className='text-lg text-white'>{movie?.Plot} </p>
          <span className='text-white'> {movie?.Runtime}</span>
          <span className='text-white'> {movie?.Year}</span>
          <br />
          <span className='text-white'>{movie?.Genre}</span>
          <br />
          <span className='text-white'>Director: {movie?.Director}</span>
          <br />
          <span className='text-white'>Actores: {movie?.Actors}</span>
        </div>
        <footer className='flex flex-col gap-6 mt-6'>
          <div className='flex items-center gap-4'>
            <Button
              className='bg-gray-300 text-accent-foreground hover:text-white'
              aria-label='Submit'
            >
              Ver con Emirp <ArrowUpIcon />
            </Button>
            <QualitySelector availableQualities={{ '720p': 'COP 9,900', '1080p': 'COP 19,900', '4k': 'COP 29,900' }} selectedQuality='720p'/>

            <CounterRent quantity={1} />
            {/*
            <Button
              className='bg-gray-300 text-accent-foreground hover:text-white'
              aria-label='Submit'
            >
              Alquilar HD COP 9,900
            </Button>
            <Button
              variant='outline'
              className='bg-gray-300 text-accent-foreground hover:text-white'
              aria-label='Submit'
            >
              Comprar HD COP 24,900
            </Button>
            <Button
              variant='outline'
              className='bg-gray-300 text-accent-foreground hover:text-white'
              aria-label='Submit'
            >
              Más opciones de compra
            </Button>
          </div>
          <div className='flex items-center gap-3'>
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
            */}
            <div className='flex items-center gap-3'>
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
          </div>
        </footer>
      </article>
    </main>
  )
}
