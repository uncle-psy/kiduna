import { sql } from "drizzle-orm";
import { getDb } from "@/db";
import { earlyAccessRequests } from "@/db/schema";

type Submission = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  referredBy?: unknown;
  website?: unknown;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as Submission;
    const name = clean(payload.name, 120);
    const email = clean(payload.email, 254).toLowerCase();
    const message = clean(payload.message, 2000);
    const referredBy = clean(payload.referredBy, 180);

    if (clean(payload.website, 200)) {
      return Response.json({ ok: true }, { status: 201 });
    }

    if (!name || !emailPattern.test(email) || message.length < 20) {
      return Response.json(
        { error: "Please add your name, a valid email, and a little more about your interest." },
        { status: 400 },
      );
    }

    const db = getDb();
    await db
      .insert(earlyAccessRequests)
      .values({ name, email, message, referredBy: referredBy || null })
      .onConflictDoUpdate({
        target: earlyAccessRequests.email,
        set: { name, message, referredBy: referredBy || null, updatedAt: sql`CURRENT_TIMESTAMP` },
      });

    return Response.json({ ok: true }, { status: 201 });
  } catch (error) {
    const details = error instanceof Error ? error.message : "";
    const unavailable = details.includes("no such table") || details.includes("binding `DB` is unavailable");
    return Response.json(
      { error: unavailable ? "Early access is being connected. Please try again shortly." : "We couldn't save that just now. Please try again." },
      { status: 500 },
    );
  }
}
