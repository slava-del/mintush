"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, Menu } from "lucide-react"
import { contactConfig, primaryNav, type NavItem } from "@/lib/site-config"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

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
    <header className="fixed left-6 right-6 top-6 z-50 rounded-[18px] border border-white/14 bg-[#131625]/85 backdrop-blur-md md:left-10 md:right-10 md:top-8 lg:left-10 lg:right-10">
      <nav className="flex items-center px-4 py-3 md:px-6 md:py-3.5 lg:px-8">
        <Link href="/" className="text-white font-serif text-xl tracking-tight flex items-baseline gap-3">
          <span>OM</span>
          <span className="hidden sm:inline text-small tracking-[0.12em]">OLEG MINTUSH</span>
        </Link>

        <div className="hidden md:flex items-center gap-4 ml-auto">
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
            className="text-small text-white/75 hover:text-white transition-colors hidden xl:inline"
          >
            Почта
          </a>
          <Link
            href={ctaHref}
            className="text-small text-white border border-white/35 px-5 py-2 hover:bg-white/10 transition-colors hidden lg:inline-flex"
          >
            {ctaLabel}
          </Link>

          <button
            type="button"
            className="inline-flex items-center gap-1 text-white/90 text-small px-2 py-1"
            aria-label="Выбор языка"
          >
            RU
            <ChevronDown className="size-3.5 opacity-80" />
          </button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                aria-label="Открыть навигацию"
                className="inline-flex items-center justify-center border border-white/35 text-white h-10 w-10 hover:bg-white/10 transition-colors ml-1"
              >
                <Menu className="size-5" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-72 border-white/20 bg-[#131625] text-white"
            >
              <DropdownMenuLabel className="text-white/70">
                Навигация
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-white/15" />
              {items.map((item) => {
                const itemActive = isActive(pathname, item.href)
                return (
                  <DropdownMenuItem
                    key={item.href}
                    asChild
                    className={`cursor-pointer ${
                      itemActive
                        ? "bg-white/15 text-white focus:bg-white/15 focus:text-white"
                        : "text-white/85 focus:bg-white/10 focus:text-white"
                    }`}
                  >
                    <Link href={item.href} className="flex w-full items-center justify-between">
                      <span>{item.label}</span>
                      {itemActive && <span className="text-caption text-accent">текущая</span>}
                    </Link>
                  </DropdownMenuItem>
                )
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <button
          onClick={() => setOpen((prev) => !prev)}
          className="ml-auto flex flex-col gap-1.5 text-white md:hidden"
          aria-label="Открыть меню"
        >
          <span className={`block w-6 h-px bg-white transition-transform ${open ? "rotate-45 translate-y-[4px]" : ""}`} />
          <span className={`block w-6 h-px bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-white transition-transform ${open ? "-rotate-45 -translate-y-[4px]" : ""}`} />
        </button>
      </nav>

      {open && (
        <div className="fixed inset-0 top-[6rem] z-40 flex flex-col items-start gap-6 overflow-y-auto bg-[#131625]/95 px-6 pb-10 pt-10 backdrop-blur-sm md:hidden">
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
