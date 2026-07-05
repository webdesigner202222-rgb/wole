import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CreditProductTemplate, type CreditProductData } from "@/components/credit-product-template"

export const metadata: Metadata = {
  title: "Kredyt hipoteczny na wymarzone mieszkanie | Broker Kredytowy",
  description:
    "Sfinansuj zakup mieszkania, domu lub budowę nieruchomości z korzystnym oprocentowaniem i wsparciem na każdym etapie. Finansowanie do 90% wartości nieruchomości.",
}

const data: CreditProductData = {
  breadcrumbs: [
    { label: "Strona główna", href: "/" },
    { label: "Kredyty osobiste", href: "/kredyty-osobiste" },
    { label: "Kredyt hipoteczny", href: "/kredyty-osobiste/hipoteczny" },
  ],
  category_label: "Kredyty hipoteczne",
  headline: "Kredyt hipoteczny na wymarzone mieszkanie",
  description:
    "Sfinansuj zakup mieszkania, domu lub budowę nieruchomości z korzystnym oprocentowaniem i wsparciem na każdym etapie.",
  hero_image_url: "/images/kredyty/kredyt-hipoteczny.png",
  hero_checklist: [
    "Finansowanie do 90% wartości nieruchomości",
    "Długi okres kredytowania - nawet do 35 lat",
    "Wsparcie w formalnościach od A do Z",
  ],
  for_whom_intro:
    "Kredyt hipoteczny jest dla osób planujących zakup mieszkania, domu lub budowę własnej nieruchomości.",
  for_whom_points: [
    "Osoby kupujące pierwsze mieszkanie",
    "Rodziny szukające większego domu",
    "Inwestorzy indywidualni",
    "Osoby budujące dom",
  ],
  benefits: [
    { title: "Finansowanie do 90% wartości", desc: "Niski wymagany wkład własny." },
    { title: "Długi okres spłaty", desc: "Nawet do 35 lat, niższa miesięczna rata." },
    {
      title: "Porównanie ofert wielu banków",
      desc: "Wybieramy dla Ciebie najkorzystniejszą opcję.",
    },
    { title: "Wsparcie formalne", desc: "Pomoc w kompletowaniu dokumentów i wniosku." },
    { title: "Doradztwo na każdym etapie", desc: "Od wyboru oferty po podpisanie umowy." },
    { title: "Możliwość wcześniejszej spłaty", desc: "Elastyczne warunki nadpłat kredytu." },
  ],
  steps: [
    { number: "01", title: "Kontakt", desc: "Opowiedz nam o swoich planach zakupu nieruchomości." },
    {
      number: "02",
      title: "Analiza zdolności",
      desc: "Sprawdzamy Twoją zdolność kredytową i dobieramy oferty.",
    },
    { number: "03", title: "Decyzja banku", desc: "Otrzymujesz decyzję kredytową wybranego banku." },
    {
      number: "04",
      title: "Przekazanie kluczy",
      desc: "Po podpisaniu umowy i wypłacie środków odbierasz klucze do nieruchomości.",
    },
  ],
  faq: [
    { question: "Jaki wkład własny jest wymagany?", answer: "Odpowiedź: wkrótce" },
    {
      question: "Jak długo trwa proces uzyskania kredytu hipotecznego?",
      answer: "Odpowiedź: wkrótce",
    },
    { question: "Czy pomagacie w wyborze nieruchomości?", answer: "Odpowiedź: wkrótce" },
    { question: "Jakie dokumenty są potrzebne do wniosku?", answer: "Odpowiedź: wkrótce" },
  ],
  cta_text: "Skontaktuj się z nami - doradzimy!",
  related_products: [{ name: "Kredyt gotówkowy", url: "/kredyty-osobiste/gotowkowy" }],
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
