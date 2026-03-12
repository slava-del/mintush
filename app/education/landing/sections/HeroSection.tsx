import { LandingPrimaryNav } from "@/components/landing-primary-nav"

type HeroSectionProps = {
  heroWordPrimary: string
  heroWordSecondary: string
  morphWord: string
  onScrollToCourses: () => void
}

export function HeroSection({
  heroWordPrimary,
  heroWordSecondary,
  morphWord,
  onScrollToCourses,
}: HeroSectionProps) {
  return (
    <section
      data-section-id="hero"
      className="relative flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center px-6 py-20 md:px-10"
    >
      <div className="absolute left-6 right-6 top-6 z-20 flex justify-end md:left-10 md:right-10 md:top-8">
        <LandingPrimaryNav mode="brand-hamburger" contactHref="#contact" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(231,210,173,0.22)_0%,rgba(5,5,5,0)_56%)]" />
      <div className="relative z-10 mx-auto max-w-[1320px]">
        <h1
          className="text-center font-extrabold leading-[0.88] tracking-[-0.045em] text-white"
          style={{ fontSize: "clamp(62px, 10.8vw, 182px)" }}
        >
          <span className="block whitespace-nowrap">
            {heroWordPrimary.split("").map((letter, index) => (
              <span
                key={`${letter}-primary-${index}`}
                className="hero-letter inline-block"
                style={{ animationDelay: `${index * 70}ms` }}
              >
                {letter}
              </span>
            ))}
          </span>
          <span className="mt-2 block whitespace-nowrap md:mt-1">
            {heroWordSecondary.split("").map((letter, index) => (
              <span
                key={`${letter}-secondary-${index}`}
                className="hero-letter inline-block"
                style={{ animationDelay: `${(heroWordPrimary.length + index) * 70}ms` }}
              >
                {letter}
              </span>
            ))}
          </span>
        </h1>
        <p className="mt-5 text-center text-[12px] font-semibold uppercase tracking-[0.18em] text-white/62 md:text-[14px]">
          мини-курсы для руководителей
        </p>
        <p className="mt-4 text-center text-[20px] font-semibold leading-[1.05] tracking-[-0.02em] text-[#e7d2ad] md:text-[30px]">
          <span className="inline-grid w-[24ch] grid-cols-[1fr_auto_1fr] items-baseline gap-x-3 align-middle">
            <span className="justify-self-end whitespace-nowrap">знания</span>
            <span className="justify-self-center">→</span>
            <span className="justify-self-start w-[11ch] text-left">
              <span key={morphWord} className="morph-word inline-block">
                {morphWord}
              </span>
            </span>
          </span>
        </p>
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={onScrollToCourses}
            className="inline-flex items-center gap-3 rounded-[16px] bg-[#e7d2ad] px-5 py-3 text-[14px] font-semibold text-black transition hover:translate-y-[-1px]"
          >
            Смотреть курсы
            <span className="grid h-8 w-8 place-items-center rounded-full bg-black text-[#e7d2ad]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M8 16l8-8M10 8h6v6"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
