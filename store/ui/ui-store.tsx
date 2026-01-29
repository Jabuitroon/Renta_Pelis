import { create } from 'zustand'

interface UiState {
  isSideMenuOpen: boolean
  isCheckoutLocked: boolean

  openSideMenu: () => void
  closeSideMenu: () => void
  toggleSideMenu: () => void

  lockCheckout: () => void
  unlockCheckout: () => void
}

export const useUiStore = create<UiState>((set) => ({
  isSideMenuOpen: false,
  isCheckoutLocked: false,

  openSideMenu: () => set({ isSideMenuOpen: true }),
  closeSideMenu: () => set({ isSideMenuOpen: false }),
  toggleSideMenu: () => set((s) => ({ isSideMenuOpen: !s.isSideMenuOpen })),

  lockCheckout: () => set({ isCheckoutLocked: true }),
  unlockCheckout: () => set({ isCheckoutLocked: false }),
}))
