import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { StatsBar } from "@/components/stats-bar"
import { OfferSection } from "@/components/offer-section"
import { WhyUsSection } from "@/components/why-us-section"
import { AboutSection } from "@/components/about-section"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <StatsBar />
      <OfferSection />
      <WhyUsSection />
      <AboutSection />
    </main>
  )
}
