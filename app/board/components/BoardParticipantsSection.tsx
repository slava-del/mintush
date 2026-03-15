"use client"

import { useEffect, useRef, useState } from "react"
import type { BoardParticipantsContent } from "../data"

type BoardParticipantsSectionProps = {
  content: BoardParticipantsContent
}

export function BoardParticipantsSection({ content }: BoardParticipantsSectionProps) {
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
      { threshold: 0.28, rootMargin: "0px 0px -10% 0px" },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="participants" ref={sectionRef} className="relative">
      <div className="border-t border-[#e7d2ad]/14 pt-14 md:pt-16 lg:pt-20">
        <h2 className="max-w-[13ch] text-[44px] font-bold leading-[1.03] tracking-[-0.028em] text-[#EDEDED] md:text-[58px] lg:text-[64px] xl:text-[68px]">
          {content.title}
        </h2>

        <p className="mt-6 max-w-[62ch] text-[18px] leading-[1.6] text-[#EDEDED]/70 md:text-[20px] lg:text-[21px]">
          {content.subtitle}
        </p>

        <div className="mt-12 grid gap-y-10 lg:mt-16 lg:grid-cols-3 lg:gap-x-10 xl:gap-x-12">
          {content.groups.map((group, index) => (
            <article
              key={group.title}
              style={{ transitionDelay: isVisible ? `${index * 150}ms` : "0ms" }}
              className={`${index === 0 ? "" : "lg:border-l lg:border-[#e7d2ad]/12 lg:pl-8 xl:pl-10"} transition-all duration-700 ease-out motion-reduce:transition-none ${isVisible ? "translate-y-0 opacity-100 blur-0" : "translate-y-6 opacity-0 blur-[2px]"}`}
            >
              <p className="text-[28px] font-semibold leading-none tracking-[-0.02em] text-[#dcc8a4] md:text-[32px]">
                {group.index}
              </p>
              <h3 className="mt-4 max-w-[16ch] text-[28px] font-semibold leading-[1.14] tracking-[-0.02em] text-[#f4eee3] md:text-[32px]">
                {group.title}
              </h3>
              <p className="mt-5 max-w-[34ch] text-[17px] leading-[1.7] text-[#EDEDED]/66 md:text-[18px]">
                {group.text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-14 border-y border-[#e7d2ad]/16 py-10 md:mt-16 md:py-12 lg:mt-20 lg:py-14">
          <blockquote className="max-w-[48ch] text-[28px] font-medium leading-[1.34] tracking-[-0.016em] text-[#f1ebe0] md:text-[34px] lg:text-[40px]">
            {content.testimonial.quote}
          </blockquote>
          <p className="mt-6 w-full text-right text-[15px] font-medium tracking-[0.02em] text-[#d1b58a]/78 md:text-[16px]">
            {content.testimonial.attribution}
          </p>
        </div>
      </div>
    </section>
  )
}
