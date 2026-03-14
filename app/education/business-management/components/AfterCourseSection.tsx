import { AnimatedOutcomeCardVisual } from "../../course-shared"
import type { OutcomeCard } from "../../course-shared"

type AfterCourseSectionProps = {
  eyebrow: string
  title: string
  description: string
  cards: OutcomeCard[]
}

export function AfterCourseSection({ eyebrow, title, description, cards }: AfterCourseSectionProps) {
  return (
    <section id="after-course" className="mx-auto max-w-[1380px] px-6 pb-16 md:px-12 md:pb-20">
      <div className="max-w-[820px]">
        <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#e7d2ad]/78">{eyebrow}</p>
        <h2 className="mt-4 text-[38px] font-extrabold leading-[1.02] tracking-[-0.03em] text-[#EDEDED] md:text-[52px] lg:text-[58px]">
          {title}
        </h2>
        <p className="mt-4 max-w-[60ch] text-[17px] leading-[1.46] text-[#EDEDED]/68 md:text-[19px]">{description}</p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:gap-5">
        {cards.map((card) => {
          const isFinal = card.id === "05"
          const numberTone = card.id === "02" || card.id === "03" ? "text-[#c7d5ff]/82" : "text-[#e7d2ad]/78"

          return (
            <article
              key={card.id}
              className={`group relative overflow-hidden rounded-[22px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.018),rgba(255,255,255,0.008))] p-6 shadow-[0_18px_46px_rgba(0,0,0,0.18)] ${card.className ?? ""} ${
                isFinal ? "md:min-h-[320px] md:px-8 md:py-7" : "min-h-[272px]"
              }`}
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(255,255,255,0.05),rgba(255,255,255,0)_40%)]" />

              {isFinal ? (
                <div className="relative h-full">
                  <div className="inline-flex items-center gap-3">
                    <span className={`text-[12px] font-semibold uppercase tracking-[0.18em] ${numberTone}`}>{card.id}</span>
                    <span className="h-px w-16 bg-[linear-gradient(90deg,rgba(231,210,173,0.22),rgba(231,210,173,0))]" />
                  </div>
                  <div className="mt-8 grid gap-y-4 md:grid-cols-[minmax(0,1fr)_minmax(360px,460px)] md:gap-x-8 md:gap-y-3">
                    <h3 className="max-w-[56ch] text-[34px] font-extrabold leading-[1.02] tracking-[-0.028em] text-[#EDEDED] md:text-[42px]">
                      {card.title}
                    </h3>
                    <div className="hidden md:block" aria-hidden="true" />
                    <p className="max-w-[54ch] text-[15px] leading-[1.5] text-[#EDEDED]/64 md:text-[16px]">{card.description}</p>
                    <div className="w-full opacity-95">
                      <AnimatedOutcomeCardVisual id={card.id} size="wide" />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative flex h-full flex-col">
                  <div className="inline-flex items-center gap-3">
                    <span className={`text-[12px] font-semibold uppercase tracking-[0.18em] ${numberTone}`}>{card.id}</span>
                    <span className="h-px w-16 bg-[linear-gradient(90deg,rgba(231,210,173,0.22),rgba(231,210,173,0))]" />
                  </div>

                  <div className="mt-8 max-w-[34ch]">
                    <h3 className="text-[29px] font-extrabold leading-[1.02] tracking-[-0.028em] text-[#EDEDED] md:text-[34px]">
                      {card.title}
                    </h3>
                    <p className="mt-3 max-w-[34ch] text-[15px] leading-[1.5] text-[#EDEDED]/64 md:text-[16px]">
                      {card.description}
                    </p>
                  </div>

                  <div className="mt-auto ml-auto w-full max-w-[460px] pt-8 opacity-95">
                    <AnimatedOutcomeCardVisual id={card.id} size="default" />
                  </div>
                </div>
              )}
            </article>
          )
        })}
      </div>
    </section>
  )
}
