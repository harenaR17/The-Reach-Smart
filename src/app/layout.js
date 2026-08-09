import { Space_Grotesk, Inter, Instrument_Serif } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin", "cyrillic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

export const metadata = {
  title: "The Reach Smart — AI Автоматизации за SaaS & E-commerce | AI Automations",
  description: "Reach Smart изгражда AI системи за SaaS и e-commerce: поддръжка на клиенти, lead generation, персонализиран outreach, UGC рекламно съдържание и комуникация след покупка.",
  keywords: ["AI automations", "SaaS automation", "E-commerce AI support", "Lead generation AI", "Reach Smart", "Outreach automation"],
  metadataBase: new URL("https://thereachsmart.net"),
  openGraph: {
    title: "The Reach Smart — AI Automations for SaaS & E-commerce",
    description: "AI systems that take over customer support, lead discovery, personalized outreach, UGC ad variations, and post-purchase communication.",
    url: "https://thereachsmart.net",
    siteName: "The Reach Smart",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "The Reach Smart Logo",
      },
    ],
    locale: "bg_BG",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="bg" className={`${spaceGrotesk.variable} ${inter.variable} ${instrumentSerif.variable}`}>
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
