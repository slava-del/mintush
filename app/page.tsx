import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { LeadForm } from "@/components/lead-form"
import { mentorSummary, trustedCompanies } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Главная — Центр развития управленцев",
  description:
    "Прокачиваем руководителей в сильных управленцев, настраиваем системы управления бизнесом.",
}

const marketProblems = [
  "Классическое образование не дотягивает до требований рынка и бизнес страдает от нехватки опытных руководителей.",
  "ИИ-боты могут ответить на любой вопрос, но не могут управлять бизнесом вместо вас.",
  "Сотрудники не слышали о новых возможностях, не используют NoCode и AI инструменты для быстрого решения бизнес-задач.",
  "Менеджеры порой не знают что делать, а получив ответ или идею, не знают как это применить.",
  "Руководители назначаются не имея управленческого мышления, поэтому не умеют выстраивать бизнес-систему.",
  "Собственники застревают в операционной рутине, не имея времени на стратегическое развитие своего бизнеса.",
]

const maturityLevels = [
  {
    title: "Основы управления",
    subtitle: "От сотрудника к руководителю",
    goal: "Научиться быть руководителем",
    criteria: "Платный канал для всех желающих",
    points: [
      "полезные материалы про управление",
      "инструкции и советы по управлению",
      "разборы реальных кейсов",
      "практические инсайты про управление",
      "встречи с опытными управленцами",
    ],
    summary: "Вы поймете кто такой руководитель, какие задачи решает и как мыслит.",
    price: "$... в месяц (ежемесячная подписка)",
    href: "/basis",
  },
  {
    title: "Совет управленцев",
    subtitle: "От руководителя к управленцу",
    goal: "Решать задачи как управленец",
    criteria: "Закрытый клуб для руководителей от 10 сотрудников и от 1 года опыта",
    points: [
      "закрытый чат руководителей",
      "четыре встречи участников в месяц",
      "накопленную базу полезных материалов",
      "погружение в бизнес-функции компаний",
      "разборы индивидуальных бизнес-задач",
      "онлайн экскурсии по реальным компаниям",
      "коллективный опыт и дружескую атмосферу",
    ],
    summary: "Мы вместе растем как управленцы и решаем задачи своего бизнеса.",
    price: "$... в месяц (оплата минимум 6 месяцев)",
    href: "/board",
  },
  {
    title: "Персональный стратег",
    subtitle: "От управленца к стратегу",
    goal: "Заниматься стратегическим развитием",
    criteria: "Наставничество от Олега Минтуш для управленцев от 20 сотрудников и 2 лет опыта",
    points: [
      "богатый опыт и индивидуальную методику",
      "четыре личные сессии в месяц и поддержка в чате",
      "персональную работу с мышлением и подходами",
      "трансформацию: как думать стратегически и делегировать тактически",
      "ответы на бизнес-вопросы о развитии бизнеса",
      "ответы на личные вопросы о достижении целей и балансе",
    ],
    summary: "Ты станешь лучшей версией управленца и стратега.",
    price: "$... в месяц (оплата минимум 3 месяцев)",
    href: "/adviser",
  },
]

const architectureProblems = [
  "не хватает компетенций для роста",
  "не знаете как выйти из кризиса",
  "не сталкивались с такой задачей ранее",
]

const extraPages = [
  { title: "Блог", href: "/blog", note: "2 экрана, статьи по одному шаблону" },
  { title: "Путешествия наставника", href: "/adviser/travels", note: "2 экрана, список поездок" },
  { title: "Страница путешествия (пример)", href: "/founder/travels/moldova", note: "1 экран по шаблону" },
  { title: "Выступления", href: "/adviser/speech", note: "2 экрана" },
]

export default function HomePage() {
  return (
    <>
      <SiteHeader ctaHref="#form" ctaLabel="Связаться с нами" />
      <main>
        <section className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-foreground text-primary-foreground">
          <div className="absolute inset-0">
            <Image
              src="/images/mentor-action.jpg"
              alt="Олег Минтуш"
              fill
              className="object-cover opacity-30"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/80 to-transparent" />
          </div>

          <div className="relative z-10 px-6 md:px-10 lg:px-16 pb-16 md:pb-20 pt-32">
            <div className="max-w-5xl flex flex-col gap-8">
              <p className="text-caption text-primary-foreground/45">ЦЕНТР РАЗВИТИЯ УПРАВЛЕНЦЕВ</p>
              <h1 className="text-display font-serif text-primary-foreground text-balance">
                Прокачиваем руководителей в сильных управленцев
              </h1>
              <p className="text-h3 text-primary-foreground/75">Настраиваем системы управления бизнесом</p>

              <div className="grid gap-4 md:grid-cols-2 max-w-4xl">
                <div>
                  <p className="text-body-lg text-primary-foreground/90">
                    {mentorSummary.name}, {mentorSummary.role}
                  </p>
                </div>
                <ul className="flex flex-col gap-2">
                  {mentorSummary.bullets.map((bullet) => (
                    <li key={bullet} className="text-small text-primary-foreground/60">
                      - {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-10 lg:px-16 py-24 md:py-32">
          <div className="max-w-5xl">
            <p className="text-caption text-muted-foreground mb-6">2 экран</p>
            <h2 className="text-h1 font-serif text-foreground mb-12 text-balance">
              На рынке явная нехватка управленческих компетенций
            </h2>
            <div className="grid gap-4 md:gap-6">
              {marketProblems.map((problem, index) => (
                <div key={problem} className="flex gap-4 border-b border-border pb-4">
                  <span className="text-caption text-muted-foreground mt-1">{String(index + 1).padStart(2, "0")}</span>
                  <p className="text-body-lg text-foreground/75 leading-relaxed">{problem}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 md:px-10 lg:px-16 py-24 md:py-32 bg-card">
          <div className="max-w-6xl mx-auto">
            <p className="text-caption text-muted-foreground mb-6">3 экран</p>
            <h2 className="text-h1 font-serif text-foreground mb-4 text-balance">
              Мы предлагаем решение и три уровня управленческой зрелости
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12">
              {maturityLevels.map((item) => (
                <article key={item.title} className="border border-border bg-background p-6 md:p-8 flex flex-col gap-4">
                  <p className="text-caption text-muted-foreground">{item.subtitle}</p>
                  <h3 className="text-h3 font-serif text-foreground">{item.title}</h3>
                  <p className="text-small text-foreground/70"><strong>Цель:</strong> {item.goal}</p>
                  <p className="text-small text-foreground/70"><strong>Критерии участия:</strong> {item.criteria}</p>
                  <div className="flex flex-col gap-2">
                    {item.points.map((point) => (
                      <p key={point} className="text-small text-foreground/70">- {point}</p>
                    ))}
                  </div>
                  <p className="text-small text-foreground/70">{item.summary}</p>
                  <p className="text-small text-accent">{item.price}</p>
                  <Link
                    href={item.href}
                    className="inline-flex items-center justify-center mt-2 px-5 py-3 bg-accent text-accent-foreground text-small font-medium hover:bg-[var(--accent-hover)] transition-colors"
                  >
                    Купить или вступить
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 md:px-10 lg:px-16 py-24 md:py-32">
          <div className="max-w-5xl grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-caption text-muted-foreground mb-6">4 экран</p>
              <h2 className="text-h1 font-serif text-foreground mb-6">Мини-курсы для руководителей</h2>
              <p className="text-body-lg text-foreground/75 leading-relaxed">
                Руководитель не должен быть экспертом в финансах, логистике и прочих бизнес-функциях. Но руководитель обязан знать их базовые принципы работы, чтобы понимать как выстраивать бизнес-систему, как ставить задачи и как добиваться бизнес-результата.
              </p>
            </div>
            <div className="border border-border p-6 md:p-8 bg-card flex flex-col gap-4">
              <p className="text-body-lg text-foreground/80">
                Мы собрали короткие мини-курсы от опытных управленцев про бизнес-модель, бизнес-систему, стратегию и другие темы для руководителей.
              </p>
              <Link
                href="/education"
                className="inline-flex w-fit items-center justify-center px-6 py-3 border border-foreground/20 text-foreground text-small hover:bg-foreground/5 transition-colors"
              >
                Перейти к мини-курсам
              </Link>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-10 lg:px-16 py-24 md:py-32 bg-foreground text-primary-foreground">
          <div className="max-w-5xl">
            <p className="text-caption text-primary-foreground/40 mb-6">5 экран</p>
            <h2 className="text-h1 font-serif text-primary-foreground mb-6">Архитектура бизнеса</h2>
            <p className="text-body-lg text-primary-foreground/70 leading-relaxed max-w-4xl">
              В вашей компании случилась проблема. Растить внутренние компетенции или нанимать экспертов с рынка это всегда долго.
              Это хорошая стратегия в долгую, но плохое решение здесь и сейчас.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 my-8">
              {architectureProblems.map((problem) => (
                <div key={problem} className="border border-primary-foreground/20 p-4 text-small text-primary-foreground/70">
                  {problem}
                </div>
              ))}
            </div>
            <p className="text-body-lg text-primary-foreground/70 leading-relaxed max-w-4xl mb-8">
              Мы берем на себя решение вашей бизнес-задачи. Высаживаем опытный «бизнес-спецназ», решаем задачу,
              обучаем вашу команду и передаем все результаты работ.
            </p>
            <Link
              href="/consulting"
              className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground text-small hover:bg-[var(--accent-hover)] transition-colors"
            >
              Перейти в раздел «Прокачка бизнеса»
            </Link>
          </div>
        </section>

        <section className="px-6 md:px-10 lg:px-16 py-24 md:py-32">
          <div className="max-w-6xl mx-auto">
            <p className="text-caption text-muted-foreground mb-6">6 экран</p>
            <h2 className="text-h1 font-serif text-foreground mb-10">Нам доверяют</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {trustedCompanies.map((company) => (
                <div key={company} className="border border-border py-6 px-4 text-center text-small text-muted-foreground">
                  {company}
                </div>
              ))}
            </div>
            <p className="text-small text-muted-foreground mt-4">
              Строка с логотипами компаний здесь подготовлена как шаблон на 8-10 логотипов.
            </p>
          </div>
        </section>

        <section className="px-6 md:px-10 lg:px-16 py-24 md:py-32 bg-card">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-caption text-muted-foreground mb-6">Дополнительные разделы</p>
              <h2 className="text-h2 font-serif text-foreground mb-6">Блог, путешествия и выступления</h2>
              <p className="text-body-lg text-foreground/75 mb-8">
                Основной акцент сделан на 7 главных страниц. Дополнительные 5 страниц оформлены по шаблонной структуре с быстрым переносом контента.
              </p>
              <div className="flex flex-col gap-3">
                {extraPages.map((page) => (
                  <Link key={page.href} href={page.href} className="text-small text-foreground/75 hover:text-foreground border-b border-border pb-2 transition-colors">
                    {page.title}: {page.note}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="text-caption text-muted-foreground mb-6">Обязательные требования</p>
              <div className="border border-border p-6 bg-background flex flex-col gap-4">
                <p className="text-body-lg text-foreground/80">Политика конфиденциальности и согласие на обработку персональных данных добавлены в структуру сайта.</p>
                <p className="text-body-lg text-foreground/80">Страница оплаты включает 2 опции: $ для Молдовы (M-Pay) и рубли для РФ (Тинькофф Pay).</p>
                <p className="text-body-lg text-foreground/80">SEO и GEO учтены через понятную структуру URL, заголовки и метаданные страниц.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="form" className="px-6 md:px-10 lg:px-16 py-24 md:py-32 bg-foreground text-primary-foreground">
          <div className="max-w-4xl mx-auto">
            <p className="text-caption text-primary-foreground/35 mb-6">Связаться с нами</p>
            <h2 className="text-h1 font-serif text-primary-foreground mb-6 text-balance">
              Подайте заявку и получите подходящий формат участия
            </h2>
            <p className="text-body-lg text-primary-foreground/65 mb-10 max-w-2xl">
              Оставьте имя, email и telegram. Мы свяжемся с вами и предложим формат: канал, клуб, персональное наставничество или мини-курс.
            </p>
            <LeadForm variant="dark" submitLabel="Отправить заявку" />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
