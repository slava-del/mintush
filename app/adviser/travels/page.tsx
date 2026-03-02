import Link from "next/link"
import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Путешествия — Олег Минтуш",
  description: "Список путешествий и управленческих заметок по странам.",
}

const travels = [
  { slug: "moldova", country: "Молдова", note: "пример страницы путешествия (1 экран)" },
  { slug: "thailand", country: "Тайланд", note: "шаблон списка поездок (2 экрана)" },
]

export default function AdviserTravelsPage() {
  return (
    <>
      <SiteHeader ctaHref="/adviser#form" ctaLabel="Подать заявку" />
      <main>
        <section className="px-6 md:px-10 lg:px-16 pt-32 pb-16 bg-foreground text-primary-foreground">
          <div className="max-w-5xl">
            <p className="text-caption text-primary-foreground/45 mb-6">/adviser/travels</p>
            <h1 className="text-display font-serif text-primary-foreground mb-4">Путешествия</h1>
            <p className="text-body-lg text-primary-foreground/70 max-w-3xl">
              Список поездок в формате 2 экранов со ссылками на детальные страницы по шаблону.
            </p>
          </div>
        </section>

        <section className="px-6 md:px-10 lg:px-16 py-20 md:py-24">
          <div className="max-w-5xl grid gap-4">
            {travels.map((travel) => (
              <article key={travel.slug} className="border border-border p-6 bg-card">
                <h2 className="text-h3 font-serif text-foreground mb-2">{travel.country}</h2>
                <p className="text-body-lg text-foreground/75 mb-4">{travel.note}</p>
                <Link href={`/founder/travels/${travel.slug}`} className="text-small text-accent hover:underline">
                  Открыть страницу путешествия
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
