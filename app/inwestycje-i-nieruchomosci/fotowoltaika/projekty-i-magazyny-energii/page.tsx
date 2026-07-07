import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CreditProductTemplate, type CreditProductData } from "@/components/credit-product-template"

export const metadata: Metadata = {
  title: "Projekty fotowoltaiczne i magazyny energii | Broker Kredytowy",
  description:
    "Kompleksowe projekty instalacji fotowoltaicznych wraz z magazynami energii. Finansowanie inwestycji w odnawialne źródła energii.",
}

const data: CreditProductData = {
  breadcrumbs: [
    { label: "Strona główna", href: "/" },
    { label: "Inwestycje i nieruchomości", href: "/inwestycje-i-nieruchomosci" },
    { label: "Fotowoltaika", href: "/inwestycje-i-nieruchomosci/fotowoltaika" },
    {
      label: "Projekty i magazyny energii",
      href: "/inwestycje-i-nieruchomosci/fotowoltaika/projekty-i-magazyny-energii",
    },
  ],
  category_label: "Projekty fotowoltaiczne",
  headline: "Projekty fotowoltaiczne\ni magazyny energii",
  description:
    "Kompleksowe projekty instalacji fotowoltaicznych wraz z magazynami energii. Wspieramy inwestycje w zieloną energię.",
  hero_checklist: [
    "Projekty instalacji fotowoltaicznych",
    "Magazyny energii",
    "Finansowanie inwestycji w OZE",
  ],
  hero_image_url: "/images/inwestycje/fotowoltaika-projekty.png",
  for_whom_intro:
    "Oferta dla firm i inwestorów planujących inwestycję w fotowoltaikę i magazyny energii.",
  for_whom_points: ["Firmy produkcyjne", "Gospodarstwa rolne", "Inwestorzy", "Wspólnoty i spółdzielnie"],
  benefits: [
    { title: "Kompleksowy projekt", desc: "Od koncepcji po gotową instalację." },
    { title: "Magazyny energii", desc: "Zwiększ niezależność energetyczną." },
    { title: "Finansowanie inwestycji", desc: "Dobierzemy najlepsze źródło finansowania." },
    { title: "Oszczędności", desc: "Niższe rachunki za energię elektryczną." },
    { title: "Wsparcie na każdym etapie", desc: "Prowadzimy Cię przez cały proces." },
    { title: "Sprawdzone rozwiązania", desc: "Współpracujemy z doświadczonymi partnerami." },
  ],
  steps: [
    { number: "01", title: "Kontakt", desc: "Odezwij się do nas i opowiedz o swoich potrzebach." },
    { number: "02", title: "Analiza potrzeb", desc: "Dobieramy projekt i sposób finansowania." },
    { number: "03", title: "Decyzja", desc: "Otrzymujesz ofertę i decyzję kredytową." },
    { number: "04", title: "Realizacja", desc: "Realizujemy projekt i uruchamiamy środki." },
  ],
  faq: [
    { question: "Czym jest magazyn energii?", answer: "Odpowiedź: wkrótce" },
    { question: "Jak sfinansuję instalację fotowoltaiczną?", answer: "Odpowiedź: wkrótce" },
    { question: "Ile trwa realizacja projektu?", answer: "Odpowiedź: wkrótce" },
    { question: "Jakie oszczędności mogę uzyskać?", answer: "Odpowiedź: wkrótce" },
  ],
  cta_text: "Skontaktuj się z nami – doradzimy!",
  related_products: [
    {
      name: "Dystrybucja magazynów energii",
      url: "/inwestycje-i-nieruchomosci/fotowoltaika/dystrybucja-magazynow-energii",
    },
    { name: "Nieruchomości komercyjne", url: "/inwestycje-i-nieruchomosci/nieruchomosci-komercyjne" },
    { name: "Biznesplany", url: "/inwestycje-i-nieruchomosci/biznesplany" },
    { name: "Kredyt inwestycyjny", url: "/kredyty-firmowe/inwestycyjny" },
  ],
}

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <CreditProductTemplate data={data} />
      <SiteFooter />
    </main>
  )
}
