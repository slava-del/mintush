import type { RefObject } from "react";
import type { StartFormat } from "./landing-data";

type StartCardProps = {
  cardRef: RefObject<HTMLDivElement | null>;
  startFormats: StartFormat[];
};

export function StartCard({ cardRef, startFormats }: StartCardProps) {
  return (
    <div
      ref={cardRef}
      className="h-[calc(100vh-1.5rem)] sm:h-[calc(100vh-2rem)] md:h-[calc(100vh-3rem)] overscroll-contain overflow-x-hidden overflow-y-auto rounded-[28px] border border-white/12 bg-[#040404] shadow-[0_40px_140px_rgba(0,0,0,0.72)]"
    >
      <div className="flex min-h-full flex-col px-6 pb-8 pt-8 md:px-10 md:pb-10 md:pt-10">
        <h2 className="text-center text-[42px] font-extrabold leading-[1.03] tracking-[-0.03em] text-white md:text-[58px]">
          С чего начать
        </h2>
        <p className="mt-3 text-center text-[18px] font-medium leading-[1.3] text-white/65 md:text-[21px]">
          Выберите свою ситуацию — мы покажем лучший формат.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {startFormats.map((item) => (
            <a
              key={item.situation}
              href={item.href}
              className="rounded-[22px] border border-white/14 bg-black/45 p-5 transition hover:border-[#e7d2ad]/45 hover:bg-black/55 md:min-h-[210px] md:p-6"
            >
              <div className="flex h-full min-h-[160px] flex-col justify-between">
                <h3 className="max-w-[20ch] text-[22px] font-semibold leading-[1.1] tracking-[-0.01em] text-white/92 md:text-[27px]">
                  {item.situation}
                </h3>
                <p className="self-end text-right text-[28px] font-extrabold leading-[1.06] tracking-[-0.02em] text-[#e7d2ad] md:text-[36px]">
                  {item.format}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-auto pt-8">
          <div className="flex justify-center">
            <a
              href="https://t.me/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-[#e7d2ad]/35 bg-[#e7d2ad]/10 px-7 py-3 text-[16px] font-semibold text-[#e7d2ad] transition hover:border-[#e7d2ad]/65 hover:bg-[#e7d2ad]/16 md:text-[18px]"
            >
              Не уверены? Подберём формат в Telegram за 5 вопросов →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
