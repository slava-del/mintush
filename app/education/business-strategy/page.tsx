import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import { LeadForm } from "@/components/lead-form"
import { contactConfig, mentorSummary } from "@/lib/site-config"

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "Курс: Стратегия бизнеса",
  description: "Понятный курс по созданию и внедрению стратегии бизнеса без воды и бесконечных планерок.",
}

const trackTopics = [
  "Бизнес-модель",
  "Стратегия",
  "Инициативы",
  "KPI",
  "Внедрение",
  "Ритм управления",
]

const outcomes = [
  "ясную картину «где мы сейчас» и «куда идём»",
  "стратегию на несколько страниц: цели, фокус, метрики, ключевые инициативы",
  "понятный механизм внедрения: роли, ответственность, управленческий ритм",
  "систему регулярной работы со стратегией, чтобы не терять фокус",
]

const whoFor = [
  "принимают большинство решений и устали «тащить» бизнес на себе",
  "хотят расти без хаоса, авралов и выгорания команды",
  "уже пытались делать стратегию, но она почему-то не сработала",
  "хотят управлять через цели и результаты, а не через постоянное присутствие",
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

const tariffs = [
  {
    title: "БАЗОВЫЙ",
    price: "$...",
    audience: "Для самостоятельной работы",
    items: ["4 практических руководства", "6 вебинаров"],
    button: "Купить пакет «Базовый»",
  },
  {
    title: "С ПОДДЕРЖКОЙ",
    price: "$...",
    audience: "Для тех, кому важно свериться с экспертом и не застрять",
    items: [
      "4 практических руководства",
      "6 вебинаров",
      "шаблон стратегии",
      "индивидуальная консультация с экспертом курса 30 минут",
    ],
    button: "Купить пакет «С поддержкой»",
  },
  {
    title: "СТРАТЕГИЯ ПОД КЛЮЧ",
    price: "$...",
    audience: "Для тех, кому нужен быстрый результат и готовая стратегия",
    items: [
      "4 практических руководства",
      "6 вебинаров",
      "шаблон стратегии",
      "индивидуальная консультация с экспертом",
      "помощь эксперта в создании стратегии вашего бизнеса",
    ],
    button: "Купить пакет «Под ключ»",
  },
]

const faq = [
  {
    q: "Это подойдёт, если у меня совсем небольшой бизнес?",
    a: "Да. Как раз в МСБ стратегия особенно нужна, потому что ресурсы ограничены, а ошибки стоят дорого.",
  },
  {
    q: "Сколько времени займёт?",
    a: "Можно пройти быстро (за 4 дня), можно в своем темпе. Руководства построены так, чтобы делать шаг за шагом и не перегружать график.",
  },
  {
    q: "Если у меня уже есть стратегия/планы, есть смысл брать курс?",
    a: "Есть, если внедрение буксует. Курс про реализацию стратегии: приоритеты, ответственность, ритм, план/факт и корректировки.",
  },
  {
    q: "Что будет результатом после курса?",
    a: "Короткая стратегия на год + набор инициатив и метрик + система регулярной работы со стратегией. В тарифе «Под ключ» есть разбор с экспертом.",
  },
]

const strategyQuestions = [
  "мы всё ещё идём туда, куда выбрали",
  "мы видим прогресс в ключевых метриках",
  "мы принимаем решения и корректируем планы под изменения рынка",
]

export default function BusinessStrategyPage() {
  return (
    <main
      className={`${manrope.className} min-h-screen bg-[radial-gradient(circle_at_50%_-20%,rgba(231,210,173,0.22),rgba(11,11,11,0)_40%),#0b0b0b] p-3 sm:p-4 md:p-6`}
    >
      <section className="relative w-full">
        <div className="h-[calc(100vh-1.5rem)] sm:h-[calc(100vh-2rem)] md:h-[calc(100vh-3rem)] overflow-x-hidden overflow-y-auto rounded-[28px] border border-[#e7d2ad]/45 bg-[#050505] shadow-[0_40px_140px_rgba(0,0,0,0.65)]">
          <div className="sticky top-0 z-30 overflow-hidden border-b border-black/15 bg-[#e7d2ad] text-black">
            <div className="flex w-max items-center">
              {[...trackTopics, ...trackTopics].map((topic, index) => (
                <span
                  key={`${topic}-${index}`}
                  className="border-r border-black/15 px-8 py-3 text-[12px] font-semibold uppercase tracking-[0.08em] last:border-r-0"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>

          <section className="relative min-h-[calc(100vh-3.5rem)] overflow-hidden px-6 pb-14 pt-12 md:px-10 md:pb-16 md:pt-14">
            <div className="absolute inset-0">
              <Image src="/images/course-strategy.jpg" alt="Стратегия бизнеса" fill priority className="object-cover opacity-24" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_24%,rgba(231,210,173,0.28)_0%,rgba(5,5,5,0.6)_40%,#050505_100%)]" />
            </div>

            <div className="relative z-10 mx-auto max-w-6xl">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/45">/education/business-strategy</p>
                <div className="flex flex-wrap gap-2">
                  <Link
                    href="/education"
                    className="rounded-[999px] border border-white/22 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-white/75 transition hover:border-white/45 hover:text-white"
                  >
                    Курсы
                  </Link>
                  <Link
                    href="/"
                    className="rounded-[999px] border border-white/22 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-white/75 transition hover:border-white/45 hover:text-white"
                  >
                    Главная
                  </Link>
                </div>
              </div>

              <h1 className="mt-10 text-[clamp(52px,10vw,162px)] font-extrabold leading-[0.84] tracking-[-0.05em] text-white">
                стратегия
                <br />
                бизнеса
              </h1>

              <p className="mt-6 max-w-4xl text-[20px] leading-[1.3] text-white/74 md:text-[28px]">
                Понятный курс, который поможет владельцу Малого или Среднего бизнеса собрать стратегию на год и внедрить
                её в операционку. Без «воды» и бесконечных планерок.
              </p>
              <p className="mt-4 max-w-3xl text-[17px] leading-[1.35] text-white/66 md:text-[21px]">
                Этот курс про стратегию, которая работает в реальности: не лежит в папке, а становится частью управления.
              </p>

              <a
                href="#form"
                className="mt-8 inline-flex items-center gap-3 rounded-[16px] bg-[#e7d2ad] px-5 py-3 text-[14px] font-semibold text-black transition hover:translate-y-[-1px]"
              >
                Купить курс
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
              </a>
            </div>
          </section>

          <section className="mx-4 mb-6 rounded-[24px] border border-white/10 bg-[#070707] p-6 md:mx-10 md:p-9">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#e7d2ad]">Эксперт курса</p>
                <h2 className="mt-3 text-[34px] font-extrabold leading-[0.98] tracking-[-0.03em] text-white md:text-[48px]">
                  {mentorSummary.name}
                </h2>
                <p className="mt-2 text-[16px] font-semibold uppercase tracking-[0.08em] text-white/66">{mentorSummary.role}</p>
                <div className="mt-5 grid gap-2">
                  {mentorSummary.bullets.map((item) => (
                    <p key={item} className="text-[16px] leading-[1.35] text-white/72">
                      {item}
                    </p>
                  ))}
                </div>
              </div>

              <div className="rounded-[18px] border border-[#e7d2ad]/30 bg-[#0e0e0e] p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#e7d2ad]">В результате вы получите</p>
                <div className="mt-4 grid gap-3">
                  {outcomes.map((item) => (
                    <p key={item} className="text-[16px] leading-[1.35] text-white/74">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="mx-4 mb-6 rounded-[24px] border border-white/10 bg-[#030303] p-6 md:mx-10 md:p-9">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h3 className="text-[32px] font-extrabold leading-[1.02] tracking-[-0.03em] text-white md:text-[44px]">
                  Кому подойдёт
                </h3>
                <div className="mt-4 grid gap-2">
                  {whoFor.map((item) => (
                    <p key={item} className="text-[16px] leading-[1.35] text-white/74">
                      {item}
                    </p>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#e7d2ad]">4 практических руководства</p>
                <div className="mt-3 grid gap-2">
                  {guides.map((item) => (
                    <p key={item} className="text-[15px] leading-[1.32] text-white/72">
                      {item}
                    </p>
                  ))}
                </div>

                <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#e7d2ad]">6 вебинаров</p>
                <div className="mt-3 grid gap-2">
                  {webinars.map((item) => (
                    <p key={item} className="text-[15px] leading-[1.32] text-white/72">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="tariffs" className="mx-4 mb-6 rounded-[24px] border border-white/10 bg-[#070707] p-6 md:mx-10 md:p-9">
            <h3 className="text-[34px] font-extrabold leading-[1.03] tracking-[-0.03em] text-white md:text-[48px]">Тарифы</h3>
            <div className="mt-6 grid gap-4 xl:grid-cols-3">
              {tariffs.map((tariff) => (
                <article key={tariff.title} className="rounded-[18px] border border-white/12 bg-[#0b0b0b] p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#e7d2ad]">{tariff.title}</p>
                  <p className="mt-2 text-[36px] font-extrabold leading-none tracking-[-0.03em] text-white">{tariff.price}</p>
                  <p className="mt-3 text-[14px] leading-[1.3] text-white/65">{tariff.audience}</p>
                  <div className="mt-4 grid gap-2">
                    {tariff.items.map((item) => (
                      <p key={item} className="text-[14px] leading-[1.3] text-white/72">
                        {item}
                      </p>
                    ))}
                  </div>
                  <a
                    href="#form"
                    className="mt-5 inline-flex rounded-[12px] border border-[#e7d2ad]/45 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#e7d2ad] transition hover:bg-[#e7d2ad] hover:text-black"
                  >
                    {tariff.button}
                  </a>
                </article>
              ))}
            </div>
          </section>

          <section className="mx-4 mb-6 rounded-[24px] border border-white/10 bg-[#030303] p-6 md:mx-10 md:p-9">
            <h3 className="text-[32px] font-extrabold leading-[1.02] tracking-[-0.03em] text-white md:text-[44px]">
              Частые вопросы
            </h3>
            <div className="mt-5 grid gap-3">
              {faq.map((item) => (
                <article key={item.q} className="rounded-[14px] border border-white/10 bg-black/35 p-4">
                  <h4 className="text-[17px] font-semibold leading-[1.3] text-white">{item.q}</h4>
                  <p className="mt-2 text-[14px] leading-[1.34] text-white/68">{item.a}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mx-4 mb-6 rounded-[24px] border border-white/10 bg-[#070707] p-6 md:mx-10 md:p-9">
            <h3 className="text-[30px] font-extrabold leading-[1.03] tracking-[-0.03em] text-white md:text-[42px]">
              Стратегия это не документ, а система управления
            </h3>
            <p className="mt-4 text-[16px] leading-[1.33] text-white/72">Каждый месяц система отвечает на три вопроса:</p>
            <div className="mt-3 grid gap-2">
              {strategyQuestions.map((item) => (
                <p key={item} className="text-[16px] leading-[1.33] text-[#e7d2ad]">
                  {item}
                </p>
              ))}
            </div>
          </section>

          <section id="form" className="mx-4 mb-8 rounded-[24px] border border-[#e7d2ad]/35 bg-[#0b0b0b] p-6 md:mx-10 md:p-9">
            <h3 className="text-[34px] font-extrabold leading-[1.02] tracking-[-0.03em] text-white md:text-[46px]">Оставить заявку</h3>
            <p className="mt-4 max-w-3xl text-[16px] leading-[1.35] text-white/68">
              В форме можно выбрать любой сценарий: купить «Базовый», «С поддержкой» или «Под ключ».
            </p>
            <div className="mt-6">
              <LeadForm variant="dark" submitLabel="Отправить и перейти к оплате" />
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
              <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-white/34">copywrite 2023-2026 MINTUSH ©</p>
            </div>
          </footer>
        </div>
      </section>
    </main>
  )
}
