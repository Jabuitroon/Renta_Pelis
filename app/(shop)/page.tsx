import { montserratAlternates } from '@/config/fonts'
import { HeroStoreSection } from '@/components/home/hero-store-section'
import { SubscriptionSection } from '@/components/home/subscription-section'
import { FeaturesSection } from '@/components/home/features-section'

export default function Home() {
  return (
    <main className='bg-background min-h-screen'>
      <HeroStoreSection />
      <SubscriptionSection />
      <FeaturesSection />
    </main>
  )
}
