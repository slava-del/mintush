import type { FormatHighlight } from "./types"

type ProgramSectionProps = {
  guides: string[]
  webinars: string[]
  formatHighlights: FormatHighlight[]
  summary: string
  sectionId?: string
}

export function ProgramSection({ guides, webinars, formatHighlights, summary, sectionId = "program" }: ProgramSectionProps) {
  return (
    <section id={sectionId} className="mx-auto max-w-[1380px] px-6 pb-14 md:px-12 md:pb-16">
      <article className="rounded-[24px] bg-[linear-gradient(180deg,rgba(9,9,9,0.92),rgba(7,7,7,0.88))] p-8 md:p-10">
        <div className="max-w-[920px]">
          <h2 className="text-[35px] font-extrabold leading-[1.02] tracking-[-0.03em] text-[#EDEDED] md:text-[48px]">Что внутри</h2>
          <p className="mt-3 text-[17px] leading-[1.45] text-[#EDEDED]/70 md:text-[19px]">
            {summary}
          </p>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <article className="relative overflow-hidden rounded-[20px] border border-[#e7d2ad]/30 bg-[linear-gradient(180deg,rgba(231,210,173,0.12),rgba(10,10,10,0.92)_30%,rgba(10,10,10,0.98)_100%)] p-7 md:p-8">
            <div className="pointer-events-none absolute right-4 top-4 h-12 w-12 rounded-full bg-[#e7d2ad]/10 blur-xl" />
            <div className="flex items-end gap-3">
              <p className="text-[60px] font-extrabold leading-none tracking-[-0.04em] text-[#e7d2ad]">{guides.length}</p>
              <p className="pb-1 text-[16px] font-semibold uppercase tracking-[0.08em] text-[#e7d2ad]/90 md:text-[18px]">Практических руководства</p>
            </div>
            <div className="mt-5 grid gap-2.5">
              {guides.map((guide) => (
                <p key={guide} className="text-[17px] leading-[1.36] text-[#EDEDED]/92">
                  {guide}
                </p>
              ))}
            </div>
          </article>

          <article className="relative overflow-hidden rounded-[20px] border border-white/14 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(12,12,12,0.92)_30%,rgba(10,10,10,0.98)_100%)] p-7 md:p-8">
            <div className="pointer-events-none absolute right-4 top-4 h-12 w-12 rounded-full bg-white/8 blur-xl" />
            <div className="flex items-end gap-3">
              <p className="text-[60px] font-extrabold leading-none tracking-[-0.04em] text-[#EDEDED]">{webinars.length}</p>
              <p className="pb-1 text-[16px] font-semibold uppercase tracking-[0.08em] text-[#EDEDED]/86 md:text-[18px]">Вебинаров</p>
            </div>
            <div className="mt-5 grid gap-2.5">
              {webinars.map((webinar) => (
                <p key={webinar} className="text-[17px] leading-[1.36] text-[#EDEDED]/92">
                  {webinar}
                </p>
              ))}
            </div>
          </article>
        </div>

        <div className="mt-7">
          <h3 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#EDEDED]/62">Формат обучения</h3>
          <div className="mt-3 grid gap-3 md:grid-cols-3">
            {formatHighlights.map((item) => (
              <article key={item.lead} className="rounded-[14px] border border-white/8 bg-white/[0.02] px-4 py-4">
                <p className="text-[15px] font-semibold leading-[1.28] text-[#EDEDED]">{item.lead}</p>
                <p className="mt-1.5 text-[13px] leading-[1.35] text-[#EDEDED]/62">{item.support}</p>
              </article>
            ))}
          </div>
        </div>
      </article>
    </section>
  )
}
