import { redirect } from 'next/navigation'
import { apiClient } from '@/lib/api-client'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth/next'
import { Order } from '@/components/orders/interfaces'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { OrdersSummary } from '@/components/orders/orders-summary'

export default async function OrdersPage() {
  // 🚀 Usamos tu apiClient inyectando el token que sacamos de getServerSession
  // 1. Verificamos la sesión en el servidor
  const session = await getServerSession(authOptions)
  console.log(session.accessToken, 'sessions token')
  
  // 2. Si no hay sesión, redireccionamos (el "rebote")
  if (!session) redirect('/auth/login')


  const allOrders = (await apiClient.get(
    '/orders',
    session.accessToken
  )) as Order[]

  // const filterOrders = (list: Order[]) => {
  //   const q = searchQuery.toLowerCase()
  //   return list.filter(
  //     (o) =>
  //       o.id.toLowerCase().includes(q) ||
  //       o.items.some((item) => item.title.toLowerCase().includes(q))
  //   )
  // }

  // return
  return (
    <div className='bg-background min-h-screen'>
      <main className='mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8'>
        <OrdersSummary orders={allOrders} />
      </main>
    </div>
  )
}
