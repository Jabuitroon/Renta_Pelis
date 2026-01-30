import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { QualityOption } from '@/interfaces/movie'

interface Props {
  availableQualities: Record<QualityOption, string>
  value?: QualityOption
  onChange: (value: QualityOption) => void
  placeholder?: string
  disabled?: boolean
}
export function QualitySelector({
  availableQualities,
  value,
  onChange,
  placeholder = 'Alquilar desde COP 9,900',
  disabled = false,
}: Props) {
  return (
    <Select value={value} onValueChange={onChange} disabled={disabled}>
      <SelectTrigger className='w-full max-w-48'>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          <SelectLabel>Qualities</SelectLabel>

          {Object.entries(availableQualities).map(([quality, price]) => (
            <SelectItem key={quality} value={quality}>
              {quality} por {price}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
