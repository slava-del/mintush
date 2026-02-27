"use client"

import { useState } from "react"
import Link from "next/link"

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
      <nav className="flex items-center justify-between px-6 py-5 md:px-10 lg:px-16">
        {/* Logo / monogram */}
        <Link href="/" className="text-[#F5F2ED] font-serif text-xl tracking-tight">
          АВ
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/courses"
            className="text-[#F5F2ED] text-small tracking-wide hover:opacity-70 transition-opacity"
          >
            Курсы
          </Link>
          <Link
            href="/about"
            className="text-[#F5F2ED] text-small tracking-wide hover:opacity-70 transition-opacity"
          >
            О наставнике
          </Link>
          <span className="text-[#F5F2ED]/40 text-caption">
            RU / EN
          </span>
          <Link
            href="#form"
            className="text-[#F5F2ED] text-small border border-[#F5F2ED]/30 px-5 py-2 hover:bg-[#F5F2ED]/10 transition-colors"
          >
            Получить программу
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#F5F2ED] flex flex-col gap-1.5"
          aria-label="Меню"
        >
          <span className={`block w-6 h-px bg-[#F5F2ED] transition-transform ${open ? "rotate-45 translate-y-[4px]" : ""}`} />
          <span className={`block w-6 h-px bg-[#F5F2ED] transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-[#F5F2ED] transition-transform ${open ? "-rotate-45 -translate-y-[4px]" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden fixed inset-0 top-16 bg-[#1A1A1A]/95 backdrop-blur-sm flex flex-col items-start px-6 pt-10 gap-6 z-40">
          <Link href="/courses" onClick={() => setOpen(false)} className="text-[#F5F2ED] text-h3 font-serif">
            Курсы
          </Link>
          <Link href="/about" onClick={() => setOpen(false)} className="text-[#F5F2ED] text-h3 font-serif">
            О наставнике
          </Link>
          <Link href="#form" onClick={() => setOpen(false)} className="text-[#F5F2ED] text-body-lg mt-4 border border-[#F5F2ED]/30 px-6 py-3">
            Получить программу
          </Link>
          <span className="text-[#F5F2ED]/40 text-caption mt-auto mb-10">RU / EN</span>
        </div>
      )}
    </header>
  )
}
