import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ConsultingPageContent } from "@/components/consulting-page"

export const metadata: Metadata = {
  title: "Консалтинг — Архитектура бизнеса",
  description: "Ваш личный бизнес-спецназ: диагностика, перестройка архитектуры управления и внедрение решений до результата.",
}

export default function ConsultingPage() {
  return (
    <>
      <SiteHeader ctaHref="#form" ctaLabel="Получить консультацию" />
      <ConsultingPageContent />
      <SiteFooter />
    </>
  )
}
