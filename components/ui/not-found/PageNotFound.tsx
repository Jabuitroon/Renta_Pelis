'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Film, Home, Search, Clapperboard } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function NotFound404() {
  const [filmCount, setFilmCount] = useState(0)
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setFilmCount((prev: number) => {
        if (prev >= 404) {
          clearInterval(interval)
          return 404
        }
        return prev + Math.floor(Math.random() * 20) + 5
      })
    }, 50)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true)
      setTimeout(() => setIsGlitching(false), 150)
    }, 3000)

    return () => clearInterval(glitchInterval)
  }, [])

  return (
    <div className='bg-background text-foreground flex h-full w-full flex-col'>
      {/* Film strip decoration top */}
      <div className='bg-secondary absolute flex h-8 w-full items-center overflow-hidden'>
        <div className='animate-scroll flex'>
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className='flex items-center gap-1 px-4'>
              <div className='bg-background h-4 w-3 rounded-sm' />
              <div className='bg-background h-4 w-3 rounded-sm' />
            </div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <main className='flex flex-1 flex-col items-center justify-center px-4 py-16'>
        {/* 404 Display */}
        <div className='relative mb-8'>
          <div
            className={`text-[50px] leading-none font-bold tracking-tighter transition-all duration-100 md:text-[200px] lg:text-[150px] ${
              isGlitching ? 'text-primary translate-x-1' : 'text-foreground'
            }`}
          >
            {filmCount > 404 ? '404' : filmCount.toString().padStart(3, '0')}
          </div>

          {/* Film reel overlay */}
          <div className='absolute -top-4 -right-4 md:-top-8 md:-right-8'>
            <div className='relative'>
              <Film className='text-primary animate-spin-slow h-12 w-12 md:h-16 md:w-16' />
            </div>
          </div>

          {/* Clapperboard decoration */}
          <div className='absolute -bottom-2 -left-4 md:-bottom-4 md:-left-8'>
            <Clapperboard className='text-muted-foreground h-8 w-8 md:h-14 md:w-14' />
          </div>
        </div>

        {/* Message */}
        <div className='mb-12 max-w-xl space-y-4 text-center'>
          <h1 className='text-2xl font-bold tracking-tight text-balance'>
            Escena No Encontrada
          </h1>
          <p className='text-muted-foreground text-lg'>
            Parece que esta escena fue cortada en edición. La página que buscas
            no existe o ha sido eliminada del catálogo.
          </p>
        </div>

        {/* Action buttons */}
        <div className='mb-16 flex flex-col gap-4 sm:flex-row'>
          <Button asChild size='lg' className='gap-2 text-base'>
            <Link href='/'>
              <Home className='h-5 w-5' />
              Volver al Inicio
            </Link>
          </Button>
          <Button
            asChild
            variant='outline'
            size='lg'
            className='gap-2 bg-transparent text-base'
          >
            <Link href='/catalogo'>
              <Search className='h-5 w-5' />
              Explorar Catálogo
            </Link>
          </Button>
        </div>
      </main>

      {/* Film strip decoration bottom */}
      <div className='bg-secondary absolute flex h-8 w-full items-center overflow-hidden'>
        <div className='animate-scroll-reverse flex'>
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className='flex items-center gap-1 px-4'>
              <div className='bg-background h-4 w-3 rounded-sm' />
              <div className='bg-background h-4 w-3 rounded-sm' />
            </div>
          ))}
        </div>
      </div>

      {/* Custom styles */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scroll-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        .animate-scroll-reverse {
          animation: scroll-reverse 20s linear infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  )
}
