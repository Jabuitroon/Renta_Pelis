'use client'

import { Mail, Lock, Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

import { AuthLayout } from './auth-layout'
import { SocialAuthButtons } from './social-auth-buttons'
import { AuthField, AuthFieldConfig } from './auth-field'

const loginFields: AuthFieldConfig[] = [
  {
    id: 'email',
    label: 'Correo electrónico',
    type: 'email',
    placeholder: 'director@cinestudio.com',
    icon: <Mail className='h-4 w-4' />,
    autoComplete: 'email',
  },
  {
    id: 'password',
    label: 'Contraseña',
    type: 'password',
    placeholder: 'Tu contraseña secreta',
    icon: <Lock className='h-4 w-4' />,
    autoComplete: 'current-password',
  },
]

function PasswordToggle({
  visible,
  onToggle,
}: {
  visible: boolean
  onToggle: () => void
}) {
  return (
    <button
      type='button'
      onClick={onToggle}
      className='text-muted-foreground hover:text-foreground absolute top-1/2 right-3 -translate-y-1/2 transition-colors'
      aria-label={visible ? 'Ocultar contraseña' : 'Mostrar contraseña'}
    >
      {visible ? <EyeOff className='h-4 w-4' /> : <Eye className='h-4 w-4' />}
    </button>
  )
}

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)

  const getFieldWithPasswordToggle = (
    field: AuthFieldConfig
  ): AuthFieldConfig => {
    if (field.id === 'password') {
      return { ...field, type: showPassword ? 'text' : 'password' }
    }
    return field
  }

  return (
    <AuthLayout
      title='Bienvenido al Set'
      subtitle='Inicia sesión para acceder a tu colección de películas y series'
      footerText='¿Nuevo en el estudio?'
      footerLinkText='Crea tu cuenta'
      footerLinkHref='/register'
    >
      <form
        className='flex flex-col gap-5'
        onSubmit={(e) => e.preventDefault()}
      >
        {loginFields.map((field) => (
          <div key={field.id} className='relative'>
            <AuthField field={getFieldWithPasswordToggle(field)} />
            {field.id === 'password' && (
              <div className='absolute top-0 right-0'>
                <PasswordToggle
                  visible={showPassword}
                  onToggle={() => setShowPassword(!showPassword)}
                />
              </div>
            )}
          </div>
        ))}

        {/* Remember + Forgot */}
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <Checkbox id='remember' />
            <Label
              htmlFor='remember'
              className='text-muted-foreground text-sm font-normal'
            >
              Recordar sesión
            </Label>
          </div>
          <Link
            href='#'
            className='text-primary hover:text-primary/80 text-sm underline-offset-4 transition-colors hover:underline'
          >
            ¿Olvidaste tu contraseña?
          </Link>
        </div>

        {/* Submit */}
        <Button
          type='submit'
          className='bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-primary/25 mt-1 h-11 w-full font-semibold transition-all hover:shadow-md'
        >
          Entrar al Estudio
        </Button>
      </form>

      <SocialAuthButtons />
    </AuthLayout>
  )
}
