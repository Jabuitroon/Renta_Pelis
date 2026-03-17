/* eslint-disable @next/next/no-img-element */
'use client'
import { Play, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { FetchingMovies } from '@/interfaces/movie'

export function MovieCard({ movie }: { movie: FetchingMovies }) {
  return (
    <Card className='group border-border bg-card hover:border-primary/50 hover:shadow-primary/5 relative overflow-hidden p-0 gap-0 transition-all duration-300 hover:shadow-xl'>
      {/* Movie Poster */}
      <div className='bg-secondary relative aspect-2/3 overflow-hidden'>
        {/* Movie Image  puede ir un motion */}
        <img
          src={movie.Poster || '/placeholder.svg'}
          alt={movie.Title}
          className='object-cover transition-transform duration-300 group-hover:scale-105'
        />

        {/* Gradient overlay */}
        <div className='from-background via-background/20 absolute inset-0 bg-linear-to-t to-transparent opacity-60' />

        {/* Hover overlay */}
        <div className='bg-background/90 absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
          <div className='flex flex-col items-center gap-3'>
            <Link href={`/movie/${movie.imdbID}`}>
              <Button size='sm' className='cursor-pointer gap-2'>
                <Plus className='h-4 w-4' />
                Ver Detalles
              </Button>
            </Link>
            <Button
              variant='ghost'
              size='sm'
              className='text-muted-foreground cursor-pointer gap-2'
            >
              <Play className='h-4 w-4' />
              Ver Trailer
            </Button>
          </div>
        </div>
      </div>

      {/* Movie Info */}
      <CardContent className='p-4'>
        <div className='mb-2 flex items-start justify-between gap-2'>
          <h3 className='text-card-foreground line-clamp-1 leading-tight font-semibold'>
            {movie.Title}
          </h3>
          <div className='flex shrink-0 items-center gap-1'>
            {/* Badge */}
            <Badge
              variant='outline'
              className='border-border text-muted-foreground bg-transparent'
            >
              {movie.Year}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
