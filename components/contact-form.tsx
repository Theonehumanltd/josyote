"use client";

import { useState } from "react";

const ENQUIRY_TYPES = [
  "Commission",
  "Buying a work",
  "Prints",
  "Events",
  "Something else",
] as const;

type EnquiryType = (typeof ENQUIRY_TYPES)[number];

export function ContactForm({
  subject,
  showEnquiryType = false,
}: {
  subject?: string;
  showEnquiryType?: boolean;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [enquiryType, setEnquiryType] = useState<EnquiryType | "">("");
  const [message, setMessage] = useState(
    subject ? `Enquiry about: ${subject}\n\n` : ""
  );
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    if (showEnquiryType && !enquiryType) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          ...(enquiryType && { enquiryType }),
        }),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(
          data.error ??
            "Something went wrong. Please email hello@josyote.com directly."
        );
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMsg(
        "Something went wrong. Please email hello@josyote.com directly."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="space-y-2 border border-border p-6">
        <p className="font-display text-lg">Message sent</p>
        <p className="text-sm text-cream/60">
          Thanks for reaching out. Josy will get back to you soon.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full border border-border bg-transparent px-4 py-3 text-sm text-cream placeholder:text-cream/30 focus:border-cream/40 focus:outline-none disabled:opacity-50";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        required
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled={status === "loading"}
        className={inputClass}
      />
      <input
        type="email"
        required
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={status === "loading"}
        className={inputClass}
      />
      {showEnquiryType && (
        <select
          required
          value={enquiryType}
          onChange={(e) => setEnquiryType(e.target.value as EnquiryType)}
          disabled={status === "loading"}
          className={`${inputClass} ${!enquiryType ? "text-cream/30" : ""}`}
        >
          <option value="" disabled>
            What is this about?
          </option>
          {ENQUIRY_TYPES.map((type) => (
            <option key={type} value={type} className="bg-dark text-cream">
              {type}
            </option>
          ))}
        </select>
      )}
      <textarea
        required
        placeholder={
          subject
            ? "Your message"
            : "Tell me a bit about what you\u2019re after."
        }
        rows={5}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        disabled={status === "loading"}
        className={`${inputClass} resize-none`}
      />
      {status === "error" && (
        <p className="text-sm text-red-400">{errorMsg}</p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="border border-cream/80 px-8 py-3 text-xs uppercase tracking-[0.2em] transition-colors hover:bg-cream hover:text-dark disabled:opacity-50"
      >
        {status === "loading" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
