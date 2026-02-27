/* eslint-disable react-hooks/incompatible-library */
'use client'

import {
  Mail,
  Lock,
  User,
  Phone,
  Globe,
  Languages,
  ArrowRight,
} from 'lucide-react'
import { useState, useMemo } from 'react'
// import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { AuthField, AuthFieldConfig } from './auth-field'
import {
  AuthSelectField,
  AuthSelectFieldConfig,
} from '@/components/selector-lang/select-field'
import { SocialAuthButtons } from './social-auth-buttons'
import { AuthLayout } from './auth-layout'
import { StepProgressBar } from './step-progress-bar'
import { PasswordToggle } from './password-toggle'
import { registerSchema, RegisterValues } from './validation-sh'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { PasswordStrength } from './password-strength'

const STEP_DEFINITIONS = [
  { label: 'Datos Iniciales', icon: User },
  { label: 'Preferencias', icon: Globe },
] as const

// Step 1: Personal data fields
const PASSWORD_FIELD_IDS = new Set(['password', 'confirmPassword'])

function buildPersonalFields(
  passwordToggle: React.ReactNode
): AuthFieldConfig[] {
  return [
    {
      id: 'name',
      label: 'Nombre',
      type: 'text',
      placeholder: 'Steven',
      icon: <User className='h-4 w-4' />,
      autoComplete: 'given-name',
    },
    {
      id: 'lastName',
      label: 'Apellido',
      type: 'text',
      placeholder: 'Spielberg',
      icon: <User className='h-4 w-4' />,
      autoComplete: 'family-name',
    },
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
      placeholder: 'Mínimo 8 caracteres',
      icon: <Lock className='h-4 w-4' />,
      autoComplete: 'new-password',
      suffix: passwordToggle,
    },
    {
      id: 'confirmPassword',
      label: 'Confirmar contraseña',
      type: 'password',
      placeholder: 'Repite tu contraseña',
      icon: <Lock className='h-4 w-4' />,
      autoComplete: 'new-password',
      suffix: passwordToggle,
    },
  ]
}

const COUNTRY_OPTIONS = [
  { value: 'CO', label: 'Colombia', flag: '🇨🇴' },
  { value: 'MX', label: 'México', flag: '🇲🇽' },
  { value: 'AR', label: 'Argentina', flag: '🇦🇷' },
  { value: 'ES', label: 'España', flag: '🇪🇸' },
  { value: 'CL', label: 'Chile', flag: '🇨🇱' },
  { value: 'PE', label: 'Perú', flag: '🇵🇪' },
  { value: 'US', label: 'Estados Unidos', flag: '🇺🇸' },
  { value: 'BR', label: 'Brasil', flag: '🇧🇷' },
]

const LANGUAGE_OPTIONS = [
  { value: 'es-ES', label: 'Español' },
  { value: 'en-US', label: 'English' },
  { value: 'pt-BR', label: 'Português' },
  { value: 'fr-FR', label: 'Français' },
]

function buildPreferenceFields(): {
  phone: AuthFieldConfig
  selects: AuthSelectFieldConfig[]
} {
  return {
    phone: {
      id: 'phone',
      label: 'Teléfono',
      type: 'tel',
      placeholder: '+573001234567',
      icon: <Phone className='h-4 w-4' />,
      autoComplete: 'tel',
    },
    selects: [
      {
        id: 'countrySelector',
        label: 'País',
        placeholder: 'Selecciona tu país',
        icon: <Globe className='h-4 w-4' />,
        options: COUNTRY_OPTIONS,
      },
      {
        id: 'language',
        label: 'Idioma preferido',
        placeholder: 'Selecciona tu idioma',
        icon: <Languages className='h-4 w-4' />,
        options: LANGUAGE_OPTIONS,
        defaultValue: 'es-ES',
      },
    ],
  }
}

// Main Form
export function RegisterForm() {
  const [currentStep, setCurrentStep] = useState(0)
  const [showPassword, setShowPassword] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    trigger,
    formState: { errors, isValid },
  } = useForm<RegisterValues>({
    resolver: zodResolver(registerSchema),
    mode: 'onChange',
    defaultValues: { language: 'es-ES', terms: true },
  })

  const passwordToggleNode = useMemo(
    () => (
      <PasswordToggle
        visible={showPassword}
        onToggle={() => setShowPassword((prev) => !prev)}
      />
    ),
    [showPassword]
  )

  const personalFields = useMemo(() => {
    const fields = buildPersonalFields(passwordToggleNode)
    return fields.map((f) =>
      PASSWORD_FIELD_IDS.has(f.id)
        ? { ...f, type: showPassword ? 'text' : 'password' }
        : f
    )
  }, [showPassword, passwordToggleNode])

  const handleNext = async () => {
    // Debo incluir 'confirmPassword' en la validación del disparador (trigger)
    const isStepValid = await trigger([
      'password',
      'confirmPassword',
      'email',
      'name',
      'lastName',
    ])

    if (isStepValid) {
      setCurrentStep((s) => s + 1)
    }
  }

  const isFirstStep = currentStep === 0

  // Obtener el valor en tiempo real dentro de tu componente RegisterForm
  const passwordValue = watch('password')

  const onSubmit = (data: RegisterValues) => {
    console.log('🚀 Payload listo para POST:', JSON.stringify(data, null, 2))
    // Aquí iría tu fetch('/api/register', { method: 'POST', body: JSON.stringify(data) })
  }

  return (
    <AuthLayout
      title='Registrándote'
      subtitle='Crea tu cuenta y accede a miles de películas y series'
      footerText='¿Ya tienes una cuenta?'
      footerLinkText='Inicia sesión'
      footerLinkHref='/auth/login'
    >
      <StepProgressBar
        steps={[...STEP_DEFINITIONS]}
        currentStep={currentStep}
      />

      <form className='flex flex-col gap-5' onSubmit={handleSubmit(onSubmit)}>
        {/* Step content */}
        {currentStep === 0 && (
          <div className='flex flex-col gap-4'>
            <div className='grid grid-cols-2 gap-3'>
              <AuthField
                field={personalFields[0]}
                {...register('name')}
                error={errors.name?.message}
              />
              <AuthField
                field={personalFields[1]}
                {...register('lastName')}
                error={errors.lastName?.message}
              />
            </div>
            <AuthField
              field={personalFields[2]}
              {...register('email')}
              error={errors.email?.message}
            />

            <AuthField
              field={personalFields[3]}
              {...register('password')}
              error={errors.password?.message}
            />

            {/* El componente de fuerza */}
            <PasswordStrength value={passwordValue} />

            <AuthField
              field={personalFields[4]}
              {...register('confirmPassword')}
              error={errors.confirmPassword?.message}
            />
          </div>
        )}

        {currentStep === 1 && (
          <div className='flex flex-col gap-4'>
            <AuthField
              field={buildPreferenceFields().phone}
              {...register('phone')}
              error={errors.phone?.message}
            />
            {/* Para Selects personalizados de Shadcn usa setValue y watch */}
            {buildPreferenceFields().selects.map((s) => (
              <AuthSelectField
                key={s.id}
                field={s}
                value={watch(s.id as 'countrySelector' | 'language')}
                onValueChange={(val) =>
                  setValue(s.id as 'countrySelector' | 'language', val, {
                    shouldValidate: true,
                  })
                }
              />
            ))}
            {/* Error del país si no se selecciona */}
            {errors.countrySelector && (
              <span className='text-destructive text-xs'>
                {errors.countrySelector.message}
              </span>
            )}
          </div>
        )}

        {/* Navigation buttons */}
        <div className='flex gap-3'>
          {currentStep > 0 && (
            <Button
              type='button'
              variant='outline'
              onClick={() => setCurrentStep((s) => s - 1)}
            >
              Anterior
            </Button>
          )}

          {currentStep === 0 ? (
            <Button type='button' onClick={handleNext} className='flex-1'>
              Siguiente <ArrowRight className='h-4 w-4' />
            </Button>
          ) : (
            <Button type='submit' className='flex-1' disabled={!isValid}>
              Crear mi Cuenta
            </Button>
          )}
        </div>
      </form>

      {isFirstStep && <SocialAuthButtons />}
    </AuthLayout>
  )
}
