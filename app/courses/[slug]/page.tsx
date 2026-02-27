import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { LeadForm } from "@/components/lead-form"
import { StickyCtaSidebar } from "@/components/sticky-cta-sidebar"
import { courses, mentor } from "@/lib/data"

export async function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const course = courses.find((c) => c.slug === slug)
  if (!course) return {}
  return {
    title: `${course.title} — ${mentor.name}`,
    description: course.description,
  }
}

export default async function CourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const course = courses.find((c) => c.slug === slug)
  if (!course) notFound()

  return (
    <>
      <SiteHeader />
      <main>
        {/* ── Hero ── */}
        <section className="relative min-h-[70vh] flex flex-col justify-end overflow-hidden bg-foreground">
          <div className="absolute inset-0">
            <Image
              src={course.image}
              alt={course.title}
              fill
              className="object-cover opacity-30"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/60 to-transparent" />
          </div>

          <div className="relative z-10 px-6 md:px-10 lg:px-16 pb-16 md:pb-24 pt-32">
            <div className="max-w-4xl">
              <p className="text-caption text-[#F5F2ED]/30 mb-6">Мини-курс</p>
              <h1 className="text-display font-serif text-[#F5F2ED] mb-6 text-balance">{course.title}</h1>
              <p className="text-h3 text-[#F5F2ED]/50 max-w-xl mb-4">{course.promise}</p>
              <p className="text-caption text-[#F5F2ED]/25 mb-8">
                {course.guides} руководств / {course.webinars} вебинаров
              </p>
              <Link
                href="#form"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground text-small font-medium tracking-wide hover:bg-[var(--accent-hover)] transition-colors"
              >
                Получить программу мини-курсов
              </Link>
            </div>
          </div>
        </section>

        {/* ── Content area with sticky sidebar ── */}
        <div className="flex flex-col lg:flex-row">
          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* ── What's inside ── */}
            <section className="px-6 md:px-10 lg:px-16 py-24 md:py-32">
              <div className="max-w-3xl">
                <p className="text-caption text-muted-foreground mb-6">Содержание</p>
                <h2 className="text-h1 font-serif text-foreground mb-12 md:mb-16">Что внутри</h2>
                <div className="flex flex-col gap-6">
                  {course.contents.map((item, i) => (
                    <div key={i} className="flex items-start gap-6 pb-6 border-b border-border">
                      <span className="text-caption text-muted-foreground font-mono flex-shrink-0 mt-1">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="text-body-lg text-foreground/80">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── Outcomes ── */}
            <section className="px-6 md:px-10 lg:px-16 py-24 md:py-32 bg-card">
              <div className="max-w-3xl">
                <p className="text-caption text-muted-foreground mb-6">Итог</p>
                <h2 className="text-h1 font-serif text-foreground mb-12 md:mb-16">Результат</h2>
                <div className="flex flex-col gap-5">
                  {course.outcomes.map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <span className="text-accent font-mono text-small mt-0.5">+</span>
                      <p className="text-body-lg text-foreground/70 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── Structure ── */}
            <section className="px-6 md:px-10 lg:px-16 py-24 md:py-32">
              <div className="max-w-3xl">
                <p className="text-caption text-muted-foreground mb-6">Процесс</p>
                <h2 className="text-h1 font-serif text-foreground mb-12 md:mb-16">Структура</h2>
                <div className="flex flex-col gap-16 md:gap-20">
                  {course.steps.map((step, i) => (
                    <div key={i} className="flex flex-col md:flex-row gap-6 md:gap-12">
                      <span className="text-display font-serif text-foreground/8 leading-none flex-shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="flex flex-col gap-3 max-w-xl">
                        <h3 className="text-h3 font-serif text-foreground">{step.title}</h3>
                        <p className="text-body-lg text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── For whom / not for ── */}
            <section className="px-6 md:px-10 lg:px-16 py-24 md:py-32 bg-card">
              <div className="max-w-3xl">
                <p className="text-caption text-muted-foreground mb-6">Аудитория</p>
                <h2 className="text-h1 font-serif text-foreground mb-12 md:mb-16">Кому подойдет</h2>

                <div className="flex flex-col gap-16">
                  {/* For */}
                  <div className="flex flex-col gap-6">
                    <span className="text-caption text-foreground/50">Подходит</span>
                    {course.forWhom.map((item, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <span className="text-accent font-mono text-small mt-0.5">+</span>
                        <p className="text-body-lg text-foreground/70 leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>

                  {/* Not for */}
                  <div className="flex flex-col gap-6">
                    <span className="text-caption text-foreground/50">Не подходит</span>
                    {course.notForWhom.map((item, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <span className="text-muted-foreground font-mono text-small mt-0.5">&ndash;</span>
                        <p className="text-body-lg text-muted-foreground leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sticky CTA sidebar (desktop only) */}
          <StickyCtaSidebar />
        </div>

        {/* ── Final CTA ── */}
        <section id="form" className="px-6 md:px-10 lg:px-16 py-24 md:py-32 bg-foreground text-primary-foreground">
          <div className="max-w-4xl mx-auto">
            <p className="text-caption text-primary-foreground/30 mb-6">Начать</p>
            <h2 className="text-h1 font-serif text-primary-foreground mb-6 text-balance max-w-3xl">
              Получите программу мини-курсов
            </h2>
            <p className="text-body-lg text-primary-foreground/40 mb-12 max-w-xl">
              Оставьте Telegram или email для получения полной программы и примеров материалов.
            </p>
            <LeadForm variant="dark" />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
