import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HeroSection } from "@/components/home/hero-section"
import { ManifestoSection } from "@/components/home/manifesto-section"
import { GptVsSystemSection } from "@/components/home/gpt-vs-system-section"
import { ProofSection } from "@/components/home/proof-section"
import { PreviewGallerySection } from "@/components/home/preview-gallery-section"
import { CoursesMosaicSection } from "@/components/home/courses-mosaic-section"
import { WhoForSection } from "@/components/home/who-for-section"
import { FaqSection } from "@/components/home/faq-section"
import { FinalCtaSection } from "@/components/home/final-cta-section"

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <ManifestoSection />
        <GptVsSystemSection />
        <ProofSection />
        <PreviewGallerySection />
        <CoursesMosaicSection />
        <WhoForSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </>
  )
}
