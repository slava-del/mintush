import Image from "next/image"
import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import { LandingPrimaryNav } from "@/components/landing-primary-nav"
import { AlumniChatSection } from "../landing/sections/AlumniChatSection"
import {
  ContactFooter,
  FaqSection,
  FreeWebinarSection,
  MentorSection,
  ProgramSection,
  ResultSection,
  SystemQuestionsSection,
  TariffsSection,
  TopTopicsBar,
  WhoForSection,
} from "../course-shared"
import {
  strategyExpertStats,
  strategyFaqItems,
  strategyFinalResultItems,
  strategyFormatHighlights,
  strategyGuides,
  strategyMentorCopy,
  strategyMetadata,
  strategyMonthlyQuestions,
  strategyProgramSummary,
  strategySystemSectionCopy,
  strategyTariffCards,
  strategyTopTopics,
  strategyValuePoints,
  strategyWebinars,
  strategyWhoFor,
} from "./data"
import styles from "./page.module.css"

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
})

export const metadata: Metadata = strategyMetadata

export default function BusinessStrategyPage() {
  return (
    <main className={`${manrope.className} min-h-screen bg-black p-0 md:p-6`}>
      <section className="relative w-full">
        <div
          className={`${styles.scrollRoot} relative overflow-x-hidden bg-[#050505] md:h-[calc(100vh-3rem)] md:overflow-y-auto md:rounded-[28px] md:border md:border-[#e7d2ad]/45 md:shadow-[0_40px_140px_rgba(0,0,0,0.65)]`}
        >
          <TopTopicsBar topics={strategyTopTopics} trackClassName={styles.topicsTrack} />

          <div className="relative overflow-hidden bg-[#050505]">
            <section id="top" className="relative overflow-hidden px-6 pb-16 pt-20 md:px-12 md:pb-20 md:pt-24">
              <div className="pointer-events-none absolute inset-x-0 top-5 z-40 px-6 md:top-6 md:px-12">
                <div className="mx-auto flex max-w-[1380px] justify-end">
                  <div className="pointer-events-auto">
                    <LandingPrimaryNav mode="brand-hamburger" contactHref="#contact" />
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute left-1/2 top-6 h-56 w-56 -translate-x-1/2 rounded-full bg-[#e7d2ad]/18 blur-3xl" />
              <div className="pointer-events-none absolute right-10 top-24 h-44 w-44 rounded-full bg-[#e7d2ad]/12 blur-3xl" />
              <div className="mx-auto grid max-w-[1380px] items-start gap-10 lg:grid-cols-[1.08fr_0.92fr] xl:gap-14">
                <div className="relative z-10">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#e7d2ad]/78">Практический курс</p>
                  <h1 className="mt-3 text-[clamp(42px,6.1vw,92px)] font-extrabold leading-[0.9] tracking-[-0.045em] text-[#EDEDED]">
                    Стратегия бизнеса
                    <br />
                    на 12 месяцев
                  </h1>
                  <p className="mt-4 text-[clamp(16px,1.9vw,24px)] font-semibold leading-[1.14] tracking-[-0.015em] text-[#e7d2ad]">
                    без «воды» и бесконечных планёрок
                  </p>
                  <p className="mt-4 max-w-2xl text-[17px] leading-[1.48] text-[#EDEDED]/86 md:text-[20px]">
                    Практический курс для владельцев и руководителей малого и среднего бизнеса: соберёте стратегию на год и
                    встроите её в операционное управление, чтобы она работала, а не лежала в папке.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href="#tariffs"
                      className="inline-flex items-center rounded-[14px] bg-[#e7d2ad] px-6 py-3.5 text-[14px] font-semibold uppercase tracking-[0.08em] text-black transition hover:translate-y-[-1px] hover:bg-[#d9bf98]"
                    >
                      Выбрать пакет и купить
                    </a>
                    <a
                      href="#free-webinar"
                      className="inline-flex items-center rounded-[14px] border border-[#e7d2ad]/45 px-6 py-3.5 text-[14px] font-semibold uppercase tracking-[0.08em] text-[#EDEDED]/92 transition hover:border-[#e7d2ad] hover:text-[#EDEDED]"
                    >
                      Смотреть 1-й вебинар бесплатно
                    </a>
                  </div>
                </div>

                <div className="relative">
                  <div className="relative overflow-hidden rounded-[28px] border border-[#e7d2ad]/35 bg-[#0a0a0a]/70">
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0)_0%,rgba(5,5,5,0.82)_100%)]" />
                    <Image
                      src="/images/course-strategy.jpg"
                      alt="Стратегия бизнеса"
                      width={900}
                      height={1200}
                      priority
                      className="h-[320px] max-h-[48vh] w-full object-cover object-center opacity-72 sm:h-[360px] md:h-[430px] md:max-h-[52vh] xl:h-[500px] xl:max-h-[56vh]"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section id="value" className="mx-auto max-w-[1380px] px-6 pb-14 md:px-12 md:pb-16">
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#e7d2ad]/78">Что дает курс</p>
              <div className="mt-5 overflow-hidden rounded-[20px] border border-[#e7d2ad]/34 bg-[linear-gradient(90deg,rgba(3,3,3,0.92)_0%,rgba(6,6,6,0.98)_52%,rgba(10,10,10,0.92)_100%)]">
                <div className="grid md:grid-cols-3">
                  {strategyValuePoints.map((point, index) => {
                    const [titleRaw, ...descriptionParts] = point.split(":")
                    const title = titleRaw.trim()
                    const description = descriptionParts.join(":").trim()
                    const lineClass = index < strategyValuePoints.length - 1 ? "md:border-r md:border-r-[#e7d2ad]/28" : ""
                    const rowClass = index < strategyValuePoints.length - 1 ? "border-b border-b-[#e7d2ad]/20 md:border-b-0" : ""

                    return (
                      <article key={point} className={`min-h-[210px] px-7 py-7 md:min-h-[240px] md:px-9 md:py-8 ${lineClass} ${rowClass}`}>
                        <p className="break-words text-[clamp(34px,3.6vw,62px)] font-extrabold leading-[0.96] tracking-[-0.025em] text-[#EDEDED] uppercase">
                          {title}
                        </p>
                        <p className="mt-4 max-w-[30ch] text-[13px] font-semibold uppercase leading-[1.45] tracking-[0.18em] text-[#EDEDED]/74 md:text-[14px]">
                          {description}
                        </p>
                      </article>
                    )
                  })}
                </div>
              </div>
            </section>

            <WhoForSection whoFor={strategyWhoFor} />

            <SystemQuestionsSection
              titleFirstLine={strategySystemSectionCopy.titleFirstLine}
              titleSecondLine={strategySystemSectionCopy.titleSecondLine}
              subtitle={strategySystemSectionCopy.subtitle}
              questions={strategyMonthlyQuestions}
              ctaText={strategySystemSectionCopy.ctaText}
            />

            <ResultSection items={strategyFinalResultItems} />

            <MentorSection
              title={strategyMentorCopy.title}
              description={strategyMentorCopy.description}
              quote={strategyMentorCopy.quote}
              stats={strategyExpertStats}
            />

            <ProgramSection
              guides={strategyGuides}
              webinars={strategyWebinars}
              formatHighlights={strategyFormatHighlights}
              summary={strategyProgramSummary}
            />

            <TariffsSection tariffCards={strategyTariffCards} />
            <FreeWebinarSection />
            <FaqSection faqItems={strategyFaqItems} />

            <div id="alumni-chat">
              <AlumniChatSection />
            </div>

            <ContactFooter />
          </div>
        </div>
      </section>
    </main>
  )
}
