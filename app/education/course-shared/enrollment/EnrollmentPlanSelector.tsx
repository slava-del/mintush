"use client"

import { CheckIcon } from "lucide-react"
import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import type { TariffCard } from "../types"

type EnrollmentPlanSelectorProps = {
  tariffCards: TariffCard[]
  selectedTariffId: string
  onSelectTariff: (tariffId: string) => void
  isOpen?: boolean
}

export function EnrollmentPlanSelector({
  tariffCards,
  selectedTariffId,
  onSelectTariff,
  isOpen = true,
}: EnrollmentPlanSelectorProps) {
  const railRef = useRef<HTMLDivElement>(null)
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({})

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const rail = railRef.current
    const activeButton = buttonRefs.current[selectedTariffId]

    if (!rail || !activeButton || !window.matchMedia("(max-width: 639px)").matches) {
      return
    }

    const centerActiveButton = () => {
      activeButton.scrollIntoView({
        block: "nearest",
        inline: "center",
        behavior: "auto",
      })
    }

    const frameId = window.requestAnimationFrame(() => {
      centerActiveButton()

      window.requestAnimationFrame(() => {
        centerActiveButton()
      })
    })

    const resizeObserver = new ResizeObserver(() => {
      centerActiveButton()
    })

    resizeObserver.observe(rail)
    resizeObserver.observe(activeButton)

    return () => {
      window.cancelAnimationFrame(frameId)
      resizeObserver.disconnect()
    }
  }, [isOpen, selectedTariffId])

  return (
    <div
      ref={railRef}
      className="mt-6 grid snap-x snap-mandatory auto-cols-[calc(100%-2.5rem)] grid-flow-col gap-3 overflow-x-auto px-5 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:grid-flow-row sm:grid-cols-3 sm:auto-cols-auto sm:gap-3 sm:overflow-visible sm:px-0 sm:[scrollbar-width:auto]"
    >
      {tariffCards.map((tariff) => {
        const isActive = tariff.id === selectedTariffId

        return (
          <button
            key={tariff.id}
            ref={(node) => {
              buttonRefs.current[tariff.id] = node
            }}
            type="button"
            onClick={() => onSelectTariff(tariff.id)}
            className={cn(
              "relative w-full snap-center overflow-hidden rounded-[18px] border px-3 py-3 text-left transition duration-200 sm:px-4 sm:py-4 sm:snap-none",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6f8df9]/40",
              isActive
                ? "border-[#d4b174]/58 bg-[linear-gradient(180deg,rgba(17,20,31,0.98),rgba(9,10,15,0.98))] shadow-[0_0_0_1px_rgba(212,177,116,0.16)_inset,0_0_30px_rgba(98,130,255,0.14)]"
                : "border-[#d4b174]/14 bg-[linear-gradient(180deg,rgba(12,12,14,0.95),rgba(8,8,10,0.95))] hover:border-[#d4b174]/30 hover:bg-[linear-gradient(180deg,rgba(14,14,18,0.98),rgba(9,9,12,0.98))]",
            )}
          >
            {isActive && (
              <span className="absolute right-2.5 top-2.5 inline-flex h-5 w-5 items-center justify-center rounded-full border border-[#87a4ff]/34 bg-[#151d36] text-[#dbe5ff]">
                <CheckIcon className="h-3 w-3" />
              </span>
            )}
            <p className="min-h-[1.35rem] pr-7 text-[11px] font-semibold leading-[1.2] tracking-[-0.01em] whitespace-nowrap text-[#d4b174]/86 sm:text-[12px]">
              {tariff.modalTitle ?? tariff.title}
            </p>
            <p className="mt-2.5 text-[24px] font-extrabold leading-none tracking-[-0.04em] text-[#F3F1EC] sm:mt-3 sm:text-[28px]">
              {tariff.price}
            </p>
            <p className="mt-1.5 text-[12px] leading-[1.38] text-[#EDEDED]/54 sm:mt-2 sm:text-[13px]">{tariff.intro}</p>
          </button>
        )
      })}
    </div>
  )
}
