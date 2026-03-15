"use client"

import { useLayoutEffect, useMemo, useRef, useState } from "react"
import type { RoleKey, RoleOption, RoleProfile } from "../types"

type TeamGapSectionProps = {
  roleOptions: RoleOption[]
  selectedRole: RoleKey
  profile: RoleProfile
  onSelectRole: (role: RoleKey) => void
}

export function TeamGapSection({ roleOptions, selectedRole, profile, onSelectRole }: TeamGapSectionProps) {
  const panelRef = useRef<HTMLDivElement | null>(null)
  const buttonRefs = useRef(new Map<RoleKey, HTMLButtonElement | null>())
  const pendingRectsRef = useRef<Map<RoleKey, DOMRect> | null>(null)
  const [islandOrigin, setIslandOrigin] = useState({ x: 50, y: 0 })

  const orderedRoleOptions = useMemo(() => {
    const selectedOption = roleOptions.find((option) => option.key === selectedRole)
    if (!selectedOption) return roleOptions

    return [selectedOption, ...roleOptions.filter((option) => option.key !== selectedRole)]
  }, [roleOptions, selectedRole])

  const captureButtonRects = () => {
    const snapshot = new Map<RoleKey, DOMRect>()

    roleOptions.forEach((option) => {
      const element = buttonRefs.current.get(option.key)
      if (!element) return
      snapshot.set(option.key, element.getBoundingClientRect())
    })

    return snapshot
  }

  const handleRoleSelect = (role: RoleKey) => {
    if (role === selectedRole) return
    pendingRectsRef.current = captureButtonRects()
    onSelectRole(role)
  }

  useLayoutEffect(() => {
    const previousRects = pendingRectsRef.current
    pendingRectsRef.current = null
    if (!previousRects) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const frames: number[] = []

    orderedRoleOptions.forEach((option) => {
      const element = buttonRefs.current.get(option.key)
      const previousRect = previousRects.get(option.key)
      if (!element || !previousRect) return

      const nextRect = element.getBoundingClientRect()
      const deltaX = previousRect.left - nextRect.left
      const deltaY = previousRect.top - nextRect.top

      if (Math.abs(deltaX) < 0.4 && Math.abs(deltaY) < 0.4) return

      element.style.transition = "none"
      element.style.transform = `translate3d(${deltaX}px, ${deltaY}px, 0)`
      element.style.willChange = "transform"

      const frame = window.requestAnimationFrame(() => {
        element.style.transition = "transform 560ms cubic-bezier(0.22, 1, 0.36, 1)"
        element.style.transform = "translate3d(0, 0, 0)"
      })

      frames.push(frame)

      element.addEventListener(
        "transitionend",
        () => {
          element.style.transition = ""
          element.style.willChange = ""
        },
        { once: true }
      )
    })

    return () => {
      frames.forEach((frame) => window.cancelAnimationFrame(frame))
    }
  }, [orderedRoleOptions])

  useLayoutEffect(() => {
    const panel = panelRef.current
    const activeButton = buttonRefs.current.get(selectedRole)
    if (!panel || !activeButton) return

    const panelRect = panel.getBoundingClientRect()
    const buttonRect = activeButton.getBoundingClientRect()
    const rawX = ((buttonRect.left + buttonRect.width / 2 - panelRect.left) / Math.max(panelRect.width, 1)) * 100
    const rawY = ((buttonRect.top + buttonRect.height - panelRect.top) / Math.max(panelRect.height, 1)) * 100

    const clampedX = Math.min(95, Math.max(5, rawX))
    const clampedY = Math.min(48, Math.max(0, rawY))
    setIslandOrigin({ x: clampedX, y: clampedY })
  }, [orderedRoleOptions, selectedRole])

  return (
    <section data-section-id="team" className="px-6 pb-12 md:px-10 md:pb-14">
      <div
        ref={panelRef}
        className="mx-auto max-w-5xl rounded-[24px] border border-white/10 bg-[#030303] p-6 md:p-9"
      >
        <h3 className="text-[32px] font-extrabold leading-[1.03] tracking-[-0.03em] text-white md:text-[46px]">
          Чего не хватает в управлении?
        </h3>

        <div className="mt-5 flex flex-wrap gap-2">
          {orderedRoleOptions.map((option) => {
            const active = selectedRole === option.key
            return (
              <button
                key={option.key}
                type="button"
                ref={(element) => {
                  buttonRefs.current.set(option.key, element)
                }}
                onClick={() => handleRoleSelect(option.key)}
                aria-pressed={active}
                className={`team-gap-tab rounded-[999px] border px-4 py-2 text-[12px] font-semibold tracking-[0.02em] transition-colors duration-300 ${
                  active
                    ? "border-[#e7d2ad] bg-[#e7d2ad] text-black"
                    : "border-white/22 text-white/75 hover:border-white/45 hover:text-white"
                }`}
              >
                {option.label}
              </button>
            )
          })}
        </div>

        <div
          key={selectedRole}
          className="team-gap-island mt-6"
          style={{ transformOrigin: `${islandOrigin.x}% ${islandOrigin.y}%` }}
        >
          <p className="team-gap-caption text-[11px] font-semibold uppercase tracking-[0.1em] text-white/42">Не хватает:</p>
          <p className="team-gap-gapline mt-2 text-[20px] leading-[1.3] text-white/86 md:text-[25px]">{profile.gap}</p>
          <ul className="mt-5 list-disc space-y-3 pl-6 marker:text-[#e7d2ad]">
            {profile.bullets.map((item, index) => (
              <li
                key={item}
                className="team-gap-bullet text-[17px] font-medium leading-[1.34] text-[#e7d2ad] md:text-[21px]"
                style={{ animationDelay: `${170 + index * 70}ms` }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
