import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://app.fiscplan.com"),
  alternates: { canonical: "/" },
  title: "FiscPlan™ Portal",
  description: "Secure mailbox, questionnaires, and reports — powered by FiscSight™.",
  icons: { icon: "/favicon.png", shortcut: "/favicon.png", apple: "/favicon.png" },
  openGraph: {
    title: "FiscPlan™ Portal",
    description: "Secure mailbox, questionnaires, and reports — powered by FiscSight™.",
    url: "https://app.fiscplan.com",
    siteName: "FiscPlan",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "FiscPlan™ Portal" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FiscPlan™ Portal",
    description: "Secure mailbox, questionnaires, and reports — powered by FiscSight™.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={openSans.className + " bg-black text-white"}>{children}</body>
    </html>
  );
}
