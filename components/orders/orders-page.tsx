'use client'

import { useState } from 'react'
import { Clapperboard, Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { OrderCard } from '@/components/orders/order-card'
import { OrdersSummary } from '@/components/orders/orders-summary'
import { Order, OrderItem } from './interfaces'

export function Orders({ initialOrders }: { initialOrders: Order[] }) {
  const [searchQuery, setSearchQuery] = useState('')

  console.log(initialOrders, 'initialOrders');
  

  // Adaptamos el filtro al nombre de las propiedades del backend (orderId, status PENDING/PAID)
  const filterOrders = (status: 'ALL' | 'pagado' | 'pendiente') => {
    let filtered = initialOrders

    if (status !== 'ALL') {
      filtered = filtered.filter((o) => o.status === status)
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (o) =>
          o.orderId.toLowerCase().includes(q) ||
          o.items.some((i: OrderItem) =>
            i.movie.title.toLowerCase().includes(q)
          )
      )
    }
    return filtered
  }

  const paidOrders = filterOrders('pagado')
  const pendingOrders = filterOrders('pendiente')
  const filteredAll = filterOrders('ALL')

  return (
    <div className='bg-background min-h-screen'>
      {/* ... (Tu Header se mantiene igual) ... */}

      <main className='mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8'>
        <div className='mb-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between'>
          <div className='flex items-center gap-4'>
            <div className='bg-primary/10 flex h-12 w-12 items-center justify-center rounded-full'>
              <Clapperboard className='text-primary h-6 w-6' />
            </div>
            <div>
              <h1 className='text-foreground text-2xl font-bold tracking-tight sm:text-3xl'>
                Mis Ordenes
              </h1>
              <p className='text-muted-foreground'>
                Historial de producciones rentadas
              </p>
            </div>
          </div>

          <div className='relative w-full max-w-xs'>
            <Search className='text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2' />
            <Input
              placeholder='Buscar orden o título...'
              className='pl-9'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <OrdersSummary orders={initialOrders} />

        <Tabs defaultValue='all' className='mt-8'>
          <TabsList className='mb-6 w-full sm:w-auto'>
            <TabsTrigger value='all' className='gap-2'>
              Todas{' '}
              <span className='bg-primary/20 text-primary rounded-full px-2 py-0.5 text-[10px] font-bold'>
                {initialOrders.length}
              </span>
            </TabsTrigger>
            <TabsTrigger value='pagado' className='gap-2'>
              Pagadas{' '}
              <span className='rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-400'>
                {paidOrders.length}
              </span>
            </TabsTrigger>
            <TabsTrigger value='pendiente' className='gap-2'>
              Pendientes{' '}
              <span className='rounded-full bg-amber-500/20 px-2 py-0.5 text-[10px] font-bold text-amber-400'>
                {pendingOrders.length}
              </span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value='all'>
            <OrderList orders={filteredAll} />
          </TabsContent>
          <TabsContent value='pagado'>
            <OrderList orders={paidOrders} />
          </TabsContent>
          <TabsContent value='pendiente'>
            <OrderList orders={pendingOrders} />
          </TabsContent>
        </Tabs>
      </main>
      {/* ... (Footer igual) ... */}
    </div>
  )
}

function OrderList({ orders }: { orders: Order[] }) {
  if (orders.length === 0) {
    return (
      <div className='border-border bg-card/50 flex flex-col items-center justify-center gap-4 rounded-xl border border-dashed py-16'>
        <p className='text-foreground text-lg font-medium'>
          No se encontraron ordenes
        </p>
      </div>
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
