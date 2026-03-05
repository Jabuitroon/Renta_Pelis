import { montserratAlternates } from '@/config/fonts'
import { HeroStoreSection } from "@/components/home/hero-store-section"
import { SubscriptionSection } from "@/components/home/subscription-section"
import { FeaturesSection } from "@/components/home/features-section"

// export default function Home() {
//   return (
//     <main className='flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start'>
//       <h1 className='text-4xl font-bold text-periwinkle-600 dark:text-periwinkle-400'>
//         Renta de Pelis
//       </h1>
//       <h2
//         className={`${montserratAlternates.className} text-4xl font-bold text-periwinkle-600 dark:text-periwinkle-400`}
//       >
//         Encuentra tu película favorita
//       </h2>
//     </main>
//   )
// }

export default function Home() {
  return (
    <main className='bg-background min-h-screen'>
      <HeroStoreSection />
      <SubscriptionSection />
      <FeaturesSection />
    </main>
  )
}
