import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

const GRID_POSTERS = [
  { src: "/home/poster-10.jpg", alt: "Batalla Final" },
  { src: "/home/poster-11.jpg", alt: "Sonido Vivo" },
  { src: "/home/poster-3.jpg", alt: "Ciudad Neon" },
  { src: "/home/poster-5.jpg", alt: "Amigos por Siempre" },
  { src: "/home/poster-12.jpg", alt: "El Hechicero" },
  { src: "/home/poster-1.jpg", alt: "La Sombra del Director" },
  { src: "/home/poster-9.jpg", alt: "Callejon Oscuro" },
  { src: "/home/poster-7.jpg", alt: "El Duque" },
]

function SmallCollageGrid() {
  return (
    <div className="grid grid-cols-2 gap-2">
      {GRID_POSTERS.map((poster) => (
        <div
          key={poster.alt}
          className="group relative aspect-video overflow-hidden rounded-md"
        >
          <Image
            src={poster.src}
            alt={poster.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          <span className="absolute bottom-1.5 left-2 text-[11px] font-medium text-foreground/80">
            {poster.alt}
          </span>
        </div>
      ))}
    </div>
  )
}

function FeaturedPoster() {
  return (
    <div className="group relative h-full min-h-[500px] overflow-hidden rounded-lg lg:min-h-0">
      <Image
        src="/home/featured.jpg"
        alt="CineStudio Original - El Misterio de Thornfield"
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      <div className="absolute bottom-6 left-6 right-6">
        <span className="inline-block rounded-sm bg-primary/90 px-3 py-1 text-xs font-bold tracking-wider text-primary-foreground uppercase">
          CineStudio Original
        </span>
        <h3 className="mt-3 text-2xl font-bold leading-tight text-foreground lg:text-3xl">
          El Misterio de Thornfield
        </h3>
      </div>
    </div>
  )
}

export function SubscriptionSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Top divider line */}
      <div className="mx-auto max-w-[1400px] px-6">
        <Separator className="bg-border/50" />
      </div>

      <div className="mx-auto flex max-w-[1400px] flex-col gap-10 px-6 py-20 lg:flex-row lg:gap-8">
        {/* Left: Copy */}
        <div className="flex flex-1 flex-col justify-center lg:max-w-[420px]">
          <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
            {'Peliculas, series y mucho mas'}
          </h2>
          <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
            Disfruta de series y peliculas populares, asi como acceso instantaneo a tu biblioteca digital por $24,900 COP/mes, o ahorra 44% con una suscripcion anual de $165,600 COP ($13,800 COP/mes)*. Paga con tu tarjeta de credito o debito y comienza tu prueba gratis de 30 dias.
          </p>
          <div className="mt-10 flex flex-col gap-4">
            <Button
              size="lg"
              variant="outline"
              className="rounded-sm border-foreground/80 bg-transparent px-8 py-6 text-base font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              Iniciar sesion
            </Button>
            <span className="text-center text-sm text-muted-foreground">o</span>
            <Button
              size="lg"
              variant="outline"
              className="rounded-sm border-foreground/80 bg-transparent px-8 py-6 text-base font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              Inicia tu prueba gratis por 30 dias
            </Button>
          </div>
        </div>

        {/* Center: Small Collage */}
        <div className="flex-1 lg:max-w-[380px]">
          <SmallCollageGrid />
        </div>

        {/* Right: Featured Large Poster */}
        <div className="flex-1 lg:max-w-[440px]">
          <FeaturedPoster />
        </div>
      </div>
    </section>
  )
}
