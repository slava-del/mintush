import Link from "next/link";
import { memo, type RefObject } from "react";
import { contactConfig } from "@/lib/site-config";
import type { LiveSessionPhoto } from "./landing-data";
import { LiveSessionsShowcase } from "./LiveSessionsShowcase";

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
      className="flex min-h-[calc(100vh-1.5rem)] flex-col overflow-hidden rounded-[28px] border border-[#f6d8ab]/45 bg-[linear-gradient(180deg,#ead6b5_0%,#d7ab6a_58%,#bd8044_100%)] shadow-[0_40px_140px_rgba(0,0,0,0.65)] sm:min-h-[calc(100vh-2rem)] md:min-h-[calc(100vh-3rem)]"
    >
      <div className="relative flex min-h-full flex-col">
        <LiveSessionsShowcase
          mainPhoto={mainPhoto}
          secondaryPhotos={secondaryPhotos}
          className="flex-1"
        />

        <footer id="contact" className="mt-auto flex-none border-t border-black/18 px-6 py-8 md:px-10 md:py-9">
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
