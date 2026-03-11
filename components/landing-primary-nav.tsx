"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { Mail, Menu, Send, X } from "lucide-react"
import { contactConfig } from "@/lib/site-config"

export type LandingPrimaryNavItem = {
  href: string
  label: string
}

export const landingPrimaryNavItems: LandingPrimaryNavItem[] = [
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
  logoHref?: string
  logoLabel?: string
}

export function LandingPrimaryNav({
  items = landingPrimaryNavItems,
  activeHref,
  mode = "inline",
  contactHref = "#contact",
  logoHref = "/",
  logoLabel = "OLEG MINTUSH",
}: LandingPrimaryNavProps) {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement | null>(null)

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
      <div className="relative flex items-center justify-between gap-4 text-[#EDEDED]" ref={menuRef}>
        <Link href={logoHref} className="inline-flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-[#e7d2ad]/45 bg-[#070707] text-[12px] font-extrabold tracking-[0.16em] text-[#EDEDED]">
            OM
          </span>
          <span className="hidden text-[12px] font-semibold uppercase tracking-[0.14em] text-[#EDEDED]/86 sm:inline">{logoLabel}</span>
        </Link>

        <div className="ml-auto flex items-center gap-2">
          <div className="hidden items-center rounded-full border border-[#e7d2ad]/45 bg-[#070707]/88 p-1 pl-3 sm:flex">
            <a href={contactHref} className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#EDEDED]/88 transition hover:text-[#EDEDED]">
              Связаться
            </a>
            <span className="mx-2 h-4 w-px bg-[#e7d2ad]/22" aria-hidden="true" />
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
              href={`mailto:${contactConfig.email}`}
              aria-label="Написать на почту"
              className="grid h-8 w-8 place-items-center rounded-full text-[#EDEDED]/84 transition hover:bg-white/8 hover:text-[#EDEDED]"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>

          <button
            type="button"
            aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#e7d2ad]/45 bg-[#070707]/88 text-[#EDEDED] transition hover:border-[#e7d2ad] hover:bg-[#0b0b0b]"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isOpen && (
          <div className="absolute right-0 top-[calc(100%+12px)] z-50 w-[min(92vw,340px)] overflow-hidden rounded-[18px] border border-[#e7d2ad]/24 bg-[#070707] p-3 shadow-[0_24px_60px_rgba(0,0,0,0.5)]">
            <nav className="grid gap-1">
              {items.map((item) => {
                const isActive = activeHref === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`rounded-[12px] px-3 py-2 text-[13px] font-semibold uppercase tracking-[0.08em] transition ${
                      isActive ? "bg-[#e7d2ad] text-black" : "text-[#EDEDED]/84 hover:bg-white/8 hover:text-[#EDEDED]"
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </nav>

            <div className="mt-3 flex items-center rounded-[12px] border border-[#e7d2ad]/24 bg-[#0b0b0b] p-1 pl-3">
              <a href={contactHref} onClick={() => setIsOpen(false)} className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#EDEDED]/88 transition hover:text-[#EDEDED]">
                Связаться
              </a>
              <span className="mx-2 h-4 w-px bg-[#e7d2ad]/22" aria-hidden="true" />
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
                href={`mailto:${contactConfig.email}`}
                aria-label="Написать на почту"
                className="grid h-8 w-8 place-items-center rounded-full text-[#EDEDED]/84 transition hover:bg-white/8 hover:text-[#EDEDED]"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="flex items-center justify-between gap-5">
      <nav className="flex min-w-0 flex-1 items-center gap-5 overflow-x-auto pb-1 sm:gap-7 md:gap-9">
        {items.map((item) => {
          const isActive = activeHref === item.href

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
