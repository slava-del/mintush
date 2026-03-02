import Link from "next/link"
import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Signature } from "@/components/signature"

export const metadata: Metadata = {
  title: "Спасибо — OLEG MINTUSH",
  description: "Мы получили вашу заявку.",
}

export default function ThanksPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen flex flex-col justify-center bg-foreground text-primary-foreground">
        <div className="px-6 md:px-10 lg:px-16 py-32">
          <div className="max-w-3xl">
            <p className="text-caption text-primary-foreground/30 mb-6">Заявка принята</p>
            <h1 className="text-display font-serif text-primary-foreground mb-8 text-balance">
              Спасибо
            </h1>
            <p className="text-h3 text-primary-foreground/50 mb-4 max-w-xl leading-relaxed">
              Мы отправим вам детали участия и следующий шаг в ближайшее время.
            </p>
            <p className="text-body-lg text-primary-foreground/30 mb-12 max-w-lg">
              Пока вы ждете, можно перейти к наставничеству или мини-курсам.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link
                href="/adviser"
                className="inline-flex items-center justify-center px-8 py-4 border border-primary-foreground/20 text-primary-foreground text-small tracking-wide hover:bg-primary-foreground/5 transition-colors"
              >
                Персональный стратег
              </Link>
              <Link
                href="/education"
                className="inline-flex items-center justify-center px-8 py-4 border border-primary-foreground/20 text-primary-foreground text-small tracking-wide hover:bg-primary-foreground/5 transition-colors"
              >
                Мини-курсы
              </Link>
            </div>

            <Signature className="w-32 text-primary-foreground/15" />
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
