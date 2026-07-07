import Link from "next/link"
import { ArrowRight, Building2, FileChartColumn } from "lucide-react"

/* ============================================================
   Types
   ============================================================ */

export type SingleFeatureIconKey = "building" | "document"

export interface SingleFeatureData {
  breadcrumbs: { label: string; href: string }[]
  category_label: string
  headline: string
  intro: string
  /** Heading inside the content card (may repeat the page headline) */
  cardHeading: string
  /** Exact body copy - rendered verbatim */
  body: string | string[]
  icon: SingleFeatureIconKey
  image?: string
  imageAlt?: string
}

const ICONS = {
  building: Building2,
  document: FileChartColumn,
} as const

/* ============================================================
   Decorations - intentionally richer than the tabbed template
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
   Template
   ============================================================ */

export function SingleFeatureShowcaseTemplate({ data }: { data: SingleFeatureData }) {
  const Icon = ICONS[data.icon]
  const paragraphs = Array.isArray(data.body) ? data.body : [data.body]

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

      {/* ============ Body with rich decorations ============ */}
      <div className="relative overflow-hidden">
        {/* Corner dot grids - all four corners */}
        <DotGrid className="absolute left-6 top-10 hidden md:grid" cols={4} rows={4} />
        <DotGrid className="absolute right-8 top-14 hidden md:grid" cols={4} rows={3} />
        <DotGrid className="absolute bottom-12 left-8 hidden lg:grid" cols={3} rows={4} />
        <DotGrid className="absolute bottom-16 right-6 hidden lg:grid" cols={4} rows={4} />

        {/* Dashed arcs scattered across the page height */}
        <DottedArc className="absolute -left-16 top-6 h-52 w-52" path="M 195 100 A 95 95 0 0 1 5 100" opacity={0.5} />
        <DottedArc
          className="absolute -right-14 -top-8 h-48 w-48"
          path="M 10 100 A 90 90 0 0 1 190 100"
          opacity={0.45}
        />
        <DottedArc
          className="absolute -left-20 bottom-24 hidden h-64 w-64 lg:block"
          path="M 100 5 A 95 95 0 0 1 195 100"
          opacity={0.4}
        />
        <DottedArc
          className="absolute -right-16 bottom-40 hidden h-56 w-56 lg:block"
          path="M 5 100 A 95 95 0 0 1 100 5"
          opacity={0.45}
        />

        {/* Scattered circles and triangles across the full height */}
        <TriangleDeco className="absolute left-[15%] top-12 h-3 w-3.5" rotate={-10} />
        <TriangleDeco className="absolute right-[18%] top-24 h-3.5 w-4" rotate={25} />
        <TriangleDeco className="absolute left-[22%] bottom-28 hidden h-3 w-3.5 md:block" rotate={140} />
        <TriangleDeco className="absolute right-[12%] bottom-14 hidden h-4 w-5 md:block" rotate={-30} />
        <CircleDeco className="absolute left-[8%] top-1/3 hidden h-4 w-4 md:block" />
        <CircleDeco className="absolute right-[6%] top-1/2 hidden h-5 w-5 md:block" />
        <CircleDeco className="absolute left-[35%] bottom-10 hidden h-3.5 w-3.5 lg:block" />
        <span aria-hidden="true" className="absolute left-[28%] top-20 h-2 w-2 rounded-full bg-[#b8974f]/60" />
        <span aria-hidden="true" className="absolute right-[30%] top-40 h-1.5 w-1.5 rounded-full bg-[#b8974f]/50" />
        <span aria-hidden="true" className="absolute left-[12%] bottom-1/3 hidden h-2 w-2 rounded-full bg-[#b8974f]/55 md:block" />
        <span aria-hidden="true" className="absolute right-[20%] bottom-24 hidden h-2.5 w-2.5 rounded-full bg-[#b8974f]/40 md:block" />

        {/* ============ Intro ============ */}
        <section className="relative pt-14 pb-4 md:pt-16 md:pb-6">
          <div className="relative mx-auto flex max-w-3xl flex-col items-center px-4 text-center md:px-6">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#b8974f]">{data.category_label}</p>
            <h1 className="mt-4 font-serif text-4xl font-bold leading-tight text-[#1b2945] text-balance md:text-5xl">
              {data.headline}
            </h1>
            <span aria-hidden="true" className="mt-5 h-0.5 w-12 bg-[#b8974f]" />
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-[#7d8494] md:text-base text-pretty">
              {data.intro}
            </p>
          </div>

          {/* Thin dashed connector line guiding the eye down to the card */}
          <div aria-hidden="true" className="mt-6 flex justify-center">
            <svg viewBox="0 0 2 56" fill="none" className="h-14 w-0.5">
              <path d="M1 0 V56" stroke="#b8974f" strokeWidth="1.5" strokeDasharray="1.5 8" strokeLinecap="round" opacity="0.7" />
            </svg>
          </div>
        </section>

        {/* ============ Single content card ============ */}
        <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-4 md:px-6 md:pb-28">
          <div className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-[0_18px_50px_rgba(27,41,69,0.09)] md:p-10 lg:p-12">
            {/* Large, very low-opacity thematic icon in the card background */}
            <Icon
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-10 -left-10 h-64 w-64 text-[#b8974f] opacity-[0.05]"
            />
            <DotGrid className="absolute bottom-6 right-8 hidden opacity-60 lg:grid" cols={4} rows={3} />

            <div className="relative grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
              {/* Text column */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-[#1b2945] text-balance md:text-3xl">
                  {data.cardHeading}
                </h2>
                <span aria-hidden="true" className="mt-3 mb-5 block h-0.5 w-10 bg-[#b8974f]" />
                <div className="space-y-3 text-sm leading-relaxed text-[#5f6675] md:text-base">
                  {paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                <a
                  href="/#kontakt"
                  className="mt-8 inline-flex items-center gap-2 rounded-md border border-[#b8974f] px-5 py-2.5 text-sm font-bold text-[#b8974f] transition-colors hover:bg-[#b8974f] hover:text-white"
                >
                  Skontaktuj się z nami
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>

              {/* Image column */}
              <div className="relative">
                <DottedArc
                  className="absolute -left-10 top-8 hidden h-40 w-40 lg:block"
                  path="M 100 5 A 95 95 0 0 0 5 100"
                  opacity={0.7}
                />
                <span
                  aria-hidden="true"
                  className="absolute -left-4 top-24 hidden h-2 w-2 rounded-full bg-[#b8974f]/70 lg:block"
                />

                {data.image ? (
                  <img
                    src={data.image || "/placeholder.svg"}
                    alt={data.imageAlt || ""}
                    className="aspect-[4/3] w-full rounded-2xl object-cover shadow-[0_18px_45px_rgba(27,41,69,0.14)]"
                  />
                ) : (
                  <div
                    role="img"
                    aria-label={data.imageAlt || "Miejsce na zdjęcie"}
                    className="flex aspect-[4/3] w-full flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-[#b8974f]/35 bg-[#f1ece3] text-[#b8974f]/70 shadow-[0_10px_30px_rgba(27,41,69,0.06)]"
                  >
                    <ImagePlaceholderIcon />
                    <span className="text-xs font-medium">Miejsce na zdjęcie</span>
                  </div>
                )}

                {/* gold circular badge, top-right */}
                <span
                  aria-hidden="true"
                  className="absolute -right-4 -top-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#b8974f] text-white shadow-[0_10px_25px_rgba(184,151,79,0.45)]"
                >
                  <Icon className="h-7 w-7" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
