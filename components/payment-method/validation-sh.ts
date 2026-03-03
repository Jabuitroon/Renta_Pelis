import * as z from 'zod'

const onlyLetters = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/

export const paymentMethodSchema = z.object({
  name: z
    .string()
    .min(5, 'Ingresa un nombre mayor a 5 caracteres.')
    .max(32, 'Ingresa un nombre menor a 32 caracteres.')
    .regex(onlyLetters, 'El nombre no puede contener números ni símbolos'),
  lastname: z
    .string()
    .min(5, 'Ingresa un apellido mayor a 5 caracteres.')
    .max(32, 'Ingresa un apellido mayor a 5 caracteres.'),
  address: z
    .string()
    .min(5, 'Address must be at least 20 characters.')
    .max(100, 'Address must be at most 100 characters.'),
  country: z.string().min(2, 'Selecciona un país'),
  phone: z
    .string()
    .min(7, 'El teléfono es muy corto')
    .max(15, 'El teléfono es muy largo')
    .regex(/^\d+$/, 'Solo números'),
})

export type PaymentMethodValues = z.infer<typeof paymentMethodSchema>
