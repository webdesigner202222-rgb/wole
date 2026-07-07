import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { TabbedShowcaseTemplate, type TabbedShowcaseData } from "@/components/tabbed-showcase-template"

export const metadata: Metadata = {
  title: "Fotowoltaika i magazyny energii | Broker Kredytowy",
  description:
    "Kompleksowe rozwiązania w zakresie energii odnawialnej - projekty instalacji fotowoltaicznych oraz dystrybucja i sprzedaż magazynów energii.",
}

const data: TabbedShowcaseData = {
  breadcrumbs: [
    { label: "Strona główna", href: "/" },
    { label: "Inwestycje i nieruchomości", href: "/inwestycje-i-nieruchomosci" },
    { label: "Fotowoltaika", href: "/inwestycje-i-nieruchomosci/fotowoltaika" },
  ],
  category_label: "INWESTYCJE I NIERUCHOMOŚCI",
  headline: "Fotowoltaika i magazyny energii",
  intro:
    "Kompleksowe rozwiązania w zakresie energii odnawialnej - od projektu instalacji fotowoltaicznej po dystrybucję magazynów energii.",
  tabs: [
    {
      id: "projekty-magazyny",
      tabLabel: "Projekty fotowoltaiczne i magazynów energii",
      icon: "solar",
      heading: "Projekty fotowoltaiczne i magazynów energii",
      body: "Projektujemy i realizujemy instalacje fotowoltaiczne wraz z magazynami energii, dopasowane do potrzeb Twojego domu lub firmy - od analizy zapotrzebowania po pełne wdrożenie.",
      imageAlt: "Instalacja fotowoltaiczna z magazynem energii",
    },
    {
      id: "dystrybucja-sprzedaz",
      tabLabel: "Dystrybucja i sprzedaż magazynów energii",
      icon: "battery",
      heading: "Dystrybucja i sprzedaż magazynów energii",
      body: "Oferujemy sprzedaż i dystrybucję magazynów energii najwyższej jakości, umożliwiających efektywne magazynowanie i wykorzystanie wyprodukowanej energii.",
      imageAlt: "Magazyny energii",
    },
  ],
}

export default function FotowoltaikaPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <TabbedShowcaseTemplate data={data} />
      <SiteFooter />
    </main>
  )
}
