export type Highlight = {
  top: string;
  bottom: string;
  description: string;
};

export type EcosystemFormat = {
  title: string;
  subtitle: string;
  href: string;
};

export type LogoPlaceholder = {
  id: string;
  size: string;
  opacity: string;
};

export type StartFormat = {
  situation: string;
  format: string;
  href: string;
};

export type YoutubeVideo = {
  title: string;
  url: string;
  videoId: string;
};

export type LiveSessionPhoto = {
  src: string;
  alt: string;
  mirrored?: boolean;
};

export type PricingPlan = {
  name: string;
  monthlyText?: string;
  periodText?: string;
  oneTimeText?: string;
  commitment: string;
  bullets: string[];
  primaryCta: string;
  primaryHref: string;
  secondaryCta: string;
  secondaryHref: string;
};

export const highlights: Highlight[] = [
  {
    top: "10+ лет",
    bottom: "в цифровизации",
    description: "Системы, процессы и роли.",
  },
  {
    top: "50+ кейсов",
    bottom: "в практике",
    description: "KPI, делегирование и оргструктура.",
  },
  {
    top: "3 продукта",
    bottom: "для руководителей",
    description: "Обучение, Совет и Наставничество.",
  },
  {
    top: "Без «воды»",
    bottom: "и лишней теории",
    description: "Практика, внедрение и результат.",
  },
];

export const ecosystemFormats: EcosystemFormat[] = [
  {
    title: "Обучение",
    subtitle: "стратегия бизнеса, бизнес-модель\nи ключевые бизнес-функции",
    href: "/education",
  },
  {
    title: "Совет управленцев",
    subtitle: "клуб для руководителей команд\nи обмена реальным опытом",
    href: "/board",
  },
  {
    title: "Наставничество",
    subtitle: "стратегия, делегирование\nи управленческое мышление",
    href: "/adviser",
  },
];

export const logoPlaceholders: LogoPlaceholder[] = [
  { id: "01", size: "h-[30px] md:h-[38px]", opacity: "opacity-85" },
  { id: "02", size: "h-[32px] md:h-[40px]", opacity: "opacity-80" },
  { id: "03", size: "h-[28px] md:h-[36px]", opacity: "opacity-90" },
  { id: "04", size: "h-[34px] md:h-[42px]", opacity: "opacity-85" },
  { id: "05", size: "h-[29px] md:h-[37px]", opacity: "opacity-80" },
  { id: "06", size: "h-[31px] md:h-[39px]", opacity: "opacity-88" },
  { id: "07", size: "h-[33px] md:h-[41px]", opacity: "opacity-82" },
];

export const startFormats: StartFormat[] = [
  {
    situation: "Я начинаю руководить",
    format: "Основы управления",
    href: "/basis",
  },
  {
    situation: "Я уже руководитель",
    format: "Совет управленцев",
    href: "/board",
  },
  {
    situation: "Мне нужна стратегия",
    format: "Персональный стратег",
    href: "/adviser",
  },
  {
    situation: "Хочу закрыть пробел быстро",
    format: "Мини-курсы",
    href: "/courses",
  },
];

export const youtubeVideos: YoutubeVideo[] = [
  {
    title: "как быстро расти, нанимать и принимать ключевые бизнес-решения",
    url: "https://youtu.be/Ax-PcpWw_ZA?si=2KcV0miX7nUY19ae",
    videoId: "Ax-PcpWw_ZA",
  },
  {
    title: "регулярный менеджмент, управленческий цикл и окружение экспертов",
    url: "https://youtu.be/dAOWn8PTHdc?si=F1_r4JpbtK-JJHhP",
    videoId: "dAOWn8PTHdc",
  },
];

export const liveSessionMainPhoto: LiveSessionPhoto = {
  src: "/images/live-sessions/1.png",
  alt: "Разбор кейса",
};

export const liveSessionSecondaryPhotos: LiveSessionPhoto[] = [
  { src: "/images/live-sessions/3.png", alt: "Встреча клуба" },
  { src: "/images/live-sessions/2.png", alt: "Q&A сессия", mirrored: true },
];

export const pricingPlans: PricingPlan[] = [
  {
    name: "Основы управления",
    monthlyText: "$X / мес",
    commitment: "Ежемесячно",
    bullets: [
      "база управления и роли",
      "кейсы + практика",
      "шаблоны и чек-листы",
    ],
    primaryCta: "Участвовать",
    primaryHref: "/basis",
    secondaryCta: "Программа →",
    secondaryHref: "/basis",
  },
  {
    name: "Персональный стратег",
    monthlyText: "$X / мес",
    periodText: "$X × 3 = $Y за 3 месяца",
    commitment: "Минимум 3 месяца",
    bullets: [
      "4 личные сессии / мес",
      "поддержка в чате",
      "стратегия + делегирование",
    ],
    primaryCta: "Подать заявку",
    primaryHref: "/adviser",
    secondaryCta: "Как проходит →",
    secondaryHref: "/adviser",
  },
  {
    name: "Совет управленцев",
    monthlyText: "$X / мес",
    periodText: "$X × 6 = $Y за 6 месяцев",
    commitment: "Минимум 6 месяцев",
    bullets: [
      "закрытый чат руководителей",
      "4 встречи / мес",
      "разбор бизнес-задач",
    ],
    primaryCta: "Подать заявку",
    primaryHref: "/board",
    secondaryCta: "О клубе →",
    secondaryHref: "/board",
  },
  {
    name: "Мини-курсы",
    oneTimeText: "от $X",
    commitment: "Разовая покупка",
    bullets: [
      "1–3 дня на курс (в темпе)",
      "видео + гайды",
      "практические шаблоны",
    ],
    primaryCta: "Выбрать курс",
    primaryHref: "/education",
    secondaryCta: "Список →",
    secondaryHref: "/education",
  },
];
