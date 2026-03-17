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
import { TeamGapSection } from "./landing/sections/TeamGapSection"
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
  const [isDesktopViewport, setIsDesktopViewport] = useState(false)
  const [strategyProgress, setStrategyProgress] = useState(0)
  const [strategyCueDismissed, setStrategyCueDismissed] = useState(false)
  const [strategySequenceCompleted, setStrategySequenceCompleted] = useState(false)
  const cardRef = useRef<HTMLDivElement | null>(null)
  const strategySectionRef = useRef<HTMLDivElement | null>(null)
  const strategyProgressRef = useRef(0)
  const strategyActivatedRef = useRef(false)
  const strategyLockedRef = useRef(false)
  const strategyIntroAnimatingRef = useRef(false)
  const strategyIntroFrameRef = useRef(0)
  const strategyMinimumProgressRef = useRef(0)

  const profile = roleProfiles[selectedRole]
  const strategyStep = Math.min(Math.floor(strategyProgress * strategyJourneySteps.length), strategyJourneySteps.length - 1)

  const closeOpener = () => {
    setOpenerClosing(true)
    window.setTimeout(() => setShowOpener(false), 450)
  }

  type ScrollAlign = "start" | "center"

  const scrollToElement = (target: HTMLElement | null, align: ScrollAlign = "start") => {
    const container = cardRef.current
    if (!target) return
    if (!container) {
      target.scrollIntoView({ behavior: "smooth", block: align === "center" ? "center" : "start" })
      return
    }

    const canScrollContainer = container.scrollHeight > container.clientHeight + 8

    if (canScrollContainer) {
      const containerRect = container.getBoundingClientRect()
      const targetRect = target.getBoundingClientRect()
      const relativeTop = targetRect.top - containerRect.top + container.scrollTop
      const scrollTopTarget =
        align === "center"
          ? relativeTop - (container.clientHeight - targetRect.height) / 2
          : relativeTop - 24

      container.scrollTo({ top: Math.max(scrollTopTarget, 0), behavior: "smooth" })
      return
    }

    const targetRect = target.getBoundingClientRect()
    const targetTop = targetRect.top + window.scrollY
    const top = align === "center" ? targetTop - (window.innerHeight - targetRect.height) / 2 : targetTop - 24
    window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" })
  }

  const scrollToSection = (sectionId: string, align: ScrollAlign = "start") => {
    const container = cardRef.current
    const section =
      container?.querySelector<HTMLElement>(`[data-section-id="${sectionId}"]`) ??
      document.querySelector<HTMLElement>(`[data-section-id="${sectionId}"]`)
    scrollToElement(section, align)
  }

  const scrollToCourses = () => {
    scrollToSection("courses", "center")
  }

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)")
    const syncViewport = () => setIsDesktopViewport(media.matches)

    syncViewport()
    media.addEventListener("change", syncViewport)

    return () => {
      media.removeEventListener("change", syncViewport)
    }
  }, [])

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
    strategyProgressRef.current = strategyProgress
  }, [strategyProgress])

  useEffect(() => {
    if (strategyCueDismissed) return
    if (strategySequenceCompleted || strategyProgress >= 0.84) {
      setStrategyCueDismissed(true)
    }
  }, [strategyCueDismissed, strategyProgress, strategySequenceCompleted])

  useEffect(() => {
    if (!isDesktopViewport) return

    const container = cardRef.current
    const section = strategySectionRef.current
    if (!container || !section) return

    let rafId = 0
    const introTargetProgress = 0.24

    const commitProgress = (next: number) => {
      strategyProgressRef.current = next
      setStrategyProgress((prev) => (Math.abs(prev - next) > 0.004 ? next : prev))
    }

    const finishStrategySequence = () => {
      strategyLockedRef.current = true
      strategyActivatedRef.current = true
      strategyIntroAnimatingRef.current = false
      strategyMinimumProgressRef.current = 1
      setStrategySequenceCompleted(true)

      if (strategyIntroFrameRef.current) {
        window.cancelAnimationFrame(strategyIntroFrameRef.current)
        strategyIntroFrameRef.current = 0
      }

      commitProgress(1)
    }

    const startStrategyIntro = () => {
      if (strategyActivatedRef.current || strategyLockedRef.current) return

      strategyActivatedRef.current = true
      strategyIntroAnimatingRef.current = true

      const startedAt = performance.now()
      const duration = 680
      const initialProgress = strategyProgressRef.current

      const tick = (timestamp: number) => {
        const progress = Math.min((timestamp - startedAt) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        const next = initialProgress + (introTargetProgress - initialProgress) * eased

        strategyMinimumProgressRef.current = next
        commitProgress(next)

        if (progress < 1) {
          strategyIntroFrameRef.current = window.requestAnimationFrame(tick)
          return
        }

        strategyIntroAnimatingRef.current = false
        strategyIntroFrameRef.current = 0
        strategyMinimumProgressRef.current = introTargetProgress
      }

      strategyIntroFrameRef.current = window.requestAnimationFrame(tick)
    }

    const updateProgress = () => {
      rafId = 0

      const canScrollContainer = container.scrollHeight > container.clientHeight + 8
      const sectionRect = section.getBoundingClientRect()
      const viewportHeight = canScrollContainer ? container.clientHeight : window.innerHeight
      const sectionTop = canScrollContainer
        ? sectionRect.top - container.getBoundingClientRect().top + container.scrollTop
        : sectionRect.top + window.scrollY
      const scrollTop = canScrollContainer ? container.scrollTop : window.scrollY
      const distance = Math.max(section.offsetHeight - viewportHeight, 1)
      const rawProgress = Math.min(Math.max((scrollTop - sectionTop) / distance, 0), 1)
      const hasEnteredSection = scrollTop + viewportHeight * 0.72 >= sectionTop

      if (strategyLockedRef.current) {
        return
      }

      if (rawProgress >= 0.86 && strategyActivatedRef.current) {
        finishStrategySequence()
        return
      }

      if (!strategyActivatedRef.current && hasEnteredSection) {
        startStrategyIntro()
      }

      if (strategyIntroAnimatingRef.current) return

      if (!strategyActivatedRef.current) {
        commitProgress(0)
        return
      }

      const next = Math.max(strategyMinimumProgressRef.current, rawProgress)
      commitProgress(next)
    }

    const onScroll = () => {
      if (rafId) return
      rafId = window.requestAnimationFrame(updateProgress)
    }

    updateProgress()
    container.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)

    return () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId)
      }
      if (strategyIntroFrameRef.current) {
        window.cancelAnimationFrame(strategyIntroFrameRef.current)
      }
      container.removeEventListener("scroll", onScroll)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [isDesktopViewport])

  const showStrategyScrollCue =
    isDesktopViewport && !strategyCueDismissed && strategyProgress >= 0.01 && strategyProgress < 0.84

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
              revealEducationWord={!showOpener}
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
              showScrollCue={showStrategyScrollCue}
              compactAfterProgress={false}
            />

            <LearningSection
              learningStats={learningStats}
              courseThemes={courseThemes}
              deliveryBlocks={deliveryBlocks}
              learningFormats={learningFormats}
              scrollContainerRef={cardRef}
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
