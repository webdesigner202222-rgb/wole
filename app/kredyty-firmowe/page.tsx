import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CategoryLandingTemplate, type CategoryLandingData } from "@/components/category-landing-template"
import { ClockIcon, DocumentIcon, PersonIcon, SlidersIcon } from "@/components/why-us-icons"

export const metadata: Metadata = {
  title: "Kredyty firmowe | Broker Kredytowy",
  description:
    "Szeroki wybór rozwiązań finansowych dla firm: kredyty obrotowe, inwestycyjne, deweloperskie, faktoring i leasing. Współpracujemy z wieloma bankami.",
}

const data: CategoryLandingData = {
  breadcrumbs: [
    { label: "Strona główna", href: "/" },
    { label: "Kredyty firmowe", href: "/kredyty-firmowe" },
  ],
  category_label: "KREDYTY FIRMOWE",
  headline: "Finansowanie dla\nTwojej firmy",
  description:
    "Szeroki wybór rozwiązań dopasowanych do potrzeb Twojego biznesu. Współpracujemy z wieloma bankami, aby znaleźć najlepsze warunki.",
  products: [
    {
      icon_svg: "/images/icons/firmowe-kredyt-obrotowy.svg",
      name: "Kredyt obrotowy",
      desc: "Finansowanie bieżącej działalności firmy i płynności finansowej.",
      url: "/kredyty-firmowe/obrotowy",
    },
    {
      icon_svg: "/images/icons/firmowe-kredyt-inwestycyjny.svg",
      name: "Kredyt inwestycyjny",
      desc: "Środki na rozwój, modernizację oraz realizację nowych inwestycji.",
      url: "/kredyty-firmowe/inwestycyjny",
    },
    {
      icon_svg: "/images/icons/firmowe-kredyt-deweloperski.svg",
      name: "Kredyt deweloperski",
      desc: "Finansowanie inwestycji deweloperskich na każdym etapie realizacji.",
      url: "/kredyty-firmowe/deweloperski",
    },
    {
      icon_svg: "/images/icons/firmowe-kredyt-w-rachunku-biezacym.svg",
      name: "Kredyt w rachunku bieżącym",
      desc: "Elastyczne finansowanie bieżących potrzeb Twojej firmy.",
      url: "/kredyty-firmowe/w-rachunku-biezacym",
    },
    {
      icon_svg: "/images/icons/firmowe-faktoring.svg",
      name: "Faktoring",
      desc: "Popraw płynność finansową dzięki szybkiemu finansowaniu faktur.",
      url: "/kredyty-firmowe/faktoring",
    },
    {
      icon_svg: "/images/icons/firmowe-leasing.svg",
      name: "Leasing",
      desc: "Korzystaj z nowoczesnych środków trwałych bez dużych nakładów.",
      url: "/kredyty-firmowe/leasing",
    },
    {
      icon_svg: "/images/icons/firmowe-fundusze-pozyczkowe.svg",
      name: "Fundusze pożyczkowe",
      desc: "Alternatywne źródło finansowania dla Twojej firmy.",
      url: "/kredyty-firmowe/fundusze-pozyczkowe",
    },
  ],
  why_us_heading: "Dlaczego warto skorzystać z naszej oferty?",
  why_us_points: [
    { icon_node: <PersonIcon className="h-10 w-10" />, label: "Doradca dopasowany do branży" },
    { icon_node: <ClockIcon className="h-10 w-10" />, label: "Szybka analiza wniosku" },
    { icon_node: <DocumentIcon className="h-10 w-10" />, label: "Minimum formalności, jasne zasady" },
    { icon_node: <SlidersIcon className="h-10 w-10" />, label: "Wsparcie na każdym etapie współpracy" },
  ],
  cta_label: "POROZMAWIAJMY O POTRZEBACH TWOJEJ FIRMY",
  cta_headline: "Skontaktuj się z nami",
  cta_desc: "Dobierzemy najlepsze rozwiązanie finansowe dla Twojego biznesu.",
  cta_phone: "+48 723 609 936",
}

export default function KredytyFirmowePage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <CategoryLandingTemplate data={data} />
      <SiteFooter />
    </main>
  )
}
