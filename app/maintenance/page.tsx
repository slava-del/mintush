import type { Metadata } from "next"
import { MaintenancePage } from "@/components/maintenance-page"

export const metadata: Metadata = {
  title: "Раздел в разработке — MINTUSH",
  description: "Страница временно недоступна. Мы работаем над обновлением раздела.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function MaintenanceRoutePage() {
  return <MaintenancePage />
}
