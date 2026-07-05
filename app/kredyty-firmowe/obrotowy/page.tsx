import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CreditProductTemplate, type CreditProductData } from "@/components/credit-product-template"

export const metadata: Metadata = {
  title: "Kredyty obrotowe dla firm | Broker Kredytowy",
  description:
    "Finansowanie bieżącej działalności firmy. Środki na płynność, zapasy, wynagrodzenia czy bieżące zobowiązania. Decyzja nawet w 24h.",
}

const data: CreditProductData = {
  breadcrumbs: [
    { label: "Strona główna", href: "/" },
    { label: "Kredyty firmowe", href: "/kredyty-firmowe" },
    { label: "Kredyt obrotowy", href: "/kredyty-firmowe/obrotowy" },
  ],
  category_label: "Kredyty obrotowe",
  headline: "Kredyty obrotowe dla firm",
  description:
    "Finansowanie bieżącej działalności firmy. Środki na płynność, zapasy, wynagrodzenia czy bieżące zobowiązania.",
  hero_checklist: [
    "Szybka decyzja nawet w 24h",
    "Elastyczne warunki spłaty",
    "Finansowanie dopasowane do Twoich potrzeb",
  ],
  hero_image_url: "/images/kredyty/kredyt-obrotowy.png",
  for_whom_intro:
    "Kredyty obrotowe są dla firm, które potrzebują środków na codzienne funkcjonowanie i rozwój.",
  for_whom_points: ["Firmy handlowe", "Firmy usługowe", "Firmy produkcyjne", "Jednoosobowe działalności"],
  benefits: [
    {
      title: "Finansowanie do 5 mln zł",
      desc: "Dopasujemy kwotę do potrzeb Twojej firmy.",
    },
    {
      title: "Elastyczne spłaty",
      desc: "Dogodne raty i możliwość wcześniejszej spłaty.",
    },
    {
      title: "Decyzja nawet w 24h",
      desc: "Szybka odpowiedź bez zbędnego czekania.",
    },
    {
      title: "Indywidualne podejście",
      desc: "Opiekun, który zna Twój biznes.",
    },
    {
      title: "Brak ukrytych kosztów",
      desc: "Przejrzyste warunki i pełna transparentność.",
    },
    {
      title: "Minimum formalności",
      desc: "Prosty proces i ograniczona ilość dokumentów.",
    },
  ],
  steps: [
    {
      number: "01",
      title: "Kontakt",
      desc: "Odezwij się do nas i opowiedz o swojej sytuacji.",
    },
    {
      number: "02",
      title: "Analiza potrzeb",
      desc: "Sprawdzamy potrzeby Twojej firmy i dobieramy najlepsze rozwiązanie.",
    },
    {
      number: "03",
      title: "Decyzja",
      desc: "Otrzymujesz decyzję kredytową – nawet w 24h.",
    },
    {
      number: "04",
      title: "Środki na koncie",
      desc: "Po podpisaniu umowy środki trafiają na Twoje konto firmowe.",
    },
  ],
  faq: [
    {
      question: "Na co mogę przeznaczyć kredyt obrotowy?",
      answer: "Odpowiedź: wkrótce",
    },
    {
      question: "Jak szybko otrzymam środki?",
      answer: "Odpowiedź: wkrótce",
    },
    {
      question: "Jakie dokumenty są potrzebne?",
      answer: "Odpowiedź: wkrótce",
    },
    {
      question: "Czy wymagana jest forma zabezpieczenia?",
      answer: "Odpowiedź: wkrótce",
    },
  ],
  cta_text: "Skontaktuj się z nami – doradzimy!",
  related_products: [
    { name: "Kredyty inwestycyjne", url: "/kredyty-firmowe/inwestycyjny" },
    { name: "Kredyty deweloperskie", url: "/kredyty-firmowe/deweloperski" },
    { name: "Leasing", url: "/kredyty-firmowe/leasing" },
    { name: "Faktoring", url: "/kredyty-firmowe/faktoring" },
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
