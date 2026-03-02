import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Согласие на обработку персональных данных",
  description: "Текст согласия пользователя на обработку персональных данных.",
}

export default function PersonalDataPage() {
  return (
    <>
      <SiteHeader ctaHref="/" ctaLabel="На главную" />
      <main>
        <section className="px-6 md:px-10 lg:px-16 pt-32 pb-16 bg-foreground text-primary-foreground">
          <div className="max-w-4xl">
            <h1 className="text-display font-serif text-primary-foreground mb-4">Согласие на обработку персональных данных</h1>
            <p className="text-body-lg text-primary-foreground/70">Текст согласия размещен на отдельной странице в соответствии с требованиями запуска.</p>
          </div>
        </section>

        <section className="px-6 md:px-10 lg:px-16 py-20 md:py-24">
          <div className="max-w-4xl grid gap-5 text-body-lg text-foreground/75">
            <p>1. Пользователь добровольно предоставляет данные в формах сайта для связи и оказания услуг.</p>
            <p>2. Пользователь подтверждает согласие на хранение и обработку данных в рамках законодательства.</p>
            <p>3. Пользователь может отозвать согласие, отправив запрос на email сайта.</p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
