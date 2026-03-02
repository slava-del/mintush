"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { contactConfig, primaryNav, type NavItem } from "@/lib/site-config"

type SiteHeaderProps = {
  ctaHref?: string
  ctaLabel?: string
  navItems?: NavItem[]
}

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/"
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function SiteHeader({
  ctaHref = "#form",
  ctaLabel = "Связаться с нами",
  navItems,
}: SiteHeaderProps) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const items = useMemo(() => navItems ?? primaryNav, [navItems])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
      <nav className="flex items-center justify-between px-6 py-5 md:px-10 lg:px-16">
        <Link href="/" className="text-white font-serif text-xl tracking-tight flex items-baseline gap-3">
          <span>OM</span>
          <span className="hidden sm:inline text-small tracking-[0.12em]">OLEG MINTUSH</span>
        </Link>

        <div className="hidden xl:flex items-center gap-6">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-small tracking-wide transition-opacity ${
                isActive(pathname, item.href) ? "text-white" : "text-white/60 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-5">
          <a
            href={contactConfig.telegramUrl}
            target="_blank"
            rel="noreferrer"
            className="text-small text-white/75 hover:text-white transition-colors"
          >
            Telegram
          </a>
          <a
            href={`mailto:${contactConfig.email}`}
            className="text-small text-white/75 hover:text-white transition-colors"
          >
            Почта
          </a>
          <Link
            href={ctaHref}
            className="text-small text-white border border-white/35 px-5 py-2 hover:bg-white/10 transition-colors"
          >
            {ctaLabel}
          </Link>
        </div>

        <button
          onClick={() => setOpen((prev) => !prev)}
          className="md:hidden text-white flex flex-col gap-1.5"
          aria-label="Открыть меню"
        >
          <span className={`block w-6 h-px bg-white transition-transform ${open ? "rotate-45 translate-y-[4px]" : ""}`} />
          <span className={`block w-6 h-px bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-white transition-transform ${open ? "-rotate-45 -translate-y-[4px]" : ""}`} />
        </button>
      </nav>

      {open && (
        <div className="md:hidden fixed inset-0 top-16 bg-[#131625]/95 backdrop-blur-sm flex flex-col items-start px-6 pt-10 gap-6 z-40 overflow-y-auto pb-10">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-white text-h3 font-serif"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={contactConfig.telegramUrl}
            target="_blank"
            rel="noreferrer"
            className="text-white/80 text-body-lg"
          >
            Telegram
          </a>
          <a href={`mailto:${contactConfig.email}`} className="text-white/80 text-body-lg">
            {contactConfig.email}
          </a>
          <Link
            href={ctaHref}
            onClick={() => setOpen(false)}
            className="text-white text-body-lg mt-3 border border-white/35 px-6 py-3"
          >
            {ctaLabel}
          </Link>
        </div>
      )}
    </header>
  )
}
