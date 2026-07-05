import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CreditProductTemplate, type CreditProductData } from "@/components/credit-product-template"

export const metadata: Metadata = {
  title: "Leasing dla firm | Broker Kredytowy",
  description:
    "Sfinansuj pojazdy, maszyny i sprzęt bez angażowania własnego kapitału - z korzystnymi warunkami podatkowymi. Finansowanie do 100% wartości przedmiotu.",
}

const data: CreditProductData = {
  breadcrumbs: [
    { label: "Strona główna", href: "/" },
    { label: "Kredyty firmowe", href: "/kredyty-firmowe" },
    { label: "Leasing", href: "/kredyty-firmowe/leasing" },
  ],
  category_label: "Leasing",
  headline: "Leasing dla firm",
  description:
    "Sfinansuj pojazdy, maszyny i sprzęt bez angażowania własnego kapitału - z korzystnymi warunkami podatkowymi.",
  hero_image_url: "/images/kredyty/leasing.png",
  hero_checklist: [
    "Finansowanie do 100% wartości przedmiotu",
    "Korzyści podatkowe dla firmy",
    "Szybka procedura, minimum formalności",
  ],
  for_whom_intro:
    "Leasing jest dla firm, które chcą sfinansować pojazdy, maszyny lub sprzęt bez obciążania płynności finansowej.",
  for_whom_points: ["Firmy transportowe", "Firmy produkcyjne", "Firmy budowlane", "Jednoosobowe działalności"],
  benefits: [
    { title: "Finansowanie do 100% wartości", desc: "Bez konieczności wkładu własnego." },
    { title: "Korzyści podatkowe", desc: "Raty leasingowe jako koszt uzyskania przychodu." },
    { title: "Szeroki zakres przedmiotów", desc: "Pojazdy, maszyny, urządzenia i sprzęt firmowy." },
    { title: "Elastyczny okres umowy", desc: "Dopasowany do cyklu użytkowania przedmiotu." },
    { title: "Szybka decyzja", desc: "Sprawna procedura bez zbędnych formalności." },
    { title: "Opcja wykupu", desc: "Możliwość wykupu przedmiotu po zakończeniu umowy." },
  ],
  steps: [
    { number: "01", title: "Kontakt", desc: "Powiedz nam, jaki przedmiot chcesz sfinansować." },
    { number: "02", title: "Analiza", desc: "Dobieramy najlepszy wariant leasingu dla Twojej firmy." },
    { number: "03", title: "Decyzja", desc: "Otrzymujesz decyzję i warunki umowy leasingowej." },
    { number: "04", title: "Odbiór przedmiotu", desc: "Podpisujesz umowę i odbierasz sfinansowany przedmiot." },
  ],
  faq: [
    { question: "Czym różni się leasing operacyjny od finansowego?", answer: "Odpowiedź: wkrótce" },
    { question: "Czy mogę wykupić przedmiot po zakończeniu umowy?", answer: "Odpowiedź: wkrótce" },
    { question: "Jakie przedmioty mogę sfinansować leasingiem?", answer: "Odpowiedź: wkrótce" },
    { question: "Jakie dokumenty są potrzebne?", answer: "Odpowiedź: wkrótce" },
  ],
  cta_text: "Skontaktuj się z nami - doradzimy!",
  related_products: [
    { name: "Kredyty obrotowe", url: "/kredyty-firmowe/obrotowy" },
    { name: "Kredyty inwestycyjne", url: "/kredyty-firmowe/inwestycyjny" },
    { name: "Faktoring", url: "/kredyty-firmowe/faktoring" },
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
