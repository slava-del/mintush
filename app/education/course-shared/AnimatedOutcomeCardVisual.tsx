type AnimatedOutcomeCardVisualProps = {
  id: string
  size?: "default" | "wide"
}

const baseSvgClass = {
  default: "h-[112px] w-full",
  wide: "h-[132px] w-full",
} as const

export function AnimatedOutcomeCardVisual({ id, size = "default" }: AnimatedOutcomeCardVisualProps) {
  const svgClassName = baseSvgClass[size]

  if (id === "01") {
    return (
      <svg viewBox="0 0 320 120" className={svgClassName} fill="none" aria-hidden="true">
        <path d="M16 94H304" stroke="rgba(255,255,255,0.12)" strokeWidth="2" strokeDasharray="5 8" />
        <path d="M22 92C58 92 66 80 92 80C120 80 132 58 160 58H298" stroke="rgba(231,210,173,0.18)" strokeWidth="2.2" />
        <path
          d="M22 92C64 92 76 70 110 70C142 70 154 38 188 38H298"
          stroke="rgba(122,146,255,0.52)"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeDasharray="14 18"
        >
          <animate attributeName="stroke-dashoffset" from="0" to="-180" dur="8.5s" repeatCount="indefinite" />
        </path>
        <circle cx="22" cy="92" r="4" fill="rgba(255,255,255,0.58)">
          <animate attributeName="r" values="3.6;4.4;3.6" dur="5.2s" repeatCount="indefinite" />
        </circle>
        <circle cx="110" cy="70" r="4" fill="rgba(255,255,255,0.66)">
          <animate attributeName="opacity" values="0.45;0.82;0.45" dur="6s" begin="0.6s" repeatCount="indefinite" />
        </circle>
        <circle cx="188" cy="38" r="4" fill="rgba(255,255,255,0.76)">
          <animate attributeName="opacity" values="0.45;0.82;0.45" dur="6s" begin="1.2s" repeatCount="indefinite" />
        </circle>
      </svg>
    )
  }

  if (id === "02") {
    return (
      <svg viewBox="0 0 320 120" className={svgClassName} fill="none" aria-hidden="true">
        <rect x="16" y="22" width="76" height="24" rx="8" stroke="rgba(255,255,255,0.24)" />
        <rect x="16" y="74" width="76" height="24" rx="8" stroke="rgba(255,255,255,0.24)" />
        <path d="M92 34C122 34 126 48 146 56" stroke="rgba(255,255,255,0.26)" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M92 86C122 86 126 72 146 64" stroke="rgba(255,255,255,0.26)" strokeWidth="2.4" strokeLinecap="round" />

        <path d="M154 48L170 60L154 72L138 60L154 48Z" stroke="rgba(122,146,255,0.78)" strokeWidth="2.4" />
        <path d="M170 60H246" stroke="rgba(231,210,173,0.44)" strokeWidth="2.8" strokeLinecap="round" />
        <path d="M238 54L246 60L238 66" stroke="rgba(231,210,173,0.74)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="246" y="48" width="58" height="24" rx="8" stroke="rgba(231,210,173,0.5)" />
        <path d="M154 48L170 60L154 72L138 60L154 48Z" fill="rgba(122,146,255,0.08)" />
      </svg>
    )
  }

  if (id === "03") {
    return (
      <svg viewBox="0 0 320 120" className={svgClassName} fill="none" aria-hidden="true">
        <path d="M16 62H304" stroke="rgba(255,255,255,0.14)" strokeWidth="2" strokeDasharray="5 8" />
        {[
          { x: 34, top: 30, tone: "rgba(231,210,173,0.32)" },
          { x: 68, top: 34, tone: "rgba(122,146,255,0.48)" },
          { x: 102, top: 28, tone: "rgba(231,210,173,0.3)" },
          { x: 136, top: 36, tone: "rgba(122,146,255,0.46)" },
          { x: 170, top: 30, tone: "rgba(231,210,173,0.32)" },
          { x: 204, top: 34, tone: "rgba(122,146,255,0.48)" },
          { x: 238, top: 28, tone: "rgba(231,210,173,0.3)" },
          { x: 272, top: 36, tone: "rgba(122,146,255,0.46)" },
        ].map((bar, index) => (
          <path
            key={bar.x}
            d={`M${bar.x} ${bar.top}V94`}
            stroke={bar.tone}
            strokeWidth="3"
            strokeLinecap="round"
          >
            <animate
              attributeName="stroke-opacity"
              values="0.28;0.86;0.28"
              dur="5.6s"
              begin={`${index * 0.4}s`}
              repeatCount="indefinite"
            />
          </path>
        ))}
      </svg>
    )
  }

  if (id === "04") {
    return (
      <svg viewBox="0 0 320 120" className={svgClassName} fill="none" aria-hidden="true">
        <rect x="8" y="48" width="74" height="28" rx="9" stroke="rgba(255,255,255,0.32)" />
        <rect x="122" y="48" width="74" height="28" rx="9" stroke="rgba(122,146,255,0.64)" />
        <rect x="236" y="48" width="76" height="28" rx="9" stroke="rgba(231,210,173,0.5)" />

        <path d="M82 62H122" stroke="rgba(255,255,255,0.26)" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M196 62H236" stroke="rgba(255,255,255,0.26)" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M116 56L122 62L116 68" stroke="rgba(255,255,255,0.4)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M230 56L236 62L230 68" stroke="rgba(255,255,255,0.4)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />

        <path
          d="M274 48C274 20 220 14 160 14C100 14 46 20 46 48"
          stroke="rgba(231,210,173,0.32)"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeDasharray="10 10"
        >
          <animate attributeName="stroke-dashoffset" from="0" to="-110" dur="10s" repeatCount="indefinite" />
        </path>
        <path d="M52 42L46 48L40 42" stroke="rgba(231,210,173,0.62)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

      </svg>
    )
  }

  return (
    <svg viewBox="0 0 320 120" className={svgClassName} fill="none" aria-hidden="true">
      <rect x="18" y="48" width="84" height="24" rx="8" stroke="rgba(122,146,255,0.56)" />
      <path d="M28 58H92" stroke="rgba(122,146,255,0.32)" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M34 66H86" stroke="rgba(122,146,255,0.32)" strokeWidth="2.2" strokeLinecap="round" />

      <path d="M102 60H162" stroke="rgba(255,255,255,0.32)" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M154 54L162 60L154 66" stroke="rgba(255,255,255,0.52)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />

      <rect x="184" y="22" width="118" height="20" rx="7" stroke="rgba(231,210,173,0.44)" />
      <rect x="184" y="50" width="118" height="20" rx="7" stroke="rgba(231,210,173,0.44)" />
      <rect x="184" y="78" width="118" height="20" rx="7" stroke="rgba(231,210,173,0.44)" />
      <path d="M170 60H184" stroke="rgba(231,210,173,0.5)" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M170 60V32H184" stroke="rgba(231,210,173,0.3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M170 60V88H184" stroke="rgba(231,210,173,0.3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
