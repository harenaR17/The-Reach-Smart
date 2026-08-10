import { Space_Grotesk, Inter, Instrument_Serif } from "next/font/google";
import Script from "next/script";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  display: "swap",
});

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0d0d0d" },
    { media: "(prefers-color-scheme: light)", color: "#0d0d0d" },
  ],
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  metadataBase: new URL("https://thereachsmart.net"),
  title: {
    default: "The Reach Smart — AI Automations for SaaS & E-commerce",
    template: "%s | The Reach Smart",
  },
  description: "Reach Smart builds AI systems for SaaS and e-commerce: customer support, lead discovery, personalized outreach, UGC ad creative production, and post-purchase communication.",
  keywords: [
    "AI automations",
    "AI automation agency",
    "SaaS automation",
    "E-commerce AI support",
    "Lead generation AI",
    "Outreach automation",
    "Reach Smart",
    "UGC ad content AI",
    "Post-purchase AI",
    "AI автоматизации",
    "автоматизация за SaaS",
    "AI за e-commerce",
    "автоматизация на клиентска поддръжка",
    "lead generation",
    "automatisation IA",
    "automatisation SaaS",
    "IA e-commerce"
  ],
  authors: [{ name: "The Reach Smart", url: "https://thereachsmart.net" }],
  creator: "The Reach Smart",
  publisher: "The Reach Smart",
  category: "Technology & Business Automation",
  alternates: {
    canonical: "https://thereachsmart.net",
    languages: {
      "bg": "https://thereachsmart.net",
      "en": "https://thereachsmart.net",
      "fr": "https://thereachsmart.net",
    },
  },
  openGraph: {
    title: "The Reach Smart — AI Automations for SaaS & E-commerce",
    description: "AI systems that take over customer support, lead discovery, personalized outreach, UGC ad variations, and post-purchase communication.",
    url: "https://thereachsmart.net",
    siteName: "The Reach Smart",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Reach Smart — AI Automation Systems for SaaS & E-commerce",
        type: "image/jpeg",
      },
      {
        url: "/og-image-square.jpg",
        width: 1200,
        height: 1200,
        alt: "The Reach Smart Visual Logo",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    alternateLocale: ["bg_BG", "fr_FR"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Reach Smart — AI Automations for SaaS & E-commerce",
    description: "AI systems that handle support, lead gen, outreach, UGC, and post-purchase — built around your business.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#0d0d0d" },
    ],
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "iFRkxqBcJhT61P02dEe2yTlrneOHCEkHvGPaWEjOmuI",
    other: {
      "msvalidate.01": "AA8D33CCC431B0217ECB68433913B5D8",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${instrumentSerif.variable}`}>
      <head>
        <meta name="msvalidate.01" content="AA8D33CCC431B0217ECB68433913B5D8" />
        <JsonLd />
      </head>
      <body>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9RXBGT3LLL"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9RXBGT3LLL');
          `}
        </Script>
      </body>
    </html>
  );
}

