import { AnimatedStrategyQuestionVisual } from "./AnimatedStrategyQuestionVisual"
import type { MonthlyQuestion } from "./types"

type SystemQuestionsSectionProps = {
  titleFirstLine: string
  titleSecondLine: string
  subtitle: string
  questions: MonthlyQuestion[]
  ctaText: string
}

export function SystemQuestionsSection({
  titleFirstLine,
  titleSecondLine,
  subtitle,
  questions,
  ctaText,
}: SystemQuestionsSectionProps) {
  return (
    <section className="mx-auto max-w-[1380px] px-6 pb-14 md:px-12 md:pb-16">
      <article className="relative overflow-hidden rounded-[24px] border border-[#e7d2ad]/20 bg-[linear-gradient(180deg,#050505_0%,#06060a_58%,#0c1235_100%)] p-8 md:p-10 lg:p-12">
        <div className="pointer-events-none absolute left-1/2 top-6 h-40 w-[45%] -translate-x-1/2 bg-[radial-gradient(circle,rgba(255,255,255,0.08),rgba(255,255,255,0)_70%)]" />
        <h2 className="mx-auto max-w-[24ch] text-center text-[clamp(36px,5.2vw,78px)] font-extrabold uppercase leading-[1.04] tracking-[-0.03em] text-[#EDEDED]">
          {titleFirstLine}
          <br />
          <span className="text-[#EDEDED]/56">{titleSecondLine}</span>
        </h2>
        <p className="mt-5 text-center text-[13px] font-semibold uppercase tracking-[0.18em] text-[#EDEDED]/62">{subtitle}</p>

        <div className="mt-10 grid gap-5 lg:grid-cols-3 lg:gap-6">
          {questions.map((question, index) => (
            <article
              key={question.id}
              className={`relative overflow-hidden rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(31,31,39,0.92)_0%,rgba(12,12,14,0.96)_54%,rgba(17,20,43,0.92)_78%,rgba(33,49,189,0.38)_100%)] px-6 pb-4 pt-8 ${
                index === 1 ? "lg:translate-y-8" : ""
              }`}
            >
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-[radial-gradient(circle_at_50%_100%,rgba(71,108,255,0.34)_0%,rgba(71,108,255,0.18)_34%,rgba(71,108,255,0.08)_56%,rgba(71,108,255,0)_84%)]" />
              <p className="relative mx-auto max-w-[20ch] text-center text-[clamp(24px,2.2vw,42px)] font-bold leading-[1.16] tracking-[-0.02em] text-[#EDEDED]">
                {question.text}
              </p>
              <div className="relative mt-6 flex justify-center">
                <AnimatedStrategyQuestionVisual id={question.id} />
              </div>
            </article>
          ))}
        </div>

        <p className="mt-12 text-center text-[18px] font-semibold leading-[1.33] text-[#e7d2ad]">{ctaText}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href="#contact"
            className="rounded-[12px] border border-[#e7d2ad]/45 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#EDEDED] transition hover:border-[#e7d2ad]"
          >
            Купить «Базовый» — $…
          </a>
          <a
            href="#contact"
            className="rounded-[12px] border border-[#e7d2ad]/55 bg-[#e7d2ad]/16 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#e7d2ad] transition hover:bg-[#e7d2ad]/24"
          >
            Купить «С поддержкой» — $…
          </a>
          <a
            href="#contact"
            className="rounded-[12px] border border-[#e7d2ad]/65 bg-[#e7d2ad]/20 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#e7d2ad] transition hover:bg-[#e7d2ad]/32"
          >
            Купить «Под ключ» — $…
          </a>
          <a
            href="#free-webinar"
            className="rounded-[12px] border border-[#e7d2ad]/45 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#EDEDED]/92 transition hover:border-[#e7d2ad]"
          >
            Смотреть первый вебинар бесплатно
          </a>
        </div>
      </article>
    </section>
  )
}
