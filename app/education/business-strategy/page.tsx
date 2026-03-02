import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { LeadForm } from "@/components/lead-form"
import { mentorSummary } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Курс: Стратегия бизнеса",
  description: "Понятный курс по созданию и внедрению стратегии бизнеса без воды и бесконечных планерок.",
}

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
    items: ["4 практических руководства", "6 вебинаров", "шаблон стратегии", "индивидуальная консультация с экспертом курса 30 минут"],
    button: "Купить пакет «С поддержкой»",
  },
  {
    title: "СТРАТЕГИЯ ПОД КЛЮЧ",
    price: "$...",
    audience: "Для тех, кому нужен быстрый результат и готовая стратегия",
    items: ["4 практических руководства", "6 вебинаров", "шаблон стратегии", "индивидуальная консультация с экспертом", "помощь эксперта в создании стратегии вашего бизнеса"],
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
    <>
      <SiteHeader ctaHref="#form" ctaLabel="Купить" />
      <main>
        <section className="relative min-h-[72vh] flex flex-col justify-end overflow-hidden bg-foreground text-primary-foreground">
          <div className="absolute inset-0">
            <Image src="/images/course-strategy.jpg" alt="Стратегия бизнеса" fill className="object-cover opacity-30" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/80 to-transparent" />
          </div>
          <div className="relative z-10 px-6 md:px-10 lg:px-16 pt-32 pb-16">
            <div className="max-w-5xl">
              <p className="text-caption text-primary-foreground/45 mb-6">/education/business-strategy</p>
              <div className="flex flex-wrap gap-3 mb-6">
                <Link href="/education" className="border border-primary-foreground/30 px-4 py-2 text-small hover:bg-primary-foreground/10 transition-colors">Курсы</Link>
                <Link href="/" className="border border-primary-foreground/30 px-4 py-2 text-small hover:bg-primary-foreground/10 transition-colors">Главная страница</Link>
              </div>
              <h1 className="text-display font-serif text-primary-foreground mb-4">Стратегия бизнеса</h1>
              <p className="text-h3 text-primary-foreground/75 max-w-4xl">
                Понятный курс, который поможет владельцу Малого или Среднего бизнеса собрать стратегию на год и внедрить её в операционку. Без «воды» и бесконечных планерок.
              </p>
              <p className="text-body-lg text-primary-foreground/70 mt-4 max-w-3xl">
                Этот курс про стратегию, которая работает в реальности: не лежит в папке, а становится частью управления.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-10 lg:px-16 py-20 md:py-24">
          <div className="max-w-6xl grid lg:grid-cols-2 gap-10">
            <div>
              <p className="text-caption text-muted-foreground mb-6">Эксперт курса</p>
              <h2 className="text-h2 font-serif text-foreground mb-4">{mentorSummary.name}, {mentorSummary.role}</h2>
              <div className="grid gap-2 mb-6">
                {mentorSummary.bullets.map((item) => (
                  <p key={item} className="text-body-lg text-foreground/75">- {item}</p>
                ))}
              </div>
              <a href="#form" className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground text-small hover:bg-[var(--accent-hover)] transition-colors">
                Купить
              </a>
            </div>
            <div className="border border-border bg-card p-6 md:p-8">
              <p className="text-caption text-muted-foreground mb-4">В результате вы получите</p>
              <div className="grid gap-3">
                {outcomes.map((item) => (
                  <p key={item} className="text-body-lg text-foreground/75">- {item}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-10 lg:px-16 py-20 md:py-24 bg-card">
          <div className="max-w-6xl grid lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-h1 font-serif text-foreground mb-6">Кому подойдёт</h2>
              <div className="grid gap-3">
                {whoFor.map((item) => (
                  <p key={item} className="text-body-lg text-foreground/75">- {item}</p>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-h2 font-serif text-foreground mb-4">Что внутри</h3>
              <p className="text-caption text-muted-foreground mb-3">4 практических руководства</p>
              <div className="grid gap-2 mb-6">
                {guides.map((item) => (
                  <p key={item} className="text-small text-foreground/75">- {item}</p>
                ))}
              </div>
              <p className="text-caption text-muted-foreground mb-3">6 вебинаров</p>
              <div className="grid gap-2">
                {webinars.map((item) => (
                  <p key={item} className="text-small text-foreground/75">- {item}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-10 lg:px-16 py-20 md:py-24">
          <div className="max-w-5xl">
            <h2 className="text-h2 font-serif text-foreground mb-6">Формат</h2>
            <div className="grid gap-3">
              <p className="text-body-lg text-foreground/75">У вас остаются записи вебинаров — можно проходить в удобном темпе.</p>
              <p className="text-body-lg text-foreground/75">Руководства — как чек-лист: прочитал, сделал, получил результат.</p>
              <p className="text-body-lg text-foreground/75">На расширенных пакетах — работа с экспертом точечно, без «консалтинга на месяцы».</p>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-10 lg:px-16 py-20 md:py-24 bg-foreground text-primary-foreground">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-h1 font-serif text-primary-foreground mb-10">Тарифы</h2>
            <div className="grid lg:grid-cols-3 gap-6">
              {tariffs.map((tariff) => (
                <article key={tariff.title} className="border border-primary-foreground/20 p-6 bg-foreground/40 flex flex-col gap-4">
                  <h3 className="text-h3 font-serif text-primary-foreground">{tariff.title}</h3>
                  <p className="text-h3 text-accent">{tariff.price}</p>
                  <p className="text-small text-primary-foreground/70">{tariff.audience}</p>
                  <div className="grid gap-2">
                    {tariff.items.map((item) => (
                      <p key={item} className="text-small text-primary-foreground/70">- {item}</p>
                    ))}
                  </div>
                  <a href="#form" className="inline-flex mt-2 items-center justify-center px-5 py-3 bg-accent text-accent-foreground text-small hover:bg-[var(--accent-hover)] transition-colors">
                    {tariff.button}
                  </a>
                </article>
              ))}
            </div>
            <div className="border border-primary-foreground/20 p-6 mt-8">
              <h3 className="text-h3 font-serif text-primary-foreground mb-2">Бесплатный вход</h3>
              <p className="text-body-lg text-primary-foreground/75">Смотреть первый вебинар бесплатно.</p>
              <p className="text-small text-primary-foreground/60">Форма: «Оставьте имя / email / телеграм — пришлём доступ».</p>
              <a href="#form" className="inline-flex mt-4 items-center justify-center px-5 py-3 border border-primary-foreground/35 text-primary-foreground text-small hover:bg-primary-foreground/10 transition-colors">
                Смотреть первый вебинар бесплатно
              </a>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-10 lg:px-16 py-20 md:py-24 bg-card">
          <div className="max-w-5xl">
            <h2 className="text-h1 font-serif text-foreground mb-8">Частые вопросы (FAQ)</h2>
            <div className="grid gap-4">
              {faq.map((item) => (
                <article key={item.q} className="border border-border bg-background p-5">
                  <h3 className="text-body-lg text-foreground mb-2">{item.q}</h3>
                  <p className="text-small text-foreground/75">{item.a}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 md:px-10 lg:px-16 py-20 md:py-24">
          <div className="max-w-5xl">
            <h2 className="text-h2 font-serif text-foreground mb-6">Стратегия это не документ, а система управления</h2>
            <p className="text-body-lg text-foreground/75 mb-4">Каждый месяц система отвечает на три вопроса:</p>
            <div className="grid gap-2 mb-8">
              {strategyQuestions.map((item) => (
                <p key={item} className="text-body-lg text-foreground/75">- {item}</p>
              ))}
            </div>
            <p className="text-body-lg text-foreground/75">Выберите пакет и начните с первого шага уже на этой неделе.</p>
          </div>
        </section>

        <section id="form" className="px-6 md:px-10 lg:px-16 py-20 md:py-24 bg-foreground text-primary-foreground">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h1 font-serif text-primary-foreground mb-6">Оставить заявку</h2>
            <p className="text-body-lg text-primary-foreground/65 mb-8">
              В форме можно выбрать любой сценарий: купить «Базовый», «С поддержкой», «Под ключ» или получить первый вебинар бесплатно.
            </p>
            <LeadForm variant="dark" submitLabel="Отправить и перейти к оплате" />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
