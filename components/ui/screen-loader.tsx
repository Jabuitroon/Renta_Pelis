'use client'

import { useEffect, useState } from 'react'
import { Film, Clapperboard, Coffee } from 'lucide-react'
import { Progress } from '@/components/ui/progress'

const CINEMA_TIPS = [
  'Preparando los proyectores...',
  'Ajustando las luces del set...',
  'El director esta revisando el guion...',
  'Cargando los rollos de pelicula...',
  'Afinando el equipo de sonido...',
  'El elenco esta tomando posiciones...',
  'Ultima revision de vestuario...',
  'Silencio en el set...',
]

interface ScreenLoaderProps {
  show: boolean
  message?: string
}

export function ScreenLoader({
  show,
  message = 'Cargando...',
}: ScreenLoaderProps) {
  if (!show) return null

  return (
    <div className='bg-background/80 fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm'>
      <div className='flex max-w-md flex-col items-center gap-6 px-6 text-center'>
        {/* Logo animado */}
        <div className='relative'>
          <div className='bg-secondary flex h-20 w-20 items-center justify-center rounded-full'>
            <svg
              className='text-primary h-10 w-10 animate-spin'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          </div>
        </div>

        {/* Titulo */}
        <div className='space-y-1'>
          <h2 className='text-foreground text-xl font-bold tracking-tight'>
            {message}, Verificando credenciales
          </h2>
          <p className='text-muted-foreground text-sm'>
            Conectando con el servidor de autenticación...
          </p>
        </div>

        {/* Spinner grande */}
        <div className='relative'>
          <div className='from-primary/20 to-primary/10 flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-r p-1'>
            <div className='bg-background border-primary/20 flex h-12 w-12 items-center justify-center rounded-full border'>
              <svg
                className='text-primary h-6 w-6 animate-spin'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </div>
          </div>
          <div className='bg-primary/20 absolute inset-0 animate-ping rounded-full' />
        </div>

        {/* Tips de login */}
        <div className='border-border bg-card/50 flex min-h-10 items-center gap-2 rounded-lg border px-3 py-2 text-xs'>
          <svg
            className='text-primary h-4 w-4 shrink-0'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M13 10V3L4 14h7v7l9-11h-7z'
            />
          </svg>
          <span className='text-muted-foreground italic'>
            ✓ Verificando en el servidor seguro
          </span>
        </div>

        {/* Dots pulsing */}
        <div className='flex gap-1'>
          <div className='bg-primary/50 h-2 w-2 animate-pulse rounded-full delay-75' />
          <div className='bg-primary/75 h-2 w-2 animate-pulse rounded-full delay-150' />
          <div className='bg-primary h-2 w-2 animate-pulse rounded-full delay-300' />
        </div>
      </div>
    </div>
  )
}
