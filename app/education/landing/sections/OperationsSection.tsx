import type { StoryChapter } from "../types"

type OperationsSectionProps = {
  story: StoryChapter[]
  onScrollToCourses: () => void
}

export function OperationsSection({ story, onScrollToCourses }: OperationsSectionProps) {
  return (
    <section data-section-id="operations" className="px-6 pb-12 md:px-10 md:pb-14">
      <div className="mx-auto max-w-5xl rounded-[24px] border border-white/10 bg-[radial-gradient(circle_at_10%_18%,rgba(231,210,173,0.22),rgba(7,7,7,0)_42%),#060606] p-6 md:p-9">
        <h3 className="text-[34px] font-extrabold leading-[1.03] tracking-[-0.03em] text-white md:text-[48px]">
          Путь к системному управлению
        </h3>

        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {story.map((chapter) => (
            <article key={chapter.title} className="rounded-[20px] border border-white/12 bg-black/45 p-5 backdrop-blur">
              <h4 className="text-[24px] font-extrabold leading-[1.02] tracking-[-0.02em] text-white md:text-[32px]">
                {chapter.title.replace("Глава 0", "").replace(" — ", " —\u00A0")}
              </h4>
              <p className="mt-3 text-[16px] leading-[1.32] text-white/72">{chapter.problem}</p>
              <button
                type="button"
                onClick={onScrollToCourses}
                className="mt-6 rounded-[12px] border border-[#e7d2ad]/38 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#e7d2ad] transition hover:bg-[#e7d2ad] hover:text-black"
              >
                {chapter.cta}
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
