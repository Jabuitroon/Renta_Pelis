import { notFound } from 'next/navigation'
import MoviesGrid from '@/components/movies/products-grid/MoviesGrid'
import { Genres } from '@/interfaces/movie'
import { fetchMovies } from '@/lib/tmdb'

// const seedMovies = initialData.movies

interface Props {
  params: { id: string }
}

export const genreSlugMap: Record<string, Genres> = {
  'accion-y-aventuras': 'Acción y Aventuras',
  anime: 'Anime',
  drama: 'Drama',
  documental: 'Documental',
  fantasia: 'Fantasía',
  romance: 'Romance',
  comedia: 'Comedia',
  horror: 'Horror',
  ninos: 'Niños',
  'ciencia-ficcion': 'Ciencia ficción',
  misterio: 'Misterio',
  thriller: 'Thriller',
}

// export default async function CategoryPage({ params }: Props) {
//   const moviesToSearch = await fetchMovies({ query: params.id })
//   const genre = genreSlugMap[params.id]

//   if (!genre) {
//     notFound()
//   }

//   const moviesToShow = moviesToSearch.filter((movie) => movie.Genre.includes(genre))

//   return (
//     <div className='flex flex-col w-full h-full overflow-y-auto scroll-smooth snap-y bg-accent-foreground font-sans dark:bg-gray-900'>
//       <MoviesGrid header={`Películas de ${genre}`} movies={moviesToShow} />
//     </div>
//   )
// }
