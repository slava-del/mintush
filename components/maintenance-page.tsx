import Link from "next/link"
import { contactConfig } from "@/lib/site-config"

export function MaintenancePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0b0b0b] px-4 py-4 sm:px-6 md:px-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_16%,rgba(231,210,173,0.2),transparent_36%),radial-gradient(circle_at_82%_10%,rgba(231,210,173,0.14),transparent_42%),linear-gradient(180deg,#0b0b0b_0%,#080808_48%,#050505_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.05)_0%,transparent_28%,transparent_72%,rgba(255,255,255,0.04)_100%)]"
      />

      <section className="relative mx-auto flex min-h-[calc(100vh-2rem)] max-w-6xl items-center justify-center">
        <article className="w-full overflow-hidden rounded-[30px] border border-white/12 bg-[radial-gradient(circle_at_top,rgba(231,210,173,0.14),transparent_44%),linear-gradient(180deg,#050505_0%,#070707_58%,#0f0f0f_100%)] p-7 shadow-[0_42px_140px_rgba(0,0,0,0.72)] sm:p-10 md:p-12">
          <div className="max-w-4xl">
            <p className="inline-flex rounded-full border border-[#e7d2ad]/40 bg-[#e7d2ad]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#e7d2ad]">
              MINTUSH
            </p>

            <h1 className="mt-5 text-[clamp(44px,10vw,110px)] font-extrabold leading-[0.9] tracking-[-0.04em] text-white">
              Сайт в разработке
            </h1>

            <p className="mt-5 max-w-[34ch] text-[clamp(18px,3.2vw,30px)] font-semibold leading-[1.16] text-white/84">
              Этот раздел мы обновляем прямо сейчас.
              <br />
              Скоро здесь появится новая версия.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-[14px] bg-[#e7d2ad] px-5 py-3 text-[15px] font-semibold text-black transition hover:translate-y-[-1px] hover:bg-[#f0dec0]"
              >
                На главную
              </Link>
              <a
                href={contactConfig.telegramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-[14px] border border-white/18 bg-white/[0.03] px-5 py-3 text-[15px] font-semibold text-white/82 transition hover:border-white/28 hover:bg-white/[0.06] hover:text-white"
              >
                Написать в Telegram
              </a>
            </div>
          </div>
        </article>
      </section>
    </main>
  )
}
