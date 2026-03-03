import Image from "next/image";
import type { RefObject } from "react";
import type { EcosystemFormat, LogoPlaceholder } from "./landing-data";

type AboutCenterCardProps = {
  cardRef: RefObject<HTMLDivElement | null>;
  ecosystemFormats: EcosystemFormat[];
  logoPlaceholders: LogoPlaceholder[];
};

export function AboutCenterCard({
  cardRef,
  ecosystemFormats,
  logoPlaceholders,
}: AboutCenterCardProps) {
  return (
    <div
      ref={cardRef}
      className="h-[calc(100vh-1.5rem)] sm:h-[calc(100vh-2rem)] md:h-[calc(100vh-3rem)] overscroll-contain overflow-x-hidden overflow-y-auto rounded-[28px] border border-[#f6d8ab]/45 bg-[linear-gradient(180deg,#ead6b5_0%,#d7ab6a_58%,#bd8044_100%)] shadow-[0_40px_140px_rgba(0,0,0,0.65)]"
    >
      <div className="px-6 pb-8 pt-8 md:px-10 md:pb-10 md:pt-10">
        <h2 className="text-center text-[40px] font-extrabold leading-[1.02] tracking-[-0.03em] text-black md:text-[58px]">
          О центре MINTUSH
        </h2>

        <div className="mt-8 grid gap-5 xl:grid-cols-[1.35fr_1fr]">
          <article className="flex h-full flex-col rounded-[26px] border border-black/10 bg-[#efe4cf] px-6 py-7 md:px-8 md:py-8">
            <h3 className="max-w-[22ch] text-[29px] font-extrabold leading-[1.03] tracking-[-0.02em] text-black md:text-[40px]">
              В экосистеме MINTUSH - 4 форматa развития руководителей
            </h3>
            <div className="mt-auto grid gap-x-7 gap-y-4 pt-8 sm:grid-cols-2">
              {ecosystemFormats.map((format) => (
                <a
                  key={format.title}
                  href={format.href}
                  className="group border-b border-black/14 pb-4 transition-opacity hover:opacity-80"
                >
                  <p className="inline-flex items-center gap-2 text-[20px] font-extrabold leading-[1.08] tracking-[-0.01em] text-black">
                    <span>{format.title}</span>
                    <span aria-hidden="true" className="text-[16px] leading-none opacity-85">
                      ↗
                    </span>
                  </p>
                  <p className="mt-2 text-[16px] leading-[1.25] text-black/65">{format.subtitle}</p>
                </a>
              ))}
            </div>
          </article>

          <article className="rounded-[26px] border border-black/10 bg-[#ecdfc8] px-6 py-7 md:px-8 md:py-8">
            <h3 className="text-[33px] font-extrabold leading-[1.05] tracking-[-0.03em] text-black md:text-[44px]">
              Наша миссия:
              <br />
              сделать управление системным.
            </h3>
            <p className="mt-6 max-w-[31ch] text-[20px] leading-[1.3] text-black/78 md:text-[24px]">
              Чтобы бизнес работал предсказуемо и без "ручного управления".
            </p>
            <div className="relative mt-6 h-[188px] w-full md:h-[230px]">
              <Image
                src="/images/center/schema.png"
                alt="Схема системного управления"
                fill
                className="object-contain object-bottom opacity-90 mix-blend-multiply"
              />
            </div>
          </article>
        </div>

        <div className="mt-11 pb-2">
          <h3 className="text-center text-[36px] font-extrabold leading-[1.04] tracking-[-0.028em] text-black md:text-[46px]">
            Нашими технологиями пользуются
          </h3>
          <div className="mt-7 overflow-hidden">
            <div className="mintush-carousel-track flex w-max items-center gap-14 py-2 md:gap-20">
              {[...logoPlaceholders, ...logoPlaceholders].map((logo, index) => (
                <div key={`${logo.id}-${index}`} className={`shrink-0 ${logo.opacity}`}>
                  <Image
                    src="/placeholder-logo.svg"
                    alt={`Лого-плейсхолдер ${logo.id}`}
                    width={215}
                    height={48}
                    className={`${logo.size} w-auto object-contain mix-blend-multiply`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .mintush-carousel-track {
          animation: mintushMarquee 34s linear infinite;
        }

        @keyframes mintushMarquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
