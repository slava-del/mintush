import type {
  Course,
  DeliveryBlock,
  LearningStat,
  RoleKey,
  RoleOption,
  RoleProfile,
  JourneyStep,
  TopNavTopic,
  TrustedLogo,
} from "./types"

export const morphResultWords = ["система", "решения", "внедрение", "результат", "рост", "масштаб"]

export const topNavTopics: TopNavTopic[] = [
  { label: "Старт", sectionId: "hero" },
  { label: "Мини-курсы", sectionId: "hero" },
  { label: "Бизнес-модель", sectionId: "business-model" },
  { label: "Диагностика", sectionId: "team" },
  { label: "Бизнес-система", sectionId: "business-system" },
  { label: "GPT / система", sectionId: "business-system" },
  { label: "Стратегия", sectionId: "strategy" },
  { label: "Путь", sectionId: "strategy" },
  { label: "Команда", sectionId: "team" },
  { label: "Формат", sectionId: "learning" },
  { label: "Что внутри", sectionId: "learning" },
  { label: "Курсы", sectionId: "courses" },
  { label: "Нам доверяют", sectionId: "trusted" },
  { label: "Чат выпускников", sectionId: "alumni-chat" },
]

export const marqueeTopics = [...topNavTopics, ...topNavTopics, ...topNavTopics]

export const heroWordPrimary = "MINTUSH"
export const heroWordSecondary = "EDUCATION"

export const roleOptions: RoleOption[] = [
  { key: "finance", label: "Финансы" },
  { key: "ops", label: "Операционка" },
  { key: "team", label: "Команда" },
]

export const roleProfiles: Record<RoleKey, RoleProfile> = {
  finance: {
    gap: "умения превращать цифры в управленческие решения.",
    bullets: [
      "понимать драйверы прибыли",
      "ставить задачи по unit-экономике и маржинальности",
      "добиваться результата без кассовых разрывов",
    ],
    story: [
      {
        title: "Глава 01 — Выстроить систему",
        description: "Связать финмодель, роли и ритм управления.",
        problem: "Финансы есть, решений нет",
        cta: "Собрать архитектуру",
      },
      {
        title: "Глава 02 — Поставить задачи",
        description: "Каждая задача привязана к цифре и сроку.",
        problem: "Планы без метрик",
        cta: "Связать цель и KPI",
      },
      {
        title: "Глава 03 — Получить результат",
        description: "Еженедельный цикл контроля и коррекции.",
        problem: "Отчеты без действий",
        cta: "Запустить управцикл",
      },
    ],
  },
  ops: {
    gap: "системы в процессах, ролях и исполнении.",
    bullets: [
      "выстраивать бизнес-систему через процессы и роли",
      "ставить задачи так, чтобы убирать узкие места",
      "добиваться результата в срок и по качеству",
    ],
    story: [
      {
        title: "Глава 01 — Выстроить систему",
        description: "Фиксируем владельцев, стандарты и точки контроля.",
        problem: "Хаос в процессах",
        cta: "Собрать контур",
      },
      {
        title: "Глава 02 — Поставить задачи",
        description: "Цель, ограничение, срок, понятный критерий выполнения.",
        problem: "Размытые формулировки",
        cta: "Стандартизировать задачи",
      },
      {
        title: "Глава 03 — Получить результат",
        description: "Короткие спринты и регулярная коррекция курса.",
        problem: "Срыв сроков",
        cta: "Удержать темп",
      },
    ],
  },
  team: {
    gap: "перехода от контроля людей к управлению системой результата.",
    bullets: [
      "выстраивать систему вместо микроменеджмента",
      "ставить задачи так, чтобы команда брала ответственность",
      "добиваться результата через делегирование",
    ],
    story: [
      {
        title: "Глава 01 — Выстроить систему",
        description: "Система ролей снимает перегруз руководителя.",
        problem: "Все держится на одном",
        cta: "Разделить ответственность",
      },
      {
        title: "Глава 02 — Поставить задачи",
        description: "Постановка: цель, контекст, критерий, срок, отчет.",
        problem: "Постоянные уточнения",
        cta: "Задать стандарт",
      },
      {
        title: "Глава 03 — Получить результат",
        description: "Прозрачный прогресс и решения до кризиса.",
        problem: "Реакция вместо опережения",
        cta: "Довести до результата",
      },
    ],
  },
}

export const chapterBackgrounds = [
  "radial-gradient(circle at 14% 16%, rgba(231, 210, 173, 0.30), rgba(7, 7, 7, 0) 42%), #050505",
  "radial-gradient(circle at 84% 24%, rgba(231, 210, 173, 0.26), rgba(7, 7, 7, 0) 44%), #050505",
  "radial-gradient(circle at 52% 82%, rgba(231, 210, 173, 0.28), rgba(7, 7, 7, 0) 46%), #050505",
]

export const strategyJourneySteps: JourneyStep[] = [
  {
    title: "1 — Собрать основу",
    subtitle: "Роли, зоны ответственности и базовая модель управления.",
    detail: "Без этого всё держится на руководителе.",
    cta: "Разделить ответственность",
  },
  {
    title: "2 — Настроить ритм",
    subtitle: "Постановка задач, приоритеты и единый стандарт управления.",
    detail: "Чтобы команда понимала, что делать и в каком порядке.",
    cta: "Задать стандарт",
  },
  {
    title: "3 — Довести до результата",
    subtitle: "Метрики, контроль исполнения и регулярный управленческий цикл.",
    detail: "Чтобы бизнес работал предсказуемо, а не в режиме пожара.",
    cta: "Увидеть результат",
  },
]

export const gptMessages = [
  "Напиши KPI для отдела продаж.",
  "Как делегировать, если команда не тянет?",
  "Сделай регламент найма за 3 шага.",
  "Как сократить косты без потери качества?",
  "Собери стратегию и операционку в одном документе.",
  "Как быстро вырасти в 2 раза за квартал?",
  "Как контролировать задачи без микроменеджмента?",
]

export const curriculumBlocks = [
  "Модуль 1: бизнес-модель и архитектура управления",
  "Модуль 2: постановка задач и приоритизация",
  "Модуль 3: метрики, ритмы и контроль исполнения",
  "Модуль 4: стратегия в операционном цикле",
  "Чек-листы, шаблоны и кейсы внедрения",
]

export const learningStats: LearningStat[] = [
  {
    value: "7–10%",
    lines: ["времени в год", "руководители выделяют", "на развитие управления"],
  },
  {
    value: "$1,200+",
    lines: ["на одного руководителя", "компании инвестируют", "в развитие менеджмента"],
  },
  {
    value: "до 40%",
    lines: ["компаний отмечают дефицит", "управленческих навыков", "у руководителей"],
  },
]

export const courseThemes = ["Бизнес-модель", "Стратегия", "Команда", "Бизнес-система", "Операционка", "Рост"]

export const deliveryBlocks: DeliveryBlock[] = [
  {
    title: "Короткий формат",
    lines: ["каждый мини-курс можно пройти", "за пару дней или в своём темпе"],
  },
  {
    title: "Без перегруза",
    lines: ["материалы выстроены так,", "чтобы двигаться шаг за шагом"],
  },
  {
    title: "Сразу в работу",
    lines: ["не теория ради теории,", "а практическое применение"],
  },
]

export const learningFormats = ["видео-материалы", "руководства-презентации", "чек-листы", "практические шаблоны"]

export const trustedLogos: TrustedLogo[] = [
  {
    src: "/logos/cropped/cber_marketing.png",
    alt: "Сбер Маркетинг",
    width: 690,
    height: 73,
    sizeClass: "h-[28px] md:h-[34px]",
    slotClass: "w-[220px] md:w-[300px]",
  },
  {
    src: "/logos/cropped/mtc_marketolog.png",
    alt: "МТС Маркетолог",
    width: 431,
    height: 45,
    sizeClass: "h-[24px] md:h-[30px]",
    slotClass: "w-[210px] md:w-[280px]",
  },
  {
    src: "/logos/cropped/cber_sound.png",
    alt: "Сбер Звук",
    width: 535,
    height: 86,
    sizeClass: "h-[26px] md:h-[32px]",
    slotClass: "w-[200px] md:w-[260px]",
  },
  {
    src: "/logos/cropped/mts_bank.png",
    alt: "МТС Банк",
    width: 473,
    height: 79,
    sizeClass: "h-[20px] md:h-[25px]",
    slotClass: "w-[190px] md:w-[240px]",
  },
  {
    src: "/logos/cropped/cber.png",
    alt: "Сбер",
    width: 517,
    height: 142,
    sizeClass: "h-[28px] md:h-[34px]",
    slotClass: "w-[190px] md:w-[250px]",
  },
  {
    src: "/logos/cropped/mts_golfstrim.png",
    alt: "МТС Гольфстрим",
    width: 907,
    height: 156,
    sizeClass: "h-[22px] md:h-[28px]",
    slotClass: "w-[220px] md:w-[300px]",
  },
  {
    src: "/logos/cropped/okko.png",
    alt: "Okko",
    width: 838,
    height: 298,
    sizeClass: "h-[24px] md:h-[30px]",
    slotClass: "w-[180px] md:w-[240px]",
  },
  {
    src: "/logos/cropped/mtc_ecosystem.png",
    alt: "МТС Цифровая экосистема",
    width: 551,
    height: 40,
    sizeClass: "h-[22px] md:h-[28px]",
    slotClass: "w-[230px] md:w-[320px]",
  },
  {
    src: "/logos/cropped/kion.png",
    alt: "KION",
    width: 640,
    height: 243,
    sizeClass: "h-[24px] md:h-[30px]",
    slotClass: "w-[190px] md:w-[250px]",
  },
  {
    src: "/logos/cropped/multfilm.png",
    alt: "Союзмультфильм",
    width: 275,
    height: 203,
    sizeClass: "h-[34px] md:h-[42px]",
    slotClass: "w-[170px] md:w-[220px]",
  },
  {
    src: "/logos/cropped/rambler.png",
    alt: "Rambler",
    width: 599,
    height: 128,
    sizeClass: "h-[20px] md:h-[26px]",
    slotClass: "w-[190px] md:w-[250px]",
  },
  {
    src: "/logos/cropped/webinar.png",
    alt: "Webinar",
    width: 373,
    height: 295,
    sizeClass: "h-[34px] md:h-[42px]",
    slotClass: "w-[170px] md:w-[220px]",
  },
]

export const courses: Course[] = [
  {
    title: "Стратегия бизнеса",
    description:
      "Понятный мини-курс, который поможет владельцу бизнеса собрать правильную стратегию на год и внедрить её в операционку. Это про стратегию, которая работает в реальности.",
    items: ["4 практических руководства", "6 вебинаров"],
    href: "/education/business-strategy",
  },
  {
    title: "Управление бизнесом",
    description:
      "Работающие подходы, которые помогут владельцу бизнеса начать управлять компанией без ручного вмешательства. Работающая бизнес-система за 4 шага.",
    items: ["4 практических руководства", "4 вебинара"],
    href: "/education/business-management",
  },
]
