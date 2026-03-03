/* eslint-disable @typescript-eslint/no-explicit-any */
import { getSession } from 'next-auth/react'

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL

async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  // 1. Obtener la sesión (Servidor o Cliente)
  const session = await getSession()

  const config = {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      // 2. Inyectamos el token para que Render nos deje pasar
      ...(session?.accessToken && {
        Authorization: `Bearer ${session.accessToken}`,
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
  put: <T>(url: string, body: any) =>
    apiRequest<T>(url, { method: 'PUT', body: JSON.stringify(body) }),
  delete: <T>(url: string) => apiRequest<T>(url, { method: 'DELETE' }),
}
