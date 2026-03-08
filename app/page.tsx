"use client";

import { Manrope } from "next/font/google";
import { useCallback, useEffect, useRef, useState } from "react";
import { AboutCenterCard } from "./AboutCenterCard";
import { HeroCard } from "./HeroCard";
import { LiveSessionsCard } from "./LiveSessionsCard";
import { PricingCard } from "./PricingCard";
import {
  ecosystemFormats,
  highlights,
  liveSessionMainPhoto,
  liveSessionSecondaryPhotos,
  logoPlaceholders,
  pricingPlans,
  startFormats,
  youtubeVideos,
} from "./landing-data";
import { StartCard } from "./StartCard";
import { VideosCard } from "./VideosCard";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const CARD_COUNT = 6;
const TRANSITION_MS = 700;
const FIRST_CARD_UNLOCK_DELAY_MS = 260;

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
  const [activeCard, setActiveCard] = useState(0);

  const isTransitioningRef = useRef(false);
  const firstCardAdvanceArmedRef = useRef(false);
  const firstCardAdvanceArmedAtRef = useRef(0);

  const showCenterCard = activeCard >= 1;
  const showStartCard = activeCard >= 2;
  const showPricingCard = activeCard >= 3;
  const showVideoCard = activeCard >= 4;
  const showLiveSessionsCard = activeCard >= 5;

  const goToCard = useCallback((index: number) => {
    if (isTransitioningRef.current) return;
    if (index < 0 || index >= CARD_COUNT) return;

    isTransitioningRef.current = true;
    setActiveCard(index);

    setTimeout(() => {
      isTransitioningRef.current = false;
    }, TRANSITION_MS + 60);
  }, []);

  useEffect(() => {
    const card = firstCardRef.current;
    if (!card) return;

    const resetAdvanceLock = () => {
      firstCardAdvanceArmedRef.current = false;
      firstCardAdvanceArmedAtRef.current = 0;
    };

    const handleWheel = (event: WheelEvent) => {
      if (isTransitioningRef.current || activeCard !== 0) return;

      const maxScroll = Math.max(card.scrollHeight - card.clientHeight, 0);
      if (maxScroll <= 0) return;

      const atBottom = card.scrollTop >= maxScroll - 1;

      if (event.deltaY <= 0) {
        resetAdvanceLock();
        return;
      }

      if (!atBottom) {
        resetAdvanceLock();
        return;
      }

      event.preventDefault();

      const now = performance.now();
      if (!firstCardAdvanceArmedRef.current) {
        firstCardAdvanceArmedRef.current = true;
        firstCardAdvanceArmedAtRef.current = now;
        return;
      }

      if (now - firstCardAdvanceArmedAtRef.current < FIRST_CARD_UNLOCK_DELAY_MS) {
        return;
      }

      resetAdvanceLock();
      goToCard(1);
    };

    const handleScroll = () => {
      if (activeCard !== 0) return;
      const maxScroll = Math.max(card.scrollHeight - card.clientHeight, 0);
      if (card.scrollTop < maxScroll - 1) {
        resetAdvanceLock();
      }
    };

    card.addEventListener("wheel", handleWheel, { passive: false });
    card.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      card.removeEventListener("wheel", handleWheel);
      card.removeEventListener("scroll", handleScroll);
    };
  }, [activeCard, goToCard]);

  useEffect(() => {
    const refs = [
      firstCardRef,
      secondCardRef,
      thirdCardRef,
      fourthCardRef,
      fifthCardRef,
      sixthCardRef,
    ];

    const cleanups = refs.slice(1).map((ref, index) => {
      const card = ref.current;
      if (!card) return () => undefined;

      const cardIndex = index + 1;
      const handleWheel = (event: WheelEvent) => {
        if (isTransitioningRef.current || activeCard !== cardIndex) return;

        const maxScroll = Math.max(card.scrollHeight - card.clientHeight, 0);
        const atTop = card.scrollTop <= 0;
        const atBottom = maxScroll <= 0 || card.scrollTop >= maxScroll - 1;

        if (event.deltaY < 0 && atTop) {
          event.preventDefault();

          const previousRef = refs[cardIndex - 1];
          if (previousRef?.current) {
            const previousMax = Math.max(
              previousRef.current.scrollHeight - previousRef.current.clientHeight,
              0,
            );
            const returnProgress = cardIndex - 1 === 0 ? 0.65 : 0.55;
            previousRef.current.scrollTop = previousMax * returnProgress;
          }

          goToCard(cardIndex - 1);
          return;
        }

        if (event.deltaY > 0 && atBottom && cardIndex < CARD_COUNT - 1) {
          event.preventDefault();
          goToCard(cardIndex + 1);
        }
      };

      card.addEventListener("wheel", handleWheel, { passive: false });
      return () => card.removeEventListener("wheel", handleWheel);
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, [activeCard, goToCard]);

  useEffect(() => {
    const refs = [
      firstCardRef,
      secondCardRef,
      thirdCardRef,
      fourthCardRef,
      fifthCardRef,
      sixthCardRef,
    ];
    refs.forEach((ref, index) => {
      if (index > activeCard && ref.current) {
        ref.current.scrollTop = 0;
      }
    });
  }, [activeCard]);

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
      <section className="relative w-full">
        <HeroCard
          cardRef={firstCardRef}
          itemRefs={itemRefs}
          highlights={highlights}
          visibleItems={visibleItems}
        />

        <div
          className={`absolute inset-0 z-40 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            showCenterCard ? "translate-y-0 pointer-events-auto" : "translate-y-[106%] pointer-events-none"
          }`}
        >
          <AboutCenterCard
            cardRef={secondCardRef}
            ecosystemFormats={ecosystemFormats}
            logoPlaceholders={logoPlaceholders}
          />
        </div>

        <div
          className={`absolute inset-0 z-50 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            showStartCard ? "translate-y-0 pointer-events-auto" : "translate-y-[106%] pointer-events-none"
          }`}
        >
          <StartCard cardRef={thirdCardRef} startFormats={startFormats} />
        </div>

        <div
          className={`absolute inset-0 z-[60] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            showPricingCard ? "translate-y-0 pointer-events-auto" : "translate-y-[106%] pointer-events-none"
          }`}
        >
          <PricingCard cardRef={fourthCardRef} plans={pricingPlans} />
        </div>

        <div
          className={`absolute inset-0 z-[70] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            showVideoCard ? "translate-y-0 pointer-events-auto" : "translate-y-[106%] pointer-events-none"
          }`}
        >
          <VideosCard cardRef={fifthCardRef} youtubeVideos={youtubeVideos} />
        </div>

        <div
          className={`absolute inset-0 z-[80] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            showLiveSessionsCard ? "translate-y-0 pointer-events-auto" : "translate-y-[106%] pointer-events-none"
          }`}
        >
          <LiveSessionsCard
            cardRef={sixthCardRef}
            mainPhoto={liveSessionMainPhoto}
            secondaryPhotos={liveSessionSecondaryPhotos}
          />
        </div>
      </section>
    </main>
  );
}
