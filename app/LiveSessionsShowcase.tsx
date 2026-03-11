import Image from "next/image";
import { contactConfig } from "@/lib/site-config";
import type { LiveSessionPhoto } from "./landing-data";

type LiveSessionsShowcaseProps = {
  mainPhoto: LiveSessionPhoto;
  secondaryPhotos: LiveSessionPhoto[];
  className?: string;
};

export function LiveSessionsShowcase({
  mainPhoto,
  secondaryPhotos,
  className = "",
}: LiveSessionsShowcaseProps) {
  const firstAvatar = secondaryPhotos[0] ?? mainPhoto;

  return (
    <div
      className={`relative overflow-hidden px-6 py-8 md:px-10 md:py-10 ${className}`.trim()}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_17%_34%,rgba(0,0,0,0.18)_0%,rgba(0,0,0,0)_42%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_74%_42%,rgba(255,243,225,0.56)_0%,rgba(255,243,225,0)_48%)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-soft-light"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.86' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_40%,rgba(0,0,0,0.24)_100%)]" />

      <div className="relative z-10 mx-auto flex h-full max-w-[1720px] flex-col justify-center lg:grid lg:min-h-[560px] lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1fr)] lg:items-center lg:gap-4 xl:min-h-[600px] xl:grid-cols-[minmax(0,0.82fr)_minmax(0,1fr)] xl:gap-7">
        <div className="flex max-w-[560px] flex-col lg:translate-y-[-18px]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.13em] text-black/62 md:text-[12px]">
            Бонус для участников
          </p>
          <h2
            className="mt-3 font-extrabold leading-[1] tracking-[-0.035em] text-black"
            style={{ fontSize: "clamp(36px, 4.5vw, 66px)" }}
          >
            Чат выпускников
          </h2>

          <p className="mt-4 max-w-[34ch] text-[16px] leading-[1.38] text-black/82 md:text-[18px]">
            Пространство для руководителей, которые уже прошли одну или несколько наших программ. Здесь появляются
            связи, идеи и решения, которые сложно получить в одиночку.
          </p>

          <ul className="mt-7 space-y-3.5">
            <li className="flex items-start gap-3 text-[15px] font-medium leading-[1.34] text-black/84 md:text-[16px]">
              <span aria-hidden="true" className="mt-[11px] inline-block h-px w-4 flex-shrink-0 bg-black/46" />
              доступ в закрытый чат управленцев
            </li>
            <li className="flex items-start gap-3 text-[15px] font-medium leading-[1.34] text-black/84 md:text-[16px]">
              <span aria-hidden="true" className="mt-[11px] inline-block h-px w-4 flex-shrink-0 bg-black/46" />
              ежемесячный нетворк и выступления гостей
            </li>
            <li className="flex items-start gap-3 text-[15px] font-medium leading-[1.34] text-black/84 md:text-[16px]">
              <span aria-hidden="true" className="mt-[11px] inline-block h-px w-4 flex-shrink-0 bg-black/46" />
              площадка, где подскажут, как решить вашу задачу
            </li>
          </ul>

          <div className="mt-7 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-2.5">
            <a
              href={contactConfig.telegramUrl}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex h-[56px] items-center gap-3 self-start rounded-[16px] bg-black px-5 py-4 shadow-[0_16px_44px_rgba(0,0,0,0.35)] ring-1 ring-black/15 transition hover:translate-y-[-1px]"
            >
              <span className="text-[14px] font-semibold leading-tight text-[#e7d2ad] md:text-[15px]">
                Смотреть подробнее
              </span>
              <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-full bg-[#e7d2ad] text-black transition group-hover:bg-[#f0dfbf]">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M8 16l8-8M10 8h6v6"
                    stroke="currentColor"
                    strokeWidth="2.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>

            <a
              href={contactConfig.telegramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-[56px] items-center gap-1.5 self-start px-1 py-1 text-[14px] font-semibold text-black/66 transition hover:text-black/86 md:text-[15px]"
            >
              Подобрать формат в Telegram
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M8 16l8-8M10 8h6v6"
                  stroke="currentColor"
                  strokeWidth="2.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="relative mt-8 flex min-h-0 flex-1 items-center justify-center lg:mt-0 lg:self-stretch lg:translate-y-[-8px]">
          <div className="pointer-events-none absolute inset-[12%_10%_10%_14%] hidden bg-[radial-gradient(circle,rgba(255,244,226,0.42)_0%,rgba(255,244,226,0)_68%)] blur-3xl lg:block" />

          <div className="relative w-full max-w-[820px] rounded-[28px] border border-black/16 bg-[#060606] p-4 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03),0_28px_84px_rgba(0,0,0,0.5)] md:p-5 lg:w-[104%] xl:w-[108%]">
            <div className="rounded-[20px] border border-white/10 bg-[#0a0a0a] p-4 md:p-5">
              <div className="flex items-center justify-between border-b border-white/8 pb-3">
                <div>
                  <p className="text-[14px] font-semibold text-white/90">Чат выпускников</p>
                  <p className="text-[12px] text-white/52">214 участников</p>
                </div>
                <span className="status-pulse inline-flex items-center gap-1 rounded-full border border-[#e7d2ad]/32 bg-[#e7d2ad]/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.07em] text-[#e7d2ad]">
                  online
                </span>
              </div>

              <div className="mt-4 space-y-3">
                <div className="live-msg live-msg-1 flex items-start gap-2.5">
                  <div className="relative h-8 w-8 overflow-hidden rounded-full border border-white/12">
                    <Image
                      src="/tg_client_profile_image.jpg"
                      alt={firstAvatar.alt || "Профиль клиента"}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="max-w-[86%] rounded-[14px] border border-white/10 bg-white/[0.045] px-3 py-2 text-[13px] leading-[1.3] text-white/84">
                    Коллеги, нужен сильный операционный руководитель для e-commerce команды.
                  </div>
                </div>

                <div className="live-msg live-msg-2 flex items-start justify-end gap-2.5">
                  <div className="max-w-[84%] rounded-[14px] border border-[#e7d2ad]/24 bg-[#e7d2ad]/10 px-3 py-2 text-[13px] leading-[1.3] text-[#f2e2c3]">
                    Смотри не только опыт в операционке, но и навык выстраивания ритма управления.
                  </div>
                  <div className="relative h-8 w-8 overflow-hidden rounded-full border border-white/12">
                    <Image src="/tg_profile_image.png" alt="Профиль Telegram" fill className="object-cover" />
                  </div>
                </div>

                <div className="live-event rounded-[14px] border border-[#e7d2ad]/28 bg-[linear-gradient(180deg,rgba(231,210,173,0.16),rgba(231,210,173,0.06))] px-3 py-2.5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#e7d2ad]/92">Нетворк</p>
                  <p className="mt-1 text-[13px] font-medium text-white/82">24 апреля · online</p>
                </div>

                <div className="rounded-[12px] border border-white/10 bg-white/[0.03] px-3 py-2 text-[12px] font-semibold text-white/74">
                  Гость месяца: ex-CPO / growth-разбор
                </div>

                <div className="flex flex-wrap gap-2">
                  {["Маркетинг", "Операционка", "HR", "B2B"].map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-white/12 bg-white/[0.02] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.07em] text-white/64"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .live-msg {
          animation: messageFloat 6.8s ease-in-out infinite;
        }

        .live-msg-1 {
          animation-delay: 120ms;
        }

        .live-msg-2 {
          animation-delay: 780ms;
        }

        .live-event {
          animation: eventFade 5.4s ease-in-out infinite;
        }

        .status-pulse {
          animation: statusPulse 2.3s ease-in-out infinite;
        }

        @keyframes messageFloat {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes eventFade {
          0%,
          100% {
            opacity: 0.86;
            transform: translateY(0);
          }
          50% {
            opacity: 1;
            transform: translateY(-3px);
          }
        }

        @keyframes statusPulse {
          0%,
          100% {
            box-shadow: 0 0 0 0 rgba(231, 210, 173, 0.32);
          }
          50% {
            box-shadow: 0 0 0 8px rgba(231, 210, 173, 0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .live-msg,
          .live-event,
          .status-pulse {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
