"use client";

// app/page.tsx
import Image from "next/image";
import { Manrope } from "next/font/google";
import { useEffect, useRef, useState } from "react";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const highlights = [
  {
    top: "10+ лет",
    bottom: "в цифровизации",
    description:
      "Выстраиваю управленческие системы: процессы, роли, метрики и управленческий цикл. Чтобы бизнес работал предсказуемо и без “ручного управления”.",
  },
  {
    top: "50+ кейсов",
    bottom: "в практике",
    description:
      "Разборы и внедрения: делегирование, KPI, оргструктура, контроль исполнения, стратегия. На реальных задачах компаний и руководителей.",
  },
  {
    top: "4 встречи",
    bottom: "в месяц",
    description:
      "Регулярная работа с управленческими задачами: разборы кейсов, практика, обратная связь и обмен опытом с сильными руководителями.",
  },
  {
    top: "3 уровня",
    bottom: "зрелости",
    description:
      "Понятная траектория роста: от сотрудника к руководителю, от руководителя к управленцу, от управленца к стратегу — с подходящим форматом на каждом этапе.",
  },
];

const ecosystemFormats = [
  {
    title: "Основы управления",
    subtitle: "старт для начинающих руководителей",
    href: "/basis",
  },
  {
    title: "Совет управленцев",
    subtitle: "клуб для руководителей команд 10+",
    href: "/board",
  },
  {
    title: "Персональный стратег",
    subtitle: "стратегия, делегирование, мышление",
    href: "/adviser",
  },
  {
    title: "Мини-курсы",
    subtitle: "бизнес-функции: финансы, продажи, HR, процессы",
    href: "/courses",
  },
];

const logoPlaceholders = [
  { id: "01", size: "h-[30px] md:h-[38px]", opacity: "opacity-85" },
  { id: "02", size: "h-[32px] md:h-[40px]", opacity: "opacity-80" },
  { id: "03", size: "h-[28px] md:h-[36px]", opacity: "opacity-90" },
  { id: "04", size: "h-[34px] md:h-[42px]", opacity: "opacity-85" },
  { id: "05", size: "h-[29px] md:h-[37px]", opacity: "opacity-80" },
  { id: "06", size: "h-[31px] md:h-[39px]", opacity: "opacity-88" },
  { id: "07", size: "h-[33px] md:h-[41px]", opacity: "opacity-82" },
];

const startFormats = [
  {
    situation: "Я начинаю руководить",
    format: "Основы управления",
    href: "/basis",
  },
  {
    situation: "Я уже руководитель",
    format: "Совет управленцев",
    href: "/board",
  },
  {
    situation: "Мне нужна стратегия",
    format: "Персональный стратег",
    href: "/adviser",
  },
  {
    situation: "Хочу закрыть пробел быстро",
    format: "Мини-курсы",
    href: "/courses",
  },
];

const youtubeVideos = [
  {
    title: "Neiry.Conf 2025: Биороботы и другие новинки нейротеха",
    url: "https://www.youtube.com/watch?v=Ax-PcpWw_ZA",
    videoId: "Ax-PcpWw_ZA",
  },
  {
    title: "Мозг и нейросети: ждём слияния",
    url: "https://www.youtube.com/watch?v=Gk5xO8voLkY",
    videoId: "Gk5xO8voLkY",
  },
  {
    title: "Разбираем конкурентов Neiry",
    url: "https://www.youtube.com/watch?v=rlCZMIaHo6U",
    videoId: "rlCZMIaHo6U",
  },
  {
    title: "Ещё одно полезное видео",
    url: "https://www.youtube.com/watch?v=dAOWn8PTHdc",
    videoId: "dAOWn8PTHdc",
  },
];

export default function Page() {
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const firstCardRef = useRef<HTMLDivElement | null>(null);
  const secondCardRef = useRef<HTMLDivElement | null>(null);
  const thirdCardRef = useRef<HTMLDivElement | null>(null);
  const fourthCardRef = useRef<HTMLDivElement | null>(null);
  const [visibleItems, setVisibleItems] = useState<boolean[]>(() =>
    Array.from({ length: highlights.length }, () => false),
  );
  const [showCenterCard, setShowCenterCard] = useState(false);
  const [showStartCard, setShowStartCard] = useState(false);
  const [showVideoCard, setShowVideoCard] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const indexAttr = entry.target.getAttribute("data-index");
          if (indexAttr === null) return;

          const index = Number(indexAttr);
          if (Number.isNaN(index)) return;

          setVisibleItems((prev) => {
            if (prev[index]) return prev;
            const next = [...prev];
            next[index] = true;
            return next;
          });

          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.35, rootMargin: "0px 0px -8% 0px" },
    );

    itemRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const firstCard = firstCardRef.current;
    if (!firstCard) return;

    const syncOverlayVisibility = () => {
      const maxScroll = Math.max(firstCard.scrollHeight - firstCard.clientHeight, 0);
      const trigger = maxScroll * (showCenterCard ? 0.72 : 0.9);
      const shouldShow = maxScroll > 0 && firstCard.scrollTop >= trigger;
      setShowCenterCard((prev) => (prev === shouldShow ? prev : shouldShow));
    };

    syncOverlayVisibility();
    firstCard.addEventListener("scroll", syncOverlayVisibility, { passive: true });
    window.addEventListener("resize", syncOverlayVisibility);

    return () => {
      firstCard.removeEventListener("scroll", syncOverlayVisibility);
      window.removeEventListener("resize", syncOverlayVisibility);
    };
  }, [showCenterCard]);

  useEffect(() => {
    const secondCard = secondCardRef.current;
    if (!secondCard) return;

    const handleWheel = (event: WheelEvent) => {
      if (event.deltaY >= 0 || secondCard.scrollTop > 0) return;
      event.preventDefault();
      setShowCenterCard(false);
    };

    secondCard.addEventListener("wheel", handleWheel, { passive: false });
    return () => secondCard.removeEventListener("wheel", handleWheel);
  }, []);

  useEffect(() => {
    const secondCard = secondCardRef.current;
    if (!secondCard) return;

    const syncThirdOverlayVisibility = () => {
      const maxScroll = Math.max(secondCard.scrollHeight - secondCard.clientHeight, 0);
      const trigger = maxScroll * (showStartCard ? 0.72 : 0.9);
      const shouldShow = showCenterCard && maxScroll > 0 && secondCard.scrollTop >= trigger;
      setShowStartCard((prev) => (prev === shouldShow ? prev : shouldShow));
    };

    syncThirdOverlayVisibility();
    secondCard.addEventListener("scroll", syncThirdOverlayVisibility, { passive: true });
    window.addEventListener("resize", syncThirdOverlayVisibility);

    return () => {
      secondCard.removeEventListener("scroll", syncThirdOverlayVisibility);
      window.removeEventListener("resize", syncThirdOverlayVisibility);
    };
  }, [showCenterCard, showStartCard]);

  useEffect(() => {
    if (showCenterCard) return;
    setShowStartCard(false);
  }, [showCenterCard]);

  useEffect(() => {
    const thirdCard = thirdCardRef.current;
    if (!thirdCard) return;

    const handleWheel = (event: WheelEvent) => {
      const thirdMaxScroll = Math.max(thirdCard.scrollHeight - thirdCard.clientHeight, 0);
      const isAtTop = thirdCard.scrollTop <= 0;
      const isAtBottom = thirdCard.scrollTop >= thirdMaxScroll - 1;

      if (event.deltaY < 0 && isAtTop) {
        event.preventDefault();
        setShowStartCard(false);
        return;
      }

      if (event.deltaY > 0 && isAtBottom) {
        event.preventDefault();
        setShowVideoCard(true);
      }
    };

    thirdCard.addEventListener("wheel", handleWheel, { passive: false });
    return () => thirdCard.removeEventListener("wheel", handleWheel);
  }, []);

  useEffect(() => {
    const thirdCard = thirdCardRef.current;
    if (!thirdCard) return;

    const syncFourthOverlayVisibility = () => {
      const maxScroll = Math.max(thirdCard.scrollHeight - thirdCard.clientHeight, 0);
      const trigger = maxScroll * (showVideoCard ? 0.72 : 0.9);
      const shouldShow = showStartCard && maxScroll > 0 && thirdCard.scrollTop >= trigger;
      setShowVideoCard((prev) => (prev === shouldShow ? prev : shouldShow));
    };

    syncFourthOverlayVisibility();
    thirdCard.addEventListener("scroll", syncFourthOverlayVisibility, { passive: true });
    window.addEventListener("resize", syncFourthOverlayVisibility);

    return () => {
      thirdCard.removeEventListener("scroll", syncFourthOverlayVisibility);
      window.removeEventListener("resize", syncFourthOverlayVisibility);
    };
  }, [showStartCard, showVideoCard]);

  useEffect(() => {
    if (showStartCard) return;
    setShowVideoCard(false);
  }, [showStartCard]);

  useEffect(() => {
    const fourthCard = fourthCardRef.current;
    if (!fourthCard) return;

    const handleWheel = (event: WheelEvent) => {
      if (event.deltaY >= 0 || fourthCard.scrollTop > 0) return;
      event.preventDefault();
      setShowVideoCard(false);
    };

    fourthCard.addEventListener("wheel", handleWheel, { passive: false });
    return () => fourthCard.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <main className={`${manrope.className} min-h-screen bg-[#0b0b0b] p-3 sm:p-4 md:p-6`}>
      <section className="relative w-full">
        <div
          ref={firstCardRef}
          className="h-[calc(100vh-1.5rem)] sm:h-[calc(100vh-2rem)] md:h-[calc(100vh-3rem)] overscroll-contain overflow-x-hidden overflow-y-auto rounded-[28px] bg-[#050505] shadow-[0_40px_140px_rgba(0,0,0,0.65)]"
        >
          <div className="relative h-[calc(100vh-1.5rem)] sm:h-[calc(100vh-2rem)] md:h-[calc(100vh-3rem)] flex-none overflow-hidden">
            {/* RIGHT IMAGE — bigger */}
            <div className="absolute inset-0">
              <div className="absolute right-0 top-[16%] h-[100%] w-[51%] min-w-[420px] origin-bottom scale-[1.18]">
                <Image
                  src="/profile.png"
                  alt="Олег Минтуш"
                  fill
                  priority
                  className="object-contain object-bottom brightness-[1.38] contrast-[1.1] saturate-[1.06]"
                />

                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/16 to-[#050505]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_35%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.3)_52%,rgba(0,0,0,0.82)_100%)]" />
              </div>

              <div className="absolute inset-0 bg-[linear-gradient(90deg,#050505_0%,#050505_44%,rgba(5,5,5,0.88)_58%,rgba(5,5,5,0)_78%)]" />
            </div>

            {/* TOP RIGHT */}
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

            {/* WORDMARK */}
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

            {/* Bottom-left copy */}
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

            {/* CTA */}
            <div className="absolute bottom-6 right-6 z-20 md:bottom-8 md:right-10">
              <a
                href="#signup"
                className="group inline-flex items-center gap-3 rounded-[18px] bg-[#e7d2ad] px-5 py-4 shadow-[0_18px_50px_rgba(0,0,0,0.45)] ring-1 ring-black/10 hover:translate-y-[-1px] transition"
              >
                <span className="leading-[1.05] text-[13px] md:text-[14px] font-semibold text-black/90">
                  Записаться
                  <br />
                  на программу
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
                    {item.top}
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

        <div
          className={`absolute inset-0 z-40 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            showCenterCard ? "translate-y-0 pointer-events-auto" : "translate-y-[106%] pointer-events-none"
          }`}
        >
          <div
            ref={secondCardRef}
            className="h-[calc(100vh-1.5rem)] sm:h-[calc(100vh-2rem)] md:h-[calc(100vh-3rem)] overscroll-contain overflow-x-hidden overflow-y-auto rounded-[28px] border border-[#f6d8ab]/45 bg-[linear-gradient(180deg,#ead6b5_0%,#d7ab6a_58%,#bd8044_100%)] shadow-[0_40px_140px_rgba(0,0,0,0.65)]"
          >
            <div className="px-6 pb-8 pt-8 md:px-10 md:pb-10 md:pt-10">
              <h2 className="text-center text-[40px] font-extrabold leading-[1.02] tracking-[-0.03em] text-black md:text-[58px]">
                О центре MINTUSH
              </h2>

              <div className="mt-8 grid gap-5 xl:grid-cols-[1.35fr_1fr]">
                <article className="flex h-full flex-col rounded-[26px] border border-black/10 bg-[#efe4cf] px-6 py-7 md:px-8 md:py-8">
                  <h3 className="max-w-[22ch] text-[29px] font-extrabold leading-[1.03] tracking-[-0.02em] text-black md:text-[40px]">
                    В экосистеме MINTUSH - 4 форматa развития руководителей
                  </h3>

                  <div className="mt-auto grid gap-x-7 gap-y-4 pt-8 sm:grid-cols-2">
                    {ecosystemFormats.map((format) => (
                      <a
                        key={format.title}
                        href={format.href}
                        className="group border-b border-black/14 pb-4 transition-opacity hover:opacity-80"
                      >
                        <p className="inline-flex items-center gap-2 text-[20px] font-extrabold leading-[1.08] tracking-[-0.01em] text-black">
                          <span>{format.title}</span>
                          <span aria-hidden="true" className="text-[16px] leading-none opacity-85">
                            ↗
                          </span>
                        </p>
                        <p className="mt-2 text-[16px] leading-[1.25] text-black/65">{format.subtitle}</p>
                      </a>
                    ))}
                  </div>

                </article>

                <article className="rounded-[26px] border border-black/10 bg-[#ecdfc8] px-6 py-7 md:px-8 md:py-8">
                  <h3 className="text-[33px] font-extrabold leading-[1.05] tracking-[-0.03em] text-black md:text-[44px]">
                    Наша миссия:
                    <br />
                    сделать управление системным.
                  </h3>

                  <p className="mt-6 max-w-[31ch] text-[20px] leading-[1.3] text-black/78 md:text-[24px]">
                    Чтобы бизнес работал предсказуемо и без “ручного управления”.
                  </p>
                  <div className="relative mt-6 h-[188px] w-full md:h-[230px]">
                    <Image
                      src="/images/center/schema.png"
                      alt="Схема системного управления"
                      fill
                      className="object-contain object-bottom opacity-90 mix-blend-multiply"
                    />
                  </div>

                </article>
              </div>

              <div className="mt-11 pb-2">
                <h3 className="text-center text-[36px] font-extrabold leading-[1.04] tracking-[-0.028em] text-black md:text-[46px]">
                  Нашими технологиями пользуются
                </h3>

                <div className="mt-7 overflow-hidden">
                  <div className="mintush-carousel-track flex w-max items-center gap-14 py-2 md:gap-20">
                    {[...logoPlaceholders, ...logoPlaceholders].map((logo, index) => (
                      <div key={`${logo.id}-${index}`} className={`shrink-0 ${logo.opacity}`}>
                        <Image
                          src="/placeholder-logo.svg"
                          alt={`Лого-плейсхолдер ${logo.id}`}
                          width={215}
                          height={48}
                          className={`${logo.size} w-auto object-contain mix-blend-multiply`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`absolute inset-0 z-50 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            showStartCard ? "translate-y-0 pointer-events-auto" : "translate-y-[106%] pointer-events-none"
          }`}
        >
          <div
            ref={thirdCardRef}
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

                <p className="mt-5 text-center text-[15px] leading-[1.35] text-white/42 md:text-[16px]">
                  Почему это идеально здесь: после логотипов доверие уже поднялось, и дальше человеку нужно не читать — а выбрать путь.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`absolute inset-0 z-[60] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            showVideoCard ? "translate-y-0 pointer-events-auto" : "translate-y-[106%] pointer-events-none"
          }`}
        >
          <div
            ref={fourthCardRef}
            className="h-[calc(100vh-1.5rem)] sm:h-[calc(100vh-2rem)] md:h-[calc(100vh-3rem)] overscroll-contain overflow-x-hidden overflow-y-auto rounded-[28px] border border-white/12 bg-[#030303] shadow-[0_40px_140px_rgba(0,0,0,0.75)]"
          >
            <div className="flex min-h-full flex-col px-6 pb-8 pt-8 md:px-10 md:pb-10 md:pt-10">
              <h2 className="text-center text-[40px] font-extrabold leading-[1.03] tracking-[-0.03em] text-white md:text-[56px]">
                Полезные видео
              </h2>

              <div className="flex flex-1 items-center">
                <div className="mx-auto grid w-full max-w-[1650px] grid-cols-1 gap-x-7 gap-y-8 md:grid-cols-2 2xl:grid-cols-4">
                  {youtubeVideos.map((video, index) => (
                    <a
                      key={`${video.videoId}-${index}`}
                      href={video.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group block"
                    >
                      <div className="relative overflow-hidden rounded-[18px] border border-white/12 bg-black">
                        <img
                          src={`https://i.ytimg.com/vi/${video.videoId}/maxresdefault.jpg`}
                          alt={video.title}
                          className="aspect-video h-auto w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                          loading="lazy"
                          onError={(event) => {
                            const image = event.currentTarget;
                            if (image.src.includes("hqdefault")) return;
                            image.src = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`;
                          }}
                        />
                        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_40%,rgba(0,0,0,0.24)_100%)]" />
                        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                          <span className="grid h-14 w-14 place-items-center rounded-full bg-black/46 text-white/96 backdrop-blur-[2px]">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                              <path d="M9 7v10l8-5-8-5z" fill="currentColor" />
                            </svg>
                          </span>
                        </div>
                      </div>
                      <p className="mt-3 text-[24px] font-bold leading-[1.08] tracking-[-0.015em] text-white/92 md:text-[30px]">
                        {video.title}
                      </p>
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-auto flex justify-center pt-10">
                <a
                  href="https://www.youtube.com/@mintushbusiness"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/26 bg-black px-11 py-4 text-[18px] font-semibold text-white transition hover:bg-white/10"
                >
                  Посмотреть другие видео
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .mintush-carousel-track {
          animation: mintushMarquee 34s linear infinite;
        }

        @keyframes mintushMarquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </main>
  );
}
