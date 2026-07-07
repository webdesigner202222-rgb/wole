import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CategoryLandingTemplate, type CategoryLandingData } from "@/components/category-landing-template"
import { PersonIcon } from "@/components/why-us-icons"

export const metadata: Metadata = {
  title: "Domki modułowe | Broker Kredytowy",
  description:
    "Domy modułowe w stanie deweloperskim oraz pod klucz. Nowoczesne, szybkie w realizacji rozwiązania mieszkaniowe wraz z finansowaniem.",
}

const data: CategoryLandingData = {
  breadcrumbs: [
    { label: "Strona główna", href: "/" },
    { label: "Inwestycje i nieruchomości", href: "/inwestycje-i-nieruchomosci" },
    { label: "Domki modułowe", href: "/inwestycje-i-nieruchomosci/domki-modulowe" },
  ],
  category_label: "DOMKI MODUŁOWE",
  headline: "Nowoczesne domy\nmodułowe",
  description:
    "Domy modułowe w stanie deweloperskim oraz pod klucz. Szybka realizacja i finansowanie dopasowane do Twoich potrzeb.",
  products: [
    {
      icon_svg: "/images/icons/inwestycje-domki-stan-deweloperski.svg",
      name: "Domki modułowe - stan deweloperski",
      desc: "Solidna konstrukcja gotowa do wykończenia według własnych potrzeb.",
      url: "/inwestycje-i-nieruchomosci/domki-modulowe/stan-deweloperski",
    },
    {
      icon_svg: "/images/icons/inwestycje-domki-pod-klucz.svg",
      name: "Domki modułowe - pod klucz",
      desc: "Kompletny dom gotowy do zamieszkania, wraz z wyposażeniem.",
      url: "/inwestycje-i-nieruchomosci/domki-modulowe/pod-klucz",
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

export default function DomkiModulowePage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <CategoryLandingTemplate data={data} />
      <SiteFooter />
    </main>
  )
}
