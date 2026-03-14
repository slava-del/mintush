"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { Instagram, Linkedin, Mail, Send } from "lucide-react"
import { contactConfig } from "@/lib/site-config"

export type LandingPrimaryNavItem = {
  href: string
  label: string
}

export const landingPrimaryNavItems: LandingPrimaryNavItem[] = [
  { href: "/", label: "Главная" },
  { href: "/education", label: "Обучение" },
  { href: "/board", label: "Совет управленцев" },
  { href: "/adviser", label: "Наставничество" },
  { href: "/consulting", label: "Консалтинг" },
  { href: "/blog", label: "Блог" },
]

type LandingPrimaryNavProps = {
  items?: LandingPrimaryNavItem[]
  activeHref?: string
  mode?: "inline" | "brand-hamburger"
  contactHref?: string
}

export function LandingPrimaryNav({
  items = landingPrimaryNavItems,
  activeHref,
  mode = "inline",
  contactHref = "#contact",
}: LandingPrimaryNavProps) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement | null>(null)

  const normalizedPathname = pathname && pathname !== "/" ? pathname.replace(/\/+$/, "") : pathname || "/"

  const isPathActive = (href: string) => {
    if (!href.startsWith("/")) return false
    if (href === "/") return normalizedPathname === "/"
    const normalizedHref = href.replace(/\/+$/, "")
    return normalizedPathname === normalizedHref || normalizedPathname.startsWith(`${normalizedHref}/`)
  }

  const resolvedActiveHref =
    activeHref ?? items.find((item) => isPathActive(item.href))?.href

  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false)
      }
    }

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node
      if (menuRef.current && !menuRef.current.contains(target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("keydown", onKeyDown)
    document.addEventListener("pointerdown", onPointerDown)

    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.removeEventListener("pointerdown", onPointerDown)
    }
  }, [isOpen])

  if (mode === "brand-hamburger") {
    return (
      <div className="relative flex items-center justify-end gap-2 text-[#EDEDED]" ref={menuRef}>
        <div className="ml-auto flex items-center gap-2">
          <div className="hidden items-center rounded-full border border-[#e7d2ad]/45 bg-[#070707]/88 p-1 pl-2.5 pr-2.5 sm:flex">
            <a
              href={contactHref}
              className="inline-flex h-8 items-center rounded-full px-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#EDEDED]/88 transition hover:bg-white/8 hover:text-[#EDEDED]"
            >
              Связаться
            </a>
            <span className="mx-1.5 h-4 w-px bg-[#e7d2ad]/22" aria-hidden="true" />
            <a
              href={`mailto:${contactConfig.email}`}
              aria-label="Написать на почту"
              className="grid h-8 w-8 place-items-center rounded-full text-[#e7d2ad] transition hover:bg-[#e7d2ad]/14"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>

          <button
            type="button"
            aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#e7d2ad]/45 bg-[#070707]/88 text-[#EDEDED] transition-colors duration-200 hover:border-[#e7d2ad] hover:bg-[#0b0b0b]"
          >
            <span aria-hidden="true" className="relative block h-[14px] w-[18px]">
              <span
                className={`absolute left-0 top-0 h-[2px] w-full rounded-full bg-current transition-transform duration-200 ease-out ${
                  isOpen ? "translate-y-[6px] rotate-45" : "translate-y-0 rotate-0"
                }`}
              />
              <span
                className={`absolute left-0 top-[6px] h-[2px] w-full rounded-full bg-current transition-all duration-150 ease-out ${
                  isOpen ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-[12px] h-[2px] w-full rounded-full bg-current transition-transform duration-200 ease-out ${
                  isOpen ? "translate-y-[-6px] -rotate-45" : "translate-y-0 rotate-0"
                }`}
              />
            </span>
          </button>
        </div>

        <div
          className={`absolute right-0 top-[calc(100%+12px)] z-50 w-[min(92vw,340px)] overflow-hidden rounded-[18px] border border-[#e7d2ad]/26 bg-[#070707]/66 p-3 shadow-[0_24px_60px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all duration-200 ease-out ${
            isOpen ? "pointer-events-auto translate-y-0 scale-100 opacity-100" : "pointer-events-none -translate-y-2 scale-95 opacity-0"
          }`}
          aria-hidden={!isOpen}
        >
          <nav className="grid gap-1">
            {items.map((item, index) => {
              const isActive = resolvedActiveHref === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-[12px] border px-3 py-2 text-[13px] font-semibold uppercase tracking-[0.08em] transition-all duration-200 ${
                    isActive
                      ? "border-[#e7d2ad] bg-[#e7d2ad] text-black hover:brightness-95"
                      : "border-transparent text-[#EDEDED]/84 hover:border-white/18 hover:bg-white/8 hover:text-[#EDEDED]"
                  } ${isOpen ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"}`}
                  style={{ transitionDelay: isOpen ? `${40 + index * 20}ms` : "0ms" }}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <div
            className={`mt-3 flex items-center rounded-[12px] border border-[#e7d2ad]/24 bg-[#0b0b0b]/72 p-1 pl-3 pr-2 transition-all duration-200 ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
            }`}
            style={{ transitionDelay: isOpen ? `${70 + items.length * 20}ms` : "0ms" }}
          >
            <a href={contactHref} onClick={() => setIsOpen(false)} className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#EDEDED]/88 transition hover:text-[#EDEDED]">
              Связаться
            </a>
            <div className="ml-auto flex items-center">
              <span className="mx-2 h-4 w-px bg-[#e7d2ad]/22" aria-hidden="true" />
              <a
                href={contactHref}
                onClick={() => setIsOpen(false)}
                aria-label="Перейти к контактам через LinkedIn"
                className="grid h-8 w-8 place-items-center rounded-full text-[#e7d2ad] transition hover:bg-[#e7d2ad]/14"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${contactConfig.email}`}
                aria-label="Написать на почту"
                className="grid h-8 w-8 place-items-center rounded-full text-[#e7d2ad] transition hover:bg-[#e7d2ad]/14"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href={contactConfig.telegramUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Написать в Telegram"
                className="grid h-8 w-8 place-items-center rounded-full text-[#e7d2ad] transition hover:bg-[#e7d2ad]/14"
              >
                <Send className="h-4 w-4" />
              </a>
              <a
                href={contactHref}
                onClick={() => setIsOpen(false)}
                aria-label="Перейти к контактам"
                className="grid h-8 w-8 place-items-center rounded-full text-[#e7d2ad] transition hover:bg-[#e7d2ad]/14"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-between gap-5">
      <nav className="flex min-w-0 flex-1 items-center gap-5 overflow-x-auto pb-1 sm:gap-7 md:gap-9">
        {items.map((item) => {
          const isActive = resolvedActiveHref === item.href

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`group relative inline-flex shrink-0 pb-1 text-[11px] font-semibold uppercase tracking-[0.08em] transition md:text-[12px] ${
                isActive ? "text-white" : "text-white/86 hover:text-white"
              }`}
            >
              <span>{item.label}</span>
              <span className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-white/18" />
              <span
                className={`pointer-events-none absolute bottom-0 left-0 h-px w-full origin-left bg-[#efe0c1] transition-transform duration-200 ${
                  isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </Link>
          )
        })}
      </nav>

      <button
        type="button"
        aria-label="Открыть меню"
        className="inline-flex h-11 w-[66px] shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/[0.03] text-white/90 transition hover:bg-white/[0.08]"
      >
        <span aria-hidden="true" className="text-[23px] leading-none tracking-[0.24em]">
          ···
        </span>
      </button>
    </div>
  )
}
