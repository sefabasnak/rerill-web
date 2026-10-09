import Image from "next/image";
import type { ReactNode } from "react";

type PhoneMockupProps = {
  /**
   * Rendered width: pixels, or any CSS length (e.g. `min(300px, 70vw)`).
   * Height follows the device's proportions.
   */
  width: number | string;
  priority?: boolean;
  className?: string;
} & (
  | {
      /** Screenshot under /public/app, captured at 1320×2868 (iPhone 16 Pro Max). */
      src: string;
      alt: string;
      children?: never;
    }
  | {
      /** Custom screen content, e.g. several stacked screenshots. */
      children: ReactNode;
      src?: never;
      alt?: never;
    }
);

/**
 * An iPhone drawn in CSS — titanium band, black bezel, Dynamic Island and side
 * buttons — so no third-party device artwork is needed. Proportions use
 * container units, so the phone scales with any CSS width.
 */
export function PhoneMockup({ width, priority = false, className = "", ...screen }: PhoneMockupProps) {
  return (
    <div
      className={`relative shrink-0 ${className}`}
      style={{ width, aspectRatio: "1320 / 2868", containerType: "inline-size" }}
    >
      {/* Side buttons sit just outside the band. */}
      <span className="rr-phone-button absolute -left-[2px] top-[18%] h-[5%] w-[3px] rounded-l-sm" />
      <span className="rr-phone-button absolute -left-[2px] top-[26%] h-[9%] w-[3px] rounded-l-sm" />
      <span className="rr-phone-button absolute -left-[2px] top-[37%] h-[9%] w-[3px] rounded-l-sm" />
      <span className="rr-phone-button absolute -right-[2px] top-[29%] h-[13%] w-[3px] rounded-r-sm" />

      <div className="rr-phone-band absolute inset-0" style={{ borderRadius: "16cqw", padding: "1.2cqw" }}>
        <div
          className="relative h-full w-full overflow-hidden bg-black"
          style={{ borderRadius: "14.9cqw", padding: "2.3cqw" }}
        >
          <div className="relative h-full w-full overflow-hidden" style={{ borderRadius: "13.1cqw" }}>
            {screen.src === undefined ? (
              screen.children
            ) : (
              <Image
                src={screen.src}
                alt={screen.alt}
                fill
                priority={priority}
                sizes={typeof width === "number" ? `${Math.round(width)}px` : "300px"}
                className="object-cover"
              />
            )}
            {/* Dynamic Island */}
            <span
              aria-hidden="true"
              className="absolute left-1/2 top-[1.6%] z-10 -translate-x-1/2 rounded-full bg-black"
              style={{ width: "31%", height: "3.3%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
