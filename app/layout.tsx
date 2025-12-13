import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import AOSProvider from "@/components/AOSProvider";
import ParticlesBackground from "@/components/ParticlesBackground";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Chirag Parmar | Full Stack Web Developer",
  description:
    "Welcome to the portfolio of Chirag Parmar, a full stack web developer specializing in Laravel, React, Next.js, Node.js, and other modern web technologies. Explore projects, skills, and professional experience.",
  keywords: [
    "Chirag Parmar",
    "Full Stack Developer",
    "Web Developer",
    "Laravel Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Portfolio",
    "Frontend",
    "Backend",
    "JavaScript",
  ],
  authors: [{ name: "Chirag Parmar", url: "https://chirag-parmar.vercel.app" }],
  creator: "Chirag Parmar",
  openGraph: {
    title: "Chirag Parmar | Full Stack Developer Portfolio",
    description:
      "Chirag Parmar is a full stack web developer specializing in Laravel, Next.js, Node.js, and more. Check out his projects and skills.",
    url: "https://chirag-parmar.vercel.app",
    siteName: "Chirag Parmar Portfolio",
    type: "website",
    images: [
      {
        url: "https://chirag-parmar.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Chirag Parmar Portfolio",
      },
    ],
  },
  metadataBase: new URL("https://chirag-parmar.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <link rel="icon" href="/images/logo.png" sizes="any" /> */}
      <body className={`${inter.className}`}>
        <AOSProvider>
          <ParticlesBackground />
          <main className="relative z-10">
            <Analytics />
            <SpeedInsights />
            {children}
          </main>
        </AOSProvider>
      </body>
    </html>
  );
}
