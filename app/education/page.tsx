import type { Metadata } from "next"
import { EducationLanding } from "./education-landing"

export const metadata: Metadata = {
  title: "Обучение — Мини-курсы для руководителей",
  description:
    "Мини-курсы по бизнес-стратегии и управлению бизнесом: практические материалы, цифры, кейсы и публикации в СМИ.",
}

export default function EducationPage() {
  return <EducationLanding />
}
