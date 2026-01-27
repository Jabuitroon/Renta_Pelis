'use client'
import { Movie } from '@/interfaces/movie'
import Link from 'next/dist/client/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { motion } from 'motion/react'

export default function MoviesGrid({
  header,
  movies,
  totalPages,
}: {
  header: string
  movies: Movie[]
  totalPages: number
}) {
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.1 },
    },
  }

  const pathname = usePathname()
  const searchParams = useSearchParams()
  const currentPage = Number(searchParams.get('page')) || 1

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', pageNumber.toString())
    return `${pathname}?${params.toString()}`
  }

  return (
    <motion.section
      initial='hidden'
      animate='visible'
      variants={listVariants}
      className='snap-start px-8 md:px-16 py-12'
    >
      <motion.h2 className='text-white text-xl font-semibold mb-6'>
        {header}
      </motion.h2>
      <motion.ul className='grid grid-cols-2 md:grid-cols-4 gap-4'>
        {movies.map((_, i) => (
          <motion.li
            key={i}
            className='aspect-video bg-white/5 rounded-md hover:ring-2 hover:ring-white/40 transition-all cursor-pointer'
          >
            <Link href={`/movie/${movies[i]?.imdbID}`}>
              <motion.img
                src={movies[i]?.Poster}
                alt={movies[i]?.Title}
                className='w-full h-full object-cover rounded-md'
              />
            </Link>
            {movies[i]?.Title}
          </motion.li>
        ))}
      </motion.ul>

      <nav aria-label='Pagination'>
        <ul className='mt-8 flex items-center justify-center gap-1'>
          {/* Previous */}
          <li>
            {currentPage > 1 ? (
              <a
                href={createPageURL(currentPage - 1)}
                aria-label={`Go to previous page, page ${currentPage - 1}`}
                aria-disabled='true'
                tabIndex={-1}
                className='inline-flex h-9 items-center justify-center rounded-md border border-input px-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
              >
                Previous
              </a>
            ) : (
              <span
                aria-disabled='true'
                className='inline-flex h-9 items-center justify-center rounded-md border border-input px-3 text-sm font-medium opacity-50 cursor-not-allowed'
              >
                Previous
              </span>
            )}
          </li>

          {/* first Page */}
          {currentPage > 2 && (
            <li>
              <a
                href={createPageURL(1)}
                className='inline-flex h-9 min-w-9 items-center justify-center rounded-md border border-input px-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
              >
                1
              </a>
            </li>
          )}
          {/* Ellipsis */}
          {currentPage > 2 && (
            <li>
              <span
                aria-hidden='true'
                className='flex h-9 min-w-9 items-center justify-center text-sm text-muted-foreground'
              >
                …
              </span>
            </li>
          )}

          {/* Current page */}
          <li>
            <span
              aria-current='page'
              aria-label={`Current page, page ${currentPage}`}
              className='inline-flex h-9 min-w-9 items-center justify-center rounded-md bg-primary px-3 text-sm font-medium text-primary-foreground'
            >
              {currentPage}
            </span>
          </li>

          {/* Ellipsis */}
          {currentPage < totalPages - 1 && (
            <li>
              <span
                aria-hidden='true'
                className='flex h-9 min-w-9 items-center justify-center text-sm text-muted-foreground'
              >
                …
              </span>
            </li>
          )}

          {/* Last Page */}
          {currentPage < totalPages - 1 && (
            <li>
              <a
                href={createPageURL(totalPages)}
                className='inline-flex h-9 min-w-9 items-center justify-center rounded-md border border-input px-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
              >
                {totalPages}
              </a>
            </li>
          )}

          {/* Next */}
          <li>
            {currentPage !== totalPages ? (
              <a
                href={createPageURL(currentPage + 1)}
                aria-label={`Go to next page, page ${currentPage + 1}`}
                className='inline-flex h-9 items-center justify-center rounded-md border border-input px-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
              >
                Next
              </a>
            ) : (
              <span
                aria-disabled='true'
                className='inline-flex h-9 items-center justify-center rounded-md border border-input px-3 text-sm font-medium opacity-50 cursor-not-allowed'
              >
                Next
              </span>
            )}
          </li>
        </ul>
      </nav>
    </motion.section>
  )
}
