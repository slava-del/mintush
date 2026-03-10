type GptVsSystemSectionProps = {
  gptMessages: string[]
  curriculumBlocks: string[]
}

export function GptVsSystemSection({ gptMessages, curriculumBlocks }: GptVsSystemSectionProps) {
  return (
    <section data-section-id="business-system" className="px-6 pb-12 md:px-10 md:pb-14">
      <div className="mx-auto max-w-5xl rounded-[24px] border border-white/10 bg-[#070707] p-6 md:p-9">
        <h3 className="text-[34px] font-extrabold leading-[1.02] tracking-[-0.03em] text-white md:text-[48px]">
          GPT vs Система
        </h3>
        <p className="mt-3 text-[17px] leading-[1.35] text-white/70 md:text-[20px]">
          Ответы полезны. Но <strong className="font-extrabold">внедряется только система.</strong>
        </p>

        <div className="mt-7 grid gap-4 md:grid-cols-2">
          <article className="rounded-[20px] border border-white/8 bg-[#090909] p-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/38">GPT-чат</p>
            <div className="relative mt-3 h-[330px] overflow-hidden rounded-[14px] border border-white/6 bg-[#070707] p-3">
              <div className="gpt-stream absolute inset-x-3 top-3 space-y-3">
                {[...gptMessages, ...gptMessages].map((item, index) => (
                  <div
                    key={`${item}-${index}`}
                    className={`rounded-[15px] border px-3 py-2 text-[12px] leading-[1.25] ${
                      index % 2 === 0
                        ? "mr-auto border-white/10 bg-white/[0.045] text-white/56"
                        : "ml-auto border-white/8 bg-white/[0.03] text-white/48"
                    } ${
                      index % 7 === 0
                        ? "w-[76%] opacity-90"
                        : index % 7 === 1
                          ? "w-[63%] opacity-70"
                          : index % 7 === 2
                            ? "w-[69%] opacity-82"
                            : index % 7 === 3
                              ? "w-[56%] opacity-66"
                              : index % 7 === 4
                                ? "w-[73%] opacity-86"
                                : index % 7 === 5
                                  ? "w-[60%] opacity-68"
                                  : "w-[67%] opacity-78"
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </article>

          <article className="rounded-[20px] border border-[#e7d2ad]/46 bg-[radial-gradient(circle_at_16%_10%,rgba(231,210,173,0.14),rgba(0,0,0,0)_42%),#0d0b08] p-4 shadow-[inset_0_0_0_1px_rgba(231,210,173,0.08),0_18px_44px_rgba(0,0,0,0.28)]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#f0d9aa]">СИСТЕМНАЯ ПРОГРАММА</p>
            <div className="mt-3 space-y-3">
              {curriculumBlocks.map((item, index) => (
                <div
                  key={item}
                  className="system-block flex min-h-[62px] items-center rounded-[12px] border border-[#e7d2ad]/34 bg-[linear-gradient(180deg,rgba(231,210,173,0.11),rgba(231,210,173,0.05))] px-3 py-3 text-[13px] font-semibold leading-[1.25] text-white/90"
                  style={{ animationDelay: `${index * 140}ms` }}
                >
                  {item}
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
