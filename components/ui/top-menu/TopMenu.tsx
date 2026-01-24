'use client'
import { useCallback } from 'react'
import Link from 'next/link'
import { montserratAlternates } from '@/config/fonts'
import { IoCartOutline, IoSearchOutline } from 'react-icons/io5'
import { CgMenuGridO } from 'react-icons/cg'
import { isDesktop } from '@/utils/isDesktop'
import { useUiStore } from '@/store/ui/ui-store'
export default function TopMenu() {
  const open = useUiStore((s) => s.openSideMenu)
  const toggle = useUiStore((s) => s.toggleSideMenu)

  const handleEnter = useCallback(() => {
    if (isDesktop()) open()
  }, [open])

  const handleClick = useCallback(() => {
    if (!isDesktop()) toggle()
  }, [toggle])
  return (
    <nav className='flex h-12 w-full px-10 justify-between items-center bg-accent'>
      <div>
        <Link href='/'>
          <span
            className={`${montserratAlternates.className} text-white font-bold antialiased`}
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
      <form className='max-w-md mx-auto'>
        <label
          htmlFor='search'
          className='block mb-2.5 text-sm font-medium text-heading sr-only '
        >
          Search
        </label>
        <div className='relative'>
          <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
            <Link href='/search'>
              <IoSearchOutline className='h-5 w-5 ' />
            </Link>
          </div>
          <input
            type='search'
            id='search'
            className='block w-full p-3 ps-9 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body'
            placeholder='Search'
            required
          />
          <button
            type='button'
            className='absolute end-1.5 bottom-1.5 text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded text-xs px-3 py-1.5 focus:outline-none'
          >
            Search
          </button>
        </div>
      </form>
      <ul className='flex items-center'>
        <li>
          <Link href='/cart'>
            <div className='relative'>
              <span className='h-4 w-4 absolute text-s rounded-full px-12 font-bold -top-2 -right-2 bg-periwinkle-200 text-black'>
                3
              </span>
              <IoCartOutline className='h-7 w-7 text-white text-2xl hover:text-periwinkle-800 hover:bg-periwinkle-200 duration-200 transition-colors rounded-full p-2' />
            </div>
          </Link>
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
