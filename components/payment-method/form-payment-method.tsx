'use client'

import { Controller, useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
// import { toast } from "sonner"

import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import CountrySelectByContinent from './selector-country'

const onlyLetters = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/

const formSchema = z.object({
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

export default function PaymentCheckouttForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      lastname: '',
      address: '',
      country: '',
      phone: '',
    },
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data)

    // toast("You submitted the following values:", {
    //   description: (
    //     <pre className="bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4">
    //       <code>{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    //   position: "bottom-right",
    //   classNames: {
    //     content: "flex flex-col gap-2",
    //   },
    //   style: {
    //     "--border-radius": "calc(var(--radius)  + 4px)",
    //   } as React.CSSProperties,
    // })
  }

  return (
    <Card className='sm:max-w-4xl'>
      <CardHeader>
        <CardTitle>Comprando...</CardTitle>
        <CardDescription>Confirma tus datos y método de pago.</CardDescription>
      </CardHeader>
      
      <CardContent>
        <form
          id='form-payment-checkout'
          onSubmit={form.handleSubmit(onSubmit)}
          className='flex gap-6'
        >
          <FieldGroup>
            <FieldSet>
              <Controller
                name='name'
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor='form-payment-checkout-name'>
                      Nombre
                    </FieldLabel>
                    <Input
                      {...field}
                      id='form-payment-checkout-name'
                      aria-invalid={fieldState.invalid}
                      placeholder='Ingresa tu nombre'
                      autoComplete='off'
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name='lastname'
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor='form-payment-checkout-lastname'>
                      Apellido
                    </FieldLabel>
                    <Input
                      {...field}
                      id='form-payment-checkout-lastname'
                      aria-invalid={fieldState.invalid}
                      placeholder='Ingresa tu apellido'
                      autoComplete='off'
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name='address'
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor='form-payment-checkout-address'>
                      Dirección
                    </FieldLabel>
                    <Input
                      {...field}
                      id='form-payment-checkout-address'
                      aria-invalid={fieldState.invalid}
                      placeholder='Ingresa tu dirección'
                      autoComplete='off'
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name='country'
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>País</FieldLabel>
                    <CountrySelectByContinent
                      value={field.value}
                      onChange={field.onChange}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name='phone'
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor='form-payment-checkout-phone'>
                      Teléfono
                    </FieldLabel>
                    <Input
                      {...field}
                      id='form-payment-checkout-phone'
                      placeholder='Teléfono'
                      autoComplete='off'
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </FieldSet>
          
          </FieldGroup>

          <FieldGroup>
            <FieldSet>
              <FieldLegend>Payment Method</FieldLegend>
              <FieldDescription>
                All transactions are secure and encrypted
              </FieldDescription>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor='checkout-7j9-card-name-43j'>
                    Name on Card
                  </FieldLabel>
                  <Input
                    id='checkout-7j9-card-name-43j'
                    placeholder='Evil Rabbit'
                    required
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor='checkout-7j9-card-number-uw1'>
                    Card Number
                  </FieldLabel>
                  <Input
                    id='checkout-7j9-card-number-uw1'
                    placeholder='1234 5678 9012 3456'
                    required
                  />
                  <FieldDescription>
                    Enter your 16-digit card number
                  </FieldDescription>
                </Field>
                <div className='grid grid-cols-3 gap-4'>
                  <Field>
                    <FieldLabel htmlFor='checkout-exp-month-ts6'>
                      Month
                    </FieldLabel>
                    <Select defaultValue=''>
                      <SelectTrigger id='checkout-exp-month-ts6'>
                        <SelectValue placeholder='MM' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value='01'>01</SelectItem>
                          <SelectItem value='02'>02</SelectItem>
                          <SelectItem value='03'>03</SelectItem>
                          <SelectItem value='04'>04</SelectItem>
                          <SelectItem value='05'>05</SelectItem>
                          <SelectItem value='06'>06</SelectItem>
                          <SelectItem value='07'>07</SelectItem>
                          <SelectItem value='08'>08</SelectItem>
                          <SelectItem value='09'>09</SelectItem>
                          <SelectItem value='10'>10</SelectItem>
                          <SelectItem value='11'>11</SelectItem>
                          <SelectItem value='12'>12</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </Field>
                  <Field>
                    <FieldLabel htmlFor='checkout-7j9-exp-year-f59'>
                      Year
                    </FieldLabel>
                    <Select defaultValue=''>
                      <SelectTrigger id='checkout-7j9-exp-year-f59'>
                        <SelectValue placeholder='YYYY' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value='2024'>2024</SelectItem>
                          <SelectItem value='2025'>2025</SelectItem>
                          <SelectItem value='2026'>2026</SelectItem>
                          <SelectItem value='2027'>2027</SelectItem>
                          <SelectItem value='2028'>2028</SelectItem>
                          <SelectItem value='2029'>2029</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </Field>
                  <Field>
                    <FieldLabel htmlFor='checkout-7j9-cvv'>CVV</FieldLabel>
                    <Input id='checkout-7j9-cvv' placeholder='123' required />
                  </Field>
                </div>
              </FieldGroup>
            </FieldSet>
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter >
        <Field orientation='horizontal'>
          <Button type='button' variant='outline' onClick={() => form.reset()}>
            Reset
          </Button>
          <Button type='submit' form='form-payment-checkout'>
            Submit
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}
