import Image from "next/image"
import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { LeadForm } from "@/components/lead-form"

export const metadata: Metadata = {
  title: "Основы управления — Канал",
  description: "Платформа для начинающих управленцев: материалы, разборы кейсов и встречи с опытными руководителями.",
}

const audiencePain = [
  "Вы линейный сотрудник и хотите стать менеджером или руководителем.",
  "У вас слабое понимание, кто такой руководитель и в чем его обязанности.",
  "Вам недостаточно компетенций, чтобы претендовать на роль руководителя.",
  "Вы стали руководителем, но чувствуете что не справляетесь с задачами.",
]

const outcomes = [
  "Получите доступ к знаниям об управлении",
  "Увидите, как опытные управленцы решают проблемы",
  "Узнаете лайфхаки руководителей и как делать проще",
  "Найдете то, о чем раньше не подозревали",
  "Познакомитесь с другими начинающими управленцами",
  "Можете попасть на разбор вашего личной ситуации",
]

const features = [
  "полезные материалы про управление",
  "инструкции и советы по управлению",
  "разборы реальных кейсов",
  "практические инсайты про управление",
  "встречи с опытными управленцами",
]

const opportunities = [
  "Погрузиться в мир управления",
  "Подсмотреть у других",
  "Научиться «ездить на велосипеде»",
  "Стать увереннее и решительнее",
]

export default function BasisPage() {
  return (
    <>
      <SiteHeader ctaHref="#form" ctaLabel="Участвовать" />
      <main>
        <section className="relative min-h-[78vh] flex flex-col justify-end overflow-hidden bg-foreground text-primary-foreground">
          <div className="absolute inset-0">
            <Image src="/images/mentor-portrait.jpg" alt="Олег Минтуш" fill className="object-cover opacity-25" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/75 to-transparent" />
          </div>
          <div className="relative z-10 px-6 md:px-10 lg:px-16 pt-32 pb-16">
            <div className="max-w-4xl">
              <p className="text-caption text-primary-foreground/45 mb-6">Канал · /basis</p>
              <h1 className="text-display font-serif text-primary-foreground mb-4">Основы управления</h1>
              <p className="text-h3 text-primary-foreground/75">Платформа для начинающих управленцев</p>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-10 lg:px-16 py-24 md:py-28">
          <div className="max-w-5xl">
            <p className="text-caption text-muted-foreground mb-6">1 экран</p>
            <div className="grid gap-4">
              {audiencePain.map((item, index) => (
                <div key={item} className="flex gap-4 border-b border-border pb-4">
                  <span className="text-caption text-muted-foreground mt-1">{String(index + 1).padStart(2, "0")}</span>
                  <p className="text-body-lg text-foreground/80">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 md:px-10 lg:px-16 py-24 md:py-28 bg-card">
          <div className="max-w-5xl">
            <p className="text-caption text-muted-foreground mb-6">2 экран</p>
            <h2 className="text-h1 font-serif text-foreground mb-8">Мы создали формат, в котором вы</h2>
            <div className="grid gap-3 mb-8">
              {outcomes.map((item) => (
                <p key={item} className="text-body-lg text-foreground/75">- {item}</p>
              ))}
            </div>
            <a
              href="#form"
              className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground text-small hover:bg-[var(--accent-hover)] transition-colors"
            >
              Участвовать
            </a>
          </div>
        </section>

        <section className="px-6 md:px-10 lg:px-16 py-24 md:py-28 bg-foreground text-primary-foreground">
          <div className="max-w-5xl grid lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <p className="text-caption text-primary-foreground/45 mb-6">3 экран</p>
              <h2 className="text-h2 font-serif text-primary-foreground mb-6 text-balance">
                GPT-чат может ответить на любой ваш вопрос, но знаете ли вы что у него спросить?
              </h2>
              <p className="text-body-lg text-primary-foreground/70 mb-3">А как применить ту информацию, что он вам предложил?</p>
              <p className="text-body-lg text-primary-foreground/70">Уверены ли вы, что не умея «ездить на велосипеде», получится с первого раза?</p>
            </div>
            <div className="border border-primary-foreground/20 p-6 md:p-8">
              <p className="text-caption text-primary-foreground/45 mb-4">Ваша уникальная возможность</p>
              <div className="grid gap-3">
                {opportunities.map((item) => (
                  <p key={item} className="text-body-lg text-primary-foreground/80">- {item}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-10 lg:px-16 py-24 md:py-28">
          <div className="max-w-5xl">
            <p className="text-caption text-muted-foreground mb-6">4 экран</p>
            <h2 className="text-h1 font-serif text-foreground mb-8">Платформа доступна всем желающим</h2>
            <div className="grid gap-3 mb-6">
              {features.map((item) => (
                <p key={item} className="text-body-lg text-foreground/75">- {item}</p>
              ))}
            </div>
            <p className="text-body-lg text-foreground/75 mb-3">Вы поймете кто такой руководитель, какие задачи решает и как мыслит.</p>
            <p className="text-body-lg text-accent mb-10">$... в месяц (ежемесячная подписка)</p>
          </div>
        </section>

        <section id="form" className="px-6 md:px-10 lg:px-16 py-24 md:py-28 bg-foreground text-primary-foreground">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h1 font-serif text-primary-foreground mb-6">Вступить в канал</h2>
            <p className="text-body-lg text-primary-foreground/65 mb-10 max-w-2xl">
              Оставьте имя, email и telegram. Мы отправим детали участия и доступ к платформе.
            </p>
            <LeadForm variant="dark" submitLabel="Участвовать" />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
