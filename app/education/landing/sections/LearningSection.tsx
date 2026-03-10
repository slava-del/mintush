import type { DeliveryBlock, LearningStat } from "../types"

type LearningSectionProps = {
  learningStats: LearningStat[]
  courseThemes: string[]
  deliveryBlocks: DeliveryBlock[]
  learningFormats: string[]
}

export function LearningSection({
  learningStats,
  courseThemes,
  deliveryBlocks,
  learningFormats,
}: LearningSectionProps) {
  return (
    <section data-section-id="learning" className="px-6 pb-12 md:px-10 md:pb-14">
      <div className="mx-auto max-w-5xl rounded-[24px] border border-white/10 bg-[#060606] p-6 md:p-9">
        <h3 className="text-[32px] font-extrabold leading-[1.04] tracking-[-0.03em] text-white md:text-[44px]">
          Сильное управление требует системного обучения
        </h3>
        <p className="mt-3 max-w-4xl text-[15px] leading-[1.35] text-white/70 md:text-[18px]">
          Поэтому мы собрали короткие мини-курсы от практиков — по стратегии, бизнес-системе и управлению компанией
          без перегруза.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {learningStats.map((item) => (
            <article key={item.value} className="rounded-[18px] border border-white/10 bg-[#0a0a0a] p-5">
              <p className="text-[42px] font-extrabold leading-[0.95] tracking-[-0.03em] text-white md:text-[46px]">
                {item.value}
              </p>
              <div className="mt-3 space-y-1">
                {item.lines.map((line) => (
                  <p key={line} className="text-[15px] leading-[1.3] text-white/72 md:text-[16px]">
                    {line}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 h-px bg-white/10" />

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <article className="rounded-[18px] border border-white/10 bg-[#0a0a0a] p-5">
            <h4 className="text-[22px] font-extrabold leading-[1.08] tracking-[-0.02em] text-white md:text-[28px]">
              О чём мини-курсы
            </h4>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {courseThemes.map((theme) => (
                <p
                  key={theme}
                  className="rounded-[10px] border border-[#e7d2ad]/20 bg-[#101010] px-3 py-2 text-[15px] font-semibold leading-[1.2] text-[#e7d2ad]"
                >
                  {theme}
                </p>
              ))}
            </div>
            <p className="mt-5 text-[15px] leading-[1.34] text-white/70 md:text-[16px]">
              Чтобы руководитель понимал лучшие практики и видел, как выстраивать управление компанией в реальной
              работе.
            </p>
          </article>

          <article className="rounded-[18px] border border-white/10 bg-[#0a0a0a] p-5">
            <h4 className="text-[22px] font-extrabold leading-[1.08] tracking-[-0.02em] text-white md:text-[28px]">
              Как это устроено
            </h4>
            <div className="mt-4 grid gap-3">
              {deliveryBlocks.map((block) => (
                <div key={block.title} className="rounded-[12px] border border-white/10 bg-[#111111] p-4">
                  <p className="text-[16px] font-semibold leading-[1.2] text-[#e7d2ad]">{block.title}</p>
                  <div className="mt-2 space-y-0.5">
                    {block.lines.map((line) => (
                      <p key={line} className="text-[14px] leading-[1.3] text-white/68 md:text-[15px]">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="mt-8 rounded-[16px] border border-white/10 bg-[#0a0a0a] p-5">
          <h4 className="text-[24px] font-extrabold leading-[1.04] tracking-[-0.02em] text-white md:text-[32px]">
            Что входит в курс
          </h4>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {learningFormats.map((item) => (
              <div
                key={item}
                className="rounded-[12px] border border-[#e7d2ad]/35 bg-[#101010] px-4 py-3 text-[15px] font-semibold text-white/84 md:text-[16px]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
