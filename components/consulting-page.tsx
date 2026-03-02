"use client"

import { useMemo, useState } from "react"
import { LeadForm } from "@/components/lead-form"
import { trustedCompanies, mentorSummary } from "@/lib/site-config"

type Locale = "ru" | "en"

const content = {
  ru: {
    localeLabel: "RU",
    altLocaleLabel: "EN",
    heroTitle: "Архитектура бизнеса",
    heroSubtitle: "Мы строим систему управления, чтобы ваш бизнес работал как часы",
    heroDescription: "Ваш личный «бизнес-спецназ» для решения сложных управленческих задач.",
    mission: [
      "Наша задача понять реальную причину надлома в бизнесе, сформировать устойчивую архитектуру и составить план достижения цели.",
      "Мы не только придумываем как должно быть, но и внедряем решения.",
      "Мы привлекаем лучших проверенных экспертов в свою команду.",
      "Мы доводим задачу до результата и передаем дела вашей постоянной команде.",
    ],
    supportTitle: "Также, мы помогаем",
    supportItems: [
      {
        title: "Подружить бизнес с ИТ-отделом, финансы с маркетингом",
        text: "Нужны правила коммуникации, постановки задач и промежуточные результаты, чтобы коллеги доверяли друг другу.",
      },
      {
        title: "Курирование работы подрядчиков",
        text: "Учитываем тонкости предметной области, фиксируем ожидаемый результат и управляем исполнением.",
      },
      {
        title: "Запустить новый проект",
        text: "Подбираем команду, собираем план и выводим новые продукты на рынок.",
      },
      {
        title: "Найти эксперта узкой области",
        text: "Подключаем дополнительные компетенции под задачу бизнеса.",
      },
    ],
    forWhomTitle: "Для кого",
    forWhomItems: [
      "Компании в 50-450 сотрудников с цифровыми продуктами или услугами.",
      "Кризис в управлении или задача масштабирования бизнеса.",
      "Руководители устали «тащить на себе» и хотят порядок и понятную систему.",
      "Те, кто обжегся с ChatGPT, используя теоретические советы без практики.",
    ],
    founderTitle: "Основатель",
    siteBlocksTitle: "Блоки из текущего сайта",
    siteBlocksItems: [
      "Раздел «Почему бизнес страдает» и блок «Но с нашей системой» переносим в эту страницу.",
      "Раздел про 4 шага переносим без изменения логики.",
      "Следующий блок называем «Типичные проблемы и наши решения».",
      "Раздел «Наши услуги» переносим, но убираем длительность/месяцы.",
      "Раздел «Наши бизнес кейсы» переносим полностью.",
    ],
    finalText:
      "Мы помогаем бизнесу найти узкие места, пересмотреть бизнес модель, собрать систему управления, подобрать команду, выстроить процессы, закрыть недостаток компетенций и довести задачу до конца.",
    trustTitle: "Нам доверяют",
    ctaTitle: "Получить консультацию",
    ctaText: "Оставьте контакты и мы вернемся с конкретным планом действий по вашей задаче.",
    ctaButton: "Получить консультацию",
  },
  en: {
    localeLabel: "EN",
    altLocaleLabel: "RU",
    heroTitle: "Business Architecture",
    heroSubtitle: "We build a management system so your business runs like a clock",
    heroDescription: "Your personal business special-force team for complex management challenges.",
    mission: [
      "We identify the root cause of business fracture, design a resilient target architecture, and build an execution roadmap.",
      "We do not only design the model, we implement it.",
      "We involve trusted high-level experts when needed.",
      "We deliver outcomes and then transfer the work to your internal team.",
    ],
    supportTitle: "We also help with",
    supportItems: [
      {
        title: "Aligning business, IT, finance and marketing",
        text: "We set communication rules, task framing, and interim checkpoints so teams trust each other.",
      },
      {
        title: "Contractor governance",
        text: "We account for domain specifics, define expected outcomes, and control delivery quality.",
      },
      {
        title: "Launching a new project",
        text: "We build the launch plan, assemble the team, and bring new products to market.",
      },
      {
        title: "Finding niche experts",
        text: "We bring in additional competencies for narrow and high-stakes tasks.",
      },
    ],
    forWhomTitle: "Who this is for",
    forWhomItems: [
      "Companies with 50-450 employees and digital products/services.",
      "Management crisis or active business scaling challenge.",
      "Leaders tired of carrying operations alone and seeking a clear system.",
      "Teams disappointed by pure theory from ChatGPT without practical rollout.",
    ],
    founderTitle: "Founder",
    siteBlocksTitle: "Blocks migrated from the current site",
    siteBlocksItems: [
      "Migrate the sections 'Why business suffers' and 'With our system'.",
      "Migrate the '4-step' section with original logic.",
      "Rename the next block to 'Typical problems and our solutions'.",
      "Migrate 'Our services' without duration/month labels.",
      "Migrate 'Business cases' as is.",
    ],
    finalText:
      "We help businesses detect bottlenecks, rethink business models, build management systems, structure teams and processes, close competence gaps, and deliver tasks to completion.",
    trustTitle: "Trusted by",
    ctaTitle: "Get Consultation",
    ctaText: "Leave your contacts and we will return with a concrete action plan for your challenge.",
    ctaButton: "Get Consultation",
  },
}

export function ConsultingPageContent() {
  const [locale, setLocale] = useState<Locale>("ru")
  const t = useMemo(() => content[locale], [locale])

  return (
    <main className="bg-background text-foreground">
      <section className="px-6 md:px-10 lg:px-16 pt-32 pb-16 border-b border-border">
        <div className="max-w-6xl">
          <div className="flex items-center justify-between gap-4 mb-8">
            <p className="text-caption text-muted-foreground">Consulting · /consulting</p>
            <button
              onClick={() => setLocale((prev) => (prev === "ru" ? "en" : "ru"))}
              className="px-4 py-2 border border-foreground/20 text-small hover:bg-foreground hover:text-primary-foreground transition-colors"
            >
              {t.localeLabel} / {t.altLocaleLabel}
            </button>
          </div>
          <h1 className="text-display font-serif text-foreground mb-4">{t.heroTitle}</h1>
          <p className="text-h3 text-foreground/75 mb-4 max-w-4xl">{t.heroSubtitle}</p>
          <p className="text-body-lg text-foreground/70 max-w-3xl">{t.heroDescription}</p>
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-16 py-20 md:py-24 bg-foreground text-primary-foreground">
        <div className="max-w-6xl grid lg:grid-cols-2 gap-10">
          <div className="grid gap-4">
            {t.mission.map((item) => (
              <p key={item} className="text-body-lg text-primary-foreground/75">{item}</p>
            ))}
          </div>
          <div className="border border-primary-foreground/20 p-6 md:p-8">
            <p className="text-caption text-primary-foreground/45 mb-4">{t.supportTitle}</p>
            <div className="grid gap-5">
              {t.supportItems.map((item) => (
                <article key={item.title}>
                  <h3 className="text-body-lg text-primary-foreground mb-1">{item.title}</h3>
                  <p className="text-small text-primary-foreground/70">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-16 py-20 md:py-24">
        <div className="max-w-6xl grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-h1 font-serif text-foreground mb-6">{t.forWhomTitle}</h2>
            <div className="grid gap-3">
              {t.forWhomItems.map((item) => (
                <p key={item} className="text-body-lg text-foreground/75">- {item}</p>
              ))}
            </div>
          </div>
          <div className="border border-border bg-card p-6 md:p-8">
            <p className="text-caption text-muted-foreground mb-4">{t.founderTitle}</p>
            <h3 className="text-h3 font-serif text-foreground mb-4">Олег Минтуш</h3>
            <div className="grid gap-2 mb-6">
              {mentorSummary.bullets.map((item) => (
                <p key={item} className="text-body-lg text-foreground/75">- {item}</p>
              ))}
            </div>
            <p className="text-small text-muted-foreground">Подпись в этом разделе обновлена на «Основатель» согласно ТЗ.</p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-16 py-20 md:py-24 bg-card">
        <div className="max-w-6xl grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-h2 font-serif text-foreground mb-6">{t.siteBlocksTitle}</h2>
            <div className="grid gap-3">
              {t.siteBlocksItems.map((item) => (
                <p key={item} className="text-body-lg text-foreground/75">- {item}</p>
              ))}
            </div>
          </div>
          <div className="border border-border bg-background p-6 md:p-8">
            <p className="text-body-lg text-foreground/75">{t.finalText}</p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-16 py-20 md:py-24 bg-foreground text-primary-foreground">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-h1 font-serif text-primary-foreground mb-8">{t.trustTitle}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustedCompanies.map((company) => (
              <div key={company} className="border border-primary-foreground/20 py-6 px-4 text-center text-small text-primary-foreground/70">
                {company}
              </div>
            ))}
          </div>
          <p className="text-small text-primary-foreground/45 mt-4">Логотипы 8-10 компаний добавляются в этот блок без изменения структуры.</p>
        </div>
      </section>

      <section id="form" className="px-6 md:px-10 lg:px-16 py-20 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-h1 font-serif text-foreground mb-6">{t.ctaTitle}</h2>
          <p className="text-body-lg text-foreground/70 mb-8">{t.ctaText}</p>
          <LeadForm variant="light" submitLabel={t.ctaButton} />
        </div>
      </section>
    </main>
  )
}
