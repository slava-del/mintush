import type { TopicLink } from "./types"

type TopTopicsBarProps = {
  topics: TopicLink[]
  trackClassName: string
}

export function TopTopicsBar({ topics, trackClassName }: TopTopicsBarProps) {
  const marqueeTopics = [...topics, ...topics, ...topics]

  return (
    <div className="sticky top-0 z-50 overflow-hidden border-b border-black/15 bg-[#e7d2ad] text-black">
      <div className={`${trackClassName} flex w-max items-center`}>
        {marqueeTopics.map((topic, index) => (
          <a
            key={`${topic.label}-${index}`}
            href={topic.href}
            className="group border-r border-black/15 px-8 py-3 text-[12px] font-semibold uppercase tracking-[0.08em] text-black/92 transition hover:bg-black/7 hover:text-black last:border-r-0"
          >
            <span className="relative inline-block pb-[2px] after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-black/65 after:transition-transform after:duration-200 group-hover:after:scale-x-100">
              {topic.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}
