import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { fonts } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "東大パン研究会 | UTokyo Bakers' Lab - 世界を変えるパンの力",
  description:
    "国際関係、経済、食糧安全保障、ビジネス、マーケティングを学ぶ、東京大学の革新的なパン研究サークル。社会問題に関心のある学生が集まり、グローバルな視点でパンを通じて成長します。",
  keywords: [
    "東京大学",
    "UTokyo",
    "パン研究会",
    "国際関係",
    "経済",
    "食糧安全保障",
    "ビジネス",
    "マーケティング",
    "サークル",
    "Bakers Lab",
    "社会問題",
    "グローバル",
  ],
  openGraph: {
    title: "東大パン研究会 | UTokyo Bakers' Lab",
    description: "世界を変えるパンの力 - 社会問題に挑戦する学生サークル",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${fonts} font-ja antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
