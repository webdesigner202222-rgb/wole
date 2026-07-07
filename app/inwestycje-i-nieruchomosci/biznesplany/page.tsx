import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CreditProductTemplate, type CreditProductData } from "@/components/credit-product-template"

export const metadata: Metadata = {
  title: "Biznesplany | Broker Kredytowy",
  description:
    "Profesjonalne biznesplany dla Twojego przedsięwzięcia. Wsparcie w pozyskaniu finansowania i dotacji.",
}

const data: CreditProductData = {
  breadcrumbs: [
    { label: "Strona główna", href: "/" },
    { label: "Inwestycje i nieruchomości", href: "/inwestycje-i-nieruchomosci" },
    { label: "Biznesplany", href: "/inwestycje-i-nieruchomosci/biznesplany" },
  ],
  category_label: "Biznesplany",
  headline: "Profesjonalne biznesplany",
  description:
    "Przygotowujemy profesjonalne biznesplany dla Twojego przedsięwzięcia. Wspieramy w pozyskaniu finansowania i dotacji.",
  hero_checklist: [
    "Biznesplany pod finansowanie i dotacje",
    "Doświadczeni analitycy",
    "Indywidualne podejście do projektu",
  ],
  hero_image_url: "/images/inwestycje/biznesplany.png",
  for_whom_intro:
    "Oferta dla przedsiębiorców i firm, które potrzebują profesjonalnego biznesplanu.",
  for_whom_points: ["Startupy", "Firmy planujące rozwój", "Wnioskujący o dotacje", "Inwestorzy"],
  benefits: [
    { title: "Kompleksowe opracowanie", desc: "Analiza rynku, finanse i prognozy w jednym dokumencie." },
    { title: "Pod konkretny cel", desc: "Biznesplan dopasowany do banku lub instytucji dotacyjnej." },
    { title: "Doświadczeni analitycy", desc: "Zespół, który wie, na co zwracają uwagę instytucje." },
    { title: "Indywidualne podejście", desc: "Dokument dopasowany do Twojego przedsięwzięcia." },
    { title: "Wsparcie merytoryczne", desc: "Pomagamy w całym procesie przygotowania." },
    { title: "Terminowość", desc: "Realizacja w ustalonym harmonogramie." },
  ],
  steps: [
    { number: "01", title: "Kontakt", desc: "Odezwij się do nas i opowiedz o swoim przedsięwzięciu." },
    { number: "02", title: "Analiza potrzeb", desc: "Ustalamy cel biznesplanu i zakres opracowania." },
    { number: "03", title: "Opracowanie", desc: "Przygotowujemy kompletny biznesplan." },
    { number: "04", title: "Przekazanie dokumentu", desc: "Otrzymujesz gotowy biznesplan wraz ze wsparciem." },
  ],
  faq: [
    { question: "Do czego wykorzystam biznesplan?", answer: "Odpowiedź: wkrótce" },
    { question: "Ile trwa przygotowanie biznesplanu?", answer: "Odpowiedź: wkrótce" },
    { question: "Jakie informacje muszę dostarczyć?", answer: "Odpowiedź: wkrótce" },
    { question: "Czy pomagacie w pozyskaniu dotacji?", answer: "Odpowiedź: wkrótce" },
  ],
  cta_text: "Skontaktuj się z nami – doradzimy!",
  related_products: [
    { name: "Nieruchomości komercyjne", url: "/inwestycje-i-nieruchomosci/nieruchomosci-komercyjne" },
    { name: "Fotowoltaika", url: "/inwestycje-i-nieruchomosci/fotowoltaika" },
    { name: "Domki modułowe", url: "/inwestycje-i-nieruchomosci/domki-modulowe" },
    { name: "Kredyt inwestycyjny", url: "/kredyty-firmowe/inwestycyjny" },
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
