/* eslint-disable @typescript-eslint/no-explicit-any */
import { getSession } from 'next-auth/react'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/app/auth/api/[...nextauth]/route' // Ajusta la ruta

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL

async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  // 1. Obtener la sesión (Servidor o Cliente)
  const isServer = typeof window === 'undefined'
  const session = isServer
    ? await getServerSession(authOptions)
    : await getSession()

  const config = {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...((session as any)?.user?.accessToken && {
        Authorization: `Bearer ${(session as any).user.accessToken}`,
      }),
      ...options.headers,
    },
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, config)

  if (!response.ok) {
    const error = await response
      .json()
      .catch(() => ({ message: 'Error desconocido' }))
    throw new Error(error.message || 'Error en la petición')
  }

  return response.json()
}

export const apiClient = {
  get: <T>(url: string) => apiRequest<T>(url, { method: 'GET' }),
  post: <T>(url: string, body: any) =>
    apiRequest<T>(url, { method: 'POST', body: JSON.stringify(body) }),
}
