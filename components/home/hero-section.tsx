import Image from "next/image"
import Link from "next/link"
import { mentor } from "@/lib/data"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-foreground">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={mentor.actionImage}
          alt={mentor.name}
          fill
          className="object-cover object-center opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-10 lg:px-16 pb-16 md:pb-20 pt-32">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 lg:gap-16">
          {/* Left: poster type */}
          <div className="flex flex-col gap-6 max-w-4xl">
            <p className="text-caption text-[#F5F2ED]/40">{mentor.tagline}</p>
            <h1 className="text-display font-serif text-[#F5F2ED] text-balance">
              {mentor.name.toUpperCase()}
            </h1>
            <p className="text-h2 font-serif text-[#F5F2ED]/80 tracking-tight">
              СИСТЕМНОЕ УПРАВЛЕНИЕ
            </p>
            <p className="text-body-lg text-[#F5F2ED]/50 max-w-xl">
              Мини-курсы для руководителей, которые внедряются.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link
                href="#form"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground text-small font-medium tracking-wide hover:bg-[var(--accent-hover)] transition-colors"
              >
                Получить программу мини-курсов
              </Link>
              <Link
                href="/courses"
                className="inline-flex items-center justify-center px-8 py-4 border border-[#F5F2ED]/20 text-[#F5F2ED] text-small tracking-wide hover:bg-[#F5F2ED]/5 transition-colors"
              >
                Посмотреть пример материалов
              </Link>
            </div>
          </div>

          {/* Right: credibility bullets */}
          <div className="flex-shrink-0 lg:max-w-xs">
            <ul className="flex flex-col gap-3">
              {mentor.proof.map((item, i) => (
                <li
                  key={i}
                  className="text-small text-[#F5F2ED]/40 flex items-start gap-3"
                >
                  <span className="text-caption text-[#F5F2ED]/20 mt-0.5 font-mono">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
