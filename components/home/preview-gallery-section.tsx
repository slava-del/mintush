import Image from "next/image"
import Link from "next/link"

const previews = [
  {
    image: "/images/preview-checklist.jpg",
    caption: "Чек-лист стратегической сессии",
    credit: "Пример материала курса",
  },
  {
    image: "/images/preview-template.jpg",
    caption: "Шаблон декомпозиции целей",
    credit: "Рабочий инструмент",
  },
  {
    image: "/images/preview-presentation.jpg",
    caption: "Фрагмент презентации-руководства",
    credit: "Видеоматериал курса",
  },
]

export function PreviewGallerySection() {
  return (
    <section className="px-6 md:px-10 lg:px-16 py-24 md:py-32 lg:py-40 bg-card">
      <div className="max-w-6xl mx-auto">
        {/* Caption + headline */}
        <p className="text-caption text-muted-foreground mb-6">Превью</p>
        <h2 className="text-h1 font-serif text-foreground mb-4 text-balance max-w-3xl">
          Что вы сможете внедрить после
        </h2>
        <p className="text-body-lg text-muted-foreground mb-16 md:mb-24 max-w-2xl">
          Каждый мини-курс заканчивается конкретным результатом: документом, шаблоном или внедренным процессом.
        </p>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {previews.map((item, i) => (
            <div key={i} className="flex flex-col gap-4">
              <div className="framed-image aspect-[4/3] relative bg-foreground/5">
                <Image
                  src={item.image}
                  alt={item.caption}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-small text-foreground">{item.caption}</p>
                <p className="text-caption text-muted-foreground">{item.credit}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary CTA */}
        <div className="mt-16">
          <Link
            href="#form"
            className="inline-flex items-center justify-center px-8 py-4 border border-foreground/20 text-foreground text-small tracking-wide hover:bg-foreground/5 transition-colors"
          >
            Посмотреть пример материалов
          </Link>
        </div>
      </div>
    </section>
  )
}
