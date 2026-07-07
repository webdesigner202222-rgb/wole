import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SingleFeatureShowcaseTemplate, type SingleFeatureData } from "@/components/single-feature-showcase-template"

export const metadata: Metadata = {
  title: "Sprzedaż nieruchomości komercyjnych i deweloperskich | Broker Kredytowy",
  description:
    "Sprzedaż nieruchomości komercyjnych: hale magazynowe, produkcyjne i montażowe, biurowce, działki deweloperskie i działki pod logistykę.",
}

const data: SingleFeatureData = {
  breadcrumbs: [
    { label: "Strona główna", href: "/" },
    { label: "Inwestycje i nieruchomości", href: "/inwestycje-i-nieruchomosci" },
    {
      label: "Sprzedaż nieruchomości komercyjnych",
      href: "/inwestycje-i-nieruchomosci/sprzedaz-nieruchomosci-komercyjnych",
    },
  ],
  category_label: "INWESTYCJE I NIERUCHOMOŚCI",
  headline: "Sprzedaż nieruchomości komercyjnych i deweloperskich",
  intro: "Kompleksowa obsługa rynku nieruchomości komercyjnych na terenie całej Polski.",
  cardHeading: "Sprzedaż nieruchomości komercyjnych i deweloperskich",
  body: "Dostarczamy kompleksowe rozwiązania najwyższej jakości na rynku nieruchomości. Specjalizujemy się w sprzedaży nieruchomości komercyjnych, takich jak: hale magazynowe, produkcyjne oraz montażowe, biurowce, działki deweloperskie i działki pod logistykę.",
  icon: "building",
  imageAlt: "Nieruchomości komercyjne - hale i biurowce",
}

export default function SprzedazNieruchomosciKomercyjnychPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <SingleFeatureShowcaseTemplate data={data} />
      <SiteFooter />
    </main>
  )
}
