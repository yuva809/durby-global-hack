import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SITE_URL, EVENT } from "@/lib/config";
import { MotionProvider } from "@/components/ui/motion-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${EVENT.name} — International AI Hackathon`,
    template: `%s — ${EVENT.name}`,
  },
  description:
    "Durby Global Hack is an international AI hackathon bringing together builders from around the world to create innovative solutions to meaningful real-world problems. Technology-agnostic, paid entry, open worldwide.",
  keywords: ["hackathon", "AI hackathon", "Durby", "international hackathon", "student hackathon", "global hackathon"],
  openGraph: {
    title: `${EVENT.name} — International AI Hackathon`,
    description: "An international AI hackathon open to builders worldwide. Technology-agnostic, paid entry, one global stage.",
    url: SITE_URL,
    siteName: EVENT.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${EVENT.name} — International AI Hackathon`,
    description: "An international AI hackathon open to builders worldwide. Technology-agnostic, paid entry, one global stage.",
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export const viewport: Viewport = {
  themeColor: "#1677ff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="bg-durby-paper pb-20 text-durby-paper-ink antialiased lg:pb-0">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
