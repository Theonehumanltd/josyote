import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const recentRequests = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const window = 60_000;
  const maxRequests = 5;

  const timestamps = (recentRequests.get(ip) ?? []).filter(
    (t) => now - t < window
  );
  if (timestamps.length >= maxRequests) return true;
  timestamps.push(now);
  recentRequests.set(ip, timestamps);
  return false;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          error:
            "Too many requests. Please try again shortly, or email hello@josyote.com directly.",
        },
        { status: 429 }
      );
    }

    const body = await request.json().catch(() => null);
    if (!body) {
      return NextResponse.json(
        { error: "Invalid request." },
        { status: 400 }
      );
    }

    const { email } = body as { email?: string };

    if (!email?.trim()) {
      return NextResponse.json(
        { error: "Please enter your email address." },
        { status: 400 }
      );
    }

    if (email.trim().length > 320) {
      return NextResponse.json(
        { error: "Email address is too long." },
        { status: 400 }
      );
    }

    if (!EMAIL_RE.test(email.trim())) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const { error } = await resend.contacts.create({
      email: email.trim(),
      unsubscribed: false,
    });

    // Treat duplicate/conflict as success
    if (error) {
      const msg =
        typeof error === "object" && "message" in error
          ? (error as { message: string }).message
          : String(error);
      const isDuplicate =
        msg.toLowerCase().includes("already") ||
        msg.toLowerCase().includes("conflict") ||
        msg.toLowerCase().includes("duplicate") ||
        msg.toLowerCase().includes("exist");

      if (!isDuplicate) {
        console.error("Resend error:", error);
        return NextResponse.json(
          {
            error:
              "Something went wrong. Please email hello@josyote.com directly to be added to the list.",
          },
          { status: 500 }
        );
      }
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Notify route error:", err);
    return NextResponse.json(
      {
        error:
          "Something went wrong. Please email hello@josyote.com directly to be added to the list.",
      },
      { status: 500 }
    );
  }
}
