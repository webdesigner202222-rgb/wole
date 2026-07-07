import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { TabbedShowcaseTemplate, type TabbedShowcaseData } from "@/components/tabbed-showcase-template"

export const metadata: Metadata = {
  title: "Domki modułowe | Broker Kredytowy",
  description:
    "Nowoczesne budownictwo modułowe: stan deweloperski, wykończenie pod klucz oraz modułowe obiekty handlowo-usługowe.",
}

const data: TabbedShowcaseData = {
  breadcrumbs: [
    { label: "Strona główna", href: "/" },
    { label: "Inwestycje i nieruchomości", href: "/inwestycje-i-nieruchomosci" },
    { label: "Domki modułowe", href: "/inwestycje-i-nieruchomosci/domki-modulowe" },
  ],
  category_label: "INWESTYCJE I NIERUCHOMOŚCI",
  headline: "Domki modułowe",
  intro:
    "Nowoczesne budownictwo modułowe dopasowane do Twoich potrzeb - od prostych konstrukcji po kompleksowe domy pod klucz.",
  tabs: [
    {
      id: "stan-deweloperski",
      tabLabel: "Stan deweloperski",
      icon: "home",
      heading: "Stan deweloperski",
      body: "Solidna, w pełni zamknięta konstrukcja gotowa do samodzielnego wykończenia według własnych potrzeb i budżetu.",
      facts: [
        "Gotowa konstrukcja z zewnątrz - ściany, dach, okna, drzwi",
        "Instalacje wewnętrzne - elektryka, hydraulika, ogrzewanie",
        "Izolacja termiczna i akustyczna na najwyższym poziomie",
        "Możliwość indywidualnego wykończenia wnętrza",
      ],
      imageAlt: "Domek modułowy w stanie deweloperskim",
    },
    {
      id: "pod-klucz",
      tabLabel: "Pod klucz",
      icon: "key",
      heading: "Stan wykończenia pod klucz",
      body: "Kompletny dom gotowy do zamieszkania - wraz z pełnym wyposażeniem wnętrz. Otrzymujesz gotowy produkt, do którego możesz się wprowadzić od razu po odbiorze.",
      imageAlt: "Wykończony domek modułowy pod klucz",
    },
    {
      id: "obiekty-uslugowe",
      tabLabel: "Obiekty usługowe",
      icon: "building",
      heading: "Obiekty modułowe handlowo-usługowe",
      body: "Modułowe przestrzenie handlowe i usługowe - szybka realizacja dla biznesu, który potrzebuje funkcjonalnej powierzchni bez długiego czasu budowy.",
      facts: [
        "Domki modułowe do 35m² - bez konieczności uzyskania pozwolenia na budowę",
        "Montaż do miesiąca po ustaleniu szczegółów z ekspertem",
        "Możliwość rozbudowy do dowolnej wielkości: 100m², 200m², 300m² i więcej",
      ],
      imageAlt: "Modułowy obiekt handlowo-usługowy",
    },
  ],
}

export default function DomkiModulowePage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <TabbedShowcaseTemplate data={data} />
      <SiteFooter />
    </main>
  )
}
