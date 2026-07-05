import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CreditProductTemplate, type CreditProductData } from "@/components/credit-product-template"

export const metadata: Metadata = {
  title: "Kredyt gotówkowy na dowolny cel | Broker Kredytowy",
  description:
    "Proste i przejrzyste finansowanie na dowolny cel - remont, wakacje, spłatę innych zobowiązań czy nieprzewidziane wydatki. Decyzja nawet w 24h.",
}

const data: CreditProductData = {
  breadcrumbs: [
    { label: "Strona główna", href: "/" },
    { label: "Kredyty osobiste", href: "/kredyty-osobiste" },
    { label: "Kredyt gotówkowy", href: "/kredyty-osobiste/gotowkowy" },
  ],
  category_label: "Kredyty gotówkowe",
  headline: "Kredyt gotówkowy na dowolny cel",
  description:
    "Proste i przejrzyste finansowanie na dowolny cel - remont, wakacje, spłatę innych zobowiązań czy nieprzewidziane wydatki.",
  hero_image_url: "/images/kredyty/kredyt-gotowkowy.png",
  hero_checklist: ["Decyzja nawet w 24h", "Środki na dowolny cel", "Minimum formalności"],
  for_whom_intro:
    "Kredyt gotówkowy jest dla osób prywatnych, które potrzebują szybkiego dostępu do środków na dowolny cel.",
  for_whom_points: [
    "Osoby zatrudnione na umowę o pracę",
    "Osoby prowadzące działalność gospodarczą",
    "Emeryci i renciści",
    "Osoby na umowach cywilnoprawnych",
  ],
  benefits: [
    { title: "Szybka decyzja", desc: "Odpowiedź nawet w ciągu 24 godzin." },
    {
      title: "Dowolny cel wykorzystania",
      desc: "Środki bez konieczności rozliczania się z ich przeznaczenia.",
    },
    { title: "Elastyczny okres spłaty", desc: "Dopasowany do Twoich możliwości finansowych." },
    { title: "Możliwość wcześniejszej spłaty", desc: "Bez dodatkowych, ukrytych kosztów." },
    { title: "Prosta procedura", desc: "Minimum dokumentów, szybkie wnioskowanie." },
    { title: "Indywidualne podejście", desc: "Dobór oferty dopasowanej do Twojej sytuacji." },
  ],
  steps: [
    {
      number: "01",
      title: "Kontakt",
      desc: "Skontaktuj się z nami telefonicznie, mailowo lub przez formularz.",
    },
    {
      number: "02",
      title: "Analiza potrzeb",
      desc: "Sprawdzamy Twoją sytuację i dobieramy odpowiednią ofertę.",
    },
    { number: "03", title: "Decyzja", desc: "Otrzymujesz decyzję kredytową - nawet w 24h." },
    {
      number: "04",
      title: "Wypłata środków",
      desc: "Po podpisaniu umowy środki trafiają na Twoje konto.",
    },
  ],
  faq: [
    { question: "Na co mogę przeznaczyć kredyt gotówkowy?", answer: "Odpowiedź: wkrótce" },
    { question: "Jak szybko otrzymam środki?", answer: "Odpowiedź: wkrótce" },
    { question: "Jakie dokumenty są potrzebne?", answer: "Odpowiedź: wkrótce" },
    { question: "Czy mogę spłacić kredyt wcześniej?", answer: "Odpowiedź: wkrótce" },
  ],
  cta_text: "Skontaktuj się z nami - doradzimy!",
  related_products: [{ name: "Kredyt hipoteczny", url: "/kredyty-osobiste/hipoteczny" }],
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
