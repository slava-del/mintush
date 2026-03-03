"use client"

import Link from "next/link"
import { Manrope } from "next/font/google"
import { useEffect, useRef, useState } from "react"
import { contactConfig, trustedCompanies } from "@/lib/site-config"

type RoleKey = "finance" | "ops" | "team"

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
})

const morphWords = ["знания", "система", "результат"]
const topics = ["Бизнес-модель", "Бизнес-система", "Стратегия", "Операционка", "Команда", "Рост"]
const heroWordPrimary = "mintush"
const heroWordSecondary = "education"

const roleOptions: Array<{ key: RoleKey; label: string }> = [
  { key: "finance", label: "Finance Manager" },
  { key: "ops", label: "Ops Lead" },
  { key: "team", label: "Team Lead" },
]

const roleProfiles: Record<
  RoleKey,
  {
    intro: string
    bullets: string[]
    story: Array<{ title: string; description: string; problem: string; cta: string }>
  }
> = {
  finance: {
    intro: "Пробел: превращать финданные в управленческие решения.",
    bullets: [
      "как выстраивать бизнес-систему через финансовые драйверы",
      "как ставить задачи по unit-экономике и маржинальности",
      "как добиваться бизнес-результата без кассовых разрывов",
    ],
    story: [
      { title: "Глава 01 — Выстроить систему", description: "Связать финмодель, роли и ритм управления.", problem: "Финансы есть, решений нет", cta: "Собрать архитектуру" },
      { title: "Глава 02 — Поставить задачи", description: "Каждая задача привязана к цифре и сроку.", problem: "Планы без метрик", cta: "Связать цель и KPI" },
      { title: "Глава 03 — Получить результат", description: "Еженедельный цикл контроля и коррекции.", problem: "Отчеты без действий", cta: "Запустить управцикл" },
    ],
  },
  ops: {
    intro: "Пробел: управлять процессами как системой, а не тушить пожары.",
    bullets: [
      "как выстраивать бизнес-систему через процессы и роли",
      "как ставить задачи, чтобы исключать узкие места",
      "как добиваться бизнес-результата в срок и по качеству",
    ],
    story: [
      { title: "Глава 01 — Выстроить систему", description: "Фиксируем владельцев, стандарты и точки контроля.", problem: "Хаос в процессах", cta: "Собрать контур" },
      { title: "Глава 02 — Поставить задачи", description: "Цель, ограничение, срок, понятный критерий выполнения.", problem: "Размытые формулировки", cta: "Стандартизировать задачи" },
      { title: "Глава 03 — Получить результат", description: "Короткие спринты и регулярная коррекция курса.", problem: "Срыв сроков", cta: "Удержать темп" },
    ],
  },
  team: {
    intro: "Пробел: перейти от контроля людей к управлению системой результата.",
    bullets: [
      "как выстраивать бизнес-систему вместо микроменеджмента",
      "как ставить задачи так, чтобы команда брала ответственность",
      "как добиваться бизнес-результата через делегирование",
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

const journeyBackgrounds = [
  "radial-gradient(circle at 8% 20%, rgba(231, 210, 173, 0.22), rgba(7, 7, 7, 0) 42%), #060606",
  "radial-gradient(circle at 52% 15%, rgba(231, 210, 173, 0.2), rgba(7, 7, 7, 0) 42%), #060606",
  "radial-gradient(circle at 88% 22%, rgba(231, 210, 173, 0.24), rgba(7, 7, 7, 0) 45%), #060606",
]

const gptMessages = [
  "Как быстро вырасти в 2 раза за квартал?",
  "Напиши KPI для отдела продаж и логистики.",
  "Сделай регламент найма за 3 шага.",
  "Как делегировать, если команда не тянет?",
  "Собери стратегию и операционку в одном документе.",
  "Сократи косты без потери качества.",
]

const curriculumBlocks = [
  "Модуль 1: бизнес-модель и системная архитектура",
  "Модуль 2: постановка задач и приоритизация",
  "Модуль 3: метрики, ритмы, контроль исполнения",
  "Модуль 4: стратегия в операционном цикле",
  "Чек-листы, шаблоны, кейсы внедрения",
]

const stats = [
  { value: "7-10%", label: "рабочего времени в год", description: "топ-менеджеры в среднем выделяют на развитие управленческих навыков." },
  { value: "$1,200+", label: "на одного руководителя", description: "средний годовой бюджет компаний на обучение менеджмента в развитых рынках." },
  { value: "до 40%", label: "компаний отмечают дефицит", description: "системных управленческих компетенций у линейных и middle-руководителей." },
]

const learningFormats = ["видео-материалы", "руководства-презентации", "чек-листы", "практические шаблоны"]

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
  const [activeChapter, setActiveChapter] = useState(0)
  const [activeJourney, setActiveJourney] = useState(0)
  const [afterPercent, setAfterPercent] = useState(57)
  const cardRef = useRef<HTMLDivElement | null>(null)
  const chapterRefs = useRef<Array<HTMLDivElement | null>>([])
  const journeyRef = useRef<HTMLDivElement | null>(null)
  const coursesRef = useRef<HTMLElement | null>(null)

  const profile = roleProfiles[selectedRole]
  const story = profile.story

  const closeOpener = () => {
    setOpenerClosing(true)
    window.setTimeout(() => setShowOpener(false), 450)
  }

  const scrollToCourses = () => {
    const container = cardRef.current
    const coursesSection = coursesRef.current
    if (!container || !coursesSection) return
    container.scrollTo({ top: Math.max(coursesSection.offsetTop - 24, 0), behavior: "smooth" })
  }

  useEffect(() => {
    const ticker = window.setInterval(() => {
      setMorphIndex((prev) => (prev + 1) % morphWords.length)
    }, 1800)
    return () => window.clearInterval(ticker)
  }, [])

  useEffect(() => {
    if (!showOpener) return
    const closeTimer = window.setTimeout(() => setOpenerClosing(true), 2550)
    const hideTimer = window.setTimeout(() => setShowOpener(false), 3320)
    return () => {
      window.clearTimeout(closeTimer)
      window.clearTimeout(hideTimer)
    }
  }, [showOpener])

  useEffect(() => {
    document.body.style.overflow = showOpener ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [showOpener])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const indexAttr = entry.target.getAttribute("data-index")
          if (indexAttr === null) return
          const index = Number(indexAttr)
          if (Number.isNaN(index)) return
          setActiveChapter((prev) => (prev === index ? prev : index))
        })
      },
      { threshold: 0.62 },
    )
    chapterRefs.current.forEach((item) => item && observer.observe(item))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const journey = journeyRef.current
    if (!journey) return
    const onScroll = () => {
      const cards = Array.from(journey.querySelectorAll<HTMLElement>("[data-journey-index]"))
      if (!cards.length) return
      const center = journey.scrollLeft + journey.clientWidth / 2
      let closestIndex = 0
      let minDistance = Number.POSITIVE_INFINITY
      cards.forEach((card) => {
        const index = Number(card.dataset.journeyIndex ?? 0)
        const cardCenter = card.offsetLeft + card.clientWidth / 2
        const distance = Math.abs(cardCenter - center)
        if (distance < minDistance) {
          minDistance = distance
          closestIndex = index
        }
      })
      setActiveJourney((prev) => (prev === closestIndex ? prev : closestIndex))
    }
    onScroll()
    journey.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      journey.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
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
            className="absolute right-5 top-5 rounded-full border border-white/18 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-white/78 transition hover:bg-white/10 hover:text-white"
          >
            Пропустить
          </button>

          <div className="max-w-5xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#e7d2ad]">Problem Slap</p>
            <h2 className="mt-5 text-[clamp(34px,6.8vw,102px)] font-extrabold leading-[0.92] tracking-[-0.045em] text-white">
              <span className="opener-chunk inline-block [animation-delay:40ms]">67% менеджеров</span>{" "}
              <span className="opener-chunk inline-block [animation-delay:200ms]">проваливают</span>{" "}
              <span className="opener-chunk inline-block [animation-delay:360ms] text-[#e7d2ad]">внедрение</span>{" "}
              <span className="opener-chunk inline-block [animation-delay:520ms]">не из-за стратегии,</span>{" "}
              <span className="opener-chunk inline-block [animation-delay:680ms]">а из-за отсутствия</span>{" "}
              <span className="opener-chunk inline-block [animation-delay:840ms]">управленческой базы.</span>
            </h2>
          </div>
        </div>
      )}

      <main
        className={`${manrope.className} min-h-screen bg-[radial-gradient(circle_at_50%_-20%,rgba(231,210,173,0.24),rgba(11,11,11,0)_42%),#0b0b0b] p-3 sm:p-4 md:p-6`}
      >
        <section className="relative w-full">
          <div
            ref={cardRef}
            className="mintush-scroll h-[calc(100vh-1.5rem)] sm:h-[calc(100vh-2rem)] md:h-[calc(100vh-3rem)] overflow-x-hidden overflow-y-auto rounded-[28px] border border-[#e7d2ad]/45 bg-[#050505] shadow-[0_40px_140px_rgba(0,0,0,0.65)]"
          >
            <div className="sticky top-0 z-30 overflow-hidden border-b border-black/15 bg-[#e7d2ad] text-black">
              <div className="education-topics-track flex w-max items-center">
                {[...topics, ...topics].map((topic, index) => (
                  <span
                    key={`${topic}-${index}`}
                    className="border-r border-black/15 px-8 py-3 text-[12px] font-semibold uppercase tracking-[0.08em] last:border-r-0"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            <section className="relative flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center px-6 py-20 md:px-10">
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
                <p className="mt-4 text-center text-[22px] font-semibold leading-[1.05] tracking-[-0.02em] text-[#e7d2ad] md:text-[34px]">
                  знания →{" "}
                  <span key={morphWords[morphIndex]} className="morph-word inline-block">
                    {morphWords[morphIndex]}
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

            <section className="px-6 pb-12 md:px-10 md:pb-14">
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

            <section className="px-6 pb-12 md:px-10 md:pb-14">
              <div className="mx-auto max-w-5xl rounded-[24px] border border-white/10 bg-[#030303] p-6 md:p-9">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <h3 className="text-[32px] font-extrabold leading-[1.03] tracking-[-0.03em] text-white md:text-[46px]">
                    What are you missing?
                  </h3>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#e7d2ad]">
                    Interactive role selector
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {roleOptions.map((option) => {
                    const active = selectedRole === option.key
                    return (
                      <button
                        key={option.key}
                        type="button"
                        onClick={() => setSelectedRole(option.key)}
                        className={`rounded-[999px] border px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.08em] transition ${
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

                <p className="mt-5 text-[18px] leading-[1.35] text-white/72 md:text-[22px]">{profile.intro}</p>
                <div className="mt-5 grid gap-2">
                  {profile.bullets.map((item) => (
                    <p key={item} className="text-[18px] font-semibold leading-[1.3] text-[#e7d2ad] md:text-[23px]">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </section>

            <section className="px-6 pb-12 md:px-10 md:pb-14">
              <div className="mx-auto max-w-5xl overflow-hidden rounded-[24px] border border-white/10">
                <div
                  className="sticky top-[44px] z-20 flex h-[74vh] min-h-[460px] items-center px-6 py-10 transition-all duration-500 md:px-10"
                  style={{ background: chapterBackgrounds[activeChapter] }}
                >
                  <div className="max-w-3xl">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#e7d2ad]">
                      Scroll story · {String(activeChapter + 1).padStart(2, "0")} / {story.length}
                    </p>
                    <h3 className="mt-4 text-[38px] font-extrabold leading-[0.98] tracking-[-0.03em] text-white md:text-[64px]">
                      {story[activeChapter].title}
                    </h3>
                    <p className="mt-5 text-[18px] leading-[1.35] text-white/72 md:text-[25px]">
                      {story[activeChapter].description}
                    </p>
                  </div>
                </div>

                <div className="relative">
                  {story.map((chapter, index) => (
                    <div
                      key={chapter.title}
                      ref={(node) => {
                        chapterRefs.current[index] = node
                      }}
                      data-index={index}
                      className="flex h-[74vh] min-h-[460px] items-end border-t border-white/10 bg-[#040404] p-6 md:p-10"
                    >
                      <div className="max-w-lg rounded-[18px] border border-white/12 bg-black/55 p-5 backdrop-blur">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/45">Сигнал</p>
                        <p className="mt-2 text-[24px] font-extrabold leading-[1.06] tracking-[-0.02em] text-[#e7d2ad] md:text-[30px]">
                          {chapter.problem}
                        </p>
                        <p className="mt-3 text-[14px] font-semibold uppercase tracking-[0.08em] text-white/75">
                          {chapter.cta}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="px-6 pb-12 md:px-10 md:pb-14">
              <div className="mx-auto max-w-5xl rounded-[24px] border border-white/10 bg-[#070707] p-6 md:p-9">
                <h3 className="text-[34px] font-extrabold leading-[1.02] tracking-[-0.03em] text-white md:text-[48px]">
                  GPT vs. Система
                </h3>
                <p className="mt-3 text-[17px] leading-[1.35] text-white/70 md:text-[20px]">
                  Слева ответы на случайные вопросы. Справа структура, которая действительно внедряется в
                  управленческий контур.
                </p>

                <div className="mt-7 grid gap-4 md:grid-cols-2">
                  <article className="rounded-[20px] border border-white/12 bg-[#111111] p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/45">GPT-чат</p>
                    <div className="relative mt-3 h-[330px] overflow-hidden rounded-[14px] border border-white/8 bg-[#0a0a0a] p-3">
                      <div className="gpt-stream absolute inset-x-3 top-3 space-y-3">
                        {[...gptMessages, ...gptMessages].map((item, index) => (
                          <div
                            key={`${item}-${index}`}
                            className={`max-w-[90%] rounded-[12px] border px-3 py-2 text-[12px] leading-[1.25] ${
                              index % 2 === 0
                                ? "mr-auto border-white/12 bg-white/6 text-white/82"
                                : "ml-auto border-[#e7d2ad]/22 bg-[#e7d2ad]/10 text-[#f1debf]"
                            }`}
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </article>

                  <article className="rounded-[20px] border border-[#e7d2ad]/28 bg-[#0b0b0b] p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#e7d2ad]">
                      Системная программа
                    </p>
                    <div className="mt-3 space-y-3">
                      {curriculumBlocks.map((item, index) => (
                        <div
                          key={item}
                          className="system-block rounded-[12px] border border-[#e7d2ad]/20 bg-[#141414] px-3 py-3 text-[13px] font-semibold leading-[1.25] text-white/88"
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

            <section className="px-6 pb-12 md:px-10 md:pb-14">
              <div
                className="mx-auto max-w-5xl rounded-[24px] border border-white/10 p-6 transition-colors duration-500 md:p-9"
                style={{ background: journeyBackgrounds[activeJourney] }}
              >
                <h3 className="text-[34px] font-extrabold leading-[1.03] tracking-[-0.03em] text-white md:text-[48px]">
                  Horizontal Journey
                </h3>
                <p className="mt-3 text-[17px] leading-[1.35] text-white/70 md:text-[20px]">
                  Прокрутите горизонтально: каждая карточка это отдельный этап перехода к системному управлению.
                </p>

                <div ref={journeyRef} className="mt-7 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3">
                  {story.map((chapter, index) => (
                    <article
                      key={chapter.title}
                      data-journey-index={index}
                      className="min-w-[84vw] snap-center rounded-[20px] border border-white/12 bg-black/45 p-5 backdrop-blur md:min-w-[360px]"
                    >
                      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#e7d2ad]">
                        Card {String(index + 1).padStart(2, "0")}
                      </p>
                      <h4 className="mt-3 text-[30px] font-extrabold leading-[0.98] tracking-[-0.03em] text-white md:text-[40px]">
                        {chapter.title.replace("Глава 0", "")}
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

            <section className="px-6 pb-12 md:px-10 md:pb-14">
              <div className="mx-auto max-w-5xl rounded-[24px] border border-white/10 bg-[#070707] p-6 md:p-9">
                <h3 className="text-[34px] font-extrabold leading-[1.03] tracking-[-0.03em] text-white md:text-[48px]">
                  До / После
                </h3>
                <p className="mt-3 text-[17px] leading-[1.35] text-white/70 md:text-[20px]">
                  Сдвиньте разделитель и сравните: хаотичное управление против структурной системы.
                </p>

                <div className="relative mt-8 overflow-hidden rounded-[20px] border border-white/12 bg-black">
                  <div className="relative h-[360px] md:h-[420px]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(255,255,255,0.08),rgba(255,255,255,0)_40%),#090909] p-6">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/45">До</p>
                      <div className="mt-5 space-y-3 blur-[1.2px]">
                        <div className="rounded-[10px] border border-red-400/25 bg-red-300/6 p-3 text-[13px] text-white/70">
                          Список задач без владельцев и сроков
                        </div>
                        <div className="rounded-[10px] border border-white/14 bg-white/6 p-3 text-[13px] text-white/70">
                          KPI конфликтуют между отделами
                        </div>
                        <div className="rounded-[10px] border border-white/14 bg-white/6 p-3 text-[13px] text-white/70">
                          Отчеты есть, действий нет
                        </div>
                        <div className="rounded-[10px] border border-white/14 bg-white/6 p-3 text-[13px] text-white/70">
                          Решения принимает только собственник
                        </div>
                      </div>
                    </div>

                    <div
                      className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(231,210,173,0.28),rgba(255,255,255,0)_40%),#101010] p-6"
                      style={{ clipPath: `inset(0 ${100 - afterPercent}% 0 0)` }}
                    >
                      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#e7d2ad]">После</p>
                      <div className="mt-5 space-y-3">
                        <div className="rounded-[10px] border border-[#e7d2ad]/30 bg-[#e7d2ad]/10 p-3 text-[13px] font-semibold text-white/88">
                          Единая карта ролей и зон ответственности
                        </div>
                        <div className="rounded-[10px] border border-white/18 bg-white/8 p-3 text-[13px] font-semibold text-white/88">
                          Задачи через KPI, срок и критерий качества
                        </div>
                        <div className="rounded-[10px] border border-white/18 bg-white/8 p-3 text-[13px] font-semibold text-white/88">
                          Еженедельный управленческий цикл решений
                        </div>
                        <div className="rounded-[10px] border border-white/18 bg-white/8 p-3 text-[13px] font-semibold text-white/88">
                          Предсказуемый результат по цифрам, срокам, качеству
                        </div>
                      </div>
                    </div>

                    <div
                      className="pointer-events-none absolute bottom-0 top-0 z-10 w-px bg-[#e7d2ad]"
                      style={{ left: `${afterPercent}%` }}
                    >
                      <div className="absolute left-1/2 top-1/2 grid h-9 w-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[#e7d2ad]/55 bg-black text-[#e7d2ad]">
                        ↔
                      </div>
                    </div>

                    <input
                      type="range"
                      min={12}
                      max={88}
                      value={afterPercent}
                      onChange={(event) => setAfterPercent(Number(event.target.value))}
                      aria-label="Сравнение до и после"
                      className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="px-6 pb-12 md:px-10 md:pb-14">
              <div className="mx-auto max-w-5xl rounded-[24px] border border-white/10 bg-[#030303] p-6 md:p-9">
                <h3 className="text-[32px] font-extrabold leading-[1.04] tracking-[-0.03em] text-white md:text-[44px]">
                  Статистика по управленческому обучению
                </h3>
                <p className="mt-3 text-[13px] leading-[1.3] text-white/45 md:text-[14px]">
                  Оценочный обзор для визуального блока: международные практики и рыночные диапазоны.
                </p>

                <div className="mt-8 grid gap-4 md:grid-cols-3">
                  {stats.map((item) => (
                    <article key={item.value} className="rounded-[18px] border border-white/10 bg-[#090909] p-5">
                      <p className="text-[44px] font-extrabold leading-[0.95] tracking-[-0.03em] text-white">
                        {item.value}
                      </p>
                      <p className="mt-2 text-[13px] font-semibold uppercase tracking-[0.08em] text-[#e7d2ad]">
                        {item.label}
                      </p>
                      <p className="mt-3 text-[15px] leading-[1.3] text-white/62">{item.description}</p>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section className="px-6 pb-12 md:px-10 md:pb-14">
              <div className="mx-auto max-w-5xl rounded-[24px] border border-white/10 bg-[#070707] p-6 md:p-9">
                <p className="text-[19px] leading-[1.35] text-white/74 md:text-[24px]">
                  Мы собрали короткие мини-курсы от опытных управленцев про:
                </p>

                <div className="mt-5 grid gap-2 sm:grid-cols-2">
                  {topics.map((item) => (
                    <p key={item} className="text-[18px] font-semibold leading-[1.3] text-[#e7d2ad] md:text-[22px]">
                      {item}
                    </p>
                  ))}
                </div>

                <p className="mt-6 text-[19px] leading-[1.35] text-white/74 md:text-[24px]">
                  Чтобы руководитель имел понимание лучших практик и видел примеры, как правильно выстраивать
                  управление компанией.
                </p>
                <p className="mt-5 text-[19px] leading-[1.35] text-white/74 md:text-[24px]">
                  Каждый мини-курс можно пройти за пару дней, а можно в своем темпе. Руководства построены так, чтобы
                  делать шаг за шагом и не перегружать свой график.
                </p>

                <h3 className="mt-8 text-[30px] font-extrabold leading-[1.05] tracking-[-0.03em] text-white md:text-[42px]">
                  Курсы включают в себя
                </h3>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {learningFormats.map((item) => (
                    <div
                      key={item}
                      className="rounded-[14px] border border-[#e7d2ad]/35 bg-[#111111] px-4 py-3 text-[17px] font-semibold text-white/85"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="courses" ref={coursesRef} className="px-6 pb-12 md:px-10 md:pb-14">
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
                      <h4 className="text-[32px] font-extrabold leading-[0.98] tracking-[-0.03em] text-white md:text-[42px]">
                        {course.title}
                      </h4>
                      <p className="mt-4 text-[17px] leading-[1.35] text-white/68">{course.description}</p>

                      <p className="mt-5 text-[13px] font-semibold uppercase tracking-[0.08em] text-[#e7d2ad]">
                        Включает в себя:
                      </p>
                      <div className="mt-2 grid gap-2">
                        {course.items.map((item) => (
                          <p key={item} className="text-[15px] font-medium leading-[1.25] text-white/72">
                            {item}
                          </p>
                        ))}
                      </div>

                      <Link
                        href={course.href}
                        className="mt-6 inline-flex w-fit items-center gap-2 rounded-[14px] border border-[#e7d2ad]/45 px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-[#e7d2ad] transition hover:bg-[#e7d2ad] hover:text-black"
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
                <div className="mt-7 grid grid-cols-2 gap-3 md:grid-cols-4">
                  {trustedCompanies.map((company) => (
                    <div
                      key={company}
                      className="rounded-[12px] border border-white/12 bg-[#0b0b0b] px-3 py-5 text-center text-[12px] font-semibold uppercase tracking-[0.08em] text-white/52 md:text-[13px]"
                    >
                      {company}
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
            animation: gptStreamFlow 26s linear infinite;
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
              transform: translateX(-50%);
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
