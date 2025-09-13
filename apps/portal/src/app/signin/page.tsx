"use client";

import { Suspense, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

// The child actually using useSearchParams()
function SignInForm() {
  const router = useRouter();
  const params = useSearchParams();
  const callbackUrl = params.get("callbackUrl") || "/dashboard";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
      callbackUrl,
    });
    if (!res || res.error) {
      alert("Invalid credentials. Hint: password is 'demo'.");
      return;
    }
    router.push(callbackUrl);
  }

  return (
    <form onSubmit={submit} className="mt-8 space-y-4">
      <input
        type="email"
        required
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full rounded-lg bg-neutral-900 px-4 py-3 outline-none ring-1 ring-neutral-800 focus:ring-[#D4AF37]"
      />
      <input
        type="password"
        required
        placeholder="demo"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full rounded-lg bg-neutral-900 px-4 py-3 outline-none ring-1 ring-neutral-800 focus:ring-[#D4AF37]"
      />
      <button
        type="submit"
        className="w-full rounded-lg bg-[#D4AF37] px-5 py-3 font-medium text-black hover:brightness-110 ring-2 ring-[#D4AF37] ring-offset-2 ring-offset-black shadow-[0_0_20px_rgba(212,175,55,0.35)]"
      >
        Sign in
      </button>
    </form>
  );
}

export default function SignInPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-md px-6 py-20">
        <h1 className="text-3xl font-semibold">Sign in to FiscPlan™ Portal</h1>
        <p className="mt-2 text-neutral-400">
          Use any email and password &apos;demo&apos; for now.
        </p>

        {/* Suspense boundary required around anything using useSearchParams */}
        <Suspense fallback={<div className="mt-8 text-neutral-500">Loading…</div>}>
          <SignInForm />
        </Suspense>
      </div>
    </main>
  );
}
