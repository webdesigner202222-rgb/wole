import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ProductShowcasePage, type ProductShowcaseData } from "@/components/product-showcase-page"

export const metadata: Metadata = {
  title: "Fotowoltaika i magazyny energii | Broker Kredytowy",
  description:
    "Kompleksowe rozwiązania w zakresie energii odnawialnej - projekty instalacji fotowoltaicznych oraz dystrybucja i sprzedaż magazynów energii.",
}

const data: ProductShowcaseData = {
  breadcrumbs: [
    { label: "Strona główna", href: "/" },
    { label: "Inwestycje i nieruchomości", href: "/inwestycje-i-nieruchomosci" },
    { label: "Fotowoltaika", href: "/inwestycje-i-nieruchomosci/fotowoltaika" },
  ],
  category_label: "INWESTYCJE I NIERUCHOMOŚCI",
  headline: "Fotowoltaika i magazyny energii",
  intro:
    "Kompleksowe rozwiązania w zakresie energii odnawialnej - od projektu instalacji fotowoltaicznej po dystrybucję magazynów energii.",
  sections: [
    {
      id: "projekty-i-magazyny-energii",
      heading: "Projekty fotowoltaiczne i magazyny energii",
      body: "Projektujemy i realizujemy instalacje fotowoltaiczne wraz z magazynami energii, dopasowane do potrzeb Twojego domu lub firmy - od analizy zapotrzebowania po pełne wdrożenie.",
      imageAlt: "Instalacja fotowoltaiczna z magazynem energii",
    },
    {
      id: "dystrybucja-magazynow-energii",
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
      <ProductShowcasePage data={data} />
      <SiteFooter />
    </main>
  )
}
