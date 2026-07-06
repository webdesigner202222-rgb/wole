import Link from "next/link"

/* ============================================================
   Types - data contract for a category landing page
   ============================================================ */

export interface CategoryLandingData {
  breadcrumbs: { label: string; href: string }[]
  category_label: string
  /** Use "\n" to force the two-line break in the headline */
  headline: string
  description: string
  products: {
    /** Path to an SVG file in /public (e.g. /images/icons/x.svg) OR a React node */
    icon_svg?: string
    icon_node?: React.ReactNode
    name: string
    desc: string
    url: string
  }[]
  why_us_heading: string
  why_us_points: { icon_svg?: string; icon_node?: React.ReactNode; label: string }[]
  cta_label: string
  cta_headline: string
  cta_desc: string
  cta_phone: string
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

function PhoneSmallIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

/* ============================================================
   Decorations (dashed / dotted, consistent with the site)
   ============================================================ */

/** Grid of small gold dots */
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

/** Dashed/dotted arc fragment (SVG) */
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

/** Outline triangle */
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

/** Small square filled with a fine dot raster */
function RasterSquare({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      {Array.from({ length: 5 }).map((_, r) =>
        Array.from({ length: 5 }).map((_, c) => (
          <circle key={`${r}-${c}`} cx={2 + c * 5} cy={2 + r * 5} r="1" fill="#b8974f" opacity="0.45" />
        )),
      )}
    </svg>
  )
}

/** Small outline circle */
function CircleDeco({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <circle cx="10" cy="10" r="9" stroke="#b8974f" strokeWidth="1.2" opacity="0.55" />
    </svg>
  )
}

/* ============================================================
   Product card
   ============================================================ */

function ProductIcon({ product, large }: { product: CategoryLandingData["products"][number]; large: boolean }) {
  const size = large ? "h-16 w-16" : "h-14 w-14"
  if (product.icon_node) {
    return <span className={`flex items-center justify-center ${size} text-[#1b2945]`}>{product.icon_node}</span>
  }
  return (
    <img
      src={product.icon_svg || "/placeholder.svg"}
      alt=""
      aria-hidden="true"
      className={`${size} object-contain`}
    />
  )
}

function ProductCard({
  product,
  index,
  large = false,
}: {
  product: CategoryLandingData["products"][number]
  index: number
  large?: boolean
}) {
  /* Rotate corner decoration layout per card so the grid feels organic */
  const variant = index % 4

  return (
    <article
      className={`group relative flex flex-col items-center rounded-xl bg-white px-6 pb-7 pt-9 text-center shadow-[0_10px_35px_rgba(27,41,69,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_45px_rgba(27,41,69,0.12)] ${
        large ? "px-8 pb-9 pt-11" : ""
      }`}
    >
      {/* Corner decorations - vary per card */}
      {variant === 0 && (
        <>
          <CircleDeco className="absolute right-5 top-5 h-4 w-4" />
          <RasterSquare className="absolute right-4 top-10 h-5 w-5" />
          <TriangleDeco className="absolute left-5 top-16 h-2.5 w-3" rotate={-8} />
          <span aria-hidden="true" className="absolute bottom-16 right-6 h-1.5 w-1.5 rounded-full bg-[#b8974f]/60" />
        </>
      )}
      {variant === 1 && (
        <>
          <RasterSquare className="absolute right-5 top-6 h-5 w-5" />
          <TriangleDeco className="absolute left-6 top-8 h-2.5 w-3" rotate={12} />
          <CircleDeco className="absolute bottom-20 left-5 h-3.5 w-3.5" />
          <span aria-hidden="true" className="absolute right-8 top-20 h-1.5 w-1.5 rounded-full bg-[#b8974f]/60" />
        </>
      )}
      {variant === 2 && (
        <>
          <TriangleDeco className="absolute right-6 top-6 h-2.5 w-3" rotate={20} />
          <CircleDeco className="absolute left-5 top-9 h-4 w-4" />
          <RasterSquare className="absolute bottom-24 right-4 h-5 w-5" />
          <span aria-hidden="true" className="absolute left-8 bottom-16 h-1.5 w-1.5 rounded-full bg-[#b8974f]/60" />
        </>
      )}
      {variant === 3 && (
        <>
          <CircleDeco className="absolute left-5 top-6 h-3.5 w-3.5" />
          <RasterSquare className="absolute left-4 top-12 h-5 w-5" />
          <TriangleDeco className="absolute right-6 top-9 h-2.5 w-3" rotate={-15} />
          <span aria-hidden="true" className="absolute bottom-20 right-5 h-1.5 w-1.5 rounded-full bg-[#b8974f]/60" />
        </>
      )}

      {/* Icon in dotted gold circle */}
      <div className={`relative flex items-center justify-center ${large ? "h-32 w-32" : "h-28 w-28"}`}>
        <svg viewBox="0 0 112 112" fill="none" aria-hidden="true" className="absolute inset-0 h-full w-full">
          <circle
            cx="56"
            cy="56"
            r="54"
            stroke="#b8974f"
            strokeWidth="1.5"
            strokeDasharray="1.5 8"
            strokeLinecap="round"
            opacity="0.75"
          />
        </svg>
        {/* Small filled dot sitting on the circle */}
        <span
          aria-hidden="true"
          className="absolute -right-0.5 top-6 h-2 w-2 rounded-full bg-[#b8974f]"
        />
        <ProductIcon product={product} large={large} />
      </div>

      <h3 className={`mt-6 font-bold text-[#1b2945] text-balance ${large ? "text-xl" : "text-base"}`}>
        {product.name}
      </h3>
      <p className={`mt-2.5 leading-relaxed text-[#7d8494] ${large ? "text-sm" : "text-xs md:text-sm"}`}>
        {product.desc}
      </p>

      <Link
        href={product.url}
        className="mt-auto flex items-center gap-2 pt-6 text-xs font-bold text-[#b8974f] transition-colors hover:text-[#9a7c3e] md:text-sm"
      >
        Zobacz ofertę
        <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        <span className="sr-only">{`: ${product.name}`}</span>
      </Link>
    </article>
  )
}

/* ============================================================
   Why-us point
   ============================================================ */

function WhyUsPoint({ point }: { point: CategoryLandingData["why_us_points"][number] }) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-[0_10px_30px_rgba(27,41,69,0.08)]">
        <svg viewBox="0 0 96 96" fill="none" aria-hidden="true" className="absolute inset-0 h-full w-full">
          <circle
            cx="48"
            cy="48"
            r="47"
            stroke="#b8974f"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray="90 212"
            opacity="0.8"
          />
        </svg>
        {point.icon_node ? (
          <span className="flex h-11 w-11 items-center justify-center text-[#1b2945]">{point.icon_node}</span>
        ) : (
          <img src={point.icon_svg || "/placeholder.svg"} alt="" aria-hidden="true" className="h-11 w-11 object-contain" />
        )}
      </div>
      <p className="max-w-[150px] text-xs font-semibold leading-relaxed text-[#1b2945] md:text-sm">{point.label}</p>
    </div>
  )
}

/* ============================================================
   Main template
   ============================================================ */

export function CategoryLandingTemplate({ data }: { data: CategoryLandingData }) {
  const headlineLines = data.headline.split("\n")
  const twoCards = data.products.length === 2

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

      {/* ============ Category hero ============ */}
      <section className="relative overflow-hidden py-14 md:py-16">
        {/* Decorations */}
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
            {headlineLines.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>
          <span aria-hidden="true" className="mt-5 h-0.5 w-12 bg-[#b8974f]" />
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-[#7d8494] md:text-base">{data.description}</p>
        </div>
      </section>

      {/* ============ Product cards grid ============ */}
      <section className="relative pb-16 md:pb-20" aria-label="Produkty w tej kategorii">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          {twoCards ? (
            <div className="mx-auto flex max-w-3xl flex-col gap-7 sm:flex-row sm:justify-center">
              {data.products.map((product, i) => (
                <div key={product.name} className="flex-1">
                  <ProductCard product={product} index={i} large />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {data.products.map((product, i) => (
                <ProductCard key={product.name} product={product} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ============ Why us ============ */}
      <section className="relative overflow-hidden pb-16 md:pb-20" aria-labelledby="category-why-us">
        <span aria-hidden="true" className="absolute left-[6%] top-1/2 h-2 w-2 rounded-full bg-[#b8974f]/50" />
        <span aria-hidden="true" className="absolute right-[6%] top-1/3 h-2 w-2 rounded-full bg-[#b8974f]/50" />
        <TriangleDeco className="absolute left-[10%] bottom-4 h-3 w-3.5" rotate={15} />

        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="flex flex-col items-center">
            <h2 id="category-why-us" className="text-center text-2xl font-bold text-[#1b2945] text-balance md:text-3xl">
              {data.why_us_heading}
            </h2>
            <span aria-hidden="true" className="mt-3 h-0.5 w-10 bg-[#b8974f]" />
          </div>

          <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4">
            {data.why_us_points.map((point) => (
              <WhyUsPoint key={point.label} point={point} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA bar ============ */}
      <section className="relative pb-16 md:pb-20" aria-labelledby="category-cta">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="relative overflow-hidden rounded-xl bg-white px-6 py-8 shadow-[0_10px_35px_rgba(27,41,69,0.06)] md:px-10">
            {/* CTA decorations */}
            <DottedArc
              className="absolute -left-10 -bottom-14 h-40 w-40"
              path="M 10 100 A 90 90 0 0 1 190 100"
              opacity={0.4}
            />
            <span aria-hidden="true" className="absolute left-[30%] top-5 h-1.5 w-1.5 rounded-full bg-[#b8974f]/60" />
            <span aria-hidden="true" className="absolute right-[8%] bottom-5 h-1.5 w-1.5 rounded-full bg-[#b8974f]/60" />
            <DotGrid className="absolute -right-2 -top-2 hidden md:grid" cols={4} rows={3} />

            <div className="relative flex flex-col items-center gap-7 lg:flex-row lg:justify-between">
              <div className="flex flex-col items-center gap-6 md:flex-row">
                {/* Phone icon in dotted circle */}
                <div className="relative flex h-24 w-24 shrink-0 items-center justify-center">
                  <svg viewBox="0 0 96 96" fill="none" aria-hidden="true" className="absolute inset-0 h-full w-full">
                    <circle
                      cx="48"
                      cy="48"
                      r="46"
                      stroke="#b8974f"
                      strokeWidth="1.5"
                      strokeDasharray="1.5 8"
                      strokeLinecap="round"
                      opacity="0.7"
                    />
                  </svg>
                  <img src="/images/icons/cta-sluchawka.svg" alt="" aria-hidden="true" className="h-11 w-11 object-contain" />
                </div>

                <div className="text-center md:text-left">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#b8974f] md:text-xs">
                    {data.cta_label}
                  </p>
                  <h2 id="category-cta" className="mt-1.5 text-xl font-bold text-[#1b2945] text-balance md:text-2xl">
                    {data.cta_headline}
                  </h2>
                  <p className="mt-2 max-w-md text-xs leading-relaxed text-[#7d8494] md:text-sm">{data.cta_desc}</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4 sm:flex-row lg:flex-col lg:items-end xl:flex-row xl:items-center">
                <a
                  href="/#kontakt"
                  className="flex items-center gap-2 rounded-md bg-[#b8974f] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#9a7c3e]"
                >
                  Skontaktuj się z nami
                  <ArrowRightIcon className="h-4 w-4" />
                </a>
                <a
                  href={`tel:${data.cta_phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 text-sm font-bold text-[#b8974f] transition-colors hover:text-[#9a7c3e]"
                >
                  <PhoneSmallIcon />
                  {data.cta_phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
