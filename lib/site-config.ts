export type NavItem = {
  href: string
  label: string
}

export const contactConfig = {
  telegramUrl: "https://t.me/mintush_business",
  email: "info@mintush.business",
  phone: "+373 00 000 000",
}

export const primaryNav: NavItem[] = [
  { href: "/basis", label: "Основы управления" },
  { href: "/board", label: "Совет управленцев" },
  { href: "/adviser", label: "Персональный стратег" },
  { href: "/education", label: "Мини-курсы" },
  { href: "/consulting", label: "Прокачка бизнеса" },
  { href: "/blog", label: "Блог" },
]

export const trustedCompanies = [
  "Company 01",
  "Company 02",
  "Company 03",
  "Company 04",
  "Company 05",
  "Company 06",
  "Company 07",
  "Company 08",
]

export const mentorSummary = {
  name: "Олег Минтуш",
  role: "Управленец | Стратег",
  bullets: [
    "10 лет в цифровизации и систематизации бизнеса",
    "Бывший топ-менеджер международных компаний",
    "Член совета директоров и наблюдательных советов",
  ],
}

export const siteConfig = {
  title: "OLEG MINTUSH — Центр развития управленцев",
  description:
    "Центр развития управленцев: основы управления, совет управленцев, персональный стратег, мини-курсы и архитектура бизнеса.",
}
