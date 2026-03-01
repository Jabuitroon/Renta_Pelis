import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

// Definimos las opciones fuera del handler para que sea más limpio (SOLID)
const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // if (!credentials?.email || !credentials?.password) return null
        // Extraer solo lo que el Backend de Render necesita
        const payload = {
          email: credentials?.email,
          password: credentials?.password,
        }

        console.log('Url', url)

        console.log('Datos enviados desde el front:', payload)
        // Llamada a tu backend en RENDER
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`,
          {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json' },
          }
        )

        console.log('Status del Backend en Render:', res.status)

        const user = await res.json()

        console.log('Respuesta del Backend:', user)

        // Si Render dice que todo ok, devolvemos el objeto user a NextAuth
        if (res.ok && user) {
          return {
            id: user.id,
            name: user.name,
            email: user.email,
            accessToken: user.access_token, // El token que viene de Render
          }
        }

        return null
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken
        token.id = user.id
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.accessToken = token.accessToken
        session.user.id = token.id
      }
      return session
    },
  },
  pages: {
    signIn: '/auth/login', // Tu página personalizada
  },
}

const handler = NextAuth(authOptions)

// Exportamos los métodos HTTP que NextAuth necesita
export { handler as GET, handler as POST }
