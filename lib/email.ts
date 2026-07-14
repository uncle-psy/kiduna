import { Resend } from "resend";

type EarlyAccessEmail = {
  id: number;
  name: string;
  email: string;
  message: string;
  referredBy: string | null;
};

const defaultFrom = "Kiduna <hello@kiduna.ai>";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function emailFrame(content: string) {
  return `
    <!doctype html>
    <html lang="en">
      <body style="margin:0;background:#120c07;color:#fffbf5;font-family:Avenir,'Avenir Next',Arial,sans-serif;">
        <div style="padding:42px 18px;">
          <div style="max-width:620px;margin:0 auto;background:#271b11;border:1px solid rgba(255,248,240,.14);border-radius:14px;overflow:hidden;">
            <div style="padding:22px 30px;border-bottom:1px solid rgba(255,248,240,.12);font-size:15px;font-weight:700;letter-spacing:.18em;color:#03ccd9;">KIDUNA</div>
            <div style="padding:38px 30px 42px;">${content}</div>
          </div>
          <p style="margin:20px auto 0;max-width:620px;color:rgba(255,251,245,.45);font-size:12px;text-align:center;">The agentic internet starts here · kiduna.ai</p>
        </div>
      </body>
    </html>`;
}

function confirmationHtml(name: string) {
  const firstName = escapeHtml(name.trim().split(/\s+/)[0] || name);
  return emailFrame(`
    <p style="margin:0 0 14px;color:#8fe6c6;font-size:11px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;">You’re on the list</p>
    <h1 style="margin:0 0 22px;font-family:Georgia,serif;font-size:42px;line-height:1.05;font-weight:400;color:#fffbf5;">Welcome to the beginning, ${firstName}.</h1>
    <p style="margin:0 0 18px;color:#e0d3c4;font-size:16px;line-height:1.7;">Thank you for raising your hand for early access to Kiduna.</p>
    <p style="margin:0 0 28px;color:#e0d3c4;font-size:16px;line-height:1.7;">We’re forming this person to person. We’ll read your note and be in touch as the next early-access group takes shape.</p>
    <a href="https://kiduna.ai" style="display:inline-block;padding:14px 20px;border-radius:4px;background:#03ccd9;color:#08272a;font-size:14px;font-weight:700;text-decoration:none;">Return to Kiduna →</a>
  `);
}

function notificationHtml(submission: EarlyAccessEmail) {
  const referredBy = submission.referredBy ? escapeHtml(submission.referredBy) : "Not provided";
  return emailFrame(`
    <p style="margin:0 0 14px;color:#8fe6c6;font-size:11px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;">New early-access request</p>
    <h1 style="margin:0 0 28px;font-family:Georgia,serif;font-size:38px;line-height:1.05;font-weight:400;color:#fffbf5;">${escapeHtml(submission.name)}</h1>
    <table role="presentation" style="width:100%;border-collapse:collapse;color:#e0d3c4;font-size:14px;line-height:1.6;">
      <tr><td style="width:120px;padding:10px 0;border-top:1px solid rgba(255,248,240,.12);color:rgba(255,251,245,.55);">Email</td><td style="padding:10px 0;border-top:1px solid rgba(255,248,240,.12);"><a href="mailto:${escapeHtml(submission.email)}" style="color:#03ccd9;">${escapeHtml(submission.email)}</a></td></tr>
      <tr><td style="padding:10px 0;border-top:1px solid rgba(255,248,240,.12);color:rgba(255,251,245,.55);">Who sent them</td><td style="padding:10px 0;border-top:1px solid rgba(255,248,240,.12);">${referredBy}</td></tr>
      <tr><td style="padding:10px 0;border-top:1px solid rgba(255,248,240,.12);color:rgba(255,251,245,.55);vertical-align:top;">Their note</td><td style="padding:10px 0;border-top:1px solid rgba(255,248,240,.12);white-space:pre-wrap;">${escapeHtml(submission.message)}</td></tr>
    </table>
    <p style="margin:26px 0 0;color:rgba(255,251,245,.48);font-size:12px;">Registration #${submission.id}. Reply to this email to respond directly to ${escapeHtml(submission.name)}.</p>
  `);
}

async function sendOrThrow(
  resend: Resend,
  payload: Parameters<typeof resend.emails.send>[0],
) {
  const result = await resend.emails.send(payload);
  if (result.error) throw new Error(result.error.message);
}

export async function sendEarlyAccessEmails(submission: EarlyAccessEmail) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("RESEND_API_KEY is not configured; early-access emails were skipped.");
    return;
  }

  const resend = new Resend(apiKey);
  const from = process.env.EMAIL_FROM ?? defaultFrom;
  const notificationEmail = process.env.EARLY_ACCESS_NOTIFICATION_EMAIL;

  const jobs: Promise<void>[] = [
    sendOrThrow(resend, {
      from,
      to: submission.email,
      subject: "You’re on the Kiduna early access list",
      html: confirmationHtml(submission.name),
      text: `Welcome to the beginning, ${submission.name}. Thank you for raising your hand for early access to Kiduna. We’ll read your note and be in touch as the next early-access group takes shape.`,
    }),
  ];

  if (notificationEmail) {
    jobs.push(
      sendOrThrow(resend, {
        from,
        to: notificationEmail,
        replyTo: submission.email,
        subject: `New Kiduna early access request — ${submission.name}`,
        html: notificationHtml(submission),
        text: `New Kiduna early access request\n\nName: ${submission.name}\nEmail: ${submission.email}\nWho sent them: ${submission.referredBy || "Not provided"}\n\nTheir note:\n${submission.message}`,
      }),
    );
  } else {
    console.warn("EARLY_ACCESS_NOTIFICATION_EMAIL is not configured; the internal notification was skipped.");
  }

  const results = await Promise.allSettled(jobs);
  for (const result of results) {
    if (result.status === "rejected") console.error("Early-access email delivery failed:", result.reason);
  }
}
