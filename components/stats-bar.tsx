import { Users, Landmark, ThumbsUp } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "1500+",
    label: "zadowolonych klientów",
  },
  {
    icon: Landmark,
    value: "14",
    label: "partnerów bankowych",
  },
  {
    icon: ThumbsUp,
    value: "98%",
    label: "pozytywnych opinii",
  },
]

export function StatsBar() {
  return (
    <section className="w-full bg-background py-12 md:py-16">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-6 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-border">
        {stats.map(({ icon: Icon, value, label }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-3 px-6 text-center"
          >
            <Icon
              className="h-9 w-9 text-gold"
              strokeWidth={1.5}
              aria-hidden="true"
            />
            <p className="text-3xl font-semibold tracking-tight text-foreground">
              {value}
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
