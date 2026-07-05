import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CreditProductTemplate, type CreditProductData } from "@/components/credit-product-template"

export const metadata: Metadata = {
  title: "Kredyty inwestycyjne dla firm | Broker Kredytowy",
  description:
    "Finansowanie długoterminowych inwestycji w rozwój firmy - maszyny, sprzęt, nieruchomości czy nowe linie produkcyjne. Do 10 mln zł, nawet na 15 lat.",
}

const data: CreditProductData = {
  breadcrumbs: [
    { label: "Strona główna", href: "/" },
    { label: "Kredyty firmowe", href: "/kredyty-firmowe" },
    { label: "Kredyt inwestycyjny", href: "/kredyty-firmowe/inwestycyjny" },
  ],
  category_label: "Kredyty inwestycyjne",
  headline: "Kredyty inwestycyjne dla firm",
  description:
    "Finansowanie długoterminowych inwestycji w rozwój firmy - maszyny, sprzęt, nieruchomości czy nowe linie produkcyjne.",
  hero_image_url: "/images/kredyty/kredyt-inwestycyjny.png",
  hero_checklist: ["Finansowanie do 10 mln zł", "Okres kredytowania do 15 lat", "Karencja w spłacie kapitału"],
  for_whom_intro:
    "Kredyty inwestycyjne są dla firm planujących rozwój, rozbudowę mocy produkcyjnych lub zakup nowego majątku trwałego.",
  for_whom_points: ["Firmy produkcyjne", "Firmy usługowe", "Firmy handlowe", "Spółki inwestycyjne"],
  benefits: [
    { title: "Długi okres spłaty", desc: "Nawet do 15 lat, dopasowany do cyklu zwrotu inwestycji." },
    { title: "Karencja w spłacie", desc: "Możliwość odroczenia pierwszych rat kapitałowych." },
    { title: "Finansowanie do 10 mln zł", desc: "Wysokie kwoty na poważne projekty inwestycyjne." },
    { title: "Elastyczne zabezpieczenia", desc: "Dopasowane do rodzaju i skali inwestycji." },
    { title: "Wsparcie doradcy", desc: "Pomoc w przygotowaniu biznesplanu inwestycji." },
    { title: "Minimum formalności", desc: "Prosty proces, ograniczona dokumentacja." },
  ],
  steps: [
    { number: "01", title: "Kontakt", desc: "Odezwij się do nas i opowiedz o planowanej inwestycji." },
    { number: "02", title: "Analiza projektu", desc: "Oceniamy rentowność i finansowanie inwestycji." },
    { number: "03", title: "Decyzja", desc: "Otrzymujesz decyzję kredytową wraz z warunkami." },
    {
      number: "04",
      title: "Realizacja inwestycji",
      desc: "Środki trafiają na konto zgodnie z harmonogramem inwestycji.",
    },
  ],
  faq: [
    { question: "Jaki jest maksymalny okres kredytowania?", answer: "Odpowiedź: wkrótce" },
    { question: "Czy mogę uzyskać karencję w spłacie?", answer: "Odpowiedź: wkrótce" },
    { question: "Jakie zabezpieczenia są wymagane?", answer: "Odpowiedź: wkrótce" },
    { question: "Czy potrzebuję biznesplanu?", answer: "Odpowiedź: wkrótce" },
  ],
  cta_text: "Skontaktuj się z nami - doradzimy!",
  related_products: [
    { name: "Kredyty obrotowe", url: "/kredyty-firmowe/obrotowy" },
    { name: "Kredyty deweloperskie", url: "/kredyty-firmowe/deweloperski" },
    { name: "Leasing", url: "/kredyty-firmowe/leasing" },
    { name: "Fundusze pożyczkowe", url: "/kredyty-firmowe/fundusze-pozyczkowe" },
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
