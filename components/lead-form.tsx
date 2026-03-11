"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

interface LeadFormProps {
  variant?: "light" | "dark"
  submitLabel?: string
  borderless?: boolean
  layout?: "default" | "inline"
  className?: string
}

export function LeadForm({
  variant = "dark",
  submitLabel = "Подать заявку",
  borderless = false,
  layout = "default",
  className = "",
}: LeadFormProps) {
  const router = useRouter()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [telegram, setTelegram] = useState("")

  const isDark = variant === "dark"

  const inputBase =
    "w-full px-4 py-3 text-body-lg border transition-colors focus:outline-none focus:ring-1 bg-transparent"

  const inputTone = borderless
    ? isDark
      ? "border-transparent bg-white/8 text-white placeholder:text-white/40 focus:ring-white/0 focus:border-transparent"
      : "border-transparent bg-foreground/6 text-foreground placeholder:text-foreground/40 focus:ring-foreground/0 focus:border-transparent"
    : isDark
      ? "border-white/25 text-white placeholder:text-white/35 focus:ring-white/45 focus:border-white/45"
      : "border-foreground/20 text-foreground placeholder:text-foreground/35 focus:ring-foreground/45 focus:border-foreground/45"

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !email.trim() || !telegram.trim()) return
    router.push("/thanks")
  }

  if (layout === "inline") {
    const inlineInputTone = isDark
      ? "border-[#e7d2ad]/22 bg-[#0c0c0c]/82 text-[#EDEDED] placeholder:text-[#EDEDED]/34 focus:border-[#e7d2ad]/52 focus:ring-[#e7d2ad]/34"
      : "border-foreground/20 bg-foreground/6 text-foreground placeholder:text-foreground/35 focus:border-foreground/45 focus:ring-foreground/25"

    const inlineInputClass = `h-14 w-full rounded-[14px] border px-4 text-[16px] transition-colors focus:outline-none focus:ring-1 ${inlineInputTone}`

    const inlineButtonTone = isDark
      ? "border-[#e7d2ad]/60 bg-[#e7d2ad]/92 text-black hover:bg-[#d9bf98]"
      : "border-foreground/25 bg-foreground text-background hover:bg-foreground/90"

    return (
      <form onSubmit={handleSubmit} className={`w-full ${className}`}>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_auto]">
          <input
            type="text"
            placeholder="Имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className={inlineInputClass}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={inlineInputClass}
          />
          <input
            type="text"
            placeholder="Telegram"
            value={telegram}
            onChange={(e) => setTelegram(e.target.value)}
            required
            className={inlineInputClass}
          />
          <button
            type="submit"
            className={`inline-flex h-14 items-center justify-center rounded-[14px] border px-6 text-[14px] font-semibold uppercase tracking-[0.08em] transition-colors xl:px-7 ${inlineButtonTone}`}
          >
            {submitLabel}
          </button>
        </div>
        <p className={`mt-3 text-[12px] leading-[1.4] ${isDark ? "text-[#EDEDED]/38" : "text-foreground/40"}`}>
          Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.
        </p>
      </form>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={`flex max-w-xl flex-col gap-4 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <input
          type="text"
          placeholder="Имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className={`${inputBase} ${inputTone}`}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={`${inputBase} ${inputTone}`}
        />
        <input
          type="text"
          placeholder="Telegram"
          value={telegram}
          onChange={(e) => setTelegram(e.target.value)}
          required
          className={`${inputBase} ${inputTone}`}
        />
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <p className={`text-caption ${isDark ? "text-white/35" : "text-foreground/35"}`}>
          Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.
        </p>
        <button
          type="submit"
          className="px-6 py-3 text-small font-medium tracking-wide bg-accent text-accent-foreground hover:bg-[var(--accent-hover)] transition-colors"
        >
          {submitLabel}
        </button>
      </div>
    </form>
  )
}
