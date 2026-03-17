import MoviePagination from '@/components/movies/products-grid/movie-pagination'
import MoviesGrid from '@/components/movies/products-grid/MoviesGrid'
import HeroCarousel from '@/components/ui/hero/hero-carousel'
import { fetchMovies } from '@/lib/tmdb'
import { Suspense } from 'react'

export default async function MoviesPage(props: {
  searchParams?: Promise<{
    query?: string
    page?: string
  }>
}) {
  const searchParams = await props.searchParams

  const query = searchParams?.query || 'home'

  const { Search, totalResults } = await fetchMovies({
    query,
    page: searchParams?.page,
  })

  const pagesNeeded = Math.ceil(totalResults / 16)

  const currentPage = Number(searchParams?.page) || 1
  console.log('currentPage:', currentPage, 'pagesNeeded:', pagesNeeded)

  return (
    <div className='bg-background h-full w-full snap-y snap-mandatory overflow-y-auto scroll-smooth font-sans dark:bg-gray-900'>
      <HeroCarousel />
      <Suspense key={query + currentPage}>
        <MoviesGrid header='Available Movies' movies={Search} />
        <MoviePagination totalPages={pagesNeeded} />
      </Suspense>
    </div>
  )
}
