import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CategoryLandingTemplate, type CategoryLandingData } from "@/components/category-landing-template"
import { ClockIcon, DocumentIcon, PersonIcon, SlidersIcon } from "@/components/why-us-icons"

export const metadata: Metadata = {
  title: "Kredyty osobiste | Broker Kredytowy",
  description:
    "Kredyty gotówkowe i hipoteczne dopasowane do Twojej sytuacji. Współpracujemy z wieloma bankami, aby zaoferować Ci najkorzystniejsze warunki.",
}

const data: CategoryLandingData = {
  breadcrumbs: [
    { label: "Strona główna", href: "/" },
    { label: "Kredyty osobiste", href: "/kredyty-osobiste" },
  ],
  category_label: "KREDYTY OSOBISTE",
  headline: "Finansowanie\nTwoich potrzeb",
  description:
    "Znajdziemy dla Ciebie najlepsze rozwiązania dopasowane do Twojej sytuacji. Współpracujemy z wieloma bankami, aby zaoferować Ci najkorzystniejsze warunki.",
  products: [
    {
      icon_svg: "/images/icons/osobiste-kredyt-gotowkowy.svg",
      name: "Kredyt gotówkowy",
      desc: "Środki na dowolny cel, decyzja nawet w 24h.",
      url: "/kredyty-osobiste/gotowkowy",
    },
    {
      icon_svg: "/images/icons/osobiste-kredyt-hipoteczny.svg",
      name: "Kredyt hipoteczny",
      desc: "Sfinansuj zakup mieszkania lub domu z korzystnym oprocentowaniem.",
      url: "/kredyty-osobiste/hipoteczny",
    },
  ],
  why_us_heading: "Dlaczego warto skorzystać z naszej oferty?",
  why_us_points: [
    { icon_node: <DocumentIcon className="h-10 w-10" />, label: "Prosta procedura" },
    { icon_node: <ClockIcon className="h-10 w-10" />, label: "Szybka decyzja" },
    { icon_node: <PersonIcon className="h-10 w-10" />, label: "Wsparcie doradcy" },
    { icon_node: <SlidersIcon className="h-10 w-10" />, label: "Elastyczne warunki spłaty" },
  ],
  cta_label: "POROZMAWIAJMY O TWOICH POTRZEBACH",
  cta_headline: "Skontaktuj się z nami",
  cta_desc: "Dobierzemy najlepsze rozwiązanie finansowe dopasowane do Ciebie.",
  cta_phone: "+48 723 609 936",
}

export default function KredytyOsobistePage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <CategoryLandingTemplate data={data} />
      <SiteFooter />
    </main>
  )
}
