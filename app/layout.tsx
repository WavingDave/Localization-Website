import "./globals.css";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://locsmith.de"),
  title: "Locsmith Localization | Game Localization Services",
  description:
    "Professional video game localization focused on immersive storytelling, natural dialogue, and culturally adapted player experiences.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Locsmith Localization | Game Localization Services",
    description:
      "Immersive storytelling & professional game localization services.",
    url: "https://locsmith.de",
    siteName: "Locsmith Localization",
    type: "website",
    images: [
      {
        url: "/images/transparent-logo.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
