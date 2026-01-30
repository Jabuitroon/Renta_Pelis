"use client"

import Image from "next/image"
import { Star, Play, Plus, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

interface Movie {
  id: number
  title: string
  genre: string
  year: number
  rating: number
  price: number
  image: string
}

export function MovieCard({ movie }: { movie: Movie }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className="group relative overflow-hidden border-border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Movie Poster */}
      <div className="relative aspect-[2/3] overflow-hidden bg-secondary">
        {/* Movie Image */}
        <Image
          src={movie.image || "/placeholder.svg"}
          alt={movie.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60" />
        
        {/* Film strip decoration */}
        <div className="absolute left-0 top-0 h-full w-3 bg-background/80">
          <div className="flex h-full flex-col justify-around py-2">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="mx-auto h-1.5 w-1.5 rounded-full bg-muted-foreground/30" />
            ))}
          </div>
        </div>
        <div className="absolute right-0 top-0 h-full w-3 bg-background/80">
          <div className="flex h-full flex-col justify-around py-2">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="mx-auto h-1.5 w-1.5 rounded-full bg-muted-foreground/30" />
            ))}
          </div>
        </div>

        {/* Hover overlay */}
        <div
          className={`absolute inset-0 flex items-center justify-center bg-background/90 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col items-center gap-3">
            <Button size="sm" className="gap-2">
              <Plus className="h-4 w-4" />
              Añadir al Carrito
            </Button>
            <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground">
              <Play className="h-4 w-4" />
              Ver Trailer
            </Button>
          </div>
        </div>

        {/* Badge */}
        <Badge className="absolute right-4 top-4 bg-primary text-primary-foreground">
          {movie.genre}
        </Badge>
      </div>

      {/* Movie Info */}
      <CardContent className="p-4">
        <div className="mb-2 flex items-start justify-between gap-2">
          <h3 className="font-semibold leading-tight text-card-foreground line-clamp-1">
            {movie.title}
          </h3>
          <div className="flex shrink-0 items-center gap-1">
            <Star className="h-3.5 w-3.5 fill-primary text-primary" />
            <span className="text-sm font-medium text-card-foreground">{movie.rating}</span>
          </div>
        </div>

        <div className="mb-3 flex items-center gap-3 text-sm text-muted-foreground">
          <span>{movie.year}</span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            2h 15min
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-primary">${movie.price}</span>
          <Button variant="outline" size="sm" className="h-8 bg-transparent">
            <Plus className="mr-1 h-3.5 w-3.5" />
            Añadir
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
