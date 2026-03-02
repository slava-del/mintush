import Link from "next/link"
import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { LeadForm } from "@/components/lead-form"
import { trustedCompanies } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Совет управленцев — Международное сообщество",
  description: "Закрытый клуб руководителей: регулярные встречи, разборы задач, стратегические сессии и обмен опытом.",
}

const results = [
  "40 проведенных мероприятий",
  "27 решенных бизнес-задач",
  "9 разобранных проблемных кейсов",
  "6 проведенных бизнес-экскурсий",
  "2 участников запустили свои стартапы",
]

const values = [
  "Равенство БЕЗ иерархии и статуса",
  "Обсуждения БЕЗ формальных лекций",
  "Обмен опытом БЕЗ продажи услуг",
  "Поддержку БЕЗ ожидания «потом»",
]

const formats = [
  {
    title: "Бизнес-запросы и обмен мнениями",
    items: [
      "Мы регулярно делимся в чате проблемами, с которыми столкнулись и получаем дельные советы.",
      "Когда нужно найти подрядчика или эксперта в узкой области, мы находим их через наш чат.",
      "Если появляется идея или сомнения по рабочему вопросы, мы приходим спросить мнения в чат.",
      "Постоянно делимся личными и общественными новостями, обсуждаем тренды и события.",
    ],
  },
  {
    title: "Еженедельные онлайн встречи",
    items: [
      "Мы выбираем тему месяца и четыре недели разбираемся в ней, приглашаем опытных экспертов.",
      "Наши участники проводят экскурсии по своим компаниям, показывая как все устроено изнутри.",
      "Регулярно собираемся, чтобы решить конкретную бизнес-задачу одного из наших участников.",
      "Когда появляются новые тренды или инструменты на рынке, мы собираемся, чтобы разобраться.",
    ],
  },
  {
    title: "Квартальные стратегические сессии",
    items: [
      "Раз в год каждый участник формулируем личные и бизнес цели, затем декларирует их перед всеми.",
      "Каждый квартал мы собираемся, чтобы сверить полученный результат с заявленным планом.",
      "Мы вместе стараемся помочь там, где не получилось и вместе радуемся, где результат достигнут.",
      "Проводим обязательные интенсивы, как создать реалистичные стратегии и воплощать их в жизнь.",
    ],
  },
]

const businessFunctions = [
  "Стратегия - создание и выполнение",
  "Платежи - традиционные и альтернативные",
  "Инновации - не упускать возможности",
  "Проекты - результат без жестких мер",
  "Маркетинг - для B2C и B2B сегментов",
  "Интеллектуализация - использование ИИ",
  "Продажи - настроить B2С и B2B поток",
  "HR - найм это далеко не все функции",
  "Процессы - упрощать и ускорять",
  "Изменения - внедрять без отторжения",
  "Финансы - легкий учет и планирование",
]

const invitationCriteria = [
  "ваш опыт руководителя от 1 года",
  "в вашей команде от 7 сотрудников",
  "вы открыты к обмену опытом",
]

const memberBenefits = [
  "закрытый чат руководителей",
  "четыре встречи участников в месяц",
  "накопленную базу полезных материалов",
  "погружение в бизнес-функции компаний",
  "разборы индивидуальных бизнес-задач",
  "онлайн экскурсии по реальным компаниям",
  "коллективный опыт и дружескую атмосферу",
]

const participantGroups = [
  "Владельцы малого и среднего бизнеса",
  "Управляющие средним бизнесом",
  "Руководители среднего и крупного бизнеса",
]

const joinSteps = [
  {
    title: "Подать заявку",
    text: "мы рассмотрим заявку в течении недели",
  },
  {
    title: "Пройти интервью",
    text: "так мы лучше узнаем друг друга",
  },
  {
    title: "Подписать договор",
    text: "фиксируем наши договоренности",
  },
]

export default function BoardPage() {
  return (
    <>
      <SiteHeader ctaHref="#form" ctaLabel="Вступить" />
      <main>
        <section className="px-6 md:px-10 lg:px-16 pt-32 pb-16 bg-foreground text-primary-foreground">
          <div className="max-w-5xl">
            <p className="text-caption text-primary-foreground/45 mb-6">Клуб · /board</p>
            <h1 className="text-display font-serif text-primary-foreground mb-6 text-balance">Совет Управленцев</h1>
            <p className="text-h3 text-primary-foreground/75 max-w-3xl">
              Международное онлайн сообщество. Мы развиваем управленческую культуру, растем вместе как руководители и решаем реальные бизнес-задачи.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <a href="#formats" className="border border-primary-foreground/30 px-4 py-2 text-small hover:bg-primary-foreground/10 transition-colors">3 экран</a>
              <a href="#join" className="border border-primary-foreground/30 px-4 py-2 text-small hover:bg-primary-foreground/10 transition-colors">5 экран</a>
              <Link href="/" className="border border-primary-foreground/30 px-4 py-2 text-small hover:bg-primary-foreground/10 transition-colors">Главная</Link>
              <a href="#form" className="bg-accent text-accent-foreground px-4 py-2 text-small hover:bg-[var(--accent-hover)] transition-colors">Вступить</a>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-10 lg:px-16 py-20 md:py-24">
          <div className="max-w-6xl grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-caption text-muted-foreground mb-6">2 экран</p>
              <h2 className="text-h1 font-serif text-foreground mb-8">Результаты прошлого года</h2>
              <div className="grid gap-3">
                {results.map((item) => (
                  <p key={item} className="text-body-lg text-foreground/75">- {item}</p>
                ))}
              </div>
            </div>
            <div className="border border-border p-6 md:p-8 bg-card">
              <p className="text-caption text-muted-foreground mb-4">Мы поддерживаем</p>
              <div className="grid gap-3">
                {values.map((item) => (
                  <p key={item} className="text-body-lg text-foreground/80">{item}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="formats" className="px-6 md:px-10 lg:px-16 py-20 md:py-24 bg-card">
          <div className="max-w-6xl">
            <p className="text-caption text-muted-foreground mb-6">3 экран</p>
            <h2 className="text-h1 font-serif text-foreground mb-12">Форматы взаимодействия</h2>
            <div className="grid gap-8 md:gap-10">
              {formats.map((format) => (
                <article key={format.title} className="border border-border bg-background p-6 md:p-8">
                  <h3 className="text-h3 font-serif text-foreground mb-5">{format.title}</h3>
                  <div className="grid gap-3">
                    {format.items.map((item) => (
                      <p key={item} className="text-body-lg text-foreground/75">{item}</p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 md:px-10 lg:px-16 py-20 md:py-24 bg-foreground text-primary-foreground">
          <div className="max-w-6xl">
            <p className="text-caption text-primary-foreground/45 mb-6">4 экран</p>
            <h2 className="text-h2 font-serif text-primary-foreground mb-6 text-balance">
              В прошлом году мы детально разобрались, как должны работать бизнес-функции
            </h2>
            <p className="text-body-lg text-primary-foreground/70 mb-8">
              Собрали лучший опыт и практики с рынка.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {businessFunctions.map((item) => (
                <div key={item} className="border border-primary-foreground/20 p-4 text-small text-primary-foreground/75">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="join" className="px-6 md:px-10 lg:px-16 py-20 md:py-24">
          <div className="max-w-6xl grid lg:grid-cols-2 gap-10">
            <div>
              <p className="text-caption text-muted-foreground mb-6">5 экран</p>
              <h2 className="text-h1 font-serif text-foreground mb-6">Приглашаем к нам, если</h2>
              <div className="grid gap-3 mb-8">
                {invitationCriteria.map((item) => (
                  <p key={item} className="text-body-lg text-foreground/75">- {item}</p>
                ))}
              </div>
              <p className="text-body-lg text-accent">$... в месяц (оплата минимум 6 месяцев)</p>
            </div>
            <div className="border border-border p-6 md:p-8 bg-card">
              <p className="text-caption text-muted-foreground mb-4">Вы получаете</p>
              <div className="grid gap-2 mb-4">
                {memberBenefits.map((item) => (
                  <p key={item} className="text-small text-foreground/75">- {item}</p>
                ))}
              </div>
              <p className="text-body-lg text-foreground/75">Мы вместе растем как управленцы и решаем задачи своего бизнеса.</p>
              <a href="#form" className="inline-flex mt-6 items-center justify-center px-6 py-3 bg-accent text-accent-foreground text-small hover:bg-[var(--accent-hover)] transition-colors">
                Подать заявку
              </a>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-10 lg:px-16 py-20 md:py-24 bg-card">
          <div className="max-w-6xl grid lg:grid-cols-2 gap-10">
            <div>
              <p className="text-caption text-muted-foreground mb-6">6 экран</p>
              <h2 className="text-h2 font-serif text-foreground mb-6">Наши участники</h2>
              <div className="grid gap-3 mb-5">
                {participantGroups.map((item) => (
                  <p key={item} className="text-body-lg text-foreground/75">- {item}</p>
                ))}
              </div>
              <p className="text-small text-muted-foreground">
                Блок с детальными описаниями участников, отзывами и картинками берется с текущего сайта.
              </p>
            </div>

            <div>
              <p className="text-caption text-muted-foreground mb-6">7 экран</p>
              <h2 className="text-h2 font-serif text-foreground mb-6">Как стать участником</h2>
              <div className="grid gap-4 mb-6">
                {joinSteps.map((step) => (
                  <div key={step.title} className="border border-border bg-background p-4">
                    <p className="text-body-lg text-foreground">{step.title}</p>
                    <p className="text-small text-muted-foreground">{step.text}</p>
                  </div>
                ))}
              </div>
              <a href="#form" className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground text-small hover:bg-[var(--accent-hover)] transition-colors">
                Подать заявку
              </a>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-10 lg:px-16 py-20 md:py-24">
          <div className="max-w-6xl mx-auto">
            <p className="text-caption text-muted-foreground mb-6">8 экран</p>
            <h2 className="text-h1 font-serif text-foreground mb-10">Нам доверяют</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {trustedCompanies.map((company) => (
                <div key={company} className="border border-border py-6 px-4 text-center text-small text-muted-foreground">
                  {company}
                </div>
              ))}
            </div>
            <p className="text-small text-muted-foreground mt-4">Логотипы 8-10 компаний можно добавить в этот блок без изменения структуры.</p>
          </div>
        </section>

        <section id="form" className="px-6 md:px-10 lg:px-16 py-20 md:py-24 bg-foreground text-primary-foreground">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h1 font-serif text-primary-foreground mb-6">Заявка в Совет управленцев</h2>
            <p className="text-body-lg text-primary-foreground/65 mb-10">Оставьте контакты. Мы рассмотрим заявку в течение недели и свяжемся для интервью.</p>
            <LeadForm variant="dark" submitLabel="Подать заявку" />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
