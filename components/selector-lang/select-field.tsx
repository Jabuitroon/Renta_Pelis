"use client"

import type { ReactNode } from "react"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export interface SelectOption {
  value: string
  label: string
  flag?: string
}

export interface AuthSelectFieldConfig {
  id: string
  label: string
  placeholder: string
  icon: ReactNode
  options: SelectOption[]
  defaultValue?: string
}

interface AuthSelectFieldProps {
  field: AuthSelectFieldConfig
  value?: string
  onValueChange?: (value: string) => void
}

export function AuthSelectField({ field, value, onValueChange }: AuthSelectFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={field.id} className="text-foreground/80">
        {field.label}
      </Label>
      <div className="relative">
        <div className="pointer-events-none absolute left-3 top-1/2 z-10 -translate-y-1/2 text-muted-foreground">
          {field.icon}
        </div>
        <Select value={value} onValueChange={onValueChange} defaultValue={field.defaultValue}>
          <SelectTrigger
            id={field.id}
            className="h-11 w-full bg-secondary/50 pl-10 text-foreground focus-visible:border-primary focus-visible:ring-primary/30"
          >
            <SelectValue placeholder={field.placeholder} />
          </SelectTrigger>
          <SelectContent className="bg-card border-border">
            {field.options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.flag ? `${option.flag} ${option.label}` : option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
