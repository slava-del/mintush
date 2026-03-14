import Image from "next/image"
import { LeadForm } from "@/components/lead-form"

export function FreeWebinarSection() {
  return (
    <section id="free-webinar" className="mx-auto max-w-[1380px] px-6 pb-14 md:px-12 md:pb-16">
      <article className="relative overflow-hidden rounded-[24px] border border-[#e7d2ad]/24 bg-[linear-gradient(108deg,#060606_0%,#070707_52%,#090b16_100%)] p-8 md:p-10 lg:p-12">
        <div className="pointer-events-none absolute right-[-8%] top-[4%] h-[78%] w-[48%] bg-[radial-gradient(circle,rgba(61,88,255,0.28),rgba(61,88,255,0)_68%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,rgba(6,6,6,0)_0%,rgba(6,6,6,0.88)_100%)]" />

        <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-[780px]">
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#e7d2ad]/84">Бесплатный вход</p>
              <span className="inline-flex items-center rounded-[10px] bg-[#ff2d2d] px-3 py-1 text-[18px] font-extrabold uppercase leading-none tracking-[0.02em] text-white">
                LIVE
              </span>
            </div>
            <h2 className="mt-5 max-w-[18ch] text-[34px] font-extrabold leading-[1.02] tracking-[-0.03em] text-[#EDEDED] md:text-[48px]">
              Посмотрите первый вебинар бесплатно
            </h2>
            <p className="mt-5 max-w-[60ch] text-[19px] leading-[1.43] text-[#EDEDED]/80">
              Оставьте контакты — пришлём доступ на почту или в Telegram.
            </p>
            <div className="mt-8 rounded-[18px] border border-[#e7d2ad]/22 bg-[linear-gradient(180deg,rgba(12,12,12,0.72),rgba(8,8,8,0.94))] p-5 md:p-6">
              <LeadForm variant="dark" layout="inline" submitLabel="ПОЛУЧИТЬ ДОСТУП" className="max-w-none" />
            </div>
          </div>

          <div className="relative min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]">
            <div className="pointer-events-none absolute left-[16%] top-[8%] hidden h-[84%] w-[48%] -skew-x-[14deg] rounded-[26px] bg-[linear-gradient(180deg,rgba(57,87,255,0.72),rgba(10,12,38,0.02))] sm:block" />

            <div className="absolute left-[2%] top-[6%] hidden h-[72%] w-[50%] rounded-[34px] border border-white/16 bg-[#09090d]/92 p-2 shadow-[0_24px_72px_rgba(0,0,0,0.72)] sm:block">
              <span className="absolute left-1/2 top-2 h-1 w-16 -translate-x-1/2 rounded-full bg-white/25" />
              <div className="relative h-full overflow-hidden rounded-[28px] border border-white/12">
                <Image src="/images/live-sessions/1.png" alt="Вебинар в прямом эфире" fill className="object-cover object-center" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,3,3,0)_56%,rgba(3,3,3,0.95)_100%)]" />
              </div>
            </div>

            <div className="absolute left-1/2 top-6 h-[80%] w-[74%] -translate-x-1/2 rounded-[34px] border border-white/18 bg-[#09090d]/95 p-2 shadow-[0_30px_85px_rgba(0,0,0,0.78)] sm:left-auto sm:right-0 sm:top-[20%] sm:h-[74%] sm:w-[54%] sm:translate-x-0">
              <span className="absolute left-1/2 top-2 h-1 w-16 -translate-x-1/2 rounded-full bg-white/28" />
              <div className="relative h-full overflow-hidden rounded-[28px] border border-white/12">
                <Image src="/images/live-sessions/2.png" alt="Запись вебинара с ответами на вопросы" fill className="object-cover object-center" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,3,3,0)_58%,rgba(3,3,3,0.96)_100%)]" />
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}
