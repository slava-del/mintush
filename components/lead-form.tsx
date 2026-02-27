"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

interface LeadFormProps {
  variant?: "light" | "dark"
}

export function LeadForm({ variant = "dark" }: LeadFormProps) {
  const [value, setValue] = useState("")
  const router = useRouter()

  const isDark = variant === "dark"

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (value.trim()) {
      router.push("/thanks")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          placeholder="Telegram или Email"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
          className={`flex-1 px-4 py-3 text-body-lg border transition-colors focus:outline-none focus:ring-1 ${
            isDark
              ? "bg-transparent border-[#F5F2ED]/20 text-[#F5F2ED] placeholder:text-[#F5F2ED]/30 focus:ring-[#F5F2ED]/40 focus:border-[#F5F2ED]/40"
              : "bg-transparent border-foreground/20 text-foreground placeholder:text-foreground/30 focus:ring-foreground/40 focus:border-foreground/40"
          }`}
        />
        <button
          type="submit"
          className="px-6 py-3 text-small font-medium tracking-wide bg-accent text-accent-foreground hover:bg-[var(--accent-hover)] transition-colors whitespace-nowrap"
        >
          Получить программу
        </button>
      </div>
      <p className={`text-caption ${isDark ? "text-[#F5F2ED]/30" : "text-foreground/30"}`}>
        Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.
        Мы не передаем данные третьим лицам.
      </p>
    </form>
  )
}
