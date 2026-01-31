'use client'
import { useCallback } from 'react'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'
import Link from 'next/link'
import { montserratAlternates } from '@/config/fonts'
import { IoPlay, IoSearchOutline } from 'react-icons/io5'
import { CgMenuGridO } from 'react-icons/cg'
import { isDesktop } from '@/utils/isDesktop'
import { useUiStore } from '@/store/ui/ui-store'
import { Film } from 'lucide-react'
import { Button } from '../button'

export default function TopMenu() {
  // Controladores de estado para el menú lateral
  const open = useUiStore((s) => s.openSideMenu)
  const toggle = useUiStore((s) => s.toggleSideMenu)

  const handleEnter = useCallback(() => {
    if (isDesktop()) open()
  }, [open])

  const handleClick = useCallback(() => {
    if (!isDesktop()) toggle()
  }, [toggle])

  // Búsqueda
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', '1')
    if (term) {
      params.set('query', term)
    } else {
      params.delete('query')
    }
    replace(`${pathname}?${params.toString()}`)
  }, 300)
  return (
    <nav className='flex h-12 w-full px-10 justify-between items-center bg-accent'>
      <div className='flex items-center gap-3'>
        <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-primary'>
          <Film className='h-6 w-6 text-primary-foreground' />
        </div>
        <Link href='/'>
          <span
            className={`${montserratAlternates.className} font-bold antialiased text-xl tracking-wider text-foreground`}
          >
            MoviRent
          </span>
        </Link>
      </div>
      <ul className=' sm:flex h-12 gap-2 items-center'>
        <li className='flex items-center h-12 rounded-md hover:bg-periwinkle-400 transition-colors duration-300 p-7'>
          <Link href='/auth/login'>
            <span className='text-white font-bold antialiased'>Inicio</span>
          </Link>
        </li>
        <li className='h-12 flex items-center rounded-md hover:bg-periwinkle-400 transition-colors duration-300'>
          <Link href='/movies'>
            <span className='text-white font-bold antialiased'>Películas</span>
          </Link>
        </li>
        <li className='h-12 flex items-center rounded-md hover:bg-periwinkle-400 transition-colors duration-300'>
          <Link
            href='/'
            className='rounded-md hover:bg-periwinkle-400 transition-colors duration-300'
          >
            <span className='text-white font-bold antialiased'>
              Pelis Top 10
            </span>
          </Link>
        </li>
        <li className='h-12 flex items-center rounded-md hover:bg-periwinkle-400 transition-colors duration-300'>
          <Link
            href='/'
            className='rounded-md hover:bg-periwinkle-400 transition-colors duration-300'
          >
            <span className='text-white font-bold antialiased'>Series</span>
          </Link>
        </li>
      </ul>
      {/* Search, cart, profile, Menu, etc. */}

      <label
        htmlFor='search'
        className='block mb-2.5 text-sm font-medium text-heading sr-only '
      >
        Search
      </label>
      <div className='relative w-xs'>
        <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
          <Link href='/search'>
            <IoSearchOutline className='h-5 w-5 ' />
          </Link>
        </div>
        <input
          type='search'
          id='search'
          className='block w-full p-3 ps-9 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body'
          placeholder='Buscar películas, series...'
          onChange={(e) => {
            handleSearch(e.target.value)
          }}
          defaultValue={searchParams.get('query')?.toString()}
        />
        <button
          type='button'
          className='absolute end-1.5 bottom-1.5 text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded text-xs px-3 py-1.5 focus:outline-none'
        >
          Search
        </button>
      </div>
      <ul className='flex items-center gap-4'>
        <li>
          <Button variant='secondary' size='icon' className='relative'>
            <IoPlay className='h-5 w-5' />
            <span className='absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground'>
              3
            </span>
          </Button>
        </li>
        <li
          onMouseEnter={handleEnter}
          onClick={handleClick}
          className='cursor-pointer'
        >
          <CgMenuGridO className='h-6 w-6 text-white' />
        </li>
      </ul>
    </nav>
  )
}
