'use client'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
export default function MoviePagination({
  totalPages,
}: {
  totalPages: number
}) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const currentPage = Number(searchParams.get('page')) || 1

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', pageNumber.toString())
    return `${pathname}?${params.toString()}`
  }
  return (
    <nav aria-label='Pagination'>
      <ul className='flex items-center justify-center gap-1'>
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
  )
}
