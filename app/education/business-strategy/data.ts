import type {
  EnrollmentPanelCopy,
  FaqItem,
  FormatHighlight,
  MentorStat,
  MonthlyQuestion,
  ResultItem,
  TariffCard,
  TopicLink,
} from "../course-shared"

export const strategyMetadata = {
  title: "Курс: Стратегия бизнеса на 12 месяцев",
  description:
    "Практический курс для владельцев и руководителей МСБ: соберите стратегию на 12 месяцев и встроите её в операционное управление.",
}

export const strategyValuePoints = [
  "ясность: где бизнес сейчас и куда идём",
  "фокус: что делаем и что не делаем в этом году",
  "управление: ритм, метрики, ответственность, корректировки по факту",
]

export const strategyWhoFor = [
  "принимают большинство решений и устали тащить всё на себе",
  "хотят расти без хаоса, авралов и выгорания команды",
  "уже пробовали делать стратегию, но внедрение буксует",
  "хотят управлять через цели и результат, а не через постоянное присутствие",
]

export const strategyFinalResultItems: ResultItem[] = [
  {
    id: "01",
    title: "Стратегия на 1 год",
    description: "цели, фокус, метрики и ключевые инициативы на нескольких страницах",
  },
  {
    id: "02",
    title: "Карта «сейчас → цель»",
    description: "исходная точка, ограничения и приоритеты движения",
  },
  {
    id: "03",
    title: "Механизм внедрения",
    description: "роли, зоны ответственности и управленческий ритм",
  },
  {
    id: "04",
    title: "Операционная система стратегии",
    description: "plan/fact, корректировки и регулярный контроль метрик",
  },
]

export const strategyGuides = [
  "Бизнес начинается с бизнес-модели",
  "Алгоритм создания стратегии",
  "Успешное внедрение стратегии",
  "Регулярная работа со стратегией",
]

export const strategyWebinars = [
  "Как устроена бизнес-модель",
  "Как создать стратегию бизнеса",
  "Формирование стратегии бизнеса на следующий год",
  "Алгоритм работы стратегии",
  "Успешное внедрение стратегии",
  "Регулярная работа со стратегией",
]

export const strategyFormatHighlights: FormatHighlight[] = [
  {
    lead: "Записи остаются у вас",
    support: "Проходите курс в удобном темпе и возвращайтесь к нужным темам в любой момент.",
  },
  {
    lead: "Руководства как чек-листы",
    support: "Прочитал, сделал, получил результат. Без лишней теории и перегруза.",
  },
  {
    lead: "Точечная работа с экспертом",
    support: "В расширенных пакетах: разбор ваших задач и решений по шагам.",
  },
]

export const strategyTariffCards: TariffCard[] = [
  {
    id: "basic",
    title: "БАЗОВЫЙ",
    modalTitle: "Базовый",
    price: "$…",
    intro: "Для самостоятельной работы",
    includes: ["4 руководства + 6 вебинаров"],
    button: "Купить пакет «Базовый»",
    cardBackground: "#0B0B0D",
    cardBorder: "rgba(201, 166, 107, 0.22)",
    titleColor: "#C8A06A",
    includesColor: "rgba(200, 160, 106, 0.72)",
    buttonBackground: "rgba(18,18,19,0.62)",
    buttonBorder: "#8F6A3A",
    buttonText: "#F4E7D3",
    buttonFilled: false,
    glow: "0 0 0 1px rgba(201,166,107,0.06) inset",
  },
  {
    id: "support",
    title: "С ПОДДЕРЖКОЙ",
    modalTitle: "С поддержкой",
    price: "$…",
    intro: "Если важно свериться с экспертом и не застрять",
    includes: ["всё из «Базового тарифа»", "шаблон стратегии", "индивидуальная консультация с экспертом курса на 30 минут"],
    button: "Купить пакет «С поддержкой»",
    cardBackground: "linear-gradient(180deg,#111111 0%,#0D0D0E 100%)",
    cardBorder: "rgba(212, 177, 116, 0.5)",
    titleColor: "#D4B174",
    includesColor: "rgba(212, 177, 116, 0.82)",
    buttonBackground: "#C9A06B",
    buttonBorder: "#C9A06B",
    buttonText: "#111111",
    buttonFilled: true,
    isFeatured: true,
    glow: "0 0 0 1px rgba(212,177,116,0.14) inset, 0 24px 60px rgba(212,177,116,0.16)",
  },
  {
    id: "turnkey",
    title: "СТРАТЕГИЯ ПОД КЛЮЧ",
    modalTitle: "Под ключ",
    price: "$…",
    intro: "Если нужен быстрый результат и готовая стратегия",
    includes: ["всё из тарифа «С поддержкой»", "помощь эксперта в сборке стратегии вашего бизнеса"],
    button: "Купить пакет «Под ключ»",
    cardBackground: "linear-gradient(180deg,#100E0C 0%,#0B0B0C 100%)",
    cardBorder: "rgba(224, 190, 132, 0.38)",
    titleColor: "#E0BE84",
    includesColor: "#A98553",
    buttonBackground: "rgba(34,23,14,0.55)",
    buttonBorder: "#D7B278",
    buttonText: "#FFF4E3",
    buttonFilled: false,
    glow: "0 0 0 1px rgba(224,190,132,0.08) inset",
  },
]

export const strategyEnrollmentPanel: EnrollmentPanelCopy = {
  programTag: "Практический курс",
  programName: "Стратегия бизнеса на 12 месяцев",
  summary: "Выберите пакет участия, оставьте контакты, и мы поможем зайти в курс с тем уровнем сопровождения, который нужен вашему бизнесу сейчас.",
  note: "Формат можно подобрать под ваш темп, глубину проработки и текущую задачу команды.",
  quote: "«Стратегия должна переходить в операционную систему управления, а не оставаться презентацией.»",
  helperText: "После отправки мы свяжемся с вами в Telegram или по email и согласуем следующий шаг.",
}

export const strategyFaqItems: FaqItem[] = [
  {
    question: "Курс подойдёт, если у меня совсем небольшой бизнес?",
    answer: "Да. В МСБ стратегия особенно важна: ресурсы ограничены, а ошибки стоят дорого.",
  },
  {
    question: "Сколько времени займёт?",
    answer:
      "Можно пройти быстро (например, за 4 дня), можно в своём темпе. Материалы построены так, чтобы идти шаг за шагом без перегруза своего графика.",
  },
  {
    question: "Если у меня уже есть стратегия/планы, есть смысл брать курс?",
    answer:
      "Да, если внедрение буксует. Курс про реализацию: приоритеты, ответственность, ритм, план/факт и корректировки по рынку.",
  },
  {
    question: "Что будет результатом после курса?",
    answer: "Короткая стратегия на 12 месяцев + набор инициатив и метрик + система регулярного управления стратегией.",
  },
]

export const strategyMonthlyQuestions: MonthlyQuestion[] = [
  {
    id: "direction",
    text: "всё ещё идём туда, куда выбрали",
  },
  {
    id: "metrics",
    text: "видим прогресс в ключевых метриках",
  },
  {
    id: "decisions",
    text: "корректируем планы под изменения рынка",
  },
]

export const strategyExpertStats: MentorStat[] = [
  { value: "10+ лет", label: "в цифровизации бизнеса" },
  { value: "Ex-C-level", label: "международных компаний" },
  { value: "Board", label: "директора и наблюдательные советы" },
]

export const strategyTopTopics: TopicLink[] = [
  { label: "Старт", href: "#top" },
  { label: "Ценность", href: "#value" },
  { label: "Для кого", href: "#who-for" },
  { label: "Результат", href: "#result" },
  { label: "Программа", href: "#program" },
  { label: "Тарифы", href: "#tariffs" },
  { label: "Вебинар", href: "#free-webinar" },
  { label: "FAQ", href: "#faq" },
  { label: "Контакты", href: "#contact" },
]

export const strategyMentorCopy = {
  title: "Управленец и стратег, специализируется на цифровизации и систематизации бизнеса",
  description: "Помогает собственникам и топ-командам превращать стратегию в рабочую управленческую систему.",
  quote: "«Стратегия должна переходить в операционную систему управления, а не оставаться презентацией.»",
}

export const strategyProgramSummary =
  "Все материалы собраны так, чтобы стратегию можно было не только понять, но и внедрить в работу."

export const strategySystemSectionCopy = {
  titleFirstLine: "Стратегия — это не документ.",
  titleSecondLine: "Это система управления.",
  subtitle: "каждый месяц она отвечает на три вопроса",
  ctaText: "Выберите пакет и начните с первого шага уже на этой неделе.",
}
