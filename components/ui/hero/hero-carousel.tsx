'use client'

import { useState, useEffect, useCallback } from 'react'
import { Plus, Info, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface CarouselSlide {
  id: number
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
    id: 1,
    title: 'Las de Siempre',
    ranking: '#1 en Colombia',
    description: 'Ver con Amazon Prime',
    ctaText: 'Inicia tu prueba gratis de 30 días',
    ctaSubtext: 'Suscribirse a Prime',
    image: '/images/image.png',
    ageRating: '16+',
    disclaimer: 'Se aplican términos',
  },
  {
    id: 2,
    title: 'El Secreto',
    ranking: '#2 en Colombia',
    description: 'Exclusivo en streaming',
    ctaText: 'Ver ahora',
    ctaSubtext: 'Incluido con tu suscripción',
    image: '/images/image.png',
    ageRating: '13+',
    disclaimer: 'Se aplican términos',
  },
  {
    id: 3,
    title: 'Amor Infinito',
    ranking: '#3 en Colombia',
    description: 'Nueva temporada disponible',
    ctaText: 'Continuar viendo',
    ctaSubtext: 'Episodio 5',
    image: '/images/image.png',
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
    <div className='group relative w-full h-125  snap-start bg-[#0f1623]'>
      {/* Background Image */}
      <div className='absolute inset-0'>
        <div
          className='absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700'
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
        className='absolute left-2 top-1/2 -translate-y-1/2 z-20 p-1 rounded-full bg-black/30 hover:bg-black/50 text-white/70 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300'
        aria-label='Anterior'
      >
        <ChevronLeft className='w-6 h-6' />
      </button>
      <button
        onClick={() => {
          nextSlide()
          setIsAutoPlaying(false)
        }}
        className='absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white/70 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300'
        aria-label='Siguiente'
      >
        <ChevronRight className='w-6 h-6' />
      </button>

      {/* Content */}
      <div className='relative z-10 h-full flex flex-col justify-center px-8 md:px-12 max-w-2xl'>
        {/* Prime Logo */}
        <div className='mb-4'>
          <span className='text-[#00a8e1] font-semibold text-lg italic'>
            prime
          </span>
        </div>

        {/* Title */}
        <h1 className='text-4xl md:text-6xl font-bold text-white mb-2 tracking-tight'>
          <span className='text-[#f0d060]'>●</span>{' '}
          <span className='bg-linear-to-r from-white via-[#00d4aa] to-[#00a8e1] bg-clip-text text-transparent'>
            {slide.title}
          </span>
        </h1>

        {/* Ranking Badge */}
        {slide.ranking && (
          <div className='mb-4'>
            <span className='text-[#00d4aa] font-semibold text-sm'>
              {slide.ranking}
            </span>
          </div>
        )}

        {/* CTA Section */}
        <div className='flex items-center gap-3 mb-4'>
          <Button className='bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-6 py-6 rounded-md text-left'>
            <div>
              <div className='font-semibold text-sm'>{slide.description}</div>
              <div className='text-xs text-white/70'>{slide.ctaText}</div>
            </div>
          </Button>

          <button
            className='w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white transition-colors'
            aria-label='Agregar a mi lista'
          >
            <Plus className='w-5 h-5' />
          </button>

          <button
            className='w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white transition-colors'
            aria-label='Más información'
          >
            <Info className='w-5 h-5' />
          </button>
        </div>

        {/* Subscribe Link */}
        {slide.ctaSubtext && (
          <div className='flex items-center gap-2 text-white/80 text-sm'>
            <span className='text-amber-500'>👑</span>
            <span className='hover:underline cursor-pointer'>
              {slide.ctaSubtext}
            </span>
          </div>
        )}
      </div>

      {/* Bottom Right Info */}
      <div className='absolute bottom-8 right-8 z-10 text-right'>
        {slide.disclaimer && (
          <p className='text-white/60 text-xs mb-2'>{slide.disclaimer}</p>
        )}
        {slide.ageRating && (
          <span className='inline-block bg-white/20 text-white text-xs px-2 py-1 rounded'>
            {slide.ageRating}
          </span>
        )}
      </div>

      {/* Pagination Dots */}
      <div className='absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2'>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              'w-2 h-2 rounded-full transition-all duration-300',
              index === currentSlide
                ? 'bg-white w-6'
                : 'bg-white/40 hover:bg-white/60',
            )}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
