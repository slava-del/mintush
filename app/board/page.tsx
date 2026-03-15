import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import { ContactFooter } from "../education/course-shared"
import { trustedLogos } from "../education/landing/data"
import { AlumniChatSection, TrustedSection } from "../education/landing/sections"
import { BoardFormatsSection } from "./components/BoardFormatsSection"
import { BoardHeroGallerySection } from "./components/BoardHeroGallerySection"
import { BoardHeroSection } from "./components/BoardHeroSection"
import { BoardJoinFlowSection } from "./components/BoardJoinFlowSection"
import { BoardOfferSection } from "./components/BoardOfferSection"
import { BoardParticipantsSection } from "./components/BoardParticipantsSection"
import { BoardResultsPrinciplesSection } from "./components/BoardResultsPrinciplesSection"
import { BoardTopicsSection } from "./components/BoardTopicsSection"
import {
  boardFormatsContent,
  boardHeroContent,
  boardJoinFlowContent,
  boardMetadata,
  boardOfferContent,
  boardParticipantsContent,
  boardResultsPrinciplesContent,
  boardTopicsContent,
} from "./data"
import styles from "./page.module.css"

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
})

export const metadata: Metadata = boardMetadata

export default function BoardPage() {
  return (
    <main className={`${manrope.className} min-h-screen bg-black p-0 md:p-6`}>
      <section className="relative w-full">
        <div
          className={`${styles.scrollRoot} relative overflow-x-hidden bg-[#030303] md:h-[calc(100vh-3rem)] md:overflow-y-auto md:rounded-[28px] md:border md:border-[#e7d2ad]/45 md:shadow-[0_40px_140px_rgba(0,0,0,0.65)]`}
        >
          <div className="relative overflow-hidden bg-[#030303]">
            <BoardHeroSection content={boardHeroContent} />

            <div className="mx-auto w-full max-w-[1280px] px-6 pb-16 md:px-10 md:pb-20 lg:px-14">
              <BoardHeroGallerySection />
              <div className="mt-24 md:mt-[104px] xl:mt-[116px]">
                <BoardResultsPrinciplesSection content={boardResultsPrinciplesContent} />
              </div>
              <div className="mt-24 md:mt-[104px] xl:mt-[116px]">
                <BoardFormatsSection content={boardFormatsContent} />
              </div>
              <div className="mt-24 md:mt-[104px] xl:mt-[116px]">
                <BoardTopicsSection content={boardTopicsContent} />
              </div>
              <div className="mt-24 md:mt-[104px] xl:mt-[116px]">
                <BoardOfferSection content={boardOfferContent} />
              </div>
              <div className="mt-24 md:mt-[104px] xl:mt-[116px]">
                <BoardParticipantsSection content={boardParticipantsContent} />
              </div>
              <div className="mt-24 md:mt-[104px] xl:mt-[116px]">
                <BoardJoinFlowSection content={boardJoinFlowContent} />
              </div>
            </div>

            <TrustedSection trustedLogos={trustedLogos} />
            <AlumniChatSection />
            <ContactFooter />
          </div>
        </div>
      </section>
    </main>
  )
}
