"use client"

import { useEffect, useRef, useState } from "react"

type PenUnderlineOnViewProps = {
  children: string
}

export function PenUnderlineOnView({ children }: PenUnderlineOnViewProps) {
  const containerRef = useRef<HTMLSpanElement | null>(null)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const node = containerRef.current
    if (!node || isActive) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setIsActive(true)
        observer.disconnect()
      },
      {
        threshold: 0.5,
        rootMargin: "0px 0px -8% 0px",
      }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [isActive])

  return (
    <span ref={containerRef} className="inline-flex flex-col align-baseline">
      <span className="px-0.5">{children}</span>
      <span aria-hidden="true" className="pen-underline-track mt-1">
        <span className={`pen-underline-ink ${isActive ? "is-active" : ""}`} />
        <span className={`pen-underline-tip ${isActive ? "is-active" : ""}`} />
      </span>
    </span>
  )
}
