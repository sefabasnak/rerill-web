import { PhoneMockup } from "@/components/site/PhoneMockup";
import { Reveal, ScrollProgress } from "@/components/site/ScrollMotion";

type Feature = {
  tag: string;
  title: string;
  body: string;
  points: string[];
  image: string;
  alt: string;
  /** Shown behind the main phone: what the step on screen leads to. */
  secondary?: { image: string; alt: string };
};

const features: Feature[] = [
  {
    tag: "Özet",
    title: "Ayın tamamı tek ekranda",
    body: "Toplam harcaman, kartların ve son işlemlerin açılışta karşında. Geçen aya göre nerede olduğunu hemen görürsün.",
    points: ["Aylık toplam", "Önceki dönemle kıyas", "Bütçe takibi"],
    image: "/app/02-ozet.png",
    alt: "rerill özet ekranı: toplam harcama ve son işlemler",
  },
  {
    tag: "Kartlar",
    title: "Kartların, kendi renkleriyle",
    body: "Her kart bankasının rengiyle, çipi ve ağ logosuyla görünür. Kart numarası yalnızca Face ID ile açılır.",
    points: ["Banka ve ürün renkleri", "Kart bazlı harcama", "Face ID ile numara"],
    image: "/app/04-kartlar.png",
    alt: "rerill kartlar ekranı: Garanti Bonus kartı ve kart harcamaları",
  },
  {
    tag: "Fiş tara",
    title: "Fişini tara, gerisini bırak",
    body: "Fişi kamerayla yakala, galeriden seç veya PDF yükle. İşletme, tarih, tutar ve ürünler iPhone’unda okunur; kategori önerisiyle forma hazır gelir.",
    points: ["Kamera, fotoğraf, PDF", "Ürün ürün okuma", "Kategori önerisi"],
    image: "/app/08-fis-tara.png",
    alt: "rerill fiş tarama ekranı: kamera çerçevesindeki market fişi",
    secondary: { image: "/app/10-fis-detay.png", alt: "rerill fiş inceleme ekranı: fişten okunan tutar ve ürünler" },
  },
  {
    tag: "Ekstre",
    title: "Kart ekstreni bir kerede aktar",
    body: "Bankanın PDF ekstresini yükle; dönem, son ödeme ve tüm işlemler çıkarılır. Tanıdık markalar kendi kategorisine yerleşir, istediğini tek dokunuşla harcamaya çevirirsin.",
    points: ["PDF ekstre", "Otomatik kategori", "Son ödeme tarihi"],
    image: "/app/11-ekstre-okundu.png",
    alt: "rerill ekstre okundu ekranı: Garanti BBVA Bonus ekstresi hazır",
    secondary: { image: "/app/12-ekstre-satirlar.png", alt: "rerill ekstre özeti: işlemler ve otomatik kategoriler" },
  },
  {
    tag: "Abonelikler",
    title: "Yenilenmeden önce haberin olsun",
    body: "Netflix, Spotify, ChatGPT ve yüzlerce servisin aylık karşılığı tek yerde. Yenileme günü yaklaşınca hatırlatır.",
    points: ["155+ bilinen servis", "Aylık karşılık", "Yenileme hatırlatması"],
    image: "/app/06-abonelikler.png",
    alt: "rerill abonelikler ekranı: aylık abonelik toplamı ve servisler",
  },
  {
    tag: "Analiz",
    title: "Paranın nereye aktığını gör",
    body: "Hangi kartın ne kadar harcadığını cüzdanında gör; kategoriler ve günlük eğilimle ayın neden ağır geçtiğini bir bakışta anla.",
    points: ["Kart bazlı dağılım", "Harcama eğilimi", "Dönem seçimi"],
    image: "/app/07-istatistikler.png",
    alt: "rerill harcama analizi ekranı",
  },
];

export function FeaturesSection() {
  return (
    <section id="ozellikler" className="overflow-x-clip px-6 py-24 md:py-40">
      <div className="mx-auto flex max-w-[1080px] flex-col gap-28 md:gap-40">
        {features.map((feature, index) => (
          <article
            key={feature.tag}
            className={`grid items-center gap-12 md:grid-cols-2 md:gap-20 ${index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
          >
            <ScrollProgress className="rr-parallax mx-auto flex w-full max-w-[460px] justify-center">
              <div className={`rr-parallax-phone relative ${feature.secondary ? "-translate-x-[18%]" : ""}`}>
                {feature.secondary && (
                  <div className="rr-feature-secondary absolute top-[8%] left-[52%]">
                    <PhoneMockup src={feature.secondary.image} alt={feature.secondary.alt} width={240} />
                  </div>
                )}
                <div className="relative">
                  <PhoneMockup src={feature.image} alt={feature.alt} width={270} />
                </div>
              </div>
            </ScrollProgress>
            <Reveal className="max-w-[460px]">
              <p className="font-space rr-chip w-fit rounded-full px-2.5 py-1 text-[10px] font-medium tracking-[0.75px] uppercase">
                {feature.tag}
              </p>
              <h2 className="mt-6 text-[40px] leading-[1.02] font-semibold tracking-[-1.5px] md:text-[52px]">
                {feature.title}
              </h2>
              <p className="rr-muted mt-6 text-[17px] leading-7 font-light">{feature.body}</p>
              <ul className="mt-8 flex flex-wrap gap-2">
                {feature.points.map((point) => (
                  <li key={point} className="rr-pill rounded-full px-3.5 py-2 text-[13px]">
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          </article>
        ))}
      </div>
    </section>
  );
}

export function AppearanceSection() {
  return (
    <section id="gorunum" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-[1080px] text-center">
        <p className="font-space rr-chip mx-auto w-fit rounded-full px-2.5 py-1 text-[10px] font-medium tracking-[0.75px] uppercase">
          Görünüm
        </p>
        <h2 className="mt-6 text-[40px] leading-[1.02] font-semibold tracking-[-1.5px] md:text-[56px]">
          Açık ya da koyu, telefonun nasılsa öyle
        </h2>
        <p className="rr-muted mx-auto mt-6 max-w-[520px] text-[17px] leading-7 font-light">
          rerill iPhone’unun görünümünü izler. İstersen ayarlardan her zaman açık veya her zaman koyu seçebilirsin.
        </p>
        <div className="mt-16 flex flex-wrap items-end justify-center gap-8 md:gap-14">
          <Reveal>
            <figure className="flex flex-col items-center gap-4">
              <PhoneMockup src="/app/02-ozet-acik.png" alt="rerill açık görünüm" width={250} />
              <figcaption className="font-space rr-muted text-[12px] tracking-[0.5px] uppercase">Açık</figcaption>
            </figure>
          </Reveal>
          <Reveal delay={150}>
            <figure className="flex flex-col items-center gap-4">
              <PhoneMockup src="/app/02-ozet.png" alt="rerill koyu görünüm" width={250} />
              <figcaption className="font-space rr-muted text-[12px] tracking-[0.5px] uppercase">Koyu</figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const gallery = [
  { src: "/app/01-hosgeldin.png", alt: "Hoş geldin ekranı" },
  { src: "/app/02-ozet.png", alt: "Özet" },
  { src: "/app/03-kategoriler.png", alt: "Kategoriler" },
  { src: "/app/04-kartlar.png", alt: "Kartlar" },
  { src: "/app/05-harcamalar.png", alt: "Harcamalar" },
  { src: "/app/08-fis-tara.png", alt: "Fiş tarama" },
  { src: "/app/10-fis-detay.png", alt: "Fiş inceleme" },
  { src: "/app/11-ekstre-okundu.png", alt: "Ekstre okundu" },
  { src: "/app/06-abonelikler.png", alt: "Abonelikler" },
  { src: "/app/07-istatistikler.png", alt: "Harcama analizi" },
];

/** Every screen drifting past; the second copy only exists to loop seamlessly. */
export function ScreensMarquee() {
  return (
    <section aria-label="rerill ekranları" className="overflow-hidden py-16">
      <div className="rr-marquee-track">
        {[...gallery, ...gallery].map((screen, index) => (
          <div key={`${screen.src}-${index}`} aria-hidden={index >= gallery.length}>
            <PhoneMockup src={screen.src} alt={index >= gallery.length ? "" : screen.alt} width={220} />
          </div>
        ))}
      </div>
    </section>
  );
}
