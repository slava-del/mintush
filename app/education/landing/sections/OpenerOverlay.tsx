type OpenerOverlayProps = {
  showOpener: boolean
  openerClosing: boolean
  onClose: () => void
}

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
          <span className="opener-chunk block [animation-delay:40ms]">67% руководителей</span>
          <span className="opener-chunk block [animation-delay:200ms]">не внедряют стратегию</span>
          <span className="opener-chunk block [animation-delay:360ms]">без управленческой</span>
          <span className="opener-chunk block text-[#e7d2ad] [animation-delay:520ms]">базы.</span>
        </h2>
      </div>
    </div>
  )
}
