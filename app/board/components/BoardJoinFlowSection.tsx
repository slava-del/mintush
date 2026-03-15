import type { BoardJoinFlowContent } from "../data"

type BoardJoinFlowSectionProps = {
  content: BoardJoinFlowContent
}

export function BoardJoinFlowSection({ content }: BoardJoinFlowSectionProps) {
  return (
    <section id="join" className="relative">
      <div className="pt-14 md:pt-16 lg:pt-20">
        <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-[#e7d2ad]/70 md:text-[13px]">
          {content.eyebrow}
        </p>

        <h2 className="mt-5 max-w-[14ch] text-[44px] font-bold leading-[1.03] tracking-[-0.028em] text-[#EDEDED] md:text-[58px] lg:text-[64px] xl:text-[68px]">
          {content.title}
        </h2>

        <p className="mt-6 max-w-[56ch] text-[18px] leading-[1.6] text-[#EDEDED]/70 md:text-[20px] lg:text-[21px]">
          {content.subtitle}
        </p>

        <div className="mt-12 border-y border-[#e7d2ad]/14 md:mt-14">
          {content.rows.map((row, index) => (
            <article
              key={row.title}
              className={`grid gap-4 py-7 md:grid-cols-[minmax(0,0.44fr)_minmax(0,0.56fr)] md:gap-10 md:py-9 lg:gap-12 lg:py-10 ${
                index !== content.rows.length - 1 ? "border-b border-[#e7d2ad]/12" : ""
              }`}
            >
              <h3 className="max-w-[18ch] text-[31px] font-semibold leading-[1.1] tracking-[-0.02em] text-[#f2ece2] md:text-[36px] lg:text-[40px]">
                {row.title}
              </h3>
              <p className="max-w-[54ch] text-[17px] leading-[1.68] text-[#EDEDED]/66 md:text-[18px] lg:text-[19px]">
                {row.text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 md:mt-10">
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            <a
              href={content.primaryCta.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-[14px] bg-[#e7d2ad] px-6 py-3.5 text-[14px] font-semibold tracking-[0.08em] text-[#1b140c] transition hover:translate-y-[-1px] hover:bg-[#f0dfbf]"
            >
              {content.primaryCta.label}
            </a>
            <a
              href={content.secondaryCta.href}
              className="text-[15px] font-medium text-[#d8c5a3] transition hover:text-[#f2e5cf]"
            >
              {content.secondaryCta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
