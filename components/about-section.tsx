"use client"

import Image from "next/image"
import { useState } from "react"

const PEOPLE = {
  krzysztof: {
    firstName: "KRZYSZTOF",
    lastName: "BENEK",
    role: "Menager ds. Klientów Strategicznych",
    email: "krzysztof.benek@wiktoroli.com",
    phone: "723609936",
    phoneDisplay: "723 609 936",
    img: "/images/man.png",
  },
  angelika: {
    firstName: "ANGELIKA",
    lastName: "PAPLA",
    role: "Doradca ds. Klientów Kluczowych",
    email: "angelika.papla@wiktoroli.com",
    phone: "516423096",
    phoneDisplay: "516 423 096",
    img: "/images/woman.png",
  },
} as const

type Person = (typeof PEOPLE)[keyof typeof PEOPLE]

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  )
}

function UsersIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

function ExpandingContact({
  href,
  label,
  text,
  align,
  children,
}: {
  href: string
  label: string
  text: string
  align: "left" | "right"
  children: React.ReactNode
}) {
  const [expanded, setExpanded] = useState(false)

  // Left-side badges expand to the right (icon first), right-side badges expand
  // to the left (icon last) so the revealed text always grows toward the center.
  const rowDir = align === "left" ? "flex-row" : "flex-row-reverse"

  return (
    <div
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      className={`flex h-12 items-center overflow-hidden rounded-full border bg-[#faf7f0] transition-colors duration-300 ease-out ${rowDir} ${
        expanded ? "border-[#b8974f] shadow-[0_6px_18px_-10px_rgba(26,35,64,0.35)]" : "border-[#b8974f]/70"
      }`}
    >
      <a
        href={href}
        aria-label={label}
        onFocus={() => setExpanded(true)}
        onBlur={() => setExpanded(false)}
        onClick={(e) => {
          // On touch devices there is no hover: the first tap reveals the text,
          // the second tap (already expanded) triggers the call / email.
          if (!expanded) {
            e.preventDefault()
            setExpanded(true)
          }
        }}
        className={`flex h-12 items-center focus-visible:outline-none ${rowDir}`}
      >
        <span className="flex h-12 w-12 shrink-0 items-center justify-center text-[#b8974f]">{children}</span>
        <span
          className={`whitespace-nowrap text-sm font-semibold tracking-[0.05em] text-[#1b2945] transition-all duration-300 ease-out ${
            expanded ? "max-w-[240px] px-2 opacity-100" : "max-w-0 px-0 opacity-0"
          }`}
        >
          {text}
        </span>
      </a>
      <button
        type="button"
        aria-label="Zamknij"
        tabIndex={expanded ? 0 : -1}
        onClick={() => setExpanded(false)}
        className={`flex h-12 shrink-0 items-center justify-center text-[#9aa0ac] transition-all duration-300 ease-out hover:text-[#1b2945] focus-visible:outline-none ${
          expanded ? "w-9 opacity-100" : "pointer-events-none w-0 opacity-0"
        }`}
      >
        <CloseIcon />
      </button>
    </div>
  )
}

function ContactIcons({ person, align = "left" }: { person: Person; align?: "left" | "right" }) {
  const itemAlign = align === "left" ? "items-start" : "items-end"
  // Keep the vertical connectors/dot centered under the fixed 48px icon on either side.
  const lineOffset = align === "left" ? "ml-6" : "mr-6"
  const dotOffset = align === "left" ? "ml-[21px]" : "mr-[21px]"
  return (
    <div className={`flex flex-col ${itemAlign}`}>
      <ExpandingContact
        href={`tel:+48${person.phone}`}
        label={`Zadzwoń: ${person.phoneDisplay}`}
        text={person.phoneDisplay}
        align={align}
      >
        <PhoneIcon />
      </ExpandingContact>
      <span aria-hidden="true" className={`${lineOffset} h-7 w-px border-l border-dotted border-[#b8974f]/70`} />
      <ExpandingContact
        href={`mailto:${person.email}`}
        label={`Napisz email: ${person.email}`}
        text={person.email}
        align={align}
      >
        <MailIcon />
      </ExpandingContact>
      <span aria-hidden="true" className={`${lineOffset} h-5 w-px border-l border-dotted border-[#b8974f]/70`} />
      <span aria-hidden="true" className={`${dotOffset} h-1.5 w-1.5 rounded-full bg-[#b8974f]/70`} />
    </div>
  )
}

function NameBlock({ person, align }: { person: Person; align: "left" | "right" }) {
  const alignCls = align === "left" ? "items-start text-left" : "items-end text-right"
  return (
    <div className={`flex flex-col gap-2 ${alignCls}`}>
      <h3 className="text-lg font-bold leading-relaxed tracking-[0.18em] text-[#1b2945]">
        {person.firstName}
        <br />
        {person.lastName}
      </h3>
      <p className="max-w-[190px] text-[13px] font-medium leading-relaxed tracking-[0.05em] text-[#b8974f]">
        {person.role}
      </p>
      <span aria-hidden="true" className="mt-1 h-px w-8 bg-[#b8974f]/60" />
    </div>
  )
}

function TrustCard() {
  return (
    <div className="relative rounded-2xl bg-white px-6 pb-8 pt-12 text-center shadow-[0_18px_45px_-18px_rgba(26,35,64,0.18)]">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#b8974f]/50 bg-white text-[#b8974f] shadow-[0_8px_20px_-8px_rgba(26,35,64,0.25)]">
          <UsersIcon />
        </div>
      </div>
      <h3 className="whitespace-nowrap text-base font-bold text-[#1b2945]">Współpraca oparta na zaufaniu</h3>
      <span aria-hidden="true" className="mx-auto mt-3 block h-0.5 w-8 bg-[#b8974f]" />
      <p className="mt-4 text-[13px] leading-relaxed text-[#7d8494]">
        Każdego klienta traktujemy indywidualnie,
        <br /> zapewniając pełne zaangażowanie
        <br /> i transparentność na każdym etapie.
      </p>
    </div>
  )
}

function DotGrid({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`grid grid-cols-4 gap-2.5 ${className ?? ""}`}>
      {Array.from({ length: 16 }).map((_, i) => (
        <span key={i} className="h-1.5 w-1.5 rounded-full bg-[#b8974f]/40" />
      ))}
    </div>
  )
}

function Decorations() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1200 960"
      fill="none"
      className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
      preserveAspectRatio="xMidYMid slice"
    >
      <circle cx="215" cy="345" r="210" stroke="#b8974f" strokeOpacity="0.55" strokeWidth="1.5" strokeDasharray="2 7" />
      <circle cx="205" cy="360" r="150" stroke="#b8974f" strokeOpacity="0.35" strokeWidth="1" />
      <circle cx="215" cy="135" r="5" fill="#b8974f" />
      <circle cx="160" cy="328" r="9" fill="#b8974f" fillOpacity="0.85" />
      <circle cx="160" cy="328" r="14" stroke="#b8974f" strokeOpacity="0.5" strokeWidth="1" />
      <circle cx="100" cy="185" r="4" fill="#b8974f" fillOpacity="0.6" />
      <circle cx="222" cy="502" r="5" fill="#b8974f" />
      <path
        d="M 250 505 C 360 560, 470 545, 545 512 S 660 475, 630 512"
        stroke="#b8974f"
        strokeOpacity="0.65"
        strokeWidth="1.5"
        strokeDasharray="1.5 6"
      />
      <circle cx="630" cy="512" r="5" fill="#b8974f" />
      <circle cx="990" cy="440" r="190" stroke="#b8974f" strokeOpacity="0.5" strokeWidth="1.5" strokeDasharray="2 7" />
      <circle cx="1118" cy="455" r="9" fill="#b8974f" fillOpacity="0.85" />
      <circle cx="1118" cy="455" r="14" stroke="#b8974f" strokeOpacity="0.5" strokeWidth="1" />
      <circle cx="932" cy="148" r="14" stroke="#b8974f" strokeOpacity="0.6" strokeWidth="1.5" />
      <path
        d="M 900 730 C 950 770, 990 780, 995 765"
        stroke="#b8974f"
        strokeOpacity="0.65"
        strokeWidth="1.5"
        strokeDasharray="1.5 6"
      />
      <circle cx="995" cy="765" r="8" fill="#b8974f" fillOpacity="0.85" />
      <circle cx="1150" cy="392" r="4" fill="#b8974f" fillOpacity="0.6" />
    </svg>
  )
}

function Header() {
  return (
    <div className="flex flex-col items-center text-center">
      <p className="text-xs font-semibold tracking-[0.35em] text-[#b8974f]">O NAS</p>
      <h2 className="mt-4 text-4xl font-extrabold text-[#1b2945] text-balance md:text-5xl">Poznaj nas</h2>
      <span aria-hidden="true" className="mt-5 block h-0.5 w-10 bg-[#b8974f]" />
      <p className="mt-6 max-w-[400px] text-sm leading-relaxed text-[#7d8494]">
        Jesteśmy doświadczonymi doradcami kredytowymi. Pomagamy firmom i inwestorom w podejmowaniu najlepszych decyzji
        finansowych.
      </p>
    </div>
  )
}

export function AboutSection() {
  const k = PEOPLE.krzysztof
  const a = PEOPLE.angelika

  return (
    <section id="o-nas" className="relative overflow-hidden bg-[#faf7f0]">
      {/* ===== Desktop / large screens ===== */}
      <div className="relative mx-auto hidden aspect-[1200/960] w-full max-w-[1200px] lg:block">
        <Decorations />
        <DotGrid className="absolute left-[3%] top-[4%]" />
        <DotGrid className="absolute bottom-[4%] right-[3%]" />

        <div className="absolute left-1/2 top-[11%] w-full max-w-[420px] -translate-x-1/2">
          <Header />
        </div>

        <div className="absolute left-[14%] top-[14%] h-[76%] w-[25%]">
          <Image
            src={k.img || "/placeholder.svg"}
            alt={`${k.firstName} ${k.lastName} — ${k.role}`}
            fill
            sizes="(min-width: 1024px) 27vw, 60vw"
            className="object-contain object-bottom"
            priority
          />
        </div>

        <div className="absolute right-[16%] top-[19%] h-[71%] w-[22%]">
          <Image
            src={a.img || "/placeholder.svg"}
            alt={`${a.firstName} ${a.lastName} — ${a.role}`}
            fill
            sizes="(min-width: 1024px) 23vw, 60vw"
            className="object-contain object-bottom"
            priority
          />
        </div>

        <div className="absolute left-[5%] top-[55%]">
          <NameBlock person={k} align="left" />
        </div>
        <div className="absolute right-[5%] top-[55%]">
          <NameBlock person={a} align="right" />
        </div>

        <div className="absolute left-[5.5%] top-[68%]">
          <ContactIcons person={k} align="left" />
        </div>
        <div className="absolute right-[5.5%] top-[68%]">
          <ContactIcons person={a} align="right" />
        </div>

        <div className="absolute left-1/2 top-[68%] w-[330px] -translate-x-1/2">
          <TrustCard />
        </div>
      </div>

      {/* ===== Mobile / tablet ===== */}
      <div className="relative mx-auto flex max-w-lg flex-col items-center gap-12 px-6 py-16 lg:hidden">
        <DotGrid className="absolute left-4 top-6 opacity-70" />
        <DotGrid className="absolute bottom-6 right-4 opacity-70" />

        <Header />

        <div className="flex w-full flex-col items-center gap-6">
          <div className="relative h-[420px] w-full max-w-[240px]">
            <Image
              src={k.img || "/placeholder.svg"}
              alt={`${k.firstName} ${k.lastName} — ${k.role}`}
              fill
              sizes="240px"
              className="object-contain object-bottom"
            />
          </div>
          <div className="flex items-start gap-8">
            <div className="[&>div]:items-center [&>div]:text-center">
              <NameBlock person={k} align="left" />
            </div>
            <ContactIcons person={k} />
          </div>
        </div>

        <TrustCard />

        <div className="flex w-full flex-col items-center gap-6">
          <div className="relative h-[420px] w-full max-w-[220px]">
            <Image
              src={a.img || "/placeholder.svg"}
              alt={`${a.firstName} ${a.lastName} — ${a.role}`}
              fill
              sizes="220px"
              className="object-contain object-bottom"
            />
          </div>
          <div className="flex items-start gap-8">
            <div className="[&>div]:items-center [&>div]:text-center">
              <NameBlock person={a} align="right" />
            </div>
            <ContactIcons person={a} />
          </div>
        </div>
      </div>
    </section>
  )
}
