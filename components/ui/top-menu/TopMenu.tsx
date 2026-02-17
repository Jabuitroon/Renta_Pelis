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
    <nav className='bg-accent flex h-12 w-full items-center justify-between px-10'>
      <div className='flex items-center gap-3'>
        <div className='bg-primary flex h-10 w-10 items-center justify-center rounded-lg'>
          <Film className='text-primary-foreground h-6 w-6' />
        </div>
        <Link href='/'>
          <span
            className={`${montserratAlternates.className} text-foreground text-xl font-bold tracking-wider antialiased`}
          >
            MoviRent
          </span>
        </Link>
      </div>
      <ul className='h-12 items-center gap-2 sm:flex'>
        <li className='hover:bg-periwinkle-400 flex h-12 items-center rounded-md p-7 transition-colors duration-300'>
          <Link href='/auth/login'>
            <span className='font-bold text-white antialiased'>Inicio</span>
          </Link>
        </li>
        <li className='hover:bg-periwinkle-400 flex h-12 items-center rounded-md transition-colors duration-300'>
          <Link href='/movies'>
            <span className='font-bold text-white antialiased'>Películas</span>
          </Link>
        </li>
        <li className='hover:bg-periwinkle-400 flex h-12 items-center rounded-md transition-colors duration-300'>
          <Link
            href='/'
            className='hover:bg-periwinkle-400 rounded-md transition-colors duration-300'
          >
            <span className='font-bold text-white antialiased'>
              Pelis Top 10
            </span>
          </Link>
        </li>
        <li className='hover:bg-periwinkle-400 flex h-12 items-center rounded-md transition-colors duration-300'>
          <Link
            href='/'
            className='hover:bg-periwinkle-400 rounded-md transition-colors duration-300'
          >
            <span className='font-bold text-white antialiased'>Series</span>
          </Link>
        </li>
      </ul>
      {/* Search, cart, profile, Menu, etc. */}

      <label
        htmlFor='search'
        className='text-heading sr-only mb-2.5 block text-sm font-medium'
      >
        Search
      </label>
      <div className='relative w-xs'>
        <div className='pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3'>
          <Link href='/search'>
            <IoSearchOutline className='h-5 w-5' />
          </Link>
        </div>
        <input
          type='search'
          id='search'
          className='bg-neutral-secondary-medium border-default-medium text-heading rounded-base focus:ring-brand focus:border-brand placeholder:text-body block w-full border p-3 ps-9 text-sm shadow-xs'
          placeholder='Buscar películas, series...'
          onChange={(e) => {
            handleSearch(e.target.value)
          }}
          defaultValue={searchParams.get('query')?.toString()}
        />
        <button
          type='button'
          className='bg-brand hover:bg-brand-strong focus:ring-brand-medium absolute end-1.5 bottom-1.5 box-border rounded border border-transparent px-3 py-1.5 text-xs leading-5 font-medium text-white shadow-xs focus:ring-4 focus:outline-none'
        >
          Search
        </button>
      </div>
      <ul className='flex items-center gap-4'>
        <li>
          <Button variant='secondary' size='icon' className='relative'>
            <IoPlay className='h-5 w-5' />
            <span className='bg-primary text-primary-foreground absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full text-[10px] font-bold'>
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
