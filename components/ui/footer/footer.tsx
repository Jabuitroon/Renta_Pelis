import { Film } from 'lucide-react'

export default function Footer() {
  return (
    <footer className='border-border bg-card mt-12 border-t py-12'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col items-center justify-between gap-6 md:flex-row'>
          <div className='flex items-center gap-3'>
            <div className='bg-primary flex h-8 w-8 items-center justify-center rounded'>
              <Film className='text-primary-foreground h-4 w-4' />
            </div>
            <span className='text-foreground font-bold tracking-wider'>
              MoviRent
            </span>
          </div>
          <div className='text-muted-foreground flex items-center gap-6 text-sm'>
            <a href='#' className='hover:text-foreground transition-colors'>
              Terminos
            </a>
            <a href='#' className='hover:text-foreground transition-colors'>
              Privacidad
            </a>
            <a href='#' className='hover:text-foreground transition-colors'>
              Contacto
            </a>
          </div>
          <p className='text-muted-foreground text-sm'>
            2026 CineStudio. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
