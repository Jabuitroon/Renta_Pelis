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
    <div className='flex flex-col w-full overflow-y-auto scroll-smooth snap-y bg-accent-foreground font-sans dark:bg-gray-900'>
      <HeroCarousel />
      <Suspense key={query + currentPage}>
        <MoviesGrid
          header='Available Movies'
          movies={Search}
          currentPage={currentPage}
        />
      </Suspense>
      <div className='mt-5 flex w-full justify-center'>
        {/* <Pagination totalPages={totalPages} /> */}
      </div>
    </div>
  )
}
