export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] w-full items-center justify-center overflow-hidden py-28 md:py-40 lg:min-h-screen">
      {/* Video background */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      >
        <source
          src="https://res.cloudinary.com/n8ir6lrb/video/upload/v1783101844/hero_section_video_v2_x2qs0n.mp4"
          type="video/mp4"
        />
      </video>

      {/* Light scrim to keep the section bright and text black */}
      <div className="absolute inset-0 bg-background/45" />

      {/* Content */}
      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        <span className="mb-8 text-xs font-medium uppercase tracking-[0.25em] text-foreground/70">
          Broker kredytowy
        </span>
        <h1 className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Kredyt, na jaki naprawdę Cię stać
        </h1>
        <p className="mt-8 max-w-2xl text-pretty text-base leading-relaxed text-foreground/70 sm:text-lg md:text-xl">
          Firmowy, hipoteczny czy gotówkowy - znajdziemy najlepszą ofertę wśród
          banków. Doradzamy też w inwestycjach i nieruchomościach.
        </p>
        <div className="mt-12 flex flex-col items-center gap-3 sm:flex-row">
          <a href="#kontakt" className="hero-btn hero-btn-consult">
            <span>Umów konsultację</span>
          </a>
          <a href="#kredyty-firmowe" className="hero-btn hero-btn-offer">
            Poznaj ofertę
          </a>
        </div>
      </div>
    </section>
  )
}
