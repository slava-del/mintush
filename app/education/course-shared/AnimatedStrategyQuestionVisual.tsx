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
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M34 182C88 182 88 136 132 136C174 136 176 90 222 90H292"
          stroke="rgba(122,146,255,0.88)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="18 16"
          strokeDashoffset="0"
        >
          <animate attributeName="stroke-dashoffset" from="0" to="-204" dur="3.6s" repeatCount="indefinite" />
        </path>
        <path
          d="M34 182C94 182 96 158 140 158C182 158 186 116 226 116H292"
          stroke="rgba(255,255,255,0.32)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="3 10"
        />

        <circle cx="34" cy="182" r="10" fill="rgba(255,255,255,0.98)">
          <animate attributeName="r" values="9;11;9" dur="2.2s" repeatCount="indefinite" />
        </circle>
        <circle cx="132" cy="136" r="7" fill="rgba(255,255,255,0.88)">
          <animate attributeName="opacity" values="0.45;1;0.45" dur="1.8s" repeatCount="indefinite" />
        </circle>
        <circle cx="222" cy="90" r="7" fill="rgba(255,255,255,0.92)">
          <animate attributeName="opacity" values="0.45;1;0.45" dur="1.8s" begin="0.6s" repeatCount="indefinite" />
        </circle>
        <path d="M292 90L274 72" stroke="rgba(255,255,255,0.98)" strokeWidth="6" strokeLinecap="round" />
        <path d="M292 90L274 108" stroke="rgba(255,255,255,0.98)" strokeWidth="6" strokeLinecap="round" />
      </svg>
    )
  }

  if (id === "metrics") {
    return (
      <svg viewBox="0 0 360 220" className="h-[170px] w-full max-w-[280px]" fill="none" aria-hidden="true">
        <rect x="34" y="106" width="292" height="8" rx="4" fill="rgba(255,255,255,0.16)" />
        <rect x="34" y="106" width="180" height="8" rx="4" fill="rgba(122,146,255,0.9)">
          <animate attributeName="width" values="152;250;152" dur="3.6s" repeatCount="indefinite" />
        </rect>
        <circle cx="34" cy="110" r="12" fill="rgba(255,255,255,0.98)">
          <animate attributeName="r" values="11;12.5;11" dur="1.8s" repeatCount="indefinite" />
        </circle>
        <circle cx="106" cy="110" r="10" fill="rgba(255,255,255,0.95)">
          <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="178" cy="110" r="10" fill="rgba(255,255,255,0.95)">
          <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" begin="0.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="250" cy="110" r="10" fill="rgba(255,255,255,0.35)">
          <animate attributeName="opacity" values="0.2;0.9;0.2" dur="2s" begin="1s" repeatCount="indefinite" />
        </circle>
        <circle cx="326" cy="110" r="12" fill="rgba(255,255,255,0.25)" />
        <path d="M98 150L104 156L116 142" stroke="rgba(255,255,255,0.98)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M170 150L176 156L188 142" stroke="rgba(255,255,255,0.98)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M242 156H258" stroke="rgba(255,255,255,0.72)" strokeWidth="4" strokeLinecap="round" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 360 220" className="h-[170px] w-full max-w-[280px]" fill="none" aria-hidden="true">
      <path d="M94 80L130 58L166 80L130 102L94 80Z" fill="rgba(255,255,255,0.98)" />
      <path d="M94 80V126L130 148V102L94 80Z" fill="rgba(255,255,255,0.92)" />
      <path d="M166 80V126L130 148V102L166 80Z" fill="rgba(255,255,255,0.92)" />

      <path d="M170 42L206 20L242 42L206 64L170 42Z" fill="rgba(255,255,255,0.98)" />
      <path d="M170 42V88L206 110V64L170 42Z" fill="rgba(255,255,255,0.92)" />
      <path d="M242 42V88L206 110V64L242 42Z" fill="rgba(255,255,255,0.92)" />

      <path d="M246 118L282 96L318 118L282 140L246 118Z" fill="rgba(255,255,255,0.98)" />
      <path d="M246 118V164L282 186V140L246 118Z" fill="rgba(255,255,255,0.92)" />
      <path d="M318 118V164L282 186V140L318 118Z" fill="rgba(255,255,255,0.92)" />

      <path d="M174 28C152 30 142 44 140 62" stroke="rgba(255,255,255,0.84)" strokeWidth="4" strokeLinecap="round" />
      <path d="M250 106C266 98 278 96 294 102" stroke="rgba(255,255,255,0.84)" strokeWidth="4" strokeLinecap="round" />
      <path d="M174 28C152 30 142 44 140 62" stroke="rgba(122,146,255,0.78)" strokeWidth="3" strokeLinecap="round" strokeDasharray="8 10">
        <animate attributeName="stroke-dashoffset" from="0" to="-120" dur="2.8s" repeatCount="indefinite" />
      </path>
      <path d="M250 106C266 98 278 96 294 102" stroke="rgba(122,146,255,0.78)" strokeWidth="3" strokeLinecap="round" strokeDasharray="8 10">
        <animate attributeName="stroke-dashoffset" from="0" to="-120" dur="2.8s" begin="0.8s" repeatCount="indefinite" />
      </path>
      <path d="M136 56L140 66L148 58" stroke="rgba(255,255,255,0.88)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M286 98L296 102L288 110" stroke="rgba(255,255,255,0.88)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
