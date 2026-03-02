import Link from "next/link"
import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Блог — MINTUSH",
  description: "Статьи по управлению, развитию команд и архитектуре бизнеса.",
}

const posts = [
  {
    slug: "one-owner",
    title: "Один собственник: как не утонуть в операционке",
    excerpt: "Шаблон статьи для блога с повторяемой структурой из 2 экранов.",
  },
  {
    slug: "strategy-rhythm",
    title: "Стратегический ритм: как не терять курс",
    excerpt: "Пример второго материала в том же шаблоне.",
  },
]

export default function BlogPage() {
  return (
    <>
      <SiteHeader ctaHref="/consulting#form" ctaLabel="Связаться с нами" />
      <main>
        <section className="px-6 md:px-10 lg:px-16 pt-32 pb-16 bg-foreground text-primary-foreground">
          <div className="max-w-5xl">
            <p className="text-caption text-primary-foreground/45 mb-6">Блог · /blog</p>
            <h1 className="text-display font-serif text-primary-foreground mb-4">Блог</h1>
            <p className="text-body-lg text-primary-foreground/70 max-w-3xl">
              Здесь размещаются статьи по одному шаблону (2 экрана на каждую статью).
            </p>
          </div>
        </section>

        <section className="px-6 md:px-10 lg:px-16 py-20 md:py-24">
          <div className="max-w-5xl grid gap-4">
            {posts.map((post) => (
              <article key={post.slug} className="border border-border p-6 bg-card">
                <h2 className="text-h3 font-serif text-foreground mb-2">{post.title}</h2>
                <p className="text-body-lg text-foreground/75 mb-4">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="text-small text-accent hover:underline">
                  Читать статью
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
