import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState, type MutableRefObject, type RefObject } from "react";
import type { Highlight } from "./landing-data";

type HeroCardProps = {
  cardRef: RefObject<HTMLDivElement | null>;
  itemRefs: MutableRefObject<Array<HTMLDivElement | null>>;
  highlights: Highlight[];
  visibleItems: boolean[];
};

const landingPrimaryNav = [
  { href: "/education", label: "Обучение" },
  { href: "/board", label: "Совет управленцев" },
  { href: "/adviser", label: "Наставничество" },
  { href: "/consulting", label: "Консалтинг" },
  { href: "/blog", label: "Блог" },
];

export function HeroCard({ cardRef, itemRefs, highlights, visibleItems }: HeroCardProps) {
  const [isNavOpen, setIsNavOpen] = useState(false);
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

  useEffect(() => {
    if (!isNavOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsNavOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isNavOpen]);

  return (
    <>
      <div
        ref={cardRef}
        className="h-[calc(100vh-1.5rem)] sm:h-[calc(100vh-2rem)] md:h-[calc(100vh-3rem)] overscroll-contain overflow-x-hidden overflow-y-auto rounded-[28px] bg-[#050505] shadow-[0_40px_140px_rgba(0,0,0,0.65)]"
      >
      <div className="relative h-[calc(100vh-1.5rem)] sm:h-[calc(100vh-2rem)] md:h-[calc(100vh-3rem)] flex-none overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute right-0 top-[16%] hidden h-[100%] w-[51%] min-w-[420px] origin-bottom scale-[1.18] md:block">
            <Image
              src="/profile.png"
              alt="Олег Минтуш"
              fill
              priority
              className="object-contain object-bottom brightness-[1.32] contrast-[1.05] saturate-[0.92]"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/22 to-[#040404]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_35%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.32)_52%,rgba(0,0,0,0.84)_100%)]" />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#050505_0%,#050505_44%,rgba(5,5,5,0.88)_58%,rgba(5,5,5,0)_78%)]" />
        </div>

        <div className="relative z-30 flex items-start justify-end px-6 pt-6 md:px-10 md:pt-8">
          <div className="relative w-full">
            <nav
              aria-hidden={!isNavOpen}
              className={`absolute left-1/2 top-1 z-20 flex max-w-[90vw] flex-wrap items-center justify-center gap-x-5 gap-y-1.5 whitespace-nowrap transition-[opacity,transform] duration-200 ease-linear md:top-[2px] md:flex-nowrap md:gap-x-7 ${
                isNavOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
              }`}
              style={{
                transform: isNavOpen ? "translate(-50%, 0)" : "translate(calc(-50% + 30vw), -4px)",
              }}
            >
              {landingPrimaryNav.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsNavOpen(false)}
                  className={`group relative inline-flex items-center pb-1 text-[11px] font-semibold uppercase tracking-[0.09em] text-white/86 transition-[opacity,transform,color] duration-200 ease-linear hover:text-white md:text-[12px] ${
                    isNavOpen ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"
                  }`}
                  style={{ transitionDelay: isNavOpen ? `${30 + index * 20}ms` : "0ms" }}
                >
                  <span className="relative transition-all duration-200 ease-linear group-hover:-translate-y-px group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.18)]">
                    {item.label}
                  </span>
                  <span className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-white/18" />
                  <span className="pointer-events-none absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-[#efe0c1] transition-transform duration-200 ease-linear group-hover:scale-x-100" />
                </Link>
              ))}
            </nav>

            <div className="relative z-10 ml-auto flex w-fit items-center justify-end gap-4 md:gap-6">
              {/*
              <div className="select-none text-sm font-medium tracking-wide text-white/70">
                <span className="text-white/85">ru</span>
                <span className="px-2 text-white/35">/</span>
                <span className="hover:text-white/85 transition-colors">en</span>
              </div>
              */}
              <button
                type="button"
                aria-label={isNavOpen ? "close menu" : "open menu"}
                aria-expanded={isNavOpen}
                onClick={() => setIsNavOpen((prev) => !prev)}
                className={`relative flex h-9 items-center justify-center overflow-hidden border transition-all duration-200 ease-linear ${
                  isNavOpen
                    ? "w-[52px] rounded-[999px] border-white/42 bg-white/[0.08] text-white"
                    : "w-9 rounded-full border-white/16 bg-white/[0.04] text-white/72 hover:border-white/40 hover:text-white hover:bg-white/[0.08]"
                }`}
              >
                <span className="relative block h-3 w-6">
                  {[0, 1, 2].map((dotIndex) => {
                    const openX = (dotIndex - 1) * 6;
                    const closedY = (dotIndex - 1) * 4;
                    return (
                      <span
                        key={dotIndex}
                        className="absolute left-1/2 top-1/2 h-[3px] w-[3px] rounded-full bg-current transition-all duration-200 ease-linear"
                        style={{
                          transform: isNavOpen
                            ? `translate(calc(-50% + ${openX}px), -50%) scale(${dotIndex === 1 ? 1.14 : 1})`
                            : `translate(-50%, calc(-50% + ${closedY}px)) scale(1)`,
                        }}
                      />
                    );
                  })}
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="relative z-10 px-6 md:px-10">
          <div className="relative mt-6 md:mt-8">
            <p className="mb-2.5 ml-[14px] sm:ml-[15px] text-[11px] font-semibold uppercase tracking-[0.24em] text-white/58 md:mb-3 md:ml-[16px] md:text-[12px]">
              ШКОЛА УПРАВЛЕНИЯ
            </p>
            <h1
              className="font-extrabold leading-[0.82] tracking-[-0.04em] text-white md:pr-[340px]"
              style={{ fontSize: "clamp(80px, 12.8vw, 220px)" }}
            >
              MINTUSH
            </h1>
            <p className="mt-3 ml-[14px] sm:ml-[15px] md:mt-4 md:ml-[16px] whitespace-nowrap text-[14px] sm:text-[15px] md:text-[18px] font-semibold tracking-[0.18em] sm:tracking-[0.22em] text-white/82">
              управление — это система
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 z-10 px-6 pb-40 sm:pb-28 md:px-10 md:pb-12">
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

        <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-col items-stretch gap-2.5 md:bottom-8 md:left-auto md:right-10 md:items-end">
          <a
            href="/basis"
            className="group inline-flex w-full items-center justify-between gap-3 rounded-[18px] bg-[#e7d2ad] px-5 py-4 shadow-[0_18px_50px_rgba(0,0,0,0.45)] ring-1 ring-black/10 transition hover:translate-y-[-1px] md:w-auto md:justify-start"
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
            className="inline-flex w-full items-center justify-center gap-2 rounded-[14px] border border-white/20 bg-white/[0.03] px-4 py-2 text-[13px] font-semibold text-white/80 transition hover:bg-white/[0.08] hover:text-white md:w-auto md:justify-start"
          >
            Подобрать формат в Telegram
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[28%] bg-[linear-gradient(180deg,rgba(5,5,5,0)_0%,#050505_85%)] md:hidden" />
      </div>

        <div className="relative z-20 h-[calc((100vh-1.5rem)/2.75)] sm:h-[calc((100vh-2rem)/2.75)] md:h-[calc((100vh-3rem)/2.7)] flex-none border-t border-white/10 bg-[#040404] px-6 pt-5 pb-10 md:px-10 md:pt-6 md:pb-10">
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 xl:grid-cols-4 xl:gap-8">
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

          <div className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2">
            <span aria-hidden="true" className="scroll-v-cue inline-flex text-white/58">
              <svg width="20" height="12" viewBox="0 0 16 10" fill="none">
                <path d="M2 2l6 6 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
        </div>
      </div>
      <style jsx>{`
        .scroll-v-cue {
          animation: scrollVFloat 1.6s ease-in-out infinite;
        }

        @keyframes scrollVFloat {
          0%,
          100% {
            transform: translateY(0);
            opacity: 0.52;
          }
          50% {
            transform: translateY(7px);
            opacity: 0.96;
          }
        }
      `}</style>
    </>
  );
}
