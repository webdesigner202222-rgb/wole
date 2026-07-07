import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CreditProductTemplate, type CreditProductData } from "@/components/credit-product-template"

export const metadata: Metadata = {
  title: "Dystrybucja i sprzedaż magazynów energii | Broker Kredytowy",
  description:
    "Dystrybucja oraz sprzedaż nowoczesnych magazynów energii. Wsparcie i finansowanie dla partnerów handlowych.",
}

const data: CreditProductData = {
  breadcrumbs: [
    { label: "Strona główna", href: "/" },
    { label: "Inwestycje i nieruchomości", href: "/inwestycje-i-nieruchomosci" },
    { label: "Fotowoltaika", href: "/inwestycje-i-nieruchomosci/fotowoltaika" },
    {
      label: "Dystrybucja magazynów energii",
      href: "/inwestycje-i-nieruchomosci/fotowoltaika/dystrybucja-magazynow-energii",
    },
  ],
  category_label: "Dystrybucja magazynów energii",
  headline: "Dystrybucja i sprzedaż\nmagazynów energii",
  description:
    "Dystrybucja oraz sprzedaż nowoczesnych magazynów energii. Oferujemy wsparcie i finansowanie dla partnerów.",
  hero_checklist: [
    "Nowoczesne magazyny energii",
    "Wsparcie dla partnerów handlowych",
    "Finansowanie zakupu",
  ],
  hero_image_url: "/images/inwestycje/fotowoltaika-dystrybucja.png",
  for_whom_intro:
    "Oferta dla firm zainteresowanych dystrybucją i sprzedażą magazynów energii.",
  for_whom_points: ["Instalatorzy OZE", "Firmy handlowe", "Partnerzy dystrybucyjni", "Inwestorzy"],
  benefits: [
    { title: "Sprawdzone produkty", desc: "Nowoczesne magazyny energii od zaufanych producentów." },
    { title: "Atrakcyjne warunki", desc: "Konkurencyjne ceny dla partnerów handlowych." },
    { title: "Finansowanie zakupu", desc: "Wspieramy finansowo rozwój Twojej działalności." },
    { title: "Wsparcie techniczne", desc: "Pomoc na etapie sprzedaży i wdrożenia." },
    { title: "Szkolenia", desc: "Przygotujemy Twój zespół do sprzedaży." },
    { title: "Stała współpraca", desc: "Budujemy długofalowe relacje z partnerami." },
  ],
  steps: [
    { number: "01", title: "Kontakt", desc: "Odezwij się do nas i poznaj naszą ofertę." },
    { number: "02", title: "Analiza potrzeb", desc: "Ustalamy zakres współpracy i finansowania." },
    { number: "03", title: "Warunki współpracy", desc: "Przedstawiamy warunki handlowe." },
    { number: "04", title: "Start współpracy", desc: "Rozpoczynamy współpracę i dostawy." },
  ],
  faq: [
    { question: "Jakie magazyny energii oferujecie?", answer: "Odpowiedź: wkrótce" },
    { question: "Jak zostać partnerem handlowym?", answer: "Odpowiedź: wkrótce" },
    { question: "Czy oferujecie finansowanie zakupu?", answer: "Odpowiedź: wkrótce" },
    { question: "Czy zapewniacie wsparcie techniczne?", answer: "Odpowiedź: wkrótce" },
  ],
  cta_text: "Skontaktuj się z nami – doradzimy!",
  related_products: [
    {
      name: "Projekty fotowoltaiczne i magazyny energii",
      url: "/inwestycje-i-nieruchomosci/fotowoltaika/projekty-i-magazyny-energii",
    },
    { name: "Nieruchomości komercyjne", url: "/inwestycje-i-nieruchomosci/nieruchomosci-komercyjne" },
    { name: "Biznesplany", url: "/inwestycje-i-nieruchomosci/biznesplany" },
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
