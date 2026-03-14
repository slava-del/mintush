type AudienceFitSectionProps = {
  items: string[]
}

export function AudienceFitSection({ items }: AudienceFitSectionProps) {
  return (
    <section id="who-for" className="mx-auto max-w-[1380px] px-6 pb-14 md:px-12 md:pb-16">
      <div className="grid gap-7 lg:grid-cols-[1.14fr_0.86fr] xl:gap-8">
        <article className="rounded-[24px] border border-[#47d17b]/24 bg-[radial-gradient(circle_at_16%_12%,rgba(71,209,123,0.22),rgba(7,7,7,0)_44%),linear-gradient(180deg,rgba(9,9,9,0.95),rgba(7,7,7,0.9))] p-8 md:p-10">
          <h2 className="text-[34px] font-extrabold leading-[1.02] tracking-[-0.03em] text-[#EDEDED] md:text-[46px]">
            Кому подойдёт
          </h2>
          <p className="mt-4 max-w-[56ch] text-[18px] leading-[1.42] text-[#EDEDED]/82">
            Курс для собственников и руководителей МСБ, которые хотят перейти от ручного управления к устойчивой
            системе.
          </p>

          <div className="mt-7 space-y-2.5">
            {items.map((item) => (
              <div
                key={item}
                className="group flex items-center gap-4 rounded-[14px] border border-[#47d17b]/18 bg-[linear-gradient(90deg,rgba(71,209,123,0.1),rgba(10,10,10,0.78)_48%,rgba(10,10,10,0.9)_100%)] px-5 py-3.5 transition-colors hover:border-[#47d17b]/34"
              >
                <span
                  aria-hidden="true"
                  className="inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-[#7bf0a7]/74 shadow-[0_0_0_3px_rgba(123,240,167,0.12)]"
                />
                <p className="text-[16px] leading-[1.38] text-[#EDEDED]/92 md:text-[17px]">{item}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="relative overflow-hidden rounded-[24px] border border-[#f28b73]/36 bg-[radial-gradient(circle_at_50%_4%,rgba(242,139,115,0.24),rgba(7,7,7,0)_46%),linear-gradient(180deg,rgba(11,11,11,0.95),rgba(8,8,8,0.9))] p-8 shadow-[0_0_0_1px_rgba(242,139,115,0.08)_inset,0_22px_70px_rgba(242,139,115,0.1)] md:p-10 lg:flex lg:min-h-[420px] lg:items-center lg:justify-center">
          <div className="max-w-[34ch] lg:text-center">
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#f4ad9a]/84">Важно учесть</p>
            <p className="mt-5 text-[20px] leading-[1.42] text-[#EDEDED]/90">
              Этот курс не для тех, кто ищет{" "}
              <span className="font-semibold text-[#ffd7cd]">магический shortcut без внедрения</span>.
            </p>
            <p className="mt-3 text-[16px] leading-[1.42] text-[#EDEDED]/66">
              Здесь результат появляется, когда вы внедряете систему шаг за шагом в реальном бизнесе.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}
