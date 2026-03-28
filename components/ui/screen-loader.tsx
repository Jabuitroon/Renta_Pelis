'use client'

import { useEffect, useState } from 'react'
import { Film, Clapperboard, Coffee, Sparkles } from 'lucide-react'

const CINEMA_TIPS = [
  'Preparando los proyectores...',
  'Ajustando las luces del set...',
  'El director está revisando el guion...',
  'Cargando los rollos de película...',
  'Afinando el equipo de sonido...',
  'El elenco está tomando posiciones...',
  'Última revisión de vestuario...',
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
  const [tipIndex, setTipIndex] = useState(0)

  useEffect(() => {
    if (!show) return

    // Cambia el mensaje cada 3 segundos
    const interval = setInterval(() => {
      setTipIndex((prev) => (prev + 1) % CINEMA_TIPS.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [show])

  if (!show) return null

  return (
    <div className='bg-background/80 fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm'>
      <div className='flex max-w-md flex-col items-center gap-6 px-6 text-center'>
        {/* Logo animado */}
        <div className='relative'>
          <div className='bg-secondary flex h-20 w-20 items-center justify-center rounded-full'>
            <Clapperboard className='text-primary h-10 w-10 animate-bounce' />
          </div>
        </div>

        {/* Titulo */}
        <div className='space-y-1'>
          <h2 className='text-foreground text-xl font-bold tracking-tight'>
            {message}
          </h2>
          <p className='text-muted-foreground text-sm'>
            El servicio de hosting es gratuito, esto tardará un poco...
          </p>
        </div>

        {/* Spinner central */}
        <div className='relative'>
          <div className='from-primary/20 to-primary/10 flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-r p-1'>
            <div className='bg-background border-primary/20 flex h-12 w-12 items-center justify-center rounded-full border'>
              <Film className='text-primary h-6 w-6 animate-spin' />
            </div>
          </div>
          <div className='bg-primary/20 absolute inset-0 animate-ping rounded-full' />
        </div>

        {/* Tips de Cine Dinámicos */}
        <div className='border-border bg-card/50 flex min-h-[50px] w-full items-center justify-center gap-3 rounded-lg border px-4 py-2 text-sm transition-all duration-500'>
          <Sparkles className='text-primary h-4 w-4 shrink-0 animate-pulse' />
          <span className='text-muted-foreground italic transition-opacity duration-500'>
            {CINEMA_TIPS[tipIndex]}
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
