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
  TariffsSection,
  TopTopicsBar,
} from "../course-shared"
import {
  managementAfterCourseCopy,
  managementBlueprintModules,
  managementExpertStats,
  managementFaqItems,
  managementFormatHighlights,
  managementGuides,
  managementMentorCopy,
  managementMetadata,
  managementMonthlyQuestions,
  managementOutcomeCards,
  managementProgramSummary,
  managementProgramSteps,
  managementSystemSectionCopy,
  managementTariffCards,
  managementTopTopics,
  managementWebinars,
  managementWhoFor,
} from "./data"
import { AfterCourseSection } from "./components/AfterCourseSection"
import { AudienceFitSection } from "./components/AudienceFitSection"
import { BlueprintGridCard } from "./components/BlueprintGridCard"
import { ManagementSystemFlowSection } from "./components/ManagementSystemFlowSection"
import { ProgramStepsSection } from "./components/ProgramStepsSection"
import styles from "./page.module.css"

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
})

export const metadata: Metadata = managementMetadata

export default function BusinessManagementPage() {
  return (
    <main className={`${manrope.className} min-h-screen bg-black p-0 md:p-6`}>
      <section className="relative w-full">
        <div
          className={`${styles.scrollRoot} relative overflow-x-hidden bg-[#050505] md:h-[calc(100vh-3rem)] md:overflow-y-auto md:rounded-[28px] md:border md:border-[#e7d2ad]/45 md:shadow-[0_40px_140px_rgba(0,0,0,0.65)]`}
        >
          <TopTopicsBar topics={managementTopTopics} trackClassName={styles.topicsTrack} />

          <div className="relative overflow-hidden bg-[#050505]">
            <section id="top" className="relative overflow-hidden px-6 pb-16 pt-20 md:px-12 md:pb-20 md:pt-24">
              <div className="absolute left-6 right-6 top-6 z-40 flex justify-end md:left-10 md:right-10 md:top-8">
                <LandingPrimaryNav mode="brand-hamburger" contactHref="#contact" />
              </div>
              <div className="pointer-events-none absolute left-[18%] top-10 h-48 w-48 rounded-full bg-[#e7d2ad]/12 blur-3xl" />
              <div className="pointer-events-none absolute right-[8%] top-[18%] h-56 w-56 rounded-full bg-[#3957ff]/10 blur-3xl" />
              <div className="pointer-events-none absolute left-1/2 top-[58%] h-44 w-[32rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(231,210,173,0.08),rgba(231,210,173,0)_72%)] blur-3xl" />
              <div className="mx-auto grid max-w-[1380px] items-start gap-10 lg:grid-cols-[1.04fr_0.96fr] xl:gap-14">
                <div className="relative z-10">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#e7d2ad]/78">Практический курс</p>
                  <h1 className="mt-3 text-[clamp(42px,6vw,88px)] font-extrabold leading-[0.9] tracking-[-0.045em] text-[#EDEDED]">
                    Управление
                    <br />
                    бизнесом
                  </h1>
                  <p className="mt-4 text-[clamp(16px,1.9vw,24px)] font-semibold leading-[1.14] tracking-[-0.015em] text-[#e7d2ad]">
                    Работающая бизнес-система за 4 шага
                  </p>
                  <p className="mt-4 max-w-2xl text-[17px] leading-[1.48] text-[#EDEDED]/86 md:text-[20px]">
                    Если бизнес держится на собственнике, а операционка требует постоянного внимания, значит компании не
                    хватает управленческого каркаса. Курс помогает собрать систему управления: роли, процессы, метрики и
                    ритм, чтобы бизнес работал предсказуемо.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href="#tariffs"
                      className="inline-flex items-center rounded-[14px] bg-[#e7d2ad] px-6 py-3.5 text-[14px] font-semibold uppercase tracking-[0.08em] text-black transition hover:translate-y-[-1px] hover:bg-[#d9bf98]"
                    >
                      Выбрать пакет
                    </a>
                    <a
                      href="#free-webinar"
                      className="inline-flex items-center rounded-[14px] border border-[#e7d2ad]/45 px-6 py-3.5 text-[14px] font-semibold uppercase tracking-[0.08em] text-[#EDEDED]/92 transition hover:border-[#e7d2ad] hover:text-[#EDEDED]"
                    >
                      Смотреть 1-й вебинар бесплатно
                    </a>
                  </div>
                </div>

                <div className="relative z-10 lg:pt-4">
                  <BlueprintGridCard modules={managementBlueprintModules} />
                </div>
              </div>
            </section>

            <AfterCourseSection
              eyebrow={managementAfterCourseCopy.eyebrow}
              title={managementAfterCourseCopy.title}
              description={managementAfterCourseCopy.description}
              cards={managementOutcomeCards}
            />

            <AudienceFitSection items={managementWhoFor} />

            <ManagementSystemFlowSection
              titleFirstLine={managementSystemSectionCopy.titleFirstLine}
              titleSecondLine={managementSystemSectionCopy.titleSecondLine}
              subtitle={managementSystemSectionCopy.subtitle}
              questions={managementMonthlyQuestions}
            />

            <ProgramStepsSection
              title="Бизнес-система за 4 шага"
              subtitle="Пошаговый путь от ручного контроля к управлению через роли, цифры, процессы и регулярный ритм."
              steps={managementProgramSteps}
            />

            <ProgramSection
              sectionId="inside"
              guides={managementGuides}
              webinars={managementWebinars}
              formatHighlights={managementFormatHighlights}
              summary={managementProgramSummary}
            />

            <MentorSection
              title={managementMentorCopy.title}
              description={managementMentorCopy.description}
              quote={managementMentorCopy.quote}
              stats={managementExpertStats}
            />

            <TariffsSection tariffCards={managementTariffCards} />
            <FreeWebinarSection />
            <FaqSection faqItems={managementFaqItems} />

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
