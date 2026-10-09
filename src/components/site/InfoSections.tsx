import Image from "next/image";
import { DeviceIcon, LockIcon, PersonOffIcon } from "@/components/site/icons";
import { Reveal, ScrollProgress } from "@/components/site/ScrollMotion";

export function AboutSection() {
  return (
    <section className="px-6 pt-8 pb-12 md:pt-16">
      {/* The second sentence brightens as it scrolls into the middle of the screen. */}
      <ScrollProgress className="rr-parallax">
        <h2 className="mx-auto max-w-[760px] text-center text-[28px] leading-[1.25] font-medium tracking-[-0.5px] md:text-[36px]">
          Daha bilinçli harcama için küçük adımlar.{" "}
          <span className="rr-scroll-ink">Fişi, ekstreyi, kartı ve aboneliği aynı yerde topla.</span>
        </h2>
      </ScrollProgress>
    </section>
  );
}

const promises = [
  {
    icon: DeviceIcon,
    title: "Fiş ve ekstre cihazında okunur",
    body: "Fiş fotoğrafları ve ekstre PDF’leri iPhone’unda işlenir; hiçbiri bir sunucuya yüklenmez.",
  },
  {
    icon: PersonOffIcon,
    title: "Apple ile giriş",
    body: "Uygulama Sign in with Apple ister. Harcamalar yine bu cihazda kalır; rerill sunucusu yoktur.",
  },
  {
    icon: LockIcon,
    title: "Face ID ile kilitle",
    body: "Uygulamayı ve kart numaralarını Face ID ya da cihaz parolasıyla korursun.",
  },
];

export function PrivacySection() {
  return (
    <section id="gizlilik" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-[1080px]">
        <Reveal>
          <h2 className="max-w-[640px] text-[40px] leading-[1.02] font-semibold tracking-[-1.5px] md:text-[56px]">
            Harcamaların sana ait
          </h2>
        </Reveal>
        <Reveal>
          <p className="rr-muted mt-4 max-w-[520px] text-[16px] font-light">
            Tam metin <a href="/gizlilik" className="underline underline-offset-4">gizlilik politikasında</a>.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {promises.map(({ icon: Icon, title, body }, index) => (
            <Reveal key={title} delay={index * 120} className="rr-card h-full rounded-[24px] p-7">
              <span className="rr-chip inline-flex size-10 items-center justify-center rounded-full">
                <Icon />
              </span>
              <h3 className="mt-6 text-[20px] leading-7 font-medium">{title}</h3>
              <p className="rr-muted mt-2 text-[15px] leading-6 font-light">{body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="px-6 py-8 md:px-8">
      <div className="rr-card flex min-h-[260px] flex-col justify-between gap-10 rounded-[28px] p-8">
        <p className="rr-muted max-w-[560px] text-[16px] font-light">
          rerill, harcamalarını iPhone’unda düzenli tutan kişisel bir finans uygulamasıdır.
        </p>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Image src="/brand/wordmark.svg" alt="rerill" width={157} height={64} className="h-16 w-auto" />
          <div className="flex gap-5">
            {[
              ["/#ozellikler", "Özellikler"],
              ["/gizlilik", "Gizlilik"],
              ["/destek", "Destek"],
            ].map(([href, label]) => (
              <a key={href} href={href} className="text-[14px] font-light transition-opacity hover:opacity-60">
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
