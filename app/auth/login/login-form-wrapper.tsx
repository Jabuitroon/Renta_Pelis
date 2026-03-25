'use client'

import { useState } from 'react'
import { LoginForm } from '@/components/auth/login-form'
import { ScreenLoader } from '@/components/ui/screen-loader'

export function LoginFormWrapper() {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <>
      <ScreenLoader show={isLoading} message='Iniciando sesión...' />
      <LoginForm isLoading={isLoading} onLoadingChange={setIsLoading} />
    </>
  )
}
