import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

function FeaturedPoster() {
  return (
    <div className='group relative h-screen min-h-125 overflow-hidden rounded-lg lg:min-h-0'>
      <Image
        src='/home/home.png'
        alt='MoviRent Original - El Misterio de Thornfield'
        fill
        className='object-cover transition-transform duration-700 group-hover:scale-105'
      />
      {/* Utilidad de Tailwind CSS, de izquierda a derecha (to-r) */}
      <div className='from-background via-background/10 absolute inset-0 bg-linear-to-r to-transparent' />
    </div>
  )
}

export function SubscriptionSection() {
  return (
    <section className='relative overflow-hidden'>
      {/* Top divider line */}
      <div className='mx-auto max-w-350 px-6'>
        <Separator className='bg-border/50' />
      </div>

      <div className='mx-auto flex max-w-350 flex-col justify-center lg:flex-row'>
        {/* Left: Login */}
        <div className='flex flex-1 flex-col justify-center px-6 lg:max-w-105'>
          <h2 className='text-foreground text-3xl leading-tight font-bold tracking-tight text-balance md:text-4xl lg:text-5xl'>
            {'Peliculas, series y mucho mas'}
          </h2>
          <p className='text-muted-foreground mt-6 max-w-md leading-relaxed text-pretty'>
            Disfruta de series y peliculas populares, asi como acceso
            instantaneo a tu biblioteca digital por $9,900 COP/mes, o ahorra 44%
            con una suscripcion anual de $65,500 COP ($5,550 COP/mes)*. Paga con
            tu tarjeta de credito o debito y comienza tu prueba gratis de 30
            dias.
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

        {/* Right: Featured Large Poster */}
        <div className='flex-1'>
          <FeaturedPoster />
        </div>
      </div>
    </section>
  )
}
