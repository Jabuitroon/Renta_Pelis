import { create } from 'zustand'

import type { MovieInCart } from '@/interfaces/movie'

interface CartState {
  items: MovieInCart[]

  addItem: (moviee: MovieInCart) => void
  removeItem: (imdbID: string) => void
  clearCart: () => void

  isInCart: (imdbID: string) => boolean
  getTotal: () => number
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],

  addItem: (movie) =>
    set((state) => {
      const exists = state.items.some((item) => item.imdbID === movie.imdbID)

      if (exists) return state

      return { items: [...state.items, movie] }
    }),

  removeItem: (imdbID) =>
    set((state) => ({
      items: state.items.filter((item) => item.imdbID !== imdbID),
    })),

  clearCart: () => set({ items: [] }),

  isInCart: (imdbID) => get().items.some((item) => item.imdbID === imdbID),

  getTotal: () =>
    get().items.reduce((total, item) => total + item.price.amount, 0),
}))
