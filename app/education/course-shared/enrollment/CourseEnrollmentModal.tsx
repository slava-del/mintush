"use client"

import * as DialogPrimitive from "@radix-ui/react-dialog"
import { XIcon } from "lucide-react"
import { useRouter } from "next/navigation"
import { type FormEvent, useState, useTransition } from "react"
import { Dialog, DialogClose, DialogOverlay, DialogPortal, DialogTitle } from "@/components/ui/dialog"
import type { EnrollmentPanelCopy, TariffCard } from "../types"
import { EnrollmentForm, type EnrollmentFormState } from "./EnrollmentForm"
import { EnrollmentPlanSelector } from "./EnrollmentPlanSelector"
import { EnrollmentSummaryPanel } from "./EnrollmentSummaryPanel"

type CourseEnrollmentModalProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  tariffCards: TariffCard[]
  selectedTariffId: string
  onSelectTariff: (tariffId: string) => void
  enrollmentPanel: EnrollmentPanelCopy
}

const initialFormState: EnrollmentFormState = {
  firstName: "",
  lastName: "",
  telegram: "",
  email: "",
}

export function CourseEnrollmentModal({
  open,
  onOpenChange,
  tariffCards,
  selectedTariffId,
  onSelectTariff,
  enrollmentPanel,
}: CourseEnrollmentModalProps) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [formState, setFormState] = useState<EnrollmentFormState>(initialFormState)

  const selectedTariff = tariffCards.find((tariff) => tariff.id === selectedTariffId) ?? tariffCards[0]
  const isFormValid = Object.values(formState).every((value) => value.trim().length > 0)

  const handleFieldChange = (field: keyof EnrollmentFormState, value: string) => {
    setFormState((current) => ({ ...current, [field]: value }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!selectedTariff || !isFormValid || isPending) {
      return
    }

    onOpenChange(false)

    startTransition(() => {
      router.push("/thanks")
    })
  }

  if (!selectedTariff) {
    return null
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay className="bg-[#020202]/74 backdrop-blur-[7px]" />
        <DialogPrimitive.Content className="fixed left-1/2 top-1/2 z-50 max-h-[calc(100vh-1rem)] w-[min(1120px,calc(100vw-1rem))] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-[30px] border border-[#d4b174]/26 bg-[linear-gradient(180deg,rgba(9,9,11,0.98)_0%,rgba(7,7,9,0.98)_100%)] text-[#EDEDED] shadow-[0_40px_140px_rgba(0,0,0,0.58),0_0_0_1px_rgba(212,177,116,0.05)_inset] duration-200 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 focus:outline-none lg:h-[min(700px,calc(100vh-2rem))] lg:max-h-[min(700px,calc(100vh-2rem))] lg:overflow-hidden">
          <DialogClose asChild>
            <button
              type="button"
              className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#d4b174]/20 bg-[#0c0c0f]/82 text-[#EDEDED]/72 transition hover:border-[#d4b174]/42 hover:text-[#EDEDED] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6f8df9]/38 lg:hidden"
              aria-label="Закрыть"
            >
              <XIcon className="h-4 w-4" />
            </button>
          </DialogClose>

          <div className="flex flex-col lg:grid lg:h-full lg:grid-cols-[minmax(0,1.06fr)_340px]">
            <div className="flex min-h-0 min-w-0 flex-col px-4 pb-4 pt-6 sm:px-5 sm:pb-5 sm:pt-6 lg:pr-7">
              <div className="flex items-start gap-4">
                <div className="max-w-[34rem] pr-10 lg:pr-0">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#d4b174]/72">ОФОРМЛЕНИЕ</p>
                  <DialogTitle className="mt-3 text-[clamp(24px,4vw,40px)] font-extrabold leading-[1.02] tracking-[-0.04em] text-[#F3F1EC]">
                    Выберите пакет и оставьте контакты
                  </DialogTitle>
                  <p className="mt-3 max-w-[38rem] text-[14px] leading-[1.5] text-[#EDEDED]/60 sm:text-[15px]">
                    {enrollmentPanel.summary}
                  </p>
                </div>
              </div>

              <EnrollmentPlanSelector
                tariffCards={tariffCards}
                selectedTariffId={selectedTariff.id}
                onSelectTariff={onSelectTariff}
                isOpen={open}
              />

              <EnrollmentForm
                formState={formState}
                onFieldChange={handleFieldChange}
                onSubmit={handleSubmit}
                isFormValid={isFormValid}
                isPending={isPending}
                helperText={enrollmentPanel.helperText}
              />
            </div>

            <div className="relative hidden overflow-hidden lg:flex lg:min-h-0 lg:flex-col lg:border-l lg:border-[#d4b174]/14 lg:px-6 lg:pb-6 lg:pt-6">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_84%_16%,rgba(82,121,255,0.16),transparent_30%),radial-gradient(circle_at_88%_88%,rgba(212,177,116,0.16),transparent_34%)]"
              />

              <DialogClose asChild>
                <button
                  type="button"
                  className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d4b174]/20 bg-[#0c0c0f]/82 text-[#EDEDED]/72 transition hover:border-[#d4b174]/42 hover:text-[#EDEDED] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6f8df9]/38"
                  aria-label="Закрыть"
                >
                  <XIcon className="h-4 w-4" />
                </button>
              </DialogClose>

              <EnrollmentSummaryPanel tariff={selectedTariff} enrollmentPanel={enrollmentPanel} />
            </div>
          </div>
        </DialogPrimitive.Content>
      </DialogPortal>
    </Dialog>
  )
}
