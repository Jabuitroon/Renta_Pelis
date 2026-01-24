import { Movie } from '@/interfaces/movie'
import Image from 'next/image'
export default function MoviesGrid({
  header,
  movies,
}: {
  header: string
  movies: Movie[]
}) {
  return (
    <section className='snap-start px-8 md:px-16 py-12 min-h-screen'>
      <h2 className='text-white text-xl font-semibold mb-6'>{header}</h2>
      <ul className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4'>
        {movies.map((_, i) => (
          <li
            key={i}
            className='aspect-video bg-white/5 rounded-md hover:ring-2 hover:ring-white/40 transition-all cursor-pointer'
          >
            <img
              src={movies[i]?.Poster}
              alt={movies[i]?.Title}
              className='w-full h-full object-cover rounded-md'
            />
            {movies[i]?.Title}
          </li>
        ))}
      </ul>
    </section>
  )
}
