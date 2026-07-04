import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
    </main>
  )
}
