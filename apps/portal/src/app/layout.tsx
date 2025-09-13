import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Providers from "./providers";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://app.fiscplan.com"),
  alternates: { canonical: "/" },
  title: "FiscPlan™ Portal",
  description: "Secure mailbox, questionnaires, and reports — powered by FiscSight™.",
  icons: { icon: "/favicon.png", shortcut: "/favicon.png", apple: "/favicon.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={openSans.className + " bg-black text-white"}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
