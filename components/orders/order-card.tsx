'use client'

import {
  Calendar,
  Film,
  Hash,
  ChevronRight,
  Play,
  MoreHorizontal,
  RotateCcw,
  Download,
  Receipt,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { OrderStatusBadge } from './order-status-badge'
import { Order } from './interfaces'

interface OrderCardProps {
  order: Order
}

export function OrderCard({ order }: OrderCardProps) {
  const itemCount = order.items.length

  return (
    <Card className='group border-border bg-card hover:border-primary/30 overflow-hidden transition-all'>
      <CardContent className='p-0'>
        {/* Order header bar */}
        <div className='border-border bg-secondary/40 flex flex-wrap items-center justify-between gap-3 border-b px-5 py-3'>
          <div className='text-muted-foreground flex flex-wrap items-center gap-4 text-xs'>
            <span className='flex items-center gap-1.5'>
              <Hash className='text-primary h-3.5 w-3.5' />
              <span className='text-foreground font-mono font-medium'>
                {order.orderId}
              </span>
            </span>
            <span className='flex items-center gap-1.5'>
              <Calendar className='h-3.5 w-3.5' />
              {order.createdAt}
            </span>
            <span className='flex items-center gap-1.5'>
              <Film className='h-3.5 w-3.5' />
              {itemCount} {itemCount === 1 ? 'titulo' : 'titulos'}
            </span>
          </div>
          <div className='flex items-center gap-3'>
            <OrderStatusBadge status={order.status} />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant='ghost'
                  size='icon'
                  className='text-muted-foreground h-8 w-8'
                >
                  <MoreHorizontal className='h-4 w-4' />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='end'>
                <DropdownMenuItem>
                  <Receipt className='h-4 w-4' />
                  Ver factura
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Download className='h-4 w-4' />
                  Descargar recibo
                </DropdownMenuItem>
                {order.status === 'PAID' && (
                  <DropdownMenuItem>
                    <RotateCcw className='h-4 w-4' />
                    Solicitar reembolso
                  </DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Order body */}
        <div className='flex items-stretch'>
          {/* Posters stack */}
          <div className='relative flex shrink-0 items-center px-5 py-5'>
            <div
              className='relative'
              style={{
                width: `${Math.min(itemCount, 3) * 24 + 80}px`,
                height: '120px',
              }}
            >
              {order.items.slice(0, 3).map((item, i) => (
                <div
                  key={item.id}
                  className='border-card absolute top-0 aspect-2/3 h-full overflow-hidden rounded-md border-2 shadow-lg transition-transform group-hover:-translate-y-0.5'
                  style={{
                    left: `${i * 24}px`,
                    zIndex: 3 - i,
                  }}
                >
                  {/* Film perforation strip */}
                  <div className='bg-background/70 absolute top-0 left-0 h-full w-1.5'>
                    <div className='flex h-full flex-col justify-around py-1'>
                      {Array.from({ length: 6 }).map((_, j) => (
                        <div
                          key={j}
                          className='bg-muted-foreground/40 mx-auto h-0.5 w-0.5 rounded-full'
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              {itemCount > 3 && (
                <div
                  className='border-border bg-secondary absolute top-0 flex aspect-2/3 h-full items-center justify-center overflow-hidden rounded-md border-2 shadow-lg'
                  style={{ left: `${3 * 24}px`, zIndex: 0 }}
                >
                  <span className='text-muted-foreground text-xs font-bold'>
                    +{itemCount - 3}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Order details */}
          <div className='flex flex-1 flex-col justify-center gap-2 py-5 pr-5'>
            <div className='flex flex-wrap gap-1.5'>
              {order.items.slice(0, 2).map((item) => (
                <span
                  key={item.id}
                  className='text-foreground text-sm font-medium'
                >
                  {item.movie.title}
                  {order.items.indexOf(item) < Math.min(1, itemCount - 1) && (
                    <span className='text-muted-foreground'>,&nbsp;</span>
                  )}
                </span>
              ))}
              {itemCount > 2 && (
                <span className='text-muted-foreground text-sm'>
                  y {itemCount - 2} {itemCount - 2 === 1 ? 'titulo' : 'titulos'}{' '}
                  mas
                </span>
              )}
            </div>

            <div className='flex flex-wrap items-center gap-2'>
              {order.items.slice(0, 3).map((item) => (
                <span
                  key={item.id}
                  className='bg-secondary text-muted-foreground rounded px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase'
                >
                  {item.movie.title}
                </span>
              ))}
            </div>
          </div>

          {/* Price and action */}
          <div className='border-border flex shrink-0 flex-col items-end justify-center gap-3 border-l px-6 py-5'>
            <div className='text-right'>
              <p className='text-muted-foreground text-xs tracking-wider uppercase'>
                Total
              </p>
              <p className='text-primary text-2xl font-bold'>
                ${order.totalAmount.toFixed(2)}
              </p>
            </div>
            {order.status === 'PAID' ? (
              <Button size='sm' className='gap-1.5'>
                <Play className='h-3.5 w-3.5' />
                Reproducir
              </Button>
            ) : (
              <Button
                size='sm'
                variant='outline'
                className='gap-1.5 bg-transparent'
              >
                Completar pago
                <ChevronRight className='h-3.5 w-3.5' />
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
