import { create } from 'zustand'

type UserInfo = {
  name: string
  lastname: string
  address: string
  country: string
  phone: string
}

type CheckoutState = {
  user: UserInfo | null
  setUser: (data: UserInfo) => void
  clearUser: () => void
}

export const useCheckoutStore = create<CheckoutState>((set) => ({
  user: null,
  setUser: (data) => set({ user: data }),
  clearUser: () => set({ user: null }),
}))