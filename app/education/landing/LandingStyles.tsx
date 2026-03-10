export function LandingStyles() {
  return (
    <style jsx global>{`
      .education-topics-track {
        animation: educationTopics 34s linear infinite;
        will-change: transform;
      }

      .strategy-stage {
        top: calc((100vh - 1.5rem - 58vh) / 2);
      }

      .hero-letter {
        opacity: 0;
        transform: translateY(28px) scale(0.9);
        animation: heroLetterIn 650ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
      }

      .morph-word {
        animation: morphWord 620ms cubic-bezier(0.22, 1, 0.36, 1);
      }

      .opener-chunk {
        opacity: 0;
        transform: translateY(42px) skewY(7deg);
        animation: openerChunkIn 900ms cubic-bezier(0.2, 0.95, 0.3, 1) forwards;
      }

      .gpt-stream {
        animation: gptStreamFlow 34s linear infinite;
      }

      .system-block {
        opacity: 0;
        transform: translateY(16px);
        animation: systemBlockIn 620ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
      }

      @keyframes educationTopics {
        from {
          transform: translateX(0);
        }
        to {
          transform: translateX(-33.3333%);
        }
      }

      @keyframes heroLetterIn {
        from {
          opacity: 0;
          transform: translateY(28px) scale(0.9);
        }
        to {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }

      @keyframes morphWord {
        from {
          opacity: 0;
          transform: translateY(14px) scale(0.94);
        }
        to {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }

      @keyframes openerChunkIn {
        from {
          opacity: 0;
          transform: translateY(42px) skewY(7deg);
        }
        to {
          opacity: 1;
          transform: translateY(0) skewY(0deg);
        }
      }

      @keyframes gptStreamFlow {
        from {
          transform: translateY(0);
        }
        to {
          transform: translateY(-50%);
        }
      }

      @keyframes systemBlockIn {
        from {
          opacity: 0;
          transform: translateY(16px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .education-topics-track,
        .hero-letter,
        .morph-word,
        .opener-chunk,
        .gpt-stream,
        .system-block {
          animation: none;
          opacity: 1;
          transform: none;
        }
      }

      @media (min-width: 640px) {
        .strategy-stage {
          top: calc((100vh - 2rem - 58vh) / 2);
        }
      }

      @media (min-width: 768px) {
        .strategy-stage {
          top: calc((100vh - 3rem - 58vh) / 2);
        }
      }

      .mintush-scroll {
        scrollbar-width: thin;
        scrollbar-color: rgba(231, 210, 173, 0.55) rgba(255, 255, 255, 0.06);
      }

      .mintush-scroll::-webkit-scrollbar {
        width: 9px;
        height: 9px;
      }

      .mintush-scroll::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.06);
        border-radius: 9999px;
      }

      .mintush-scroll::-webkit-scrollbar-thumb {
        background: rgba(231, 210, 173, 0.55);
        border-radius: 9999px;
        border: 1px solid rgba(0, 0, 0, 0.25);
      }

      .mintush-scroll::-webkit-scrollbar-thumb:hover {
        background: rgba(231, 210, 173, 0.75);
      }
    `}</style>
  )
}
