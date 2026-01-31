/* eslint-disable @next/next/no-img-element */
'use client'
import CardItem from '@/components/cart/card-item'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import {
  Film,
  ShoppingCart,
  Trash2,
  Plus,
  Minus,
  Star,
  Clock,
  Ticket,
  CreditCard,
  ChevronRight,
} from 'lucide-react'
import { MovieInCart } from '@/interfaces/movie'

interface Props {
  cartItems: MovieInCart[]
  total: number
}

export default function CartWithItems({ cartItems, total }: Props) {
  return (
    <div className='bg-background mx-auto'>
      <section className='mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8'>
        {/* Page Title */}
        <div className='mb-8 flex items-center gap-4'>
          {/* {items.map((movie) => (
          <CardItem key={movie.imdbID} movie={movie} />
          ))} */}
          <div className='flex h-12 w-12 items-center justify-center rounded-full bg-primary/10'>
            <Ticket className='h-6 w-6 text-primary' />
          </div>
          <div>
            <h1 className='text-2xl font-bold tracking-tight text-foreground sm:text-3xl'>
              Tu Carrito de Pelis
            </h1>
            <p className='text-muted-foreground'>
              Tienes {cartItems.length}{' '} {cartItems.length === 1 ? 'item' : 'items'} para tí
            </p>
          </div>
        </div>

        <div className='grid gap-8 lg:grid-cols-3'>
          {/* Cart Items */}
          <div className='lg:col-span-2'>
            <div className='space-y-4'>
              {cartItems.map((item, index) => (
                <Card
                  key={item.imdbID}
                  className='overflow-hidden border-border bg-card transition-all hover:border-primary/30'
                >
                  <CardContent className='p-0'>
                    <div className='flex gap-4 p-4'>
                      {/* Movie Poster */}
                      <div className='relative aspect-2/3 w-24 shrink-0 overflow-hidden rounded-md bg-secondary sm:w-32'>
                        {/* Film strip decoration */}
                        <div className='absolute left-0 top-0 z-10 h-full w-2 bg-background/80'>
                          <div className='flex h-full flex-col justify-around py-1'>
                            {Array.from({ length: 8 }).map((_, i) => (
                              <div
                                key={i}
                                className='mx-auto h-1 w-1 rounded-full bg-muted-foreground/30'
                              />
                            ))}
                          </div>
                        </div>
                        <img
                          src={item.Poster || '/placeholder.svg'}
                          alt={item.Title}
                          className='object-cover'
                        />

                        <Badge className='absolute bottom-2 right-2 bg-primary/90 text-[10px] text-primary-foreground'>
                          {item.quality}
                        </Badge>
                      </div>

                      {/* Movie Details */}
                      <div className='flex flex-1 flex-col justify-between'>
                        <div>
                          <div className='mb-1 flex items-start justify-between gap-2'>
                            <h3 className='font-semibold text-card-foreground'>
                              {item.Type} : {item.Title}
                            </h3>
                            {/* Remover peli */}
                            {/* <Button
                                variant='ghost'
                                size='icon'
                                className='h-8 w-8 shrink-0 text-muted-foreground hover:text-destructive'
                                onClick={() => removeItem(item.id)}
                              >
                                <Trash2 className='h-4 w-4' />
                              </Button> */}
                          </div>

                          <div className='mb-2 flex flex-wrap items-center gap-2 text-sm text-muted-foreground'>
                            {item?.Genre.split(', ').map((genre) => (
                              <Badge
                                key={genre}
                                variant='outline'
                                className='border-border bg-transparent text-muted-foreground'
                              >
                                {genre}
                              </Badge>
                            ))}
                            <span>{item.Year}</span>
                          </div>

                          <div className='flex items-center gap-1 text-xs text-muted-foreground'>
                            <Clock className='h-3 w-3' />
                            <span>Disponible inmediatamente</span>
                          </div>
                        </div>

                        {/* Quantity and Price */}
                        <div className='mt-4 flex items-center justify-between'>
                          <div className='flex items-center gap-2'>
                            {/* AUmentar dias de renta */}
                            {/* <Button
                                variant='outline'
                                size='icon'
                                className='h-8 w-8 bg-transparent'
                                onClick={() => updateQuantity(item.id, -1)}
                              >
                                <Minus className='h-3 w-3' />
                              </Button> */}
                            {/* <span className='w-8 text-center font-medium text-card-foreground'>
                                {item.quantity}
                              </span> */}
                            {/* <Button
                                variant='outline'
                                size='icon'
                                className='h-8 w-8 bg-transparent'
                                onClick={() => updateQuantity(item.id, 1)}
                              >
                                <Plus className='h-3 w-3' />
                              </Button> */}
                          </div>
                          <div className='text-right'>
                            {/* Renta? */}
                            {/* <div className='text-lg font-bold text-primary'>
                                ${(item.price.amount * item.quantity).toFixed(2)}
                              </div> */}
                            <div className='text-lg font-bold text-primary'>
                              ${item.price.amount.toFixed(2)}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Scene number decoration */}
                    <div className='flex items-center gap-2 border-t border-border bg-secondary/30 px-4 py-2'>
                      <div className='flex h-6 w-6 items-center justify-center rounded bg-primary/20 text-xs font-bold text-primary'>
                        {index + 1}
                      </div>
                      <span className='text-xs uppercase tracking-wider text-muted-foreground'>
                        item {index + 1} de {cartItems.length}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Continue Shopping */}
            <div className='mt-6'>
              <Button variant='ghost' className='gap-2 text-muted-foreground'>
                <Film className='h-4 w-4' />
                Continuar explorando el catálogo
              </Button>
            </div>
          </div>

          {/* Order Summary */}
          <div className='lg:col-span-1'>
            <Card className='sticky top-8 border-border bg-foreground'>
              <CardContent className='p-6'>
                {/* Clapperboard header */}
                <div className='mb-6 flex items-center bg-chart-2 rounded-xl gap-3'>
                  <div className='relative ml-4'>
                    <div className='h-8 w-16 rounded-t bg-primary' />
                    <div className='flex h-6 w-16 items-center justify-center rounded-b bg-secondary'>
                      <span className='text-[10px] font-bold uppercase tracking-wider text-muted-foreground'>
                        Total
                      </span>
                    </div>
                  </div>
                  <h2 className='text-lg font-bold text-card-foreground'>
                    Resumen tu orden
                  </h2>
                </div>

                <div className='space-y-3'>
                  <div className='flex justify-between text-sm'>
                    <span className='text-muted-foreground'>
                      Subtotal ({cartItems.length} items)
                    </span>
                    <span className='text-background'>${total}</span>
                  </div>

                  {/* {discount > 0 && (
                      <div className='flex justify-between text-sm'>
                        <span className='text-primary'>
                          Descuento de producción (10%)
                        </span>
                        <span className='text-primary'>
                          -${discount.toFixed(2)}
                        </span>
                      </div>
                    )} */}

                  <div className='flex justify-between text-sm'>
                    <span className='text-muted-foreground'>
                      ¿Tienes un código de descuento?
                    </span>
                    <span className='text-primary'>No</span>
                  </div>
                </div>

                <Separator className='my-4 bg-border' />

                <div className='mb-6 flex justify-between'>
                  <span className='text-lg font-semibold text-card-foreground'>
                    Total
                  </span>
                  <span className='text-2xl font-bold text-primary'>
                    ${total.toFixed(2)}
                  </span>
                </div>

                <Button className='mb-4 w-full gap-2' size='lg'>
                  <CreditCard className='h-4 w-4' />
                  <Link href='/checkout'>Proceder al Pago</Link>
                  <ChevronRight className='h-4 w-4' />
                </Button>

                <p className='text-center text-xs text-muted-foreground'>
                  Pago seguro con encriptación de estudio
                </p>

                {/* Promo badge */}
                {total < 40000 && (
                  <div className='mt-4 rounded-lg border border-primary/30 bg-primary/5 p-3'>
                    <p className='text-center text-xs text-primary'>
                      Añade ${(40000 - total).toFixed(2)} más para obtener un
                      10% de descuento
                    </p>
                  </div>
                )}

                {/* {discount > 0 && (
                    <div className='mt-4 rounded-lg border border-primary/30 bg-primary/5 p-3'>
                      <p className='text-center text-xs text-primary'>
                        Has ahorrado ${discount.toFixed(2)} con el descuento de
                        producción
                      </p>
                    </div>
                  )} */}
              </CardContent>
            </Card>

            {/* Benefits */}
            <div className='mt-6 space-y-3'>
              {[
                { icon: Film, text: 'Calidad cinematográfica garantizada' },
                { icon: Clock, text: 'Descarga inmediata disponible' },
                { icon: Star, text: 'Soporte técnico 24/7' },
              ].map((benefit, i) => (
                <div
                  key={i}
                  className='flex items-center gap-3 text-sm text-muted-foreground'
                >
                  <benefit.icon className='h-4 w-4 text-primary' />
                  <span>{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
