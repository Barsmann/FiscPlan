import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FiscPlan™ — Clarity-first structuring",
  description:
    "Guided branching questionnaire, instant insights, secure reports powered by FiscSight™.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={openSans.className + " bg-black text-white"}>{children}</body>
    </html>
  );
}
