import MoviesGrid from '@/components/movies/products-grid/MoviesGrid'
import HeroCarousel from '@/components/ui/hero/hero-carousel'
import { initialData } from '@/seed/seed'

const movies = initialData.movies


export default function MoviesPage() {
  return (
    <div className='flex flex-col w-full h-full overflow-y-auto scroll-smooth snap-y bg-accent-foreground font-sans dark:bg-gray-900'>
      <HeroCarousel />
      {/* Content section placeholder */}
      <MoviesGrid header="Available Movies" movies={movies} />
    </div>
  )
}
