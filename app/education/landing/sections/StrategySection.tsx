import type { RefObject } from "react"
import type { JourneyStep } from "../types"

type StrategySectionProps = {
  strategySectionRef: RefObject<HTMLDivElement | null>
  chapterBackgrounds: string[]
  strategyStep: number
  strategyProgress: number
  steps: JourneyStep[]
  onScrollToCourses: () => void
}

export function StrategySection({
  strategySectionRef,
  chapterBackgrounds,
  strategyStep,
  strategyProgress,
  steps,
  onScrollToCourses,
}: StrategySectionProps) {
  return (
    <section data-section-id="strategy" className="px-6 pb-12 md:px-10 md:pb-14">
      <div ref={strategySectionRef} className="relative mx-auto max-w-5xl">
        <div
          className="strategy-stage sticky z-20 flex h-[58vh] min-h-[390px] flex-col justify-center rounded-[24px] border border-white/10 px-6 py-7 shadow-[0_24px_80px_rgba(0,0,0,0.45)] transition-[background] duration-500 md:px-9 md:py-8"
          style={{ background: chapterBackgrounds[strategyStep] }}
        >
          <div className="max-w-3xl">
            <h3 className="text-[30px] font-extrabold leading-[1.02] tracking-[-0.03em] text-white md:text-[44px]">
              Путь к системному управлению
            </h3>
          </div>

          <div className="relative mt-6">
            <div className="pointer-events-none absolute left-[8%] right-[8%] top-[56%] hidden h-px bg-white/10 md:block" />
            <div
              className="pointer-events-none absolute left-[8%] top-[56%] hidden h-px bg-[#e7d2ad]/38 transition-[width] duration-300 md:block"
              style={{ width: `${Math.max(0, Math.min(100, strategyProgress * 100)) * 0.84}%` }}
            />

            <div className="grid grid-cols-1 gap-3 md:grid-cols-12 md:items-end md:gap-4">
              {steps.map((step, index) => {
                const start = index === 0 ? 0.12 : index === 1 ? 0.42 : 0.72
                const end = start + 0.23
                const calmFactor = index < strategyStep ? 0.92 : 1
                const progress = Math.min(Math.max((strategyProgress - start) / (end - start), 0), 1)
                const isVisible = progress > 0.02

                const shellClass =
                  index === 0
                    ? "md:col-span-4 md:col-start-1 md:translate-y-3"
                    : index === 1
                      ? "md:col-span-4 md:col-start-5 md:-translate-y-6"
                      : "md:col-span-4 md:col-start-9 md:translate-y-3"

                const isMain = strategyStep === 2 && index === 2

                return (
                  <div key={step.title} className={shellClass}>
                    <article
                      className={`h-full rounded-[20px] border p-4 backdrop-blur md:min-h-[170px] md:p-5 ${
                        isMain
                          ? "border-[#e7d2ad]/46 bg-[radial-gradient(circle_at_18%_10%,rgba(231,210,173,0.16),rgba(0,0,0,0)_42%),rgba(0,0,0,0.48)]"
                          : "border-white/12 bg-black/45"
                      }`}
                      style={{
                        opacity: progress * calmFactor,
                        transform: `translateY(${(1 - progress) * 34}px) scale(${0.93 + progress * 0.07})`,
                        filter: `blur(${(1 - progress) * 1.8}px)`,
                        pointerEvents: isVisible ? "auto" : "none",
                      }}
                    >
                      <h4 className="text-[22px] font-extrabold leading-[1.04] tracking-[-0.02em] text-white md:text-[30px]">
                        {step.title}
                      </h4>
                      <p className="mt-2 text-[15px] leading-[1.3] text-white/78 md:text-[16px]">{step.subtitle}</p>
                      <p className="mt-2 text-[14px] leading-[1.3] text-white/56 md:text-[15px]">{step.detail}</p>
                      <button
                        type="button"
                        onClick={onScrollToCourses}
                        className="mt-4 rounded-[12px] border border-[#e7d2ad]/38 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#e7d2ad] transition hover:bg-[#e7d2ad] hover:text-black"
                      >
                        {step.cta}
                      </button>
                    </article>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="h-[140vh] min-h-[840px]" />
      </div>
    </section>
  )
}
