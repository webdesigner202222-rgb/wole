"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

/* ============================================================
   Types - the full data contract for a credit product subpage
   ============================================================ */

export interface CreditProductData {
  breadcrumbs: { label: string; href: string }[]
  category_label: string
  headline: string
  description: string
  hero_checklist: string[]
  hero_image_url: string
  for_whom_intro: string
  for_whom_points: string[]
  benefits: { title: string; desc: string }[]
  steps: { number: string; title: string; desc: string }[]
  faq: { question: string; answer: string }[]
  cta_text: string
  related_products: { name: string; url: string }[]
}

/* ============================================================
   Shared small pieces (icons, decorations)
   ============================================================ */

function CheckIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

function ChevronDownIcon({ className = "h-5 w-5" }: { className?: string }) {
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
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

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

function PhoneChatIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="#1b2945"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-10 w-10"
    >
      <path d="M14 38c-2-2-4-6.5-4-12s2-10 4-12" stroke="#b8974f" />
      <path d="M17 20.5c1.5-.5 3-.5 4 1l2 3c.5 1 .3 2-.5 2.8l-1 1c.8 2 2.5 3.7 4.5 4.5l1-1c.8-.8 1.9-1 2.8-.5l3 2c1.5 1 1.5 2.5 1 4-1 2-3.5 3-6 2-5.5-2-10-6.5-12-12-.8-2.5.2-5 1.2-6.8z" />
      <rect x="28" y="10" width="14" height="10" rx="3" stroke="#b8974f" />
      <circle cx="32.5" cy="15" r="0.8" fill="#b8974f" stroke="none" />
      <circle cx="35.5" cy="15" r="0.8" fill="#b8974f" stroke="none" />
      <circle cx="38.5" cy="15" r="0.8" fill="#b8974f" stroke="none" />
      <path d="M31 20.5 29.5 23l4-2.5" stroke="#b8974f" />
    </svg>
  )
}

function PeopleIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="#b8974f"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-10 w-10"
    >
      <circle cx="18" cy="17" r="6" />
      <path d="M6 38c1.5-7 6-10 12-10s10.5 3 12 10" />
      <circle cx="32" cy="19" r="5" />
      <path d="M33 28c5 .5 8 3.5 9 9" />
    </svg>
  )
}

/** Grid of small square gold dots (corner decorations) */
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
function TriangleDeco({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 14 12" fill="none" aria-hidden="true" className={className}>
      <path d="M7 1 L13 11 L1 11 Z" stroke="#b8974f" strokeWidth="1.2" opacity="0.7" />
    </svg>
  )
}

/** Gold section heading with underline */
function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-balance text-center text-2xl font-bold text-[#1b2945] md:text-3xl">{children}</h2>
      <span aria-hidden="true" className="mt-3 h-0.5 w-10 bg-[#b8974f]" />
    </div>
  )
}

/* ============================================================
   FAQ accordion item
   ============================================================ */

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-[#b8974f]/25 last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-4 text-left"
      >
        <span className="text-sm font-semibold text-[#1b2945] md:text-base">{question}</span>
        <span
          className={`shrink-0 text-[#b8974f] transition-transform duration-300 ease-out ${open ? "rotate-180" : ""}`}
        >
          <ChevronDownIcon />
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <p className="pb-4 text-sm leading-relaxed text-[#7d8494]">{answer}</p>
        </div>
      </div>
    </div>
  )
}

/* ============================================================
   Main reusable template
   ============================================================ */

export function CreditProductTemplate({ data }: { data: CreditProductData }) {
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

      {/* ============ Product hero ============ */}
      <section className="relative overflow-hidden">
        {/* Warm gold wash behind the photo side */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-full bg-gradient-to-l from-[#ecdfc8]/80 via-[#f3ead9]/50 to-transparent lg:w-3/5"
        />
        {/* Decorations */}
        <DotGrid className="absolute left-6 top-8 hidden md:grid" cols={4} rows={3} />
        <DottedArc
          className="absolute -left-20 bottom-0 hidden h-48 w-48 lg:block"
          path="M 190 40 A 90 90 0 0 0 60 190"
        />
        <TriangleDeco className="absolute bottom-10 left-[38%] hidden h-3 w-3.5 rotate-12 lg:block" />
        <span aria-hidden="true" className="absolute right-10 top-10 hidden h-4 w-4 rounded-full border border-[#b8974f]/60 md:block" />

        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-10 md:px-6 lg:grid-cols-2 lg:gap-4 lg:py-0">
          {/* Left column - copy */}
          <div className="relative z-10 py-2 lg:py-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#b8974f]">{data.category_label}</p>
            <h1 className="mt-3 text-balance text-3xl font-bold leading-tight text-[#1b2945] md:text-4xl">
              {data.headline}
            </h1>
            <span aria-hidden="true" className="mt-4 block h-0.5 w-10 bg-[#b8974f]" />
            <p className="mt-5 max-w-md text-pretty text-sm leading-relaxed text-[#7d8494] md:text-base">
              {data.description}
            </p>
            <ul className="mt-6 flex flex-col gap-2.5">
              {data.hero_checklist.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-[#1b2945]">
                  <span className="text-[#b8974f]">
                    <CheckIcon />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#kontakt"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#b8974f] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#a3833f] hover:shadow-lg"
            >
              Skontaktuj się z nami
              <ArrowRightIcon />
            </a>
          </div>

          {/* Right column - photo with dotted circle decorations */}
          <div className="relative mx-auto flex h-[380px] w-full max-w-md items-end justify-center lg:h-[460px]">
            {/* Big dotted circle around the person */}
            <DottedArc
              className="absolute left-1/2 top-1/2 h-[105%] w-[105%] -translate-x-1/2 -translate-y-1/2"
              viewBox="0 0 400 400"
              path="M 340 80 A 165 165 0 1 0 340 320"
              opacity={0.55}
            />
            {/* Extra decorative dots and shapes near the photo */}
            <span aria-hidden="true" className="absolute -left-2 bottom-16 h-2.5 w-2.5 rounded-full bg-[#b8974f]" />
            <span aria-hidden="true" className="absolute right-2 top-6 h-2 w-2 rounded-full bg-[#b8974f]/80" />
            <span aria-hidden="true" className="absolute right-10 top-1/2 hidden h-3.5 w-3.5 rounded-full border border-[#b8974f]/70 lg:block" />
            <TriangleDeco className="absolute -right-3 bottom-24 h-3 w-3.5 -rotate-12" />
            <Image
              src={data.hero_image_url || "/placeholder.svg"}
              alt={data.headline}
              width={600}
              height={880}
              priority
              className="relative z-10 h-full w-auto object-contain object-bottom"
            />
          </div>
        </div>
      </section>

      {/* ============ Dla kogo? ============ */}
      <section className="relative overflow-hidden bg-white py-16 md:py-20">
        <DottedArc
          className="absolute -right-16 top-6 hidden h-40 w-40 md:block"
          path="M 10 40 A 90 90 0 0 1 140 190"
        />
        <span aria-hidden="true" className="absolute left-12 top-12 hidden h-3.5 w-3.5 rounded-full border border-[#b8974f]/60 md:block" />
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <SectionHeading>Dla kogo?</SectionHeading>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-center text-sm leading-relaxed text-[#7d8494] md:text-base">
            {data.for_whom_intro}
          </p>
          <div className="relative mt-10 rounded-2xl bg-[#faf8f5] px-6 py-8 shadow-[0_18px_40px_-24px_rgba(27,41,69,0.25)] md:px-10">
            <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
              {/* Icon in dotted circle */}
              <div className="relative flex h-28 w-28 shrink-0 items-center justify-center">
                <DottedArc
                  className="absolute inset-0 h-full w-full"
                  viewBox="0 0 120 120"
                  path="M 98 25 A 46 46 0 1 0 98 95"
                  opacity={0.7}
                />
                <span aria-hidden="true" className="absolute right-1 top-3 h-1.5 w-1.5 rounded-full bg-[#b8974f]" />
                <PeopleIcon />
              </div>
              {/* 2x2 points grid */}
              <ul className="grid flex-1 grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2">
                {data.for_whom_points.map((point) => (
                  <li key={point} className="flex items-center gap-3 text-sm font-medium text-[#1b2945]">
                    <span className="text-[#b8974f]">
                      <CheckIcon />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ Korzyści ============ */}
      <section className="relative overflow-hidden py-16 md:py-20">
        <DotGrid className="absolute bottom-10 right-8 hidden md:grid" cols={4} rows={3} />
        <DottedArc
          className="absolute -left-14 top-1/3 hidden h-44 w-44 lg:block"
          path="M 190 40 A 90 90 0 0 0 60 190"
        />
        <TriangleDeco className="absolute right-16 top-14 hidden h-3 w-3.5 rotate-45 md:block" />
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <SectionHeading>Korzyści</SectionHeading>
          <div className="mt-10 rounded-2xl bg-white px-6 py-8 shadow-[0_18px_40px_-24px_rgba(27,41,69,0.25)] md:px-10 md:py-10">
            <dl className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
              {data.benefits.map((benefit) => (
                <div key={benefit.title} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 text-[#b8974f]">
                    <CheckIcon />
                  </span>
                  <div>
                    <dt className="text-sm font-bold text-[#1b2945] md:text-base">{benefit.title}</dt>
                    <dd className="mt-1 text-sm leading-relaxed text-[#7d8494]">{benefit.desc}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ============ Jak to działa? (static 4 steps) ============ */}
      <section className="relative overflow-hidden bg-white py-16 md:py-20">
        <span aria-hidden="true" className="absolute right-14 top-10 hidden h-4 w-4 rounded-full border border-[#b8974f]/60 md:block" />
        <DottedArc
          className="absolute -bottom-16 left-8 hidden h-40 w-40 md:block"
          path="M 190 40 A 90 90 0 0 0 60 190"
          opacity={0.45}
        />
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <SectionHeading>Jak to działa?</SectionHeading>
          <ol className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
            {data.steps.map((step, i) => (
              <li key={step.number} className="relative flex flex-col items-center text-center">
                {/* Dotted connector to the next step (desktop only) */}
                {i < data.steps.length - 1 && (
                  <svg
                    aria-hidden="true"
                    className="absolute left-[calc(50%+2.5rem)] top-7 hidden h-[3px] w-[calc(100%-5rem)] lg:block"
                    preserveAspectRatio="none"
                  >
                    <line
                      x1="0"
                      y1="1.5"
                      x2="100%"
                      y2="1.5"
                      stroke="#b8974f"
                      strokeWidth="2"
                      strokeDasharray="2 7"
                      strokeLinecap="round"
                      opacity="0.7"
                    />
                  </svg>
                )}
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-[#b8974f] text-base font-bold text-[#b8974f]">
                  {step.number}
                </span>
                <h3 className="mt-4 text-sm font-bold text-[#1b2945] md:text-base">{step.title}</h3>
                <p className="mt-2 max-w-[220px] text-sm leading-relaxed text-[#7d8494]">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="relative overflow-hidden py-16 md:py-20">
        <DotGrid className="absolute left-6 top-10 hidden md:grid" cols={3} rows={4} />
        <TriangleDeco className="absolute bottom-16 right-12 hidden h-3.5 w-4 rotate-[160deg] md:block" />
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <SectionHeading>Najczęściej zadawane pytania</SectionHeading>
          <div className="mt-10 rounded-2xl bg-[#f3ead9]/60 px-6 py-4 md:px-8">
            {data.faq.map((item) => (
              <FaqItem key={item.question} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA banner ============ */}
      <section id="kontakt" className="relative px-4 pb-16 md:px-6 md:pb-20">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl bg-[#f3ead9] px-6 py-8 md:px-12">
          {/* Banner decorations */}
          <span aria-hidden="true" className="absolute left-6 top-1/2 hidden h-2 w-2 -translate-y-1/2 rounded-full bg-[#b8974f] md:block" />
          <span aria-hidden="true" className="absolute bottom-4 right-8 h-2 w-2 rounded-full bg-[#b8974f]/80" />
          <DottedArc
            className="absolute -left-10 -top-10 h-32 w-32"
            path="M 10 190 A 120 120 0 0 1 190 100"
            opacity={0.5}
          />
          <DottedArc
            className="absolute -bottom-14 -right-8 h-36 w-36"
            path="M 10 40 A 110 110 0 0 0 160 190"
            opacity={0.5}
          />
          <div className="relative flex flex-col items-center gap-6 md:flex-row md:gap-8">
            <div className="relative flex h-20 w-20 shrink-0 items-center justify-center">
              <DottedArc
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 90 90"
                path="M 72 18 A 34 34 0 1 0 72 72"
                opacity={0.7}
              />
              <PhoneChatIcon />
            </div>
            <div className="flex-1 text-center md:text-left">
              <p className="text-sm text-[#7d8494]">Masz pytania? Jesteśmy do Twojej dyspozycji!</p>
              <p className="mt-1 text-balance text-xl font-bold text-[#1b2945] md:text-2xl">{data.cta_text}</p>
            </div>
            <a
              href="tel:+48723609936"
              className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#b8974f] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#a3833f] hover:shadow-lg"
            >
              Skontaktuj się z nami
              <ArrowRightIcon />
            </a>
          </div>
        </div>
      </section>

      {/* ============ Related products ============ */}
      <section className="relative overflow-hidden bg-white py-14 md:py-16">
        <span aria-hidden="true" className="absolute left-10 top-8 hidden h-3 w-3 rounded-full border border-[#b8974f]/60 md:block" />
        <DotGrid className="absolute bottom-6 right-6 hidden md:grid" cols={4} rows={2} />
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <SectionHeading>Zobacz również inne kredyty</SectionHeading>
          <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {data.related_products.map((product) => (
              <li key={product.url}>
                <Link
                  href={product.url}
                  className="group flex items-center justify-between gap-3 rounded-xl border border-[#b8974f]/30 bg-[#faf8f5] px-5 py-4 text-sm font-semibold text-[#1b2945] transition-all hover:border-[#b8974f] hover:shadow-md"
                >
                  {product.name}
                  <span className="text-[#b8974f] transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowRightIcon />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
