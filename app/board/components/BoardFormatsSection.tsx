"use client"

import { useEffect, useRef, useState } from "react"
import type { BoardFormatsContent } from "../data"

type BoardFormatsSectionProps = {
  content: BoardFormatsContent
}

export function BoardFormatsSection({ content }: BoardFormatsSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null)
  const hasAnimatedRef = useRef(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = sectionRef.current
    if (!node || hasAnimatedRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        hasAnimatedRef.current = true
        setIsVisible(true)
        observer.disconnect()
      },
      { threshold: 0.28, rootMargin: "0px 0px -12% 0px" },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="formats" ref={sectionRef} className="relative">
      <div className="px-1 py-1 md:px-0">
        <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-12">
          <h2 className="max-w-[16ch] text-[44px] font-extrabold leading-[1.02] tracking-[-0.03em] text-[#EDEDED] md:text-[58px] lg:text-[64px] xl:text-[68px]">
            {content.title}
          </h2>
          {content.subtitle ? (
            <p className="max-w-[46ch] text-[20px] leading-[1.34] text-[#EDEDED]/66 md:text-[22px] lg:text-[24px] lg:pt-2">
              {content.subtitle}
            </p>
          ) : null}
        </div>

        <div className="mt-7 border-t border-[#e7d2ad]/20 md:mt-8">
          {content.rows.map((row, index) => (
            <article
              key={row.title}
              style={{ transitionDelay: isVisible ? `${index * 140}ms` : "0ms" }}
              className={`grid gap-6 border-b border-[#e7d2ad]/14 py-9 transition-all duration-700 ease-out motion-reduce:transition-none md:gap-7 md:py-10 lg:grid-cols-[4fr_6fr] lg:gap-12 lg:py-11 ${
                isVisible ? "translate-y-0 opacity-100 blur-0" : "translate-y-7 opacity-0 blur-[2px]"
              }`}
            >
              <div>
                <h3 className="max-w-[20ch] text-[32px] font-extrabold leading-[1.03] tracking-[-0.024em] text-[#EDEDED] md:text-[36px] lg:text-[40px]">
                  {row.title}
                </h3>
                {row.microLabel ? (
                  <p className="mt-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#e7d2ad]/74 md:text-[13px]">
                    {row.microLabel}
                  </p>
                ) : null}
              </div>

              <ul className="max-w-[540px] space-y-3.5 md:space-y-4">
                {row.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="relative pl-5 text-[18px] leading-[1.42] text-[#EDEDED]/76 md:text-[19px] lg:text-[20px]"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-[0.64em] inline-block h-px w-3 bg-[#e7d2ad]/52"
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
