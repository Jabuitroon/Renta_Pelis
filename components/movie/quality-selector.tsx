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
  selectedQuality?: QualityOption
}
export function QualitySelector({
  availableQualities,
  selectedQuality,
}: Props) {
  return (
    <Select>
      <SelectTrigger className='w-full max-w-48'>
        <SelectValue placeholder='Alquilar desde COP 9,900' />
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
