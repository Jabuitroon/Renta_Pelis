export { default } from 'next-auth/middleware'

export const config = {
  // Protege el dashboard y cualquier subruta de perfil
  matcher: ['/orders/:path*', '/profile/:path*', '/checkout/:path*'],
}
