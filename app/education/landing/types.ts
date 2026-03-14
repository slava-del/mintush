export type RoleKey = "finance" | "ops" | "team"

export type TopNavTopic = {
  label: string
  sectionId: string
}

export type RoleOption = {
  key: RoleKey
  label: string
}

export type StoryChapter = {
  title: string
  description: string
  problem: string
  cta: string
}

export type JourneyStep = {
  number: string
  title: string
  pillars: string[]
  action: string
}

export type RoleProfile = {
  gap: string
  bullets: string[]
  story: StoryChapter[]
}

export type LearningStat = {
  value: string
  lines: string[]
}

export type DeliveryBlock = {
  title: string
  lines: string[]
}

export type TrustedLogo = {
  src: string
  alt: string
  width: number
  height: number
  sizeClass: string
  slotClass: string
}

export type Course = {
  title: string
  description: string
  items: string[]
  href: string
}
