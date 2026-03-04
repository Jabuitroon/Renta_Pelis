'use client'

import { CreditCard, DollarSign, Film } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Order } from './interfaces'

interface OrdersSummaryProps {
  orders: Order[]
}

export function OrdersSummary({ orders }: OrdersSummaryProps) {
  const totalSpent = orders
    .filter((o) => o.status === 'pagado')
    .reduce((sum, o) => sum + o.totalAmount, 0)
  const totalTitles = orders.reduce((sum, o) => sum + o.items.length, 0)
  const pendingCount = orders.filter((o) => o.status === 'pendiente').length

  const stats = [
    {
      label: 'Total gastado',
      value: `$${totalSpent.toFixed(2)}`,
      icon: DollarSign,
    },
    {
      label: 'Títulos rentados',
      value: totalTitles.toString(),
      icon: Film,
    },
    {
      label: 'Pagos pendientes',
      value: pendingCount.toString(),
      icon: CreditCard,
    },
  ]

  return (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-3'>
      {stats.map((stat) => (
        <Card key={stat.label} className='border-border bg-card'>
          <CardContent className='flex items-center gap-4 p-5'>
            <div className='bg-primary/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg'>
              <stat.icon className='text-primary h-5 w-5' />
            </div>
            <div>
              <p className='text-muted-foreground text-sm'>{stat.label}</p>
              <p className='text-foreground text-xl font-bold'>{stat.value}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
