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
      className={`fixed top-12 right-8 z-40 w-1/2 transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-[100vw]'} `}
    >
      <div className='bg-secondary/30 absolute z-40 h-full w-full rounded-lg backdrop-blur-sm'></div>
      <div className='z-50 grid grid-cols-2 grid-rows-5 gap-2 p-8'>
        <h2 className='text-primary z-50 col-span-2 text-2xl'>Géneros</h2>
        {categories.map((category) => {
          const slug = slugify(category)
          return (
            <Link
              href={`/category/${slug}`}
              key={slug}
              className='z-50 flex items-center justify-center rounded-lg border-gray-300 p-2 transition-colors hover:bg-white hover:text-black dark:border-gray-700'
            >
              {category}
            </Link>
          )
        })}
      </div>
    </aside>
  )
}
