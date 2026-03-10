import Image from "next/image"
import type { TrustedLogo } from "../types"

type TrustedSectionProps = {
  trustedLogos: TrustedLogo[]
}

export function TrustedSection({ trustedLogos }: TrustedSectionProps) {
  return (
    <section data-section-id="trusted" className="px-6 pb-12 md:px-10 md:pb-14">
      <div className="mx-auto max-w-5xl rounded-[24px] border border-white/10 bg-[#030303] px-5 py-8 md:px-8 md:py-10">
        <h3 className="text-center text-[34px] font-extrabold leading-[1.04] tracking-[-0.03em] text-white md:text-[50px]">
          Нам доверяют
        </h3>
        <div className="mt-7 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {trustedLogos.map((logo) => (
            <div
              key={logo.src}
              className="flex h-[72px] items-center justify-center rounded-[12px] border border-white/12 bg-[#0b0b0b] px-3"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                unoptimized
                className={`${logo.sizeClass} w-auto object-contain opacity-95`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
