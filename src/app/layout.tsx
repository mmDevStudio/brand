import type { Metadata } from "next";
import { Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MMDev",
  description: "Development Studio by M and M",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${geistMono.variable}`}
    >
      <body className="bg-bg bg-lines font-body text-text min-h-screen">
        <Header />

        <main className="border-x border-border container mx-auto bg-bg-accent min-h-screen">
          {/* noisy bg */}
          <div
            className="absolute inset-0 bg-noise opacity-5 brightness-125 pointer-events-none"
            aria-hidden="true"
          />
          {/* content */}
          <div className="relative py-24 gap-24">{children}</div>
        </main>

        <Footer />
      </body>
    </html>
  );
}
