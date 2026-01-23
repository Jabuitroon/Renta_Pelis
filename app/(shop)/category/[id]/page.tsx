import { notFound } from 'next/navigation'

interface Props {
  params: { id: string }
}

export default async function CategoryPage({ params }: Props) {
  const { id } = await params
  if (id === 'kids') {
    notFound()
  }
  return (
    <div className='flex min-h-full flex-col items-center justify-center bg-blue-500 font-sans dark:bg-gray-900'>
      <h1 className='mb-4 text-4xl font-bold text-white'>Category</h1>
      <p className='text-lg text-white'>Welcome to the category for id {id}.</p>
    </div>
  )
}
