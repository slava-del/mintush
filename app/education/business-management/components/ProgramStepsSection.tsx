type ProgramStep = {
  id: string
  title: string
  description: string
}

type ProgramStepsSectionProps = {
  title: string
  subtitle: string
  steps: readonly ProgramStep[]
}

export function ProgramStepsSection({ title, subtitle, steps }: ProgramStepsSectionProps) {
  return (
    <section id="program" className="mx-auto max-w-[1380px] px-6 pb-14 md:px-12 md:pb-16">
      <article className="rounded-[24px] border border-[#e7d2ad]/24 bg-[radial-gradient(circle_at_84%_0%,rgba(231,210,173,0.12),rgba(7,7,7,0)_38%),linear-gradient(180deg,rgba(9,9,9,0.95),rgba(7,7,7,0.9))] p-8 md:p-10">
        <div className="max-w-[900px]">
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#e7d2ad]/74">Программа курса</p>
          <h2 className="mt-4 text-[35px] font-extrabold leading-[1.02] tracking-[-0.03em] text-[#EDEDED] md:text-[48px]">
            {title}
          </h2>
          <p className="mt-4 max-w-[64ch] text-[17px] leading-[1.44] text-[#EDEDED]/72 md:text-[19px]">{subtitle}</p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {steps.map((step) => (
            <article
              key={step.id}
              className="relative overflow-hidden rounded-[18px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(11,11,11,0.92))] p-6 md:p-7"
            >
              <div className="pointer-events-none absolute right-0 top-0 h-24 w-24 bg-[radial-gradient(circle,rgba(122,146,255,0.18),rgba(122,146,255,0)_68%)] blur-2xl" />
              <div className="relative inline-flex items-center gap-3">
                <span className="text-[12px] font-semibold uppercase tracking-[0.17em] text-[#e7d2ad]/78">{step.id}</span>
                <span className="h-px w-14 bg-[linear-gradient(90deg,rgba(231,210,173,0.24),rgba(231,210,173,0))]" />
              </div>
              <h3 className="relative mt-6 text-[30px] font-extrabold leading-[1.02] tracking-[-0.028em] text-[#EDEDED] md:text-[34px]">
                {step.title}
              </h3>
              <p className="relative mt-3 max-w-[44ch] text-[15px] leading-[1.46] text-[#EDEDED]/66 md:text-[16px]">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </article>
    </section>
  )
}
