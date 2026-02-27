import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { LeadForm } from "@/components/lead-form"
import { mentor } from "@/lib/data"

export const metadata: Metadata = {
  title: `${mentor.name} — О наставнике`,
  description: mentor.tagline,
}

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* ── Hero ── */}
        <section className="relative min-h-[80vh] flex flex-col justify-end overflow-hidden bg-foreground">
          <div className="absolute inset-0">
            <Image
              src={mentor.portraitImage}
              alt={mentor.name}
              fill
              className="object-cover object-top opacity-35"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/50 to-transparent" />
          </div>

          <div className="relative z-10 px-6 md:px-10 lg:px-16 pb-16 md:pb-24 pt-32">
            <div className="max-w-4xl">
              <p className="text-caption text-[#F5F2ED]/30 mb-6">О наставнике</p>
              <h1 className="text-display font-serif text-[#F5F2ED] mb-6">{mentor.name}</h1>
              <p className="text-h3 text-[#F5F2ED]/50 max-w-xl">{mentor.tagline}</p>
              <p className="text-body-lg text-[#F5F2ED]/40 mt-4 max-w-lg leading-relaxed">
                Строю бизнес-системы, которые работают без постоянного вмешательства собственника.
                Передаю управленческий опыт через структурированные мини-курсы.
              </p>
            </div>
          </div>
        </section>

        {/* ── Approach (Method) ── */}
        <section className="px-6 md:px-10 lg:px-16 py-24 md:py-32 lg:py-40">
          <div className="max-w-5xl">
            <p className="text-caption text-muted-foreground mb-6">Метод</p>
            <h2 className="text-h1 font-serif text-foreground mb-16 md:mb-24 text-balance max-w-3xl">
              Подход
            </h2>

            <div className="flex flex-col gap-16 md:gap-20">
              {mentor.approach.map((item) => (
                <div key={item.step} className="flex flex-col md:flex-row gap-6 md:gap-16">
                  <span className="text-display font-serif text-foreground/10 leading-none flex-shrink-0">
                    {String(item.step).padStart(2, "0")}
                  </span>
                  <div className="flex flex-col gap-3 max-w-xl">
                    <h3 className="text-h3 font-serif text-foreground">{item.title}</h3>
                    <p className="text-body-lg text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Timeline ── */}
        <section className="px-6 md:px-10 lg:px-16 py-24 md:py-32 lg:py-40 bg-card">
          <div className="max-w-5xl">
            <p className="text-caption text-muted-foreground mb-6">Хронология</p>
            <h2 className="text-h1 font-serif text-foreground mb-16 md:mb-24 text-balance">
              Опыт
            </h2>

            <div className="flex flex-col gap-8 md:gap-10">
              {mentor.timeline.map((item, i) => (
                <div key={i} className="flex items-start gap-8 md:gap-16">
                  <span className="text-h2 font-serif text-foreground/15 flex-shrink-0 w-20 md:w-28">
                    {item.year}
                  </span>
                  <div className="pt-2 border-t border-border flex-1">
                    <p className="text-body-lg text-foreground/70">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Proof logos + quote ── */}
        <section className="px-6 md:px-10 lg:px-16 py-24 md:py-32 lg:py-40">
          <div className="max-w-5xl mx-auto">
            {/* Logos */}
            <div className="fade-edges mb-20">
              <div className="flex items-center justify-center gap-12 md:gap-20 py-8 border-y border-border">
                {mentor.pressLogos.map((logo, i) => (
                  <span key={i} className="text-h3 font-serif text-muted-foreground/30 whitespace-nowrap">
                    {logo}
                  </span>
                ))}
              </div>
            </div>

            {/* Testimonials */}
            <blockquote className="border-l-2 border-accent pl-8 md:pl-12 max-w-3xl">
              <p className="text-h3 font-serif text-foreground/80 leading-relaxed mb-6">
                {mentor.testimonial.text}
              </p>
              <footer className="flex flex-col gap-1">
                <span className="text-small text-foreground">{mentor.testimonial.author}</span>
                <span className="text-caption text-muted-foreground">{mentor.testimonial.role}</span>
              </footer>
            </blockquote>
          </div>
        </section>

        {/* ── CTA ── */}
        <section id="form" className="px-6 md:px-10 lg:px-16 py-24 md:py-32 lg:py-40 bg-foreground text-primary-foreground">
          <div className="max-w-4xl mx-auto">
            <p className="text-caption text-primary-foreground/30 mb-6">Начать</p>
            <h2 className="text-h1 font-serif text-primary-foreground mb-6 text-balance max-w-3xl">
              Получите программу мини-курсов
            </h2>
            <p className="text-body-lg text-primary-foreground/40 mb-12 max-w-xl">
              Оставьте Telegram или email. Мы отправим программу курса и пример материалов.
            </p>
            <LeadForm variant="dark" />

            <div className="mt-8">
              <Link
                href="/courses"
                className="text-small text-primary-foreground/40 hover:text-primary-foreground/60 transition-colors border-b border-primary-foreground/20"
              >
                Запросить консультацию
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
