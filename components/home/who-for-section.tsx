const forItems = [
  "Руководители, которые хотят выстроить систему, а не тушить пожары",
  "Собственники, которым нужна предсказуемость и масштабирование",
  "Управленцы, которые понимают: GPT не заменит управленческий опыт",
]

const notForItems = [
  "Тем, кто ищет мотивационный контент",
  "Тем, кому нужен быстрый результат без работы",
  "Тем, кто не готов менять процессы в бизнесе",
]

export function WhoForSection() {
  return (
    <section className="px-6 md:px-10 lg:px-16 py-24 md:py-32 lg:py-40 bg-card">
      <div className="max-w-5xl mx-auto">
        {/* Caption */}
        <p className="text-caption text-muted-foreground mb-6">Аудитория</p>
        <h2 className="text-h1 font-serif text-foreground mb-16 md:mb-24 text-balance">
          Для кого это
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {/* For */}
          <div className="flex flex-col gap-8">
            <span className="text-caption text-foreground/60">Подходит</span>
            <div className="flex flex-col gap-6">
              {forItems.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="text-caption text-accent mt-1 font-mono">+</span>
                  <p className="text-body-lg text-foreground/80 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Not for */}
          <div className="flex flex-col gap-8">
            <span className="text-caption text-foreground/60">Не подходит</span>
            <div className="flex flex-col gap-6">
              {notForItems.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="text-caption text-muted-foreground mt-1 font-mono">&ndash;</span>
                  <p className="text-body-lg text-muted-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
