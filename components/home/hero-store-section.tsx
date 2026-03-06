import Image from 'next/image'
import { Button } from '@/components/ui/button'

const COLLAGE_POSTERS = [
  {
    src: '/home/poster-1.jpg',
    alt: 'La Sombra del Director',
    span: 'row' as const,
  },
  { src: '/home/poster-2.jpg', alt: 'Luces de Gala', span: 'normal' as const },
  { src: '/home/poster-3.jpg', alt: 'Ciudad Neon', span: 'normal' as const },
  {
    src: '/home/poster-4.jpg',
    alt: 'La Casa del Terror',
    span: 'col' as const,
  },
  {
    src: '/home/poster-5.jpg',
    alt: 'Amigos por Siempre',
    span: 'normal' as const,
  },
  {
    src: '/home/poster-6.jpg',
    alt: 'Mas Alla del Cosmos',
    span: 'normal' as const,
  },
  { src: '/home/poster-7.jpg', alt: 'El Duque', span: 'normal' as const },
  { src: '/home/poster-8.jpg', alt: 'Bosque Encantado', span: 'row' as const },
  {
    src: '/home/poster-9.jpg',
    alt: 'Callejon Oscuro',
    span: 'normal' as const,
  },
]

function CollageGrid() {
  return (
    <div className='grid auto-rows-[120px] grid-cols-3 gap-2 md:auto-rows-[140px]'>
      {COLLAGE_POSTERS.map((poster) => (
        <div
          key={poster.alt}
          className={`group relative overflow-hidden rounded-md ${
            poster.span === 'row'
              ? 'col-span-2'
              : poster.span === 'col'
                ? 'row-span-2'
                : ''
          }`}
        >
          <Image
            src={poster.src}
            alt={poster.alt}
            fill
            className='object-cover transition-transform duration-500 group-hover:scale-110'
          />
          <div className='bg-background/20 absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
          <div className='from-background/80 absolute right-0 bottom-0 left-0 bg-linear-to-t to-transparent p-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
            <span className='text-foreground text-xs font-medium'>
              {poster.alt}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

export function HeroStoreSection() {
  return (
    <section className='bg-background relative min-h-[90vh] overflow-hidden'>
      {/* Subtle background glow */}
      <div className='bg-primary/5 pointer-events-none absolute -top-40 right-0 h-150 w-150 rounded-full blur-[120px]' />

      <div className='mx-auto flex max-w-350 flex-col items-center gap-10 px-6 pt-28 pb-16 lg:flex-row lg:gap-16 lg:pt-32'>
        {/* Left: Copy */}
        <div className='flex flex-1 flex-col justify-center'>
          <h1 className='text-foreground text-4xl leading-tight font-bold tracking-tight text-balance md:text-5xl lg:text-6xl'>
            Tienda de MoviRent
          </h1>
          <p className='text-muted-foreground mt-6 max-w-lg text-lg leading-relaxed text-pretty'>
            Ya puedes alquilar o comprar las mejores peliculas, ya sean
            novedades o clasicos favoritos. No es obligatorio tener una
            suscripcion a MoviRent.
          </p>
          <div className='mt-10'>
            <Button
              size='lg'
              variant='outline'
              className='border-foreground/80 text-foreground hover:bg-foreground hover:text-background rounded-sm bg-transparent px-8 py-6 text-base font-semibold transition-colors'
            >
              Rentar o comprar peliculas
            </Button>
          </div>
        </div>

        {/* Right: Collage Grid */}
        <div className='w-full flex-1 lg:max-w-150'>
          <CollageGrid />
        </div>
      </div>
    </section>
  )
}
