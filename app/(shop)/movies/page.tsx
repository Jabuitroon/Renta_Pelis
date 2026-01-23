import HeroCarousel from "@/components/ui/hero/hero-carousel"

export default function MoviesPage() {
  return (
    <div className='flex flex-col w-full h-full overflow-y-auto scroll-smooth snap-y bg-accent-foreground font-sans dark:bg-gray-900'>
      <HeroCarousel />
      {/* Content section placeholder */}
      <section className="snap-start px-8 md:px-16 py-12 min-h-screen">
        <h2 className="text-white text-xl font-semibold mb-6">Lo más popular en MoviRent</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="aspect-video bg-white/5 rounded-md hover:ring-2 hover:ring-white/40 transition-all cursor-pointer"
            />
          ))}
        </div>
      </section>
    </div>
  )
}
