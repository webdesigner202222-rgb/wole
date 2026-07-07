import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CreditProductTemplate, type CreditProductData } from "@/components/credit-product-template"

export const metadata: Metadata = {
  title: "Domki modułowe - pod klucz | Broker Kredytowy",
  description:
    "Domy modułowe pod klucz. Kompletny dom gotowy do zamieszkania wraz z wyposażeniem oraz finansowaniem inwestycji.",
}

const data: CreditProductData = {
  breadcrumbs: [
    { label: "Strona główna", href: "/" },
    { label: "Inwestycje i nieruchomości", href: "/inwestycje-i-nieruchomosci" },
    { label: "Domki modułowe", href: "/inwestycje-i-nieruchomosci/domki-modulowe" },
    { label: "Pod klucz", href: "/inwestycje-i-nieruchomosci/domki-modulowe/pod-klucz" },
  ],
  category_label: "Domki modułowe - pod klucz",
  headline: "Domki modułowe\npod klucz",
  description:
    "Kompletny dom gotowy do zamieszkania, wraz z wyposażeniem. Wprowadź się bez dodatkowych prac wykończeniowych.",
  hero_checklist: [
    "Kompletny dom gotowy do zamieszkania",
    "Wykończenie wraz z wyposażeniem",
    "Szybka realizacja i finansowanie",
  ],
  hero_image_url: "/images/inwestycje/domki-pod-klucz.png",
  for_whom_intro:
    "Oferta dla osób, które chcą wprowadzić się do gotowego domu bez dodatkowych prac.",
  for_whom_points: ["Rodziny", "Osoby ceniące czas", "Inwestorzy", "Osoby kupujące pierwszy dom"],
  benefits: [
    { title: "Gotowe do zamieszkania", desc: "Wprowadź się od razu po odbiorze." },
    { title: "Pełne wykończenie", desc: "Dom z wykończeniem i wyposażeniem." },
    { title: "Finansowanie inwestycji", desc: "Dobierzemy odpowiednie źródło finansowania." },
    { title: "Szybka realizacja", desc: "Krótszy czas budowy niż w technologii tradycyjnej." },
    { title: "Przewidywalny koszt", desc: "Jasny budżet inwestycji od początku." },
    { title: "Wsparcie na każdym etapie", desc: "Prowadzimy Cię przez cały proces." },
  ],
  steps: [
    { number: "01", title: "Kontakt", desc: "Odezwij się do nas i opowiedz o swoich planach." },
    { number: "02", title: "Analiza potrzeb", desc: "Dobieramy projekt i sposób finansowania." },
    { number: "03", title: "Decyzja", desc: "Otrzymujesz ofertę i decyzję kredytową." },
    { number: "04", title: "Odbiór domu", desc: "Realizujemy dom i przekazujemy klucze." },
  ],
  faq: [
    { question: "Co obejmuje standard pod klucz?", answer: "Odpowiedź: wkrótce" },
    { question: "Ile trwa realizacja domu modułowego?", answer: "Odpowiedź: wkrótce" },
    { question: "Jak sfinansuję zakup domu modułowego?", answer: "Odpowiedź: wkrótce" },
    { question: "Czy dom jest wyposażony w meble?", answer: "Odpowiedź: wkrótce" },
  ],
  cta_text: "Skontaktuj się z nami – doradzimy!",
  related_products: [
    {
      name: "Domki modułowe - stan deweloperski",
      url: "/inwestycje-i-nieruchomosci/domki-modulowe/stan-deweloperski",
    },
    { name: "Nieruchomości komercyjne", url: "/inwestycje-i-nieruchomosci/nieruchomosci-komercyjne" },
    { name: "Biznesplany", url: "/inwestycje-i-nieruchomosci/biznesplany" },
    { name: "Kredyt hipoteczny", url: "/kredyty-osobiste/hipoteczny" },
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
