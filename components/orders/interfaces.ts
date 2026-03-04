export type OrderStatus = 'PAID' | 'PENDING'

export interface Order {
  orderId: string
  userId: string
  totalAmount: number
  status: OrderStatus
  createdAt: string
  updatedAt: string
  items: OrderItem[]
}

export interface OrderItem {
  id: string
  orderId: string
  imdbId: string
  price: number
  movie: Movie
}

export interface Movie {
  title: string
  poster: string
}
