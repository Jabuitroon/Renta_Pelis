'use client'

import { Badge } from '@/components/ui/badge'
import { CheckCircle2, Clock } from 'lucide-react'
import { cn } from '@/lib/utils'
import { OrderStatus } from './interfaces'

interface OrderStatusBadgeProps {
  status: OrderStatus
}

// const statusConfig: Record<OrderStatus, { label: string}> = {
// //   pagado: {
// //     label: "Pagado",
// //     icon: CheckCircle2,
// //     className: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
// //   },
// //   pendiente: {
// //     label: "Pendiente",
// //     icon: Clock,
// //     className: "border-amber-500/30 bg-amber-500/10 text-amber-400",
// //   },
//  }

export function OrderStatusBadge({ status }: OrderStatusBadgeProps) {
  // const config = statusConfig[status]
  // const Icon = config.icon

  return (
    <Badge
      variant='outline'
      className={cn('gap-1.5 px-3 py-1 text-xs font-semibold')}
    >
      {status}
    </Badge>
  )
}
