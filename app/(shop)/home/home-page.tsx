import { HeroStoreSection } from "@/components/home/hero-store-section"
import { SubscriptionSection } from "@/components/home/subscription-section"
import { FeaturesSection } from "@/components/home/features-section"

export function HomePage() {
  return (
      <main className="min-h-screen bg-background">
        <HeroStoreSection />
        <SubscriptionSection />
        <FeaturesSection />
      </main>
  )
}
