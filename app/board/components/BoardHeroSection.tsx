import { BoardHeroMockup } from "./BoardHeroMockup"
import type { BoardHeroContent } from "../data"
import { LandingPrimaryNav } from "@/components/landing-primary-nav"

type BoardHeroSectionProps = {
  content: BoardHeroContent
}

export function BoardHeroSection({ content }: BoardHeroSectionProps) {
  return (
    <section id="top" className="relative overflow-hidden px-6 md:px-10 lg:px-12 xl:px-14">
      <div className="absolute left-6 right-6 top-6 z-40 flex justify-end md:left-10 md:right-10 md:top-8">
        <LandingPrimaryNav mode="brand-hamburger" contactHref="#contact" />
      </div>

      <div className="pointer-events-none absolute left-[10%] top-12 h-56 w-56 rounded-full bg-[#e7d2ad]/13 blur-3xl" />
      <div className="pointer-events-none absolute right-[8%] top-[16%] h-52 w-52 rounded-full bg-[#e7d2ad]/10 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-[62%] h-40 w-[26rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(231,210,173,0.11),rgba(231,210,173,0)_68%)] blur-3xl" />

      <div className="mx-auto grid w-full max-w-[1380px] min-h-[100svh] items-center gap-10 py-20 md:min-h-[calc(100svh-3rem)] md:py-24 lg:grid-cols-[0.84fr_1.16fr] lg:gap-10">
        <div className="relative z-10 flex h-full max-w-[760px] flex-col justify-center">
          <h1 className="mt-3 text-[clamp(86px,14.2vw,176px)] font-extrabold leading-[0.82] tracking-[0.028em] text-[#EDEDED]">
            {content.title}
          </h1>

          <p className="mt-5 max-w-[520px] text-[20px] font-semibold leading-[1.24] tracking-[-0.01em] text-[#EDEDED]/90 md:text-[22px] lg:text-[24px]">
            {content.subtitle}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href={content.primaryCta.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-[14px] bg-[#e7d2ad] px-6 py-3.5 text-[14px] font-semibold uppercase tracking-[0.08em] text-black transition hover:translate-y-[-1px] hover:bg-[#d9bf98]"
            >
              {content.primaryCta.label}
            </a>

            {content.secondaryCta ? (
              <a
                href={content.secondaryCta.href}
                className="text-[13px] font-semibold uppercase tracking-[0.09em] text-[#EDEDED]/66 transition hover:text-[#EDEDED]"
              >
                {content.secondaryCta.label}
              </a>
            ) : null}
          </div>

          <div className="mt-3 max-w-[560px]">
            <p className="text-[14px] font-semibold leading-[1.38] text-[#e7d2ad]/84 md:text-[15px]">{content.proofLine}</p>
            <p className="mt-3 text-[18px] font-medium leading-[1.42] text-[#EDEDED]/52 md:text-[19px] lg:text-[20px]">
              {content.qualifier}
            </p>
          </div>
        </div>

        <div className="relative z-10 flex h-full items-center justify-center lg:justify-end">
          <BoardHeroMockup content={content.mockup} />
        </div>
      </div>
    </section>
  )
}
