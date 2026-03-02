import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Выступления — Олег Минтуш",
  description: "Публичные выступления и темы для конференций и бизнес-сообществ.",
}

const speeches = [
  "Системное управление в эпоху AI",
  "Как руководителю выйти из операционной рутины",
  "Архитектура бизнеса: от хаоса к управляемости",
]

export default function AdviserSpeechPage() {
  return (
    <>
      <SiteHeader ctaHref="/adviser#form" ctaLabel="Подать заявку" />
      <main>
        <section className="px-6 md:px-10 lg:px-16 pt-32 pb-16 bg-foreground text-primary-foreground">
          <div className="max-w-5xl">
            <p className="text-caption text-primary-foreground/45 mb-6">/adviser/speech</p>
            <h1 className="text-display font-serif text-primary-foreground mb-4">Выступления</h1>
            <p className="text-body-lg text-primary-foreground/70 max-w-3xl">
              Раздел выступлений в формате 2 экранов. Подходит для публикации анонсов и записей выступлений.
            </p>
          </div>
        </section>

        <section className="px-6 md:px-10 lg:px-16 py-20 md:py-24">
          <div className="max-w-5xl grid gap-4">
            {speeches.map((speech) => (
              <div key={speech} className="border border-border p-6 bg-card text-body-lg text-foreground/75">
                {speech}
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
