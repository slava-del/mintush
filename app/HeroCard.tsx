import Image from "next/image";
import { memo, useEffect, useMemo, useRef, useState, type MouseEvent, type MutableRefObject, type RefObject } from "react";
import type { Highlight } from "./landing-data";
import { LandingPrimaryNav } from "@/components/landing-primary-nav";

type HeroCardProps = {
  cardRef: RefObject<HTMLDivElement | null>;
  itemRefs: MutableRefObject<Array<HTMLDivElement | null>>;
  highlights: Highlight[];
  visibleItems: boolean[];
};

export const HeroCard = memo(function HeroCard({ cardRef, itemRefs, highlights, visibleItems }: HeroCardProps) {
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

  const scrollToFormatsSection = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetSection = document.getElementById("school-mintush");
    if (!targetSection) return;

    const scrollContainer = targetSection.closest(".mintush-scroll");
    if (scrollContainer instanceof HTMLElement) {
      const offsetTop = targetSection.offsetTop;
      scrollContainer.scrollTo({ top: Math.max(offsetTop - 8, 0), behavior: "smooth" });
      return;
    }

    const top = targetSection.getBoundingClientRect().top + window.scrollY - 8;
    window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
  };

  return (
    <>
      <div
        ref={cardRef}
        className="overflow-hidden rounded-[28px] bg-[#050505] shadow-[0_40px_140px_rgba(0,0,0,0.65)]"
      >
      <div id="mintush-hero" className="relative h-[calc(100vh-1.5rem)] sm:h-[calc(100vh-2rem)] md:h-[calc(100vh-3rem)] flex-none overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-[60%] h-[54%] w-[90%] -translate-x-1/2 -translate-y-1/2 md:hidden">
            <Image
              src="/profile.png"
              alt="Олег Минтуш"
              fill
              priority
              className="object-contain object-center brightness-[1.18] contrast-[1.02] saturate-[0.92] opacity-100 drop-shadow-[0_18px_30px_rgba(0,0,0,0.34)]"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/16 to-[#040404]/72" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_52%_34%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.22)_54%,rgba(0,0,0,0.74)_100%)]" />
          </div>
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
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.14)_0%,rgba(5,5,5,0.04)_42%,rgba(5,5,5,0.22)_76%,rgba(5,5,5,0.42)_100%)] md:bg-[linear-gradient(90deg,#050505_0%,#050505_44%,rgba(5,5,5,0.88)_58%,rgba(5,5,5,0)_78%)]" />
        </div>

        <div className="relative z-30 px-6 pt-6 md:px-10 md:pt-8">
          <LandingPrimaryNav mode="brand-hamburger" contactHref="#contact" />
        </div>

        <div className="relative z-10 px-6 md:px-10">
          <div className="relative mt-6 flex flex-col items-center md:mt-8 md:items-start">
            <div className="inline-flex flex-col items-start md:block">
              <p className="mb-2.5 self-center text-[11px] font-semibold uppercase tracking-[0.24em] text-white/58 md:mb-3 md:ml-[16px] md:self-auto md:text-[12px]">
                ШКОЛА УПРАВЛЕНИЯ
              </p>
              <h1
                className="text-left text-[clamp(52px,18vw,96px)] font-extrabold leading-[0.84] tracking-[-0.04em] text-white md:pr-[340px] md:text-left md:text-[clamp(80px,12.8vw,220px)]"
              >
                MINTUSH
              </h1>
              <p className="mt-3 self-center whitespace-nowrap text-center text-[14px] font-semibold tracking-[0.18em] text-white/82 sm:text-[15px] sm:tracking-[0.22em] md:mt-4 md:ml-[16px] md:self-start md:text-left md:text-[18px]">
                управление — это система
              </p>
            </div>

          </div>
        </div>

        <div className="absolute bottom-6 left-6 right-6 z-20 md:bottom-8 md:left-10 md:right-10">
          <div className="flex flex-col gap-4 md:ml-[16px] md:flex-row md:items-end md:justify-between md:gap-6">
            <div className="max-w-[760px]">
              <p
                className="text-[clamp(24px,7vw,30px)] font-semibold leading-[1.08] text-white md:text-[clamp(20px,2.25vw,36px)]"
              >
                <span className="hidden md:inline">Прокачиваем руководителей<br /></span>
                Выстраиваем управление бизнесом
              </p>
            </div>

            <div className="flex items-center gap-2.5">
              <a
                href="#school-mintush"
                onClick={scrollToFormatsSection}
                className="hero-primary-cta group inline-flex h-11 w-full items-center justify-between gap-3 rounded-[14px] bg-[#e7d2ad] px-4 py-2 shadow-[0_18px_50px_rgba(0,0,0,0.45)] ring-1 ring-black/10 transition hover:translate-y-[-1px] md:h-12 md:w-auto md:px-5"
              >
                <span className="whitespace-nowrap text-[16px] font-semibold leading-none text-black/92 md:text-[15px]">
                  Посмотреть форматы
                </span>
                <span className="grid h-8 w-8 place-items-center rounded-full bg-black/90 text-[#e7d2ad] transition group-hover:bg-black md:h-9 md:w-9">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
                className="hidden h-12 items-center justify-center rounded-[14px] border border-white/20 bg-white/[0.03] px-4 text-[13px] font-semibold text-white/80 transition hover:bg-white/[0.08] hover:text-white md:inline-flex"
              >
                Подобрать формат в Telegram
              </a>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[18%] bg-[linear-gradient(180deg,rgba(5,5,5,0)_0%,rgba(5,5,5,0.62)_100%)] md:hidden" />
      </div>

        <div className="relative z-20 border-t border-white/10 bg-[#040404] px-6 pb-10 pt-5 md:h-[calc((100vh-3rem)/2.7)] md:flex-none md:px-10 md:pb-10 md:pt-6">
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
        .hero-primary-cta {
          animation: ctaMoveIn 760ms cubic-bezier(0.22, 1, 0.36, 1) 120ms both;
        }

        @keyframes ctaMoveIn {
          0% {
            transform: translate3d(22px, 26px, 0);
            opacity: 0;
          }
          100% {
            transform: translate3d(0, 0, 0);
            opacity: 1;
          }
        }

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
});
