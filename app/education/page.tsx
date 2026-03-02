import Link from "next/link"
import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { trustedCompanies } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Обучение — Мини-курсы для руководителей",
  description: "Короткие мини-курсы по бизнес-модели, бизнес-системе и стратегии с практическими материалами и шаблонами.",
}

const why = [
  "Все сотрудники, включая руководителей, нуждаются в регулярной актуализации знаний и изучении новых подходов.",
  "GPT-чат может ответить на любой вопрос, но не сможет выстроить систему обучения под управленческие задачи.",
  "Руководитель не должен быть экспертом во всех бизнес-функциях, но обязан знать базовые принципы их работы.",
]

const requiredUnderstanding = [
  "как выстраивать бизнес-систему",
  "как ставить задачи",
  "как добиваться бизнес-результата",
]

const includeFormats = [
  "видео-материалы",
  "руководства-презентации",
  "чек-листы",
  "практические шаблоны",
]

const courses = [
  {
    title: "Стратегия бизнеса",
    description:
      "Понятный мини-курс, который поможет владельцу бизнеса собрать правильную стратегию на год и внедрить её в операционку. Стратегия работает в реальности и становится частью управления.",
    items: ["4 практических руководства", "6 вебинаров"],
    href: "/education/business-strategy",
  },
  {
    title: "Управление бизнесом",
    description:
      "Работающие подходы для перехода от ручного управления к бизнес-системе за 4 шага. Бизнес работает предсказуемо: по цифрам, срокам и качеству.",
    items: ["4 практических руководства", "4 вебинара"],
    href: "/education/business-management",
  },
]

export default function EducationPage() {
  return (
    <>
      <SiteHeader ctaHref="#courses" ctaLabel="Связаться с нами" />
      <main>
        <section className="px-6 md:px-10 lg:px-16 pt-32 pb-16 bg-foreground text-primary-foreground">
          <div className="max-w-5xl">
            <p className="text-caption text-primary-foreground/45 mb-6">Обучение · /education</p>
            <h1 className="text-display font-serif text-primary-foreground mb-6">Мини-курсы для руководителей</h1>
            <p className="text-body-lg text-primary-foreground/70 max-w-3xl">
              Короткие курсы от опытных управленцев про бизнес-модель, бизнес-систему, стратегию и другие темы.
            </p>
          </div>
        </section>

        <section className="px-6 md:px-10 lg:px-16 py-20 md:py-24">
          <div className="max-w-5xl grid gap-6">
            {why.map((item) => (
              <p key={item} className="text-body-lg text-foreground/75">{item}</p>
            ))}
          </div>
        </section>

        <section className="px-6 md:px-10 lg:px-16 py-20 md:py-24 bg-card">
          <div className="max-w-6xl grid lg:grid-cols-2 gap-10">
            <div>
              <p className="text-caption text-muted-foreground mb-6">Что должен понимать руководитель</p>
              <div className="grid gap-3 mb-8">
                {requiredUnderstanding.map((item) => (
                  <p key={item} className="text-body-lg text-foreground/75">- {item}</p>
                ))}
              </div>
              <p className="text-small text-muted-foreground">
                Дополнительный блок статистики можно добавить сюда: затраты времени/денег на обучение руководителей в разных странах или данные по дефициту управленческих компетенций.
              </p>
            </div>

            <div>
              <p className="text-caption text-muted-foreground mb-6">Курсы включают</p>
              <div className="grid gap-3">
                {includeFormats.map((item) => (
                  <div key={item} className="border border-border bg-background px-4 py-3 text-body-lg text-foreground/75">
                    {item}
                  </div>
                ))}
              </div>
              <p className="text-body-lg text-foreground/75 mt-8">
                Каждый мини-курс можно пройти за пару дней, а можно в своем темпе. Руководства построены по шагам и не перегружают график.
              </p>
            </div>
          </div>
        </section>

        <section id="courses" className="px-6 md:px-10 lg:px-16 py-20 md:py-24">
          <div className="max-w-6xl mx-auto">
            <p className="text-caption text-muted-foreground mb-6">Перечень курсов</p>
            <div className="grid md:grid-cols-2 gap-6">
              {courses.map((course) => (
                <article key={course.title} className="border border-border p-6 md:p-8 bg-card flex flex-col gap-5">
                  <h2 className="text-h2 font-serif text-foreground">{course.title}</h2>
                  <p className="text-body-lg text-foreground/75">{course.description}</p>
                  <div className="grid gap-2">
                    {course.items.map((item) => (
                      <p key={item} className="text-small text-foreground/70">- {item}</p>
                    ))}
                  </div>
                  <Link
                    href={course.href}
                    className="inline-flex w-fit items-center justify-center px-6 py-3 bg-accent text-accent-foreground text-small hover:bg-[var(--accent-hover)] transition-colors"
                  >
                    Посмотреть подробнее
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 md:px-10 lg:px-16 py-20 md:py-24 bg-foreground text-primary-foreground">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-h1 font-serif text-primary-foreground mb-10">Нам доверяют</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {trustedCompanies.map((company) => (
                <div key={company} className="border border-primary-foreground/20 py-6 px-4 text-center text-small text-primary-foreground/70">
                  {company}
                </div>
              ))}
            </div>
            <p className="text-small text-primary-foreground/45 mt-4">
              Блок подготовлен под 8-10 логотипов компаний.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
