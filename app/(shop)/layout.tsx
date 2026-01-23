import TopMenu from '@/components/ui/top-menu/TopMenu'

export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className='flex flex-col h-screen items-center justify-center bg-red-500 font-sans dark:bg-black'>
      <TopMenu />
      {children}
    </main>
  )
}
