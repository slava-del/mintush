import Image from "next/image"
import type { BoardHeroContent } from "../data"

type BoardHeroMockupProps = {
  content: BoardHeroContent["mockup"]
}

export function BoardHeroMockup({ content }: BoardHeroMockupProps) {
  return (
    <div className="relative mx-auto w-full max-w-[760px]">
      <article className="relative aspect-square w-full overflow-hidden rounded-[26px] border border-[#e7d2ad]/24 bg-[#090909] shadow-[0_14px_36px_rgba(0,0,0,0.28)]">
        <Image
          src={content.src}
          alt={content.alt}
          fill
          priority
          sizes="(min-width: 1536px) 46vw, (min-width: 1280px) 50vw, (min-width: 1024px) 54vw, 100vw"
          className="object-cover object-center"
        />
      </article>
    </div>
  )
}
