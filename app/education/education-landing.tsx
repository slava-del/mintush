"use client"

import { Manrope } from "next/font/google"
import { useEffect, useRef, useState } from "react"
import { LandingStyles } from "./landing/LandingStyles"
import {
  strategyJourneySteps,
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
  const cardRef = useRef<HTMLDivElement | null>(null)

  const profile = roleProfiles[selectedRole]

  const closeOpener = () => {
    setOpenerClosing(true)
    window.setTimeout(() => setShowOpener(false), 450)
  }

  const scrollToElement = (target: HTMLElement | null) => {
    const container = cardRef.current
    if (!target) return
    if (!container) {
      target.scrollIntoView({ behavior: "smooth", block: "start" })
      return
    }

    const canScrollContainer = container.scrollHeight > container.clientHeight + 8

    if (canScrollContainer) {
      container.scrollTo({ top: Math.max(target.offsetTop - 24, 0), behavior: "smooth" })
      return
    }

    const top = target.getBoundingClientRect().top + window.scrollY - 24
    window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" })
  }

  const scrollToSection = (sectionId: string) => {
    const container = cardRef.current
    const section =
      container?.querySelector<HTMLElement>(`[data-section-id="${sectionId}"]`) ??
      document.querySelector<HTMLElement>(`[data-section-id="${sectionId}"]`)
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

  return (
    <>
      <OpenerOverlay showOpener={showOpener} openerClosing={openerClosing} onClose={closeOpener} />

      <main className={`${manrope.className} min-h-screen bg-black p-0 md:p-6`}>
        <section className="relative w-full">
          <div
            ref={cardRef}
            className="mintush-scroll overflow-x-hidden bg-[#050505] md:h-[calc(100vh-3rem)] md:overflow-y-auto md:rounded-[28px] md:border md:border-[#e7d2ad]/45 md:shadow-[0_40px_140px_rgba(0,0,0,0.65)]"
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

            <StrategySection steps={strategyJourneySteps} />

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
