'use client'

import { useState } from 'react'
import { Film, ShoppingCart, Clapperboard, User, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { OrderCard } from '@/components/orders/order-card'
import { OrdersSummary } from '@/components/orders/orders-summary'
import { Order } from './interfaces'


export function OrdersPage() {
  const [searchQuery, setSearchQuery] = useState('')

  const filterOrders = (status: 'all' | 'pagado' | 'pendiente') => {
    let filtered = allOrders
    if (status !== 'all') {
      filtered = filtered.filter((o) => o.status === status)
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (o) =>
          o.id.toLowerCase().includes(q) ||
          o.items.some((i) => i.title.toLowerCase().includes(q))
      )
    }
    return filtered
  }

  const paidOrders = filterOrders('pagado')
  const pendingOrders = filterOrders('pendiente')
  const filteredAll = filterOrders('all')

  return (
    <div className='bg-background min-h-screen'>
      {/* Header */}
      <header className='border-border border-b'>
        <div className='mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-3'>
              <div className='bg-primary flex h-10 w-10 items-center justify-center rounded-lg'>
                <Film className='text-primary-foreground h-6 w-6' />
              </div>
              <span className='text-foreground text-xl font-bold tracking-wider'>
                CINESTUDIO
              </span>
            </div>
            <nav className='hidden items-center gap-8 md:flex'>
              <a
                href='#'
                className='text-muted-foreground hover:text-foreground text-sm font-medium tracking-widest uppercase transition-colors'
              >
                Catálogo
              </a>
              <a
                href='#'
                className='text-foreground text-sm font-medium tracking-widest uppercase transition-colors'
              >
                Mis Ordenes
              </a>
              <a
                href='#'
                className='text-muted-foreground hover:text-foreground text-sm font-medium tracking-widest uppercase transition-colors'
              >
                Favoritos
              </a>
            </nav>
            <div className='flex items-center gap-3'>
              <Button variant='ghost' size='icon' className='relative'>
                <ShoppingCart className='h-5 w-5' />
              </Button>
              <Button variant='ghost' size='icon'>
                <User className='h-5 w-5' />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className='mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8'>
        {/* Page heading */}
        <div className='mb-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between'>
          <div className='flex items-center gap-4'>
            <div className='bg-primary/10 flex h-12 w-12 items-center justify-center rounded-full'>
              <Clapperboard className='text-primary h-6 w-6' />
            </div>
            <div>
              <h1 className='text-foreground text-2xl font-bold tracking-tight text-balance sm:text-3xl'>
                Mis Ordenes
              </h1>
              <p className='text-muted-foreground'>
                Historial de producciones rentadas
              </p>
            </div>
          </div>

          {/* Search */}
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

        {/* Summary cards */}

        {/* Esto debe ir en componente cliente */}
        <OrdersSummary orders={allOrders} />

        {/* Tabs + Orders */}
        <Tabs defaultValue='all' className='mt-8'>
          <TabsList className='mb-6 w-full sm:w-auto'>
            <TabsTrigger value='all' className='gap-2'>
              Todas
              <span className='bg-primary/20 text-primary rounded-full px-2 py-0.5 text-[10px] font-bold'>
                {allOrders.length}
              </span>
            </TabsTrigger>
            <TabsTrigger value='pagado' className='gap-2'>
              Pagadas
              <span className='rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-400'>
                {allOrders.filter((o) => o.status === 'pagado').length}
              </span>
            </TabsTrigger>
            <TabsTrigger value='pendiente' className='gap-2'>
              Pendientes
              <span className='rounded-full bg-amber-500/20 px-2 py-0.5 text-[10px] font-bold text-amber-400'>
                {allOrders.filter((o) => o.status === 'pendiente').length}
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

      {/* Footer */}
      <footer className='border-border bg-card mt-16 border-t py-10'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col items-center justify-between gap-6 md:flex-row'>
            <div className='flex items-center gap-3'>
              <div className='bg-primary flex h-8 w-8 items-center justify-center rounded'>
                <Film className='text-primary-foreground h-4 w-4' />
              </div>
              <span className='text-foreground font-bold tracking-wider'>
                CINESTUDIO
              </span>
            </div>
            <p className='text-muted-foreground text-sm'>
              © 2026 CineStudio. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

/* ——————————————————————————————————————————— */
/* Empty state + list (SRP)                    */
/* ——————————————————————————————————————————— */


function OrderList({ orders }: { orders: Order[] }) {
  if (orders.length === 0) {
    return (
      <div className='border-border bg-card/50 flex flex-col items-center justify-center gap-4 rounded-xl border border-dashed py-16'>
        <div className='bg-secondary flex h-16 w-16 items-center justify-center rounded-full'>
          <Film className='text-muted-foreground h-8 w-8' />
        </div>
        <p className='text-foreground text-lg font-medium'>
          No se encontraron ordenes
        </p>
        <p className='text-muted-foreground text-sm'>
          Intenta con otro término de búsqueda
        </p>
      </div>
    )
  }

  return (
    <div className='space-y-4'>
      {orders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  )
}
