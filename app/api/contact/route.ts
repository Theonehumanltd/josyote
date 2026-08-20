import { NextResponse } from "next/server";
import { Resend } from "resend";

let _resend: Resend | null = null;
function getResend() {
  if (!_resend) _resend = new Resend(process.env.RESEND_API_KEY);
  return _resend;
}

const recentRequests = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const window = 60_000; // 1 minute
  const maxRequests = 3;

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

    const { name, email, message, enquiryType } = body as {
      name?: string;
      email?: string;
      message?: string;
      enquiryType?: string;
    };

    if (
      !name?.trim() ||
      !email?.trim() ||
      !message?.trim()
    ) {
      return NextResponse.json(
        { error: "Please fill in all fields." },
        { status: 400 }
      );
    }

    if (name.trim().length > 200 || email.trim().length > 320 || message.trim().length > 5000) {
      return NextResponse.json(
        { error: "One or more fields are too long." },
        { status: 400 }
      );
    }

    if (!EMAIL_RE.test(email.trim())) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const { error } = await getResend().emails.send({
      from: "Josy Ote <hello@josyote.com>",
      to: "hello@josyote.com",
      replyTo: email.trim(),
      subject: enquiryType
        ? `[${enquiryType}] New enquiry from ${name.trim()}`
        : `New enquiry from ${name.trim()}`,
      text: [
        `Name: ${name.trim()}`,
        `Email: ${email.trim()}`,
        "",
        message.trim(),
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        {
          error:
            "Something went wrong sending your message. Please email hello@josyote.com directly.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json(
      {
        error:
          "Something went wrong. Please email hello@josyote.com directly.",
      },
      { status: 500 }
    );
  }
}
