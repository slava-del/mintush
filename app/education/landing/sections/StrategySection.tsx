import type { RefObject } from "react"
import type { JourneyStep } from "../types"

type StrategySectionProps = {
  strategySectionRef: RefObject<HTMLDivElement | null>
  chapterBackgrounds: string[]
  strategyStep: number
  strategyProgress: number
  steps: JourneyStep[]
  onScrollToCourses: () => void
  showScrollCue: boolean
  compactAfterProgress: boolean
}

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max)
const easeOutCubic = (value: number) => 1 - Math.pow(1 - value, 3)

export function StrategySection({
  strategySectionRef,
  chapterBackgrounds,
  strategyStep,
  strategyProgress,
  steps,
  onScrollToCourses,
  showScrollCue,
  compactAfterProgress,
}: StrategySectionProps) {
  return (
    <section data-section-id="strategy" className="px-6 pb-16 md:px-10 md:pb-20">
      <div ref={strategySectionRef} className="relative mx-auto max-w-6xl">
        <div className="strategy-stage sticky z-20 flex h-[60vh] min-h-[460px] flex-col justify-center py-8 md:py-10">
          <div
            className="pointer-events-none absolute inset-x-[-2%] top-6 bottom-6 rounded-[40px] blur-3xl transition-[background,opacity] duration-500"
            style={{ background: chapterBackgrounds[strategyStep], opacity: 0.9 }}
          />

          <div className="relative max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#e7d2ad]/68">Система в 3 шага</p>
            <h3 className="mt-4 text-[34px] font-extrabold leading-[0.98] tracking-[-0.04em] text-white md:text-[56px]">
              Путь к системному управлению
            </h3>
          </div>

          <div className="relative mt-10 md:mt-12">
            <div className="pointer-events-none absolute left-[5%] right-[5%] top-[56%] hidden h-px bg-white/8 md:block" />
            <div
              className="pointer-events-none absolute left-[5%] top-[56%] hidden h-px bg-[#e7d2ad]/30 transition-[width] duration-300 md:block"
              style={{ width: `${Math.max(0, Math.min(100, strategyProgress * 100)) * 0.9}%` }}
            />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-[0.94fr_1.28fr_0.98fr] md:items-end md:gap-5">
              {steps.map((step, index) => {
                const motion =
                  index === 0
                    ? { start: 0.01, end: 0.21, x: -88, y: 86, rotate: -7, scaleBase: 0.8 }
                    : index === 1
                      ? { start: 0.32, end: 0.56, x: 0, y: 72, rotate: -2, scaleBase: 0.84 }
                      : { start: 0.6, end: 0.84, x: 92, y: 88, rotate: 7, scaleBase: 0.8 }

                const reveal = easeOutCubic(clamp((strategyProgress - motion.start) / (motion.end - motion.start), 0, 1))
                const isVisible = reveal > 0.02
                const isActive = strategyStep === index

                const shellClass =
                  index === 0
                    ? "md:translate-y-8"
                    : index === 1
                      ? "md:-translate-y-8"
                      : "md:translate-y-12"

                const sizeClass =
                  index === 1
                    ? "min-h-[280px] p-6 md:min-h-[320px] md:p-7"
                    : "min-h-[224px] p-5 md:min-h-[244px] md:p-6"

                const opacityFactor = isActive ? 1 : index === 1 ? 0.9 : 0.82

                return (
                  <div key={step.title} className={shellClass}>
                    <article
                      className={`group relative h-full overflow-hidden rounded-[28px] border backdrop-blur-md transition-[border-color,transform] duration-300 ${
                        isActive ? "border-[#e7d2ad]/28 bg-black/56" : "border-white/10 bg-black/42"
                      } ${sizeClass}`}
                      style={{
                        opacity: reveal * opacityFactor,
                        transform: `translate3d(${(1 - reveal) * motion.x}px, ${(1 - reveal) * motion.y}px, 0) rotate(${(1 - reveal) * motion.rotate}deg) scale(${motion.scaleBase + reveal * (1 - motion.scaleBase)})`,
                        filter: `blur(${(1 - reveal) * 5}px) saturate(${0.72 + reveal * 0.28})`,
                        pointerEvents: isVisible ? "auto" : "none",
                        willChange: "transform, opacity, filter",
                      }}
                    >
                      <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-white/12" />
                      <div
                        className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ${
                          isActive ? "opacity-100" : "opacity-0"
                        }`}
                        style={{
                          background:
                            "radial-gradient(circle at 50% 46%, rgba(231, 210, 173, 0.10), rgba(231, 210, 173, 0) 72%)",
                        }}
                      />
                      <div
                        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        style={{
                          background:
                            "radial-gradient(circle at 50% 0%, rgba(231, 210, 173, 0.10), rgba(231, 210, 173, 0) 55%)",
                        }}
                      />
                      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.04),rgba(255,255,255,0)_28%,rgba(231,210,173,0.03)_52%,rgba(255,255,255,0)_76%)] opacity-45" />

                      <div className="relative flex h-full flex-col">
                        <div className="flex items-start justify-between gap-4">
                          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#e7d2ad]/74">
                            Шаг {step.number}
                          </span>
                          <span
                            aria-hidden
                            className={`font-semibold leading-none tracking-[-0.08em] text-white/[0.05] ${
                              index === 1 ? "text-[82px] md:text-[116px]" : "text-[68px] md:text-[90px]"
                            }`}
                          >
                            {step.number}
                          </span>
                        </div>

                        <div className="-mt-2 max-w-[13ch]">
                          <h4
                            className={`font-semibold leading-[0.96] tracking-[-0.05em] text-white ${
                              index === 1 ? "text-[32px] md:text-[46px]" : "text-[28px] md:text-[36px]"
                            }`}
                          >
                            {step.title}
                          </h4>
                        </div>

                        <ul className="mt-7 space-y-2">
                          {step.pillars.map((pillar) => (
                            <li key={pillar} className="flex items-center gap-3 text-[14px] text-white/62 md:text-[15px]">
                              <span className="h-[4px] w-[4px] rounded-full bg-[#e7d2ad]/70" />
                              <span className="font-medium tracking-[-0.01em]">{pillar}</span>
                            </li>
                          ))}
                        </ul>

                        <button
                          type="button"
                          onClick={onScrollToCourses}
                          className="mt-auto inline-flex items-center gap-2 pt-8 text-left text-[14px] font-medium tracking-[-0.01em] text-[#e7d2ad] transition-[gap,color] duration-300 hover:gap-3 hover:text-[#f0dfc1]"
                        >
                          <span>{step.action}</span>
                          <span aria-hidden className="text-[17px] leading-none">
                            →
                          </span>
                        </button>
                      </div>
                    </article>
                  </div>
                )
              })}
            </div>

            {showScrollCue ? (
              <div className="pointer-events-none absolute left-1/2 top-full z-30 -translate-x-1/2 pt-3 md:pt-2">
                <span aria-hidden className="strategy-scroll-cue inline-flex text-white/58">
                  <svg width="20" height="12" viewBox="0 0 16 10" fill="none">
                    <path
                      d="M2 2l6 6 6-6"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            ) : null}
          </div>
        </div>

        <div
          className="transition-[height,min-height] duration-700 ease-out"
          style={{
            height: compactAfterProgress ? "58vh" : "150vh",
            minHeight: compactAfterProgress ? "360px" : "900px",
          }}
        />
      </div>
    </section>
  )
}
