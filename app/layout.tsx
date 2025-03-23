import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Chirag Parmar",
  description: "Hello I'm chirag parmar and this is my portfolio site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <link rel="icon" href="/images/logo.png" sizes="any" /> */}
      <body
        className={`${inter.className} bg-[#030014]`}
      >
        {children}
      </body>
    </html>
  );
}
