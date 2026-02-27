import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { LeadForm } from "@/components/lead-form"
import { courses, mentor } from "@/lib/data"

export const metadata: Metadata = {
  title: "Мини-курсы для руководителей — " + mentor.name,
  description: "Стратегия, управление, бизнес-система. Мини-курсы, которые внедряются.",
}

export default function CoursesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* ── Hero ── */}
        <section className="bg-foreground text-primary-foreground px-6 md:px-10 lg:px-16 pt-32 pb-20 md:pb-28">
          <div className="max-w-5xl">
            <p className="text-caption text-primary-foreground/30 mb-6">Каталог</p>
            <h1 className="text-display font-serif text-primary-foreground mb-6 text-balance">
              Мини-курсы для руководителей
            </h1>
            <p className="text-body-lg text-primary-foreground/40 max-w-2xl leading-relaxed">
              Руководителям нужно регулярно обновлять знания и лучшие практики.
              GPT отвечает на вопросы, но не выстраивает систему управления: нет структуры, шагов, шаблонов, примеров и ответственности.
            </p>
          </div>
        </section>

        {/* ── Context block ── */}
        <section className="px-6 md:px-10 lg:px-16 py-24 md:py-32">
          <div className="max-w-5xl">
            <div className="flex flex-col md:flex-row gap-16 md:gap-24">
              <div className="flex flex-col gap-4 max-w-lg">
                <p className="text-caption text-muted-foreground">Принцип</p>
                <p className="text-h3 font-serif text-foreground">
                  Руководитель не обязан быть экспертом во всем, но обязан понимать базовые принципы.
                </p>
              </div>
              <div className="flex flex-col gap-4 max-w-lg">
                <p className="text-caption text-muted-foreground">Формат</p>
                <p className="text-body-lg text-muted-foreground leading-relaxed">
                  Видео, презентации-руководства, чек-листы, практические шаблоны.
                  Можно пройти за пару дней или в своем темпе.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Courses Grid ── */}
        <section className="px-6 md:px-10 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {courses.map((course) => (
                <Link
                  key={course.slug}
                  href={`/courses/${course.slug}`}
                  className="group relative overflow-hidden aspect-[3/4] flex flex-col justify-end"
                >
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 via-[#1A1A1A]/30 to-transparent" />
                  <div className="relative z-10 p-8 md:p-10 lg:p-12 flex flex-col gap-4">
                    <span className="text-caption text-[#F5F2ED]/30">
                      {course.guides} руководств / {course.webinars} вебинаров
                    </span>
                    <h2 className="text-h1 font-serif text-[#F5F2ED] text-balance">
                      {course.title}
                    </h2>
                    <p className="text-body-lg text-[#F5F2ED]/50 max-w-sm">
                      {course.description}
                    </p>
                    <span className="text-small text-accent mt-2 group-hover:text-[#F5F2ED] transition-colors">
                      Смотреть программу
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section id="form" className="px-6 md:px-10 lg:px-16 py-24 md:py-32 bg-foreground text-primary-foreground">
          <div className="max-w-4xl mx-auto">
            <p className="text-caption text-primary-foreground/30 mb-6">Начать</p>
            <h2 className="text-h1 font-serif text-primary-foreground mb-6 text-balance max-w-3xl">
              Получите программу мини-курсов
            </h2>
            <p className="text-body-lg text-primary-foreground/40 mb-12 max-w-xl">
              Оставьте Telegram или email для получения полной программы.
            </p>
            <LeadForm variant="dark" />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
