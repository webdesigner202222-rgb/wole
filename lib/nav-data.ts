export type NavChild = {
  label: string
  href: string
}

export type NavSubItem = {
  label: string
  /** Direct link for simple items. Omit for group headers with children. */
  href?: string
  /** Clickable sub-links rendered under a bold, non-clickable group header. */
  children?: NavChild[]
}

export type NavItem = {
  label: string
  /** Direct link. Omit for dropdown-only items (parent label is not clickable). */
  href?: string
  columns?: NavSubItem[]
}

export const navItems: NavItem[] = [
  {
    label: "Kredyty firmowe",
    columns: [
      { label: "Kredyty obrotowe", href: "/kredyty-firmowe/obrotowy" },
      { label: "Kredyty inwestycyjne", href: "/kredyty-firmowe/inwestycyjny" },
      { label: "Kredyty deweloperskie", href: "/kredyty-firmowe/deweloperski" },
      { label: "Kredyty w rachunku bieżącym", href: "/kredyty-firmowe/w-rachunku-biezacym" },
      { label: "Faktoring", href: "/kredyty-firmowe/faktoring" },
      { label: "Leasing", href: "/kredyty-firmowe/leasing" },
      { label: "Fundusze pożyczkowe", href: "/kredyty-firmowe/fundusze-pozyczkowe" },
    ],
  },
  {
    label: "Kredyty osobiste",
    columns: [
      { label: "Kredyty gotówkowe", href: "/kredyty-osobiste/gotowkowy" },
      { label: "Kredyty hipoteczne", href: "/kredyty-osobiste/hipoteczny" },
    ],
  },
  {
    label: "Inwestycje i nieruchomości",
    columns: [
      {
        label: "Projekty farm fotowoltaicznych",
        children: [
          {
            label: "Projekty fotowoltaiczne i magazynów energii",
            href: "/inwestycje-i-nieruchomosci/fotowoltaika?tab=projekty-magazyny",
          },
          {
            label: "Dystrybucja i sprzedaż magazynów energii",
            href: "/inwestycje-i-nieruchomosci/fotowoltaika?tab=dystrybucja-sprzedaz",
          },
        ],
      },
      {
        label: "Sprzedaż domków modułowych",
        children: [
          {
            label: "Stan deweloperski",
            href: "/inwestycje-i-nieruchomosci/domki-modulowe?tab=stan-deweloperski",
          },
          {
            label: "Stan wykończenia pod klucz (z wyposażeniem)",
            href: "/inwestycje-i-nieruchomosci/domki-modulowe?tab=pod-klucz",
          },
          {
            label: "Obiekty modułowe handlowo-usługowe",
            href: "/inwestycje-i-nieruchomosci/domki-modulowe?tab=obiekty-uslugowe",
          },
        ],
      },
      {
        label: "Projektowanie",
        children: [
          { label: "Hale", href: "/inwestycje-i-nieruchomosci/domki-modulowe/projektowanie?tab=hale" },
          { label: "Biura", href: "/inwestycje-i-nieruchomosci/domki-modulowe/projektowanie?tab=biura" },
          { label: "Osiedla", href: "/inwestycje-i-nieruchomosci/domki-modulowe/projektowanie?tab=osiedla" },
        ],
      },
      {
        label: "Sprzedaż nieruchomości komercyjnych / deweloperskich",
        href: "/inwestycje-i-nieruchomosci/sprzedaz-nieruchomosci-komercyjnych",
      },
      {
        label: "Tworzenie biznesplanów",
        href: "/inwestycje-i-nieruchomosci/biznesplany",
      },
    ],
  },
  { label: "O nas", href: "/#o-nas" },
  { label: "Kontakt", href: "/#kontakt" },
]
