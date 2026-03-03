"use client";

import { useState, type RefObject } from "react";
import type { PricingPlan } from "./landing-data";

type PricingCardProps = {
  cardRef: RefObject<HTMLDivElement | null>;
  plans: PricingPlan[];
};

type PriceMode = "monthly" | "period";

export function PricingCard({ cardRef, plans }: PricingCardProps) {
  const [priceMode, setPriceMode] = useState<PriceMode>("monthly");

  return (
    <div
      ref={cardRef}
      className="h-[calc(100vh-1.5rem)] sm:h-[calc(100vh-2rem)] md:h-[calc(100vh-3rem)] overscroll-contain overflow-x-hidden overflow-y-auto rounded-[28px] border border-white/12 bg-[#040404] shadow-[0_40px_140px_rgba(0,0,0,0.74)]"
    >
      <div className="px-6 pb-8 pt-8 md:px-10 md:pb-10 md:pt-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <h2 className="text-[40px] font-extrabold leading-[1.03] tracking-[-0.03em] text-white md:text-[56px]">
              Тарифы
            </h2>
            <p className="mt-2 text-[17px] font-medium leading-[1.35] text-white/62 md:text-[20px]">
              Выберите формат и горизонт: месяц / 3 месяца / 6 месяцев.
            </p>
          </div>

          <div className="rounded-[14px] border border-white/12 bg-white/[0.03] p-1">
            <p className="px-2 pb-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-white/45">
              Показывать цены
            </p>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setPriceMode("monthly")}
                className={`rounded-[10px] px-3 py-1.5 text-[12px] font-semibold transition ${
                  priceMode === "monthly"
                    ? "bg-[#e7d2ad] text-black"
                    : "text-white/70 hover:bg-white/[0.06] hover:text-white"
                }`}
              >
                в месяц
              </button>
              <button
                type="button"
                onClick={() => setPriceMode("period")}
                className={`rounded-[10px] px-3 py-1.5 text-[12px] font-semibold transition ${
                  priceMode === "period"
                    ? "bg-[#e7d2ad] text-black"
                    : "text-white/70 hover:bg-white/[0.06] hover:text-white"
                }`}
              >
                за период
              </button>
            </div>
          </div>
        </div>

        <div className="mt-7 grid gap-4 md:grid-cols-2">
          {plans.map((plan) => {
            const priceText =
              priceMode === "period" && plan.periodText
                ? plan.periodText
                : plan.oneTimeText
                  ? plan.oneTimeText
                  : plan.monthlyText ?? "";

            return (
              <article
                key={plan.name}
                className="rounded-[22px] border border-white/14 bg-black/45 p-5 md:p-6"
              >
                <h3 className="text-[28px] font-extrabold leading-[1.03] tracking-[-0.02em] text-white md:text-[34px]">
                  {plan.name}
                </h3>

                <div className="mt-4 flex flex-wrap items-center gap-2.5">
                  <p className="text-[24px] font-extrabold leading-[1] tracking-[-0.02em] text-[#e7d2ad] md:text-[30px]">
                    {priceText}
                  </p>
                  <span className="inline-flex items-center rounded-full border border-[#e7d2ad]/42 bg-[#e7d2ad]/14 px-3 py-1 text-[12px] font-semibold text-[#e7d2ad]">
                    {plan.commitment}
                  </span>
                </div>

                <div className="mt-5 space-y-2.5">
                  {plan.bullets.map((bullet) => (
                    <p key={bullet} className="text-[16px] leading-[1.3] text-white/74">
                      — {bullet}
                    </p>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-2.5">
                  <a
                    href={plan.primaryHref}
                    className="inline-flex items-center rounded-[12px] bg-[#e7d2ad] px-4 py-2 text-[13px] font-semibold text-black transition hover:translate-y-[-1px]"
                  >
                    {plan.primaryCta}
                  </a>
                  <a
                    href={plan.secondaryHref}
                    className="inline-flex items-center gap-1 text-[13px] font-semibold text-white/70 transition hover:text-white"
                  >
                    {plan.secondaryCta}
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-6 text-center text-[16px] font-medium leading-[1.35] text-white/56 md:text-[18px]">
          Почему минимум? Чтобы успеть внедрить и увидеть результат, а не просто «прочитать».
        </p>
      </div>
    </div>
  );
}
