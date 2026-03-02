import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  description: "Политика обработки и хранения персональных данных сайта MINTUSH.",
}

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader ctaHref="/" ctaLabel="На главную" />
      <main>
        <section className="px-6 md:px-10 lg:px-16 pt-32 pb-16 bg-foreground text-primary-foreground">
          <div className="max-w-4xl">
            <h1 className="text-display font-serif text-primary-foreground mb-4">Политика конфиденциальности</h1>
            <p className="text-body-lg text-primary-foreground/70">Документ описывает порядок сбора, хранения и использования данных пользователей.</p>
          </div>
        </section>

        <section className="px-6 md:px-10 lg:px-16 py-20 md:py-24">
          <div className="max-w-4xl grid gap-5 text-body-lg text-foreground/75">
            <p>1. Мы запрашиваем только необходимые данные: имя, email и telegram для обратной связи и предоставления услуг.</p>
            <p>2. Данные не передаются третьим лицам без законных оснований и согласия пользователя.</p>
            <p>3. Пользователь может запросить удаление персональных данных через email сайта.</p>
            <p>4. При использовании форм вы подтверждаете согласие с этой политикой.</p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
