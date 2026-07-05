import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CreditProductTemplate, type CreditProductData } from "@/components/credit-product-template"

export const metadata: Metadata = {
  title: "Kredyt w rachunku bieżącym | Broker Kredytowy",
  description:
    "Elastyczny limit odnawialny na koncie firmowym - dostęp do dodatkowych środków dokładnie wtedy, gdy ich potrzebujesz. Odsetki tylko od wykorzystanej kwoty.",
}

const data: CreditProductData = {
  breadcrumbs: [
    { label: "Strona główna", href: "/" },
    { label: "Kredyty firmowe", href: "/kredyty-firmowe" },
    { label: "Kredyt w rachunku bieżącym", href: "/kredyty-firmowe/w-rachunku-biezacym" },
  ],
  category_label: "Kredyt w rachunku bieżącym",
  headline: "Kredyt w rachunku bieżącym",
  description:
    "Elastyczny limit odnawialny na koncie firmowym - dostęp do dodatkowych środków dokładnie wtedy, gdy ich potrzebujesz.",
  hero_image_url: "/images/kredyty/kredyt-w-rachunku-biezacym.png",
  hero_checklist: [
    "Odnawialny limit na koncie firmowym",
    "Odsetki tylko od wykorzystanej kwoty",
    "Dostęp do środków 24/7",
  ],
  for_whom_intro:
    "Kredyt w rachunku bieżącym jest dla firm, które potrzebują elastycznego bufora finansowego na bieżące wydatki.",
  for_whom_points: ["Firmy handlowe", "Firmy usługowe", "Firmy sezonowe", "Jednoosobowe działalności"],
  benefits: [
    { title: "Odnawialny limit", desc: "Po spłacie środki od razu dostępne ponownie." },
    {
      title: "Płacisz tylko za wykorzystane środki",
      desc: "Odsetki naliczane wyłącznie od wykorzystanej kwoty.",
    },
    { title: "Szybki dostęp do gotówki", desc: "Środki dostępne od ręki, bez dodatkowych wniosków." },
    { title: "Brak sztywnego harmonogramu spłat", desc: "Spłacasz limit w dogodnym dla siebie tempie." },
    { title: "Roczne odnawianie umowy", desc: "Prosty proces przedłużenia limitu." },
    { title: "Minimum formalności", desc: "Szybka i uproszczona procedura." },
  ],
  steps: [
    { number: "01", title: "Kontakt", desc: "Odezwij się do nas i opowiedz o swoich potrzebach finansowych." },
    { number: "02", title: "Analiza potrzeb", desc: "Ustalamy optymalną wysokość limitu dla Twojej firmy." },
    { number: "03", title: "Decyzja", desc: "Otrzymujesz decyzję o przyznaniu limitu." },
    { number: "04", title: "Aktywacja limitu", desc: "Limit zostaje uruchomiony na Twoim koncie firmowym." },
  ],
  faq: [
    { question: "Jak działa odnawialny limit?", answer: "Odpowiedź: wkrótce" },
    { question: "Czy płacę odsetki od całego limitu?", answer: "Odpowiedź: wkrótce" },
    { question: "Jak długo trwa umowa?", answer: "Odpowiedź: wkrótce" },
    { question: "Jak mogę zwiększyć limit?", answer: "Odpowiedź: wkrótce" },
  ],
  cta_text: "Skontaktuj się z nami - doradzimy!",
  related_products: [
    { name: "Kredyty obrotowe", url: "/kredyty-firmowe/obrotowy" },
    { name: "Faktoring", url: "/kredyty-firmowe/faktoring" },
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
