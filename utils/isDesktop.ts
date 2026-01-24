export const isDesktop = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(hover: hover)').matches