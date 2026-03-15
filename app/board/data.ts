import type { Metadata } from "next"

export const boardMetadata: Metadata = {
  title: "Совет управленцев — Международное онлайн-сообщество",
  description:
    "Клуб для руководителей команд 5-45 человек: регулярные встречи, разбор бизнес-запросов и сильное управленческое окружение.",
}

export type BoardHeroContent = {
  title: string
  subtitle: string
  proofLine: string
  qualifier: string
  primaryCta: {
    label: string
    href: string
  }
  secondaryCta?: {
    label: string
    href: string
  }
  mockup: {
    src: string
    alt: string
    width: number
    height: number
  }
}

export type BoardResultsPrinciplesContent = {
  title: string
  results: Array<{
    value: string
    label: string
  }>
  principlesTitle: string
  principles: Array<{
    lead: string
    suffix: string
  }>
  note: string
}

export type BoardFormatsContent = {
  title: string
  subtitle: string
  rows: Array<{
    title: string
    microLabel?: string
    bullets: string[]
  }>
}

export type BoardTopicsContent = {
  eyebrow: string
  title: string
  subtitle: string
  rows: Array<
    Array<{
      label: string
      variant: "plain" | "outlined" | "highlight"
      size: "sm" | "md" | "lg"
    }>
  >
  note: string
}

export type BoardOfferContent = {
  qualifierTitle: string
  qualifierItems: string[]
  qualifierNote: string
  benefitsTitle: string
  benefitGroups: Array<{
    title: string
    items: string[]
  }>
  price: string
  commitment: string
  entryNote: string
  primaryCta: {
    label: string
    href: string
  }
  secondaryCta: {
    label: string
    href: string
  }
}

export type BoardParticipantsContent = {
  eyebrow: string
  title: string
  subtitle: string
  groups: Array<{
    index: string
    title: string
    text: string
  }>
  testimonial: {
    quote: string
    attribution: string
  }
}

export type BoardJoinFlowContent = {
  eyebrow: string
  title: string
  subtitle: string
  rows: Array<{
    title: string
    text: string
  }>
  note: string
  primaryCta: {
    label: string
    href: string
  }
  secondaryCta: {
    label: string
    href: string
  }
}

export const boardHeroContent: BoardHeroContent = {
  title: "СОВЕТ",
  subtitle:
    "Клуб для руководителей команд 5-45 человек, где реальные бизнес-задачи разбирают вместе с теми, кто сам управляет каждый день.",
  proofLine: "40 мероприятий • 27 решенных задач • 4 встречи в месяц",
  qualifier:
    "Для владельцев малого бизнеса, топ-менеджеров среднего бизнеса и мидл-менеджеров крупного бизнеса.",
  primaryCta: {
    label: "Вступить",
    href: "https://t.me/mintush_business",
  },
  secondaryCta: {
    label: "Смотреть форматы",
    href: "#formats",
  },
  mockup: {
    src: "/images/board/people.jpg",
    alt: "Интерфейс клуба Совета управленцев с рабочими обсуждениями и встречами",
    width: 5760,
    height: 3840,
  },
}

export const boardResultsPrinciplesContent: BoardResultsPrinciplesContent = {
  title: "Наши результаты за прошлый год",
  results: [
    { value: "40", label: "мероприятий" },
    { value: "27", label: "решенных задач" },
    { value: "9", label: "разобранных кейсов" },
    { value: "6", label: "бизнес-экскурсий" },
    { value: "2", label: "участника запустили стартапы" },
  ],
  principlesTitle: "Мы поддерживаем",
  principles: [
    { lead: "Равенство", suffix: "иерархии и статуса" },
    { lead: "Обмен опытом", suffix: "формальных лекций" },
    { lead: "Обсуждения", suffix: "продажи услуг" },
    { lead: "Поддержка", suffix: "ожидания «потом»" },
  ],
  note: "Рабочая среда для управленцев, а не просто еще один чат.",
}

export const boardFormatsContent: BoardFormatsContent = {
  title: "Наши форматы взаимодействия",
  subtitle: "",
  rows: [
    {
      title: "Бизнес-запросы и обмен мнениями",
      microLabel: "чат / быстрый отклик",
      bullets: [
        "выносить рабочие вопросы и получать практический взгляд со стороны",
        "находить подрядчиков, экспертов и нужные контакты через клуб",
        "обсуждать инструменты, тренды и спорные решения без формального тона",
      ],
    },
    {
      title: "Еженедельные онлайн-встречи",
      microLabel: "4 встречи в месяц",
      bullets: [
        "каждый месяц глубже разбирать одну бизнес-тему",
        "решать реальные запросы участников в формате группового разбора",
        "делиться кейсами, которые уже сработали в командах и компаниях",
      ],
    },
    {
      title: "Квартальные стратегические сессии",
      microLabel: "раз в квартал / фокус",
      bullets: [
        "фиксировать цели и сверять прогресс с планом",
        "получать поддержку там, где движение замедлилось",
        "переводить стратегию в конкретные действия и контрольные точки",
      ],
    },
  ],
}

export const boardTopicsContent: BoardTopicsContent = {
  eyebrow: "",
  title: "О чем мы говорим в клубе",
  subtitle: "От стратегии и продаж до процессов, AI и изменений в компании.",
  rows: [
    [
      { label: "Стратегия", variant: "highlight", size: "lg" },
      { label: "Продажи", variant: "outlined", size: "md" },
      { label: "HR", variant: "plain", size: "md" },
      { label: "Процессы", variant: "plain", size: "lg" },
      { label: "Операционка", variant: "outlined", size: "md" },
      { label: "Лидерство", variant: "plain", size: "md" },
      { label: "KPI и метрики", variant: "outlined", size: "md" },
      { label: "Команда", variant: "plain", size: "md" },
    ],
    [
      { label: "Финансы", variant: "outlined", size: "md" },
      { label: "AI / ИИ", variant: "highlight", size: "md" },
      { label: "Инновации", variant: "plain", size: "md" },
      { label: "Маркетинг", variant: "outlined", size: "lg" },
      { label: "Продукт", variant: "plain", size: "md" },
      { label: "Клиентский сервис", variant: "outlined", size: "md" },
      { label: "Цифровые инструменты", variant: "plain", size: "md" },
      { label: "Переговоры", variant: "outlined", size: "md" },
    ],
    [
      { label: "Проекты", variant: "plain", size: "md" },
      { label: "Изменения", variant: "outlined", size: "lg" },
      { label: "Платежи", variant: "plain", size: "md" },
      { label: "Юнит-экономика", variant: "outlined", size: "md" },
      { label: "Делегирование", variant: "plain", size: "md" },
      { label: "Автоматизация", variant: "highlight", size: "md" },
      { label: "Масштабирование", variant: "outlined", size: "md" },
      { label: "Аналитика", variant: "plain", size: "md" },
    ],
  ],
  note: "Темы меняются, но фокус всегда один: помогать участникам принимать более сильные управленческие решения.",
}

export const boardOfferContent: BoardOfferContent = {
  qualifierTitle: "Кому подходит клуб",
  qualifierItems: [
    "от 1 года управленческого опыта",
    "команда от 5 человек",
    "готовность к обмену опытом",
  ],
  qualifierNote:
    "Клуб лучше всего раскрывается для тех, кто готов не только брать, но и делиться своим управленческим опытом.",
  benefitsTitle: "Что даёт клуб на практике",
  benefitGroups: [
    {
      title: "Среда",
      items: [
        "чат отобранных руководителей",
        "коллективный опыт и дружеская атмосфера",
      ],
    },
    {
      title: "Практика",
      items: [
        "4 встречи в месяц",
        "база полезных материалов",
        "погружение в бизнес-функции",
        "разборы бизнес-задач участников",
        "онлайн-экскурсии в компании",
      ],
    },
  ],
  price: "$… / месяц",
  commitment: "минимальный срок участия — 6 месяцев",
  entryNote: "Вступление — по заявке и после короткого интервью.",
  primaryCta: {
    label: "Подать заявку",
    href: "https://t.me/mintush_business",
  },
  secondaryCta: {
    label: "Как проходит вступление",
    href: "#join",
  },
}

export const boardParticipantsContent: BoardParticipantsContent = {
  eyebrow: "НАШИ УЧАСТНИКИ",
  title: "Кто входит в клуб",
  subtitle:
    "В клубе встречаются владельцы бизнеса, топ-менеджеры и сильные руководители команд.",
  groups: [
    {
      index: "1",
      title: "Владельцы малого бизнеса",
      text: "строят систему управления, выходят из операционки, собирают сильную команду",
    },
    {
      index: "2",
      title: "Топ-менеджеры среднего бизнеса",
      text: "сверяют подходы, усиливают управленческое мышление, решают реальные задачи с другими практиками",
    },
    {
      index: "3",
      title: "Мидл-менеджеры крупного бизнеса",
      text: "учатся мыслить шире своей функции, усиливают влияние, готовятся к следующему уровню ответственности",
    },
  ],
  testimonial: {
    quote:
      "«Здесь можно вынести реальный запрос, быстро получить сильный взгляд со стороны и не тратить месяцы на поиск решения в одиночку.»",
    attribution: "Имя / роль / компания",
  },
}

export const boardJoinFlowContent: BoardJoinFlowContent = {
  eyebrow: "КАК СТАТЬ УЧАСТНИКОМ",
  title: "3 шага до вступления",
  subtitle: "Вход в клуб проходит через заявку и короткое знакомство.",
  rows: [
    {
      title: "Подать заявку",
      text: "оставляете короткую заявку, чтобы мы поняли ваш контекст и задачи",
    },
    {
      title: "Пройти интервью",
      text: "созваниваемся, чтобы лучше узнать друг друга и понять, подойдёт ли вам формат клуба",
    },
    {
      title: "Подписать договор",
      text: "фиксируем договорённости, формат участия и старт клуба для вас",
    },
  ],
  note: "Мы рассматриваем заявку в течение недели.",
  primaryCta: {
    label: "ПОДАТЬ ЗАЯВКУ",
    href: "https://t.me/mintush_business",
  },
  secondaryCta: {
    label: "Связаться с нами",
    href: "#contact",
  },
}
