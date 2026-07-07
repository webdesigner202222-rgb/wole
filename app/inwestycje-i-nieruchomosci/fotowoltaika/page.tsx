import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CategoryLandingTemplate, type CategoryLandingData } from "@/components/category-landing-template"
import { PersonIcon } from "@/components/why-us-icons"

export const metadata: Metadata = {
  title: "Fotowoltaika i magazyny energii | Broker Kredytowy",
  description:
    "Projekty fotowoltaiczne oraz dystrybucja i sprzedaż magazynów energii. Kompleksowe finansowanie inwestycji w odnawialne źródła energii.",
}

const data: CategoryLandingData = {
  breadcrumbs: [
    { label: "Strona główna", href: "/" },
    { label: "Inwestycje i nieruchomości", href: "/inwestycje-i-nieruchomosci" },
    { label: "Fotowoltaika", href: "/inwestycje-i-nieruchomosci/fotowoltaika" },
  ],
  category_label: "FOTOWOLTAIKA",
  headline: "Odnawialne źródła\nenergii",
  description:
    "Projekty fotowoltaiczne oraz dystrybucja magazynów energii. Pomagamy sfinansować inwestycje w zieloną energię.",
  products: [
    {
      icon_svg: "/images/icons/inwestycje-fotowoltaika.svg",
      name: "Projekty fotowoltaiczne i magazyny energii",
      desc: "Kompleksowe projekty instalacji fotowoltaicznych wraz z magazynami energii.",
      url: "/inwestycje-i-nieruchomosci/fotowoltaika/projekty-i-magazyny-energii",
    },
    {
      icon_svg: "/images/icons/inwestycje-storefront-zapas.svg",
      name: "Dystrybucja i sprzedaż magazynów energii",
      desc: "Dystrybucja oraz sprzedaż nowoczesnych magazynów energii.",
      url: "/inwestycje-i-nieruchomosci/fotowoltaika/dystrybucja-magazynow-energii",
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

export default function FotowoltaikaPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <CategoryLandingTemplate data={data} />
      <SiteFooter />
    </main>
  )
}
