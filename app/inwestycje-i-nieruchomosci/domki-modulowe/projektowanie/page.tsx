import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { TabbedShowcaseTemplate, type TabbedShowcaseData } from "@/components/tabbed-showcase-template"

export const metadata: Metadata = {
  title: "Projektowanie | Broker Kredytowy",
  description:
    "Projektowanie obiektów modułowych: hale produkcyjne i magazynowe, przestrzenie biurowe oraz osiedla mieszkaniowe i deweloperskie.",
}

const data: TabbedShowcaseData = {
  breadcrumbs: [
    { label: "Strona główna", href: "/" },
    { label: "Inwestycje i nieruchomości", href: "/inwestycje-i-nieruchomosci" },
    { label: "Domki modułowe", href: "/inwestycje-i-nieruchomosci/domki-modulowe" },
    { label: "Projektowanie", href: "/inwestycje-i-nieruchomosci/domki-modulowe/projektowanie" },
  ],
  category_label: "INWESTYCJE I NIERUCHOMOŚCI",
  headline: "Projektowanie",
  intro:
    "Projektujemy obiekty modułowe dopasowane do specyfiki Twojej branży i potrzeb - od hal, przez biura, po całe osiedla.",
  tabs: [
    {
      id: "hale",
      tabLabel: "Hale",
      icon: "warehouse",
      heading: "Hale",
      body: "Projekty hal produkcyjnych i magazynowych, zaprojektowane pod kątem funkcjonalności i efektywności przestrzeni.",
      imageAlt: "Projekt hali produkcyjnej",
    },
    {
      id: "biura",
      tabLabel: "Biura",
      icon: "office",
      heading: "Biura",
      body: "Nowoczesne przestrzenie biurowe zaprojektowane od podstaw, dopasowane do charakteru i skali Twojej firmy.",
      imageAlt: "Projekt przestrzeni biurowej",
    },
    {
      id: "osiedla",
      tabLabel: "Osiedla",
      icon: "estate",
      heading: "Osiedla",
      body: "Kompleksowe projekty osiedli mieszkaniowych i deweloperskich, od koncepcji po gotowy plan realizacji.",
      imageAlt: "Projekt osiedla mieszkaniowego",
    },
  ],
}

export default function ProjektowaniePage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <TabbedShowcaseTemplate data={data} />
      <SiteFooter />
    </main>
  )
}
