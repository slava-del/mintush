import Link from "next/link"
import { contactConfig } from "@/lib/site-config"

export function ContactFooter() {
  return (
    <footer id="contact" className="border-t border-[#e7d2ad]/20 bg-[#020202] px-6 py-10 md:px-10 md:py-12">
      <div className="mx-auto grid max-w-[1380px] gap-8 md:grid-cols-4">
        <div>
          <p className="mt-3 text-[20px] font-semibold tracking-[-0.02em] text-[#EDEDED]">OLEG MINTUSH</p>
        </div>

        <div>
          <Link href="/legal/privacy" className="mt-3 block text-[15px] text-[#EDEDED]/78 transition hover:text-[#EDEDED]">
            политика конфиденциальности
          </Link>
        </div>

        <div>
          <p className="text-[11px] font-semibold tracking-[0.12em] text-[#e7d2ad]/78">соц сети</p>
          <a
            href={contactConfig.telegramUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-3 block text-[15px] text-[#EDEDED]/78 transition hover:text-[#EDEDED]"
          >
            Telegram
          </a>
        </div>

        <div>
          <p className="text-[11px] font-semibold tracking-[0.12em] text-[#e7d2ad]/78">как с нами связаться</p>
          <a href={`mailto:${contactConfig.email}`} className="mt-3 block text-[15px] text-[#EDEDED]/78 transition hover:text-[#EDEDED]">
            {contactConfig.email}
          </a>
        </div>
      </div>

      <p className="mx-auto mt-8 max-w-[1380px] border-t border-[#e7d2ad]/20 pt-5 text-[12px] font-semibold uppercase tracking-[0.1em] text-[#EDEDED]/38">
        copywrite 2023-2026 MINTUSH ©
      </p>
    </footer>
  )
}
