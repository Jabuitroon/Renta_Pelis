import { redirect } from 'next/navigation'
import { apiClient } from '@/lib/api-client'
import { Orders } from '@/components/orders/orders-page'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth/next'
import { Order } from '@/components/orders/interfaces'

export default async function OrdersPage() {
  // 🚀 Usamos tu apiClient inyectando el token que sacamos de getServerSession
  // 1. Verificamos la sesión en el servidor
  const session = await getServerSession(authOptions)

  // 2. Si no hay sesión, redireccionamos (el "rebote")
  if (!session) {
    redirect('/auth/login') // O la ruta de tu login
  }

  console.log(session.accessToken, 'sessions token')

  const allOrders = await apiClient.get(
    '/orders',
    session.accessToken
  ) as Order[]

  return <Orders initialOrders={allOrders} />
}
