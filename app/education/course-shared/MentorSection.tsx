import Image from "next/image"
import { mentorSummary } from "@/lib/site-config"
import type { MentorStat } from "./types"

type MentorSectionProps = {
  title: string
  description: string
  quote: string
  stats: MentorStat[]
}

export function MentorSection({ title, description, quote, stats }: MentorSectionProps) {
  return (
    <section className="mx-auto max-w-[1380px] overflow-x-clip px-6 pb-14 md:px-12 md:pb-16">
      <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,46%)_minmax(0,54%)] xl:gap-10">
        <div className="relative w-full min-w-0 max-w-full">
          <div className="relative min-h-[420px] w-full overflow-hidden md:min-h-[560px] lg:min-h-[640px]">
            <Image
              src="/profile.png"
              alt="Олег Минтуш"
              fill
              className="object-contain object-bottom opacity-95"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,rgba(5,5,5,0)_0%,rgba(5,5,5,0.88)_80%,rgba(5,5,5,1)_100%)] md:h-36 lg:h-44" />
          </div>
        </div>

        <article className="relative w-full min-w-0 max-w-full overflow-hidden rounded-[24px] border border-[#e7d2ad]/16 bg-[radial-gradient(circle_at_86%_0%,rgba(231,210,173,0.12),rgba(8,8,8,0)_40%),linear-gradient(180deg,rgba(9,9,9,0.96),rgba(231,210,173,0.08))] px-8 py-9 md:px-10 md:py-11">
          <div className="pointer-events-none absolute right-8 top-8 h-24 w-24 rounded-full bg-[#e7d2ad]/8 blur-2xl" />
          <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-[#e7d2ad]/80">Эксперт курса</p>
          <h2 className="mt-4 max-w-full break-words text-[44px] font-extrabold leading-[0.94] tracking-[-0.03em] text-[#EDEDED] md:text-[56px] lg:text-[60px]">
            {mentorSummary.name}
          </h2>
          <p className="mt-4 max-w-[30ch] break-words text-[23px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#e7d2ad] md:text-[28px]">
            {title}
          </p>
          <p className="mt-5 max-w-[52ch] break-words text-[18px] leading-[1.42] text-[#EDEDED]/78">
            {description}
          </p>

          <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-2">
            {stats.map((item) => (
              <div
                key={item.value}
                className="min-w-0 max-w-full rounded-[14px] border border-[#e7d2ad]/14 bg-[#0a0a0a]/64 px-4 py-3"
              >
                <p className="text-[18px] font-bold leading-none tracking-[-0.02em] text-[#EDEDED]">{item.value}</p>
                <p className="mt-2 break-words text-[12px] font-semibold uppercase leading-[1.35] tracking-[0.06em] text-[#EDEDED]/58">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <blockquote className="mt-8 max-w-full break-words rounded-[16px] border border-[#e7d2ad]/18 bg-[#0a0a0a]/72 px-5 py-4 text-[16px] leading-[1.45] text-[#EDEDED]/84">
            {quote}
          </blockquote>
        </article>
      </div>
    </section>
  )
}
