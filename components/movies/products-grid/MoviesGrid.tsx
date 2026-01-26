'use client'
import { Movie } from '@/interfaces/movie'
import Link from 'next/dist/client/link'
import { motion } from 'motion/react'
export default function MoviesGrid({
  header,
  movies,
  currentPage
}: {
  header: string
  movies: Movie[]
  currentPage?: number
}) {
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.1 },
    },
  }
  

  return (
    <motion.section initial="hidden" animate="visible" variants={listVariants} className='snap-start px-8 md:px-16 py-12'>
      <motion.h2 className='text-white text-xl font-semibold mb-6'>{header}</motion.h2>
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
    </motion.section>
  )
}
