import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FiscPlan™ Portal",
  description:
    "Secure mailbox, questionnaires, and reports — powered by FiscSight™.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <header className="border-b border-neutral-900">
          <div className="mx-auto flex max-w-5xl items-center gap-3 px-6 py-4">
            <Link href="/" className="flex items-center gap-3">
              <img src="/favicon.png" alt="FiscPlan" className="h-7 w-7" />
              <span className="text-xl font-semibold">
                <span className="text-[#D4AF37]">Fisc</span>
                Plan<span className="align-super text-xs">™</span>
              </span>
            </Link>
            <nav className="ml-auto">
              <Link
                href="/signin"
                className="rounded-md bg-[#D4AF37] px-3 py-2 text-sm font-medium text-black hover:brightness-110"
              >
                Sign in
              </Link>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
