const sectionNotes = [
  {
    label: "Актуальность",
    labelClassName: "text-white/56",
    accentClassName: "bg-white/30",
    dividerClassName: "bg-white/8",
    textClassName: "text-white/72",
    body: (
      <>
        Все сотрудники, включая руководителей, нуждаются в{" "}
        <span className="font-semibold text-white">регулярной актуализации</span> своих знаний, изучении новых
        подходов и лучших практик.
      </>
    ),
  },
  {
    label: "Ограничение GPT",
    labelClassName: "text-[#8fb7ff]/84",
    accentClassName: "bg-[#8fb7ff]/42",
    dividerClassName: "bg-[#8fb7ff]/14",
    textClassName: "text-white/86",
    highlight: true,
    body: (
      <>
        GPT-чат может ответить на любой вопрос, но{" "}
        <span className="font-semibold text-[#dce8ff]">не сможет выстроить систему обучения</span> под управленческие
        задачи.
      </>
    ),
  },
  {
    label: "Роль руководителя",
    labelClassName: "text-[#e7d2ad]/82",
    accentClassName: "bg-[#e7d2ad]/44",
    dividerClassName: "bg-[#e7d2ad]/14",
    textClassName: "text-white/68",
    body: (
      <>
        Руководитель не должен быть экспертом в финансах, логистике и прочих бизнес-функциях. Но руководитель{" "}
        <span className="font-semibold text-[#f0dfc1]">обязан знать базовые принципы</span> их работы.
      </>
    ),
  },
]

type SectionNote = (typeof sectionNotes)[number]

function NoteBlock({ item }: { item: SectionNote }) {
  return (
    <div className="relative h-full overflow-hidden">
      <div className="pointer-events-none absolute left-0 right-6 top-0 h-px bg-[linear-gradient(90deg,rgba(255,255,255,0.10),rgba(255,255,255,0)_78%)] md:left-[170px]" />

      {item.highlight ? (
        <div className="pointer-events-none absolute -inset-y-2 left-[6%] right-[-4%] rounded-[999px] bg-[radial-gradient(circle_at_18%_50%,rgba(143,183,255,0.16),rgba(9,13,22,0)_70%)] blur-2xl md:left-[162px]" />
      ) : null}

      <div className="relative grid gap-4 pt-5 md:grid-cols-[150px_1px_minmax(0,1fr)] md:items-start md:gap-x-4 md:gap-y-0">
        <p className={`pt-[3px] text-[12px] font-semibold uppercase tracking-[0.28em] ${item.labelClassName}`}>
          <span className="inline-flex items-center gap-3">
            <span className={`h-[5px] w-[5px] rounded-full ${item.accentClassName}`} />
            <span>{item.label}</span>
          </span>
        </p>

        <div className={`hidden md:block w-px self-stretch ${item.dividerClassName}`} />

        <p className={`max-w-[43ch] text-[17px] leading-[1.5] md:text-[19px] ${item.textClassName}`}>{item.body}</p>
      </div>
    </div>
  )
}

export function BusinessModelSection() {
  return (
    <section data-section-id="business-model" className="px-6 pb-12 md:px-10 md:pb-14">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,#0b1018_0%,#07090f_34%,#050505_100%)] px-6 py-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),inset_0_-26px_70px_rgba(0,0,0,0.15)] md:px-10 md:py-9">
        <div className="pointer-events-none absolute right-[-5%] top-[-6%] h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(143,183,255,0.08),rgba(9,12,20,0)_72%)] blur-3xl" />
        <div className="pointer-events-none absolute left-0 top-0 h-px w-[42%] bg-[linear-gradient(90deg,rgba(255,255,255,0.16),rgba(255,255,255,0)_100%)]" />

        <div className="relative grid items-start gap-6 lg:grid-cols-[minmax(250px,0.84fr)_minmax(0,1fr)] lg:grid-rows-[auto_auto] lg:gap-x-6 lg:gap-y-5">
          <div>
            <h2 className="max-w-[10ch] text-[28px] font-extrabold leading-[0.94] tracking-[-0.035em] text-white md:text-[38px]">
              <span className="block">Мини-курсы для</span>
              <span className="block">руководителей</span>
            </h2>
          </div>

          <div className="relative lg:-mt-3 lg:col-start-2 lg:row-start-1">
            <NoteBlock item={sectionNotes[0]} />
          </div>

          <div className="relative lg:col-start-1 lg:row-start-2">
            <NoteBlock item={sectionNotes[1]} />
          </div>

          <div className="relative lg:col-start-2 lg:row-start-2">
            <NoteBlock item={sectionNotes[2]} />
          </div>
        </div>
      </div>
    </section>
  )
}
