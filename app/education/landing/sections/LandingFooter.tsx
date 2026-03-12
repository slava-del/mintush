import Link from "next/link"
import { contactConfig } from "@/lib/site-config"

export function LandingFooter() {
  return (
    <footer id="contact" className="mt-6 border-t border-white/10 bg-[#020202] px-6 py-9 md:px-10 md:py-10">
      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/42">Юридическая информация</p>
          <Link href="/legal/privacy" className="mt-3 block text-[15px] text-white/75 transition hover:text-white">
            Политика конфиденциальности
          </Link>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/42">Соц сети</p>
          <a
            href={contactConfig.telegramUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-3 block text-[15px] text-white/75 transition hover:text-white"
          >
            Telegram
          </a>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/42">Как с нами связаться</p>
          <a href={`mailto:${contactConfig.email}`} className="mt-3 block text-[15px] text-white/75 transition hover:text-white">
            {contactConfig.email}
          </a>
        </div>
      </div>

      <div className="mx-auto mt-7 max-w-5xl border-t border-white/10 pt-5">
        <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-white/34">copywrite 2023-2026 MINTUSH ©</p>
      </div>
    </footer>
  )
}
