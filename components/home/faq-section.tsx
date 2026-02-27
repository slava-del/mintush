"use client"

import { useState } from "react"
import { faq } from "@/lib/data"

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="px-6 md:px-10 lg:px-16 py-24 md:py-32 lg:py-40">
      <div className="max-w-4xl mx-auto">
        {/* Caption */}
        <p className="text-caption text-muted-foreground mb-6">Частые вопросы</p>
        <h2 className="text-h1 font-serif text-foreground mb-16 md:mb-24 text-balance">
          Возражения
        </h2>

        {/* FAQ items */}
        <div className="flex flex-col divide-y divide-border">
          {faq.map((item, i) => (
            <div key={i} className="py-6 md:py-8">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-start justify-between gap-6 text-left"
                aria-expanded={openIndex === i}
              >
                <div className="flex items-start gap-4 md:gap-8">
                  <span className="text-caption text-muted-foreground mt-1 font-mono flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-h3 font-serif text-foreground">
                    &laquo;{item.question}&raquo;
                  </span>
                </div>
                <span className="text-h3 text-muted-foreground flex-shrink-0 mt-0.5 transition-transform duration-300" style={{ transform: openIndex === i ? "rotate(45deg)" : "rotate(0deg)" }}>
                  +
                </span>
              </button>
              {openIndex === i && (
                <div className="mt-4 ml-8 md:ml-16">
                  <p className="text-body-lg text-muted-foreground leading-relaxed max-w-xl">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
