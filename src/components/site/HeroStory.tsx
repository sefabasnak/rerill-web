"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { PhoneMockup } from "@/components/site/PhoneMockup";

/**
 * One continuous screen recording of the app (see WalkthroughRecording in the
 * app's UI tests), scrubbed by the page scroll. Times are seconds into the clip.
 */
const clip = { src: "/app/rerill-akis.mp4", poster: "/app/rerill-akis-poster.jpg", duration: 53.3 };

/** Where the finger lands, as a share of the screen, just before the screen reacts. */
const taps = [
  { time: 7.0, x: 50, y: 88.9 }, // Başla
  { time: 13.6, x: 32.6, y: 92.8 }, // Kartlarım
  { time: 17.1, x: 52.5, y: 92.8 }, // Harcamalarım
  { time: 21.1, x: 72.3, y: 92.8 }, // Aboneliklerim
  { time: 27.6, x: 90.7, y: 92.8 }, // +
  { time: 32.6, x: 50, y: 57.5 }, // Fiş Tara
  { time: 38.1, x: 47.3, y: 91.5 }, // Deklanşör
  { time: 45.1, x: 50, y: 85.8 }, // İncele
];

/** A finger rests this long before the tap and lifts just after it. */
const tapLead = 0.5;
const tapTail = 0.15;

const chapters = [
  { from: 0, caption: "Hoş geldin" },
  { from: 7.5, caption: "Ayın özeti" },
  { from: 14, caption: "Kartların" },
  { from: 17.5, caption: "Harcamaların" },
  { from: 21.5, caption: "Aboneliklerin" },
  { from: 28, caption: "Ekle" },
  { from: 33, caption: "Fiş tara" },
  { from: 38.5, caption: "Cihazında okunur" },
  { from: 45.5, caption: "Forma hazır" },
];

/** Scroll length of the whole clip, in svh; about a screen per chapter. */
const scrollLength = 900;

const clamp01 = (value: number) => Math.min(1, Math.max(0, value));

function chapterAt(time: number) {
  let index = 0;
  while (index < chapters.length - 1 && time >= chapters[index + 1].from) index++;
  return index;
}

/**
 * A pinned phone playing the app walkthrough as the page scrolls; scrolling
 * back rewinds it. The first seconds (the wordmark reveal) play while the phone
 * rises into place.
 */
export function HeroStory() {
  const ref = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const [time, setTime] = useState(0);

  useEffect(() => {
    const node = ref.current;
    const player = video.current;
    if (!node || !player) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let target = 0;
    let shown = 0;
    let frame = 0;

    // iOS Safari only paints seeked frames once the video has played.
    const prime = () => {
      player
        .play()
        .then(() => player.pause())
        .catch(() => {});
    };
    player.addEventListener("loadeddata", prime, { once: true });

    const measure = () => {
      const rect = node.getBoundingClientRect();
      const progress = clamp01((window.innerHeight - rect.top) / rect.height);
      target = progress * (clip.duration - 0.05);
    };

    // Eases towards the scroll position so fast flicks still read as motion.
    const tick = () => {
      frame = 0;
      shown = reduceMotion ? target : shown + (target - shown) * 0.22;
      if (Math.abs(target - shown) < 0.01) shown = target;
      if (Math.abs(player.currentTime - shown) > 1 / 48 && player.readyState >= 1) {
        player.currentTime = shown;
      }
      setTime(shown);
      if (shown !== target) frame = requestAnimationFrame(tick);
    };

    const schedule = () => {
      measure();
      if (!frame) frame = requestAnimationFrame(tick);
    };

    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      player.removeEventListener("loadeddata", prime);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  const chapter = chapterAt(time);
  const tap = taps.find((item) => time >= item.time - tapLead && time <= item.time + tapTail);
  // 0 as the finger arrives, 1 when it lifts.
  const press = tap ? clamp01((time - (tap.time - tapLead)) / (tapLead + tapTail)) : 0;

  return (
    <div ref={ref} className="relative" style={{ height: `${scrollLength}svh` }}>
      <div className="rr-story sticky top-0 flex h-svh flex-col items-center justify-center gap-5 overflow-hidden pt-20 pb-6">
        <div className="flex items-center gap-3">
          <p
            key={chapter}
            className="rr-story-caption font-space rr-chip rounded-full px-3 py-1.5 text-[11px] tracking-[0.75px] uppercase"
          >
            {chapters[chapter].caption}
          </p>
          <div className="flex gap-1.5" aria-hidden="true">
            {chapters.map((item, index) => (
              <span key={item.caption} className="rr-story-dot" data-active={index === chapter || undefined} />
            ))}
          </div>
        </div>

        <PhoneMockup width="var(--story-w)">
          <video
            ref={video}
            src={clip.src}
            poster={clip.poster}
            muted
            playsInline
            preload="auto"
            aria-label="rerill’in kısa tanıtımı: hoş geldin, özet, kartlar, harcamalar, abonelikler ve fiş tarama"
            className="absolute inset-0 h-full w-full object-cover"
          />
          {tap && (
            <span
              aria-hidden="true"
              className="rr-story-tap absolute z-20"
              style={{ left: `${tap.x}%`, top: `${tap.y}%`, "--press": press } as CSSProperties}
            />
          )}
        </PhoneMockup>
      </div>
    </div>
  );
}
