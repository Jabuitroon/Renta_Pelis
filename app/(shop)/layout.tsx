import SideUserMenu from '@/components/ui/side-user-menu/side-user-menu'
import TopMenu from '@/components/ui/top-menu/TopMenu'
import { initialData } from '@/seed/seed'
const categories = initialData.categories
export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className='flex flex-col h-screen items-center justify-center bg-red-500 font-sans dark:bg-black'>
      <TopMenu />
      <SideUserMenu categories={categories} />
      {children}
    </main>
  )
}
