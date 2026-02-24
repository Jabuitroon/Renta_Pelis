'use client'
import { Movie } from '@/interfaces/movie'
import Link from 'next/link'
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
      className='snap-start px-8 py-12'
    >
      <motion.h2 className='mb-6 text-xl font-semibold text-white'>
        {header}
      </motion.h2>
      <motion.ul className='grid grid-cols-2 gap-4 md:grid-cols-4'>
        {movies.map((_, i) => (
          <motion.li
            key={i}
            className='aspect-video cursor-pointer rounded-md bg-white/5 transition-all hover:ring-2 hover:ring-white/40'
          >
            <Link href={`/movie/${movies[i]?.imdbID}`}>
              <motion.img
                src={movies[i]?.Poster}
                alt={movies[i]?.Title}
                className='h-full w-full rounded-md object-cover'
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
              <Link
                href={createPageURL(currentPage - 1)}
                aria-label={`Go to previous page, page ${currentPage - 1}`}
                aria-disabled='true'
                tabIndex={-1}
                className='border-input hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring inline-flex h-9 items-center justify-center rounded-md border px-3 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none'
              >
                Previous
              </Link>
            ) : (
              <span
                aria-disabled='true'
                className='border-input inline-flex h-9 cursor-not-allowed items-center justify-center rounded-md border px-3 text-sm font-medium opacity-50'
              >
                Previous
              </span>
            )}
          </li>

          {/* first Page */}
          {currentPage > 2 && (
            <li>
              <Link
                href={createPageURL(1)}
                className='border-input hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring inline-flex h-9 min-w-9 items-center justify-center rounded-md border px-3 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none'
              >
                1
              </Link>
            </li>
          )}
          {/* Ellipsis */}
          {currentPage > 2 && (
            <li>
              <span
                aria-hidden='true'
                className='text-muted-foreground flex h-9 min-w-9 items-center justify-center text-sm'
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
              className='bg-primary text-primary-foreground inline-flex h-9 min-w-9 items-center justify-center rounded-md px-3 text-sm font-medium'
            >
              {currentPage}
            </span>
          </li>

          {/* Ellipsis */}
          {currentPage < totalPages - 1 && (
            <li>
              <span
                aria-hidden='true'
                className='text-muted-foreground flex h-9 min-w-9 items-center justify-center text-sm'
              >
                …
              </span>
            </li>
          )}

          {/* Last Page */}
          {currentPage < totalPages - 1 && (
            <li>
              <Link
                href={createPageURL(totalPages)}
                className='border-input hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring inline-flex h-9 min-w-9 items-center justify-center rounded-md border px-3 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none'
              >
                {totalPages}
              </Link>
            </li>
          )}

          {/* Next */}
          <li>
            {currentPage !== totalPages ? (
              <Link
                href={createPageURL(currentPage + 1)}
                aria-label={`Go to next page, page ${currentPage + 1}`}
                className='border-input hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring inline-flex h-9 items-center justify-center rounded-md border px-3 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none'
              >
                Next
              </Link>
            ) : (
              <span
                aria-disabled='true'
                className='border-input inline-flex h-9 cursor-not-allowed items-center justify-center rounded-md border px-3 text-sm font-medium opacity-50'
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
