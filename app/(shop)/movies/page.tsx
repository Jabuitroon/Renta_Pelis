import MoviesGrid from '@/components/movies/products-grid/MoviesGrid'
import HeroCarousel from '@/components/ui/hero/hero-carousel'
import { fetchMovies } from '@/lib/tmdb'

export default async function MoviesPage({ query }: { query: string }) {
  const movies = await fetchMovies({ query })
  console.log(movies)

  return (
    <div className='flex flex-col w-full h-full overflow-y-auto scroll-smooth snap-y bg-accent-foreground font-sans dark:bg-gray-900'>
      <HeroCarousel />
      {/* Content section placeholder */}
      <MoviesGrid header='Available Movies' movies={movies} />
    </div>
  )
}
