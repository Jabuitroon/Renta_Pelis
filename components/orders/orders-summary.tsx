'use client'

import { Film, Search, Package, DollarSign, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
// import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { OrderCard } from './order-card'
import { Order } from './interfaces'

interface OrdersSummaryProps {
  orders: Order[]
}

export function OrdersSummary({ orders }: OrdersSummaryProps) {
  const totalSpent = orders
    .filter((o) => o.status === 'PAID')
    .reduce((sum, o) => sum + o.totalAmount, 0)
  const paidOrders = orders.filter((o) => o.status === 'PAID')
  const pendingOrders = orders.filter((o) => o.status === 'PENDING')

  const summaryStats = [
    {
      label: 'Total Gastado',
      value: `$${orders
        .filter((o) => o.status === 'PAID')
        .reduce((s, o) => s + o.totalAmount, 0)
        .toFixed(2)}`,
      icon: DollarSign,
    },
    {
      label: 'Peliculas Rentadas',
      value: orders
        .filter((o) => o.status === 'PAID')
        .reduce((s, o) => s + o.items.length, 0)
        .toString(),
      icon: Film,
    },
    {
      label: 'Ordenes Totales',
      value: orders.length.toString(),
      icon: Package,
    },
    {
      label: 'Promedio por Orden',
      value: `$${(orders.filter((o) => o.status === 'PAID').reduce((s, o) => s + o.totalAmount, 0) / paidOrders.length).toFixed(2)}`,
      icon: TrendingUp,
    },
  ]

  return (
    <>
      {/* Stats Summary */}
      <div className='mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4'>
        {summaryStats.map((stat) => (
          <Card key={stat.label} className='border-border bg-card'>
            <CardContent className='flex items-center gap-4 p-4'>
              <div className='bg-primary/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg'>
                <stat.icon className='text-primary h-5 w-5' />
              </div>
              <div>
                <p className='text-muted-foreground text-xs tracking-wider uppercase'>
                  {stat.label}
                </p>
                <p className='text-foreground text-xl font-bold'>
                  {stat.value}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator className='bg-border mb-8' />

      {/* Tabs */}
      <Tabs defaultValue='all flex-col'>
        <TabsList className='bg-secondary mb-6'>
          <TabsTrigger value='all' className='gap-1.5'>
            <Package className='h-4 w-4' />
            Todas
            <span className='bg-primary/20 text-primary ml-1 rounded-full px-2 py-0.5 text-[10px] font-bold'>
              {orders.length}
            </span>
          </TabsTrigger>
          <TabsTrigger value='paid' className='gap-1.5'>
            Pagadas
            <span className='ml-1 rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-400'>
              {paidOrders.length}
            </span>
          </TabsTrigger>
          <TabsTrigger value='pending' className='gap-1.5'>
            Pendientes
            <span className='ml-1 rounded-full bg-amber-500/20 px-2 py-0.5 text-[10px] font-bold text-amber-400'>
              {pendingOrders.length}
            </span>
          </TabsTrigger>
        </TabsList>
        <TabsContent value='all'>
          <OrderList orders={orders} />
        </TabsContent>
        <TabsContent value='paid'>
          <OrderList orders={paidOrders} />
        </TabsContent>
        <TabsContent value='pending'>
          {/* Para cuando maneje el input */}
          {/* <OrderList orders={filterOrders(pendingOrders)} /> */}
          <OrderList orders={pendingOrders} />
        </TabsContent>
      </Tabs>
    </>
  )
}

function OrderList({ orders }: { orders: Order[] }) {
  if (orders.length === 0) {
    return (
      <Card className='border-border bg-card'>
        <CardContent className='flex flex-col items-center justify-center py-16'>
          <div className='bg-secondary mb-4 flex h-16 w-16 items-center justify-center rounded-full'>
            <Package className='text-muted-foreground h-8 w-8' />
          </div>
          <h3 className='text-foreground mb-1 text-lg font-semibold'>
            Sin resultados
          </h3>
          <p className='text-muted-foreground text-sm'>
            No se encontraron ordenes con ese criterio de busqueda
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className='space-y-4'>
      {orders.map((order) => (
        <OrderCard key={order.orderId} order={order} />
      ))}
    </div>
  )
}
