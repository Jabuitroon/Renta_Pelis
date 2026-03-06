import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

// La carpeta public es el root
const GRID_POSTERS = [
  { src: '/home/poster-10.jpg', alt: 'Batalla Final' },
  { src: '/home/poster-11.jpg', alt: 'Sonido Vivo' },
  { src: '/home/poster-3.jpg', alt: 'Ciudad Neon' },
  { src: '/home/featured.jpg', alt: 'Amigos por Siempre' },
  { src: '/home/poster-12.jpg', alt: 'El Hechicero' },
  { src: '/home/poster-1.jpg', alt: 'La Sombra del Director' },
  { src: '/home/poster-9.jpg', alt: 'Callejon Oscuro' },
  { src: '/home/poster-7.jpg', alt: 'El Duque' },
]

function SmallCollageGrid() {
  return (
    <div className='grid grid-cols-2 gap-2'>
      {GRID_POSTERS.map((poster) => (
        <div
          key={poster.alt}
          className='group relative aspect-video overflow-hidden rounded-md'
        >
          <Image
            src={poster.src}
            alt={poster.alt}
            fill
            className='object-cover transition-transform duration-500 group-hover:scale-110'
          />
          <div className='from-background/60 absolute inset-0 bg-linear-to-t to-transparent' />
          <span className='text-foreground/80 absolute bottom-1.5 left-2 text-[11px] font-medium'>
            {poster.alt}
          </span>
        </div>
      ))}
    </div>
  )
}

function FeaturedPoster() {
  return (
    <div className='group relative h-full min-h-125 overflow-hidden rounded-lg lg:min-h-0'>
      <Image
        src='/home/home.png'
        alt='MoviRent Original - El Misterio de Thornfield'
        fill
        className='object-cover transition-transform duration-700 group-hover:scale-105'
      />
      <div className='from-background via-background/30 absolute inset-0 bg-linear-to-t to-transparent' />
      <div className='absolute right-6 bottom-6 left-6'>
        <span className='bg-primary/90 text-primary-foreground inline-block rounded-sm px-3 py-1 text-xs font-bold tracking-wider uppercase'>
          MoviRent Original
        </span>
        <h3 className='text-foreground mt-3 text-2xl leading-tight font-bold lg:text-3xl'>
          El Misterio de Thornfield
        </h3>
      </div>
    </div>
  )
}

export function SubscriptionSection() {
  return (
    <section className='bg-background relative overflow-hidden'>
      {/* Top divider line */}
      <div className='mx-auto max-w-350 px-6'>
        <Separator className='bg-border/50' />
      </div>

      <div className='mx-auto flex max-w-350 flex-col gap-10 px-6 py-20 lg:flex-row lg:gap-8'>
        {/* Left: Copy */}
        <div className='flex flex-1 flex-col justify-center lg:max-w-105'>
          <h2 className='text-foreground text-3xl leading-tight font-bold tracking-tight text-balance md:text-4xl lg:text-5xl'>
            {'Peliculas, series y mucho mas'}
          </h2>
          <p className='text-muted-foreground mt-6 max-w-md leading-relaxed text-pretty'>
            Disfruta de series y peliculas populares, asi como acceso
            instantaneo a tu biblioteca digital por $9,900 COP/mes, o ahorra
            44% con una suscripcion anual de $65,500 COP ($5,550 COP/mes)*.
            Paga con tu tarjeta de credito o debito y comienza tu prueba gratis
            de 30 dias.
          </p>
          <div className='mt-10 flex flex-col gap-4'>
            <Button
              size='lg'
              variant='outline'
              className='border-foreground/80 text-foreground hover:bg-foreground hover:text-background rounded-sm bg-transparent px-8 py-6 text-base font-semibold transition-colors'
            >
              Iniciar sesion
            </Button>
            <span className='text-muted-foreground text-center text-sm'>o</span>
            <Button
              size='lg'
              variant='outline'
              className='border-foreground/80 text-foreground hover:bg-foreground hover:text-background rounded-sm bg-transparent px-8 py-6 text-base font-semibold transition-colors'
            >
              Crear cuenta
            </Button>
          </div>
        </div>

        {/* Center: Small Collage */}
        <div className='flex-1 lg:max-w-95'>
          <SmallCollageGrid />
        </div>

        {/* Right: Featured Large Poster */}
        <div className='flex-1 lg:max-w-110'>
          <FeaturedPoster />
        </div>
      </div>
    </section>
  )
}
