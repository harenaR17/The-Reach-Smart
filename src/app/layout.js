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
    default: "AI Automation Agency for SaaS & E-commerce | The Reach Smart",
    template: "%s | The Reach Smart",
  },
  description: "Custom AI systems that automate customer support, B2B lead discovery, outbound outreach, and UGC ad testing. Book a free 30-min diagnostic.",
  keywords: [
    "AI automation agency",
    "AI automations for SaaS",
    "E-commerce AI automation",
    "AI customer support agents",
    "B2B lead generation AI",
    "Automated outbound pipeline",
    "UGC ad creative production",
    "Post-purchase AI automation",
    "Shopify AI support",
    "The Reach Smart",
    "Reach Smart",
    "AI агенция за автоматизации",
    "автоматизация за SaaS",
    "AI поддръжка за e-commerce",
    "agence automatisation IA",
    "automatisation SaaS IA",
  ],
  authors: [{ name: "The Reach Smart", url: "https://thereachsmart.net" }],
  creator: "The Reach Smart",
  publisher: "The Reach Smart",
  category: "Technology & Business Automation",
  alternates: {
    canonical: "https://thereachsmart.net",
    languages: {
      "bg": "https://thereachsmart.net/bg",
      "en": "https://thereachsmart.net",
      "fr": "https://thereachsmart.net/fr",
    },
  },
  openGraph: {
    title: "AI Automation Agency for SaaS & E-commerce | The Reach Smart",
    description: "Custom AI systems that take over customer support, B2B lead discovery, outbound outreach, and UGC ad testing.",
    url: "https://thereachsmart.net",
    siteName: "The Reach Smart",
    images: [
      {
        url: "https://mrq02oy9yi.ufs.sh/f/MjT0Ey7Y1AFND4ZLKnzplyv6r3gcbp8teXz5di0fHO4BWjVx",
        width: 1200,
        height: 630,
        alt: "The Reach Smart — AI Automation Agency for SaaS & E-commerce",
      },
    ],
    locale: "en_US",
    alternateLocale: ["bg_BG", "fr_FR"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation Agency for SaaS & E-commerce | The Reach Smart",
    description: "Custom AI systems that take over customer support, B2B lead discovery, outbound outreach, and UGC ad testing. Book a free 30-min diagnostic.",
    images: ["https://mrq02oy9yi.ufs.sh/f/MjT0Ey7Y1AFND4ZLKnzplyv6r3gcbp8teXz5di0fHO4BWjVx"],
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
      <head suppressHydrationWarning>
        {/* Cookie Consent — default denied state, must run before GTM */}
        <script
          data-cookieconsent="ignore"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag("consent","default",{ad_personalization:"denied",ad_storage:"denied",ad_user_data:"denied",analytics_storage:"denied",functionality_storage:"denied",personalization_storage:"denied",security_storage:"granted",wait_for_update:500});gtag("set","ads_data_redaction",true);gtag("set","url_passthrough",false);`,
          }}
        />
        {/* End Cookie Consent — Cookiebot loaded via GTM */}
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KNT2N4BD');`,
          }}
        />
        {/* End Google Tag Manager */}
        <meta name="msvalidate.01" content="AA8D33CCC431B0217ECB68433913B5D8" />
        <JsonLd />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KNT2N4BD"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
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

