import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ProductShowcasePage, type ProductShowcaseData } from "@/components/product-showcase-page"

export const metadata: Metadata = {
  title: "Domki modułowe | Broker Kredytowy",
  description:
    "Nowoczesne budownictwo modułowe: stan deweloperski, pod klucz, obiekty handlowo-usługowe oraz projektowanie hal, biur i osiedli.",
}

const data: ProductShowcaseData = {
  breadcrumbs: [
    { label: "Strona główna", href: "/" },
    { label: "Inwestycje i nieruchomości", href: "/inwestycje-i-nieruchomosci" },
    { label: "Domki modułowe", href: "/inwestycje-i-nieruchomosci/domki-modulowe" },
  ],
  category_label: "INWESTYCJE I NIERUCHOMOŚCI",
  headline: "Domki modułowe",
  intro:
    "Nowoczesne budownictwo modułowe dopasowane do Twoich potrzeb - od prostych konstrukcji po kompletne domy pod klucz. Poznaj nasze rozwiązania poniżej.",
  sections: [
    {
      id: "stan-deweloperski",
      heading: "Stan deweloperski",
      body: "Solidna, w pełni zamknięta konstrukcja gotowa do samodzielnego wykończenia według własnych potrzeb i budżetu. Idealne rozwiązanie dla osób, które chcą mieć pełną kontrolę nad wykończeniem wnętrza.",
      imageAlt: "Domek modułowy w stanie deweloperskim",
    },
    {
      id: "pod-klucz",
      heading: "Pod klucz",
      body: "Kompletny dom gotowy do zamieszkania - wraz z pełnym wyposażeniem wnętrz. Otrzymujesz gotowy produkt, do którego możesz się wprowadzić od razu po odbiorze.",
      imageAlt: "Wykończony domek modułowy pod klucz",
    },
    {
      id: "obiekty-handlowo-uslugowe",
      heading: "Obiekty handlowo-usługowe",
      body: "Modułowe przestrzenie handlowe i usługowe - szybka realizacja dla biznesu, który potrzebuje funkcjonalnej powierzchni bez długiego czasu budowy.",
      facts: [
        "Domki modułowe do 35m² - bez konieczności uzyskania pozwolenia na budowę",
        "Montaż do miesiąca po ustaleniu szczegółów z ekspertem",
        "Możliwość rozbudowy do dowolnej wielkości: 100m², 200m², 300m² i więcej",
      ],
      imageAlt: "Modułowy obiekt handlowo-usługowy",
    },
    {
      id: "projektowanie",
      heading: "Projektowanie",
      body: "Projektujemy obiekty modułowe dopasowane do specyfiki Twojej branży i potrzeb.",
      imageAlt: "Projektowanie obiektów modułowych",
      subsections: [
        {
          id: "projektowanie-hale",
          heading: "Hale",
          body: "Projekty hal produkcyjnych i magazynowych, zaprojektowane pod kątem funkcjonalności i efektywności przestrzeni.",
          imageAlt: "Projekt hali produkcyjnej",
        },
        {
          id: "projektowanie-biura",
          heading: "Biura",
          body: "Nowoczesne przestrzenie biurowe zaprojektowane od podstaw, dopasowane do charakteru i skali Twojej firmy.",
          imageAlt: "Projekt przestrzeni biurowej",
        },
        {
          id: "projektowanie-osiedla",
          heading: "Osiedla",
          body: "Kompleksowe projekty osiedli mieszkaniowych i deweloperskich, od koncepcji po gotowy plan realizacji.",
          imageAlt: "Projekt osiedla mieszkaniowego",
        },
      ],
    },
  ],
}

export default function DomkiModulowePage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <ProductShowcasePage data={data} />
      <SiteFooter />
    </main>
  )
}
