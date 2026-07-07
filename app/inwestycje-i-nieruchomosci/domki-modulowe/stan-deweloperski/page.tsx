import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CreditProductTemplate, type CreditProductData } from "@/components/credit-product-template"

export const metadata: Metadata = {
  title: "Domki modułowe - stan deweloperski | Broker Kredytowy",
  description:
    "Domy modułowe w stanie deweloperskim. Solidna konstrukcja gotowa do wykończenia według własnych potrzeb, wraz z finansowaniem.",
}

const data: CreditProductData = {
  breadcrumbs: [
    { label: "Strona główna", href: "/" },
    { label: "Inwestycje i nieruchomości", href: "/inwestycje-i-nieruchomosci" },
    { label: "Domki modułowe", href: "/inwestycje-i-nieruchomosci/domki-modulowe" },
    { label: "Stan deweloperski", href: "/inwestycje-i-nieruchomosci/domki-modulowe/stan-deweloperski" },
  ],
  category_label: "Domki modułowe - stan deweloperski",
  headline: "Domki modułowe\nw stanie deweloperskim",
  description:
    "Solidna konstrukcja gotowa do wykończenia według własnych potrzeb. Szybka realizacja i finansowanie inwestycji.",
  hero_checklist: [
    "Solidna konstrukcja modułowa",
    "Wykończenie według własnych potrzeb",
    "Szybka realizacja i finansowanie",
  ],
  hero_image_url: "/images/inwestycje/domki-stan-deweloperski.png",
  for_whom_intro:
    "Oferta dla osób i firm szukających szybkiego i elastycznego rozwiązania mieszkaniowego.",
  for_whom_points: ["Rodziny", "Inwestorzy", "Firmy", "Osoby budujące dom"],
  benefits: [
    { title: "Szybka realizacja", desc: "Krótszy czas budowy niż w technologii tradycyjnej." },
    { title: "Elastyczne wykończenie", desc: "Wykończ wnętrze według własnego pomysłu." },
    { title: "Finansowanie inwestycji", desc: "Dobierzemy odpowiednie źródło finansowania." },
    { title: "Solidna konstrukcja", desc: "Trwałe materiały i sprawdzona technologia." },
    { title: "Przewidywalny koszt", desc: "Jasny budżet inwestycji od początku." },
    { title: "Wsparcie na każdym etapie", desc: "Prowadzimy Cię przez cały proces." },
  ],
  steps: [
    { number: "01", title: "Kontakt", desc: "Odezwij się do nas i opowiedz o swoich planach." },
    { number: "02", title: "Analiza potrzeb", desc: "Dobieramy projekt i sposób finansowania." },
    { number: "03", title: "Decyzja", desc: "Otrzymujesz ofertę i decyzję kredytową." },
    { number: "04", title: "Realizacja", desc: "Realizujemy dom i uruchamiamy środki." },
  ],
  faq: [
    { question: "Co obejmuje stan deweloperski?", answer: "Odpowiedź: wkrótce" },
    { question: "Ile trwa realizacja domu modułowego?", answer: "Odpowiedź: wkrótce" },
    { question: "Jak sfinansuję zakup domu modułowego?", answer: "Odpowiedź: wkrótce" },
    { question: "Czy potrzebne jest pozwolenie na budowę?", answer: "Odpowiedź: wkrótce" },
  ],
  cta_text: "Skontaktuj się z nami – doradzimy!",
  related_products: [
    { name: "Domki modułowe - pod klucz", url: "/inwestycje-i-nieruchomosci/domki-modulowe/pod-klucz" },
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
