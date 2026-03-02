import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { LeadForm } from "@/components/lead-form"
import { mentorSummary } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Курс: Управление бизнесом",
  description: "Курс по построению работающей бизнес-системы за 4 шага без ручного вмешательства собственника.",
}

const changes = [
  "вы начнете видеть ключевые цифры бизнеса",
  "решения будут приниматься быстрее и в правильной момент",
  "появится ритм управления командой и компанией",
  "операционка будет работать через систему, а не через ваше участие",
  "управляющий выйдет из микро-менеджмента и займется развитием бизнеса",
]

const whoFor = [
  "меньше ручного управления и больше само-управляемости",
  "рост компании без хаоса и перегруза",
  "управление через правила и метрики вместо интуитивных решений",
]

const courseInside = [
  "С чего начинается управление бизнесом: бизнес-система и зоны ответственности",
  "Модель управления компанией: роли, метрики, цикл управления",
  "Управленец и операционка: процессы, владельцы результата, контроль исполнения",
  "Стратегическое управление: приоритеты, инициативы, ресурсы, регулярная сверка курса",
]

const tariffs = [
  {
    title: "БАЗОВЫЙ",
    price: "$...",
    audience: "Для самостоятельной работы",
    items: ["4 практических руководства", "4 вебинара"],
    button: "Купить пакет «Базовый»",
  },
  {
    title: "С ПОДДЕРЖКОЙ",
    price: "$...",
    audience: "Для тех, кому важно свериться с экспертом и не застрять",
    items: ["4 практических руководства", "4 вебинара", "шаблон .... (будет потом дописано)", "индивидуальная консультация с экспертом курса 30 минут"],
    button: "Купить пакет «С поддержкой»",
  },
  {
    title: "СТРАТЕГИЯ ПОД КЛЮЧ",
    price: "$...",
    audience: "Для тех, кому нужен быстрый результат и готовая стратегия",
    items: ["4 практических руководства", "4 вебинара", "шаблон .... (будет потом дописано)", "индивидуальная консультация с экспертом", "помощь эксперта в создании бизнес-системы вашего бизнеса"],
    button: "Купить пакет «Под ключ»",
  },
]

const strategyQuestions = [
  "мы всё ещё идём туда, куда выбрали",
  "мы видим прогресс в ключевых метриках",
  "мы принимаем решения и корректируем планы под изменения рынка",
]

const systemBase = [
  "отлаженные процессы",
  "сбалансированная команда",
  "отслеживаемые показали",
  "понятные задачи",
]

export default function BusinessManagementPage() {
  return (
    <>
      <SiteHeader ctaHref="#form" ctaLabel="Купить" />
      <main>
        <section className="relative min-h-[72vh] flex flex-col justify-end overflow-hidden bg-foreground text-primary-foreground">
          <div className="absolute inset-0">
            <Image src="/images/course-management.jpg" alt="Управление бизнесом" fill className="object-cover opacity-30" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/80 to-transparent" />
          </div>
          <div className="relative z-10 px-6 md:px-10 lg:px-16 pt-32 pb-16">
            <div className="max-w-5xl">
              <p className="text-caption text-primary-foreground/45 mb-6">/education/business-management</p>
              <div className="flex flex-wrap gap-3 mb-6">
                <Link href="/education" className="border border-primary-foreground/30 px-4 py-2 text-small hover:bg-primary-foreground/10 transition-colors">Курсы</Link>
                <Link href="/" className="border border-primary-foreground/30 px-4 py-2 text-small hover:bg-primary-foreground/10 transition-colors">Главная страница</Link>
              </div>
              <h1 className="text-display font-serif text-primary-foreground mb-4">Управление бизнесом</h1>
              <p className="text-h3 text-primary-foreground/75 max-w-4xl">
                Работающие подходы, которые помогут владельцу Малого или Среднего бизнеса начать управлять компанией без ручного вмешательства.
              </p>
              <p className="text-body-lg text-primary-foreground/70 mt-4 max-w-3xl">
                Работающая бизнес-система за 4 шага.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-10 lg:px-16 py-20 md:py-24">
          <div className="max-w-6xl grid lg:grid-cols-2 gap-10">
            <div>
              <p className="text-body-lg text-foreground/75 mb-8">
                Если бизнес держится на вас, а операционка постоянно требует внимания, компании не хватает управленческого каркаса. Этот курс поможет выстроить управление так, чтобы бизнес работал предсказуемо: по цифрам, срокам и качеству.
              </p>
              <p className="text-caption text-muted-foreground mb-4">Эксперт курса</p>
              <h2 className="text-h2 font-serif text-foreground mb-4">{mentorSummary.name}, {mentorSummary.role}</h2>
              <div className="grid gap-2">
                {mentorSummary.bullets.map((item) => (
                  <p key={item} className="text-body-lg text-foreground/75">- {item}</p>
                ))}
              </div>
            </div>

            <div className="border border-border bg-card p-6 md:p-8">
              <p className="text-caption text-muted-foreground mb-4">Что изменится после курса</p>
              <div className="grid gap-3">
                {changes.map((item) => (
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
              <p className="text-body-lg text-foreground/75 mb-4">Курс для владельцам и руководителям малого и среднего бизнеса, которые хотят:</p>
              <div className="grid gap-3">
                {whoFor.map((item) => (
                  <p key={item} className="text-body-lg text-foreground/75">- {item}</p>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-h2 font-serif text-foreground mb-4">Внутри курса</h3>
              <p className="text-caption text-muted-foreground mb-3">4 практических руководства и 4 вебинара</p>
              <div className="grid gap-2">
                {courseInside.map((item) => (
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
              <p className="text-small text-primary-foreground/60">Форма: «Оставьте email/телеграм — пришлём доступ».</p>
              <a href="#form" className="inline-flex mt-4 items-center justify-center px-5 py-3 border border-primary-foreground/35 text-primary-foreground text-small hover:bg-primary-foreground/10 transition-colors">
                Смотреть первый вебинар бесплатно
              </a>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-10 lg:px-16 py-20 md:py-24 bg-card">
          <div className="max-w-5xl">
            <h2 className="text-h1 font-serif text-foreground mb-6">Частые вопросы (FAQ)</h2>
            <p className="text-body-lg text-foreground/75">Раздел будет дописан позже: 4 вопроса и 4 ответа по аналогии со страницей «Стратегия бизнеса».</p>
          </div>
        </section>

        <section className="px-6 md:px-10 lg:px-16 py-20 md:py-24">
          <div className="max-w-5xl grid gap-8">
            <div>
              <h2 className="text-h2 font-serif text-foreground mb-4">Стратегия это не документ, а система управления</h2>
              <p className="text-body-lg text-foreground/75 mb-2">Каждый месяц система отвечает на три вопроса:</p>
              <div className="grid gap-2">
                {strategyQuestions.map((item) => (
                  <p key={item} className="text-body-lg text-foreground/75">- {item}</p>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-h2 font-serif text-foreground mb-4">Бизнес-система это не бюрократия</h2>
              <p className="text-body-lg text-foreground/75 mb-2">Это механизм достижения целей, его база:</p>
              <div className="grid gap-2">
                {systemBase.map((item) => (
                  <p key={item} className="text-body-lg text-foreground/75">- {item}</p>
                ))}
              </div>
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
