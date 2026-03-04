import { Badge } from '@/components/ui/badge'
import { CheckCircle2, Clock, LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { OrderStatus } from './interfaces'

interface OrderStatusBadgeProps {
  status: OrderStatus
}

// Almacenamos la referencia al componente (LucideIcon), no el JSX renderizado
const statusConfig: Record<
  OrderStatus,
  { label: string; icon: LucideIcon; className: string }
> = {
  PAID: {
    label: 'Pagado',
    icon: CheckCircle2,
    className: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-500', // Un poco más oscuro para legibilidad
  },
  PENDING: {
    label: 'Pendiente',
    icon: Clock,
    className: 'border-amber-500/30 bg-amber-500/10 text-amber-600',
  },
}

export function OrderStatusBadge({ status }: OrderStatusBadgeProps) {
  const config = statusConfig[status]
  const Icon = config.icon // Ahora Icon es un componente válido

  return (
    <Badge
      variant='outline'
      className={cn('gap-1.5 px-3 py-1 font-medium', config.className)}
    >
      <Icon className='h-3.5 w-3.5' />
      {config.label}
    </Badge>
  )
}
