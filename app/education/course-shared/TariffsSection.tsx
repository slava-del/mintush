"use client"

import type { TariffCard } from "./types"
import { useCourseEnrollment } from "./CourseEnrollmentProvider"

type TariffsSectionProps = {
  tariffCards: TariffCard[]
}

export function TariffsSection({ tariffCards }: TariffsSectionProps) {
  const { openEnrollment } = useCourseEnrollment()

  return (
    <section id="tariffs" className="mx-auto max-w-[1380px] px-6 pb-14 md:px-12 md:pb-16">
      <h2 className="text-[34px] font-extrabold leading-[1.02] tracking-[-0.03em] text-[#EDEDED] md:text-[48px]">Тарифы</h2>
      <div className="mt-6 grid gap-6 xl:grid-cols-3">
        {tariffCards.map((tariff) => (
          <article
            key={tariff.id}
            role="button"
            tabIndex={0}
            aria-label={`Выбрать пакет ${tariff.title}`}
            onClick={() => openEnrollment(tariff.id)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault()
                openEnrollment(tariff.id)
              }
            }}
            className={`relative flex h-full cursor-pointer flex-col overflow-hidden rounded-[18px] border p-6 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6f8df9]/38 ${
              tariff.isFeatured ? "translate-y-[-2px]" : ""
            }`}
            style={{
              background: tariff.cardBackground,
              borderColor: tariff.cardBorder,
              boxShadow: tariff.glow,
            }}
          >
            {tariff.isFeatured && (
              <span className="absolute right-4 top-4 rounded-full border border-[#D4B174]/70 bg-[#D4B174]/18 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#D4B174]">
                Рекомендуем
              </span>
            )}
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em]" style={{ color: tariff.titleColor }}>
              {tariff.title}
            </p>
            <p className="mt-2 text-[38px] font-extrabold leading-none tracking-[-0.03em] text-[#EDEDED]">{tariff.price}</p>
            <p className="mt-3 text-[17px] leading-[1.38] text-[#EDEDED]/86">{tariff.intro}</p>
            <p className="mt-4 text-[12px] font-semibold uppercase tracking-[0.1em]" style={{ color: tariff.includesColor }}>
              Включает:
            </p>
            <div className="mt-4 grid gap-2.5">
              {tariff.includes.map((item) => (
                <p key={item} className="flex items-start gap-2 text-[16px] leading-[1.38] text-[#EDEDED]/90">
                  <span className="mt-[0.5em] h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: tariff.titleColor }} />
                  <span>{item}</span>
                </p>
              ))}
            </div>
            <div className="mt-auto pt-8">
              <span
                className={`inline-flex w-full translate-y-0 items-center justify-center rounded-[12px] border px-4 py-2.5 text-center text-[13px] font-semibold uppercase tracking-[0.08em] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(0,0,0,0.34)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e7d2ad]/42 ${
                  tariff.buttonFilled ? "hover:brightness-105" : "hover:bg-white/6"
                }`}
                style={{
                  background: tariff.buttonBackground,
                  borderColor: tariff.buttonBorder,
                  color: tariff.buttonText,
                }}
              >
                {tariff.button}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
