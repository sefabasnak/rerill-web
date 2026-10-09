import type { Metadata } from "next";
import { Space_Mono, Stack_Sans_Headline } from "next/font/google";
import "./globals.css";

const stack = Stack_Sans_Headline({
  variable: "--font-stack",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
});

const space = Space_Mono({
  variable: "--font-space",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "rerill — Para gider. Nereye gittiğini bil.",
  description:
    "Fişini tara, kart ekstreni yükle; kartlarını ve aboneliklerini tek yerde gör. Fiş ve ekstreler iPhone’unda okunur, hiçbiri sunucuya gitmez.",
  icons: {
    icon: "/brand/app-icon.png",
    apple: "/brand/app-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${stack.variable} ${space.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#070b0e]">{children}</body>
    </html>
  );
}
