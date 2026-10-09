import type { Metadata } from "next";
import { SiteNav } from "@/components/site/HeroSection";
import { SiteFooter } from "@/components/site/InfoSections";

export const metadata: Metadata = {
  title: "Destek — rerill",
  description: "rerill destek. Uygulama, hesap ve gizlilik soruları için yaz.",
};

export default function SupportPage() {
  return (
    <main className="rr-site min-h-screen">
      <SiteNav />
      <article className="mx-auto max-w-[40rem] px-6 pt-32 pb-20">
        <h1 className="text-[40px] leading-[1.05] font-semibold tracking-[-1px]">Destek</h1>
        <p className="rr-muted mt-3 text-[15px]">App Store Connect Support URL</p>
        <div className="mt-10 space-y-6 text-[17px] leading-7 font-light">
          <p>
            rerill’in kendi sunucusu yoktur. Hesap, Sign in with Apple, fiş okuma, kart, abonelik veya Pro ile ilgili
            her şey için e-posta yeter.
          </p>
          <p>
            <a href="mailto:sefabasnak@outlook.com">sefabasnak@outlook.com</a>
          </p>
          <h2 className="pt-2 text-[22px] font-medium tracking-[-0.3px]">Sık bakılanlar</h2>
          <p>Apple ile giriş zorunludur. Çıkış yerel oturumu kapatır; harcamalar silinmez.</p>
          <p>Kart numarası yalnızca Face ID ile açılır. NFC ödeme almaz; banka ve son kullanma tarihini okur.</p>
          <p>
            Veri işleme ayrıntısı <a href="/gizlilik">gizlilik politikasında</a>.
          </p>
        </div>
      </article>
      <SiteFooter />
    </main>
  );
}
