export type NavSubItem = {
  label: string
  children?: string[]
}

export type NavItem = {
  label: string
  href: string
  columns?: NavSubItem[]
}

export const navItems: NavItem[] = [
  {
    label: "Kredyty firmowe",
    href: "#kredyty-firmowe",
    columns: [
      { label: "Kredyty obrotowe" },
      { label: "Kredyty inwestycyjne" },
      { label: "Kredyty deweloperskie" },
      { label: "Kredyty w rachunku bieżącym" },
      { label: "Faktoring" },
      { label: "Leasing" },
      { label: "Fundusze pożyczkowe" },
    ],
  },
  {
    label: "Kredyty osobiste",
    href: "#kredyty-osobiste",
    columns: [{ label: "Kredyty gotówkowe" }, { label: "Kredyty hipoteczne" }],
  },
  {
    label: "Inwestycje i nieruchomości",
    href: "#inwestycje",
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
  { label: "O nas", href: "#o-nas" },
  { label: "Kontakt", href: "#kontakt" },
]
