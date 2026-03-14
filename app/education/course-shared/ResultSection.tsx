import type { ResultItem } from "./types"

type ResultSectionProps = {
  items: ResultItem[]
}

export function ResultSection({ items }: ResultSectionProps) {
  return (
    <section id="result" className="mx-auto max-w-[1380px] px-6 pb-16 md:px-12 md:pb-20">
      <article className="rounded-[24px] border border-[#e7d2ad]/14 bg-[#070707]/88 p-10 md:p-12">
        <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-6">
          <div className="max-w-[780px]">
            <h2 className="text-[40px] font-extrabold leading-[1.02] tracking-[-0.028em] text-[#EDEDED] md:text-[52px] lg:text-[56px]">
              Что вы получите в итоге
            </h2>
            <p className="mt-3 text-[17px] leading-[1.42] text-[#EDEDED]/64 md:text-[19px]">
              Практические результаты, которые можно сразу применить в управленческой работе.
            </p>
          </div>
          <a
            href="#tariffs"
            className="inline-flex items-center rounded-[14px] border border-[#e7d2ad]/32 bg-[#e7d2ad]/8 px-5 py-2.5 text-[13px] font-semibold tracking-[0.04em] text-[#e7d2ad] transition hover:border-[#e7d2ad]/55 hover:bg-[#e7d2ad]/16"
          >
            Записаться на курс
          </a>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 md:gap-5">
          {items.map((item) => (
            <article
              key={item.id}
              className="group rounded-[20px] border border-[#e7d2ad]/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(231,210,173,0.04))] px-7 py-5 transition hover:border-[#e7d2ad]/28 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(231,210,173,0.08))]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="inline-flex items-center gap-2">
                  <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-full border border-[#e7d2ad]/30 px-2 text-[12px] font-semibold tracking-[0.08em] text-[#e7d2ad]/85">
                    {item.id}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#EDEDED]/40">Результат</span>
                </div>
                <span className="text-[18px] leading-none text-[#e7d2ad]/38 transition group-hover:text-[#e7d2ad]/72">↗</span>
              </div>
              <h3 className="mt-4 text-[27px] font-bold leading-[1.08] tracking-[-0.02em] text-[#EDEDED]">{item.title}</h3>
              <p className="mt-2 text-[16px] leading-[1.45] text-[#EDEDED]/68">{item.description}</p>
            </article>
          ))}
        </div>
      </article>
    </section>
  )
}
