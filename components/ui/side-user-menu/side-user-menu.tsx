'use client'
import { useUiStore } from '@/store/ui/ui-store'
import Link from 'next/link'
import { isDesktop } from '@/utils/isDesktop'

export default function SideUserMenu({
  categories,
}: Readonly<{ categories: string[] }>) {
  const isOpen = useUiStore((s) => s.isSideMenuOpen)
  const close = useUiStore((s) => s.closeSideMenu)

  const slugify = (text: string) =>
    text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\s+/g, '-')
  return (
    <aside
      onMouseLeave={() => {
        if (isDesktop()) close()
      }}
      className={`
       fixed top-12 right-8 w-1/2 z-40
        transition-transform duration-300
        ${isOpen ? 'translate-x-0' : 'translate-x-[100vw]'}
      `}
    >
      <div className=' h-full w-full absolute rounded-lg backdrop-blur-sm bg-secondary/30 z-40'></div>
      <div className='grid grid-cols-2 grid-rows-5 gap-2 p-8 z-50'>
        <h2 className='col-span-2 text-primary text-2xl z-50'>Géneros</h2>
        {categories.map((category) => {
          const slug = slugify(category)
          return (
            <Link
              href={`/category/${slug}`}
              key={slug}
              className='p-2 rounded-lg border-gray-300 dark:border-gray-700 hover:bg-white hover:text-black transition-colors flex justify-center items-center z-50'
            >
              {category}
            </Link>
          )
        })}
      </div>
    </aside>
  )
}
