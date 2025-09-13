/* apps/marketing/src/app/layout.tsx */
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Script from "next/script";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FiscPlan — Financial structuring that starts with clarity.",
  description:
    "Answer a guided, branching questionnaire. Receive secure reports. FiscSight™ analyzes; you decide.",
  metadataBase: new URL("https://fiscplan.com"),
  alternates: { canonical: "https://fiscplan.com" },
  openGraph: {
    title: "FiscPlan",
    description:
      "Answer a guided, branching questionnaire. Receive secure reports. FiscSight™ analyzes; you decide.",
    url: "https://fiscplan.com",
    siteName: "FiscPlan",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FiscPlan",
    description:
      "Answer a guided, branching questionnaire. Receive secure reports. FiscSight™ analyzes; you decide.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
    shortcut: "/favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // JSON-LD Organization schema for SEO
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "FiscPlan",
    url: "https://fiscplan.com",
    logo: "https://fiscplan.com/og-image.png",
    sameAs: ["https://app.fiscplan.com"],
  };

  return (
    <html lang="en">
      <body className={openSans.className}>
        <Script id="org-jsonld" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(org)}
        </Script>
        {children}
      </body>
    </html>
  );
}
