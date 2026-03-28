'use client'

import { useState } from 'react'
import { RegisterForm } from '@/components/auth/register-form'
import { ScreenLoader } from '@/components/ui/screen-loader'

export function RegisterFormWrapper() {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <>
      <ScreenLoader show={isLoading} message='Registrando Usuario...' />
      <RegisterForm isLoading={isLoading} onLoadingChange={setIsLoading} />
    </>
  )
}
