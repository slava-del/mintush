"use client";

import { Manrope } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import { AboutCenterCard } from "./AboutCenterCard";
import { HeroCard } from "./HeroCard";
import { LiveSessionsCard } from "./LiveSessionsCard";
import { PricingCard } from "./PricingCard";
import {
  ecosystemFormats,
  highlights,
  liveSessionMainPhoto,
  liveSessionSecondaryPhotos,
  pricingPlans,
  startFormats,
  startQuestions,
  youtubeVideos,
} from "./landing-data";
import { StartCard } from "./StartCard";
import { VideosCard } from "./VideosCard";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export default function Page() {
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const firstCardRef = useRef<HTMLDivElement | null>(null);
  const secondCardRef = useRef<HTMLDivElement | null>(null);
  const thirdCardRef = useRef<HTMLDivElement | null>(null);
  const fourthCardRef = useRef<HTMLDivElement | null>(null);
  const fifthCardRef = useRef<HTMLDivElement | null>(null);
  const sixthCardRef = useRef<HTMLDivElement | null>(null);

  const [visibleItems, setVisibleItems] = useState<boolean[]>(() =>
    Array.from({ length: highlights.length }, () => false),
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const indexAttr = entry.target.getAttribute("data-index");
          if (indexAttr === null) return;
          const index = Number(indexAttr);
          if (Number.isNaN(index)) return;

          setVisibleItems((prev) => {
            if (prev[index]) return prev;
            const next = [...prev];
            next[index] = true;
            return next;
          });

          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.35, rootMargin: "0px 0px -8% 0px" },
    );

    itemRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className={`${manrope.className} min-h-screen bg-[#0b0b0b] p-3 sm:p-4 md:p-6`}>
      <section className="mx-auto flex w-full flex-col gap-3 sm:gap-4 md:gap-6">
        <HeroCard
          cardRef={firstCardRef}
          itemRefs={itemRefs}
          highlights={highlights}
          visibleItems={visibleItems}
        />

        <AboutCenterCard
          cardRef={secondCardRef}
          ecosystemFormats={ecosystemFormats}
        />

        <StartCard
          cardRef={thirdCardRef}
          startFormats={startFormats}
          startQuestions={startQuestions}
        />

        <PricingCard cardRef={fourthCardRef} plans={pricingPlans} />

        <VideosCard cardRef={fifthCardRef} youtubeVideos={youtubeVideos} />

        {/* <BusinessArchitectureCard /> */}

        <LiveSessionsCard
          cardRef={sixthCardRef}
          mainPhoto={liveSessionMainPhoto}
          secondaryPhotos={liveSessionSecondaryPhotos}
        />
      </section>
    </main>
  );
}
