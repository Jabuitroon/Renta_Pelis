import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '../ui/button'
import { QualitySelector } from '@/components/movie/quality-selector'
import { CounterRent } from '@/components/movie/counter-rent'

interface ModalRentSellProps {
  buttonSpan: string
  optionsSelector: Record<string, string>
  daysToRent?: boolean
}

export default function ModalRentSell({
  buttonSpan,
  optionsSelector,
}: ModalRentSellProps) {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button
            className='bg-gray-300 text-accent-foreground hover:text-white w-3xs h-12 text-xl'
            aria-label='Submit'
            variant='outline'
          >
            {buttonSpan}
          </Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-106.25'>
          <DialogHeader>
            <DialogTitle>Elige tus preferencias</DialogTitle>
          </DialogHeader>
          <div className='grid gap-4'>
            <QualitySelector
              availableQualities={optionsSelector}
              selectedQuality='720p'
            />
            {buttonSpan === 'Alquilar' && <CounterRent quantity={1} />}
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant='outline'>Cancel</Button>
            </DialogClose>
            <Button type='submit'>Confirmar preferencias</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
