"use client"

import Image from "next/image"
import { useState } from "react"
import { ChevronRight, MapPin, Phone, Mail } from "lucide-react"

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.64h.05c.53-1 1.83-2.06 3.76-2.06C20.4 8.58 22 10.9 22 14.4V21h-4v-5.86c0-1.4-.03-3.2-1.95-3.2-1.95 0-2.25 1.52-2.25 3.1V21H9z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
    </svg>
  )
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.6 12 3.6 12 3.6s-7.6 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.8.5 9.4.5 9.4.5s7.6 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.2 3.6z" />
    </svg>
  )
}

const OFERTA = [
  { label: "Kredyty firmowe", href: "/kredyty-firmowe" },
  { label: "Kredyty osobiste", href: "/kredyty-osobiste" },
  { label: "Inwestycje i nieruchomości", href: "/inwestycje-i-nieruchomosci" },
]

const NOTY_PRAWNE = [
  { label: "Akcjonariat", href: "#" },
  { label: "Walne Zgromadzenia", href: "#" },
  { label: "Polityka prywatności", href: "#" },
]

const KONTAKT = [
  { label: "O firmie", href: "/#o-nas" },
  { label: "Kontakt", href: "/#kontakt" },
]

/* "Inwestycje i nieruchomości" column: bold non-clickable group headers
   with indented, dash-prefixed clickable sub-links (deep links via ?tab=). */
type InwestycjeGroup = {
  header?: string
  links: { label: string; href: string }[]
}

const INWESTYCJE_GROUPS: InwestycjeGroup[] = [
  {
    header: "Projekty farm fotowoltaicznych",
    links: [
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
    header: "Sprzedaż domków modułowych",
    links: [
      { label: "Stan deweloperski", href: "/inwestycje-i-nieruchomosci/domki-modulowe?tab=stan-deweloperski" },
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
    header: "Projektowanie",
    links: [
      { label: "Hale", href: "/inwestycje-i-nieruchomosci/domki-modulowe/projektowanie?tab=hale" },
      { label: "Biura", href: "/inwestycje-i-nieruchomosci/domki-modulowe/projektowanie?tab=biura" },
      { label: "Osiedla", href: "/inwestycje-i-nieruchomosci/domki-modulowe/projektowanie?tab=osiedla" },
    ],
  },
  {
    links: [
      {
        label: "Sprzedaż nieruchomości komercyjnych / deweloperskich",
        href: "/inwestycje-i-nieruchomosci/sprzedaz-nieruchomosci-komercyjnych",
      },
      { label: "Tworzenie biznesplanów", href: "/inwestycje-i-nieruchomosci/biznesplany" },
    ],
  },
]

function LinkColumn({
  title,
  links,
}: {
  title: string
  links: { label: string; href: string }[]
}) {
  return (
    <div>
      <h3 className="text-sm font-bold tracking-[0.18em] text-[#1b2945]">{title}</h3>
      <span aria-hidden="true" className="mt-4 block h-0.5 w-10 bg-[#b8974f]" />
      <ul className="mt-6 flex flex-col">
        {links.map((link) => (
          <li key={link.label} className="border-b border-[#b8974f]/20 last:border-b-0">
            <a
              href={link.href}
              className="group flex items-center justify-between py-4 text-[15px] text-[#4a5266] transition-colors hover:text-[#b8974f]"
            >
              <span>{link.label}</span>
              <ChevronRight className="h-4 w-4 shrink-0 text-[#b8974f] transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

function GroupedLinkColumn({ title, groups }: { title: string; groups: InwestycjeGroup[] }) {
  return (
    <div>
      <h3 className="text-sm font-bold tracking-[0.18em] text-[#1b2945]">{title}</h3>
      <span aria-hidden="true" className="mt-4 block h-0.5 w-10 bg-[#b8974f]" />
      <div className="mt-6 flex flex-col gap-5">
        {groups.map((group, gi) => (
          <div key={group.header ?? `group-${gi}`}>
            {group.header && (
              <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-[#1b2945]">{group.header}</p>
            )}
            <ul className={`flex flex-col gap-1.5 ${group.header ? "mt-2 pl-3" : ""}`}>
              {group.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group flex items-start gap-2 text-sm text-[#4a5266] transition-colors hover:text-[#b8974f]"
                  >
                    <span aria-hidden="true" className="mt-2.5 h-px w-3 shrink-0 bg-[#b8974f]/70" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-12 w-12 items-center justify-center rounded-full border border-[#b8974f]/60 text-[#b8974f] transition-all duration-300 hover:border-[#b8974f] hover:bg-[#b8974f] hover:text-white"
    >
      {children}
    </a>
  )
}

function BackToTop() {
  const [hover, setHover] = useState(false)

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div
      className="absolute right-8 top-10 z-20 hidden md:block"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Tooltip */}
      <span
        role="tooltip"
        className={`pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap rounded-md border border-[#b8974f]/40 bg-[#faf7f0] px-3 py-1.5 text-xs font-medium text-[#1b2945] shadow-[0_6px_18px_-10px_rgba(26,35,64,0.4)] transition-opacity duration-300 ${
          hover ? "opacity-100" : "opacity-0"
        }`}
      >
        Wróć na górę
      </span>
      <button
        type="button"
        onClick={scrollTop}
        aria-label="Wróć na górę"
        className="block text-[#b8974f] transition-transform duration-300 hover:scale-110"
      >
        <svg viewBox="0 0 24 20" fill="none" aria-hidden="true" className="h-6 w-6">
          <path
            d="M12 2 L22 18 L2 18 Z"
            stroke="currentColor"
            strokeWidth={hover ? 2.2 : 1.6}
            strokeLinejoin="round"
            className="transition-[stroke-width] duration-300"
          />
        </svg>
      </button>
    </div>
  )
}

function DotGrid({ className, cols = 5, rows = 5 }: { className?: string; cols?: number; rows?: number }) {
  return (
    <div
      aria-hidden="true"
      className={`grid gap-2.5 ${className ?? ""}`}
      style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
    >
      {Array.from({ length: cols * rows }).map((_, i) => (
        <span key={i} className="h-1.5 w-1.5 rounded-full bg-[#b8974f]/35" />
      ))}
    </div>
  )
}

function Decorations() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1720 780"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
    >
      {/* Large dashed arc, top-left */}
      <circle cx="30" cy="240" r="210" stroke="#b8974f" strokeOpacity="0.55" strokeWidth="1.5" strokeDasharray="2 8" />
      <circle cx="48" cy="200" r="6" fill="#b8974f" />
      {/* Mid dashed arc between Oferta and Noty prawne */}
      <circle cx="900" cy="620" r="150" stroke="#b8974f" strokeOpacity="0.3" strokeWidth="1.5" strokeDasharray="2 8" />
      <circle cx="1010" cy="510" r="5" fill="#b8974f" fillOpacity="0.7" />
      {/* Large dashed arc behind Kontakt column, right */}
      <circle cx="1690" cy="640" r="200" stroke="#b8974f" strokeOpacity="0.5" strokeWidth="1.5" strokeDasharray="2 8" />
      <circle cx="1525" cy="720" r="9" fill="#b8974f" fillOpacity="0.9" />
      <circle cx="1525" cy="720" r="14" stroke="#b8974f" strokeOpacity="0.45" strokeWidth="1" />
      {/* Outline circles scattered */}
      <circle cx="1360" cy="130" r="14" stroke="#b8974f" strokeOpacity="0.6" strokeWidth="1.5" />
      <circle cx="600" cy="120" r="9" stroke="#b8974f" strokeOpacity="0.5" strokeWidth="1.2" />
      <circle cx="1180" cy="700" r="11" stroke="#b8974f" strokeOpacity="0.45" strokeWidth="1.2" />
      {/* Filled dots */}
      <circle cx="760" cy="560" r="4" fill="#b8974f" fillOpacity="0.6" />
      <circle cx="1290" cy="500" r="5" fill="#b8974f" fillOpacity="0.7" />
      <circle cx="470" cy="660" r="4" fill="#b8974f" fillOpacity="0.55" />
      {/* Outline triangles at various angles */}
      <path d="M540 470 L552 490 L528 490 Z" stroke="#b8974f" strokeOpacity="0.55" strokeWidth="1.3" strokeLinejoin="round" transform="rotate(18 540 480)" />
      <path d="M1150 200 L1162 220 L1138 220 Z" stroke="#b8974f" strokeOpacity="0.5" strokeWidth="1.3" strokeLinejoin="round" transform="rotate(-24 1150 210)" />
      <path d="M840 340 L852 360 L828 360 Z" stroke="#b8974f" strokeOpacity="0.45" strokeWidth="1.3" strokeLinejoin="round" transform="rotate(140 840 350)" />
    </svg>
  )
}

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-[#faf7f0]">
      <Decorations />
      <BackToTop />

      {/* Dot grids */}
      <DotGrid className="absolute left-4 top-16 hidden lg:grid" cols={4} rows={4} />
      <DotGrid className="absolute right-10 top-1/3 hidden lg:grid" cols={6} rows={4} />

      <div className="relative mx-auto max-w-[1720px] px-6 py-16 md:px-12 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_0.9fr_1.3fr_0.9fr_0.8fr] lg:gap-8">
          {/* Brand column */}
          <div className="flex flex-col">
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <Image src="/logo.png" alt="Broker Kredytowy" width={416} height={201} className="h-16 w-auto" />
              <p className="mt-4 text-xl font-bold tracking-[0.18em] text-[#1b2945]">BROKER KREDYTOWY</p>
              <p className="mt-1 text-xs font-medium tracking-[0.25em] text-[#b8974f]">DORADCA KREDYTOWY</p>
            </div>

            <p className="mt-6 max-w-xs text-[15px] leading-relaxed text-[#4a5266]">
              Pomagamy znaleźć najlepsze finansowanie dopasowane do Twoich potrzeb.
            </p>

            <ul className="mt-6 flex flex-col gap-4 text-[15px] text-[#4a5266]">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#b8974f]" />
                <span>ul. 11 Listopada 60, 43-300 Bielsko-Biała</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#b8974f]" />
                <span className="flex flex-col gap-1">
                  <a href="tel:+48723609936" className="transition-colors hover:text-[#b8974f]">
                    K. Benek: 723 609 936
                  </a>
                  <a href="tel:+48516423096" className="transition-colors hover:text-[#b8974f]">
                    A. Papla: 516 423 096
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#b8974f]" />
                <a href="mailto:kontakt@wiktoroli.com" className="transition-colors hover:text-[#b8974f]">
                  kontakt@wiktoroli.com
                </a>
              </li>
            </ul>

            <div className="mt-8 flex gap-4">
              <SocialLink href="#" label="Facebook">
                <FacebookIcon />
              </SocialLink>
              <SocialLink href="#" label="LinkedIn">
                <LinkedinIcon />
              </SocialLink>
              <SocialLink href="#" label="Instagram">
                <InstagramIcon />
              </SocialLink>
              <SocialLink href="#" label="YouTube">
                <YoutubeIcon />
              </SocialLink>
            </div>
          </div>

          {/* Link columns */}
          <LinkColumn title="OFERTA" links={OFERTA} />
          <GroupedLinkColumn title="INWESTYCJE I NIERUCHOMOŚCI" groups={INWESTYCJE_GROUPS} />
          <LinkColumn title="NOTY PRAWNE" links={NOTY_PRAWNE} />
          <LinkColumn title="KONTAKT" links={KONTAKT} />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-[#b8974f]/60">
        <DotGrid className="absolute bottom-2 right-6 hidden opacity-70 md:grid" cols={6} rows={3} />
        <div className="mx-auto flex max-w-[1720px] flex-col items-center justify-center gap-2 px-6 py-6 text-center text-sm text-[#4a5266] sm:flex-row sm:gap-6">
          <p>© {year} Broker Kredytowy. Wszelkie prawa zastrzeżone.</p>
          <span aria-hidden="true" className="hidden h-4 w-px bg-[#b8974f]/40 sm:block" />
          <p>KRS 0000733656</p>
        </div>
      </div>
    </footer>
  )
}
