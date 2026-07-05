"use client"

import Image from "next/image"
import { useState } from "react"

type Step = {
  id: number
  num: string
  label: string
  title: string
  description: string
  img: string
  cta?: { label: string; href: string }
}

const STEPS: Step[] = [
  {
    id: 1,
    num: "01",
    label: "Kontakt",
    title: "Kontakt",
    description:
      "Skontaktuj się z nami w dogodny dla Ciebie sposób – telefonicznie, mailowo lub przez formularz. Umówimy się na krótką rozmowę, aby poznać Twoją sytuację i oczekiwania.",
    img: "/images/krok1-kontakt.svg",
    cta: { label: "Skontaktuj się z nami", href: "#kontakt" },
  },
  {
    id: 2,
    num: "02",
    label: "Analiza potrzeb",
    title: "Analiza potrzeb",
    description:
      "Podczas rozmowy dokładnie analizujemy Twoje potrzeby, cele oraz możliwości finansowe. Zadamy właściwe pytania, aby lepiej zrozumieć Twoją sytuację i oczekiwania.",
    img: "/images/krok2-analiza-potrzeb.svg",
  },
  {
    id: 3,
    num: "03",
    label: "Dobór oferty",
    title: "Dobór oferty",
    description:
      "Na podstawie zebranych informacji dobieramy najlepsze rozwiązania spośród dostępnych produktów i przedstawiamy Ci dopasowaną ofertę wraz z warunkami.",
    img: "/images/krok3-dobor-oferty.svg",
  },
  {
    id: 4,
    num: "04",
    label: "Podpisanie umowy",
    title: "Podpisanie umowy",
    description:
      "Gdy zaakceptujesz ofertę, przechodzimy do formalności. Przygotowujemy umowę i przeprowadzamy Cię przez cały proces podpisania – szybko, wygodnie i bez zbędnych formalności.",
    img: "/images/krok4-podpisanie-umowy.svg",
  },
]

function DottedConnector() {
  return (
    <span aria-hidden="true" className="mx-2 mt-6 hidden flex-1 sm:block md:mx-4">
      <svg className="h-[3px] w-full" preserveAspectRatio="none" aria-hidden="true">
        <line
          x1="0"
          y1="1.5"
          x2="100%"
          y2="1.5"
          stroke="#b8974f"
          strokeWidth="2"
          strokeDasharray="2 7"
          strokeLinecap="round"
          opacity="0.75"
        />
      </svg>
    </span>
  )
}

export function HowItWorksSection() {
  const [active, setActive] = useState(1)
  const step = STEPS.find((s) => s.id === active) ?? STEPS[0]

  return (
    <section id="jak-to-dziala" className="relative overflow-hidden bg-[#f5efe4] py-20 md:py-24">
      {/* Corner dot grids */}
      <div aria-hidden="true" className="absolute left-8 top-10 grid grid-cols-4 gap-2 opacity-50">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} className="h-1.5 w-1.5 rounded-full bg-[#b8974f]/40" />
        ))}
      </div>
      <div aria-hidden="true" className="absolute bottom-10 right-10 grid grid-cols-4 gap-2 opacity-50">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} className="h-1.5 w-1.5 rounded-full bg-[#b8974f]/40" />
        ))}
      </div>
      <span
        aria-hidden="true"
        className="absolute right-16 top-24 h-5 w-5 rounded-full border border-[#b8974f]/70"
      />
      {/* Left-of-card decoration cluster: dotted arc fragment, triangle, dot */}
      <div aria-hidden="true" className="absolute -left-16 top-[55%] hidden lg:block">
        <svg viewBox="0 0 200 200" fill="none" className="h-44 w-44">
          <path
            d="M 190 40 A 90 90 0 0 0 60 190"
            stroke="#b8974f"
            strokeWidth="1.5"
            strokeDasharray="1.5 9"
            strokeLinecap="round"
            opacity="0.6"
          />
        </svg>
        <span className="absolute bottom-2 right-6 h-2 w-2 rounded-full bg-[#b8974f]/80" />
      </div>
      <svg
        viewBox="0 0 14 12"
        fill="none"
        aria-hidden="true"
        className="absolute bottom-24 left-14 h-3.5 w-4 rotate-[160deg]"
      >
        <path d="M7 1 L13 11 L1 11 Z" stroke="#b8974f" strokeWidth="1.2" opacity="0.7" />
      </svg>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Heading */}
        <div className="flex flex-col items-center">
          <h2 className="text-balance text-center text-3xl font-bold text-[#1b2945] md:text-4xl">Jak to działa</h2>
          <span aria-hidden="true" className="mt-4 h-0.5 w-12 bg-[#b8974f]" />
        </div>

        {/* Step navigation */}
        <div className="mt-12 flex flex-wrap items-start justify-center gap-y-6 sm:flex-nowrap sm:justify-between md:px-6">
          {STEPS.map((s, i) => (
            <div key={s.id} className="contents">
              {i > 0 && <DottedConnector />}
              <button
                type="button"
                onClick={() => setActive(s.id)}
                aria-pressed={active === s.id}
                aria-label={`Krok ${s.id}: ${s.label}`}
                className="group flex w-24 shrink-0 flex-col items-center gap-3 focus-visible:outline-none sm:w-auto"
              >
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-full text-sm font-semibold transition-all duration-300 ${
                    active === s.id
                      ? "bg-gradient-to-br from-[#d4a548] to-[#b8781f] text-white shadow-[0_6px_16px_-6px_rgba(184,120,31,0.7)] ring-4 ring-[#b8974f]/15"
                      : "border border-[#d0d0d0] bg-white text-[#6b6b6b] group-hover:border-[#b8974f]/60"
                  }`}
                >
                  {s.id}
                </span>
                <span
                  className={`text-center text-sm transition-colors duration-300 ${
                    active === s.id ? "font-bold text-[#1b2945]" : "font-normal text-[#6b6b6b]"
                  }`}
                >
                  {s.label}
                </span>
              </button>
            </div>
          ))}
        </div>

        {/* Content card */}
        <div className="mt-10 rounded-3xl bg-white p-8 shadow-[0_18px_50px_-24px_rgba(27,41,69,0.25)] md:mt-12 md:p-14">
          <div key={step.id} className="grid animate-[hiw-fade_0.3s_ease] items-center gap-10 md:grid-cols-2 md:gap-8">
            {/* Text column */}
            <div>
              <p className="text-sm font-bold tracking-[0.2em] text-[#b8974f]">
                {step.num} <span aria-hidden="true">—</span>
              </p>
              <h3 className="mt-4 text-2xl font-bold text-[#1b2945] md:text-3xl">{step.title}</h3>
              <span aria-hidden="true" className="mt-4 block h-0.5 w-10 bg-[#b8974f]" />
              <p className="mt-6 max-w-md text-pretty leading-relaxed text-[#6b6b6b]">{step.description}</p>
              {step.cta && (
                <a
                  href={step.cta.href}
                  className="group mt-8 inline-flex items-center gap-3 rounded-lg border border-[#b8974f] px-6 py-3 text-sm font-bold text-[#b8974f] transition-colors duration-300 hover:bg-[#b8974f]/10"
                >
                  {step.cta.label}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
              )}
            </div>

            {/* Illustration column */}
            <div className="relative mx-auto flex h-80 w-80 shrink-0 items-center justify-center md:h-96 md:w-96">
              {/* Soft cream cushion */}
              <span
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f5efe4] md:h-64 md:w-64"
              />
              {/* Partial dotted arc around the illustration */}
              <svg
                viewBox="0 0 400 400"
                fill="none"
                aria-hidden="true"
                className="absolute inset-0 h-full w-full"
              >
                {/* arc from top-right, counter-clockwise through the left, to bottom-right */}
                <path
                  d="M 327 73 A 180 180 0 1 0 327 327"
                  stroke="#b8974f"
                  strokeWidth="1.5"
                  strokeDasharray="1.5 9"
                  strokeLinecap="round"
                  opacity="0.75"
                />
              </svg>
              {/* Filled gold dots pinned to the arc edges */}
              <span aria-hidden="true" className="absolute left-1/2 top-[2px] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#b8974f]" />
              <span aria-hidden="true" className="absolute bottom-[16%] right-[6%] h-2 w-2 rounded-full bg-[#b8974f]" />
              <span aria-hidden="true" className="absolute left-[2%] top-[62%] h-1.5 w-1.5 rounded-full bg-[#b8974f]/80" />
              {/* Outline circle - top left area */}
              <span aria-hidden="true" className="absolute left-[6%] top-[10%] h-4 w-4 rounded-full border border-[#b8974f]/80" />
              {/* Outline triangle - bottom area */}
              <svg
                viewBox="0 0 14 12"
                fill="none"
                aria-hidden="true"
                className="absolute bottom-[6%] left-[18%] h-3 w-3.5 -rotate-12"
              >
                <path d="M7 1 L13 11 L1 11 Z" stroke="#b8974f" strokeWidth="1.2" opacity="0.8" />
              </svg>
              <Image
                src={step.img || "/placeholder.svg"}
                alt={`Ilustracja: ${step.title}`}
                width={387}
                height={448}
                className="relative h-56 w-auto md:h-64"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
