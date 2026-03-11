"use client"

import Link from "next/link"
import { memo, useState } from "react"

const schemaMessages = [
  "Находим причину сбоя",
  "Собираем новую архитектуру",
  "Внедряем в команду",
]

const schemaRows = [
  {
    label: "Стратегия",
    messageIndex: 0,
    brokenX: -8,
    brokenY: -2,
    brokenRotation: -1.2,
    brokenScale: 0.985,
    brokenPaths: ["M4 17 H44", "M76 17 H116"],
    guidePath: "M4 17 H116",
    echoPath: "M4 17 H116",
    routePath: "M44 17 H76",
    pulseLeft: "50%",
  },
  {
    label: "Люди",
    messageIndex: 0,
    brokenX: 6,
    brokenY: 2,
    brokenRotation: 1.1,
    brokenScale: 0.988,
    brokenPaths: ["M4 17 H44", "M76 17 H116"],
    guidePath: "M4 17 H116",
    echoPath: "M4 17 H116",
    routePath: "M44 17 H76",
    pulseLeft: "50%",
  },
  {
    label: "Процессы",
    messageIndex: 1,
    brokenX: -10,
    brokenY: 3,
    brokenRotation: -1.4,
    brokenScale: 0.984,
    brokenPaths: ["M4 17 H44", "M76 17 H116"],
    guidePath: "M4 17 H116",
    echoPath: "M4 17 H116",
    routePath: "M44 17 H76",
    pulseLeft: "50%",
  },
  {
    label: "IT",
    messageIndex: 1,
    brokenX: 8,
    brokenY: -3,
    brokenRotation: 1.3,
    brokenScale: 0.987,
    brokenPaths: ["M4 17 H44", "M76 17 H116"],
    guidePath: "M4 17 H116",
    echoPath: "M4 17 H116",
    routePath: "M44 17 H76",
    pulseLeft: "50%",
  },
  {
    label: "Контроль",
    messageIndex: 2,
    brokenX: -6,
    brokenY: 1,
    brokenRotation: -1.0,
    brokenScale: 0.989,
    brokenPaths: ["M4 17 H44", "M76 17 H116"],
    guidePath: "M4 17 H116",
    echoPath: "M4 17 H116",
    routePath: "M44 17 H76",
    pulseLeft: "50%",
  },
]

const grainTexture =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.86' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"

export const ConsultingInterventionSchema = memo(function ConsultingInterventionSchema() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const isEngaged = hoveredIndex !== null || selectedIndex !== null
  const activeIndex = hoveredIndex ?? selectedIndex ?? 0
  const activeMessage = schemaMessages[schemaRows[activeIndex].messageIndex]

  return (
    <section className="relative overflow-hidden rounded-[32px] border border-[#f6d8ab]/45 bg-[linear-gradient(180deg,#ecd8b5_0%,#e2c99d_48%,#cb955b_100%)] shadow-[0_40px_140px_rgba(0,0,0,0.28)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,246,229,0.52)_0%,rgba(255,246,229,0)_38%),radial-gradient(circle_at_82%_18%,rgba(0,0,0,0.12)_0%,rgba(0,0,0,0)_34%),linear-gradient(135deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_46%)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-soft-light"
        style={{ backgroundImage: grainTexture, backgroundSize: "240px 240px" }}
      />

      <div className="relative px-6 py-8 md:px-10 md:py-10">
        <div className="mx-auto max-w-[1240px]">
          <div className="mx-auto max-w-[760px] text-center">
            <h2 className="text-[clamp(44px,6.4vw,88px)] font-extrabold leading-[0.92] tracking-[-0.05em] text-black">
              Диагностика,
              <br />
              архитектура,
              <br />
              внедрение
            </h2>
            <p className="mx-auto mt-5 max-w-[42ch] text-[18px] font-medium leading-[1.34] text-black/72 md:text-[22px]">
              Сначала показываем, где разорвалась связка между ключевыми функциями бизнеса. Потом собираем систему и
              встраиваем ее в работу команды.
            </p>
          </div>

          <div className="mt-10">
            <div className="flex items-center justify-between px-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-black/44 md:text-[12px]">
              <span>Надлом</span>
              <span>Система</span>
            </div>

            <div
              className="mt-4 rounded-[28px] border border-black/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.02))] px-3 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] md:px-5 md:py-6"
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="space-y-3 md:space-y-4">
                {schemaRows.map((row, index) => {
                  const isActive = activeIndex === index
                  const nodeDelay = isEngaged ? index * 12 : 0
                  const lineDelay = isEngaged ? 24 + index * 10 : 0

                  return (
                    <button
                      key={row.label}
                      type="button"
                      onClick={() => setSelectedIndex((prev) => (prev === index ? null : index))}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onFocus={() => setHoveredIndex(index)}
                      onBlur={() => setHoveredIndex(null)}
                      className="grid w-full grid-cols-[minmax(0,1fr)_54px_minmax(0,1fr)] items-center gap-3 bg-transparent text-left md:grid-cols-[minmax(0,1fr)_96px_minmax(0,1fr)] md:gap-5"
                    >
                      <span
                        className="justify-self-start rounded-[16px] border border-black/16 px-3 py-3 text-center text-[14px] font-semibold leading-none text-black/74 transition-[transform,opacity,background-color] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] md:min-w-[220px] md:px-5 md:py-4 md:text-[18px]"
                        style={{
                          transform: isEngaged
                            ? "translate3d(0,0,0) rotate(0deg) scale(1)"
                            : `translate(${row.brokenX}px, ${row.brokenY}px) rotate(${row.brokenRotation}deg) scale(${row.brokenScale})`,
                          backgroundColor: "rgba(0,0,0,0.04)",
                          opacity: isEngaged ? 0.88 : 0.58,
                          transitionDelay: `${nodeDelay}ms`,
                        }}
                      >
                        {row.label}
                      </span>

                      <span className="relative block h-7 md:h-8">
                        <svg viewBox="0 0 120 34" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
                          {row.brokenPaths.map((path, pathIndex) => (
                            <path
                              key={`${row.label}-${path}`}
                              d={path}
                              fill="none"
                              stroke="rgba(0,0,0,0.28)"
                              strokeWidth="1.35"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="transition-opacity duration-180 ease-[cubic-bezier(0.22,1,0.36,1)]"
                              style={{
                                opacity: isEngaged ? 0 : 1,
                                transitionDelay: `${Math.max(nodeDelay - 20, 0) + pathIndex * 10}ms`,
                              }}
                            />
                          ))}

                          <path
                            d={row.guidePath}
                            fill="none"
                            stroke="rgba(0,0,0,0.12)"
                            strokeWidth="1.05"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="transition-opacity duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]"
                            style={{
                              opacity: isEngaged ? 1 : 0,
                              transitionDelay: `${lineDelay}ms`,
                            }}
                          />

                          <path
                            d={row.echoPath}
                            fill="none"
                            stroke="rgba(0,0,0,0.18)"
                            strokeWidth="1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="transition-opacity duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]"
                            style={{
                              opacity: isEngaged ? 1 : 0,
                              transitionDelay: `${lineDelay + 18}ms`,
                            }}
                          />

                          <path
                            d={row.routePath}
                            fill="none"
                            stroke={isActive ? "rgba(0,0,0,0.9)" : "rgba(0,0,0,0.42)"}
                            strokeWidth={isActive ? "1.8" : "1.35"}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="transition-[opacity,stroke,stroke-width] duration-220 ease-[cubic-bezier(0.22,1,0.36,1)]"
                            style={{
                              opacity: isEngaged ? 1 : 0,
                              transitionDelay: `${lineDelay + 36}ms`,
                            }}
                          />
                        </svg>

                        <span
                          className="absolute top-1/2 h-[5px] w-[5px] -translate-y-1/2 rounded-full bg-black transition-[left,opacity,transform] duration-220 ease-[cubic-bezier(0.22,1,0.36,1)]"
                          style={{
                            left: isEngaged ? row.pulseLeft : "18%",
                            opacity: isEngaged ? (isActive ? 0.72 : 0.18) : 0,
                            transform: `translateY(-50%) scale(${isActive ? 1 : 0.82})`,
                            transitionDelay: `${lineDelay + 52}ms`,
                          }}
                        />
                      </span>

                      <span
                        className={`justify-self-end rounded-[16px] border px-3 py-3 text-center text-[14px] font-semibold leading-none transition-[border-color,background-color,color,opacity,box-shadow] duration-220 ease-[cubic-bezier(0.22,1,0.36,1)] md:min-w-[220px] md:px-5 md:py-4 md:text-[18px] ${
                          isActive
                            ? "border-black bg-black text-[#e7d2ad] shadow-[0_18px_36px_rgba(0,0,0,0.18)]"
                            : "border-black/20 bg-black/[0.06] text-black/76"
                        }`}
                        style={{
                          opacity: isEngaged ? 1 : 0.84,
                          transitionDelay: `${lineDelay + 54}ms`,
                        }}
                      >
                        {row.label}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center">
            <p
              className="min-h-[32px] text-center text-[20px] font-extrabold leading-[1.08] tracking-[-0.02em] text-black transition-[opacity,transform] duration-220 ease-[cubic-bezier(0.22,1,0.36,1)] md:min-h-[38px] md:text-[28px]"
              style={{
                opacity: isEngaged ? 1 : 0.78,
                transform: `translateY(${isEngaged ? "0px" : "2px"})`,
              }}
              aria-live="polite"
            >
              {activeMessage}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-5">
              <Link
                href="/consulting#form"
                className="group inline-flex h-[58px] items-center gap-3 self-center rounded-[16px] bg-black px-5 py-4 text-white shadow-[0_20px_44px_rgba(0,0,0,0.22)] transition hover:translate-y-[-1px]"
              >
                <span className="text-[14px] font-semibold leading-tight md:text-[15px]">Получить консультацию</span>
                <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-full bg-white/[0.08] text-[#e7d2ad] transition group-hover:bg-white/[0.14]">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M8 16l8-8M10 8h6v6"
                      stroke="currentColor"
                      strokeWidth="2.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>

              <Link
                href="/consulting"
                className="inline-flex items-center gap-1.5 self-center px-1 py-1 text-[14px] font-semibold text-black/66 transition hover:text-black md:text-[15px]"
              >
                Смотреть кейсы
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})