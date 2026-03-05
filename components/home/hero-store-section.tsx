import Image from "next/image"
import { Button } from "@/components/ui/button"

const COLLAGE_POSTERS = [
  { src: "/home/poster-1.jpg", alt: "La Sombra del Director", span: "row" as const },
  { src: "/home/poster-2.jpg", alt: "Luces de Gala", span: "normal" as const },
  { src: "/home/poster-3.jpg", alt: "Ciudad Neon", span: "normal" as const },
  { src: "/home/poster-4.jpg", alt: "La Casa del Terror", span: "col" as const },
  { src: "/home/poster-5.jpg", alt: "Amigos por Siempre", span: "normal" as const },
  { src: "/home/poster-6.jpg", alt: "Mas Alla del Cosmos", span: "normal" as const },
  { src: "/home/poster-7.jpg", alt: "El Duque", span: "normal" as const },
  { src: "/home/poster-8.jpg", alt: "Bosque Encantado", span: "row" as const },
  { src: "/home/poster-9.jpg", alt: "Callejon Oscuro", span: "normal" as const },
]

function CollageGrid() {
  return (
    <div className="grid auto-rows-[120px] grid-cols-3 gap-2 md:auto-rows-[140px]">
      {COLLAGE_POSTERS.map((poster) => (
        <div
          key={poster.alt}
          className={`group relative overflow-hidden rounded-md ${
            poster.span === "row"
              ? "col-span-2"
              : poster.span === "col"
                ? "row-span-2"
                : ""
          }`}
        >
          <Image
            src={poster.src}
            alt={poster.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-background/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/80 to-transparent p-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="text-xs font-medium text-foreground">{poster.alt}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export function HeroStoreSection() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-background">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-10 px-6 pt-28 pb-16 lg:flex-row lg:gap-16 lg:pt-32">
        {/* Left: Copy */}
        <div className="flex flex-1 flex-col justify-center">
          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Tienda de CineStudio
          </h1>
          <p className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
            Ya puedes alquilar o comprar las mejores peliculas, ya sean novedades o clasicos favoritos. No es obligatorio tener una suscripcion a CineStudio.
          </p>
          <div className="mt-10">
            <Button
              size="lg"
              variant="outline"
              className="rounded-sm border-foreground/80 bg-transparent px-8 py-6 text-base font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              Rentar o comprar peliculas
            </Button>
          </div>
        </div>

        {/* Right: Collage Grid */}
        <div className="w-full flex-1 lg:max-w-[600px]">
          <CollageGrid />
        </div>
      </div>
    </section>
  )
}
