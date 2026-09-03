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
    default: `${EVENT.name} — Build the Future with AI`,
    template: `%s — ${EVENT.name}`,
  },
  description:
    "Durby Global Hack is an international AI hackathon connecting ambitious builders from India and Germany. Technology-agnostic, paid entry, open to students, developers, designers and founders worldwide.",
  keywords: ["hackathon", "AI hackathon", "Durby", "India Germany hackathon", "student hackathon", "global hackathon"],
  openGraph: {
    title: `${EVENT.name} — Build the Future with AI`,
    description: "An international AI hackathon connecting India and Germany. Technology-agnostic, paid entry, global stage.",
    url: SITE_URL,
    siteName: EVENT.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${EVENT.name} — Build the Future with AI`,
    description: "An international AI hackathon connecting India and Germany. Technology-agnostic, paid entry, global stage.",
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${mono.variable}`}>
      <body className="bg-durby-bg pb-20 text-durby-ink antialiased lg:pb-0">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
