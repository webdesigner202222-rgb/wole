import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CreditProductTemplate, type CreditProductData } from "@/components/credit-product-template"

export const metadata: Metadata = {
  title: "Nieruchomości komercyjne | Broker Kredytowy",
  description:
    "Finansowanie hal, biurowców, centrów handlowych i hoteli na terenie całej Polski. Kompleksowe wsparcie inwestycji komercyjnych.",
}

const data: CreditProductData = {
  breadcrumbs: [
    { label: "Strona główna", href: "/" },
    { label: "Inwestycje i nieruchomości", href: "/inwestycje-i-nieruchomosci" },
    { label: "Nieruchomości komercyjne", href: "/inwestycje-i-nieruchomosci/nieruchomosci-komercyjne" },
  ],
  category_label: "Nieruchomości komercyjne",
  headline: "Nieruchomości komercyjne",
  description:
    "Finansowanie hal, biurowców, centrów handlowych i hoteli na terenie całej Polski. Wspieramy inwestycje komercyjne na każdym etapie.",
  hero_checklist: [
    "Finansowanie inwestycji komercyjnych",
    "Zasięg ogólnopolski",
    "Indywidualne warunki dla każdej inwestycji",
  ],
  hero_image_url: "/images/inwestycje/nieruchomosci-komercyjne.png",
  for_whom_intro:
    "Oferta dla inwestorów i firm planujących zakup lub budowę nieruchomości komercyjnych.",
  for_whom_points: ["Inwestorzy", "Deweloperzy", "Firmy produkcyjne", "Sieci handlowe i hotelowe"],
  benefits: [
    { title: "Wysokie kwoty finansowania", desc: "Środki dopasowane do skali inwestycji." },
    { title: "Elastyczne warunki", desc: "Harmonogram spłat dostosowany do projektu." },
    { title: "Zasięg ogólnopolski", desc: "Finansujemy inwestycje w całej Polsce." },
    { title: "Indywidualne podejście", desc: "Opiekun, który zna specyfikę Twojej inwestycji." },
    { title: "Wsparcie na każdym etapie", desc: "Od analizy po uruchomienie środków." },
    { title: "Minimum formalności", desc: "Prowadzimy Cię przez cały proces." },
  ],
  steps: [
    { number: "01", title: "Kontakt", desc: "Odezwij się do nas i opowiedz o swojej inwestycji." },
    { number: "02", title: "Analiza potrzeb", desc: "Sprawdzamy założenia projektu i dobieramy rozwiązanie." },
    { number: "03", title: "Decyzja", desc: "Otrzymujesz decyzję kredytową." },
    { number: "04", title: "Uruchomienie środków", desc: "Po podpisaniu umowy uruchamiamy finansowanie." },
  ],
  faq: [
    { question: "Jakie nieruchomości komercyjne finansujecie?", answer: "Odpowiedź: wkrótce" },
    { question: "Jaka jest maksymalna kwota finansowania?", answer: "Odpowiedź: wkrótce" },
    { question: "Jakie dokumenty są potrzebne?", answer: "Odpowiedź: wkrótce" },
    { question: "Czy finansujecie inwestycje w całej Polsce?", answer: "Odpowiedź: wkrótce" },
  ],
  cta_text: "Skontaktuj się z nami – doradzimy!",
  related_products: [
    { name: "Biznesplany", url: "/inwestycje-i-nieruchomosci/biznesplany" },
    { name: "Domki modułowe", url: "/inwestycje-i-nieruchomosci/domki-modulowe" },
    { name: "Fotowoltaika", url: "/inwestycje-i-nieruchomosci/fotowoltaika" },
    { name: "Kredyt deweloperski", url: "/kredyty-firmowe/deweloperski" },
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
