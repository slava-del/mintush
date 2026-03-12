import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import { LeadForm } from "@/components/lead-form"
import { LandingPrimaryNav } from "@/components/landing-primary-nav"
import { contactConfig, mentorSummary } from "@/lib/site-config"
import { PenUnderlineOnView } from "./PenUnderlineOnView"
import { AlumniChatSection } from "../landing/sections/AlumniChatSection"
import styles from "./page.module.css"

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "Курс: Стратегия бизнеса на 12 месяцев",
  description:
    "Практический курс для владельцев и руководителей МСБ: соберите стратегию на 12 месяцев и встроите её в операционное управление.",
}

const valuePoints = [
  "ясность: где бизнес сейчас и куда идём",
  "фокус: что делаем и что не делаем в этом году",
  "управление: ритм, метрики, ответственность, корректировки по факту",
]

const whoFor = [
  "принимают большинство решений и устали тащить всё на себе",
  "хотят расти без хаоса, авралов и выгорания команды",
  "уже пробовали делать стратегию, но внедрение буксует",
  "хотят управлять через цели и результат, а не через постоянное присутствие",
]

const finalResultItems = [
  {
    id: "01",
    title: "Стратегия на 1 год",
    description: "цели, фокус, метрики и ключевые инициативы на нескольких страницах",
  },
  {
    id: "02",
    title: "Карта «сейчас → цель»",
    description: "исходная точка, ограничения и приоритеты движения",
  },
  {
    id: "03",
    title: "Механизм внедрения",
    description: "роли, зоны ответственности и управленческий ритм",
  },
  {
    id: "04",
    title: "Операционная система стратегии",
    description: "plan/fact, корректировки и регулярный контроль метрик",
  },
]

const guides = [
  "Бизнес начинается с бизнес-модели",
  "Алгоритм создания стратегии",
  "Успешное внедрение стратегии",
  "Регулярная работа со стратегией",
]

const webinars = [
  "Как устроена бизнес-модель",
  "Как создать стратегию бизнеса",
  "Формирование стратегии бизнеса на следующий год",
  "Алгоритм работы стратегии",
  "Успешное внедрение стратегии",
  "Регулярная работа со стратегией",
]

const formatHighlights = [
  {
    lead: "Записи остаются у вас",
    support: "Проходите курс в удобном темпе и возвращайтесь к нужным темам в любой момент.",
  },
  {
    lead: "Руководства как чек-листы",
    support: "Прочитал, сделал, получил результат. Без лишней теории и перегруза.",
  },
  {
    lead: "Точечная работа с экспертом",
    support: "В расширенных пакетах: разбор ваших задач и решений по шагам.",
  },
]

const tariffCards = [
  {
    id: "basic",
    title: "БАЗОВЫЙ",
    price: "$…",
    intro: "Для самостоятельной работы",
    includes: ["4 руководства + 6 вебинаров"],
    button: "Купить пакет «Базовый»",
    cardBackground: "#0B0B0D",
    cardBorder: "rgba(201, 166, 107, 0.22)",
    titleColor: "#C8A06A",
    includesColor: "rgba(200, 160, 106, 0.72)",
    buttonBackground: "rgba(18,18,19,0.62)",
    buttonBorder: "#8F6A3A",
    buttonText: "#F4E7D3",
    buttonFilled: false,
    glow: "0 0 0 1px rgba(201,166,107,0.06) inset",
  },
  {
    id: "support",
    title: "С ПОДДЕРЖКОЙ",
    price: "$…",
    intro: "Если важно свериться с экспертом и не застрять",
    includes: ["всё из «Базового тарифа»", "шаблон стратегии", "индивидуальная консультация с экспертом курса на 30 минут"],
    button: "Купить пакет «С поддержкой»",
    cardBackground: "linear-gradient(180deg,#111111 0%,#0D0D0E 100%)",
    cardBorder: "rgba(212, 177, 116, 0.5)",
    titleColor: "#D4B174",
    includesColor: "rgba(212, 177, 116, 0.82)",
    buttonBackground: "#C9A06B",
    buttonBorder: "#C9A06B",
    buttonText: "#111111",
    buttonFilled: true,
    isFeatured: true,
    glow: "0 0 0 1px rgba(212,177,116,0.14) inset, 0 24px 60px rgba(212,177,116,0.16)",
  },
  {
    id: "turnkey",
    title: "СТРАТЕГИЯ ПОД КЛЮЧ",
    price: "$…",
    intro: "Если нужен быстрый результат и готовая стратегия",
    includes: ["всё из тарифа «С поддержкой»", "помощь эксперта в сборке стратегии вашего бизнеса"],
    button: "Купить пакет «Под ключ»",
    cardBackground: "linear-gradient(180deg,#100E0C 0%,#0B0B0C 100%)",
    cardBorder: "rgba(224, 190, 132, 0.38)",
    titleColor: "#E0BE84",
    includesColor: "#A98553",
    buttonBackground: "rgba(34,23,14,0.55)",
    buttonBorder: "#D7B278",
    buttonText: "#FFF4E3",
    buttonFilled: false,
    glow: "0 0 0 1px rgba(224,190,132,0.08) inset",
  },
]

const faqItems = [
  {
    question: "Курс подойдёт, если у меня совсем небольшой бизнес?",
    answer: "Да. В МСБ стратегия особенно важна: ресурсы ограничены, а ошибки стоят дорого.",
  },
  {
    question: "Сколько времени займёт?",
    answer:
      "Можно пройти быстро (например, за 4 дня), можно в своём темпе. Материалы построены так, чтобы идти шаг за шагом без перегруза своего графика.",
  },
  {
    question: "Если у меня уже есть стратегия/планы, есть смысл брать курс?",
    answer:
      "Да, если внедрение буксует. Курс про реализацию: приоритеты, ответственность, ритм, план/факт и корректировки по рынку.",
  },
  {
    question: "Что будет результатом после курса?",
    answer: "Короткая стратегия на 12 месяцев + набор инициатив и метрик + система регулярного управления стратегией.",
  },
]

const monthlyQuestions = [
  {
    id: "direction",
    text: "мы всё ещё идём туда, куда выбрали",
  },
  {
    id: "metrics",
    text: "мы видим прогресс в ключевых метриках",
  },
  {
    id: "decisions",
    text: "мы принимаем решения и корректируем планы под изменения рынка",
  },
] as const

const expertStats = [
  { value: "10+ лет", label: "в цифровизации бизнеса" },
  { value: "Ex-C-level", label: "международных компаний" },
  { value: "Board", label: "директора и наблюдательные советы" },
]

const strategyTopTopics = [
  { label: "Старт", href: "#top" },
  { label: "Ценность", href: "#value" },
  { label: "Для кого", href: "#who-for" },
  { label: "Результат", href: "#result" },
  { label: "Программа", href: "#program" },
  { label: "Тарифы", href: "#tariffs" },
  { label: "Вебинар", href: "#free-webinar" },
  { label: "FAQ", href: "#faq" },
  { label: "Контакты", href: "#contact" },
]

const strategyMarqueeTopics = [...strategyTopTopics, ...strategyTopTopics, ...strategyTopTopics]

function StrategyQuestionVisual({ id }: { id: "direction" | "metrics" | "decisions" }) {
  if (id === "direction") {
    return (
      <svg viewBox="0 0 360 220" className="h-[170px] w-full max-w-[280px]" fill="none" aria-hidden="true">
        <path
          d="M34 182C88 182 88 136 132 136C174 136 176 90 222 90H292"
          stroke="rgba(255,255,255,0.95)"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M34 182C94 182 96 158 140 158C182 158 186 116 226 116H292"
          stroke="rgba(255,255,255,0.42)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="2 10"
        />
        <circle cx="34" cy="182" r="10" fill="rgba(255,255,255,0.98)" />
        <circle cx="132" cy="136" r="7" fill="rgba(255,255,255,0.9)" />
        <circle cx="222" cy="90" r="7" fill="rgba(255,255,255,0.9)" />
        <path d="M292 90L274 72" stroke="rgba(255,255,255,0.98)" strokeWidth="6" strokeLinecap="round" />
        <path d="M292 90L274 108" stroke="rgba(255,255,255,0.98)" strokeWidth="6" strokeLinecap="round" />
      </svg>
    )
  }

  if (id === "metrics") {
    return (
      <svg viewBox="0 0 360 220" className="h-[170px] w-full max-w-[280px]" fill="none" aria-hidden="true">
        <rect x="34" y="106" width="292" height="8" rx="4" fill="rgba(255,255,255,0.2)" />
        <rect x="34" y="106" width="204" height="8" rx="4" fill="rgba(255,255,255,0.96)" />
        <circle cx="34" cy="110" r="12" fill="rgba(255,255,255,0.98)" />
        <circle cx="106" cy="110" r="10" fill="rgba(255,255,255,0.95)" />
        <circle cx="178" cy="110" r="10" fill="rgba(255,255,255,0.95)" />
        <circle cx="250" cy="110" r="10" fill="rgba(255,255,255,0.35)" />
        <circle cx="326" cy="110" r="12" fill="rgba(255,255,255,0.25)" />
        <path d="M98 150L104 156L116 142" stroke="rgba(255,255,255,0.98)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M170 150L176 156L188 142" stroke="rgba(255,255,255,0.98)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M242 156H258" stroke="rgba(255,255,255,0.72)" strokeWidth="4" strokeLinecap="round" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 360 220" className="h-[170px] w-full max-w-[280px]" fill="none" aria-hidden="true">
      <path d="M94 80L130 58L166 80L130 102L94 80Z" fill="rgba(255,255,255,0.98)" />
      <path d="M94 80V126L130 148V102L94 80Z" fill="rgba(255,255,255,0.92)" />
      <path d="M166 80V126L130 148V102L166 80Z" fill="rgba(255,255,255,0.92)" />

      <path d="M170 42L206 20L242 42L206 64L170 42Z" fill="rgba(255,255,255,0.98)" />
      <path d="M170 42V88L206 110V64L170 42Z" fill="rgba(255,255,255,0.92)" />
      <path d="M242 42V88L206 110V64L242 42Z" fill="rgba(255,255,255,0.92)" />

      <path d="M246 118L282 96L318 118L282 140L246 118Z" fill="rgba(255,255,255,0.98)" />
      <path d="M246 118V164L282 186V140L246 118Z" fill="rgba(255,255,255,0.92)" />
      <path d="M318 118V164L282 186V140L318 118Z" fill="rgba(255,255,255,0.92)" />

      <path d="M174 28C152 30 142 44 140 62" stroke="rgba(255,255,255,0.88)" strokeWidth="4" strokeLinecap="round" />
      <path d="M136 56L140 66L148 58" stroke="rgba(255,255,255,0.88)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M250 106C266 98 278 96 294 102" stroke="rgba(255,255,255,0.88)" strokeWidth="4" strokeLinecap="round" />
      <path d="M286 98L296 102L288 110" stroke="rgba(255,255,255,0.88)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function BusinessStrategyPage() {
  return (
    <main
      className={`${manrope.className} min-h-screen bg-black p-0 md:p-6`}
    >
      <section className="relative w-full">
        <div
          className={`${styles.scrollRoot} relative overflow-x-hidden bg-[#050505] md:h-[calc(100vh-3rem)] md:overflow-y-auto md:rounded-[28px] md:border md:border-[#e7d2ad]/45 md:shadow-[0_40px_140px_rgba(0,0,0,0.65)]`}
        >
          <div className="sticky top-0 z-50 overflow-hidden border-b border-black/15 bg-[#e7d2ad] text-black">
            <div className={`${styles.topicsTrack} flex w-max items-center`}>
              {strategyMarqueeTopics.map((topic, index) => (
                <a
                  key={`${topic.label}-${index}`}
                  href={topic.href}
                  className="group border-r border-black/15 px-8 py-3 text-[12px] font-semibold uppercase tracking-[0.08em] text-black/92 transition hover:bg-black/7 hover:text-black last:border-r-0"
                >
                  <span className="relative inline-block pb-[2px] after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-black/65 after:transition-transform after:duration-200 group-hover:after:scale-x-100">
                    {topic.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden bg-[#050505]">
            <section id="top" className="relative overflow-hidden px-6 pb-16 pt-20 md:px-12 md:pb-20 md:pt-24">
          <div className="pointer-events-none absolute inset-x-0 top-5 z-40 px-6 md:top-6 md:px-12">
            <div className="mx-auto flex max-w-[1380px] justify-end">
              <div className="pointer-events-auto">
                <LandingPrimaryNav mode="brand-hamburger" contactHref="#contact" />
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute left-1/2 top-6 h-56 w-56 -translate-x-1/2 rounded-full bg-[#e7d2ad]/18 blur-3xl" />
          <div className="pointer-events-none absolute right-10 top-24 h-44 w-44 rounded-full bg-[#e7d2ad]/12 blur-3xl" />
          <div className="mx-auto grid max-w-[1380px] items-start gap-10 lg:grid-cols-[1.08fr_0.92fr] xl:gap-14">
            <div className="relative z-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#e7d2ad]/78">Практический курс</p>
              <h1 className="mt-3 text-[clamp(42px,6.1vw,92px)] font-extrabold leading-[0.9] tracking-[-0.045em] text-[#EDEDED]">
                Стратегия бизнеса
                <br />
                на 12 месяцев
              </h1>
              <p className="mt-4 text-[clamp(16px,1.9vw,24px)] font-semibold leading-[1.14] tracking-[-0.015em] text-[#e7d2ad]">
                без «воды» и бесконечных планёрок
              </p>
              <p className="mt-4 max-w-2xl text-[17px] leading-[1.48] text-[#EDEDED]/86 md:text-[20px]">
                Практический курс для владельцев и руководителей малого и среднего бизнеса: соберёте стратегию на год и
                встроите её в операционное управление, чтобы она работала, а не лежала в папке.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#tariffs"
                  className="inline-flex items-center rounded-[14px] bg-[#e7d2ad] px-6 py-3.5 text-[14px] font-semibold uppercase tracking-[0.08em] text-black transition hover:translate-y-[-1px] hover:bg-[#d9bf98]"
                >
                  Выбрать пакет и купить
                </a>
                <a
                  href="#free-webinar"
                  className="inline-flex items-center rounded-[14px] border border-[#e7d2ad]/45 px-6 py-3.5 text-[14px] font-semibold uppercase tracking-[0.08em] text-[#EDEDED]/92 transition hover:border-[#e7d2ad] hover:text-[#EDEDED]"
                >
                  Смотреть 1-й вебинар бесплатно
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-[28px] border border-[#e7d2ad]/35 bg-[#0a0a0a]/70">
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0)_0%,rgba(5,5,5,0.82)_100%)]" />
                <Image
                  src="/images/course-strategy.jpg"
                  alt="Стратегия бизнеса"
                  width={900}
                  height={1200}
                  priority
                  className="h-[320px] max-h-[48vh] w-full object-cover object-center opacity-72 sm:h-[360px] md:h-[430px] md:max-h-[52vh] xl:h-[500px] xl:max-h-[56vh]"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="value" className="mx-auto max-w-[1380px] px-6 pb-14 md:px-12 md:pb-16">
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#e7d2ad]/78">Что дает курс</p>
          <div className="mt-5 overflow-hidden rounded-[20px] border border-[#e7d2ad]/34 bg-[linear-gradient(90deg,rgba(3,3,3,0.92)_0%,rgba(6,6,6,0.98)_52%,rgba(10,10,10,0.92)_100%)]">
            <div className="grid md:grid-cols-3">
              {valuePoints.map((point, index) => {
                const [titleRaw, ...descriptionParts] = point.split(":")
                const title = titleRaw.trim()
                const description = descriptionParts.join(":").trim()
                const lineClass = index < valuePoints.length - 1 ? "md:border-r md:border-r-[#e7d2ad]/28" : ""
                const rowClass = index < valuePoints.length - 1 ? "border-b border-b-[#e7d2ad]/20 md:border-b-0" : ""

                return (
                  <article key={point} className={`min-h-[210px] px-7 py-7 md:min-h-[240px] md:px-9 md:py-8 ${lineClass} ${rowClass}`}>
                    <p className="break-words text-[clamp(34px,3.6vw,62px)] font-extrabold leading-[0.96] tracking-[-0.025em] text-[#EDEDED] uppercase">
                      {title}
                    </p>
                    <p className="mt-4 max-w-[30ch] text-[13px] font-semibold uppercase leading-[1.45] tracking-[0.18em] text-[#EDEDED]/74 md:text-[14px]">
                      {description}
                    </p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section id="who-for" className="mx-auto max-w-[1380px] px-6 pb-14 md:px-12 md:pb-16">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <article className="rounded-[24px] border border-[#47d17b]/26 bg-[radial-gradient(circle_at_20%_18%,rgba(71,209,123,0.20),rgba(7,7,7,0)_45%),#070707] p-8 md:p-10">
              <h2 className="text-[33px] font-extrabold leading-[1.02] tracking-[-0.03em] text-[#EDEDED] md:text-[44px]">Кому подойдёт</h2>
              <p className="mt-5 text-[18px] leading-[1.4] text-[#EDEDED]/84">Курс для владельцев и руководителей МСБ, которые:</p>
              <div className="mt-4 grid gap-3">
                {whoFor.map((item) => (
                  <p
                    key={item}
                    className="rounded-[16px] border border-[#47d17b]/22 bg-[linear-gradient(180deg,rgba(71,209,123,0.10),rgba(10,10,10,0.82))] px-5 py-3.5 text-[18px] leading-[1.36] text-[#EDEDED]/90"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </article>

            <article className="rounded-[24px] border border-[#ff4d4d]/35 bg-[radial-gradient(circle_at_60%_0%,rgba(255,77,77,0.26),rgba(7,7,7,0)_44%),#070707] p-8 md:p-10 lg:flex lg:min-h-[420px] lg:items-center lg:justify-center">
              <p className="text-[20px] leading-[1.42] text-[#EDEDED]/88 lg:max-w-[30ch] lg:text-center">
                Не подойдёт, если вы ждёте{" "}
                <PenUnderlineOnView>«волшебную таблетку»</PenUnderlineOnView>{" "}
                без внедрения: курс практический, поэтому нужно выделить время на шаги и решения.
              </p>
            </article>
          </div>
        </section>

        <section className="mx-auto max-w-[1380px] px-6 pb-14 md:px-12 md:pb-16">
          <article className="relative overflow-hidden rounded-[24px] border border-[#e7d2ad]/20 bg-[linear-gradient(180deg,#050505_0%,#06060a_58%,#0c1235_100%)] p-8 md:p-10 lg:p-12">
            <div className="pointer-events-none absolute left-1/2 top-6 h-40 w-[45%] -translate-x-1/2 bg-[radial-gradient(circle,rgba(255,255,255,0.08),rgba(255,255,255,0)_70%)]" />
            <h2 className="mx-auto max-w-[24ch] text-center text-[clamp(36px,5.2vw,78px)] font-extrabold uppercase leading-[1.04] tracking-[-0.03em] text-[#EDEDED]">
              Стратегия — это не документ.
              <br />
              <span className="text-[#EDEDED]/56">Это система управления.</span>
            </h2>
            <p className="mt-5 text-center text-[13px] font-semibold uppercase tracking-[0.18em] text-[#EDEDED]/62">
              каждый месяц она отвечает на три вопроса
            </p>

            <div className="mt-10 grid gap-5 lg:grid-cols-3 lg:gap-6">
              {monthlyQuestions.map((question, index) => (
                <article
                  key={question.id}
                  className={`relative overflow-hidden rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(31,31,39,0.92)_0%,rgba(12,12,14,0.96)_54%,rgba(17,20,43,0.92)_78%,rgba(33,49,189,0.38)_100%)] px-6 pb-4 pt-8 ${
                    index === 1 ? "lg:translate-y-8" : ""
                  }`}
                >
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-[radial-gradient(circle_at_50%_100%,rgba(71,108,255,0.34)_0%,rgba(71,108,255,0.18)_34%,rgba(71,108,255,0.08)_56%,rgba(71,108,255,0)_84%)]" />
                  <p className="relative mx-auto max-w-[20ch] text-center text-[clamp(24px,2.2vw,42px)] font-bold leading-[1.16] tracking-[-0.02em] text-[#EDEDED]">
                    {question.text}
                  </p>
                  <div className="relative mt-6 flex justify-center">
                    <StrategyQuestionVisual id={question.id} />
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-12 text-center text-[18px] font-semibold leading-[1.33] text-[#e7d2ad]">
              Выберите пакет и начните с первого шага уже на этой неделе.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href="#contact"
                className="rounded-[12px] border border-[#e7d2ad]/45 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#EDEDED] transition hover:border-[#e7d2ad]"
              >
                Купить «Базовый» — $…
              </a>
              <a
                href="#contact"
                className="rounded-[12px] border border-[#e7d2ad]/55 bg-[#e7d2ad]/16 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#e7d2ad] transition hover:bg-[#e7d2ad]/24"
              >
                Купить «С поддержкой» — $…
              </a>
              <a
                href="#contact"
                className="rounded-[12px] border border-[#e7d2ad]/65 bg-[#e7d2ad]/20 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#e7d2ad] transition hover:bg-[#e7d2ad]/32"
              >
                Купить «Под ключ» — $…
              </a>
              <a
                href="#free-webinar"
                className="rounded-[12px] border border-[#e7d2ad]/45 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#EDEDED]/92 transition hover:border-[#e7d2ad]"
              >
                Смотреть первый вебинар бесплатно
              </a>
            </div>
          </article>
        </section>

        <section id="result" className="mx-auto max-w-[1380px] px-6 pb-16 md:px-12 md:pb-20">
          <article className="rounded-[24px] border border-[#e7d2ad]/14 bg-[#070707]/88 p-10 md:p-12">
            <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-6">
              <div className="max-w-[780px]">
                <h2 className="text-[40px] font-extrabold leading-[1.02] tracking-[-0.028em] text-[#EDEDED] md:text-[52px] lg:text-[56px]">
                  Что вы получите в итоге
                </h2>
                <p className="mt-3 text-[17px] leading-[1.42] text-[#EDEDED]/64 md:text-[19px]">
                  Практические результаты, которые можно сразу применить в управленческой работе.
                </p>
              </div>
              <a
                href="#tariffs"
                className="inline-flex items-center rounded-[14px] border border-[#e7d2ad]/32 bg-[#e7d2ad]/8 px-5 py-2.5 text-[13px] font-semibold tracking-[0.04em] text-[#e7d2ad] transition hover:border-[#e7d2ad]/55 hover:bg-[#e7d2ad]/16"
              >
                Записаться на курс
              </a>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2 md:gap-5">
              {finalResultItems.map((item) => (
                <article
                  key={item.id}
                  className="group rounded-[20px] border border-[#e7d2ad]/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(231,210,173,0.04))] px-7 py-5 transition hover:border-[#e7d2ad]/28 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(231,210,173,0.08))]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="inline-flex items-center gap-2">
                      <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-full border border-[#e7d2ad]/30 px-2 text-[12px] font-semibold tracking-[0.08em] text-[#e7d2ad]/85">
                        {item.id}
                      </span>
                      <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#EDEDED]/40">Результат</span>
                    </div>
                    <span className="text-[18px] leading-none text-[#e7d2ad]/38 transition group-hover:text-[#e7d2ad]/72">↗</span>
                  </div>
                  <h3 className="mt-4 text-[27px] font-bold leading-[1.08] tracking-[-0.02em] text-[#EDEDED]">{item.title}</h3>
                  <p className="mt-2 text-[16px] leading-[1.45] text-[#EDEDED]/68">{item.description}</p>
                </article>
              ))}
            </div>
          </article>
        </section>

        <section className="mx-auto max-w-[1380px] overflow-x-clip px-6 pb-14 md:px-12 md:pb-16">
          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,46%)_minmax(0,54%)] xl:gap-10">
            <div className="relative w-full min-w-0 max-w-full">
              <div className="relative min-h-[420px] w-full overflow-hidden md:min-h-[560px] lg:min-h-[640px]">
                <Image
                  src="/profile.png"
                  alt="Олег Минтуш"
                  fill
                  className="object-contain object-bottom opacity-95"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,rgba(5,5,5,0)_0%,rgba(5,5,5,0.88)_80%,rgba(5,5,5,1)_100%)] md:h-36 lg:h-44" />
              </div>
            </div>

            <article className="relative w-full min-w-0 max-w-full overflow-hidden rounded-[24px] border border-[#e7d2ad]/16 bg-[radial-gradient(circle_at_86%_0%,rgba(231,210,173,0.12),rgba(8,8,8,0)_40%),linear-gradient(180deg,rgba(9,9,9,0.96),rgba(231,210,173,0.08))] px-8 py-9 md:px-10 md:py-11">
              <div className="pointer-events-none absolute right-8 top-8 h-24 w-24 rounded-full bg-[#e7d2ad]/8 blur-2xl" />
              <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-[#e7d2ad]/80">Эксперт курса</p>
              <h2 className="mt-4 max-w-full break-words text-[44px] font-extrabold leading-[0.94] tracking-[-0.03em] text-[#EDEDED] md:text-[56px] lg:text-[60px]">
                {mentorSummary.name}
              </h2>
              <p className="mt-4 max-w-[30ch] break-words text-[23px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#e7d2ad] md:text-[28px]">
                Управленец и стратег, специализируется на цифровизации и систематизации бизнеса
              </p>
              <p className="mt-5 max-w-[52ch] break-words text-[18px] leading-[1.42] text-[#EDEDED]/78">
                Помогает собственникам и топ-командам превращать стратегию в рабочую управленческую систему.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-2">
                {expertStats.map((item) => (
                  <div
                    key={item.value}
                    className="min-w-0 max-w-full rounded-[14px] border border-[#e7d2ad]/14 bg-[#0a0a0a]/64 px-4 py-3"
                  >
                    <p className="text-[18px] font-bold leading-none tracking-[-0.02em] text-[#EDEDED]">{item.value}</p>
                    <p className="mt-2 break-words text-[12px] font-semibold uppercase leading-[1.35] tracking-[0.06em] text-[#EDEDED]/58">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              <blockquote className="mt-8 max-w-full break-words rounded-[16px] border border-[#e7d2ad]/18 bg-[#0a0a0a]/72 px-5 py-4 text-[16px] leading-[1.45] text-[#EDEDED]/84">
                «Стратегия должна переходить в операционную систему управления, а не оставаться презентацией.»
              </blockquote>
            </article>
          </div>
        </section>

        <section id="program" className="mx-auto max-w-[1380px] px-6 pb-14 md:px-12 md:pb-16">
          <article className="rounded-[24px] bg-[linear-gradient(180deg,rgba(9,9,9,0.92),rgba(7,7,7,0.88))] p-8 md:p-10">
            <div className="max-w-[920px]">
              <h2 className="text-[35px] font-extrabold leading-[1.02] tracking-[-0.03em] text-[#EDEDED] md:text-[48px]">Что внутри</h2>
              <p className="mt-3 text-[17px] leading-[1.45] text-[#EDEDED]/70 md:text-[19px]">
                Все материалы собраны так, чтобы стратегию можно было не только понять, но и внедрить в работу.
              </p>
            </div>

            <div className="mt-8 grid gap-5 lg:grid-cols-2">
              <article className="relative overflow-hidden rounded-[20px] border border-[#e7d2ad]/30 bg-[linear-gradient(180deg,rgba(231,210,173,0.12),rgba(10,10,10,0.92)_30%,rgba(10,10,10,0.98)_100%)] p-7 md:p-8">
                <div className="pointer-events-none absolute right-4 top-4 h-12 w-12 rounded-full bg-[#e7d2ad]/10 blur-xl" />
                <div className="flex items-end gap-3">
                  <p className="text-[60px] font-extrabold leading-none tracking-[-0.04em] text-[#e7d2ad]">4</p>
                  <p className="pb-1 text-[16px] font-semibold uppercase tracking-[0.08em] text-[#e7d2ad]/90 md:text-[18px]">Практических руководства</p>
                </div>
                <div className="mt-5 grid gap-2.5">
                  {guides.map((guide) => (
                    <p key={guide} className="text-[17px] leading-[1.36] text-[#EDEDED]/92">
                      {guide}
                    </p>
                  ))}
                </div>
              </article>

              <article className="relative overflow-hidden rounded-[20px] border border-white/14 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(12,12,12,0.92)_30%,rgba(10,10,10,0.98)_100%)] p-7 md:p-8">
                <div className="pointer-events-none absolute right-4 top-4 h-12 w-12 rounded-full bg-white/8 blur-xl" />
                <div className="flex items-end gap-3">
                  <p className="text-[60px] font-extrabold leading-none tracking-[-0.04em] text-[#EDEDED]">6</p>
                  <p className="pb-1 text-[16px] font-semibold uppercase tracking-[0.08em] text-[#EDEDED]/86 md:text-[18px]">Вебинаров</p>
                </div>
                <div className="mt-5 grid gap-2.5">
                  {webinars.map((webinar) => (
                    <p key={webinar} className="text-[17px] leading-[1.36] text-[#EDEDED]/92">
                      {webinar}
                    </p>
                  ))}
                </div>
              </article>
            </div>

            <div className="mt-7">
              <h3 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#EDEDED]/62">Формат обучения</h3>
              <div className="mt-3 grid gap-3 md:grid-cols-3">
                {formatHighlights.map((item) => (
                  <article key={item.lead} className="rounded-[14px] border border-white/8 bg-white/[0.02] px-4 py-4">
                    <p className="text-[15px] font-semibold leading-[1.28] text-[#EDEDED]">{item.lead}</p>
                    <p className="mt-1.5 text-[13px] leading-[1.35] text-[#EDEDED]/62">{item.support}</p>
                  </article>
                ))}
              </div>
            </div>
          </article>
        </section>

        <section id="tariffs" className="mx-auto max-w-[1380px] px-6 pb-14 md:px-12 md:pb-16">
          <article className="rounded-[24px] border border-[#e7d2ad]/24 bg-[linear-gradient(180deg,rgba(10,10,10,0.94),rgba(7,7,7,0.84))] p-8 md:p-10">
            <h2 className="text-[34px] font-extrabold leading-[1.02] tracking-[-0.03em] text-[#EDEDED] md:text-[48px]">Тарифы</h2>
            <div className="mt-6 grid gap-6 xl:grid-cols-3">
              {tariffCards.map((tariff) => (
                <article
                  key={tariff.id}
                  className={`relative overflow-hidden rounded-[18px] border p-6 transition ${
                    tariff.isFeatured ? "translate-y-[-2px]" : ""
                  }`}
                  style={{
                    background: tariff.cardBackground,
                    borderColor: tariff.cardBorder,
                    boxShadow: tariff.glow,
                  }}
                >
                  {tariff.isFeatured && (
                    <span className="absolute right-4 top-4 rounded-full border border-[#D4B174]/70 bg-[#D4B174]/18 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#D4B174]">
                      Рекомендуем
                    </span>
                  )}
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em]" style={{ color: tariff.titleColor }}>
                    {tariff.title}
                  </p>
                  <p className="mt-2 text-[38px] font-extrabold leading-none tracking-[-0.03em] text-[#EDEDED]">{tariff.price}</p>
                  <p className="mt-3 text-[17px] leading-[1.38] text-[#EDEDED]/86">{tariff.intro}</p>
                  <p className="mt-4 text-[12px] font-semibold uppercase tracking-[0.1em]" style={{ color: tariff.includesColor }}>
                    Включает:
                  </p>
                  <div className="mt-4 grid gap-2.5">
                    {tariff.includes.map((item) => (
                      <p key={item} className="flex items-start gap-2 text-[16px] leading-[1.38] text-[#EDEDED]/90">
                        <span className="mt-[0.5em] h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: tariff.titleColor }} />
                        <span>{item}</span>
                      </p>
                    ))}
                  </div>
                  <a
                    href="#contact"
                    className={`mt-6 inline-flex rounded-[12px] border px-4 py-2.5 text-[13px] font-semibold uppercase tracking-[0.08em] transition ${
                      tariff.buttonFilled ? "hover:brightness-95" : "hover:bg-white/5"
                    }`}
                    style={{
                      background: tariff.buttonBackground,
                      borderColor: tariff.buttonBorder,
                      color: tariff.buttonText,
                    }}
                  >
                    {tariff.button}
                  </a>
                </article>
              ))}
            </div>
          </article>
        </section>

        <section id="free-webinar" className="mx-auto max-w-[1380px] px-6 pb-14 md:px-12 md:pb-16">
          <article className="relative overflow-hidden rounded-[24px] border border-[#e7d2ad]/24 bg-[linear-gradient(108deg,#060606_0%,#070707_52%,#090b16_100%)] p-8 md:p-10 lg:p-12">
            <div className="pointer-events-none absolute right-[-8%] top-[4%] h-[78%] w-[48%] bg-[radial-gradient(circle,rgba(61,88,255,0.28),rgba(61,88,255,0)_68%)]" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,rgba(6,6,6,0)_0%,rgba(6,6,6,0.88)_100%)]" />

            <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div className="max-w-[780px]">
                <div className="flex flex-wrap items-center gap-3">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#e7d2ad]/84">Бесплатный вход</p>
                  <span className="inline-flex items-center rounded-[10px] bg-[#ff2d2d] px-3 py-1 text-[18px] font-extrabold uppercase leading-none tracking-[0.02em] text-white">
                    • LIVE
                  </span>
                </div>
                <h2 className="mt-5 max-w-[18ch] text-[34px] font-extrabold leading-[1.02] tracking-[-0.03em] text-[#EDEDED] md:text-[48px]">
                  Посмотрите первый вебинар бесплатно
                </h2>
                <p className="mt-5 max-w-[60ch] text-[19px] leading-[1.43] text-[#EDEDED]/80">
                  Оставьте контакты — отправим доступ на почту или в Telegram.
                </p>
                <div className="mt-8 rounded-[18px] border border-[#e7d2ad]/22 bg-[linear-gradient(180deg,rgba(12,12,12,0.72),rgba(8,8,8,0.94))] p-5 md:p-6">
                  <LeadForm variant="dark" layout="inline" submitLabel="Получить доступ" className="max-w-none" />
                </div>
              </div>

              <div className="relative min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]">
                <div className="pointer-events-none absolute left-[16%] top-[8%] hidden h-[84%] w-[48%] -skew-x-[14deg] rounded-[26px] bg-[linear-gradient(180deg,rgba(57,87,255,0.72),rgba(10,12,38,0.02))] sm:block" />

                <div className="absolute left-[2%] top-[6%] hidden h-[72%] w-[50%] rounded-[34px] border border-white/16 bg-[#09090d]/92 p-2 shadow-[0_24px_72px_rgba(0,0,0,0.72)] sm:block">
                  <span className="absolute left-1/2 top-2 h-1 w-16 -translate-x-1/2 rounded-full bg-white/25" />
                  <div className="relative h-full overflow-hidden rounded-[28px] border border-white/12">
                    <Image src="/images/live-sessions/1.png" alt="Вебинар в прямом эфире" fill className="object-cover object-center" />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,3,3,0)_56%,rgba(3,3,3,0.95)_100%)]" />
                  </div>
                </div>

                <div className="absolute left-1/2 top-6 h-[80%] w-[74%] -translate-x-1/2 rounded-[34px] border border-white/18 bg-[#09090d]/95 p-2 shadow-[0_30px_85px_rgba(0,0,0,0.78)] sm:left-auto sm:right-0 sm:top-[20%] sm:h-[74%] sm:w-[54%] sm:translate-x-0">
                  <span className="absolute left-1/2 top-2 h-1 w-16 -translate-x-1/2 rounded-full bg-white/28" />
                  <div className="relative h-full overflow-hidden rounded-[28px] border border-white/12">
                    <Image src="/images/live-sessions/2.png" alt="Запись вебинара с ответами на вопросы" fill className="object-cover object-center" />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,3,3,0)_58%,rgba(3,3,3,0.96)_100%)]" />
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>

        <section id="faq" className="mx-auto max-w-[1380px] px-6 pb-14 md:px-12 md:pb-16">
          <article className="rounded-[24px] border border-[#e7d2ad]/24 bg-[#070707]/88 p-8 md:p-10">
            <h2 className="text-[34px] font-extrabold leading-[1.02] tracking-[-0.03em] text-[#EDEDED] md:text-[44px]">FAQ</h2>
            <div className="mt-5 grid gap-3">
              {faqItems.map((item) => (
                <details key={item.question} className="group rounded-[14px] border border-[#e7d2ad]/24 bg-[#0a0a0a]/70 p-5">
                  <summary className="cursor-pointer list-none text-[19px] font-semibold leading-[1.34] text-[#EDEDED]">
                    {item.question}
                  </summary>
                  <p className="mt-3 text-[17px] leading-[1.42] text-[#EDEDED]/86">{item.answer}</p>
                </details>
              ))}
            </div>
          </article>
        </section>

        <div id="alumni-chat">
          <AlumniChatSection />
        </div>

        <footer id="contact" className="border-t border-[#e7d2ad]/20 bg-[#020202] px-6 py-10 md:px-10 md:py-12">
          <div className="mx-auto grid max-w-[1380px] gap-8 md:grid-cols-4">
            <div>
              <p className="mt-3 text-[20px] font-semibold tracking-[-0.02em] text-[#EDEDED]">OLEG MINTUSH</p>
            </div>

            <div>
              <Link href="/legal/privacy" className="mt-3 block text-[15px] text-[#EDEDED]/78 transition hover:text-[#EDEDED]">
                политика конфиденциальности
              </Link>
            </div>

            <div>
              <p className="text-[11px] font-semibold tracking-[0.12em] text-[#e7d2ad]/78">соц сети</p>
              <a
                href={contactConfig.telegramUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-3 block text-[15px] text-[#EDEDED]/78 transition hover:text-[#EDEDED]"
              >
                Telegram
              </a>
            </div>

            <div>
              <p className="text-[11px] font-semibold tracking-[0.12em] text-[#e7d2ad]/78">как с нами связаться</p>
              <a href={`mailto:${contactConfig.email}`} className="mt-3 block text-[15px] text-[#EDEDED]/78 transition hover:text-[#EDEDED]">
                {contactConfig.email}
              </a>
            </div>
          </div>

          <p className="mx-auto mt-8 max-w-[1380px] border-t border-[#e7d2ad]/20 pt-5 text-[12px] font-semibold uppercase tracking-[0.1em] text-[#EDEDED]/38">
            copywrite 2023-2026 MINTUSH ©
          </p>
        </footer>
          </div>
        </div>

      </section>
    </main>
  )
}
