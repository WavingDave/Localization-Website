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
        url: "https://locsmith.de/images/transparent-logo.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Locsmith Localization | Game Localization Services",
    description:
      "Immersive storytelling & professional game localization services.",
    images: ["https://locsmith.de/images/transparent-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
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
  const orgJson = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Locsmith Localization",
    url: "https://locsmith.de",
    logo: "https://locsmith.de/images/transparent-logo.png",
  };
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://locsmith.de" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJson) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
