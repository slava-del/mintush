import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const posts = {
  "one-owner": {
    title: "Один собственник: как не утонуть в операционке",
    lead: "Статья-шаблон из 2 экранов. Можно тиражировать для всех материалов блога.",
  },
  "strategy-rhythm": {
    title: "Стратегический ритм: как не терять курс",
    lead: "Повторяемая структура для публикаций по управлению и стратегии.",
  },
} as const

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = posts[slug as keyof typeof posts]
  if (!post) return {}
  return {
    title: `${post.title} — Блог`,
    description: post.lead,
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts[slug as keyof typeof posts]
  if (!post) notFound()

  return (
    <>
      <SiteHeader ctaHref="/consulting#form" ctaLabel="Связаться с нами" />
      <main>
        <section className="px-6 md:px-10 lg:px-16 pt-32 pb-16 bg-foreground text-primary-foreground">
          <div className="max-w-4xl">
            <p className="text-caption text-primary-foreground/45 mb-6">/blog/{slug}</p>
            <h1 className="text-display font-serif text-primary-foreground mb-4">{post.title}</h1>
            <p className="text-body-lg text-primary-foreground/70">{post.lead}</p>
          </div>
        </section>

        <section className="px-6 md:px-10 lg:px-16 py-20 md:py-24">
          <div className="max-w-4xl grid gap-6">
            <p className="text-body-lg text-foreground/75">
              Экран 1: вводный контекст, проблема, примеры из практики.
            </p>
            <p className="text-body-lg text-foreground/75">
              Экран 2: выводы, прикладные шаги, ссылки на связанные материалы.
            </p>
            <Link href="/blog" className="text-small text-accent hover:underline">
              Вернуться к списку статей
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
