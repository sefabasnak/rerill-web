import type { Metadata } from "next";
import { SiteNav } from "@/components/site/HeroSection";
import { SiteFooter } from "@/components/site/InfoSections";

export const metadata: Metadata = {
  title: "Gizlilik politikası — rerill",
  description: "rerill gizlilik politikası. Veriler bu cihazda kalır; rerill’in kendi sunucusu yoktur.",
};

export default function PrivacyPage() {
  return (
    <main className="rr-site min-h-screen">
      <SiteNav />
      <article className="mx-auto max-w-[40rem] px-6 pt-32 pb-20">
        <h1 className="text-[40px] leading-[1.05] font-semibold tracking-[-1px]">Gizlilik politikası</h1>
        <p className="rr-muted mt-3 text-[15px]">Son güncelleme: 9 Ekim 2026</p>
        <div className="mt-10 space-y-6 text-[17px] leading-7 font-light">
          <p>
            rerill, harcamalarını iPhone’unda tutan kişisel bir finans uygulamasıdır. Bu sayfa App Store ve Sign in with
            Apple için gizlilik bilgisini verir.
          </p>
          <h2 className="pt-2 text-[22px] font-medium tracking-[-0.3px]">Hangi veriler</h2>
          <p>
            Uygulama harcama, kategori, kart, ekstre, fiş görüntüsü, abonelik ve senin girdiğin profil bilgilerini (ad,
            e-posta, seçtiğin fotoğraf) kaydeder. Kart numarası ve CVV yalnızca bu cihazda tutulur; numara Face ID
            olmadan gösterilmez.
          </p>
          <h2 className="pt-2 text-[22px] font-medium tracking-[-0.3px]">Nerede durur</h2>
          <p>
            Veriler bu cihazda, Apple’ın SwiftData / Keychain depolamasında kalır. rerill’in kendi sunucusu yoktur. Fiş
            ve ekstre dosyaları cihaz dışına gönderilmez. İsteğe bağlı JSON yedek veya CSV’yi sen paylaşırsın.
          </p>
          <h2 className="pt-2 text-[22px] font-medium tracking-[-0.3px]">Apple ile giriş</h2>
          <p>
            Uygulamayı kullanmak için Sign in with Apple gerekir. Apple, kullanıcı kimliğini ve (ilk yetkide, sen izin
            verirsen) ad ile e-postayı uygulamaya verir. Fotoğraf Apple’dan gelmez. Çıkış, yerel oturumu kapatır;
            veriler silinmez.
          </p>
          <h2 className="pt-2 text-[22px] font-medium tracking-[-0.3px]">Face ID</h2>
          <p>
            İsteğe bağlı uygulama kilidi ve kart numarasını göstermek / kopyalamak için Face ID kullanılır. Biyometri
            Apple sisteminde kalır; rerill parmak izi veya yüz verisi almaz.
          </p>
          <h2 className="pt-2 text-[22px] font-medium tracking-[-0.3px]">Satın alma</h2>
          <p>
            rerill Pro aboneliği App Store üzerinden alınır. Ödeme bilgisi Apple’da durur; rerill kartın ödeme verisine
            erişmez.
          </p>
          <h2 className="pt-2 text-[22px] font-medium tracking-[-0.3px]">Üçüncü taraflar</h2>
          <p>
            İşletme logoları, bilinen bir marka adıyla eşleşince genel bir logo servisinden indirilebilir. Harcama
            tutarın veya kart numaran bu isteğe eklenmez. Analitik veya reklam SDK’sı yoktur.
          </p>
          <h2 className="pt-2 text-[22px] font-medium tracking-[-0.3px]">Silme</h2>
          <p>
            Uygulamayı iPhone’dan silmek yerel veriyi siler. Apple ile giriş kaydını durdurmak için Ayarlar → Apple ID →
            Sign in with Apple → rerill.
          </p>
          <h2 className="pt-2 text-[22px] font-medium tracking-[-0.3px]">İletişim</h2>
          <p>
            Sorular için <a href="mailto:sefabasnak@outlook.com">sefabasnak@outlook.com</a>.
          </p>
        </div>
      </article>
      <SiteFooter />
    </main>
  );
}
