import Image from "next/image";
import { ArrowRightIcon } from "@/components/site/icons";
import { HeroStory } from "@/components/site/HeroStory";
import { ScrollProgress } from "@/components/site/ScrollMotion";

export function SiteNav() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav className="rr-glass pointer-events-auto grid w-full max-w-[912px] grid-cols-[auto_1fr_auto] items-center rounded-[20px] px-6 py-4 md:px-8">
        <a href="/" aria-label="rerill ana sayfa" className="justify-self-start">
          <Image src="/brand/wordmark.svg" alt="rerill" width={59} height={24} className="h-6 w-auto" priority />
        </a>
        <div className="hidden items-center justify-center gap-1 md:flex">
          {[
            ["/#ozellikler", "Özellikler"],
            ["/#gorunum", "Görünüm"],
            ["/gizlilik", "Gizlilik"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="font-space rounded-full px-3 py-2 text-[12px] font-medium tracking-[0.25px] uppercase transition-opacity hover:opacity-60"
            >
              {label}
            </a>
          ))}
        </div>
        <a
          href="/#haber"
          className="font-space rr-button-cream inline-flex items-center gap-2 justify-self-end rounded-full px-4 py-3 text-[12px] font-medium tracking-[0.25px] uppercase"
        >
          App Store
          <ArrowRightIcon />
        </a>
      </nav>
    </header>
  );
}

export function HeroSection() {
  return (
    <section id="ust" className="relative overflow-x-clip pt-20 pb-0">
      {/* Opening shot: the app in hand. It drifts back and dims as the page scrolls. */}
      <ScrollProgress mode="page" distance={700} className="mx-auto max-w-[1400px]">
        <div className="rr-hero-cinematic relative aspect-[4/3] md:aspect-[1672/941]">
          <Image
            src="/app/rerill-elde-v5.jpg"
            alt="Karanlıkta elde tutulan iPhone’da rerill özet ekranı"
            fill
            priority
            sizes="(max-width: 1400px) 100vw, 1400px"
            className="object-cover object-[46%_50%]"
          />
        </div>
      </ScrollProgress>

      <div className="relative z-10 mx-auto -mt-10 flex max-w-[960px] flex-col items-center gap-6 px-6 text-center md:-mt-2">
        <p className="font-space rr-chip rounded-full px-3 py-1.5 text-[11px] tracking-[0.75px] uppercase">
          Fiş ve ekstre cihazında okunur
        </p>
        <h1 className="text-[52px] leading-[1.05] font-normal md:text-[88px] md:leading-[92px]">
          Para gider.
          <br />
          Nereye gittiğini bil.
        </h1>
        <p className="rr-muted max-w-[460px] text-[17px] leading-7 font-light">
          Fişini tara, kart ekstreni yükle; kartlarını ve aboneliklerini tek yerde topla. Ayın tamamını tek bakışta gör.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2">
          <a
            href="#haber"
            className="font-space rr-button-cream inline-flex items-center gap-2 rounded-full px-6 py-3 text-[14px] font-medium tracking-[0.25px]"
          >
            App Store’da yakında
            <ArrowRightIcon />
          </a>
          <a
            href="#ozellikler"
            className="font-space rr-button-outline inline-flex items-center gap-2 rounded-full px-6 py-3 text-[14px] font-medium tracking-[0.25px]"
          >
            Nasıl çalışır
            <ArrowRightIcon />
          </a>
        </div>
      </div>

      {/* The phone pins in place and walks through the app while the page scrolls. */}
      <HeroStory />
    </section>
  );
}
