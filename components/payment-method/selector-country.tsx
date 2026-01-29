'use-client'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type CountrySelectProps = {
  value?: string
  onChange: (value: string) => void
}


export default function CountrySelectByContinent({
  value,
  onChange,
}: CountrySelectProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full max-w-64">
        <SelectValue placeholder="Selecciona un país" />
      </SelectTrigger>

      <SelectContent>
        {/* Norteamérica */}
        <SelectGroup>
          <SelectLabel>Norteamérica</SelectLabel>
          <SelectItem value="CA">Canadá</SelectItem>
          <SelectItem value="US">Estados Unidos</SelectItem>
          <SelectItem value="MX">México</SelectItem>
        </SelectGroup>

        {/* Centroamérica y Caribe */}
        <SelectGroup>
          <SelectLabel>Centroamérica y Caribe</SelectLabel>
          <SelectItem value="CR">Costa Rica</SelectItem>
          <SelectItem value="PA">Panamá</SelectItem>
          <SelectItem value="CU">Cuba</SelectItem>
          <SelectItem value="DO">República Dominicana</SelectItem>
        </SelectGroup>

        {/* Sudamérica */}
        <SelectGroup>
          <SelectLabel>Sudamérica</SelectLabel>
          <SelectItem value="AR">Argentina</SelectItem>
          <SelectItem value="BO">Bolivia</SelectItem>
          <SelectItem value="BR">Brasil</SelectItem>
          <SelectItem value="CL">Chile</SelectItem>
          <SelectItem value="CO">Colombia</SelectItem>
          <SelectItem value="PE">Perú</SelectItem>
        </SelectGroup>

        {/* Europa */}
        <SelectGroup>
          <SelectLabel>Europa</SelectLabel>
          <SelectItem value="ES">España</SelectItem>
          <SelectItem value="FR">Francia</SelectItem>
          <SelectItem value="DE">Alemania</SelectItem>
          <SelectItem value="IT">Italia</SelectItem>
          <SelectItem value="UK">Reino Unido</SelectItem>
        </SelectGroup>

        {/* África */}
        <SelectGroup>
          <SelectLabel>África</SelectLabel>
          <SelectItem value="ZA">Sudáfrica</SelectItem>
          <SelectItem value="NG">Nigeria</SelectItem>
          <SelectItem value="EG">Egipto</SelectItem>
          <SelectItem value="MA">Marruecos</SelectItem>
        </SelectGroup>

        {/* Asia */}
        <SelectGroup>
          <SelectLabel>Asia</SelectLabel>
          <SelectItem value="CN">China</SelectItem>
          <SelectItem value="IN">India</SelectItem>
          <SelectItem value="JP">Japón</SelectItem>
          <SelectItem value="KR">Corea del Sur</SelectItem>
          <SelectItem value="ID">Indonesia</SelectItem>
        </SelectGroup>

        {/* Oceanía */}
        <SelectGroup>
          <SelectLabel>Oceanía</SelectLabel>
          <SelectItem value="AU">Australia</SelectItem>
          <SelectItem value="NZ">Nueva Zelanda</SelectItem>
          <SelectItem value="FJ">Fiyi</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
