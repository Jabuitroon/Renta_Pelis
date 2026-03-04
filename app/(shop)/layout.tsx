import Footer from '@/components/ui/footer/footer'
import SideUserMenu from '@/components/ui/side-user-menu/side-user-menu'
import TopMenu from '@/components/ui/top-menu/TopMenu'
import { initialData } from '@/seed/seed'
import { Suspense } from 'react'
const categories = initialData.categories
export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      {/* Los componentes que utilicen el useParams deben ser envueltos en un Suspense */}
      <Suspense fallback={<div className='bg-accent h-12 w-full' />}>
        <TopMenu />
      </Suspense>
      <SideUserMenu categories={categories} />
      {children}
      <Footer />
    </>
  )
}
