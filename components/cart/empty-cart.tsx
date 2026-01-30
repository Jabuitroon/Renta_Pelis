"use client"

import { Film, Clapperboard, Play, ShoppingCart, Star, Clock, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
// import { MovieCard } from "@/components/movie-card"

const recommendedMovies = [
  {
    id: 1,
    title: "El Último Director",
    genre: "Drama",
    year: 2024,
    rating: 4.8,
    price: 14.99,
    image: "/movies/movie-1.jpg",
  },
  {
    id: 2,
    title: "Luces de Hollywood",
    genre: "Comedia",
    year: 2024,
    rating: 4.5,
    price: 12.99,
    image: "/movies/movie-2.jpg",
  },
  {
    id: 3,
    title: "El Guionista",
    genre: "Thriller",
    year: 2023,
    rating: 4.9,
    price: 16.99,
    image: "/movies/movie-3.jpg",
  },
  {
    id: 4,
    title: "Escena Final",
    genre: "Acción",
    year: 2024,
    rating: 4.7,
    price: 13.99,
    image: "/movies/movie-4.jpg",
  },
]

export function EmptyCart() {
  return (
    <div className="min-h-screen bg-background w-full">
      {/* Header */}
      {/* <header className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <Film className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold tracking-wider text-foreground">
                CINESTUDIO
              </span>
            </div>
            <nav className="hidden items-center gap-8 md:flex">
              <a href="#" className="text-sm font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground">
                Catálogo
              </a>
              <a href="#" className="text-sm font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground">
                Estrenos
              </a>
              <a href="#" className="text-sm font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground">
                Clásicos
              </a>
            </nav>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                  0
                </span>
              </Button>
            </div>
          </div>
        </div>
      </header> */}

      {/* Empty Cart Section */}
      <section className="relative overflow-hidden py-16 sm:py-24">
        {/* Film reel decorations */}
        <div className="pointer-events-none absolute -left-20 top-10 opacity-5">
          <FilmReelSVG className="h-64 w-64" />
        </div>
        <div className="pointer-events-none absolute -right-20 bottom-10 opacity-5">
          <FilmReelSVG className="h-64 w-64" />
        </div>
        
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          {/* Clapperboard Icon */}
          <div className="mx-auto mb-8 flex h-32 w-32 items-center justify-center rounded-full bg-secondary">
            <Clapperboard className="h-16 w-16 text-primary" />
          </div>
          
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            <span className="text-balance">Tu carrito está vacío</span>
          </h1>
          
          <p className="mb-2 text-lg text-muted-foreground">
            <span className="text-pretty">
              Parece que el set está despejado y listo para la acción.
            </span>
          </p>
          <p className="mb-8 text-muted-foreground">
            <span className="text-pretty">
              Explora nuestro catálogo y añade tus películas favoritas para comenzar tu propia producción cinematográfica.
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="gap-2 px-8">
              <Play className="h-4 w-4" />
              Explorar Catálogo
            </Button>
            <Button variant="outline" size="lg" className="gap-2 px-8 bg-transparent">
              <Sparkles className="h-4 w-4" />
              Ver Estrenos
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-8 border-t border-border pt-12">
            <div>
              <div className="text-2xl font-bold text-primary sm:text-3xl">5000+</div>
              <div className="text-sm text-muted-foreground">Películas</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary sm:text-3xl">4K</div>
              <div className="text-sm text-muted-foreground">Ultra HD</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary sm:text-3xl">24/7</div>
              <div className="text-sm text-muted-foreground">Streaming</div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Movies Section */}
      <section className="border-t border-border bg-secondary/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-center gap-4">
            <div className="h-px flex-1 bg-border" />
            <div className="flex items-center gap-3">
              <Star className="h-5 w-5 text-primary" />
              <h2 className="text-center text-xl font-bold uppercase tracking-widest text-foreground sm:text-2xl">
                Recomendados del Director
              </h2>
              <Star className="h-5 w-5 text-primary" />
            </div>
            <div className="h-px flex-1 bg-border" />
          </div>

          <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
            <span className="text-pretty">
              Selecciones exclusivas de nuestro equipo de curación cinematográfica. Películas que han marcado la historia del cine y los nuevos clásicos que no te puedes perder.
            </span>
          </p>

          {/* <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {recommendedMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div> */}

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" className="gap-2 bg-transparent">
              <Film className="h-4 w-4" />
              Ver Todo el Catálogo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="border-t border-border bg-card py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-primary">
                <Film className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-bold tracking-wider text-foreground">CINESTUDIO</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="transition-colors hover:text-foreground">Términos</a>
              <a href="#" className="transition-colors hover:text-foreground">Privacidad</a>
              <a href="#" className="transition-colors hover:text-foreground">Contacto</a>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2026 CineStudio. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer> */}
    </div>
  )
}

function FilmReelSVG({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="currentColor"
    >
      <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="4" />
      <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="50" cy="50" r="8" />
      <circle cx="50" cy="20" r="6" />
      <circle cx="50" cy="80" r="6" />
      <circle cx="20" cy="50" r="6" />
      <circle cx="80" cy="50" r="6" />
      <circle cx="28" cy="28" r="5" />
      <circle cx="72" cy="28" r="5" />
      <circle cx="28" cy="72" r="5" />
      <circle cx="72" cy="72" r="5" />
    </svg>
  )
}
