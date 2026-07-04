import { CarIcon, ClockIcon, DocumentIcon, DocumentFoldedIcon } from "./why-us-icons"

const steps = [
  {
    number: "01",
    title: "Dojeżdżamy do klienta",
    description: ["Spotkanie tam, gdzie Ci wygodnie –", "bez zbędnych wizyt w biurze."],
    Icon: CarIcon,
  },
  {
    number: "02",
    title: "Decyzja do 24h",
    description: ["Szybka odpowiedź bez zbędnego", "czekania na Twój wniosek."],
    Icon: ClockIcon,
  },
  {
    number: "03",
    title: "Mało formalności",
    description: ["Prosty proces, minimum papierów", "i zbędnych formalności."],
    Icon: DocumentIcon,
  },
  {
    number: "04",
    title: "Minimum dokumentacji",
    description: ["Tylko to, co naprawdę niezbędne", "do rozpatrzenia wniosku."],
    Icon: DocumentFoldedIcon,
  },
] as const

function IconCircle({
  Icon,
  arcRotation,
}: {
  Icon: (typeof steps)[number]["Icon"]
  arcRotation: number
}) {
  return (
    <div className="relative flex size-32 items-center justify-center rounded-full bg-[#f7f4ef] shadow-[0_10px_30px_rgba(27,41,69,0.08)]">
      <svg
        className="absolute inset-0 size-full"
        viewBox="0 0 128 128"
        aria-hidden="true"
        style={{ transform: `rotate(${arcRotation}deg)` }}
      >
        <circle
          cx="64"
          cy="64"
          r="63"
          fill="none"
          stroke="#e29a3e"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="110 286"
        />
      </svg>
      <Icon className="size-14 text-[#1b2945]" />
    </div>
  )
}

function StepText({
  step,
  align,
}: {
  step: (typeof steps)[number]
  align: "left" | "right"
}) {
  const alignClass = align === "right" ? "items-end text-right" : "items-start text-left"
  return (
    <div className={`flex flex-col gap-1.5 ${alignClass}`}>
      <span className="text-sm font-bold tracking-widest text-[#e29a3e]">{step.number}</span>
      <h3 className="text-xl font-extrabold text-[#1b2945] text-balance">{step.title}</h3>
      <p className="text-sm leading-relaxed text-[#7d8494]">
        {step.description[0]}
        <br className="hidden lg:inline" /> {step.description[1]}
      </p>
    </div>
  )
}

function Connector({
  className,
  path,
  width,
  height,
  start,
  end,
}: {
  className: string
  path: string
  width: number
  height: number
  start: [number, number]
  end: [number, number]
}) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      aria-hidden="true"
    >
      <path d={path} stroke="#e29a3e" strokeWidth="2.2" strokeLinecap="round" strokeDasharray="0.1 9" />
      <circle cx={start[0]} cy={start[1]} r="3.2" fill="#e29a3e" />
      <circle cx={end[0]} cy={end[1]} r="3.2" fill="#e29a3e" />
    </svg>
  )
}

function DotGrid({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      <div className="grid grid-cols-3 gap-5">
        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={i}
            className="block size-3 rounded-full bg-[#e29a3e]"
            style={{ opacity: 0.18 + ((i * 7) % 10) * 0.02 }}
          />
        ))}
      </div>
    </div>
  )
}

export function WhyUsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-20" aria-labelledby="why-us-heading">
      <DotGrid className="absolute left-6 top-8 hidden md:block lg:left-10 lg:top-10" />
      <DotGrid className="absolute -bottom-4 right-6 hidden md:block lg:right-12" />

      <div className="mx-auto max-w-[980px] px-6">
        {/* Heading */}
        <div className="flex flex-col items-center gap-4">
          <h2 id="why-us-heading" className="text-center text-4xl font-extrabold text-[#1b2945] text-balance">
            Dlaczego my
          </h2>
          <span className="h-0.5 w-10 rounded-full bg-[#e29a3e]" aria-hidden="true" />
        </div>

        {/* Desktop layout — faithful to reference */}
        <div className="relative mt-12 hidden h-[600px] lg:block">
          {/* Step 1 */}
          <div className="absolute left-[138px] top-0">
            <IconCircle Icon={steps[0].Icon} arcRotation={140} />
          </div>
          <div className="absolute left-[297px] top-1">
            <StepText step={steps[0]} align="left" />
          </div>
          <Connector
            className="absolute left-[233px] top-[112px]"
            width={242}
            height={100}
            path="M 6 6 C 24 74, 160 28, 234 90"
            start={[6, 6]}
            end={[234, 90]}
          />

          {/* Step 2 */}
          <div className="absolute left-[712px] top-[147px]">
            <IconCircle Icon={steps[1].Icon} arcRotation={20} />
          </div>
          <div className="absolute right-[302px] top-[150px]">
            <StepText step={steps[1]} align="right" />
          </div>
          <Connector
            className="absolute left-[498px] top-[261px]"
            width={238}
            height={92}
            path="M 232 6 C 214 74, 78 30, 8 82"
            start={[232, 6]}
            end={[8, 82]}
          />

          {/* Step 3 */}
          <div className="absolute left-[135px] top-[291px]">
            <IconCircle Icon={steps[2].Icon} arcRotation={200} />
          </div>
          <div className="absolute left-[297px] top-[293px]">
            <StepText step={steps[2]} align="left" />
          </div>
          <Connector
            className="absolute left-[231px] top-[406px]"
            width={210}
            height={88}
            path="M 6 6 C 22 68, 132 26, 200 78"
            start={[6, 6]}
            end={[200, 78]}
          />

          {/* Step 4 */}
          <div className="absolute left-[719px] top-[439px]">
            <IconCircle Icon={steps[3].Icon} arcRotation={60} />
          </div>
          <div className="absolute right-[302px] top-[442px]">
            <StepText step={steps[3]} align="right" />
          </div>
        </div>

        {/* Tablet layout — alternating rows */}
        <div className="mt-12 hidden flex-col gap-14 md:flex lg:hidden">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`flex items-center gap-10 ${i % 2 === 1 ? "flex-row-reverse self-end" : "self-start"}`}
            >
              <IconCircle Icon={step.Icon} arcRotation={i * 90 + 30} />
              <StepText step={step} align={i % 2 === 1 ? "right" : "left"} />
            </div>
          ))}
        </div>

        {/* Mobile layout — vertical */}
        <div className="mt-10 flex flex-col items-center md:hidden">
          {steps.map((step, i) => (
            <div key={step.number} className="flex flex-col items-center">
              {i > 0 && (
                <svg width="6" height="56" viewBox="0 0 6 56" className="my-4" aria-hidden="true">
                  <path
                    d="M 3 3 L 3 53"
                    stroke="#e29a3e"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeDasharray="0.1 9"
                  />
                </svg>
              )}
              <IconCircle Icon={step.Icon} arcRotation={i * 90 + 30} />
              <div className="mt-5 flex flex-col items-center gap-1.5 text-center">
                <span className="text-sm font-bold tracking-widest text-[#e29a3e]">{step.number}</span>
                <h3 className="text-xl font-extrabold text-[#1b2945] text-balance">{step.title}</h3>
                <p className="max-w-xs text-sm leading-relaxed text-[#7d8494]">
                  {step.description[0]} {step.description[1]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
