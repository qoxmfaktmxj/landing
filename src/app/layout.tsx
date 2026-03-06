import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.minseok91.cloud"),
  icons: {
    icon: [{ url: "/icon.svg" }, { url: "/favicon.ico" }],
    shortcut: "/favicon.ico",
  },
  title: "민석 | 풀스택 개발자 포트폴리오",
  description:
    "9년차 백엔드/풀스택 엔지니어. HR/ERP 시스템, API 개발, 클라우드 인프라 운영.",
  keywords: ["풀스택 개발자", "포트폴리오", "Next.js", "HR시스템"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "민석 | 풀스택 개발자 포트폴리오",
    description: "Enterprise 시스템을 만드는 개발자",
    url: "/",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={jetbrainsMono.variable}>
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
