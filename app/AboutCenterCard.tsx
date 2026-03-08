import Image from "next/image";
import type { RefObject } from "react";
import type { EcosystemFormat } from "./landing-data";

type AboutCenterCardProps = {
  cardRef: RefObject<HTMLDivElement | null>;
  ecosystemFormats: EcosystemFormat[];
};

const trustedLogos = [
  {
    src: "/logos/cropped/cber_marketing.png",
    alt: "Cбер Маркетинг",
    width: 690,
    height: 73,
    sizeClass: "h-[32px] md:h-[40px]",
    slotClass: "w-[260px] md:w-[380px]",
  },
  {
    src: "/logos/cropped/mtc_marketolog.png",
    alt: "МТС Маркетолог",
    width: 431,
    height: 45,
    sizeClass: "h-[28px] md:h-[36px]",
    slotClass: "w-[250px] md:w-[360px]",
  },
  {
    src: "/logos/cropped/cber_sound.png",
    alt: "Cбер Звук",
    width: 535,
    height: 86,
    sizeClass: "h-[32px] md:h-[38px]",
    slotClass: "w-[240px] md:w-[300px]",
  },
  { src: "/logos/cropped/mts_bank.png", alt: "МТС Банк", width: 473, height: 79, sizeClass: "h-[22px] md:h-[28px]" },
  { src: "/logos/cropped/cber.png", alt: "Cбер", width: 517, height: 142, sizeClass: "h-[34px] md:h-[40px]" },
  {
    src: "/logos/cropped/mts_golfstrim.png",
    alt: "МТС Голос Стрим",
    width: 907,
    height: 156,
    sizeClass: "h-[26px] md:h-[32px]",
  },
  { src: "/logos/cropped/okko.png", alt: "Okko", width: 838, height: 298, sizeClass: "h-[30px] md:h-[36px]" },
  {
    src: "/logos/cropped/mtc_ecosystem.png",
    alt: "МТС Экосистема",
    width: 551,
    height: 40,
    sizeClass: "h-[28px] md:h-[36px]",
    slotClass: "w-[320px] md:w-[500px]",
  },
  { src: "/logos/cropped/kion.png", alt: "KION", width: 640, height: 243, sizeClass: "h-[30px] md:h-[36px]" },
  { src: "/logos/cropped/multfilm.png", alt: "Мультфильм", width: 275, height: 203, sizeClass: "h-[42px] md:h-[50px]" },
  { src: "/logos/cropped/rambler.png", alt: "Rambler", width: 599, height: 128, sizeClass: "h-[24px] md:h-[30px]" },
  { src: "/logos/cropped/webinar.png", alt: "Webinar", width: 373, height: 295, sizeClass: "h-[42px] md:h-[50px]" },
];

export function AboutCenterCard({ cardRef, ecosystemFormats }: AboutCenterCardProps) {
  return (
    <div
      ref={cardRef}
      className="h-[calc(100vh-1.5rem)] sm:h-[calc(100vh-2rem)] md:h-[calc(100vh-3rem)] overscroll-contain overflow-x-hidden overflow-y-auto rounded-[28px] border border-[#f6d8ab]/45 bg-[linear-gradient(180deg,#ead6b5_0%,#d7ab6a_58%,#bd8044_100%)] shadow-[0_40px_140px_rgba(0,0,0,0.65)]"
    >
      <div className="flex min-h-full flex-col px-6 pb-8 pt-8 md:px-10 md:pb-10 md:pt-10">
        <h2 className="text-center text-[40px] font-extrabold leading-[1.02] tracking-[-0.03em] text-black md:text-[58px]">
          Школа управления MINTUSH
        </h2>

        <div className="mt-8 grid flex-1 gap-5 xl:grid-cols-[1.35fr_1fr]">
          <article className="flex h-full flex-col rounded-[26px] border border-black/10 bg-[#efe4cf] px-6 py-7 md:px-8 md:py-8">
            <h3 className="max-w-[22ch] text-[29px] font-extrabold leading-[1.03] tracking-[-0.02em] text-black md:text-[40px]">
              3 продукта для развития руководителей
            </h3>
            <div className="mt-auto pt-8 sm:grid sm:grid-cols-2 sm:gap-x-7">
              <div className="grid gap-y-4">
                {ecosystemFormats.slice(0, 2).map((format) => (
                  <a
                    key={format.title}
                    href={format.href}
                    className="group border-b border-black/12 pb-3 transition-opacity hover:opacity-80"
                  >
                    <p className="inline-flex items-center gap-2 text-[24px] font-extrabold leading-[1.08] tracking-[-0.01em] text-black md:text-[28px]">
                      <span>{format.title}</span>
                      <span
                        aria-hidden="true"
                        className="inline-block text-[19px] leading-none opacity-85 transition-transform duration-300 ease-out group-hover:rotate-45 md:text-[21px]"
                      >
                        ↗
                      </span>
                    </p>
                    <p className="mt-3 whitespace-pre-line text-[18px] leading-[1.28] text-black/65 md:text-[20px]">{format.subtitle}</p>
                  </a>
                ))}
              </div>

              <div className="mt-4 flex flex-col justify-end sm:mt-0">
                {ecosystemFormats[2] ? (
                  <a
                    href={ecosystemFormats[2].href}
                    className="group border-b border-black/12 pb-3 transition-opacity hover:opacity-80"
                  >
                    <p className="inline-flex items-center gap-2 text-[24px] font-extrabold leading-[1.08] tracking-[-0.01em] text-black md:text-[28px]">
                      <span>{ecosystemFormats[2].title}</span>
                      <span
                        aria-hidden="true"
                        className="inline-block text-[19px] leading-none opacity-85 transition-transform duration-300 ease-out group-hover:rotate-45 md:text-[21px]"
                      >
                        ↗
                      </span>
                    </p>
                    <p className="mt-3 whitespace-pre-line text-[18px] leading-[1.28] text-black/65 md:text-[20px]">
                      {ecosystemFormats[2].subtitle}
                    </p>
                  </a>
                ) : null}
              </div>
            </div>
          </article>

          <article className="flex h-full flex-col rounded-[26px] border border-black/10 bg-[#ecdfc8] px-6 py-7 md:px-8 md:py-8">
            <h3 className="text-[33px] font-extrabold leading-[1.05] tracking-[-0.03em] text-black md:text-[44px]">
              Меньше ручного управления,
              <br />
              больше системы.
            </h3>
            <p className="mt-6 max-w-[31ch] text-[20px] leading-[1.3] text-black/78 md:text-[24px]">
              Чтобы бизнес работал
              <br />
              предсказуемо и без ручного управления.
            </p>
            <div className="relative mt-auto h-[188px] w-full md:h-[230px]">
              <Image
                src="/images/center/schema.png"
                alt="Схема системного управления"
                fill
                className="object-contain object-bottom opacity-100 contrast-150 brightness-[0.62] saturate-0"
              />
            </div>
          </article>
        </div>

        <div className="mt-auto bg-transparent pb-2 pt-11">
          <h3 className="text-center text-[36px] font-extrabold leading-[1.04] tracking-[-0.028em] text-black md:text-[46px]">
            Нам доверяют
          </h3>
          <div className="mt-7 overflow-hidden bg-transparent">
            <div className="mintush-carousel-track flex w-max items-center gap-8 py-2 md:gap-12">
              {[...trustedLogos, ...trustedLogos].map((logo, index) => (
                <div
                  key={`${logo.src}-${index}`}
                  className={`flex h-[48px] shrink-0 items-center justify-center opacity-90 md:h-[56px] ${
                    logo.slotClass ?? "w-[160px] md:w-[200px]"
                  }`}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    unoptimized
                    className={`${logo.sizeClass} w-auto scale-95 object-contain grayscale brightness-0 opacity-80`}
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
