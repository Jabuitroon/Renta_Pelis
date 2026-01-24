import { notFound } from 'next/navigation'
import { initialData } from '@/seed/seed'
import MoviesGrid from '@/components/movies/products-grid/MoviesGrid'
import { Genres } from '@/interfaces/movie'

const seedMovies = initialData.movies

interface Props {
  params: { id: Genres }
}

const labels: Record<Genres, string> = {
  'Acción y aventuras': 'Acción y aventuras',
  Anime: 'Anime',
  Drama: 'Drama',
  Documental: 'Documental',
  Fantasía: 'Fantasía',
  Romance: 'Romance',
  Comedia: 'Comedia',
  Horror: 'Horror',
  Niños: 'Niños',
  'Ciencia ficción': 'Ciencia ficción',
  Misterio: 'Misterio',
  Thriller: 'Thriller',
}

export default function CategoryPage({ params }: Props) {
  const { id } = params

  if (!labels[id]) {
    notFound()
  }

  const moviesToShow = seedMovies.filter(
    movie => movie.Genre === id // o includes si es array
  )

  return (
    <div className='flex min-h-full flex-col items-center justify-center bg-blue-500 dark:bg-gray-900'>
      <h1 className='mb-4 text-4xl font-bold text-white'>
        {labels[id]}
      </h1>

      <MoviesGrid
        header={`Películas de ${labels[id]}`}
        movies={moviesToShow}
      />
    </div>
  )
}