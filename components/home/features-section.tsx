import Image from 'next/image'
import { Separator } from '@/components/ui/separator'

interface FeatureItem {
  image: string
  title: string
  description: string
}

const FEATURES: FeatureItem[] = [
  {
    image: '/home/feature-watch.jpg',
    title: 'Ver en cualquier parte',
    description:
      'Disfruta desde la web o con la aplicacion de CineStudio en tu telefono, tablet o ciertos Smart TV en hasta 3 dispositivos al mismo tiempo.',
  },
  {
    image: '/home/feature-download.jpg',
    title: 'Descarga y disfruta',
    description:
      'Disfruta de contenido sin conexion con la aplicacion CineStudio cuando descargues titulos en tu iPhone, iPad, tablet o dispositivo Android.',
  },
  {
    image: '/home/feature-save.jpg',
    title: 'Ahorro de datos',
    description:
      'Controla el uso de datos mientras descargas y ves videos en ciertos telefonos y tablets.',
  },
]

function FeatureCard({ feature }: { feature: FeatureItem }) {
  return (
    <div className='flex flex-col items-center text-center'>
      {/* Circular image */}
      <div className='ring-border/30 relative h-52 w-52 overflow-hidden rounded-full ring-2 md:h-60 md:w-60'>
        <Image
          src={feature.image}
          alt={feature.title}
          fill
          className='object-cover'
        />
      </div>
      {/* Title */}
      <h3 className='text-foreground mt-6 text-xl font-bold italic md:text-2xl'>
        {feature.title}
      </h3>
      {/* Description */}
      <p className='text-muted-foreground mt-3 max-w-xs leading-relaxed text-pretty'>
        {feature.description}
      </p>
    </div>
  )
}

export function FeaturesSection() {
  return (
    <section className='bg-background relative'>
      {/* Top divider */}
      <div className='mx-auto max-w-350 px-6'>
        <Separator className='bg-border/50' />
      </div>

      <div className='mx-auto max-w-350 px-6 py-20 lg:py-28'>
        <div className='grid grid-cols-1 gap-14 md:grid-cols-3 md:gap-10'>
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
