// app/page.tsx
import Image from "next/image";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export default function Page() {
  return (
    <main className={`${manrope.className} min-h-screen bg-[#0b0b0b] p-3 sm:p-4 md:p-6`}>
      <section className="w-full">
        <div className="relative min-h-[calc(100vh-1.5rem)] sm:min-h-[calc(100vh-2rem)] md:min-h-[calc(100vh-3rem)] overflow-hidden rounded-[28px] bg-[#050505] shadow-[0_40px_140px_rgba(0,0,0,0.65)]">
          {/* RIGHT IMAGE — bigger */}
<div className="absolute inset-0">
  <div className="absolute right-0 top-[16%] h-[100%] w-[51%] min-w-[420px] origin-bottom scale-[1.18]">
    <Image
      src="/profile.png"
      alt="Олег Минтуш"
      fill
      priority
      className="object-contain object-bottom"
    />

    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/25 to-[#050505]" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_35%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.42)_52%,rgba(0,0,0,0.92)_100%)]" />
  </div>

  <div className="absolute inset-0 bg-[linear-gradient(90deg,#050505_0%,#050505_44%,rgba(5,5,5,0.92)_58%,rgba(5,5,5,0)_78%)]" />
</div>

          {/* TOP RIGHT */}
          <div className="relative z-10 flex items-start justify-end px-6 pt-6 md:px-10 md:pt-8">
            <div className="flex items-center gap-4 md:gap-6">
              <div className="select-none text-sm font-medium tracking-wide text-white/70">
                <span className="text-white/85">ru</span>
                <span className="px-2 text-white/35">/</span>
                <span className="hover:text-white/85 transition-colors">en</span>
              </div>

              <button
                type="button"
                aria-label="menu"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/12 bg-white/[0.03] text-white/70 hover:text-white hover:bg-white/[0.06] transition"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="5" r="1.7" fill="currentColor" />
                  <circle cx="12" cy="12" r="1.7" fill="currentColor" />
                  <circle cx="12" cy="19" r="1.7" fill="currentColor" />
                </svg>
              </button>
            </div>
          </div>

          {/* WORDMARK — pure white */}
          <div className="relative z-10 px-6 md:px-10">
            <h1
              className="mt-6 md:mt-8 font-extrabold leading-[0.82] tracking-[-0.07em] text-white"
              style={{ fontSize: "clamp(88px, 14vw, 240px)" }}
            >
              mintush
            </h1>

            <p className="mt-4 md:mt-6 text-[13px] md:text-[15px] font-semibold tracking-[0.22em] text-white/80">
              управление — это система
            </p>
          </div>

          {/* Bottom-left: ONLY 2 lines (removed “ЦЕНТР …”) */}
          <div className="absolute bottom-0 left-0 z-10 px-6 pb-10 md:px-10 md:pb-12">
            <div className="max-w-[760px]">
              <p
                className="font-semibold text-white leading-[1.08]"
                style={{ fontSize: "clamp(22px, 2.35vw, 36px)" }}
              >
                Прокачиваем руководителей системно
                <br />
                Выстраиваем управление бизнесом
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="absolute bottom-6 right-6 z-20 md:bottom-8 md:right-10">
            <a
              href="#signup"
              className="group inline-flex items-center gap-3 rounded-[18px] bg-[#e7d2ad] px-5 py-4 shadow-[0_18px_50px_rgba(0,0,0,0.45)] ring-1 ring-black/10 hover:translate-y-[-1px] transition"
            >
              <span className="leading-[1.05] text-[13px] md:text-[14px] font-semibold text-black/90">
                Записаться
                <br />
                на программу
              </span>

              <span className="grid h-10 w-10 place-items-center rounded-full bg-black/90 text-[#e7d2ad] group-hover:bg-black transition">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M8 16l8-8M10 8h6v6"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[28%] bg-[linear-gradient(180deg,rgba(5,5,5,0)_0%,#050505_85%)] md:hidden" />
        </div>
      </section>
    </main>
  );
}