import NextAuth from 'next-auth'

declare module 'next-auth' {
  // Se extiende el objeto 'session' que devuelve useSession() y getSession()
  interface Session {
    user: {
      accessToken: string // <-- Aquí agregas el tipo de tu backend
      role?: string
    } & DefaultSession['user']
  }

  // Se extiende el objeto 'user' que devuelve el authorize del Provider
  interface User {
    accessToken: string // <-- Importante: debe coincidir con lo que devuelve Render
    role?: string
  }
}

declare module 'next-auth/jwt' {
  // Se extiende el token que se guarda en la cookie cifrada */
  interface JWT {
    accessToken: string
    id: string
  }
}
