"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import type { BoardResultsPrinciplesContent } from "../data"

type BoardResultsPrinciplesSectionProps = {
  content: BoardResultsPrinciplesContent
}

export function BoardResultsPrinciplesSection({ content }: BoardResultsPrinciplesSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null)
  const hasStartedRef = useRef(false)
  const [isInView, setIsInView] = useState(false)

  const targetValues = useMemo(
    () =>
      content.results.map((item) => {
        const parsed = Number.parseInt(item.value, 10)
        return Number.isNaN(parsed) ? null : parsed
      }),
    [content.results],
  )

  const [animatedValues, setAnimatedValues] = useState<number[]>(
    () => targetValues.map(() => 0),
  )

  useEffect(() => {
    const node = sectionRef.current
    if (!node || hasStartedRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        hasStartedRef.current = true
        setIsInView(true)
        observer.disconnect()
      },
      { threshold: 0.35 },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isInView) return

    let rafId = 0
    const startedAt = performance.now()
    const duration = 1150

    const animate = (now: number) => {
      const elapsed = now - startedAt

      setAnimatedValues((prev) =>
        prev.map((_, index) => {
          const target = targetValues[index]
          if (target === null) return prev[index] ?? 0

          const delay = index * 120
          const progress = Math.min(Math.max((elapsed - delay) / duration, 0), 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          return Math.round(target * eased)
        }),
      )

      if (elapsed < duration + targetValues.length * 120) {
        rafId = requestAnimationFrame(animate)
      }
    }

    rafId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafId)
  }, [isInView, targetValues])

  return (
    <section id="results" ref={sectionRef} className="relative">
      <div className="overflow-hidden rounded-[30px] border border-[#d1b58a]/50 bg-[linear-gradient(180deg,#ebdfc8_0%,#e3d1b1_56%,#d8bf98_100%)] px-6 py-7 md:px-10 md:py-10 lg:px-12 lg:py-12">
        <div className="grid gap-10 lg:grid-cols-[1.06fr_0.94fr] lg:gap-14">
          <div>
            <h2 className="max-w-[13ch] text-balance text-[44px] font-extrabold leading-[1.02] tracking-[-0.03em] text-black md:text-[58px] lg:text-[64px] xl:text-[68px]">
              {content.title}
            </h2>

            <div className="mt-7 border-t border-black/18">
              {content.results.map((item, index) => (
                <div
                  key={`${item.value}-${item.label}`}
                  className="grid grid-cols-[auto_1fr] items-center gap-x-4 border-b border-black/14 py-4 md:grid-cols-[84px_1fr] md:gap-x-6 md:py-5"
                >
                  <p className="text-[34px] font-extrabold leading-[0.92] tracking-[-0.03em] text-black tabular-nums md:text-[38px] lg:text-[40px]">
                    {targetValues[index] === null ? item.value : animatedValues[index]}
                  </p>
                  <p className="text-[18px] font-medium leading-[1.32] text-black/74 md:text-[19px] lg:text-[20px]">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex h-full max-w-[450px] flex-col lg:ml-auto lg:pt-3">
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-black/52 md:text-[13px]">{content.principlesTitle}</p>

            <div className="mt-6 space-y-6 md:space-y-7">
              {content.principles.map((principle) => (
                <p key={principle.lead} className="max-w-[22ch] text-[22px] font-semibold leading-[1.28] tracking-[-0.015em] text-black/86 md:text-[23px] lg:text-[24px]">
                  {principle.lead} — без {principle.suffix}
                </p>
              ))}
            </div>

            <div className="mt-auto pt-14 md:pt-16">
              <div className="max-w-[42ch] border-t border-black/14 pt-6">
                <p className="text-[18px] font-medium leading-[1.5] text-black/64 md:text-[19px] lg:text-[20px]">{content.note}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
