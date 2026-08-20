"use client";

import { useState } from "react";

export function NotifyForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(data.error ?? "Something went wrong. Please email hello@josyote.com directly.");
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please email hello@josyote.com directly.");
    }
  }

  if (status === "success") {
    return (
      <p className="py-3 text-sm text-cream/80">
        You&rsquo;re on the list. We&rsquo;ll be in touch.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="flex gap-3">
        <input
          type="email"
          required
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "loading"}
          className="flex-1 border border-border bg-transparent px-4 py-3 text-sm text-cream placeholder:text-cream/30 focus:border-cream/40 focus:outline-none disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="shrink-0 border border-cream/80 px-6 py-3 text-xs uppercase tracking-[0.2em] transition-colors hover:bg-cream hover:text-dark disabled:opacity-50"
        >
          {status === "loading" ? "Sending..." : "Notify me"}
        </button>
      </div>
      {status === "error" && (
        <p className="text-sm text-red-400">{errorMsg}</p>
      )}
    </form>
  );
}
