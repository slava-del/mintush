export type TopicLink = {
  label: string
  href: string
}

export type MonthlyQuestionId = "direction" | "metrics" | "decisions"

export type MonthlyQuestion = {
  id: MonthlyQuestionId
  text: string
}

export type ResultItem = {
  id: string
  title: string
  description: string
}

export type MentorStat = {
  value: string
  label: string
}

export type FormatHighlight = {
  lead: string
  support: string
}

export type TariffCard = {
  id: string
  title: string
  modalTitle?: string
  price: string
  intro: string
  includes: string[]
  button: string
  cardBackground: string
  cardBorder: string
  titleColor: string
  includesColor: string
  buttonBackground: string
  buttonBorder: string
  buttonText: string
  buttonFilled: boolean
  glow: string
  isFeatured?: boolean
}

export type EnrollmentPanelCopy = {
  programTag: string
  programName: string
  summary: string
  note: string
  quote: string
  helperText: string
}

export type FaqItem = {
  question: string
  answer: string
}

export type OutcomeCard = {
  id: string
  title: string
  description: string
  className?: string
}

export type BlueprintModule = readonly [string, string, string]
