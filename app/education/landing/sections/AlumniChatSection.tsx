import { LiveSessionsShowcase } from "../../../LiveSessionsShowcase"
import { liveSessionMainPhoto, liveSessionSecondaryPhotos } from "../../../landing-data"

export function AlumniChatSection() {
  return (
    <section data-section-id="alumni-chat" className="px-6 pb-12 md:px-10 md:pb-14">
      <div className="overflow-hidden rounded-[28px] border border-[#f6d8ab]/45 bg-[linear-gradient(180deg,#ead6b5_0%,#d7ab6a_58%,#bd8044_100%)] shadow-[0_40px_140px_rgba(0,0,0,0.48)]">
        <LiveSessionsShowcase
          mainPhoto={liveSessionMainPhoto}
          secondaryPhotos={liveSessionSecondaryPhotos}
          className="min-h-[520px] lg:min-h-[560px]"
        />
      </div>
    </section>
  )
}
