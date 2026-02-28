import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// Definimos las opciones fuera del handler para que sea más limpio (SOLID)
export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        // Llamada a tu backend en RENDER
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`, {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });

        const user = await res.json();

        // Si Render dice que todo ok, devolvemos el objeto user a NextAuth
        if (res.ok && user) {
          return {
            id: user.id,
            name: user.name,
            email: user.email,
            accessToken: user.token, // El token que viene de Render
          };
        }

        return null;
      },
    }),
  ],
  callbacks: {
    // Guardamos el token de Render en el JWT de NextAuth
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
        token.id = user.id;
      }
      return token;
    },
    // Hacemos que el token sea accesible desde el cliente (useSession)
    async session({ session, token }) {
      if (session.user) {
        session.user.accessToken = token.accessToken;
        session.user.id = token.id;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/login", // Tu página personalizada de login
  },
  session: {
    strategy: "jwt",
  },
};

const handler = NextAuth(authOptions);

// Exportamos los métodos HTTP que NextAuth necesita
export { handler as GET, handler as POST };