import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CategoryLandingTemplate, type CategoryLandingData } from "@/components/category-landing-template"
import { PersonIcon } from "@/components/why-us-icons"

export const metadata: Metadata = {
  title: "Inwestycje i nieruchomości | Broker Kredytowy",
  description:
    "Finansujemy rozwój firm i inwestycje w nieruchomości. Fotowoltaika, domki modułowe, obiekty komercyjne, projektowanie i biznesplany.",
}

const data: CategoryLandingData = {
  breadcrumbs: [
    { label: "Strona główna", href: "/" },
    { label: "Inwestycje i nieruchomości", href: "/inwestycje-i-nieruchomosci" },
  ],
  category_label: "INWESTYCJE I NIERUCHOMOŚCI",
  headline: "Rozwijaj swój biznes\ni inwestycje",
  description:
    "Finansujemy rozwój firm i inwestycje w nieruchomości. Pomagamy znaleźć najlepsze rozwiązania dopasowane do Twoich celów.",
  products: [
    {
      icon_svg: "/images/icons/inwestycje-fotowoltaika.svg",
      name: "Fotowoltaika",
      desc: "Projekty fotowoltaiczne oraz dystrybucja magazynów energii.",
      url: "/inwestycje-i-nieruchomosci/fotowoltaika",
    },
    {
      icon_svg: "/images/icons/inwestycje-domki-pod-klucz.svg",
      name: "Domki modułowe",
      desc: "Domy modułowe w stanie deweloperskim oraz pod klucz.",
      url: "/inwestycje-i-nieruchomosci/domki-modulowe",
    },
    {
      icon_svg: "/images/icons/inwestycje-nieruchomosci-komercyjne.svg",
      name: "Nieruchomości komercyjne",
      desc: "Hale, biurowce, centra handlowe i hotele na terenie całej Polski.",
      url: "/inwestycje-i-nieruchomosci/sprzedaz-nieruchomosci-komercyjnych",
    },
    {
      icon_svg: "/images/icons/inwestycje-biznesplany.svg",
      name: "Biznesplany",
      desc: "Profesjonalne biznesplany dla Twojego przedsięwzięcia.",
      url: "/inwestycje-i-nieruchomosci/biznesplany",
    },
  ],
  why_us_heading: "Dlaczego warto skorzystać z naszej oferty?",
  why_us_points: [
    { icon_svg: "/images/icons/why-us-mapa-polski.svg", label: "Zasięg ogólnopolski" },
    { icon_svg: "/images/icons/why-us-kompleksowa-obsluga.svg", label: "Kompleksowa obsługa" },
    { icon_node: <PersonIcon className="h-10 w-10" />, label: "Doświadczeni partnerzy" },
    { icon_svg: "/images/icons/why-us-elastyczne-rozwiazania.svg", label: "Elastyczne rozwiązania" },
  ],
  cta_label: "POROZMAWIAJMY O TWOICH POTRZEBACH",
  cta_headline: "Skontaktuj się z nami",
  cta_desc: "Dobierzemy najlepsze rozwiązanie finansowe dopasowane do Ciebie.",
  cta_phone: "+48 723 609 936",
}

export default function InwestycjeNieruchomosciPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <CategoryLandingTemplate data={data} />
      <SiteFooter />
    </main>
  )
}
