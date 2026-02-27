import { mentor } from "@/lib/data"

export function ProofSection() {
  return (
    <section className="px-6 md:px-10 lg:px-16 py-24 md:py-32 lg:py-40">
      <div className="max-w-6xl mx-auto">
        {/* Big numbers */}
        <div className="flex flex-col md:flex-row gap-16 md:gap-24 mb-20 md:mb-28">
          {mentor.stats.map((stat, i) => (
            <div key={i} className="flex flex-col gap-2">
              <span className="text-display font-serif text-foreground">{stat.value}</span>
              <span className="text-body-lg text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Logos strip */}
        <div className="fade-edges mb-20 md:mb-28">
          <div className="flex items-center justify-center gap-12 md:gap-20 py-8 border-y border-border">
            {mentor.pressLogos.map((logo, i) => (
              <span
                key={i}
                className="text-h3 font-serif text-muted-foreground/30 whitespace-nowrap"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>

        {/* Pull quote */}
        <div className="max-w-3xl">
          <blockquote className="border-l-2 border-accent pl-8 md:pl-12">
            <p className="text-h3 font-serif text-foreground/80 leading-relaxed mb-6">
              {mentor.testimonial.text}
            </p>
            <footer className="flex flex-col gap-1">
              <span className="text-small text-foreground">{mentor.testimonial.author}</span>
              <span className="text-caption text-muted-foreground">{mentor.testimonial.role}</span>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
