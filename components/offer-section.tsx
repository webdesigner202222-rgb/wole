/* Decorative helpers ------------------------------------------------------ */

function DotGrid({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" className={className} aria-hidden="true" fill="#b8974f">
      {Array.from({ length: 4 }).map((_, row) =>
        Array.from({ length: 4 }).map((_, col) => (
          <circle key={`${row}-${col}`} cx={8 + col * 15} cy={8 + row * 15} r={2.4} />
        )),
      )}
    </svg>
  )
}

function HatchedSquare({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <defs>
        <pattern id="offer-hatch" width="6" height="6" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="0" y2="6" stroke="#b8974f" strokeWidth="2.2" />
        </pattern>
      </defs>
      <rect width="40" height="40" rx="4" fill="url(#offer-hatch)" />
    </svg>
  )
}

function OutlineTriangle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="#b8974f" strokeWidth="1.5">
      <path d="M12 4 21 20H3z" strokeLinejoin="round" />
    </svg>
  )
}

function DashedCircle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 220" className={className} aria-hidden="true" fill="none">
      <circle cx="110" cy="110" r="106" stroke="#b8974f" strokeWidth="1.4" strokeDasharray="2 7" strokeLinecap="round" opacity="0.9" />
    </svg>
  )
}

function DottedArc({ className, d }: { className?: string; d: string }) {
  return (
    <svg viewBox="0 0 200 120" className={className} aria-hidden="true" fill="none">
      <path d={d} stroke="#b8974f" strokeWidth="1.3" strokeDasharray="1.5 8" strokeLinecap="round" opacity="0.75" />
    </svg>
  )
}

/* Cards -------------------------------------------------------------------- */

type Offer = {
  id: string
  title: string
  description: string
  img: string
  /** Card-specific decoration layout around the illustration */
  deco: React.ReactNode
}

const OFFERS: Offer[] = [
  {
    id: "kredyty-firmowe",
    title: "Kredyty firmowe",
    description:
      "Finansowanie dopasowane do potrzeb Twojej firmy. Kredyty obrotowe, inwestycyjne i leasing \u2013 szybko, elastycznie, na jasnych zasadach.",
    img: "/images/kredyty-firmowe.svg",
    deco: (
      <>
        <DashedCircle className="absolute left-1/2 top-1/2 h-[210px] w-[210px] -translate-x-1/2 -translate-y-1/2" />
        <span className="absolute left-[7%] top-[8%] h-2 w-2 rounded-full bg-[#b8974f]" aria-hidden="true" />
        <HatchedSquare className="absolute right-[6%] top-[10%] h-9 w-9" />
        <span
          className="absolute right-[13%] top-[38%] h-2.5 w-2.5 rounded-full bg-[#b8974f]"
          aria-hidden="true"
        />
        <span
          className="absolute bottom-[6%] left-[8%] h-4 w-4 rounded-full border border-[#b8974f]"
          aria-hidden="true"
        />
      </>
    ),
  },
  {
    id: "kredyty-osobiste",
    title: "Kredyty osobiste",
    description:
      "Proste i przejrzyste kredyty gotówkowe na dowolny cel. Decyzja nawet w 24h, minimum formalności i wsparcie na każdym etapie.",
    img: "/images/kredyty-osobiste.svg",
    deco: (
      <>
        <DashedCircle className="absolute left-1/2 top-1/2 h-[210px] w-[210px] -translate-x-1/2 -translate-y-1/2" />
        <OutlineTriangle className="absolute left-[4%] top-[22%] h-4 w-4" />
        <DotGrid className="absolute right-[4%] top-[6%] h-8 w-8" />
        <span
          className="absolute right-[10%] top-[52%] h-2.5 w-2.5 rounded-full bg-[#b8974f]"
          aria-hidden="true"
        />
        <span
          className="absolute bottom-[10%] right-[6%] h-4 w-4 rounded-full border border-[#b8974f]"
          aria-hidden="true"
        />
        <OutlineTriangle className="absolute bottom-[6%] left-[8%] h-3.5 w-3.5" />
      </>
    ),
  },
  {
    id: "inwestycje-nieruchomosci",
    title: "Inwestycje i nieruchomości",
    description:
      "Finansujemy rozwój i spełniamy marzenia o własnym miejscu. Kredyty hipoteczne, inwestycyjne i wsparcie w zakresie nieruchomości.",
    img: "/images/inwestycje-nieruchomosci.svg",
    deco: (
      <>
        <DashedCircle className="absolute left-1/2 top-1/2 h-[210px] w-[210px] -translate-x-1/2 -translate-y-1/2" />
        <span className="absolute left-[16%] top-[10%] h-2 w-2 rounded-full bg-[#b8974f]" aria-hidden="true" />
        <HatchedSquare className="absolute right-[7%] top-[8%] h-9 w-9" />
        <span
          className="absolute right-[12%] top-[46%] h-2.5 w-2.5 rounded-full bg-[#b8974f]"
          aria-hidden="true"
        />
        <OutlineTriangle className="absolute bottom-[8%] left-[5%] h-4 w-4" />
      </>
    ),
  },
]

function OfferCard({ offer }: { offer: Offer }) {
  return (
    <article
      id={offer.id}
      className="flex flex-col items-center rounded-2xl bg-white px-8 py-10 shadow-[0_18px_45px_-28px_rgba(26,35,64,0.35)]"
    >
      <div className="relative flex h-[200px] w-full items-center justify-center">
        {offer.deco}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={offer.img || "/placeholder.svg"} alt="" className="relative z-10 h-[130px] w-auto" />
      </div>
      <h3 className="mt-8 text-center text-xl font-bold text-[#1a2340]">{offer.title}</h3>
      <span aria-hidden="true" className="mt-3 h-0.5 w-9 bg-[#b8974f]" />
      <p className="mt-5 text-center text-sm leading-relaxed text-[#6b6b6b]">{offer.description}</p>
      <a
        href="#kontakt"
        className="group mt-auto flex items-center gap-2 pt-7 text-sm font-bold text-[#b8974f]"
      >
        Zobacz ofertę
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden="true"
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </a>
    </article>
  )
}

/* Section ------------------------------------------------------------------ */

export function OfferSection() {
  return (
    <section id="oferta" className="relative overflow-hidden bg-[#faf8f5] py-24">
      {/* Section-level decorations */}
      <DotGrid className="absolute left-8 top-10 h-14 w-14 opacity-70" />
      <DotGrid className="absolute bottom-10 right-8 h-14 w-14 opacity-70" />
      <span
        aria-hidden="true"
        className="absolute left-[3%] top-[38%] h-5 w-5 rounded-full border border-[#b8974f]/70"
      />
      <OutlineTriangle className="absolute bottom-[8%] left-[4%] h-5 w-5 opacity-70" />
      <span
        aria-hidden="true"
        className="absolute right-[4%] top-[12%] h-2 w-2 rounded-full bg-[#b8974f]/80"
      />
      <OutlineTriangle className="absolute right-[7%] top-[16%] h-4 w-4 opacity-70" />
      <span
        aria-hidden="true"
        className="absolute bottom-[30%] left-[8%] h-2 w-2 rounded-full bg-[#b8974f]/70"
      />
      <DottedArc
        className="absolute left-[1%] top-[10%] h-32 w-56 opacity-80"
        d="M10 110 C 40 30, 130 10, 195 40"
      />
      <DottedArc
        className="absolute bottom-[4%] right-[10%] h-28 w-52 opacity-80"
        d="M5 20 C 60 90, 140 100, 195 60"
      />
      <span
        aria-hidden="true"
        className="absolute right-[3%] top-[55%] h-2 w-2 rounded-full bg-[#b8974f]/70"
      />

      <div className="relative mx-auto max-w-6xl px-4">
        <header className="flex flex-col items-center">
          <h2 className="text-balance text-center text-3xl font-bold text-[#1a2340] md:text-4xl">Nasza oferta</h2>
          <span aria-hidden="true" className="mt-4 h-0.5 w-10 bg-[#b8974f]" />
        </header>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {OFFERS.map((offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </div>
      </div>
    </section>
  )
}
