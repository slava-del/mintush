type OpenerOverlayProps = {
  showOpener: boolean
  openerClosing: boolean
  onClose: () => void
}

const openerLines = [
  ["67%", "руководителей"],
  ["не", "внедряют", "стратегию"],
  ["без", "управленческой"],
  ["базы."],
]

export function OpenerOverlay({ showOpener, openerClosing, onClose }: OpenerOverlayProps) {
  if (!showOpener) return null

  return (
    <div
      className={`fixed inset-0 z-[120] flex items-center justify-center bg-[#020202] px-6 transition-opacity duration-700 ${
        openerClosing ? "opacity-0" : "opacity-100"
      }`}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute bottom-9 left-1/2 -translate-x-1/2 rounded-[14px] bg-[#e7d2ad] px-7 py-3.5 text-[13px] font-extrabold uppercase tracking-[0.1em] text-black shadow-[0_18px_42px_rgba(0,0,0,0.4)] transition hover:translate-y-[-1px] hover:shadow-[0_22px_48px_rgba(0,0,0,0.48)]"
      >
        Далее
      </button>

      <div className="max-w-5xl text-center">
        <h2 className="mt-5 text-[clamp(34px,6.8vw,102px)] font-extrabold leading-[0.92] tracking-[-0.045em] text-white">
          {openerLines.map((line, lineIndex) => (
            <span key={`${line.join("-")}-${lineIndex}`} className="block">
              {line.map((word, wordIndex) => {
                const orderIndex = openerLines.slice(0, lineIndex).reduce((total, row) => total + row.length, 0) + wordIndex
                const isAccentWord = lineIndex === openerLines.length - 1

                return (
                  <span
                    key={`${word}-${lineIndex}-${wordIndex}`}
                    className={`opener-word inline-block ${isAccentWord ? "text-[#e7d2ad]" : ""}`}
                    style={{ animationDelay: `${40 + orderIndex * 55}ms` }}
                  >
                    {word}
                    {wordIndex < line.length - 1 ? "\u00A0" : ""}
                  </span>
                )
              })}
            </span>
          ))}
        </h2>
      </div>
    </div>
  )
}
