import type { MonthlyQuestionId } from "./types"

type AnimatedStrategyQuestionVisualProps = {
  id: MonthlyQuestionId
}

export function AnimatedStrategyQuestionVisual({ id }: AnimatedStrategyQuestionVisualProps) {
  if (id === "direction") {
    return (
      <svg viewBox="0 0 360 220" className="h-[170px] w-full max-w-[280px]" fill="none" aria-hidden="true">
        <path
          d="M34 182C88 182 88 136 132 136C174 136 176 90 222 90H292"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M34 182C88 182 88 136 132 136C174 136 176 90 222 90H292"
          stroke="rgba(122,146,255,0.65)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="14 12"
        />
        <path
          d="M34 182C94 182 96 158 140 158C182 158 186 116 226 116H292"
          stroke="rgba(255,255,255,0.28)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="3 10"
        />

        <circle cx="34" cy="182" r="10" fill="rgba(255,255,255,0.98)" />
        <circle cx="132" cy="136" r="7" fill="rgba(255,255,255,0.9)" />
        <circle cx="222" cy="90" r="7" fill="rgba(255,255,255,0.92)" />
        <path d="M292 90L274 72" stroke="rgba(255,255,255,0.98)" strokeWidth="6" strokeLinecap="round" />
        <path d="M292 90L274 108" stroke="rgba(255,255,255,0.98)" strokeWidth="6" strokeLinecap="round" />
      </svg>
    )
  }

  if (id === "metrics") {
    return (
      <svg viewBox="0 0 360 220" className="h-[170px] w-full max-w-[280px]" fill="none" aria-hidden="true">
        <rect x="34" y="106" width="292" height="8" rx="4" fill="rgba(255,255,255,0.16)" />
        <rect x="34" y="106" width="204" height="8" rx="4" fill="rgba(122,146,255,0.78)" />
        <circle cx="34" cy="110" r="12" fill="rgba(255,255,255,0.98)" />
        <circle cx="106" cy="110" r="10" fill="rgba(255,255,255,0.95)" />
        <circle cx="178" cy="110" r="10" fill="rgba(255,255,255,0.95)" />
        <circle cx="250" cy="110" r="10" fill="rgba(255,255,255,0.35)" />
        <circle cx="326" cy="110" r="12" fill="rgba(255,255,255,0.25)" />
        <path d="M98 150L104 156L116 142" stroke="rgba(255,255,255,0.98)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M170 150L176 156L188 142" stroke="rgba(255,255,255,0.98)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M242 156H258" stroke="rgba(255,255,255,0.72)" strokeWidth="4" strokeLinecap="round" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 360 220" className="h-[170px] w-full max-w-[280px]" fill="none" aria-hidden="true">
      <path d="M148 62L180 42L212 62L180 82L148 62Z" fill="rgba(255,255,255,0.98)" />
      <path d="M148 62V102L180 122V82L148 62Z" fill="rgba(245,245,245,0.92)" />
      <path d="M212 62V102L180 122V82L212 62Z" fill="rgba(234,234,234,0.92)" />

      <path d="M72 126L104 106L136 126L104 146L72 126Z" fill="rgba(255,255,255,0.98)" />
      <path d="M72 126V166L104 186V146L72 126Z" fill="rgba(245,245,245,0.92)" />
      <path d="M136 126V166L104 186V146L136 126Z" fill="rgba(234,234,234,0.92)" />

      <path d="M236 126L268 106L300 126L268 146L236 126Z" fill="rgba(255,255,255,0.98)" />
      <path d="M236 126V166L268 186V146L236 126Z" fill="rgba(245,245,245,0.92)" />
      <path d="M300 126V166L268 186V146L300 126Z" fill="rgba(234,234,234,0.92)" />
    </svg>
  )
}
