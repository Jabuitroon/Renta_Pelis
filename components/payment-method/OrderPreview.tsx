'use client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useCartStore } from '@/store/cart.store'
import { useCheckoutStore } from '@/store/checkout.store'
import { OrderSummary } from './order-summary'

export default function OrderPreview() {
  const user = useCheckoutStore((state) => state.user)
  const items = useCartStore((state) => state.items)
  const getTotal = useCartStore((state) => state.getTotal)

  const totalToPay = getTotal()
  console.log(items)

  if (!user) {
    return (
      <Card className='w-full'>
        <CardHeader>
          <CardTitle>Resumen de la orden</CardTitle>
        </CardHeader>
        <CardContent className='text-muted-foreground'>
          Completa el formulario para ver el resumen
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className='w-full h-full'>
      <CardHeader>
        <CardTitle>Resumen de la orden</CardTitle>
      </CardHeader>
      <CardContent className='space-y-2 text-sm'>
        <p>
          <strong>Nombre:</strong> {user.name} {user.lastname}
        </p>
        <p>
          <strong>Dirección:</strong> {user.address}
        </p>
        <p>
          <strong>País:</strong> {user.country}
        </p>
        <p>
          <strong>Teléfono:</strong> {user.phone}
        </p>
      </CardContent>
      <OrderSummary movies={items} total={totalToPay} />
    </Card>
  )
}
