import { PenUnderlineOnView } from "./PenUnderlineOnView"

type WhoForSectionProps = {
  whoFor: string[]
}

export function WhoForSection({ whoFor }: WhoForSectionProps) {
  return (
    <section id="who-for" className="mx-auto max-w-[1380px] px-6 pb-14 md:px-12 md:pb-16">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <article className="rounded-[24px] border border-[#47d17b]/26 bg-[radial-gradient(circle_at_20%_18%,rgba(71,209,123,0.20),rgba(7,7,7,0)_45%),#070707] p-8 md:p-10">
          <h2 className="text-[33px] font-extrabold leading-[1.02] tracking-[-0.03em] text-[#EDEDED] md:text-[44px]">Кому подойдёт</h2>
          <p className="mt-5 text-[18px] leading-[1.4] text-[#EDEDED]/84">Курс для владельцев и руководителей МСБ, которые:</p>
          <div className="mt-4 grid gap-3">
            {whoFor.map((item) => (
              <p
                key={item}
                className="rounded-[16px] border border-[#47d17b]/22 bg-[linear-gradient(180deg,rgba(71,209,123,0.10),rgba(10,10,10,0.82))] px-5 py-3.5 text-[18px] leading-[1.36] text-[#EDEDED]/90"
              >
                {item}
              </p>
            ))}
          </div>
        </article>

        <article className="rounded-[24px] border border-[#ff4d4d]/35 bg-[radial-gradient(circle_at_60%_0%,rgba(255,77,77,0.26),rgba(7,7,7,0)_44%),#070707] p-8 md:p-10 lg:flex lg:min-h-[420px] lg:items-center lg:justify-center">
          <p className="text-[20px] leading-[1.42] text-[#EDEDED]/88 lg:max-w-[30ch] lg:text-center">
            Не подойдёт, если вы ждёте{" "}
            <PenUnderlineOnView>«волшебную таблетку»</PenUnderlineOnView>{" "}
            без внедрения: курс практический, поэтому нужно выделить время на шаги и решения.
          </p>
        </article>
      </div>
    </section>
  )
}
