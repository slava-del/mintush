import { Signature } from "@/components/signature"

const blocks = [
  {
    title: "Контекст и ответственность",
    text: "Наставник понимает контекст вашего бизнеса. Он несет ответственность за рекомендации и отвечает за систему, а не за набор фраз.",
  },
  {
    title: "Структура и шаги",
    text: "Не набор разрозненных советов, а последовательная система: от диагностики до внедрения, с конкретными этапами и контрольными точками.",
  },
  {
    title: "Примеры и шаблоны",
    text: "Каждый принцип подкреплен разбором реального кейса, шаблоном для внедрения и чек-листом для проверки результата.",
  },
]

export function ManifestoSection() {
  return (
    <section className="px-6 md:px-10 lg:px-16 py-24 md:py-32 lg:py-40">
      <div className="max-w-5xl">
        {/* Caption */}
        <p className="text-caption text-muted-foreground mb-6">Манифест</p>

        {/* Headline */}
        <h2 className="text-h1 font-serif text-foreground mb-16 md:mb-24 text-balance max-w-3xl">
          Наставник важнее контента.
        </h2>

        {/* Blocks */}
        <div className="flex flex-col gap-16 md:gap-20">
          {blocks.map((block, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-4 md:gap-16">
              <span className="text-caption text-muted-foreground md:w-48 flex-shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-col gap-3 max-w-xl">
                <h3 className="text-h3 font-serif text-foreground">{block.title}</h3>
                <p className="text-body-lg text-muted-foreground leading-relaxed">{block.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Signature */}
        <div className="mt-16 md:mt-24">
          <Signature className="w-40 text-foreground/20" />
        </div>
      </div>
    </section>
  )
}
