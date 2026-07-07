import Link from "next/link"

/* ============================================================
   Types - data contract for a long-form product showcase page
   ============================================================ */

export interface ShowcaseFact {
  text: string
}

export interface ShowcaseBlock {
  /** Anchor id used for in-page navigation (kotwice) */
  id: string
  heading: string
  /** One or more descriptive paragraphs */
  body: string | string[]
  /** Optional highlighted key facts rendered as gold check bullets */
  facts?: string[]
  /** Optional path to an image in /public. When omitted a neutral placeholder is shown. */
  image?: string
  imageAlt?: string
}

export interface ShowcaseSection extends ShowcaseBlock {
  /** Optional nested sub-sections rendered smaller (e.g. Projektowanie: Hale, Biura, Osiedla) */
  subsections?: ShowcaseBlock[]
}

export interface ProductShowcaseData {
  breadcrumbs: { label: string; href: string }[]
  category_label: string
  headline: string
  intro: string
  sections: ShowcaseSection[]
}

/* ============================================================
   Icons
   ============================================================ */

function ArrowRightIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

function CheckIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

function ImagePlaceholderIcon({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="8.5" cy="9.5" r="1.5" />
      <path d="m21 16-4.5-4.5L7 21" />
    </svg>
  )
}

/* ============================================================
   Decorations (dashed / dotted, consistent with the site)
   ============================================================ */

function DotGrid({ className = "", cols = 4, rows = 4 }: { className?: string; cols?: number; rows?: number }) {
  return (
    <div
      aria-hidden="true"
      className={`grid gap-2.5 ${className}`}
      style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
    >
      {Array.from({ length: cols * rows }).map((_, i) => (
        <span key={i} className="h-1.5 w-1.5 rounded-sm bg-[#b8974f]/30" />
      ))}
    </div>
  )
}

function DottedArc({
  className = "",
  path,
  viewBox = "0 0 200 200",
  opacity = 0.6,
}: {
  className?: string
  path: string
  viewBox?: string
  opacity?: number
}) {
  return (
    <svg viewBox={viewBox} fill="none" aria-hidden="true" className={className}>
      <path
        d={path}
        stroke="#b8974f"
        strokeWidth="1.5"
        strokeDasharray="1.5 9"
        strokeLinecap="round"
        opacity={opacity}
      />
    </svg>
  )
}

function TriangleDeco({ className = "", rotate = 0 }: { className?: string; rotate?: number }) {
  return (
    <svg
      viewBox="0 0 14 12"
      fill="none"
      aria-hidden="true"
      className={className}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <path d="M7 1 L13 11 L1 11 Z" stroke="#b8974f" strokeWidth="1.2" opacity="0.7" />
    </svg>
  )
}

function CircleDeco({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <circle cx="10" cy="10" r="9" stroke="#b8974f" strokeWidth="1.2" opacity="0.55" />
    </svg>
  )
}

/* ============================================================
   Shared pieces
   ============================================================ */

function ContactButton({ small = false }: { small?: boolean }) {
  return (
    <a
      href="/#kontakt"
      className={`mt-6 inline-flex items-center gap-2 rounded-md bg-[#b8974f] font-bold text-white transition-colors hover:bg-[#9a7c3e] ${
        small ? "px-4 py-2 text-xs" : "px-5 py-2.5 text-sm"
      }`}
    >
      Skontaktuj się
      <ArrowRightIcon className={small ? "h-3.5 w-3.5" : "h-4 w-4"} />
    </a>
  )
}

function ImagePanel({
  image,
  alt,
  small = false,
}: {
  image?: string
  alt?: string
  small?: boolean
}) {
  if (image) {
    return (
      <img
        src={image || "/placeholder.svg"}
        alt={alt || ""}
        className={`w-full rounded-2xl object-cover shadow-[0_18px_45px_rgba(27,41,69,0.12)] ${
          small ? "aspect-[4/3]" : "aspect-[4/3]"
        }`}
      />
    )
  }
  /* Neutral, light placeholder - real photos supplied separately */
  return (
    <div
      role="img"
      aria-label={alt || "Miejsce na zdjęcie"}
      className={`flex w-full flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-[#b8974f]/35 bg-[#f1ece3] text-[#b8974f]/70 shadow-[0_10px_30px_rgba(27,41,69,0.06)] ${
        small ? "aspect-[4/3]" : "aspect-[4/3]"
      }`}
    >
      <ImagePlaceholderIcon className={small ? "h-8 w-8" : "h-10 w-10"} />
      <span className={`font-medium ${small ? "text-[11px]" : "text-xs"}`}>Miejsce na zdjęcie</span>
    </div>
  )
}

function BodyText({ body, small = false }: { body: string | string[]; small?: boolean }) {
  const paragraphs = Array.isArray(body) ? body : [body]
  return (
    <div className={`space-y-3 leading-relaxed text-[#5f6675] ${small ? "text-sm" : "text-base"}`}>
      {paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  )
}

function FactList({ facts, small = false }: { facts: string[]; small?: boolean }) {
  return (
    <ul className="mt-5 space-y-3">
      {facts.map((fact) => (
        <li key={fact} className="flex items-start gap-3">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#b8974f]/15 text-[#b8974f]">
            <CheckIcon className="h-3 w-3" />
          </span>
          <span className={`font-semibold text-[#1b2945] ${small ? "text-xs md:text-sm" : "text-sm md:text-base"}`}>
            {fact}
          </span>
        </li>
      ))}
    </ul>
  )
}

/* ============================================================
   A single alternating text + image row
   ============================================================ */

function ShowcaseRow({
  block,
  reverse,
  small = false,
}: {
  block: ShowcaseBlock
  reverse: boolean
  small?: boolean
}) {
  return (
    <div className="grid items-center gap-8 md:gap-12 lg:grid-cols-2">
      {/* Text column */}
      <div className={reverse ? "lg:order-2" : "lg:order-1"}>
        <h3
          className={`font-serif font-bold text-[#1b2945] text-balance ${
            small ? "text-xl md:text-2xl" : "text-2xl md:text-3xl"
          }`}
        >
          {block.heading}
        </h3>
        <span aria-hidden="true" className="mt-3 mb-5 block h-0.5 w-10 bg-[#b8974f]" />
        <BodyText body={block.body} small={small} />
        {block.facts && block.facts.length > 0 && <FactList facts={block.facts} small={small} />}
        <ContactButton small={small} />
      </div>

      {/* Image column */}
      <div className={reverse ? "lg:order-1" : "lg:order-2"}>
        <div className={small ? "mx-auto max-w-md" : ""}>
          <ImagePanel image={block.image} alt={block.imageAlt} small={small} />
        </div>
      </div>
    </div>
  )
}

/* ============================================================
   Main template
   ============================================================ */

export function ProductShowcasePage({ data }: { data: ProductShowcaseData }) {
  /* Global alternating index across top-level sections */
  let rowIndex = 0

  return (
    <div className="bg-[#faf8f5]">
      {/* ============ Breadcrumbs ============ */}
      <nav aria-label="Breadcrumb" className="border-b border-[#b8974f]/20">
        <ol className="mx-auto flex max-w-6xl flex-wrap items-center gap-2 px-4 py-3 text-xs text-[#7d8494] md:px-6">
          {data.breadcrumbs.map((crumb, i) => {
            const isLast = i === data.breadcrumbs.length - 1
            return (
              <li key={crumb.label} className="flex items-center gap-2">
                {i > 0 && (
                  <span aria-hidden="true" className="text-[#b8974f]/70">
                    /
                  </span>
                )}
                {isLast ? (
                  <span aria-current="page" className="font-medium text-[#1b2945]">
                    {crumb.label}
                  </span>
                ) : (
                  <Link href={crumb.href} className="transition-colors hover:text-[#b8974f]">
                    {crumb.label}
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      </nav>

      {/* ============ Intro ============ */}
      <section className="relative overflow-hidden py-14 md:py-16">
        <DottedArc
          className="absolute -left-16 top-2 h-52 w-52"
          path="M 195 100 A 95 95 0 0 1 5 100"
          opacity={0.5}
        />
        <DottedArc
          className="absolute -right-14 -top-10 h-48 w-48"
          path="M 10 100 A 90 90 0 0 1 190 100"
          opacity={0.45}
        />
        <DotGrid className="absolute right-8 top-10 hidden md:grid" cols={4} rows={4} />
        <DotGrid className="absolute left-10 bottom-4 hidden lg:grid" cols={3} rows={3} />
        <TriangleDeco className="absolute left-[16%] top-10 h-3 w-3.5" rotate={-10} />
        <TriangleDeco className="absolute right-[20%] bottom-6 h-3 w-3.5" rotate={25} />
        <CircleDeco className="absolute right-[10%] bottom-10 hidden h-4 w-4 md:block" />
        <span aria-hidden="true" className="absolute left-[28%] bottom-12 h-2 w-2 rounded-full bg-[#b8974f]/60" />

        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-4 text-center md:px-6">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#b8974f]">{data.category_label}</p>
          <h1 className="mt-4 font-serif text-4xl font-bold leading-tight text-[#1b2945] text-balance md:text-5xl">
            {data.headline}
          </h1>
          <span aria-hidden="true" className="mt-5 h-0.5 w-12 bg-[#b8974f]" />
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-[#7d8494] md:text-base text-pretty">{data.intro}</p>
        </div>
      </section>

      {/* ============ Sections ============ */}
      <div className="mx-auto max-w-6xl px-4 pb-16 md:px-6 md:pb-24">
        {data.sections.map((section, i) => {
          const reverse = rowIndex % 2 === 1
          rowIndex += 1
          return (
            <section key={section.id} id={section.id} className="scroll-mt-24">
              {i > 0 && <hr className="my-14 border-t border-[#b8974f]/15 md:my-20" />}

              <ShowcaseRow block={section} reverse={reverse} />

              {section.subsections && section.subsections.length > 0 && (
                <div className="mt-14 space-y-12 md:mt-16 md:space-y-16">
                  {section.subsections.map((sub) => {
                    const subReverse = rowIndex % 2 === 1
                    rowIndex += 1
                    return (
                      <div key={sub.id} id={sub.id} className="scroll-mt-24">
                        <ShowcaseRow block={sub} reverse={subReverse} small />
                      </div>
                    )
                  })}
                </div>
              )}
            </section>
          )
        })}
      </div>
    </div>
  )
}
