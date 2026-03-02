export function GptVsSystemSection() {
  return (
    <section className="px-6 md:px-10 lg:px-16 py-24 md:py-32 lg:py-40 bg-foreground text-primary-foreground">
      <div className="max-w-6xl mx-auto">
        {/* Caption */}
        <p className="text-caption text-primary-foreground/30 mb-6">3 экран</p>

        {/* Headline */}
        <h2 className="text-h1 font-serif text-primary-foreground mb-16 md:mb-24 text-balance max-w-4xl">
          GPT-чат может ответить на любой ваш вопрос.
          <br />Но умеете ли вы правильно спросить и применить ответ?
        </h2>
        <p className="text-body-lg text-primary-foreground/60 mb-12 max-w-3xl">
          Уверены ли вы, что не умея «ездить на велосипеде», получится с первого раза?
        </p>

        {/* Two panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-primary-foreground/10">
          {/* Panel A */}
          <div className="bg-foreground p-8 md:p-12 lg:p-16 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <span className="text-caption text-primary-foreground/30">Без системы</span>
              <p className="text-h2 font-serif text-primary-foreground/90">
                Ответ есть, результата нет
              </p>
            </div>

            {/* Minimal SVG: scattered lines */}
            <svg viewBox="0 0 200 80" className="w-full max-w-xs opacity-20" aria-hidden="true">
              <line x1="10" y1="20" x2="60" y2="45" stroke="currentColor" strokeWidth="1" />
              <line x1="40" y1="10" x2="90" y2="60" stroke="currentColor" strokeWidth="1" />
              <line x1="70" y1="30" x2="130" y2="15" stroke="currentColor" strokeWidth="1" />
              <line x1="100" y1="50" x2="160" y2="70" stroke="currentColor" strokeWidth="1" />
              <line x1="140" y1="20" x2="190" y2="40" stroke="currentColor" strokeWidth="1" />
            </svg>

            <p className="text-body-lg text-primary-foreground/40 max-w-sm">
              Менеджеры получают идею, но не знают, как применить ее в операционке и довести до результата.
            </p>
          </div>

          {/* Panel B */}
          <div className="bg-foreground p-8 md:p-12 lg:p-16 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <span className="text-caption text-accent">С системой</span>
              <p className="text-h2 font-serif text-primary-foreground/90">
                Погружение + практика + уверенность
              </p>
            </div>

            {/* Minimal SVG: structured gauge */}
            <svg viewBox="0 0 200 80" className="w-full max-w-xs opacity-40" aria-hidden="true">
              <line x1="10" y1="60" x2="190" y2="60" stroke="currentColor" strokeWidth="1" />
              <line x1="10" y1="60" x2="10" y2="40" stroke="currentColor" strokeWidth="1" />
              <line x1="55" y1="60" x2="55" y2="30" stroke="currentColor" strokeWidth="1.5" />
              <line x1="100" y1="60" x2="100" y2="20" stroke="currentColor" strokeWidth="1.5" />
              <line x1="145" y1="60" x2="145" y2="15" stroke="currentColor" strokeWidth="2" />
              <line x1="190" y1="60" x2="190" y2="10" stroke="currentColor" strokeWidth="2" />
              <circle cx="190" cy="10" r="3" fill="currentColor" className="text-accent" />
            </svg>

            <p className="text-body-lg text-primary-foreground/60 max-w-sm">
              Ваша уникальная возможность: погрузиться в мир управления, подсмотреть у других и стать увереннее.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
