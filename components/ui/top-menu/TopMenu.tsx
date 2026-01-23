import { montserratAlternates } from '@/config/fonts'
import { IoCartOutline, IoSearchOutline } from 'react-icons/io5'
import Link from 'next/link'

export const TopMenu = () => {
  return (
    <nav className='h-12 w-full flex px-5 justify-between items-center bg-periwinkle-700'>
      <div>
        <Link href='/'>
          <span
            className={`${montserratAlternates.className} text-white font-bold antialiased`}
          >
            MoviRent
          </span>
        </Link>
      </div>
      <ul className='hidden sm:flex h-12 gap-2 items-center'>
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
      <ul className='flex items-center'>
        <li>
          <Link href='/search'>
            <IoSearchOutline className='h-7 w-7 text-white text-2xl hover:text-periwinkle-800 hover:bg-periwinkle-200 duration-200 transition-colors rounded-full p-2' />
          </Link>
        </li>
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
      </ul>
    </nav>
  )
}
