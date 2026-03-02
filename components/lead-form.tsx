"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

interface LeadFormProps {
  variant?: "light" | "dark"
  submitLabel?: string
}

export function LeadForm({ variant = "dark", submitLabel = "Подать заявку" }: LeadFormProps) {
  const router = useRouter()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [telegram, setTelegram] = useState("")

  const isDark = variant === "dark"

  const inputBase =
    "w-full px-4 py-3 text-body-lg border transition-colors focus:outline-none focus:ring-1 bg-transparent"

  const inputTone = isDark
    ? "border-white/25 text-white placeholder:text-white/35 focus:ring-white/45 focus:border-white/45"
    : "border-foreground/20 text-foreground placeholder:text-foreground/35 focus:ring-foreground/45 focus:border-foreground/45"

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !email.trim() || !telegram.trim()) return
    router.push("/thanks")
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-xl">
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
