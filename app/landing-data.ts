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

export type StartFormatId = "education" | "board" | "adviser";

export type StartFormat = {
  id: StartFormatId;
  title: string;
  note: string;
  href: string;
  recommendation: string;
};

export type StartQuizQuestion = {
  prompt: string;
  options: Array<{
    label: string;
    formatId: StartFormatId;
  }>;
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
  subtitle: string;
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
    id: "education",
    title: "Обучение",
    note: "системная база и практика в своём темпе",
    href: "/education",
    recommendation:
      "Потому что вам важно системно усилить управленческие компетенции, разобраться в базе управления и получать практику в удобном для себя темпе.",
  },
  {
    id: "board",
    title: "Совет управленцев",
    note: "сильное окружение и разбор реальных задач",
    href: "/board",
    recommendation:
      "Потому что вам важно не только развивать компетенции, но и иметь сильное окружение руководителей, обмениваться опытом и разбирать реальные задачи.",
  },
  {
    id: "adviser",
    title: "Наставничество",
    note: "персональная работа и управленческие решения",
    href: "/adviser",
    recommendation:
      "Потому что вам нужна персональная поддержка, разбор управленческих решений и фокус на развитии бизнеса, команды и вас как руководителя.",
  },
];

export const startQuestions: StartQuizQuestion[] = [
  {
    prompt: "Что вам сейчас нужнее всего?",
    options: [
      { label: "Быстро усилить управленческие компетенции", formatId: "education" },
      { label: "Найти окружение сильных руководителей", formatId: "board" },
      { label: "Получить персональную поддержку и разбор", formatId: "adviser" },
    ],
  },
  {
    prompt: "Какой формат вам ближе?",
    options: [
      { label: "Короткие материалы и практика в своём темпе", formatId: "education" },
      { label: "Регулярное участие в сообществе", formatId: "board" },
      { label: "Личная работа с наставником", formatId: "adviser" },
    ],
  },
  {
    prompt: "С какой задачей вы пришли?",
    options: [
      { label: "Хочу систематизировать базу управления", formatId: "education" },
      { label: "Хочу обсуждать реальные задачи с равными", formatId: "board" },
      { label: "Хочу развивать компанию и себя как руководителя", formatId: "adviser" },
    ],
  },
  {
    prompt: "Какая степень вовлечения вам подходит?",
    options: [
      { label: "Гибкий темп, чтобы проходить самостоятельно", formatId: "education" },
      { label: "Регулярные встречи и обмен опытом", formatId: "board" },
      { label: "Глубокая персональная работа", formatId: "adviser" },
    ],
  },
  {
    prompt: "Какой результат для вас сейчас важнее?",
    options: [
      { label: "Лучше понимать, как устроено управление компанией", formatId: "education" },
      { label: "Получить опору, окружение и новые управленческие идеи", formatId: "board" },
      { label: "Принять сильные решения по развитию бизнеса и команды", formatId: "adviser" },
    ],
  },
];

export const youtubeVideos: YoutubeVideo[] = [
  {
    title: "как быстро расти, нанимать и принимать ключевые бизнес-решения",
    url: "https://youtu.be/Ax-PcpWw_ZA?si=2KcV0miX7nUY19ae",
    videoId: "Ax-PcpWw_ZA",
  },
  {
    title: "стратегия без иллюзий: думать из будущего, команда и дорожная карта",
    url: "https://youtu.be/Ywpzm5I_qs0",
    videoId: "Ywpzm5I_qs0",
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
    name: "ОСНОВА",
    subtitle: "Мини-курсы по управлению",
    oneTimeText: "от $X",
    commitment: "Разовая покупка",
    bullets: [
      "короткие курсы по стратегии, бизнес-системе и управлению",
      "видео, руководства, чек-листы и шаблоны",
      "можно пройти за пару дней или в своём темпе",
    ],
    primaryCta: "Смотреть курсы",
    primaryHref: "/education",
    secondaryCta: "Что внутри →",
    secondaryHref: "/education",
  },
  {
    name: "СОВЕТ",
    subtitle: "Сообщество управленцев",
    monthlyText: "$X / мес",
    commitment: "Минимум 6 месяцев",
    bullets: [
      "закрытый чат отобранных руководителей",
      "4 встречи участников в месяц",
      "разборы реальных бизнес-задач",
    ],
    primaryCta: "Подать заявку",
    primaryHref: "/board",
    secondaryCta: "О клубе →",
    secondaryHref: "/board",
  },
  {
    name: "СТРАТЕГИЯ",
    subtitle: "Персональное наставничество",
    monthlyText: "$X / мес",
    commitment: "Минимум 3 месяца",
    bullets: [
      "4 личные сессии в месяц",
      "поддержка в чате",
      "стратегия, делегирование и развитие управленческого мышления",
    ],
    primaryCta: "Подать заявку",
    primaryHref: "/adviser",
    secondaryCta: "Как проходит →",
    secondaryHref: "/adviser",
  },
];
