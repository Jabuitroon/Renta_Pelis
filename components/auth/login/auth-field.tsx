"use client"

import type { ReactNode } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export interface AuthFieldConfig {
  id: string
  label: string
  type: string
  placeholder: string
  icon: ReactNode
  autoComplete?: string
  required?: boolean
}

interface AuthFieldProps {
  field: AuthFieldConfig
}

export function AuthField({ field }: AuthFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={field.id} className="text-foreground/80">
        {field.label}
      </Label>
      <div className="relative">
        <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
          {field.icon}
        </div>
        <Input
          id={field.id}
          name={field.id}
          type={field.type}
          placeholder={field.placeholder}
          autoComplete={field.autoComplete}
          required={field.required ?? true}
          className="h-11 bg-secondary/50 pl-10 text-foreground placeholder:text-muted-foreground/60 focus-visible:border-primary focus-visible:ring-primary/30"
        />
      </div>
    </div>
  )
}
