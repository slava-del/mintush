import type { Metadata } from "next"
import { ConsultingPageContent } from "./consulting-page"

export const metadata: Metadata = {
  title: "Консалтинг — Архитектура бизнеса",
  description: "Ваш личный бизнес-спецназ: диагностика, перестройка архитектуры управления и внедрение решений до результата.",
}

export default function ConsultingPage() {
  return <ConsultingPageContent />
}
