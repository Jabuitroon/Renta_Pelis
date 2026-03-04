import { withAuth } from 'next-auth/middleware'

// 1. Exportamos el middleware por defecto envolviéndolo en withAuth
export default withAuth(
  // Esta función se ejecuta DESPUÉS de validar que el usuario está logueado
  {
    // 2. Aquí forzamos que use TU página de login y no la de NextAuth
    pages: {
      signIn: '/auth/login',
    },
  }
)

// 3. El matcher define qué rutas proteger
export const config = {
  matcher: [
    '/orders/:path*',
    '/profile/:path*',
    // Agrega aquí todas las rutas que requieren que el usuario esté logueado
  ],
}
