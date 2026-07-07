"use client"

import { Suspense, useEffect, useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import {
  ArrowRight,
  Building2,
  FileChartColumn,
  Home,
  KeyRound,
  LayoutPanelTop,
  PencilRuler,
  Sun,
  BatteryCharging,
  Warehouse,
  Landmark,
} from "lucide-react"

/* ============================================================
   Types
   ============================================================ */

export type ShowcaseIconKey =
  | "home"
  | "key"
  | "building"
  | "warehouse"
  | "office"
  | "estate"
  | "solar"
  | "battery"
  | "document"
  | "design"

export interface ShowcaseTab {
  /** Slug used in the ?tab= URL param */
  id: string
  /** Short label shown in the tab pill */
  tabLabel: string
  icon: ShowcaseIconKey
  heading: string
  body: string | string[]
  facts?: string[]
  image?: string
  imageAlt?: string
}

export interface TabbedShowcaseData {
  breadcrumbs: { label: string; href: string }[]
  category_label: string
  headline: string
  intro: string
  tabs: ShowcaseTab[]
}

/* ============================================================
   Icon mapping (serializable string keys -> lucide icons)
   ============================================================ */

const ICONS: Record<ShowcaseIconKey, typeof Home> = {
  home: Home,
  key: KeyRound,
  building: Building2,
  warehouse: Warehouse,
  office: Landmark,
  estate: LayoutPanelTop,
  solar: Sun,
  battery: BatteryCharging,
  document: FileChartColumn,
  design: PencilRuler,
}

/* ============================================================
   Decorations
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
   Card pieces
   ============================================================ */

function FactList({ facts, icon }: { facts: string[]; icon: ShowcaseIconKey }) {
  const Icon = ICONS[icon]
  return (
    <ul className="mt-6 space-y-3.5">
      {facts.map((fact) => (
        <li key={fact} className="flex items-start gap-3">
          <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#b8974f]/12 text-[#b8974f]">
            <Icon className="h-4 w-4" aria-hidden="true" />
          </span>
          <span className="pt-1 text-sm leading-relaxed text-[#3f4657]">{fact}</span>
        </li>
      ))}
    </ul>
  )
}

function ImagePanel({ tab }: { tab: ShowcaseTab }) {
  const Icon = ICONS[tab.icon]
  return (
    <div className="relative">
      {/* dashed gold ring decoration around the image */}
      <DottedArc
        className="absolute -left-10 top-8 hidden h-40 w-40 lg:block"
        path="M 100 5 A 95 95 0 0 0 5 100"
        opacity={0.7}
      />
      <span aria-hidden="true" className="absolute -left-4 top-24 hidden h-2 w-2 rounded-full bg-[#b8974f]/70 lg:block" />
      <span aria-hidden="true" className="absolute -left-8 bottom-16 hidden h-2 w-2 rounded-full bg-[#b8974f]/50 lg:block" />

      {tab.image ? (
        <img
          src={tab.image || "/placeholder.svg"}
          alt={tab.imageAlt || ""}
          className="aspect-[4/3] w-full rounded-2xl object-cover shadow-[0_18px_45px_rgba(27,41,69,0.14)]"
        />
      ) : (
        <div
          role="img"
          aria-label={tab.imageAlt || "Miejsce na zdjęcie"}
          className="flex aspect-[4/3] w-full flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-[#b8974f]/35 bg-[#f1ece3] text-[#b8974f]/70 shadow-[0_10px_30px_rgba(27,41,69,0.06)]"
        >
          <ImagePlaceholderIcon />
          <span className="text-xs font-medium">Miejsce na zdjęcie</span>
        </div>
      )}

      {/* gold circular badge, top-right corner */}
      <span
        aria-hidden="true"
        className="absolute -right-4 -top-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#b8974f] text-white shadow-[0_10px_25px_rgba(184,151,79,0.45)]"
      >
        <Icon className="h-7 w-7" />
      </span>
    </div>
  )
}

/* ============================================================
   Inner component (uses useSearchParams -> needs Suspense)
   ============================================================ */

function TabbedShowcaseInner({ data }: { data: TabbedShowcaseData }) {
  const searchParams = useSearchParams()
  const tabParam = searchParams.get("tab")

  const initialIndex = Math.max(
    0,
    data.tabs.findIndex((t) => t.id === tabParam),
  )
  const [active, setActive] = useState(initialIndex)

  /* React to ?tab= changes (e.g. footer links clicked while already on the page) */
  useEffect(() => {
    if (!tabParam) return
    const idx = data.tabs.findIndex((t) => t.id === tabParam)
    if (idx >= 0) setActive(idx)
  }, [tabParam, data.tabs])

  const tab = data.tabs[active]
  const number = String(active + 1).padStart(2, "0")

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
      <section className="relative overflow-hidden pt-14 pb-8 md:pt-16 md:pb-10">
        <DottedArc className="absolute -left-16 top-2 h-52 w-52" path="M 195 100 A 95 95 0 0 1 5 100" opacity={0.5} />
        <DottedArc
          className="absolute -right-14 -top-10 h-48 w-48"
          path="M 10 100 A 90 90 0 0 1 190 100"
          opacity={0.45}
        />
        <DotGrid className="absolute left-8 top-10 hidden md:grid" cols={4} rows={4} />
        <DotGrid className="absolute right-10 top-1/3 hidden lg:grid" cols={4} rows={3} />
        <TriangleDeco className="absolute right-[14%] top-14 h-3 w-3.5" rotate={15} />
        <CircleDeco className="absolute left-[18%] top-8 hidden h-4 w-4 md:block" />
        <CircleDeco className="absolute right-[8%] bottom-2 hidden h-5 w-5 md:block" />
        <span aria-hidden="true" className="absolute left-[30%] bottom-4 h-2 w-2 rounded-full bg-[#b8974f]/60" />

        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-4 text-center md:px-6">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#b8974f]">{data.category_label}</p>
          <h1 className="mt-4 font-serif text-4xl font-bold leading-tight text-[#1b2945] text-balance md:text-5xl">
            {data.headline}
          </h1>
          <span aria-hidden="true" className="mt-5 h-0.5 w-12 bg-[#b8974f]" />
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-[#7d8494] md:text-base text-pretty">{data.intro}</p>
        </div>
      </section>

      {/* ============ Tab bar ============ */}
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div
          role="tablist"
          aria-label={data.headline}
          className="grid gap-3 rounded-2xl bg-white p-3 shadow-[0_14px_40px_rgba(27,41,69,0.08)] sm:grid-cols-2 lg:grid-cols-3"
          style={data.tabs.length === 2 ? { gridTemplateColumns: "repeat(2, minmax(0, 1fr))" } : undefined}
        >
          {data.tabs.map((t, i) => {
            const Icon = ICONS[t.icon]
            const isActive = i === active
            const n = String(i + 1).padStart(2, "0")
            return (
              <button
                key={t.id}
                type="button"
                role="tab"
                id={`tab-${t.id}`}
                aria-selected={isActive}
                aria-controls={`panel-${t.id}`}
                onClick={() => setActive(i)}
                className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all ${
                  isActive
                    ? "border-[#b8974f] bg-[#faf8f5] shadow-[0_6px_18px_rgba(184,151,79,0.18)]"
                    : "border-transparent hover:bg-[#faf8f5]"
                }`}
              >
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                    isActive ? "bg-[#b8974f] text-white" : "bg-[#f1ece3] text-[#7d8494]"
                  }`}
                >
                  {n}
                </span>
                <Icon
                  aria-hidden="true"
                  className={`h-5 w-5 shrink-0 ${isActive ? "text-[#b8974f]" : "text-[#7d8494]"}`}
                />
                <span className={`text-sm font-bold ${isActive ? "text-[#1b2945]" : "text-[#5f6675]"}`}>
                  {t.tabLabel}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* ============ Active tab card ============ */}
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-6 md:px-6 md:pb-24">
        <div
          role="tabpanel"
          id={`panel-${tab.id}`}
          aria-labelledby={`tab-${tab.id}`}
          className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-[0_18px_50px_rgba(27,41,69,0.09)] md:p-10 lg:p-12"
        >
          <DotGrid className="absolute bottom-6 left-6 hidden opacity-60 lg:grid" cols={4} rows={3} />

          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            {/* Text column */}
            <div>
              <p className="flex items-center gap-2 text-sm font-bold tracking-[0.2em] text-[#b8974f]">
                {number}
                <span aria-hidden="true" className="h-px w-6 bg-[#b8974f]" />
              </p>
              <h2 className="mt-3 font-serif text-2xl font-bold text-[#1b2945] text-balance md:text-3xl">
                {tab.heading}
              </h2>
              <span aria-hidden="true" className="mt-3 mb-5 block h-0.5 w-10 bg-[#b8974f]" />
              <div className="space-y-3 text-sm leading-relaxed text-[#5f6675] md:text-base">
                {(Array.isArray(tab.body) ? tab.body : [tab.body]).map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              {tab.facts && tab.facts.length > 0 && <FactList facts={tab.facts} icon={tab.icon} />}
              <a
                href="/#kontakt"
                className="mt-8 inline-flex items-center gap-2 rounded-md border border-[#b8974f] px-5 py-2.5 text-sm font-bold text-[#b8974f] transition-colors hover:bg-[#b8974f] hover:text-white"
              >
                Skontaktuj się z nami
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            {/* Image column */}
            <ImagePanel tab={tab} />
          </div>
        </div>
      </div>
    </div>
  )
}

/* ============================================================
   Public export - wraps useSearchParams usage in Suspense
   ============================================================ */

export function TabbedShowcaseTemplate({ data }: { data: TabbedShowcaseData }) {
  return (
    <Suspense fallback={null}>
      <TabbedShowcaseInner data={data} />
    </Suspense>
  )
}
