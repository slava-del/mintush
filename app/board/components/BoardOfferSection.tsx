import type { BoardOfferContent } from "../data"

type BoardOfferSectionProps = {
  content: BoardOfferContent
}

export function BoardOfferSection({ content }: BoardOfferSectionProps) {
  const entryAccent = "по заявке"
  const entryParts = content.entryNote.split(entryAccent)
  const [priceMainRaw, ...pricePeriodParts] = content.price.split("/")
  const priceMain = priceMainRaw?.trim() ?? content.price
  const pricePeriod = pricePeriodParts.join("/").trim()
  const hasPricePeriod = pricePeriod.length > 0

  return (
    <section id="offer" className="relative">
      <div className="overflow-hidden rounded-[30px] border border-[#d1b58a]/52 bg-[linear-gradient(180deg,#ebdfc8_0%,#e3d1b1_56%,#d8bf98_100%)] px-6 py-8 md:px-12 md:py-10 lg:px-14 lg:py-12">
        <div className="space-y-8 md:space-y-9 lg:space-y-10">
          <div>
            <p className="text-[13px] font-medium tracking-[0.03em] text-[#5D452A] md:text-[14px]">
              {content.benefitsTitle}
            </p>

            <div className="mt-5 grid gap-6 md:grid-cols-[0.7fr_1.3fr] md:gap-8 lg:gap-10">
              {content.benefitGroups.map((group, index) => (
                <div key={group.title} className={index === 0 ? "max-w-[280px]" : "max-w-[520px]"}>
                  <p className="text-[12px] font-medium tracking-[0.03em] text-[#654A2C] md:text-[13px]">
                    {group.title}
                  </p>
                  <ul className="mt-3 space-y-3.5">
                    {group.items.map((item) => {
                      if (item === "4 встречи в месяц") {
                        return (
                          <li key={item} className="flex items-start gap-3">
                            <span aria-hidden className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#8B6943]/75" />
                            <p className="text-[17px] font-medium leading-[1.5] text-[#241C13] md:text-[18px] lg:text-[20px]">
                              <span className="font-semibold text-[#0E0D0A]">4 встречи</span> в месяц
                            </p>
                          </li>
                        )
                      }

                      return (
                        <li key={item} className="flex items-start gap-3">
                          <span aria-hidden className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#8B6943]/65" />
                          <p className="text-[16px] leading-[1.52] text-[#241C13] md:text-[17px] lg:text-[18px]">
                            {item}
                          </p>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-[#c0a37a] pt-7 md:pt-8">
            <p className="text-[13px] font-medium tracking-[0.03em] text-[#5D452A] md:text-[14px]">
              {content.qualifierTitle}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3 md:flex-nowrap md:gap-3.5">
              {content.qualifierItems.map((item) => (
                <span
                  key={item}
                  className="inline-flex whitespace-nowrap rounded-full border border-[#ab8961] bg-[#efe2cc]/70 px-5 py-2.5 text-[15px] font-medium leading-[1.35] text-[#231a10] md:text-[16px] lg:text-[17px]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="border-t border-[#c0a37a] pt-7 md:pt-8">
            <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-end md:gap-7">
              <div>
                <p className="flex flex-wrap items-baseline gap-x-2 gap-y-1 leading-none">
                  <span className="text-[38px] font-bold tracking-[-0.024em] text-[#0E0D0A] md:text-[44px] lg:text-[50px]">
                    {hasPricePeriod ? priceMain : content.price}
                  </span>
                  {hasPricePeriod ? (
                    <span className="text-[18px] font-medium text-[#5a452d] md:text-[20px]">
                      / {pricePeriod}
                    </span>
                  ) : null}
                </p>
                <p className="mt-2 text-[14px] leading-[1.52] text-[#5a4834] md:text-[15px] lg:text-[16px]">
                  {content.commitment}
                </p>
                <p className="mt-2.5 max-w-[56ch] text-[14px] leading-[1.62] text-[#4d3d2b] md:text-[15px] lg:text-[16px]">
                  {entryParts.length > 1 ? (
                    <>
                      {entryParts[0]}
                      <span className="font-semibold text-[#20170d]">{entryAccent}</span>
                      {entryParts.slice(1).join(entryAccent)}
                    </>
                  ) : (
                    content.entryNote
                  )}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 md:justify-end">
                <a
                  href={content.primaryCta.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-[14px] bg-black px-6 py-3.5 text-[15px] font-semibold text-[#e7d2ad] transition hover:translate-y-[-1px] hover:bg-[#151515]"
                >
                  {content.primaryCta.label}
                </a>

                <a
                  href={content.secondaryCta.href}
                  className="inline-flex items-center rounded-[12px] border border-[#a8865e] bg-[#efe2cc]/75 px-4 py-3 text-[14px] font-medium text-[#2b2117] transition hover:border-[#7f603d] hover:text-[#0E0D0A] md:whitespace-nowrap"
                >
                  {content.secondaryCta.label}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
