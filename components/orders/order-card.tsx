'use client'

import { ChevronRight, Film } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { OrderStatusBadge } from '@/components/orders/order-status-badge'
import { Order } from './interfaces'

interface OrderCardProps {
  order: Order
}

export function OrderCard({ order }: OrderCardProps) {
  const itemCount = order.items.length
  const maxVisiblePosters = 4

  return (
    <Card className='group border-border bg-card hover:border-primary/40 overflow-hidden transition-all'>
      <CardContent className='p-0'>
        {/* Top bar - Order meta */}
        <div className='border-border bg-secondary/30 flex flex-wrap items-center justify-between gap-3 border-b px-5 py-3'>
          <div className='flex items-center gap-4'>
            <span className='text-foreground font-mono text-sm font-semibold tracking-wide'>
              {order.orderId}
            </span>
            <span className='text-muted-foreground text-sm'>
              {order.createdAt}
            </span>
          </div>
          <OrderStatusBadge status={order.status} />
        </div>

        {/* Body - Thumbnails + Summary */}
        <div className='flex items-center gap-5 p-5'>
          {/* Stacked poster thumbnails */}
          <div className='flex shrink-0 -space-x-4'>
            {order.items.slice(0, maxVisiblePosters).map((item, idx) => (
              <div
                key={item.id}
                className='border-card relative h-24 w-16 shrink-0 overflow-hidden rounded-md border-2 shadow-lg sm:h-28 sm:w-18'
                style={{ zIndex: maxVisiblePosters - idx }}
              ></div>
            ))}
            {itemCount > maxVisiblePosters && (
              <div
                className='border-card bg-secondary relative flex h-24 w-16 shrink-0 items-center justify-center overflow-hidden rounded-md border-2 sm:h-28 sm:w-18'
                style={{ zIndex: 0 }}
              >
                <span className='text-muted-foreground text-sm font-bold'>
                  +{itemCount - maxVisiblePosters}
                </span>
              </div>
            )}
          </div>

          {/* Order info */}
          <div className='flex min-w-0 flex-1 flex-col gap-2'>
            {/* Movie titles */}
            <div className='flex flex-wrap items-center gap-1.5'>
              {order.items.slice(0, 2).map((item) => (
                <span
                  key={item.id}
                  className='text-foreground truncate text-sm font-medium'
                >
                  {item.movie.title}
                </span>
              ))}
              {itemCount > 2 && (
                <span className='text-muted-foreground text-sm'>
                  y {itemCount - 2} más
                </span>
              )}
            </div>

            {/* Stats row */}
            <div className='flex flex-wrap items-center gap-3'>
              <Badge
                variant='secondary'
                className='text-secondary-foreground gap-1 text-xs'
              >
                <Film className='h-3 w-3' />
                {itemCount} {itemCount === 1 ? 'título' : 'títulos'}
              </Badge>
            </div>
          </div>

          {/* Price + action */}
          <div className='flex shrink-0 flex-col items-end gap-2'>
            <span className='text-primary text-xl font-bold sm:text-2xl'>
              ${order.totalAmount.toFixed(2)}
            </span>
            <Button
              variant='ghost'
              size='sm'
              className='text-muted-foreground hover:text-foreground gap-1 text-xs'
            >
              Ver detalle
              <ChevronRight className='h-3.5 w-3.5' />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
