"use client"

import { useState } from "react"
import type { FaqItem } from "./types"

type FaqSectionProps = {
  faqItems: FaqItem[]
}

export function FaqSection({ faqItems }: FaqSectionProps) {
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({})

  const toggleItem = (index: number) => {
    setOpenItems((prev) => ({ ...prev, [index]: !prev[index] }))
  }

  return (
    <section id="faq" className="mx-auto max-w-[1380px] px-6 pb-14 md:px-12 md:pb-16">
      <h2 className="text-[34px] font-extrabold leading-[1.02] tracking-[-0.03em] text-[#EDEDED] md:text-[44px]">FAQ</h2>
      <div className="mt-5 border-t border-[#e7d2ad]/18">
        {faqItems.map((item, index) => {
          const isOpen = Boolean(openItems[index])

          return (
            <article
              key={item.question}
              className={`faq-item border-b border-[#e7d2ad]/14 ${isOpen ? "is-open" : ""}`}
            >
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => toggleItem(index)}
                className="faq-trigger flex w-full cursor-pointer items-start gap-4 py-5 text-left"
              >
                <span className="flex-1 text-[19px] font-semibold leading-[1.34] text-[#EDEDED]">{item.question}</span>
                <span
                  aria-hidden="true"
                  className={`faq-arrow mt-1 inline-flex shrink-0 items-center justify-center text-[#EDEDED]/62 ${
                    isOpen ? "is-open" : ""
                  }`}
                >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2.1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                </span>
              </button>
              <div className={`faq-content-grid ${isOpen ? "is-open" : ""}`}>
                <div className="faq-content-inner">
                  <p className={`pr-12 text-[17px] leading-[1.42] text-[#EDEDED]/82 ${isOpen ? "pb-5" : "pb-0"}`}>{item.answer}</p>
                </div>
              </div>
            </article>
          )
        })}
      </div>

      <style>{`
        .faq-item {
          transition: background-color 260ms ease, border-color 260ms ease, box-shadow 320ms ease;
        }

        .faq-item[open] {
          background-color: transparent;
          border-color: rgba(231, 210, 173, 0.24);
          box-shadow: none;
        }

        .faq-trigger {
          background: transparent;
          border: 0;
          outline: none;
        }

        .faq-trigger:focus-visible {
          box-shadow: inset 0 0 0 2px rgba(231, 210, 173, 0.34);
          border-radius: 8px;
        }

        .faq-arrow {
          transition: transform 280ms ease, color 280ms ease;
        }

        .faq-arrow.is-open {
          transform: rotate(90deg);
          color: rgba(231, 210, 173, 0.92);
        }

        .faq-content-grid {
          display: grid;
          grid-template-rows: 0fr;
          opacity: 0;
          transition: grid-template-rows 360ms cubic-bezier(0.22, 1, 0.36, 1), opacity 240ms ease;
        }

        .faq-content-grid.is-open {
          grid-template-rows: 1fr;
          opacity: 1;
        }

        .faq-content-inner {
          overflow: hidden;
        }

        @media (prefers-reduced-motion: reduce) {
          .faq-item,
          .faq-arrow,
          .faq-content-grid {
            transition: none;
          }
        }
      `}</style>
    </section>
  )
}
