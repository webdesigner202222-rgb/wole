import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CreditProductTemplate, type CreditProductData } from "@/components/credit-product-template"

export const metadata: Metadata = {
  title: "Faktoring dla firm | Broker Kredytowy",
  description:
    "Zamień wystawione faktury na natychmiastową gotówkę i popraw płynność finansową swojej firmy. Wypłata nawet do 90% wartości faktury w 24h.",
}

const data: CreditProductData = {
  breadcrumbs: [
    { label: "Strona główna", href: "/" },
    { label: "Kredyty firmowe", href: "/kredyty-firmowe" },
    { label: "Faktoring", href: "/kredyty-firmowe/faktoring" },
  ],
  category_label: "Faktoring",
  headline: "Faktoring dla firm",
  description:
    "Zamień wystawione faktury na natychmiastową gotówkę i popraw płynność finansową swojej firmy.",
  hero_image_url: "/images/kredyty/faktoring.png",
  hero_checklist: [
    "Wypłata nawet do 90% wartości faktury",
    "Środki nawet w 24h od wystawienia faktury",
    "Poprawa płynności bez zaciągania kredytu",
  ],
  for_whom_intro:
    "Faktoring jest dla firm, które chcą szybciej otrzymywać środki z wystawionych faktur z odroczonym terminem płatności.",
  for_whom_points: ["Firmy handlowe", "Firmy produkcyjne", "Firmy usługowe B2B", "Eksporterzy"],
  benefits: [
    { title: "Szybka wypłata środków", desc: "Nawet w 24h od przekazania faktury." },
    { title: "Do 90% wartości faktury", desc: "Natychmiastowy dostęp do większości należności." },
    { title: "Bez dodatkowych zabezpieczeń", desc: "Zabezpieczeniem jest sama wierzytelność." },
    {
      title: "Poprawa płynności finansowej",
      desc: "Stabilny dopływ gotówki niezależnie od terminów płatności kontrahentów.",
    },
    {
      title: "Możliwość przejęcia ryzyka niewypłacalności",
      desc: "Opcja faktoringu pełnego (bez regresu).",
    },
    { title: "Minimum formalności", desc: "Prosty i szybki proces przystąpienia." },
  ],
  steps: [
    {
      number: "01",
      title: "Kontakt",
      desc: "Odezwij się do nas i opowiedz o swoich fakturach i kontrahentach.",
    },
    { number: "02", title: "Analiza", desc: "Sprawdzamy Twoje faktury i kontrahentów." },
    { number: "03", title: "Decyzja", desc: "Ustalamy warunki i limit faktoringowy." },
    { number: "04", title: "Wypłata środków", desc: "Otrzymujesz środki z faktury nawet w 24h." },
  ],
  faq: [
    { question: "Jaki procent wartości faktury mogę otrzymać?", answer: "Odpowiedź: wkrótce" },
    { question: "Czy faktoring wymaga zgody kontrahenta?", answer: "Odpowiedź: wkrótce" },
    { question: "Czym różni się faktoring pełny od niepełnego?", answer: "Odpowiedź: wkrótce" },
    { question: "Jak szybko otrzymam środki?", answer: "Odpowiedź: wkrótce" },
  ],
  cta_text: "Skontaktuj się z nami - doradzimy!",
  related_products: [
    { name: "Kredyty obrotowe", url: "/kredyty-firmowe/obrotowy" },
    { name: "Kredyt w rachunku bieżącym", url: "/kredyty-firmowe/w-rachunku-biezacym" },
    { name: "Fundusze pożyczkowe", url: "/kredyty-firmowe/fundusze-pozyczkowe" },
    { name: "Leasing", url: "/kredyty-firmowe/leasing" },
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
