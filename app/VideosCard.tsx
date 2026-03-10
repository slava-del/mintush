import { memo, type RefObject } from "react";
import type { YoutubeVideo } from "./landing-data";

type VideosCardProps = {
  cardRef: RefObject<HTMLDivElement | null>;
  youtubeVideos: YoutubeVideo[];
};

export const VideosCard = memo(function VideosCard({ cardRef, youtubeVideos }: VideosCardProps) {
  return (
    <div
      ref={cardRef}
      className="min-h-[calc(100vh-1.5rem)] overflow-hidden rounded-[28px] border border-white/12 bg-[#030303] shadow-[0_40px_140px_rgba(0,0,0,0.75)] sm:min-h-[calc(100vh-2rem)] md:min-h-[calc(100vh-3rem)]"
    >
      <div className="flex h-full min-h-[calc(100vh-1.5rem)] flex-col px-6 pb-8 pt-8 sm:min-h-[calc(100vh-2rem)] md:min-h-[calc(100vh-3rem)] md:px-10 md:pb-10 md:pt-10">
        <h2 className="text-center text-[40px] font-extrabold leading-[1.03] tracking-[-0.03em] text-white md:text-[56px]">
          Полезные видео
        </h2>

        <div className="flex flex-1 items-center pt-8 md:pt-10">
          <div className="mx-auto grid w-full max-w-[1550px] grid-cols-1 gap-x-10 gap-y-10 lg:grid-cols-3">
            {youtubeVideos.map((video, index) => (
              <a
                key={`${video.videoId}-${index}`}
                href={video.url}
                target="_blank"
                rel="noreferrer"
                className="group block"
              >
                <div className="relative overflow-hidden rounded-[18px] border border-white/12 bg-black">
                  <img
                    src={`https://i.ytimg.com/vi/${video.videoId}/maxresdefault.jpg`}
                    alt={video.title}
                    className="aspect-video h-auto w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                    onError={(event) => {
                      const image = event.currentTarget;
                      if (image.src.includes("hqdefault")) return;
                      image.src = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`;
                    }}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_40%,rgba(0,0,0,0.24)_100%)]" />
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <span className="grid h-14 w-14 place-items-center rounded-full bg-black/46 text-white/96 backdrop-blur-[2px]">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M9 7v10l8-5-8-5z" fill="currentColor" />
                      </svg>
                    </span>
                  </div>
                </div>
                <p className="mt-4 text-[26px] font-bold leading-[1.08] tracking-[-0.015em] text-white/92 md:text-[36px]">
                  {video.title}
                </p>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-auto flex justify-center pt-10">
          <a
            href="https://www.youtube.com/@mintushbusiness"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/26 bg-black px-11 py-4 text-[18px] font-semibold text-white transition hover:bg-white/10"
          >
            Посмотреть другие видео
          </a>
        </div>
      </div>
    </div>
  );
});
