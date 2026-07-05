import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CreditProductTemplate, type CreditProductData } from "@/components/credit-product-template"

export const metadata: Metadata = {
  title: "Fundusze pożyczkowe dla firm | Broker Kredytowy",
  description:
    "Alternatywne źródło finansowania dla firm, które nie spełniają standardowych kryteriów bankowych - pożyczki z funduszy unijnych i regionalnych.",
}

const data: CreditProductData = {
  breadcrumbs: [
    { label: "Strona główna", href: "/" },
    { label: "Kredyty firmowe", href: "/kredyty-firmowe" },
    { label: "Fundusze pożyczkowe", href: "/kredyty-firmowe/fundusze-pozyczkowe" },
  ],
  category_label: "Fundusze pożyczkowe",
  headline: "Fundusze pożyczkowe dla firm",
  description:
    "Alternatywne źródło finansowania dla firm, które nie spełniają standardowych kryteriów bankowych - pożyczki z funduszy unijnych i regionalnych.",
  hero_image_url: "/images/kredyty/fundusze-pozyczkowe.png",
  hero_checklist: [
    "Dostęp do finansowania poza bankiem",
    "Preferencyjne warunki dla MŚP",
    "Wsparcie w wyborze odpowiedniego funduszu",
  ],
  for_whom_intro:
    "Fundusze pożyczkowe są dla firm szukających alternatywnego finansowania, w tym startupów i firm bez długiej historii kredytowej.",
  for_whom_points: ["Startupy", "Mikroprzedsiębiorstwa", "Małe i średnie firmy", "Firmy bez zdolności bankowej"],
  benefits: [
    {
      title: "Preferencyjne oprocentowanie",
      desc: "Korzystniejsze warunki niż w standardowym kredycie bankowym.",
    },
    { title: "Dostępność dla młodych firm", desc: "Mniej rygorystyczne wymagania niż w bankach." },
    { title: "Wsparcie doradcze", desc: "Pomoc w doborze i przygotowaniu wniosku do funduszu." },
    {
      title: "Finansowanie regionalne i unijne",
      desc: "Dostęp do programów wsparcia z różnych źródeł.",
    },
    { title: "Elastyczne kwoty", desc: "Dopasowane do wielkości i etapu rozwoju firmy." },
    { title: "Minimum formalności", desc: "Uproszczony proces aplikacyjny." },
  ],
  steps: [
    { number: "01", title: "Kontakt", desc: "Opowiedz nam o swojej firmie i potrzebach finansowych." },
    { number: "02", title: "Analiza", desc: "Dobieramy odpowiedni fundusz pożyczkowy do Twojej sytuacji." },
    { number: "03", title: "Decyzja", desc: "Fundusz podejmuje decyzję o przyznaniu pożyczki." },
    { number: "04", title: "Wypłata środków", desc: "Środki trafiają na konto Twojej firmy." },
  ],
  faq: [
    {
      question: "Czym różnią się fundusze pożyczkowe od kredytu bankowego?",
      answer: "Odpowiedź: wkrótce",
    },
    { question: "Czy mogę uzyskać pożyczkę bez historii kredytowej?", answer: "Odpowiedź: wkrótce" },
    { question: "Jakie są maksymalne kwoty pożyczek?", answer: "Odpowiedź: wkrótce" },
    { question: "Jak długo trwa rozpatrzenie wniosku?", answer: "Odpowiedź: wkrótce" },
  ],
  cta_text: "Skontaktuj się z nami - doradzimy!",
  related_products: [
    { name: "Kredyty obrotowe", url: "/kredyty-firmowe/obrotowy" },
    { name: "Kredyty inwestycyjne", url: "/kredyty-firmowe/inwestycyjny" },
    { name: "Faktoring", url: "/kredyty-firmowe/faktoring" },
    { name: "Kredyt w rachunku bieżącym", url: "/kredyty-firmowe/w-rachunku-biezacym" },
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
