import type { TopNavTopic } from "../types"

type TopTopicsBarProps = {
  topics: TopNavTopic[]
  onSelectSection: (sectionId: string) => void
}

export function TopTopicsBar({ topics, onSelectSection }: TopTopicsBarProps) {
  return (
    <div className="sticky top-0 z-30 overflow-hidden border-b border-black/15 bg-[#e7d2ad] text-black">
      <div className="education-topics-track flex w-max items-center">
        {topics.map((topic, index) => (
          <button
            key={`${topic.label}-${index}`}
            type="button"
            onClick={() => onSelectSection(topic.sectionId)}
            className="group border-r border-black/15 px-8 py-3 text-[12px] font-semibold uppercase tracking-[0.08em] text-black/92 transition hover:bg-black/7 hover:text-black last:border-r-0"
          >
            <span className="relative inline-block pb-[2px] after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-black/65 after:transition-transform after:duration-200 group-hover:after:scale-x-100">
              {topic.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
