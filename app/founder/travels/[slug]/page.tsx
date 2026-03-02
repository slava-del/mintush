import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const travels = {
  moldova: {
    title: "Молдова",
    text: "Страница путешествия по шаблону из 1 экрана. Можно масштабировать на любые страны.",
  },
  thailand: {
    title: "Тайланд",
    text: "Пример еще одной страницы путешествия в том же формате.",
  },
} as const

export function generateStaticParams() {
  return Object.keys(travels).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const page = travels[slug as keyof typeof travels]
  if (!page) return {}
  return {
    title: `${page.title} — Путешествия`,
    description: page.text,
  }
}

export default async function FounderTravelDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const page = travels[slug as keyof typeof travels]
  if (!page) notFound()

  return (
    <>
      <SiteHeader ctaHref="/adviser#form" ctaLabel="Подать заявку" />
      <main>
        <section className="px-6 md:px-10 lg:px-16 pt-32 pb-16 bg-foreground text-primary-foreground">
          <div className="max-w-4xl">
            <p className="text-caption text-primary-foreground/45 mb-6">/founder/travels/{slug}</p>
            <h1 className="text-display font-serif text-primary-foreground mb-4">{page.title}</h1>
            <p className="text-body-lg text-primary-foreground/70">{page.text}</p>
          </div>
        </section>

        <section className="px-6 md:px-10 lg:px-16 py-20 md:py-24">
          <div className="max-w-4xl grid gap-6">
            <p className="text-body-lg text-foreground/75">Этот шаблон соответствует формату 1 экран для страницы отдельного путешествия.</p>
            <Link href="/adviser/travels" className="text-small text-accent hover:underline">Назад к списку путешествий</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
