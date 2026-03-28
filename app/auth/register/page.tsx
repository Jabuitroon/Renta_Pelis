import { Suspense } from 'react'
import { RegisterFormWrapper } from '@/components/ui/loader-wrapper/register-form-wrapper'

export default function RegisterPage() {
  return (
    <Suspense
      fallback={<div className='bg-muted h-40 animate-pulse rounded-md' />}
    >
      <RegisterFormWrapper />
    </Suspense>
  )
}
