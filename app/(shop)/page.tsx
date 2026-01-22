import { montserratAlternates } from '@/config/fonts'

export default function Home() {
  return (
    <main className='flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start'>
      <h1 className='text-4xl font-bold text-periwinkle-600 dark:text-periwinkle-400'>
        Renta de Pelis
      </h1>
      <h2
        className={`${montserratAlternates.className} text-4xl font-bold text-periwinkle-600 dark:text-periwinkle-400`}
      >
        Encuentra tu película favorita
      </h2>
    </main>
  )
}
