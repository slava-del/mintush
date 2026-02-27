import Link from "next/link"
import { mentor } from "@/lib/data"

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="px-6 md:px-10 lg:px-16 py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Left */}
          <div className="flex flex-col gap-3">
            <span className="font-serif text-xl tracking-tight">{mentor.name}</span>
            <span className="text-small text-primary-foreground/50">{mentor.tagline}</span>
          </div>

          {/* Links */}
          <div className="flex gap-12">
            <div className="flex flex-col gap-3">
              <span className="text-caption text-primary-foreground/40">Навигация</span>
              <Link href="/courses" className="text-small text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Курсы
              </Link>
              <Link href="/about" className="text-small text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                О наставнике
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-caption text-primary-foreground/40">Курсы</span>
              <Link href="/courses/strategy" className="text-small text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Стратегия бизнеса
              </Link>
              <Link href="/courses/management" className="text-small text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Управление бизнесом
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between gap-4">
          <span className="text-caption text-primary-foreground/30">
            &copy; {new Date().getFullYear()} {mentor.name}
          </span>
          <span className="text-caption text-primary-foreground/30">
            Политика конфиденциальности
          </span>
        </div>
      </div>
    </footer>
  )
}
