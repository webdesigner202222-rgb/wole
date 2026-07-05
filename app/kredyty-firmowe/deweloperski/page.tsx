import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CreditProductTemplate, type CreditProductData } from "@/components/credit-product-template"

export const metadata: Metadata = {
  title: "Kredyty deweloperskie | Broker Kredytowy",
  description:
    "Finansowanie budowy osiedli, biurowców i innych projektów deweloperskich - od zakupu gruntu po realizację inwestycji. Transze dopasowane do harmonogramu budowy.",
}

const data: CreditProductData = {
  breadcrumbs: [
    { label: "Strona główna", href: "/" },
    { label: "Kredyty firmowe", href: "/kredyty-firmowe" },
    { label: "Kredyt deweloperski", href: "/kredyty-firmowe/deweloperski" },
  ],
  category_label: "Kredyty deweloperskie",
  headline: "Kredyty deweloperskie",
  description:
    "Finansowanie budowy osiedli, biurowców i innych projektów deweloperskich - od zakupu gruntu po realizację inwestycji.",
  hero_image_url: "/images/kredyty/kredyt-deweloperski.png",
  hero_checklist: [
    "Finansowanie zakupu gruntu i budowy",
    "Transze dopasowane do harmonogramu budowy",
    "Wsparcie na każdym etapie inwestycji",
  ],
  for_whom_intro:
    "Kredyty deweloperskie są dla firm realizujących projekty budowlane - mieszkaniowe, komercyjne i mieszane.",
  for_whom_points: ["Deweloperzy mieszkaniowi", "Deweloperzy komercyjni", "Firmy budowlane", "Spółki celowe (SPV)"],
  benefits: [
    { title: "Finansowanie etapowe", desc: "Wypłata transzy zgodnie z postępem budowy." },
    { title: "Wysokie kwoty finansowania", desc: "Dopasowane do skali projektu deweloperskiego." },
    { title: "Opiekun projektu", desc: "Stały kontakt z doradcą przez cały czas realizacji." },
    { title: "Elastyczne warunki spłaty", desc: "Dostosowane do sprzedaży lokali/powierzchni." },
    { title: "Wsparcie prawne i formalne", desc: "Pomoc w kompletowaniu dokumentacji inwestycyjnej." },
    { title: "Szybka ścieżka decyzyjna", desc: "Sprawna analiza nawet przy dużych projektach." },
  ],
  steps: [
    { number: "01", title: "Kontakt", desc: "Przedstaw nam swój projekt deweloperski." },
    { number: "02", title: "Analiza projektu", desc: "Weryfikujemy dokumentację i harmonogram inwestycji." },
    { number: "03", title: "Decyzja", desc: "Otrzymujesz decyzję kredytową i harmonogram transz." },
    { number: "04", title: "Wypłata transz", desc: "Środki wypłacane etapami zgodnie z postępem budowy." },
  ],
  faq: [
    { question: "Jakie dokumenty są potrzebne przy projekcie deweloperskim?", answer: "Odpowiedź: wkrótce" },
    { question: "Jak wygląda wypłata w transzach?", answer: "Odpowiedź: wkrótce" },
    { question: "Czy finansujecie zakup gruntu?", answer: "Odpowiedź: wkrótce" },
    { question: "Jakie zabezpieczenie jest wymagane?", answer: "Odpowiedź: wkrótce" },
  ],
  cta_text: "Skontaktuj się z nami - doradzimy!",
  related_products: [
    { name: "Kredyty inwestycyjne", url: "/kredyty-firmowe/inwestycyjny" },
    { name: "Kredyty obrotowe", url: "/kredyty-firmowe/obrotowy" },
    { name: "Fundusze pożyczkowe", url: "/kredyty-firmowe/fundusze-pozyczkowe" },
    { name: "Faktoring", url: "/kredyty-firmowe/faktoring" },
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
