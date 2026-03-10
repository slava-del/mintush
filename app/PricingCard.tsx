"use client";

import { memo, type RefObject } from "react";
import type { PricingPlan } from "./landing-data";

type PricingCardProps = {
  cardRef: RefObject<HTMLDivElement | null>;
  plans: PricingPlan[];
};

export const PricingCard = memo(function PricingCard({ cardRef, plans }: PricingCardProps) {
  return (
    <div
      ref={cardRef}
      className="overflow-hidden rounded-[28px] border border-white/12 bg-[#040404] shadow-[0_40px_140px_rgba(0,0,0,0.74)]"
    >
      <div className="px-6 pb-8 pt-8 md:px-10 md:pb-10 md:pt-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <h2 className="text-[40px] font-extrabold leading-[1.03] tracking-[-0.03em] text-white md:text-[56px]">
              Форматы участия
            </h2>
            <p className="mt-2 text-[17px] font-medium leading-[1.35] text-white/62 md:text-[20px]">
              Выберите формат, который подходит под ваш текущий запрос. Условия участия уже указаны на карточках.
            </p>
          </div>

        </div>

        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {plans.map((plan) => {
            const priceText = plan.oneTimeText ?? plan.monthlyText ?? plan.periodText ?? "";

            return (
              <article
                key={plan.name}
                className="rounded-[22px] border border-white/14 bg-black/45 p-5 md:p-6"
              >
                <h3 className="text-[28px] font-extrabold leading-[1.03] tracking-[-0.02em] text-white md:text-[34px]">
                  {plan.name}
                </h3>
                <p className="mt-2 text-[17px] font-semibold leading-[1.24] text-white/74 md:text-[19px]">
                  {plan.subtitle}
                </p>

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
      </div>
    </div>
  );
});
