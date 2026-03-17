"use client"

import { createContext, type ReactNode, useContext, useEffect, useState } from "react"
import { CourseEnrollmentModal } from "./enrollment/CourseEnrollmentModal"
import type { EnrollmentPanelCopy, TariffCard } from "./types"

type CourseEnrollmentProviderProps = {
  tariffCards: TariffCard[]
  enrollmentPanel: EnrollmentPanelCopy
  children: ReactNode
}

type CourseEnrollmentContextValue = {
  openEnrollment: (tariffId?: string) => void
  tariffCards: TariffCard[]
}

const CourseEnrollmentContext = createContext<CourseEnrollmentContextValue | null>(null)

export function CourseEnrollmentProvider({ tariffCards, enrollmentPanel, children }: CourseEnrollmentProviderProps) {
  const defaultTariffId = tariffCards.find((tariff) => tariff.isFeatured)?.id ?? tariffCards[0]?.id ?? ""
  const [isOpen, setIsOpen] = useState(false)
  const [selectedTariffId, setSelectedTariffId] = useState(defaultTariffId)

  useEffect(() => {
    setSelectedTariffId((current) => (tariffCards.some((tariff) => tariff.id === current) ? current : defaultTariffId))
  }, [defaultTariffId, tariffCards])

  const openEnrollment = (tariffId = defaultTariffId) => {
    if (tariffId) {
      setSelectedTariffId(tariffId)
    }
    setIsOpen(true)
  }

  return (
    <CourseEnrollmentContext.Provider value={{ openEnrollment, tariffCards }}>
      {children}
      <CourseEnrollmentModal
        open={isOpen}
        onOpenChange={setIsOpen}
        tariffCards={tariffCards}
        selectedTariffId={selectedTariffId}
        onSelectTariff={setSelectedTariffId}
        enrollmentPanel={enrollmentPanel}
      />
    </CourseEnrollmentContext.Provider>
  )
}

export function useCourseEnrollment() {
  const context = useContext(CourseEnrollmentContext)

  if (!context) {
    throw new Error("useCourseEnrollment must be used within CourseEnrollmentProvider")
  }

  return context
}
