"use client"

import Link from "next/link"
import Image from "next/image"
import { Manrope } from "next/font/google"
import { useEffect, useRef, useState } from "react"
import { contactConfig } from "@/lib/site-config"

type RoleKey = "finance" | "ops" | "team"

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
})

const morphResultWords = ["система", "решения", "внедрение", "результат", "рост", "масштаб"]
const topNavTopics = [
  { label: "Бизнес-модель", sectionId: "business-model" },
  { label: "Бизнес-система", sectionId: "business-system" },
  { label: "Стратегия", sectionId: "strategy" },
  { label: "Операционка", sectionId: "operations" },
  { label: "Команда", sectionId: "team" },
]
const marqueeTopics = [...topNavTopics, ...topNavTopics, ...topNavTopics]
const heroWordPrimary = "MINTUSH"
const heroWordSecondary = "EDUCATION"

const roleOptions: Array<{ key: RoleKey; label: string }> = [
  { key: "finance", label: "Финансы" },
  { key: "ops", label: "Операционка" },
  { key: "team", label: "Команда" },
]

const roleProfiles: Record<
  RoleKey,
  {
    gap: string
    bullets: string[]
    story: Array<{ title: string; description: string; problem: string; cta: string }>
  }
> = {
  finance: {
    gap: "умения превращать цифры в управленческие решения.",
    bullets: [
      "понимать драйверы прибыли",
      "ставить задачи по unit-экономике и маржинальности",
      "добиваться результата без кассовых разрывов",
    ],
    story: [
      { title: "Глава 01 — Выстроить систему", description: "Связать финмодель, роли и ритм управления.", problem: "Финансы есть, решений нет", cta: "Собрать архитектуру" },
      { title: "Глава 02 — Поставить задачи", description: "Каждая задача привязана к цифре и сроку.", problem: "Планы без метрик", cta: "Связать цель и KPI" },
      { title: "Глава 03 — Получить результат", description: "Еженедельный цикл контроля и коррекции.", problem: "Отчеты без действий", cta: "Запустить управцикл" },
    ],
  },
  ops: {
    gap: "системы в процессах, ролях и исполнении.",
    bullets: [
      "выстраивать бизнес-систему через процессы и роли",
      "ставить задачи так, чтобы убирать узкие места",
      "добиваться результата в срок и по качеству",
    ],
    story: [
      { title: "Глава 01 — Выстроить систему", description: "Фиксируем владельцев, стандарты и точки контроля.", problem: "Хаос в процессах", cta: "Собрать контур" },
      { title: "Глава 02 — Поставить задачи", description: "Цель, ограничение, срок, понятный критерий выполнения.", problem: "Размытые формулировки", cta: "Стандартизировать задачи" },
      { title: "Глава 03 — Получить результат", description: "Короткие спринты и регулярная коррекция курса.", problem: "Срыв сроков", cta: "Удержать темп" },
    ],
  },
  team: {
    gap: "перехода от контроля людей к управлению системой результата.",
    bullets: [
      "выстраивать систему вместо микроменеджмента",
      "ставить задачи так, чтобы команда брала ответственность",
      "добиваться результата через делегирование",
    ],
    story: [
      { title: "Глава 01 — Выстроить систему", description: "Система ролей снимает перегруз руководителя.", problem: "Все держится на одном", cta: "Разделить ответственность" },
      { title: "Глава 02 — Поставить задачи", description: "Постановка: цель, контекст, критерий, срок, отчет.", problem: "Постоянные уточнения", cta: "Задать стандарт" },
      { title: "Глава 03 — Получить результат", description: "Прозрачный прогресс и решения до кризиса.", problem: "Реакция вместо опережения", cta: "Довести до результата" },
    ],
  },
}

const chapterBackgrounds = [
  "radial-gradient(circle at 14% 16%, rgba(231, 210, 173, 0.30), rgba(7, 7, 7, 0) 42%), #050505",
  "radial-gradient(circle at 84% 24%, rgba(231, 210, 173, 0.26), rgba(7, 7, 7, 0) 44%), #050505",
  "radial-gradient(circle at 52% 82%, rgba(231, 210, 173, 0.28), rgba(7, 7, 7, 0) 46%), #050505",
]

const gptMessages = [
  "Напиши KPI для отдела продаж.",
  "Как делегировать, если команда не тянет?",
  "Сделай регламент найма за 3 шага.",
  "Как сократить косты без потери качества?",
  "Собери стратегию и операционку в одном документе.",
  "Как быстро вырасти в 2 раза за квартал?",
  "Как контролировать задачи без микроменеджмента?",
]

const curriculumBlocks = [
  "Модуль 1: бизнес-модель и архитектура управления",
  "Модуль 2: постановка задач и приоритизация",
  "Модуль 3: метрики, ритмы и контроль исполнения",
  "Модуль 4: стратегия в операционном цикле",
  "Чек-листы, шаблоны и кейсы внедрения",
]

const learningStats = [
  {
    value: "7–10%",
    lines: ["времени в год", "руководители выделяют", "на развитие управления"],
  },
  {
    value: "$1,200+",
    lines: ["на одного руководителя", "компании инвестируют", "в развитие менеджмента"],
  },
  {
    value: "до 40%",
    lines: ["компаний отмечают дефицит", "управленческих навыков", "у руководителей"],
  },
]

const courseThemes = ["Бизнес-модель", "Стратегия", "Команда", "Бизнес-система", "Операционка", "Рост"]

const deliveryBlocks = [
  {
    title: "Короткий формат",
    lines: ["каждый мини-курс можно пройти", "за пару дней или в своём темпе"],
  },
  {
    title: "Без перегруза",
    lines: ["материалы выстроены так,", "чтобы двигаться шаг за шагом"],
  },
  {
    title: "Сразу в работу",
    lines: ["не теория ради теории,", "а практическое применение"],
  },
]

const learningFormats = ["видео-материалы", "руководства-презентации", "чек-листы", "практические шаблоны"]

const trustedLogos = [
  {
    src: "/logos/cropped/cber_marketing.png",
    alt: "Сбер Маркетинг",
    width: 690,
    height: 73,
    sizeClass: "h-[28px] md:h-[34px]",
    slotClass: "w-[220px] md:w-[300px]",
  },
  {
    src: "/logos/cropped/mtc_marketolog.png",
    alt: "МТС Маркетолог",
    width: 431,
    height: 45,
    sizeClass: "h-[24px] md:h-[30px]",
    slotClass: "w-[210px] md:w-[280px]",
  },
  {
    src: "/logos/cropped/cber_sound.png",
    alt: "Сбер Звук",
    width: 535,
    height: 86,
    sizeClass: "h-[26px] md:h-[32px]",
    slotClass: "w-[200px] md:w-[260px]",
  },
  {
    src: "/logos/cropped/mts_bank.png",
    alt: "МТС Банк",
    width: 473,
    height: 79,
    sizeClass: "h-[20px] md:h-[25px]",
    slotClass: "w-[190px] md:w-[240px]",
  },
  {
    src: "/logos/cropped/cber.png",
    alt: "Сбер",
    width: 517,
    height: 142,
    sizeClass: "h-[28px] md:h-[34px]",
    slotClass: "w-[190px] md:w-[250px]",
  },
  {
    src: "/logos/cropped/mts_golfstrim.png",
    alt: "МТС Гольфстрим",
    width: 907,
    height: 156,
    sizeClass: "h-[22px] md:h-[28px]",
    slotClass: "w-[220px] md:w-[300px]",
  },
  {
    src: "/logos/cropped/okko.png",
    alt: "Okko",
    width: 838,
    height: 298,
    sizeClass: "h-[24px] md:h-[30px]",
    slotClass: "w-[180px] md:w-[240px]",
  },
  {
    src: "/logos/cropped/mtc_ecosystem.png",
    alt: "МТС Цифровая экосистема",
    width: 551,
    height: 40,
    sizeClass: "h-[22px] md:h-[28px]",
    slotClass: "w-[230px] md:w-[320px]",
  },
  {
    src: "/logos/cropped/kion.png",
    alt: "KION",
    width: 640,
    height: 243,
    sizeClass: "h-[24px] md:h-[30px]",
    slotClass: "w-[190px] md:w-[250px]",
  },
  {
    src: "/logos/cropped/multfilm.png",
    alt: "Союзмультфильм",
    width: 275,
    height: 203,
    sizeClass: "h-[34px] md:h-[42px]",
    slotClass: "w-[170px] md:w-[220px]",
  },
  {
    src: "/logos/cropped/rambler.png",
    alt: "Rambler",
    width: 599,
    height: 128,
    sizeClass: "h-[20px] md:h-[26px]",
    slotClass: "w-[190px] md:w-[250px]",
  },
  {
    src: "/logos/cropped/webinar.png",
    alt: "Webinar",
    width: 373,
    height: 295,
    sizeClass: "h-[34px] md:h-[42px]",
    slotClass: "w-[170px] md:w-[220px]",
  },
]

const courses = [
  {
    title: "Стратегия бизнеса",
    description:
      "Понятный мини-курс, который поможет владельцу бизнеса собрать правильную стратегию на год и внедрить её в операционку. Это про стратегию, которая работает в реальности.",
    items: ["4 практических руководства", "6 вебинаров"],
    href: "/education/business-strategy",
  },
  {
    title: "Управление бизнесом",
    description:
      "Работающие подходы, которые помогут владельцу бизнеса начать управлять компанией без ручного вмешательства. Работающая бизнес-система за 4 шага.",
    items: ["4 практических руководства", "4 вебинара"],
    href: "/education/business-management",
  },
]

export function EducationLanding() {
  const [showOpener, setShowOpener] = useState(true)
  const [openerClosing, setOpenerClosing] = useState(false)
  const [morphIndex, setMorphIndex] = useState(0)
  const [selectedRole, setSelectedRole] = useState<RoleKey>("team")
  const [strategyProgress, setStrategyProgress] = useState(0)
  const cardRef = useRef<HTMLDivElement | null>(null)
  const strategySectionRef = useRef<HTMLDivElement | null>(null)

  const profile = roleProfiles[selectedRole]
  const story = profile.story
  const strategyStep = Math.min(Math.floor(strategyProgress * story.length), story.length - 1)

  const closeOpener = () => {
    setOpenerClosing(true)
    window.setTimeout(() => setShowOpener(false), 450)
  }

  const scrollToElement = (target: HTMLElement | null) => {
    const container = cardRef.current
    if (!container || !target) return
    container.scrollTo({ top: Math.max(target.offsetTop - 24, 0), behavior: "smooth" })
  }

  const scrollToSection = (sectionId: string) => {
    const container = cardRef.current
    if (!container) return
    const section = container.querySelector<HTMLElement>(`[data-section-id="${sectionId}"]`)
    scrollToElement(section)
  }

  const scrollToCourses = () => {
    scrollToSection("courses")
  }

  useEffect(() => {
    const ticker = window.setInterval(() => {
      setMorphIndex((prev) => (prev + 1) % morphResultWords.length)
    }, 1800)
    return () => window.clearInterval(ticker)
  }, [])

  useEffect(() => {
    document.body.style.overflow = showOpener ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [showOpener])

  useEffect(() => {
    const container = cardRef.current
    const section = strategySectionRef.current
    if (!container || !section) return

    let rafId = 0
    const updateProgress = () => {
      rafId = 0
      const viewportHeight = container.clientHeight
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight
      const distance = Math.max(sectionHeight - viewportHeight, 1)
      const next = Math.min(Math.max((container.scrollTop - sectionTop) / distance, 0), 1)

      setStrategyProgress((prev) => (Math.abs(prev - next) > 0.004 ? next : prev))
    }

    const onScroll = () => {
      if (rafId) return
      rafId = window.requestAnimationFrame(updateProgress)
    }

    updateProgress()
    container.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)

    return () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId)
      }
      container.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  useEffect(() => {
    setStrategyProgress(0)
  }, [selectedRole])

  return (
    <>
      {showOpener && (
        <div
          className={`fixed inset-0 z-[120] flex items-center justify-center bg-[#020202] px-6 transition-opacity duration-700 ${
            openerClosing ? "opacity-0" : "opacity-100"
          }`}
        >
          <button
            type="button"
            onClick={closeOpener}
            className="absolute bottom-9 left-1/2 -translate-x-1/2 rounded-[14px] bg-[#e7d2ad] px-7 py-3.5 text-[13px] font-extrabold uppercase tracking-[0.1em] text-black shadow-[0_18px_42px_rgba(0,0,0,0.4)] transition hover:translate-y-[-1px] hover:shadow-[0_22px_48px_rgba(0,0,0,0.48)]"
          >
            Далее
          </button>

          <div className="max-w-5xl text-center">
            <h2 className="mt-5 text-[clamp(34px,6.8vw,102px)] font-extrabold leading-[0.92] tracking-[-0.045em] text-white">
              <span className="opener-chunk block [animation-delay:40ms]">67% руководителей</span>
              <span className="opener-chunk block [animation-delay:200ms]">не внедряют стратегию</span>
              <span className="opener-chunk block [animation-delay:360ms]">без управленческой</span>
              <span className="opener-chunk block text-[#e7d2ad] [animation-delay:520ms]">базы.</span>
            </h2>
          </div>
        </div>
      )}

      <main
        className={`${manrope.className} min-h-screen bg-black p-3 sm:p-4 md:p-6`}
      >
        <section className="relative w-full">
          <div
            ref={cardRef}
            className="mintush-scroll h-[calc(100vh-1.5rem)] sm:h-[calc(100vh-2rem)] md:h-[calc(100vh-3rem)] overflow-x-hidden overflow-y-auto rounded-[28px] border border-[#e7d2ad]/45 bg-[#050505] shadow-[0_40px_140px_rgba(0,0,0,0.65)]"
          >
            <div className="sticky top-0 z-30 overflow-hidden border-b border-black/15 bg-[#e7d2ad] text-black">
              <div className="education-topics-track flex w-max items-center">
                {marqueeTopics.map((topic, index) => (
                  <button
                    key={`${topic.label}-${index}`}
                    type="button"
                    onClick={() => scrollToSection(topic.sectionId)}
                    className="group border-r border-black/15 px-8 py-3 text-[12px] font-semibold uppercase tracking-[0.08em] text-black/92 transition hover:bg-black/7 hover:text-black last:border-r-0"
                  >
                    <span className="relative inline-block pb-[2px] after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-black/65 after:transition-transform after:duration-200 group-hover:after:scale-x-100">
                      {topic.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <section
              data-section-id="hero"
              className="relative flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center px-6 py-20 md:px-10"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(231,210,173,0.22)_0%,rgba(5,5,5,0)_56%)]" />
              <div className="relative z-10 mx-auto max-w-[1320px]">
                <h1
                  className="text-center font-extrabold leading-[0.88] tracking-[-0.045em] text-white"
                  style={{ fontSize: "clamp(62px, 10.8vw, 182px)" }}
                >
                  <span className="block whitespace-nowrap">
                    {heroWordPrimary.split("").map((letter, index) => (
                      <span
                        key={`${letter}-primary-${index}`}
                        className="hero-letter inline-block"
                        style={{ animationDelay: `${index * 70}ms` }}
                      >
                        {letter}
                      </span>
                    ))}
                  </span>
                  <span className="mt-2 block whitespace-nowrap md:mt-1">
                    {heroWordSecondary.split("").map((letter, index) => (
                      <span
                        key={`${letter}-secondary-${index}`}
                        className="hero-letter inline-block"
                        style={{ animationDelay: `${(heroWordPrimary.length + index) * 70}ms` }}
                      >
                        {letter}
                      </span>
                    ))}
                  </span>
                </h1>
                <p className="mt-5 text-center text-[12px] font-semibold uppercase tracking-[0.18em] text-white/62 md:text-[14px]">
                  мини-курсы для руководителей
                </p>
                <p className="mt-4 text-center text-[20px] font-semibold leading-[1.05] tracking-[-0.02em] text-[#e7d2ad] md:text-[30px]">
                  <span className="inline-grid w-[24ch] grid-cols-[1fr_auto_1fr] items-baseline gap-x-3 align-middle">
                    <span className="justify-self-end whitespace-nowrap">знания</span>
                    <span className="justify-self-center">→</span>
                    <span className="justify-self-start w-[11ch] text-left">
                      <span key={morphResultWords[morphIndex]} className="morph-word inline-block">
                        {morphResultWords[morphIndex]}
                      </span>
                    </span>
                  </span>
                </p>
                <div className="mt-8 flex justify-center">
                  <button
                    type="button"
                    onClick={scrollToCourses}
                    className="inline-flex items-center gap-3 rounded-[16px] bg-[#e7d2ad] px-5 py-3 text-[14px] font-semibold text-black transition hover:translate-y-[-1px]"
                  >
                    Смотреть курсы
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-black text-[#e7d2ad]">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path
                          d="M8 16l8-8M10 8h6v6"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </section>

            <section data-section-id="business-model" className="px-6 pb-12 md:px-10 md:pb-14">
              <div className="mx-auto max-w-5xl rounded-[24px] border border-white/10 bg-[#070707] p-6 md:p-9">
                <h2 className="text-[34px] font-extrabold leading-[1.02] tracking-[-0.03em] text-white md:text-[52px]">
                  Мини-курсы для руководителей
                </h2>

                <div className="mt-7 grid gap-6">
                  <p className="text-[19px] leading-[1.35] text-white/74 md:text-[24px]">
                    Все сотрудники, включая руководителей, нуждаются в регулярной актуализации своих знаний, изучении
                    новых подходов и лучших практик.
                  </p>
                  <p className="text-[19px] leading-[1.35] text-white/74 md:text-[24px]">
                    GPT-чат может ответить на любой вопрос, но не сможет выстроить систему обучения под управленческие
                    задачи.
                  </p>
                  <p className="text-[19px] leading-[1.35] text-white/74 md:text-[24px]">
                    Руководитель не должен быть экспертом в финансах, логистике и прочих бизнес-функциях. Но
                    руководитель обязан знать их базовые принципы работы.
                  </p>
                </div>
              </div>
            </section>

            <section data-section-id="team" className="px-6 pb-12 md:px-10 md:pb-14">
              <div className="mx-auto max-w-5xl rounded-[24px] border border-white/10 bg-[#030303] p-6 md:p-9">
                <h3 className="text-[32px] font-extrabold leading-[1.03] tracking-[-0.03em] text-white md:text-[46px]">
                  Чего не хватает в управлении?
                </h3>

                <div className="mt-5 flex flex-wrap gap-2">
                  {roleOptions.map((option) => {
                    const active = selectedRole === option.key
                    return (
                      <button
                        key={option.key}
                        type="button"
                        onClick={() => setSelectedRole(option.key)}
                        className={`rounded-[999px] border px-4 py-2 text-[12px] font-semibold tracking-[0.02em] transition ${
                          active
                            ? "border-[#e7d2ad] bg-[#e7d2ad] text-black"
                            : "border-white/22 text-white/75 hover:border-white/45 hover:text-white"
                        }`}
                      >
                        {option.label}
                      </button>
                    )
                  })}
                </div>

                <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.1em] text-white/42">Не хватает:</p>
                <p className="mt-2 text-[20px] leading-[1.3] text-white/86 md:text-[25px]">{profile.gap}</p>
                <ul className="mt-5 list-disc space-y-3 pl-6 marker:text-[#e7d2ad]">
                  {profile.bullets.map((item) => (
                    <li key={item} className="text-[17px] font-medium leading-[1.34] text-[#e7d2ad] md:text-[21px]">{item}</li>
                  ))}
                </ul>
              </div>
            </section>

            <section data-section-id="strategy" className="px-6 pb-12 md:px-10 md:pb-14">
              <div ref={strategySectionRef} className="relative mx-auto max-w-5xl">
                <div
                  className="sticky top-[44px] z-20 flex h-[58vh] min-h-[390px] flex-col rounded-[24px] border border-white/10 px-6 py-7 shadow-[0_24px_80px_rgba(0,0,0,0.45)] transition-[background] duration-500 md:px-9 md:py-8"
                  style={{ background: chapterBackgrounds[strategyStep] }}
                >
                  <div className="max-w-3xl">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#e7d2ad]">
                      Путь внедрения · {String(strategyStep + 1).padStart(2, "0")} / {story.length}
                    </p>
                    <h3 className="mt-3 text-[30px] font-extrabold leading-[1.02] tracking-[-0.03em] text-white md:text-[44px]">
                      Три шага к системному управлению
                    </h3>
                    <p className="mt-2 text-[15px] leading-[1.34] text-white/72 md:text-[18px]">
                      Скролл открывает карточки по очереди: база, инструменты и результат.
                    </p>
                  </div>

                  <div className="mt-5 grid flex-1 grid-cols-1 gap-3 md:grid-cols-12 md:grid-rows-2 md:gap-4">
                    {story.map((chapter, index) => {
                      const start = index === 0 ? 0.05 : index === 1 ? 0.38 : 0.7
                      const end = start + 0.24
                      const progress = Math.min(Math.max((strategyProgress - start) / (end - start), 0), 1)
                      const isVisible = progress > 0.02

                      const shellClass =
                        index === 0
                          ? "md:col-span-6 md:row-span-2 md:row-start-1 md:col-start-1 md:self-end"
                          : index === 1
                            ? "md:col-span-5 md:row-start-1 md:col-start-8 md:-translate-y-1"
                            : "md:col-span-5 md:row-start-2 md:col-start-7 md:translate-y-2"

                      return (
                        <div key={chapter.title} className={shellClass}>
                          <article
                            className={`h-full rounded-[18px] border border-white/14 bg-black/56 p-4 backdrop-blur-md md:p-5 ${
                              index === 0 ? "md:min-h-[220px]" : "md:min-h-[160px]"
                            }`}
                            style={{
                              opacity: progress,
                              transform: `translateY(${(1 - progress) * 34}px) scale(${0.93 + progress * 0.07})`,
                              filter: `blur(${(1 - progress) * 1.8}px)`,
                              pointerEvents: isVisible ? "auto" : "none",
                            }}
                          >
                            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#e7d2ad]/85">
                              {`Шаг ${String(index + 1).padStart(2, "0")}`}
                            </p>
                            <p className="mt-2 text-[20px] font-extrabold leading-[1.1] tracking-[-0.02em] text-white md:text-[24px]">
                              {chapter.title.split(" — ")[1] ?? chapter.title}
                            </p>
                            <p className="mt-2 text-[15px] leading-[1.28] text-white/78 md:text-[17px]">{chapter.description}</p>
                          </article>
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div className="h-[128vh] min-h-[760px]" />
              </div>
            </section>

            <section data-section-id="business-system" className="px-6 pb-12 md:px-10 md:pb-14">
              <div className="mx-auto max-w-5xl rounded-[24px] border border-white/10 bg-[#070707] p-6 md:p-9">
                <h3 className="text-[34px] font-extrabold leading-[1.02] tracking-[-0.03em] text-white md:text-[48px]">
                  GPT vs Система
                </h3>
                <p className="mt-3 text-[17px] leading-[1.35] text-white/70 md:text-[20px]">
                  Ответы полезны. Но <strong className="font-extrabold">внедряется только система.</strong>
                </p>

                <div className="mt-7 grid gap-4 md:grid-cols-2">
                  <article className="rounded-[20px] border border-white/8 bg-[#090909] p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/38">GPT-чат</p>
                    <div className="relative mt-3 h-[330px] overflow-hidden rounded-[14px] border border-white/6 bg-[#070707] p-3">
                      <div className="gpt-stream absolute inset-x-3 top-3 space-y-3">
                        {[...gptMessages, ...gptMessages].map((item, index) => (
                          <div
                            key={`${item}-${index}`}
                            className={`rounded-[15px] border px-3 py-2 text-[12px] leading-[1.25] ${
                              index % 2 === 0
                                ? "mr-auto border-white/10 bg-white/[0.045] text-white/56"
                                : "ml-auto border-white/8 bg-white/[0.03] text-white/48"
                            } ${
                              index % 7 === 0
                                ? "w-[76%] opacity-90"
                                : index % 7 === 1
                                  ? "w-[63%] opacity-70"
                                  : index % 7 === 2
                                    ? "w-[69%] opacity-82"
                                    : index % 7 === 3
                                      ? "w-[56%] opacity-66"
                                      : index % 7 === 4
                                        ? "w-[73%] opacity-86"
                                        : index % 7 === 5
                                          ? "w-[60%] opacity-68"
                                          : "w-[67%] opacity-78"
                            }`}
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </article>

                  <article className="rounded-[20px] border border-[#e7d2ad]/46 bg-[radial-gradient(circle_at_16%_10%,rgba(231,210,173,0.14),rgba(0,0,0,0)_42%),#0d0b08] p-4 shadow-[inset_0_0_0_1px_rgba(231,210,173,0.08),0_18px_44px_rgba(0,0,0,0.28)]">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#f0d9aa]">
                      СИСТЕМНАЯ ПРОГРАММА
                    </p>
                    <div className="mt-3 space-y-3">
                      {curriculumBlocks.map((item, index) => (
                        <div
                          key={item}
                          className="system-block flex min-h-[62px] items-center rounded-[12px] border border-[#e7d2ad]/34 bg-[linear-gradient(180deg,rgba(231,210,173,0.11),rgba(231,210,173,0.05))] px-3 py-3 text-[13px] font-semibold leading-[1.25] text-white/90"
                          style={{ animationDelay: `${index * 140}ms` }}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </article>
                </div>
              </div>
            </section>

            <section data-section-id="operations" className="px-6 pb-12 md:px-10 md:pb-14">
              <div className="mx-auto max-w-5xl rounded-[24px] border border-white/10 bg-[radial-gradient(circle_at_10%_18%,rgba(231,210,173,0.22),rgba(7,7,7,0)_42%),#060606] p-6 md:p-9">
                <h3 className="text-[34px] font-extrabold leading-[1.03] tracking-[-0.03em] text-white md:text-[48px]">
                  Путь к системному управлению
                </h3>

                <div className="mt-7 grid gap-4 md:grid-cols-3">
                  {story.map((chapter, index) => (
                    <article
                      key={chapter.title}
                      className="rounded-[20px] border border-white/12 bg-black/45 p-5 backdrop-blur"
                    >
                      <h4 className="text-[24px] font-extrabold leading-[1.02] tracking-[-0.02em] text-white md:text-[32px]">
                        {chapter.title.replace("Глава 0", "").replace(" — ", " —\u00A0")}
                      </h4>
                      <p className="mt-3 text-[16px] leading-[1.32] text-white/72">{chapter.problem}</p>
                      <button
                        type="button"
                        onClick={scrollToCourses}
                        className="mt-6 rounded-[12px] border border-[#e7d2ad]/38 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#e7d2ad] transition hover:bg-[#e7d2ad] hover:text-black"
                      >
                        {chapter.cta}
                      </button>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section data-section-id="learning" className="px-6 pb-12 md:px-10 md:pb-14">
              <div className="mx-auto max-w-5xl rounded-[24px] border border-white/10 bg-[#060606] p-6 md:p-9">
                <h3 className="text-[32px] font-extrabold leading-[1.04] tracking-[-0.03em] text-white md:text-[44px]">
                  Сильное управление требует системного обучения
                </h3>
                <p className="mt-3 max-w-4xl text-[15px] leading-[1.35] text-white/70 md:text-[18px]">
                  Поэтому мы собрали короткие мини-курсы от практиков — по стратегии, бизнес-системе и управлению
                  компанией без перегруза.
                </p>

                <div className="mt-8 grid gap-4 md:grid-cols-3">
                  {learningStats.map((item) => (
                    <article key={item.value} className="rounded-[18px] border border-white/10 bg-[#0a0a0a] p-5">
                      <p className="text-[42px] font-extrabold leading-[0.95] tracking-[-0.03em] text-white md:text-[46px]">
                        {item.value}
                      </p>
                      <div className="mt-3 space-y-1">
                        {item.lines.map((line) => (
                          <p key={line} className="text-[15px] leading-[1.3] text-white/72 md:text-[16px]">
                            {line}
                          </p>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>

                <div className="mt-8 h-px bg-white/10" />

                <div className="mt-8 grid gap-5 lg:grid-cols-2">
                  <article className="rounded-[18px] border border-white/10 bg-[#0a0a0a] p-5">
                    <h4 className="text-[22px] font-extrabold leading-[1.08] tracking-[-0.02em] text-white md:text-[28px]">
                      О чём мини-курсы
                    </h4>
                    <div className="mt-4 grid gap-2 sm:grid-cols-2">
                      {courseThemes.map((theme) => (
                        <p
                          key={theme}
                          className="rounded-[10px] border border-[#e7d2ad]/20 bg-[#101010] px-3 py-2 text-[15px] font-semibold leading-[1.2] text-[#e7d2ad]"
                        >
                          {theme}
                        </p>
                      ))}
                    </div>
                    <p className="mt-5 text-[15px] leading-[1.34] text-white/70 md:text-[16px]">
                      Чтобы руководитель понимал лучшие практики и видел, как выстраивать управление компанией в
                      реальной работе.
                    </p>
                  </article>

                  <article className="rounded-[18px] border border-white/10 bg-[#0a0a0a] p-5">
                    <h4 className="text-[22px] font-extrabold leading-[1.08] tracking-[-0.02em] text-white md:text-[28px]">
                      Как это устроено
                    </h4>
                    <div className="mt-4 grid gap-3">
                      {deliveryBlocks.map((block) => (
                        <div key={block.title} className="rounded-[12px] border border-white/10 bg-[#111111] p-4">
                          <p className="text-[16px] font-semibold leading-[1.2] text-[#e7d2ad]">{block.title}</p>
                          <div className="mt-2 space-y-0.5">
                            {block.lines.map((line) => (
                              <p key={line} className="text-[14px] leading-[1.3] text-white/68 md:text-[15px]">
                                {line}
                              </p>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </article>
                </div>

                <div className="mt-8 rounded-[16px] border border-white/10 bg-[#0a0a0a] p-5">
                  <h4 className="text-[24px] font-extrabold leading-[1.04] tracking-[-0.02em] text-white md:text-[32px]">
                    Что входит в курс
                  </h4>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {learningFormats.map((item) => (
                      <div
                        key={item}
                        className="rounded-[12px] border border-[#e7d2ad]/35 bg-[#101010] px-4 py-3 text-[15px] font-semibold text-white/84 md:text-[16px]"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section id="courses" data-section-id="courses" className="px-6 pb-12 md:px-10 md:pb-14">
              <div className="mx-auto max-w-5xl">
                <h3 className="text-[34px] font-extrabold leading-[1.04] tracking-[-0.03em] text-white md:text-[50px]">
                  Перечень курсов
                </h3>
                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  {courses.map((course) => (
                    <article
                      key={course.title}
                      className="flex h-full flex-col rounded-[24px] border border-white/10 bg-[#070707] p-6 md:p-7"
                    >
                      <div className="md:h-[58px] lg:h-[62px]">
                        <h4
                          className={`text-[32px] font-extrabold leading-[0.98] tracking-[-0.03em] text-white ${
                            course.title === "Управление бизнесом"
                              ? "md:text-[36px] lg:text-[38px] md:whitespace-nowrap"
                              : "md:text-[42px]"
                          }`}
                        >
                          {course.title}
                        </h4>
                      </div>
                      <p className="mt-1 text-[17px] leading-[1.35] text-white/68 md:h-[170px] lg:h-[156px]">
                        {course.description}
                      </p>

                      <div className="mt-5 md:h-[92px]">
                        <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#e7d2ad]">
                          Включает в себя:
                        </p>
                        <div className="mt-2 grid gap-2">
                          {course.items.map((item) => (
                            <p key={item} className="text-[15px] font-medium leading-[1.25] text-white/72">
                              {item}
                            </p>
                          ))}
                        </div>
                      </div>

                      <Link
                        href={course.href}
                        className="mt-auto inline-flex w-fit items-center gap-2 rounded-[14px] border border-[#e7d2ad]/45 px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-[#e7d2ad] transition hover:bg-[#e7d2ad] hover:text-black"
                      >
                        Посмотреть подробнее
                        <span aria-hidden="true">↗</span>
                      </Link>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section className="px-6 pb-12 md:px-10 md:pb-14">
              <div className="mx-auto max-w-5xl rounded-[24px] border border-white/10 bg-[#030303] px-5 py-8 md:px-8 md:py-10">
                <h3 className="text-center text-[34px] font-extrabold leading-[1.04] tracking-[-0.03em] text-white md:text-[50px]">
                  Нам доверяют
                </h3>
                <div className="mt-7 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
                  {trustedLogos.map((logo) => (
                    <div
                      key={logo.src}
                      className="flex h-[72px] items-center justify-center rounded-[12px] border border-white/12 bg-[#0b0b0b] px-3"
                    >
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={logo.width}
                        height={logo.height}
                        unoptimized
                        className={`${logo.sizeClass} w-auto object-contain opacity-95`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <footer className="mt-6 border-t border-white/10 bg-[#020202] px-6 py-9 md:px-10 md:py-10">
              <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/42">Юридическая информация</p>
                  <Link href="/legal/privacy" className="mt-3 block text-[15px] text-white/75 transition hover:text-white">
                    Политика конфиденциальности
                  </Link>
                </div>

                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/42">Соц сети</p>
                  <a
                    href={contactConfig.telegramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 block text-[15px] text-white/75 transition hover:text-white"
                  >
                    Telegram
                  </a>
                </div>

                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/42">Как с нами связаться</p>
                  <a
                    href={`mailto:${contactConfig.email}`}
                    className="mt-3 block text-[15px] text-white/75 transition hover:text-white"
                  >
                    {contactConfig.email}
                  </a>
                </div>
              </div>

              <div className="mx-auto mt-7 max-w-5xl border-t border-white/10 pt-5">
                <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-white/34">
                  copywrite 2023-2026 MINTUSH ©
                </p>
              </div>
            </footer>
          </div>
        </section>

        <style jsx>{`
          .education-topics-track {
            animation: educationTopics 34s linear infinite;
            will-change: transform;
          }

          .hero-letter {
            opacity: 0;
            transform: translateY(28px) scale(0.9);
            animation: heroLetterIn 650ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
          }

          .morph-word {
            animation: morphWord 620ms cubic-bezier(0.22, 1, 0.36, 1);
          }

          .opener-chunk {
            opacity: 0;
            transform: translateY(42px) skewY(7deg);
            animation: openerChunkIn 900ms cubic-bezier(0.2, 0.95, 0.3, 1) forwards;
          }

          .gpt-stream {
            animation: gptStreamFlow 34s linear infinite;
          }

          .system-block {
            opacity: 0;
            transform: translateY(16px);
            animation: systemBlockIn 620ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
          }

          @keyframes educationTopics {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-33.3333%);
            }
          }

          @keyframes heroLetterIn {
            from {
              opacity: 0;
              transform: translateY(28px) scale(0.9);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          @keyframes morphWord {
            from {
              opacity: 0;
              transform: translateY(14px) scale(0.94);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          @keyframes openerChunkIn {
            from {
              opacity: 0;
              transform: translateY(42px) skewY(7deg);
            }
            to {
              opacity: 1;
              transform: translateY(0) skewY(0deg);
            }
          }

          @keyframes gptStreamFlow {
            from {
              transform: translateY(0);
            }
            to {
              transform: translateY(-50%);
            }
          }

          @keyframes systemBlockIn {
            from {
              opacity: 0;
              transform: translateY(16px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .education-topics-track,
            .hero-letter,
            .morph-word,
            .opener-chunk,
            .gpt-stream,
            .system-block {
              animation: none;
              opacity: 1;
              transform: none;
            }
          }
        `}</style>

        <style jsx global>{`
          .mintush-scroll {
            scrollbar-width: thin;
            scrollbar-color: rgba(231, 210, 173, 0.55) rgba(255, 255, 255, 0.06);
          }

          .mintush-scroll::-webkit-scrollbar {
            width: 9px;
            height: 9px;
          }

          .mintush-scroll::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.06);
            border-radius: 9999px;
          }

          .mintush-scroll::-webkit-scrollbar-thumb {
            background: rgba(231, 210, 173, 0.55);
            border-radius: 9999px;
            border: 1px solid rgba(0, 0, 0, 0.25);
          }

          .mintush-scroll::-webkit-scrollbar-thumb:hover {
            background: rgba(231, 210, 173, 0.75);
          }
        `}</style>
      </main>
    </>
  )
}
