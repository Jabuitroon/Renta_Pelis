"use client"

import { Mail, Lock, User, Eye, EyeOff } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { AuthLayout } from "@/components/auth/auth-layout"
import { AuthField, type AuthFieldConfig } from "@/components/auth/auth-field"
import { SocialAuthButtons } from "@/components/auth/social-auth-buttons"

const registerFields: AuthFieldConfig[] = [
  {
    id: "name",
    label: "Nombre completo",
    type: "text",
    placeholder: "Steven Spielberg",
    icon: <User className="h-4 w-4" />,
    autoComplete: "name",
  },
  {
    id: "email",
    label: "Correo electrónico",
    type: "email",
    placeholder: "director@cinestudio.com",
    icon: <Mail className="h-4 w-4" />,
    autoComplete: "email",
  },
  {
    id: "password",
    label: "Contraseña",
    type: "password",
    placeholder: "Mínimo 8 caracteres",
    icon: <Lock className="h-4 w-4" />,
    autoComplete: "new-password",
  },
  {
    id: "confirmPassword",
    label: "Confirmar contraseña",
    type: "password",
    placeholder: "Repite tu contraseña",
    icon: <Lock className="h-4 w-4" />,
    autoComplete: "new-password",
  },
]

const PASSWORD_FIELD_IDS = new Set(["password", "confirmPassword"])

function PasswordToggle({
  visible,
  onToggle,
}: {
  visible: boolean
  onToggle: () => void
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
      aria-label={visible ? "Ocultar contraseña" : "Mostrar contraseña"}
    >
      {visible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
    </button>
  )
}

export function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false)

  const getFieldWithPasswordToggle = (field: AuthFieldConfig): AuthFieldConfig => {
    if (PASSWORD_FIELD_IDS.has(field.id)) {
      return { ...field, type: showPassword ? "text" : "password" }
    }
    return field
  }

  return (
    <AuthLayout
      title="Únete al Elenco"
      subtitle="Crea tu cuenta y accede a miles de películas y series en renta"
      footerText="¿Ya tienes una cuenta?"
      footerLinkText="Inicia sesión"
      footerLinkHref="/login"
    >
      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => e.preventDefault()}
      >
        {registerFields.map((field) => (
          <div key={field.id} className="relative">
            <AuthField field={getFieldWithPasswordToggle(field)} />
            {PASSWORD_FIELD_IDS.has(field.id) && (
              <div className="absolute right-0 top-0">
                <PasswordToggle
                  visible={showPassword}
                  onToggle={() => setShowPassword(!showPassword)}
                />
              </div>
            )}
          </div>
        ))}

        {/* Password strength hint */}
        <div className="flex gap-1.5">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className={`h-1 flex-1 rounded-full ${i === 0 ? "bg-primary/60" : "bg-secondary"}`}
            />
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          Usa al menos 8 caracteres con letras, números y símbolos
        </p>

        {/* Terms */}
        <div className="flex items-start gap-2">
          <Checkbox id="terms" className="mt-0.5" />
          <Label
            htmlFor="terms"
            className="text-sm font-normal leading-relaxed text-muted-foreground"
          >
            Acepto los{" "}
            <Link
              href="#"
              className="text-primary underline-offset-4 hover:underline"
            >
              Términos de Servicio
            </Link>{" "}
            y la{" "}
            <Link
              href="#"
              className="text-primary underline-offset-4 hover:underline"
            >
              Política de Privacidad
            </Link>
          </Label>
        </div>

        {/* Submit */}
        <Button
          type="submit"
          className="mt-1 h-11 w-full bg-primary font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-md hover:shadow-primary/25"
        >
          Crear mi Cuenta
        </Button>
      </form>

      <SocialAuthButtons />
    </AuthLayout>
  )
}
