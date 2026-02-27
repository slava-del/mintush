import { LeadForm } from "@/components/lead-form"

export function FinalCtaSection() {
  return (
    <section id="form" className="relative px-6 md:px-10 lg:px-16 py-24 md:py-32 lg:py-40 bg-foreground text-primary-foreground">
      <div className="max-w-4xl mx-auto">
        {/* Caption */}
        <p className="text-caption text-primary-foreground/30 mb-6">Начать</p>

        {/* Promise */}
        <h2 className="text-h1 font-serif text-primary-foreground mb-6 text-balance max-w-3xl">
          Получите программу мини-курсов и начните внедрять системное управление.
        </h2>
        <p className="text-body-lg text-primary-foreground/40 mb-12 max-w-xl">
          Оставьте Telegram или email. Мы отправим программу курса, пример материалов и условия участия.
        </p>

        {/* Form */}
        <LeadForm variant="dark" />
      </div>
    </section>
  )
}
