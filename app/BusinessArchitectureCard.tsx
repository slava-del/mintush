import Link from "next/link";
import { memo } from "react";

const consultingPoints = [
  "не хватает компетенций для роста",
  "нужно выйти из кризиса или перестроить управление",
  "требуется быстрое решение без права на долгие ошибки",
];

const consultingScheme = [
  { title: "Проблема", note: "находим узкое место" },
  { title: "Система", note: "собираем модель" },
  { title: "Результат", note: "внедряем в работу" },
];

export const BusinessArchitectureCard = memo(function BusinessArchitectureCard() {
  return (
    <section className="relative flex min-h-[calc(100vh-1.5rem)] items-center overflow-hidden px-6 py-8 sm:min-h-[calc(100vh-2rem)] md:min-h-[calc(100vh-3rem)] md:px-10 md:py-12">
      <div className="relative z-10 mx-auto grid w-full max-w-[1640px] items-center gap-10 lg:grid-cols-[minmax(0,0.76fr)_minmax(0,1fr)] lg:gap-12 xl:gap-16">
        <div className="mx-auto w-full max-w-[620px] lg:mx-0">
          <p className="text-[11px] font-semibold uppercase tracking-[0.13em] text-white/40 md:text-[12px]">
            Для компаний
          </p>
          <h2
            className="mt-3 font-extrabold leading-[0.98] tracking-[-0.035em] text-white"
            style={{ fontSize: "clamp(38px, 4.6vw, 68px)" }}
          >
            Архитектура бизнеса
          </h2>

          <p className="mt-5 max-w-[34ch] text-[17px] leading-[1.38] text-white/74 md:text-[20px]">
            Если в компании случилась проблема, с которой не удаётся справиться своими силами, мы подключаемся как
            команда и собираем рабочую систему под задачу.
          </p>

          <div className="mt-7 grid gap-3">
            {consultingPoints.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 text-[15px] font-medium leading-[1.35] text-white/82 md:text-[16px]"
              >
                <span aria-hidden="true" className="mt-[11px] inline-block h-px w-4 flex-shrink-0 bg-white/26" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <p className="mt-7 max-w-[38ch] text-[15px] font-medium leading-[1.42] text-white/66 md:text-[17px]">
            Мы не только предлагаем, как должно быть, — мы внедряем решения и передаём результат в работу.
          </p>

          <div className="mt-8 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
            <Link
              href="/consulting#form"
              className="group inline-flex h-[56px] items-center gap-3 self-start rounded-[16px] border border-white/12 bg-white px-5 py-4 text-black shadow-[0_16px_44px_rgba(0,0,0,0.18)] transition hover:translate-y-[-1px]"
            >
              <span className="text-[14px] font-semibold leading-tight md:text-[15px]">
                Получить консультацию
              </span>
              <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-full bg-black text-white transition group-hover:bg-[#171717]">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M8 16l8-8M10 8h6v6"
                    stroke="currentColor"
                    strokeWidth="2.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>

            <Link
              href="/consulting"
              className="inline-flex h-[56px] items-center gap-1.5 self-start px-1 py-1 text-[14px] font-semibold text-white/66 transition hover:text-white/86 md:text-[15px]"
            >
              Смотреть подробнее
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M8 16l8-8M10 8h6v6"
                  stroke="currentColor"
                  strokeWidth="2.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div className="relative flex min-h-0 items-center justify-center">
          <div className="relative w-full max-w-[900px] rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,#0a0a0a_0%,#060606_100%)] px-6 py-8 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03),0_30px_90px_rgba(0,0,0,0.42)] md:px-8 md:py-10 xl:px-10 xl:py-12">
            <div className="rounded-[24px] border border-white/8 bg-white/[0.02] px-5 py-8 md:px-8 md:py-10">
              <div className="flex flex-col items-center gap-4 text-center md:flex-row md:items-center md:justify-between md:gap-5">
                {consultingScheme.map((item, index) => (
                  <div key={item.title} className="flex items-center gap-4 md:contents">
                    <div className="min-w-0 flex-1 text-center">
                      <p className="text-[clamp(30px,3.7vw,54px)] font-extrabold leading-[0.98] tracking-[-0.04em] text-white">
                        {item.title}
                      </p>
                    </div>
                    {index < consultingScheme.length - 1 ? (
                      <div className="flex items-center justify-center text-white/18 md:px-1">
                        <span className="hidden text-[40px] leading-none md:inline">→</span>
                        <span className="text-[24px] leading-none md:hidden">↓</span>
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>

              <div className="mt-7 grid gap-4 border-t border-white/8 pt-5 text-center md:grid-cols-3 md:gap-5 md:pt-6">
                {consultingScheme.map((item) => (
                  <p
                    key={item.note}
                    className="text-[13px] font-medium leading-[1.4] text-white/52 md:text-[14px]"
                  >
                    {item.note}
                  </p>
                ))}
              </div>
            </div>

            <p className="mt-5 text-[14px] font-medium leading-[1.45] text-white/62 md:text-[15px]">
              Не презентация, а рабочая система для вашей команды.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});
