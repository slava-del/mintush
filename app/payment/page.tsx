import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Оплата услуг",
  description: "Страница оплаты: оплата в долларах (M-Pay) и в рублях (Тинькофф Pay).",
}

const paymentOptions = [
  {
    title: "Оплата в $ для Молдовы",
    method: "M-Pay",
    status: "Интеграция подготовлена в структуре страницы",
  },
  {
    title: "Оплата в рублях для РФ",
    method: "Тинькофф Pay",
    status: "Интеграция подготовлена в структуре страницы",
  },
]

export default function PaymentPage() {
  return (
    <>
      <SiteHeader ctaHref="/" ctaLabel="На главную" />
      <main>
        <section className="px-6 md:px-10 lg:px-16 pt-32 pb-16 bg-foreground text-primary-foreground">
          <div className="max-w-5xl">
            <h1 className="text-display font-serif text-primary-foreground mb-4">Оплата услуг</h1>
            <p className="text-body-lg text-primary-foreground/70">
              В проект заложены 2 опции оплаты: для Молдовы и для РФ.
            </p>
          </div>
        </section>

        <section className="px-6 md:px-10 lg:px-16 py-20 md:py-24">
          <div className="max-w-5xl grid md:grid-cols-2 gap-6">
            {paymentOptions.map((option) => (
              <article key={option.title} className="border border-border bg-card p-6 md:p-8">
                <h2 className="text-h3 font-serif text-foreground mb-2">{option.title}</h2>
                <p className="text-body-lg text-foreground/75 mb-2">Метод: {option.method}</p>
                <p className="text-small text-muted-foreground">{option.status}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
