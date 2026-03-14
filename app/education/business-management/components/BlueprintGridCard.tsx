import type { BlueprintModule } from "../../course-shared"

type BlueprintGridCardProps = {
  modules: BlueprintModule[]
}

export function BlueprintGridCard({ modules }: BlueprintGridCardProps) {
  const anchors = modules.slice(0, 4)
  const desktopAnchorSlots = [
    "col-start-1 row-start-1",
    "col-start-3 row-start-1",
    "col-start-1 row-start-3",
    "col-start-3 row-start-3",
  ] as const

  return (
    <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[radial-gradient(circle_at_16%_10%,rgba(231,210,173,0.08),rgba(8,8,8,0)_34%),radial-gradient(circle_at_86%_84%,rgba(122,146,255,0.16),rgba(10,14,28,0)_42%),linear-gradient(180deg,rgba(13,13,14,0.98),rgba(8,8,9,0.96))] p-5 md:min-h-[404px] md:p-5 lg:min-h-[456px]">
      <div className="grid gap-3 sm:grid-cols-2 md:hidden">
        {anchors.map(([, title, text]) => (
          <article
            key={title}
            className="rounded-[16px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(10,10,11,0.86))] px-4 py-4"
          >
            <h3 className="text-[30px] font-extrabold leading-[0.95] tracking-[-0.03em] text-[#EDEDED]">{title}</h3>
            <p className="mt-2 text-[13px] font-medium leading-[1.38] uppercase tracking-[0.05em] text-[#EDEDED]/62">{text}</p>
          </article>
        ))}
      </div>

      <div className="relative hidden md:flex md:min-h-[354px] md:items-center md:justify-center lg:min-h-[404px]">
        <div className="relative grid md:grid-cols-[198px_144px_198px] md:grid-rows-[124px_144px_124px] md:gap-x-7 md:gap-y-7 lg:grid-cols-[216px_156px_216px] lg:grid-rows-[132px_156px_132px] lg:gap-x-8 lg:gap-y-8">
          <span className="pointer-events-none absolute left-1/2 top-[9%] h-[82%] w-px -translate-x-1/2 bg-[linear-gradient(180deg,rgba(231,210,173,0.04),rgba(231,210,173,0.22),rgba(231,210,173,0.04))]" />
          <span className="pointer-events-none absolute left-[9%] top-1/2 h-px w-[82%] -translate-y-1/2 bg-[linear-gradient(90deg,rgba(122,146,255,0.04),rgba(122,146,255,0.26),rgba(122,146,255,0.04))]" />
          <span className="pointer-events-none absolute left-1/2 top-[30%] h-px w-[15%] -translate-x-1/2 bg-[linear-gradient(90deg,rgba(231,210,173,0),rgba(231,210,173,0.22),rgba(231,210,173,0))]" />
          <span className="pointer-events-none absolute left-1/2 top-[70%] h-px w-[15%] -translate-x-1/2 bg-[linear-gradient(90deg,rgba(231,210,173,0),rgba(231,210,173,0.22),rgba(231,210,173,0))]" />

          {anchors.map(([, title, text], index) => (
            <article
              key={title}
              className={`relative z-10 h-full w-full rounded-[18px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(10,10,11,0.88))] px-5 py-4 ${desktopAnchorSlots[index]}`}
            >
              <h3 className="text-[28px] font-extrabold leading-[0.95] tracking-[-0.03em] text-[#EDEDED] lg:text-[32px]">{title}</h3>
              <p className="mt-2 max-w-[18ch] text-[12px] font-semibold leading-[1.35] uppercase tracking-[0.06em] text-[#EDEDED]/62">
                {text}
              </p>
            </article>
          ))}

          <div className="relative z-20 col-start-2 row-start-2 h-[144px] w-[144px] self-center justify-self-center rounded-full border border-[#e7d2ad]/24 bg-[radial-gradient(circle,rgba(231,210,173,0.12),rgba(14,14,14,0.82)_64%,rgba(12,12,12,0.92)_100%)] shadow-[0_0_0_1px_rgba(231,210,173,0.04)_inset] lg:h-[156px] lg:w-[156px]">
            <div className="flex h-full items-center justify-center px-6 text-center text-[12px] font-semibold uppercase tracking-[0.14em] text-[#e7d2ad]/76">
              Бизнес-система
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
