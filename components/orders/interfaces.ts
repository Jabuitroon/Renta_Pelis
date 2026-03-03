export type OrderStatus = "pagado" | "pendiente"

export interface OrderItem {
  id: number
  title: string
  image: string
  format: 'HD' | '4K'
}

export interface Order {
  id: string
  date: string
  status: OrderStatus
  items: OrderItem[]
  total: number
}

export const orders: Order[] = [
  {
    id: 'ORD-20260215',
    date: '15 Feb 2026',
    status: 'pagado',
    items: [
      {
        id: 1,
        title: 'El Último Director',
        image: '/movies/movie-1.jpg',
        format: '4K',
      },
      {
        id: 2,
        title: 'Luces de Hollywood',
        image: '/movies/movie-2.jpg',
        format: 'HD',
      },
      {
        id: 3,
        title: 'El Guionista',
        image: '/movies/movie-3.jpg',
        format: '4K',
      },
    ],
    total: 44.97,
  },
  {
    id: 'ORD-20260228',
    date: '28 Feb 2026',
    status: 'pendiente',
    items: [
      {
        id: 4,
        title: 'Escena Final',
        image: '/movies/movie-4.jpg',
        format: '4K',
      },
    ],
    total: 16.99,
  },
  {
    id: 'ORD-20260301',
    date: '01 Mar 2026',
    status: 'pagado',
    items: [
      {
        id: 5,
        title: 'Protocolo Cosmos',
        image: '/movies/movie-5.jpg',
        format: '4K',
      },
      {
        id: 6,
        title: 'Sueños del Bulevar',
        image: '/movies/movie-6.jpg',
        format: 'HD',
      },
    ],
    total: 29.98,
  },
]
