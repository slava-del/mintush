"use client"

import type { EnrollmentPanelCopy, TariffCard } from "../types"

type EnrollmentSummaryPanelProps = {
  tariff: TariffCard
  enrollmentPanel: EnrollmentPanelCopy
  compact?: boolean
}

export function EnrollmentSummaryPanel({ tariff, enrollmentPanel, compact = false }: EnrollmentSummaryPanelProps) {
  const summaryItems = tariff.includes.slice(0, compact ? 2 : 3)

  if (compact) {
    return (
      <div className="mt-4 rounded-[18px] border border-[#d4b174]/14 bg-[linear-gradient(180deg,rgba(11,11,15,0.96),rgba(8,9,13,0.96))] px-4 py-4 lg:hidden">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[12px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#d4b174]/78">
              {tariff.modalTitle ?? tariff.title}
            </p>
            <p className="mt-2 text-[24px] font-extrabold leading-none tracking-[-0.04em] text-[#F4F2ED]">{tariff.price}</p>
          </div>
          <p className="max-w-[16ch] text-right text-[12px] leading-[1.4] text-[#EDEDED]/56">{tariff.intro}</p>
        </div>
      </div>
    )
  }

  return (
    <aside className="relative hidden h-full px-1 pb-1 pt-14 lg:flex lg:flex-col">
      <p className="relative text-[11px] font-semibold uppercase tracking-[0.18em] text-[#d4b174]/72">
        {enrollmentPanel.programTag}
      </p>

      <div className="relative mt-4 inline-flex items-center self-start rounded-full border border-[#d4b174]/18 bg-[#111114]/72 px-3 py-1 text-[12px] font-semibold tracking-[-0.01em] text-[#EDEDED]/64">
        {tariff.modalTitle ?? tariff.title}
      </div>

      <p className="relative mt-4 text-[38px] font-extrabold leading-none tracking-[-0.05em] text-[#F4F2ED]">{tariff.price}</p>
      <p className="relative mt-3 text-[18px] font-semibold leading-[1.25] tracking-[-0.02em] text-[#F4F2ED]">
        {enrollmentPanel.programName}
      </p>
      <p className="relative mt-3 text-[14px] leading-[1.55] text-[#EDEDED]/60">{tariff.intro}</p>

      <div className="relative mt-5 rounded-[20px] border border-[#d4b174]/14 bg-[#0c0d12]/74 p-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#d4b174]/72">Что даёт пакет</p>
        <div className="mt-3 grid gap-2.5">
          {summaryItems.map((item) => (
            <div key={item} className="flex items-start gap-3 text-[13px] leading-[1.45] text-[#EDEDED]/76">
              <span className="mt-[0.42rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#d4b174]" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <p className="relative mt-4 rounded-[18px] border border-[#87a4ff]/16 bg-[#0d1324]/72 px-4 py-3 text-[12px] leading-[1.45] text-[#EDEDED]/66">
        {enrollmentPanel.note}
      </p>

      <blockquote className="relative mt-auto border-l border-[#d4b174]/24 pl-4 pt-4 text-[14px] leading-[1.55] text-[#EDEDED]/74">
        {enrollmentPanel.quote}
      </blockquote>
    </aside>
  )
}
