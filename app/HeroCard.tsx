import Image from "next/image";
import { useEffect, useMemo, useRef, useState, type MutableRefObject, type RefObject } from "react";
import type { Highlight } from "./landing-data";

type HeroCardProps = {
  cardRef: RefObject<HTMLDivElement | null>;
  itemRefs: MutableRefObject<Array<HTMLDivElement | null>>;
  highlights: Highlight[];
  visibleItems: boolean[];
};

export function HeroCard({ cardRef, itemRefs, highlights, visibleItems }: HeroCardProps) {
  const topNumberParts = useMemo(
    () =>
      highlights.map((item) => {
        const match = item.top.match(/^(\d+)(\+?)(.*)$/u);
        if (!match) return null;
        return {
          target: Number(match[1]),
          plus: match[2],
          rest: match[3],
        };
      }),
    [highlights],
  );

  const [animatedTopNumbers, setAnimatedTopNumbers] = useState<number[]>(
    () => highlights.map(() => 0),
  );
  const hasStartedNumberAnimationRef = useRef<boolean[]>(
    highlights.map(() => false),
  );

  useEffect(() => {
    const rafIds: Array<number | null> = highlights.map(() => null);

    visibleItems.forEach((isVisible, index) => {
      const parts = topNumberParts[index];
      if (!isVisible || !parts || hasStartedNumberAnimationRef.current[index]) return;

      hasStartedNumberAnimationRef.current[index] = true;
      const startedAt = performance.now();
      const duration = 900 + index * 120;

      const animate = (now: number) => {
        const progress = Math.min((now - startedAt) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const nextValue = Math.round(parts.target * eased);

        setAnimatedTopNumbers((prev) => {
          if (prev[index] === nextValue) return prev;
          const next = [...prev];
          next[index] = nextValue;
          return next;
        });

        if (progress < 1) {
          rafIds[index] = requestAnimationFrame(animate);
        }
      };

      rafIds[index] = requestAnimationFrame(animate);
    });

    return () => {
      rafIds.forEach((id) => {
        if (id !== null) cancelAnimationFrame(id);
      });
    };
  }, [highlights, topNumberParts, visibleItems]);

  return (
    <div
      ref={cardRef}
      className="h-[calc(100vh-1.5rem)] sm:h-[calc(100vh-2rem)] md:h-[calc(100vh-3rem)] overscroll-contain overflow-x-hidden overflow-y-auto rounded-[28px] bg-[#050505] shadow-[0_40px_140px_rgba(0,0,0,0.65)]"
    >
      <div className="relative h-[calc(100vh-1.5rem)] sm:h-[calc(100vh-2rem)] md:h-[calc(100vh-3rem)] flex-none overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute right-0 top-[16%] h-[100%] w-[51%] min-w-[420px] origin-bottom scale-[1.18]">
            <Image
              src="/profile.png"
              alt="Олег Минтуш"
              fill
              priority
              className="object-contain object-bottom brightness-[1.56] contrast-[1.12] saturate-[1.08]"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/16 to-[#050505]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_35%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.3)_52%,rgba(0,0,0,0.82)_100%)]" />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#050505_0%,#050505_44%,rgba(5,5,5,0.88)_58%,rgba(5,5,5,0)_78%)]" />
        </div>

        <div className="relative z-10 flex items-start justify-end px-6 pt-6 md:px-10 md:pt-8">
          <div className="flex items-center gap-4 md:gap-6">
            <div className="select-none text-sm font-medium tracking-wide text-white/70">
              <span className="text-white/85">ru</span>
              <span className="px-2 text-white/35">/</span>
              <span className="hover:text-white/85 transition-colors">en</span>
            </div>
            <button
              type="button"
              aria-label="menu"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/12 bg-white/[0.03] text-white/70 hover:text-white hover:bg-white/[0.06] transition"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="5" r="1.7" fill="currentColor" />
                <circle cx="12" cy="12" r="1.7" fill="currentColor" />
                <circle cx="12" cy="19" r="1.7" fill="currentColor" />
              </svg>
            </button>
          </div>
        </div>

        <div className="relative z-10 px-6 md:px-10">
          <div className="relative mt-6 md:mt-8">
            <h1
              className="font-extrabold leading-[0.82] tracking-[-0.07em] text-white md:pr-[340px]"
              style={{ fontSize: "clamp(88px, 14vw, 240px)" }}
            >
              mintush
            </h1>
            <p className="mt-4 md:mt-5 ml-[10px] sm:ml-[12px] md:ml-[16px] whitespace-nowrap text-[12px] sm:text-[13px] md:text-[15px] font-semibold tracking-[0.16em] sm:tracking-[0.22em] text-white/80">
              управление — это система
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 z-10 px-6 pb-10 md:px-10 md:pb-12">
          <div className="max-w-[760px]">
            <p
              className="font-semibold text-white leading-[1.08]"
              style={{ fontSize: "clamp(22px, 2.35vw, 36px)" }}
            >
              Прокачиваем руководителей системно
              <br />
              Выстраиваем управление бизнесом
            </p>
          </div>
        </div>

        <div className="absolute bottom-6 right-6 z-20 flex flex-col items-end gap-2.5 md:bottom-8 md:right-10">
          <a
            href="/basis"
            className="group inline-flex items-center gap-3 rounded-[18px] bg-[#e7d2ad] px-5 py-4 shadow-[0_18px_50px_rgba(0,0,0,0.45)] ring-1 ring-black/10 hover:translate-y-[-1px] transition"
          >
            <span className="leading-[1.05] text-[13px] md:text-[14px] font-semibold text-black/90">
              Посмотреть
              <br />
              форматы
            </span>
            <span className="grid h-10 w-10 place-items-center rounded-full bg-black/90 text-[#e7d2ad] group-hover:bg-black transition">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M8 16l8-8M10 8h6v6"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>

          <a
            href="https://t.me/mintush_business"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-[14px] border border-white/20 bg-white/[0.03] px-4 py-2 text-[13px] font-semibold text-white/80 transition hover:bg-white/[0.08] hover:text-white"
          >
            Подобрать формат в Telegram
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[28%] bg-[linear-gradient(180deg,rgba(5,5,5,0)_0%,#050505_85%)] md:hidden" />
      </div>

      <div className="relative z-20 h-[calc((100vh-1.5rem)/2)] sm:h-[calc((100vh-2rem)/2)] md:h-[calc((100vh-3rem)/2)] flex-none border-t border-white/10 bg-[#040404] px-6 py-8 md:px-10 md:py-10">
        <div className="grid h-full grid-cols-1 gap-7 sm:grid-cols-2 xl:grid-cols-4 xl:gap-8">
          {highlights.map((item, index) => (
            <div
              key={item.top}
              ref={(node) => {
                itemRefs.current[index] = node;
              }}
              data-index={index}
              className="flex flex-col"
            >
              <h2
                className={`text-[34px] leading-[0.98] font-extrabold tracking-[-0.03em] text-white transition-all duration-700 ${
                  visibleItems[index] ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {topNumberParts[index]
                  ? `${animatedTopNumbers[index]}${topNumberParts[index]?.plus}${topNumberParts[index]?.rest}`
                  : item.top}
                <br />
                {item.bottom}
              </h2>
              <div
                className={`mt-6 h-px bg-white/14 transition-all duration-700 ${
                  visibleItems[index] ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${120 + index * 100}ms` }}
              />
              <p
                className={`mt-6 max-w-[36ch] text-[21px] leading-[1.34] text-white/62 transition-all duration-700 ${
                  visibleItems[index] ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: `${220 + index * 100}ms` }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
