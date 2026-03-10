"use client"

import type { CSSProperties } from "react"
import { useState } from "react"

type GraphicKind = "graph" | "target" | "management"

type Concept = {
  accent: string
  accentSoft: string
  glow: string
  kind: GraphicKind
  text: string
  title: string
}

const concepts: Concept[] = [
  {
    title: "Ясность",
    text: "где бизнес сейчас и куда идём",
    accent: "#ff9a64",
    accentSoft: "#ffd8bf",
    glow: "#ff8a4a",
    kind: "graph",
  },
  {
    title: "Фокус",
    text: "что делаем и что не делаем в этом году",
    accent: "#7ed8ff",
    accentSoft: "#d7f5ff",
    glow: "#36bcff",
    kind: "target",
  },
  {
    title: "Управление",
    text: "ритм, метрики, ответственность, корректировки по факту",
    accent: "#c7f27e",
    accentSoft: "#f0ffd1",
    glow: "#8cf070",
    kind: "management",
  },
]

function GraphVisual({ accent, accentSoft }: { accent: string; accentSoft: string }) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[20px]">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0))]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:28px_28px]" />

      <div className="absolute inset-x-5 bottom-5 flex items-end gap-3">
        {[56, 92, 132, 168].map((height, index) => (
          <span
            key={height}
            className="graphic-bar block w-8 rounded-t-[12px]"
            style={{
              height,
              background: `linear-gradient(180deg, ${accentSoft}, ${accent})`,
              animationDelay: `${index * 0.16}s`,
            }}
          />
        ))}
      </div>

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 240 220" fill="none" aria-hidden="true">
        <path
          className="graphic-line"
          d="M34 162C56 150 76 138 92 124C112 106 130 102 148 88C166 74 186 58 206 38"
          stroke={accentSoft}
          strokeWidth="5"
          strokeLinecap="round"
        />
        <circle cx="92" cy="124" r="5" fill={accent} />
        <circle cx="148" cy="88" r="5" fill={accent} />
        <circle cx="206" cy="38" r="6" fill={accentSoft} />
      </svg>
    </div>
  )
}

function TargetVisual({ accent, accentSoft }: { accent: string; accentSoft: string }) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[20px]">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0))]" />
      <div
        className="graphic-target absolute left-1/2 top-1/2 h-[152px] w-[152px] -translate-x-1/2 -translate-y-1/2 rounded-full border"
        style={{ borderColor: `${accentSoft}9a` }}
      />
      <div
        className="graphic-target-delayed absolute left-1/2 top-1/2 h-[106px] w-[106px] -translate-x-1/2 -translate-y-1/2 rounded-full border"
        style={{ borderColor: `${accent}c7` }}
      />
      <div
        className="absolute left-1/2 top-1/2 h-[58px] w-[58px] -translate-x-1/2 -translate-y-1/2 rounded-full border"
        style={{ borderColor: `${accentSoft}6e` }}
      />
      <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ backgroundColor: accent }} />

      <div
        className="graphic-arrow absolute left-1/2 top-[24%] h-[86px] w-[4px] origin-bottom rounded-full"
        style={{ background: `linear-gradient(180deg, ${accentSoft}, ${accent})` }}
      />
      <div
        className="graphic-arrow-head absolute left-1/2 top-[18%] h-0 w-0 -translate-x-1/2 border-x-[12px] border-b-[18px] border-x-transparent"
        style={{ borderBottomColor: accentSoft }}
      />
    </div>
  )
}

function ManagementVisual({ accent, accentSoft }: { accent: string; accentSoft: string }) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[20px]">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0))]" />

      <div className="absolute left-1/2 top-1/2 h-[168px] w-[194px] -translate-x-1/2 -translate-y-1/2 rounded-[18px] border border-white/10 bg-black/28 p-4 shadow-[0_18px_40px_rgba(0,0,0,0.28)]">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-white/18" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/8" />
        </div>

        <div className="mt-4 grid grid-cols-[1.1fr_0.9fr] gap-3">
          <div className="rounded-[14px] border border-white/8 bg-white/[0.03] p-3">
            <div className="h-2 w-16 rounded-full bg-white/10" />
            <div className="mt-3 flex items-end gap-2">
              {[32, 48, 68].map((height, index) => (
                <span
                  key={height}
                  className="graphic-dashboard-bar block w-4 rounded-t-[8px]"
                  style={{
                    height,
                    background: `linear-gradient(180deg, ${accentSoft}, ${accent})`,
                    animationDelay: `${index * 0.14}s`,
                  }}
                />
              ))}
            </div>
          </div>

          <div className="rounded-[14px] border border-white/8 bg-white/[0.03] p-3">
            <div className="h-2 w-12 rounded-full bg-white/10" />
            <div className="mt-3 grid gap-2">
              {[0, 1, 2].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="grid h-4 w-4 place-items-center rounded-full" style={{ backgroundColor: `${accent}24` }}>
                    <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: accentSoft }} />
                  </span>
                  <span className="h-2 flex-1 rounded-full bg-white/10" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-3 rounded-[14px] border border-white/8 bg-white/[0.03] p-3">
          <div className="flex items-center justify-between">
            <div className="h-2 w-14 rounded-full bg-white/10" />
            <div className="h-2 w-8 rounded-full" style={{ backgroundColor: `${accent}5a` }} />
          </div>

          <svg className="mt-3 h-[46px] w-full" viewBox="0 0 160 46" fill="none" aria-hidden="true">
            <path
              className="graphic-pulse"
              d="M4 30H30L42 14L56 36L76 8L94 28H124L138 18L156 18"
              stroke={accentSoft}
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

function GraphicFigure({
  concept,
  isActive,
}: {
  concept: Concept
  isActive: boolean
}) {
  const frameStyle: CSSProperties = {
    boxShadow: isActive ? `0 24px 70px ${concept.glow}18` : undefined,
    background: `radial-gradient(circle at 50% 0%, ${concept.glow}14, transparent 45%), linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))`,
  }

  const overlayStyle: CSSProperties = {
    background: `linear-gradient(180deg, transparent, ${concept.glow}12)`,
  }

  return (
    <div className="relative mt-5 h-[240px] overflow-hidden rounded-[22px] border border-white/10 transition duration-300" style={frameStyle}>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:28px_28px]" />
      <div className="absolute inset-0" style={overlayStyle} />

      {concept.kind === "graph" && <GraphVisual accent={concept.accent} accentSoft={concept.accentSoft} />}
      {concept.kind === "target" && <TargetVisual accent={concept.accent} accentSoft={concept.accentSoft} />}
      {concept.kind === "management" && <ManagementVisual accent={concept.accent} accentSoft={concept.accentSoft} />}
    </div>
  )
}

export function MatryoshkaRevealSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const activeConcept = concepts[activeIndex]

  return (
    <article className="relative overflow-hidden rounded-[28px] border border-white/12 bg-[#070707] px-6 py-8 shadow-[0_34px_120px_rgba(0,0,0,0.64)] md:px-10 md:py-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_16%,rgba(255,133,54,0.14),rgba(7,7,7,0)_30%),radial-gradient(circle_at_84%_18%,rgba(54,188,255,0.16),rgba(7,7,7,0)_28%)]" />

      <div className="relative z-10">
        <div className="max-w-3xl">
          <h2 className="text-[34px] font-extrabold leading-[0.96] tracking-[-0.03em] text-white md:text-[56px]">
            Что даёт курс
          </h2>
          <p className="mt-4 text-[15px] leading-[1.35] text-white/72 md:text-[17px]">
            Нажмите на карточку, чтобы посмотреть характеристику.
          </p>
        </div>

        <div
          className="mt-8 rounded-[20px] border px-5 py-4 md:px-6"
          style={{
            borderColor: `${activeConcept.glow}40`,
            background: `linear-gradient(90deg, ${activeConcept.glow}12, rgba(255,255,255,0.03))`,
            boxShadow: `0 18px 50px ${activeConcept.glow}10`,
          }}
        >
          <p className="text-[24px] font-semibold leading-[1.2] tracking-[-0.03em] text-white md:text-[32px]">
            {activeIndex + 1}. {activeConcept.text}
          </p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {concepts.map((concept, index) => {
            const isActive = activeIndex === index

            return (
              <button
                key={concept.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`group relative rounded-[24px] border p-4 text-left transition duration-300 ${
                  isActive
                    ? "border-white/18 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(8,8,8,0.92))]"
                    : "border-white/10 bg-black/24 hover:border-white/16"
                }`}
              >
                <div
                  className="pointer-events-none absolute inset-0 rounded-[24px] opacity-80"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${concept.glow}14, transparent 44%)` }}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[12px] font-semibold uppercase tracking-[0.1em] text-white/50">
                      {concept.title}
                    </span>

                    <span className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.1em] text-white/42">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <GraphicFigure concept={concept} isActive={isActive} />
                </div>
              </button>
            )
          })}
        </div>
      </div>

      <style jsx global>{`
        @keyframes graphicRise {
          0%,
          100% {
            transform: scaleY(0.78);
            opacity: 0.72;
          }
          50% {
            transform: scaleY(1);
            opacity: 1;
          }
        }

        @keyframes graphicDraw {
          0% {
            stroke-dasharray: 180;
            stroke-dashoffset: 180;
            opacity: 0.4;
          }
          45%,
          100% {
            stroke-dasharray: 180;
            stroke-dashoffset: 0;
            opacity: 1;
          }
        }

        @keyframes graphicTargetPulse {
          0%,
          100% {
            transform: translate(-50%, -50%) scale(0.95);
            opacity: 0.55;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.04);
            opacity: 1;
          }
        }

        @keyframes graphicArrowSwing {
          0%,
          100% {
            transform: translateX(-50%) rotate(-52deg);
          }
          50% {
            transform: translateX(-50%) rotate(10deg);
          }
        }

        .graphic-bar,
        .graphic-dashboard-bar {
          transform-origin: center bottom;
        }

        .graphic-bar {
          animation: graphicRise 2.8s ease-in-out infinite;
        }

        .graphic-dashboard-bar {
          animation: graphicRise 3.2s ease-in-out infinite;
        }

        .graphic-line,
        .graphic-pulse {
          stroke-dasharray: 180;
          animation: graphicDraw 3.6s ease-in-out infinite;
        }

        .graphic-target,
        .graphic-target-delayed {
          animation: graphicTargetPulse 3s ease-in-out infinite;
        }

        .graphic-target-delayed {
          animation-delay: 0.2s;
        }

        .graphic-arrow {
          animation: graphicArrowSwing 3s ease-in-out infinite;
        }

        .graphic-arrow-head {
          animation: graphicArrowSwing 3s ease-in-out infinite;
        }
      `}</style>
    </article>
  )
}
