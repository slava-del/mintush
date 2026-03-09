import Link from "next/link";
import Image from "next/image";
import { memo, type RefObject } from "react";
import { contactConfig } from "@/lib/site-config";
import type { LiveSessionPhoto } from "./landing-data";

type LiveSessionsCardProps = {
  cardRef: RefObject<HTMLDivElement | null>;
  mainPhoto: LiveSessionPhoto;
  secondaryPhotos: LiveSessionPhoto[];
};

export const LiveSessionsCard = memo(function LiveSessionsCard({
  cardRef,
  mainPhoto,
  secondaryPhotos,
}: LiveSessionsCardProps) {
  return (
    <div
      ref={cardRef}
      className="overflow-hidden rounded-[28px] border border-[#f6d8ab]/45 bg-[linear-gradient(180deg,#ead6b5_0%,#d7ab6a_58%,#bd8044_100%)] shadow-[0_40px_140px_rgba(0,0,0,0.65)]"
    >
      <div className="flex min-h-full flex-col">
        <div className="h-[calc(100vh-1.5rem)] flex-none px-6 pb-6 pt-8 sm:h-[calc(100vh-2rem)] md:h-[calc(100vh-3rem)] md:px-10 md:pb-8 md:pt-10">
          <div className="flex h-full flex-col lg:flex-row lg:items-stretch lg:gap-10 xl:gap-14">
          <div className="flex flex-col justify-center pb-6 lg:w-1/2 lg:flex-shrink-0 lg:pb-0">
            <h2
              className="font-extrabold leading-[1] tracking-[-0.035em] text-black"
              style={{ fontSize: "clamp(34px, 4.2vw, 62px)" }}
            >
              Живые разборы.
              <br />
              Реальные задачи.
            </h2>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <a
                href={contactConfig.telegramUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex h-[56px] items-center gap-3 self-start rounded-[16px] bg-black px-5 py-4 shadow-[0_16px_44px_rgba(0,0,0,0.35)] ring-1 ring-black/15 transition hover:translate-y-[-1px]"
              >
                <span className="text-[14px] font-semibold leading-tight text-[#e7d2ad] md:text-[15px]">
                  Записаться на встречу
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
                className="inline-flex h-[56px] items-center gap-1.5 self-start px-1 py-1 text-[14px] font-semibold text-black/55 transition hover:text-black/80 md:text-[15px]"
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

          <div className="flex min-h-0 flex-1 flex-col gap-2.5 md:gap-3 lg:w-1/2 lg:flex-shrink-0">
            <div className="relative min-h-0 flex-[3] overflow-hidden rounded-[22px] border border-black/10">
              <Image src={mainPhoto.src} alt={mainPhoto.alt} fill className="object-cover" />
            </div>

            <div className="grid min-h-0 flex-[2] grid-cols-2 gap-2.5 md:gap-3">
              {secondaryPhotos.map((photo) => (
                <div
                  key={photo.src}
                  className="relative h-full min-h-0 overflow-hidden rounded-[18px] border border-black/10"
                  style={photo.mirrored ? { transform: "scaleX(-1)" } : undefined}
                >
                  <Image src={photo.src} alt={photo.alt} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>

        <footer className="flex-none border-t border-black/18 px-6 py-8 md:px-10 md:py-9">
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-black/45">
                Юридическая информация
              </p>
              <Link
                href="/legal/privacy"
                className="mt-3 block text-[15px] font-medium text-black/72 transition hover:text-black"
              >
                Политика конфиденциальности
              </Link>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-black/45">
                Соц сети
              </p>
              <a
                href={contactConfig.telegramUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-3 block text-[15px] font-medium text-black/72 transition hover:text-black"
              >
                Telegram
              </a>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-black/45">
                Как с нами связаться
              </p>
              <a
                href={`mailto:${contactConfig.email}`}
                className="mt-3 block text-[15px] font-medium text-black/72 transition hover:text-black"
              >
                {contactConfig.email}
              </a>
            </div>
          </div>

          <div className="mx-auto mt-7 max-w-5xl border-t border-black/16 pt-5">
            <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-black/48">
              copywrite 2023-2026 MINTUSH ©
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
});
