import type { BoardTopicsContent } from "../data"
import styles from "./BoardTopicsSection.module.css"

type BoardTopicsSectionProps = {
  content: BoardTopicsContent
}

const rowOffsetClasses = ["", "md:pl-10 lg:pl-14", "md:pl-4 lg:pl-8"]
const verticalOffsets = [-8, 3, -2, 6, -5, 2, 0, 4]
const rotationOffsets = [-1.7, 0.9, -0.8, 1.25, -1.1, 0.55, 0, 0.7]

function getTagVariantClass(variant: "plain" | "outlined" | "highlight") {
  if (variant === "outlined") {
    return "rounded-full border border-[#e7d2ad]/30 bg-white/[0.01] px-5 py-2.5"
  }

  if (variant === "highlight") {
    return "rounded-full bg-[#dcc8a4] px-5 py-2.5 text-[#1e1a14] shadow-[0_8px_26px_rgba(0,0,0,0.20)]"
  }

  return ""
}

function getTagSizeClass(size: "sm" | "md" | "lg") {
  if (size === "sm") {
    return "text-[24px] leading-[1.08] md:text-[26px]"
  }

  if (size === "lg") {
    return "text-[32px] leading-[1.02] md:text-[40px]"
  }

  return "text-[28px] leading-[1.04] md:text-[34px]"
}

function getTagColorClass(variant: "plain" | "outlined" | "highlight") {
  return variant === "highlight" ? "text-[#1e1a14]" : "text-[#EDEDED]/88"
}

export function BoardTopicsSection({ content }: BoardTopicsSectionProps) {
  return (
    <section id="topics" className="relative">
      <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-end lg:gap-12">
        <div>
          {content.eyebrow ? (
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#e7d2ad]/58 md:text-[13px]">
              {content.eyebrow}
            </p>
          ) : null}
          <h2 className={`${content.eyebrow ? "mt-4" : ""} max-w-[12ch] text-[44px] font-extrabold leading-[1.02] tracking-[-0.03em] text-[#EDEDED] md:text-[58px] lg:text-[64px] xl:text-[68px]`}>
            {content.title}
          </h2>
        </div>

        <p className="max-w-[44ch] text-[20px] leading-[1.36] text-[#EDEDED]/66 md:text-[22px] lg:text-[24px]">
          {content.subtitle}
        </p>
      </div>

      <div className="relative mt-10 space-y-4 md:mt-12 md:space-y-5">
        {content.rows.map((row, rowIndex) => (
          <div key={`row-${rowIndex}`} className="relative overflow-hidden">
            <div
              className={`${styles.track} ${rowIndex % 2 === 0 ? styles.left : styles.right} flex w-max items-center gap-x-4 py-2 md:gap-x-5 ${rowOffsetClasses[rowIndex] ?? ""}`}
              style={{
                animationDuration: `${32 + rowIndex * 7}s`,
              }}
            >
              {[...row, ...row].map((topic, index) => {
                const lift = verticalOffsets[(index + rowIndex * 2) % verticalOffsets.length]
                const tilt = rotationOffsets[(index * 3 + rowIndex) % rotationOffsets.length]

                return (
                  <span
                    key={`${topic.label}-${rowIndex}-${index}`}
                    style={{ transform: `translateY(${lift}px) rotate(${tilt}deg)` }}
                    className={`${getTagVariantClass(topic.variant)} ${getTagSizeClass(topic.size)} ${getTagColorClass(topic.variant)} shrink-0 whitespace-nowrap font-semibold tracking-[-0.018em]`}
                  >
                    {topic.label}
                  </span>
                )
              })}
            </div>
          </div>
        ))}

        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#030303] to-transparent md:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#030303] to-transparent md:w-24" />
      </div>

      <p className="mt-12 max-w-[58ch] text-[18px] leading-[1.5] text-[#EDEDED]/62 md:mt-14 md:text-[19px] lg:text-[20px]">
        {content.note}
      </p>
    </section>
  )
}
