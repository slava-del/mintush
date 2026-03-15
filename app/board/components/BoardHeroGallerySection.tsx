import Image from "next/image"

export function BoardHeroGallerySection() {
  return (
    <section aria-label="Фото участников клуба" className="mt-6 md:mt-8">
      <div className="grid gap-4 md:grid-cols-2 md:gap-6">
        <article className="overflow-hidden rounded-[22px] border border-[#e7d2ad]/22 bg-[#0d0d0d] shadow-[0_12px_32px_rgba(0,0,0,0.28)]">
          <div className="relative aspect-[4/3]">
            <Image
              src="/images/board/people1.jpg"
              alt="Участники клуба обсуждают рабочие задачи"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-center"
            />
          </div>
        </article>

        <article className="overflow-hidden rounded-[22px] border border-[#e7d2ad]/22 bg-[#0d0d0d] shadow-[0_12px_32px_rgba(0,0,0,0.28)]">
          <div className="relative aspect-[4/3]">
            <Image
              src="/images/board/people2.jpg"
              alt="Командное обсуждение в сообществе руководителей"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-center"
            />
          </div>
        </article>
      </div>
    </section>
  )
}
