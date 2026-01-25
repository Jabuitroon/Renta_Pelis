import { notFound } from 'next/navigation'
import { fetchMoviesId } from '@/lib/tmdb'
import Image from 'next/image'

interface Props {
  params: Promise<{ slug: string }>
}

export default async function MoviePage({ params }: Props) {
  const { slug } = await params

  const movie = await fetchMoviesId({ id: slug })

  if (!movie) {
    notFound()
  }
  console.log(movie)

  return (
    <div className='flex h-full flex-col items-center justify-center bg-blue-500 font-sans dark:bg-gray-900'>
      <h1 className='mb-4 text-4xl font-bold text-white'>
        Movie {movie?.Title} Details
      </h1>
      <p className='text-lg text-white'>Welcome to the movie page.</p>
    </div>
  )
}
