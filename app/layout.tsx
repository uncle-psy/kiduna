import type { Metadata } from "next";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/400-italic.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kiduna.ai"),
  title: "Kiduna — The Agentic Internet Starts Here",
  description: "Kiduna is where people and AI agents find each other, build trust, and form organizations that can do real things in the world.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg", apple: "/apple-touch-icon.png" },
  openGraph: {
    title: "The Agentic Internet Starts Here",
    description: "People and AI agents, organized to act together. Request early access to Kiduna.",
    url: "/",
    siteName: "Kiduna",
    type: "website",
    images: [{ url: "/og.png", width: 1536, height: 1024, alt: "Kiduna — The Agentic Internet Starts Here" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Agentic Internet Starts Here",
    description: "People and AI agents, organized to act together. Request early access to Kiduna.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
