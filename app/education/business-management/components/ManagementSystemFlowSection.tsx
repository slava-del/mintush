import type { MonthlyQuestion } from "../../course-shared"

type ManagementSystemFlowSectionProps = {
  titleFirstLine: string
  titleSecondLine: string
  subtitle: string
  questions: MonthlyQuestion[]
}

const questionMicroHeadings: Record<MonthlyQuestion["id"], string> = {
  direction: "Ответственность",
  metrics: "Метрики",
  decisions: "Ритм управления",
}

export function ManagementSystemFlowSection({
  titleFirstLine,
  titleSecondLine,
  subtitle,
  questions,
}: ManagementSystemFlowSectionProps) {
  return (
    <section className="mx-auto flex min-h-[92vh] max-w-[1380px] items-center px-6 py-14 md:min-h-[calc(100vh-3rem)] md:px-12 md:py-16">
      <div className="relative w-full">
        <div className="pointer-events-none absolute right-[8%] top-[12%] h-44 w-44 rounded-full bg-[#94b2ff]/18 blur-3xl" />
        <div className="pointer-events-none absolute left-[6%] top-[54%] h-36 w-36 rounded-full bg-[#6e96ff]/14 blur-3xl" />

        <h2 className="mx-auto max-w-[26ch] text-center text-[clamp(36px,5.2vw,78px)] font-extrabold uppercase leading-[1.04] tracking-[-0.03em] text-[#EDEDED]">
          {titleFirstLine}
          <br />
          <span className="text-[#EDEDED]/60">{titleSecondLine}</span>
        </h2>
        <p className="mt-5 text-center text-[15px] leading-[1.45] text-[#EDEDED]/62 md:text-[16px]">{subtitle}</p>

        <div className="relative mt-16 overflow-hidden rounded-[18px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(12,13,18,0.92)_68%,rgba(14,20,48,0.82)_100%)] shadow-[0_22px_70px_rgba(0,0,0,0.3)] md:mt-20">
          <div className="pointer-events-none absolute right-[-6%] top-[-48%] h-52 w-52 rounded-full bg-[radial-gradient(circle,rgba(136,169,255,0.34),rgba(136,169,255,0)_70%)] blur-xl" />
          <div className="pointer-events-none absolute left-[28%] bottom-[-62%] h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(109,149,255,0.24),rgba(109,149,255,0)_72%)] blur-2xl" />
          <div className="grid md:grid-cols-3">
            {questions.map((question, index) => (
              <article
                key={question.id}
                className={`relative px-6 py-6 md:px-7 md:py-7 ${
                  index < questions.length - 1 ? "border-b border-white/8 md:border-b-0 md:border-r md:border-r-white/10" : ""
                }`}
              >
                <div className="inline-flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="inline-block h-1.5 w-1.5 rounded-full bg-[#e7d2ad]/78 shadow-[0_0_0_3px_rgba(231,210,173,0.12)]"
                  />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#EDEDED]/54">
                    {questionMicroHeadings[question.id]}
                  </span>
                </div>
                <p className="mt-3 text-[19px] font-semibold leading-[1.34] tracking-[-0.015em] text-[#EDEDED]/90 md:text-[21px]">
                  {question.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
