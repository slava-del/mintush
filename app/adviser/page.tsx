import Image from "next/image"
import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { LeadForm } from "@/components/lead-form"

export const metadata: Metadata = {
  title: "Персональный стратег — Олег Минтуш",
  description: "Наставничество для руководителей: стратегическое мышление, делегирование, бизнес-система и рост компании.",
}

const stats = [
  "Топ-менеджер международных компаний",
  "2 года ЧЛЕН СОВЕТА ДИРЕКТОРОВ",
  "10 лет ОПЫТА В ЦИФРОВЫХ компаниях",
  "3 запущенных личных стартапа",
  "50+ успешных БИЗНЕС-КЕЙСОВ",
  "1100+ часов в наставничестве",
]

const mentoringHelp = [
  "Поделюсь богатым управленческим опытом международных компаний и десятков бизнесов.",
  "Поработаю с твоим мышлением, чтобы ты начал осознанно думать и уверенно действовать как управленец и стратег.",
  "Погружу в индивидуальную методику управления бизнесом, проверенную годами на реальных компаниях.",
  "Покажу как стратегически создавать идеи и операционно доводить их до результата силами твоей команды.",
  "Расскажу как растить компанию и свою карьеру, но не сломаться и не потерять себя.",
  "Дам «волшебного пенделя» когда ленишься, поддержу в сложной ситуации, помогу в достижении бизнес-целей.",
]

const gets = [
  "опытного наставника по управлению",
  "опору для себя и своей компании",
  "доступ к моей «записной книжке»",
  "систематизацию своей компании",
  "переход к стратегическому развитию",
  "возможность сказать «Я с ним работал!»",
]

const globalProjects = [
  "WEB3 платежная система по всему миру",
  "Венчурная студия для Индонезии и Австралии",
  "Маркетплейс для Южной Азии",
]

const countries = [
  "ОАЭ",
  "Саудовская Аравия",
  "Тайланд",
  "Вьетнам",
  "Индонезия",
  "Сингапур",
  "Гонконг",
  "Австралия",
  "Англия",
  "США",
  "Чехия",
  "Швейцария",
]

const russianProjects = [
  "МТС трансформация экосистемы",
  "СБЕР развлекательные продукты",
  "Федеральное Автострахование при ЦБ",
]

const startups = [
  "Центр развития управленцев",
  "Wave приложения для знакомства на базе AI",
  "Evendate агрегатор развлекательных мероприятий",
]

const mentorFlow = [
  {
    title: "Подать заявку",
    text: "моя команда изучит твой запрос и буду ли я тебе полезен",
  },
  {
    title: "Познакомиться",
    text: "я проведу с тобой небольшую встречу, чтобы лучше познакомиться",
  },
  {
    title: "Подписать договор",
    text: "фиксируем наши договоренности и обязательства",
  },
]

const mentorBenefits = [
  "богатый опыт и индивидуальную методику",
  "четыре личные сессии в месяц и поддержка в чате",
  "персональную работу с мышлением и подходами",
  "трансформацию - как думать стратегически и делегировать тактически",
  "ответы на бизнес-вопросы «как развивать бизнес, но не сломать что работает»",
  "ответы на личные вопросы «как достигать бизнес-цели и не потерять себя»",
]

export default function AdviserPage() {
  return (
    <>
      <SiteHeader ctaHref="#form" ctaLabel="Подать заявку" />
      <main>
        <section className="relative min-h-[85vh] flex flex-col justify-end overflow-hidden bg-foreground text-primary-foreground">
          <div className="absolute inset-0">
            <Image src="/images/mentor-portrait.jpg" alt="Олег Минтуш" fill className="object-cover object-top opacity-35" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/80 to-transparent" />
          </div>

          <div className="relative z-10 px-6 md:px-10 lg:px-16 pt-32 pb-16">
            <div className="max-w-5xl">
              <p className="text-caption text-primary-foreground/45 mb-6">Наставник · /adviser</p>
              <h1 className="text-display font-serif text-primary-foreground mb-4">Олег Минтуш</h1>
              <p className="text-h3 text-primary-foreground/75 mb-8">Управленец | Стратег</p>
              <p className="text-body-lg text-primary-foreground/75 max-w-4xl mb-8">
                Помогаю руководителям компаний думать стратегически и делегировать тактически, создавать бизнес-системы и достигать бизнес-цели,
                внедрять операционное управление и собирать правильную команду.
              </p>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {stats.map((item) => (
                  <div key={item} className="border border-primary-foreground/20 p-3 text-small text-primary-foreground/75">
                    {item}
                  </div>
                ))}
              </div>
              <a href="#form" className="inline-flex mt-8 items-center justify-center px-6 py-3 bg-accent text-accent-foreground text-small hover:bg-[var(--accent-hover)] transition-colors">
                Подать заявку
              </a>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-10 lg:px-16 py-20 md:py-24">
          <div className="max-w-5xl">
            <p className="text-caption text-muted-foreground mb-6">2 экран</p>
            <h2 className="text-h1 font-serif text-foreground mb-8">Как я помогу тебе в наставничестве</h2>
            <div className="grid gap-4">
              {mentoringHelp.map((item) => (
                <p key={item} className="text-body-lg text-foreground/75">{item}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 md:px-10 lg:px-16 py-20 md:py-24 bg-card">
          <div className="max-w-5xl">
            <p className="text-caption text-muted-foreground mb-6">3 экран</p>
            <h2 className="text-h2 font-serif text-foreground mb-4">Какие проблемы бизнеса помогаю решить</h2>
            <p className="text-body-lg text-foreground/75 mb-2">Этот блок полностью берется с текущего сайта из раздела «ЗАПРОСЫ МОИХ КЛИЕНТОВ».</p>
            <p className="text-small text-muted-foreground">Структура экрана сохранена и готова для переноса текущих карточек запросов.</p>
          </div>
        </section>

        <section className="px-6 md:px-10 lg:px-16 py-20 md:py-24">
          <div className="max-w-5xl">
            <p className="text-caption text-muted-foreground mb-6">4 экран</p>
            <h2 className="text-h1 font-serif text-foreground mb-8">Что ты получаешь</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {gets.map((item) => (
                <div key={item} className="border border-border bg-card p-4 text-body-lg text-foreground/75">
                  {item}
                </div>
              ))}
            </div>
            <a href="#form" className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground text-small hover:bg-[var(--accent-hover)] transition-colors">
              Подать заявку
            </a>
          </div>
        </section>

        <section className="px-6 md:px-10 lg:px-16 py-20 md:py-24 bg-foreground text-primary-foreground">
          <div className="max-w-6xl">
            <p className="text-caption text-primary-foreground/45 mb-6">5 экран</p>
            <h2 className="text-h1 font-serif text-primary-foreground mb-6">Мой опыт</h2>

            <div className="grid lg:grid-cols-3 gap-6">
              <article className="border border-primary-foreground/20 p-5">
                <h3 className="text-h3 font-serif text-primary-foreground mb-4">Глобальные проекты</h3>
                <div className="grid gap-2 mb-4">
                  {globalProjects.map((item) => (
                    <p key={item} className="text-small text-primary-foreground/75">- {item}</p>
                  ))}
                </div>
                <p className="text-caption text-primary-foreground/45 mb-2">Страны</p>
                <div className="flex flex-wrap gap-2">
                  {countries.map((country) => (
                    <span key={country} className="text-caption border border-primary-foreground/20 px-2 py-1 text-primary-foreground/65">
                      {country}
                    </span>
                  ))}
                </div>
              </article>

              <article className="border border-primary-foreground/20 p-5">
                <h3 className="text-h3 font-serif text-primary-foreground mb-4">Российский опыт</h3>
                <div className="grid gap-2 mb-4">
                  {russianProjects.map((item) => (
                    <p key={item} className="text-small text-primary-foreground/75">- {item}</p>
                  ))}
                </div>
                <p className="text-small text-primary-foreground/60">
                  Здесь добавляются логотипы из раздела «мой опыт топ-менеджера» + ЦБ РФ + РСА.
                </p>
              </article>

              <article className="border border-primary-foreground/20 p-5">
                <h3 className="text-h3 font-serif text-primary-foreground mb-4">Мои стартапы</h3>
                <div className="grid gap-2">
                  {startups.map((item) => (
                    <p key={item} className="text-small text-primary-foreground/75">- {item}</p>
                  ))}
                </div>
                <p className="text-small text-primary-foreground/60 mt-4">
                  Добавляется текущий логотип сайта вместе с логотипами из раздела предпринимательского опыта.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-10 lg:px-16 py-20 md:py-24 bg-card">
          <div className="max-w-5xl">
            <p className="text-caption text-muted-foreground mb-6">6 экран</p>
            <h2 className="text-h2 font-serif text-foreground mb-4">Больше информации обо мне</h2>
            <p className="text-body-lg text-foreground/75">
              Этот раздел запланирован под полный перенос информации со страницы наставника из блока ниже блога.
            </p>
          </div>
        </section>

        <section className="px-6 md:px-10 lg:px-16 py-20 md:py-24">
          <div className="max-w-6xl grid lg:grid-cols-2 gap-10">
            <div>
              <p className="text-caption text-muted-foreground mb-6">7 экран</p>
              <h2 className="text-h1 font-serif text-foreground mb-6">Как попасть в мое наставничество</h2>
              <div className="grid gap-3 mb-8">
                {mentorFlow.map((step) => (
                  <div key={step.title} className="border border-border bg-card p-4">
                    <p className="text-body-lg text-foreground">{step.title}</p>
                    <p className="text-small text-muted-foreground">{step.text}</p>
                  </div>
                ))}
              </div>
              <p className="text-body-lg text-foreground/75 mb-4">
                Если ты руководитель с опытом от 2 лет и командой от 20 сотрудников, подавай заявку.
              </p>
            </div>

            <div className="border border-border p-6 md:p-8">
              <p className="text-caption text-muted-foreground mb-4">Ты получаешь</p>
              <div className="grid gap-2 mb-4">
                {mentorBenefits.map((item) => (
                  <p key={item} className="text-small text-foreground/75">- {item}</p>
                ))}
              </div>
              <p className="text-body-lg text-foreground/75 mb-2">Ты станешь лучшей версией управленца и стратега.</p>
              <p className="text-body-lg text-accent mb-6">$... в месяц (оплата минимум 3 месяцев)</p>
              <a href="#form" className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground text-small hover:bg-[var(--accent-hover)] transition-colors">
                Подать заявку
              </a>
            </div>
          </div>
        </section>

        <section id="form" className="px-6 md:px-10 lg:px-16 py-20 md:py-24 bg-foreground text-primary-foreground">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h1 font-serif text-primary-foreground mb-6">Заявка на наставничество</h2>
            <p className="text-body-lg text-primary-foreground/65 mb-10">Оставьте контакты. Команда изучит запрос и пригласит вас на знакомство.</p>
            <LeadForm variant="dark" submitLabel="Подать заявку" />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
