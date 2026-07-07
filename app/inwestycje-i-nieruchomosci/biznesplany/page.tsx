import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SingleFeatureShowcaseTemplate, type SingleFeatureData } from "@/components/single-feature-showcase-template"

export const metadata: Metadata = {
  title: "Tworzenie biznesplanów | Broker Kredytowy",
  description:
    "Profesjonalne biznesplany - kompleksowe dokumenty strategiczne opisujące wizję, cele i strategię Twojego przedsięwzięcia biznesowego.",
}

const data: SingleFeatureData = {
  breadcrumbs: [
    { label: "Strona główna", href: "/" },
    { label: "Inwestycje i nieruchomości", href: "/inwestycje-i-nieruchomosci" },
    { label: "Tworzenie biznesplanów", href: "/inwestycje-i-nieruchomosci/biznesplany" },
  ],
  category_label: "INWESTYCJE I NIERUCHOMOŚCI",
  headline: "Tworzenie biznesplanów",
  intro: "Profesjonalny biznesplan to fundament każdego udanego przedsięwzięcia.",
  cardHeading: "Tworzenie biznesplanów",
  body: "Biznesplan to kompleksowy dokument strategiczny, który służy do opisania wizji, celów i strategii twojego przedsięwzięcia biznesowego. Jest to szczegółowy plan działania, który pomaga zrozumieć, jak zamierzacie Państwo prowadzić swoją firmę i osiągać sukces. Projekt pełni wiele ważnych funkcji i jest nieodzownym narzędziem dla każdej firmy, niezależnie od jej wielkości. Możemy stworzyć go właśnie dla Państwa.",
  icon: "document",
  imageAlt: "Biznesplan - dokumenty i analizy",
}

export default function BiznesplanyPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <SingleFeatureShowcaseTemplate data={data} />
      <SiteFooter />
    </main>
  )
}
