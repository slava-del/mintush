import Link from "next/link"
import { contactConfig, primaryNav } from "@/lib/site-config"

const legalLinks = [
  { href: "/legal/privacy", label: "Политика конфиденциальности" },
  { href: "/legal/personal-data", label: "Согласие на обработку персональных данных" },
  { href: "/payment", label: "Оплата услуг" },
]

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="px-6 md:px-10 lg:px-16 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="flex flex-col gap-3">
            <span className="font-serif text-xl tracking-tight">OLEG MINTUSH</span>
            <span className="text-small text-primary-foreground/60">Центр развития управленцев</span>
            <a href={`mailto:${contactConfig.email}`} className="text-small text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              {contactConfig.email}
            </a>
            <a href={contactConfig.telegramUrl} target="_blank" rel="noreferrer" className="text-small text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Telegram
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-caption text-primary-foreground/40">Разделы</span>
            {primaryNav.map((item) => (
              <Link key={item.href} href={item.href} className="text-small text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-caption text-primary-foreground/40">Юридическая информация</span>
            {legalLinks.map((item) => (
              <Link key={item.href} href={item.href} className="text-small text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between gap-4">
          <span className="text-caption text-primary-foreground/35">copywrite 2023-2026 MINTUSH ©</span>
          <span className="text-caption text-primary-foreground/35">Соц сети и контакты доступны вверху и в этом подвале</span>
        </div>
      </div>
    </footer>
  )
}
