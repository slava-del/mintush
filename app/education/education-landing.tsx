"use client"

import { Manrope } from "next/font/google"
import { useEffect, useRef, useState } from "react"
import { LandingStyles } from "./landing/LandingStyles"
import {
  strategyJourneySteps,
  chapterBackgrounds,
  courseThemes,
  courses,
  curriculumBlocks,
  deliveryBlocks,
  heroWordPrimary,
  heroWordSecondary,
  learningFormats,
  learningStats,
  marqueeTopics,
  morphResultWords,
  roleOptions,
  roleProfiles,
  trustedLogos,
  gptMessages,
} from "./landing/data"
import { type RoleKey } from "./landing/types"
import {
  BusinessModelSection,
  CoursesSection,
  GptVsSystemSection,
  HeroSection,
  AlumniChatSection,
  LandingFooter,
  LearningSection,
  OpenerOverlay,
  StrategySection,
  TeamGapSection,
  TopTopicsBar,
  TrustedSection,
} from "./landing/sections"

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
})

export function EducationLanding() {
  const [showOpener, setShowOpener] = useState(true)
  const [openerClosing, setOpenerClosing] = useState(false)
  const [morphIndex, setMorphIndex] = useState(0)
  const [selectedRole, setSelectedRole] = useState<RoleKey>("team")
  const [strategyProgress, setStrategyProgress] = useState(0)
  const cardRef = useRef<HTMLDivElement | null>(null)
  const strategySectionRef = useRef<HTMLDivElement | null>(null)

  const profile = roleProfiles[selectedRole]
  const strategyStep = Math.min(Math.floor(strategyProgress * strategyJourneySteps.length), strategyJourneySteps.length - 1)

  const closeOpener = () => {
    setOpenerClosing(true)
    window.setTimeout(() => setShowOpener(false), 450)
  }

  const scrollToElement = (target: HTMLElement | null) => {
    const container = cardRef.current
    if (!container || !target) return
    container.scrollTo({ top: Math.max(target.offsetTop - 24, 0), behavior: "smooth" })
  }

  const scrollToSection = (sectionId: string) => {
    const container = cardRef.current
    if (!container) return
    const section = container.querySelector<HTMLElement>(`[data-section-id="${sectionId}"]`)
    scrollToElement(section)
  }

  const scrollToCourses = () => {
    scrollToSection("courses")
  }

  useEffect(() => {
    const ticker = window.setInterval(() => {
      setMorphIndex((prev) => (prev + 1) % morphResultWords.length)
    }, 1800)
    return () => window.clearInterval(ticker)
  }, [])

  useEffect(() => {
    document.body.style.overflow = showOpener ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [showOpener])

  useEffect(() => {
    const container = cardRef.current
    const section = strategySectionRef.current
    if (!container || !section) return

    let rafId = 0
    const updateProgress = () => {
      rafId = 0
      const viewportHeight = container.clientHeight
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight
      const distance = Math.max(sectionHeight - viewportHeight, 1)
      const next = Math.min(Math.max((container.scrollTop - sectionTop) / distance, 0), 1)

      setStrategyProgress((prev) => (Math.abs(prev - next) > 0.004 ? next : prev))
    }

    const onScroll = () => {
      if (rafId) return
      rafId = window.requestAnimationFrame(updateProgress)
    }

    updateProgress()
    container.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)

    return () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId)
      }
      container.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  return (
    <>
      <OpenerOverlay showOpener={showOpener} openerClosing={openerClosing} onClose={closeOpener} />

      <main className={`${manrope.className} min-h-screen bg-black p-3 sm:p-4 md:p-6`}>
        <section className="relative w-full">
          <div
            ref={cardRef}
            className="mintush-scroll h-[calc(100vh-1.5rem)] sm:h-[calc(100vh-2rem)] md:h-[calc(100vh-3rem)] overflow-x-hidden overflow-y-auto rounded-[28px] border border-[#e7d2ad]/45 bg-[#050505] shadow-[0_40px_140px_rgba(0,0,0,0.65)]"
          >
            <TopTopicsBar topics={marqueeTopics} onSelectSection={scrollToSection} />

            <HeroSection
              heroWordPrimary={heroWordPrimary}
              heroWordSecondary={heroWordSecondary}
              morphWord={morphResultWords[morphIndex]}
              onScrollToCourses={scrollToCourses}
            />

            <BusinessModelSection />

            <TeamGapSection
              roleOptions={roleOptions}
              selectedRole={selectedRole}
              profile={profile}
              onSelectRole={setSelectedRole}
            />

            <GptVsSystemSection gptMessages={gptMessages} curriculumBlocks={curriculumBlocks} />

            <StrategySection
              strategySectionRef={strategySectionRef}
              chapterBackgrounds={chapterBackgrounds}
              strategyStep={strategyStep}
              strategyProgress={strategyProgress}
              steps={strategyJourneySteps}
              onScrollToCourses={scrollToCourses}
            />

            <LearningSection
              learningStats={learningStats}
              courseThemes={courseThemes}
              deliveryBlocks={deliveryBlocks}
              learningFormats={learningFormats}
            />

            <CoursesSection courses={courses} />

            <TrustedSection trustedLogos={trustedLogos} />

            <AlumniChatSection />

            <LandingFooter />
          </div>
        </section>

        <LandingStyles />
      </main>
    </>
  )
}
