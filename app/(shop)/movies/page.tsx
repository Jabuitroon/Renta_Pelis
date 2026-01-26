import MoviesGrid from '@/components/movies/products-grid/MoviesGrid'
import HeroCarousel from '@/components/ui/hero/hero-carousel'
import { fetchMovies } from '@/lib/tmdb'
type Props = {
  searchParams: { [key: string]: string | undefined }
}

export default async function MoviesPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams

  const query = resolvedSearchParams.query || 'drama'
  const { Search } = await fetchMovies({
    query,
    page: resolvedSearchParams.page,
  })

  return (
    <div className='flex flex-col w-full overflow-y-auto scroll-smooth snap-y bg-accent-foreground font-sans dark:bg-gray-900'>
      <HeroCarousel />
      {/* Content section placeholder */}
      <MoviesGrid header='Available Movies' movies={Search} />
    </div>
  )
}
