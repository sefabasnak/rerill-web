"use client";

import { useState } from "react";
import { PhoneMockup } from "@/components/site/PhoneMockup";
import { Reveal } from "@/components/site/ScrollMotion";

const storageKey = "rerill-waitlist-email";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [saved, setSaved] = useState(false);

  return (
    <section id="haber" className="px-6 pt-8 md:px-8">
      <Reveal className="rr-cta relative overflow-hidden rounded-[28px] px-6 py-12 md:px-12 md:py-16">
        <div className="grid items-center gap-10 md:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="text-[36px] leading-[1.05] font-semibold tracking-[-1px] md:text-[48px]">
              App Store’a çıkınca haber ver
            </h2>
            <form
              className="mt-8 w-full max-w-[520px]"
              onSubmit={(event) => {
                event.preventDefault();
                const value = email.trim();
                if (!value) return;
                window.localStorage.setItem(storageKey, value);
                setSaved(true);
              }}
            >
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="E-posta adresin"
                  aria-label="E-posta adresin"
                  className="rr-input h-[52px] w-full rounded-2xl px-4 pr-28 text-[16px] outline-none"
                />
                <button
                  type="submit"
                  className="font-space rr-button-ink absolute top-1/2 right-1.5 -translate-y-1/2 rounded-full px-4 py-2 text-[12px] font-medium tracking-[0.25px] uppercase"
                >
                  Kaydet
                </button>
              </div>
              <p className="mt-3 text-[13px] opacity-70">
                {saved
                  ? "Bu tarayıcıya kaydedildi. Sunucuya gönderilmedi."
                  : "Adres yalnızca bu tarayıcıda durur, bir sunucuya gitmez."}
              </p>
            </form>
          </div>
          <div className="relative -mb-40 hidden justify-center md:flex">
            <PhoneMockup src="/app/01-hosgeldin.png" alt="rerill hoş geldin ekranı" width={260} />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
