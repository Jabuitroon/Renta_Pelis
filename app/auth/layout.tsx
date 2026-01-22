export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className='flex min-h-screen items-center justify-center bg-gray-500 font-sans dark:bg-black'>
      {children}
    </main>
  )
}
