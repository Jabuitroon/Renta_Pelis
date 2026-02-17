'use client'

import { useState, useEffect, useCallback } from 'react'
import { Plus, Info, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface CarouselSlide {
  id: string
  title: string
  subtitle?: string
  ranking?: string
  description: string
  ctaText: string
  ctaSubtext?: string
  image: string
  ageRating?: string
  disclaimer?: string
}

const slides: CarouselSlide[] = [
  {
    id: 'tt4154796',
    title: 'Avengers: Endgame',
    ranking: '#1 en U.S',
    description:
      'After the devastating events of Avengers: Infinity War (2018), the universe is in ruins.',
    ctaText: 'Inicia tu prueba gratis de 30 días',
    ctaSubtext: 'Suscribirse a Emirp',
    image:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
    ageRating: '16+',
    disclaimer: 'Se aplican términos',
  },
  {
    id: 'tt14001894',
    title: 'Secret Headquarters',
    ranking: '#2 en Colombia',
    description:
      'While hanging out after school, Charlie and his friends discover the headquarters of the world s most powerful superhero hidden beneath his home.',
    ctaText: 'Ver ahora',
    ctaSubtext: 'Incluido con tu suscripción',
    image:
      'https://m.media-amazon.com/images/M/MV5BZWU1YzlmNmQtZDViMy00OGQ4LTk3NDEtMjlmYWEwODdlNThiXkEyXkFqcGc@._V1_SX300.jpg',
    ageRating: '13+',
    disclaimer: 'Se aplican términos',
  },
  {
    id: 'tt0993846',
    title: 'The Wolf of Wall Street',
    ranking: '#3 en Colombia',
    description:
      'Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime',
    ctaText: 'Continuar viendo',
    ctaSubtext: 'Disponible para compra',
    image:
      'https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SX300.jpg',
    ageRating: '18+',
    disclaimer: 'Se aplican términos',
  },
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      nextSlide()
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  const slide = slides[currentSlide]

  return (
    <div className='group relative h-125 w-full snap-start bg-[#0f1623]'>
      {/* Background Image */}
      <div className='absolute inset-0'>
        <div
          className='absolute inset-0 bg-cover bg-top bg-no-repeat transition-opacity duration-700'
          style={{ backgroundImage: `url(${slide.image})` }}
        />
        {/* Gradient Overlays */}
        <div className='absolute inset-0 bg-linear-to-r from-[#0f1623] via-[#0f1623]/80 to-transparent' />
        <div className='absolute inset-0 bg-linear-to-t from-[#0f1623] via-transparent to-transparent' />
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => {
          prevSlide()
          setIsAutoPlaying(false)
        }}
        className='absolute top-1/2 left-2 z-20 -translate-y-1/2 rounded-full bg-black/30 p-1 text-white/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100 hover:bg-black/50 hover:text-white'
        aria-label='Anterior'
      >
        <ChevronLeft className='h-6 w-6' />
      </button>
      <button
        onClick={() => {
          nextSlide()
          setIsAutoPlaying(false)
        }}
        className='absolute top-1/2 right-4 z-20 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100 hover:bg-black/50 hover:text-white'
        aria-label='Siguiente'
      >
        <ChevronRight className='h-6 w-6' />
      </button>

      {/* Content */}
      <div className='relative z-10 flex h-full max-w-2xl flex-col justify-center px-8 md:px-12'>
        {/* Prime Logo */}
        <div className='mb-4'>
          <span className='text-lg font-semibold text-[#00a8e1] italic'>
            prime
          </span>
        </div>

        {/* Title */}
        <h1 className='mb-2 text-4xl font-bold tracking-tight text-white md:text-6xl'>
          <span className='text-[#f0d060]'>●</span>{' '}
          <span className='bg-linear-to-r from-white via-[#00d4aa] to-[#00a8e1] bg-clip-text text-transparent'>
            {slide.title}
          </span>
        </h1>

        {/* Ranking Badge */}
        {slide.ranking && (
          <div className='mb-4'>
            <span className='text-sm font-semibold text-[#00d4aa]'>
              {slide.ranking}
            </span>
          </div>
        )}

        {/* CTA Section */}
        <div className='mb-4 flex items-center gap-3'>
          <Button className='rounded-md border border-white/20 bg-white/10 px-6 py-6 text-left text-white backdrop-blur-sm hover:bg-white/20'>
            <div>
              <div className='text-sm font-semibold'>{slide.description}</div>
              <div className='text-xs text-white/70'>{slide.ctaText}</div>
            </div>
          </Button>

          <button
            className='flex h-12 min-w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20'
            aria-label='Agregar a mi lista'
          >
            <Plus className='h-5 w-5' />
          </button>

          <button
            className='flex h-12 min-w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20'
            aria-label='Más información'
          >
            <Info className='h-5 w-5' />
          </button>
        </div>

        {/* Subscribe Link */}
        {slide.ctaSubtext && (
          <div className='flex items-center gap-2 text-sm text-white/80'>
            <span className='text-amber-500'>👑</span>
            <span className='cursor-pointer hover:underline'>
              {slide.ctaSubtext}
            </span>
          </div>
        )}
      </div>

      {/* Bottom Right Info */}
      <div className='absolute right-8 bottom-8 z-10 text-right'>
        {slide.disclaimer && (
          <p className='mb-2 text-xs text-white/60'>{slide.disclaimer}</p>
        )}
        {slide.ageRating && (
          <span className='inline-block rounded bg-white/20 px-2 py-1 text-xs text-white'>
            {slide.ageRating}
          </span>
        )}
      </div>

      {/* Pagination Dots */}
      <div className='absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2'>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              'h-2 w-2 rounded-full transition-all duration-300',
              index === currentSlide
                ? 'w-6 bg-white'
                : 'bg-white/40 hover:bg-white/60'
            )}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
