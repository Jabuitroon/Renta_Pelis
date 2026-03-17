import { Movie } from '@/interfaces/movie'
import { MovieCard } from './movie-card'

export default function MoviesGrid({
  header,
  movies,
}: {
  header: string
  movies: Movie[]
}) {
  return (
    <section className='snap-start px-8 py-12'>
      <h2 className='mb-6 text-xl font-semibold text-white'>{header}</h2>
      <ul className='grid grid-cols-2 gap-4 md:grid-cols-5'>
        {movies.map((m) => (
          <MovieCard key={m.imdbID} movie={m} />
        ))}
      </ul>
    </section>
  )
}
