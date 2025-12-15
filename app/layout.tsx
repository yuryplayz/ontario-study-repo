import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ontario Study Repo",
  description:
    "Free Grade 9–12 Ontario curriculum notes, practice questions, and study guides.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-50 text-zinc-900`}
      >
        <SiteHeader />

        <div className="min-h-screen">
          {children}
        </div>

        <SiteFooter />
      </body>
    </html>
  );
}
