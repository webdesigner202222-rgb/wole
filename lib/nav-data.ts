export type NavSubItem = {
  label: string
  href?: string
  children?: string[]
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
      { label: "Projekty farm fotowoltaicznych" },
      { label: "Projekty fotowoltaiczne i magazynów energii" },
      { label: "Dystrybucja i sprzedaż magazynów energii" },
      {
        label: "Sprzedaż domków modułowych",
        children: [
          "Stan deweloperski",
          "Stan wykończenia pod klucz (z wyposażeniem)",
          "Obiekty modułowe handlowo-usługowe",
        ],
      },
      {
        label: "Projektowanie",
        children: ["Hale", "Biura", "Osiedla"],
      },
      { label: "Sprzedaż nieruchomości komercyjnych / deweloperskich" },
      { label: "Tworzenie biznesplanów" },
    ],
  },
  { label: "O nas", href: "/#o-nas" },
  { label: "Kontakt", href: "/#kontakt" },
]
