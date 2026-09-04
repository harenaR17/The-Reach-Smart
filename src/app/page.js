import MainPage from "./MainPage";

export const metadata = {
  title: "The Reach Smart — AI Automations for SaaS & E-commerce",
  description: "Reach Smart builds AI systems for SaaS and e-commerce: 24/7 customer support, B2B lead discovery, personalized outreach, UGC ad content, and post-purchase communication.",
  alternates: {
    canonical: "https://thereachsmart.net",
    languages: {
      "en": "https://thereachsmart.net",
      "bg": "https://thereachsmart.net/bg",
      "fr": "https://thereachsmart.net/fr",
      "x-default": "https://thereachsmart.net",
    },
  },
  openGraph: {
    title: "The Reach Smart — AI Automations for SaaS & E-commerce",
    description: "AI systems that take over customer support, lead discovery, personalized outreach, UGC ad variations, and post-purchase communication.",
    url: "https://thereachsmart.net",
    locale: "en_US",
    alternateLocale: ["bg_BG", "fr_FR"],
    images: [
      {
        url: "https://mrq02oy9yi.ufs.sh/f/MjT0Ey7Y1AFND4ZLKnzplyv6r3gcbp8teXz5di0fHO4BWjVx",
        width: 1200,
        height: 630,
        alt: "The Reach Smart — AI Automations for SaaS & E-commerce",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Reach Smart — AI Automations for SaaS & E-commerce",
    description: "Reach Smart builds AI systems for SaaS and e-commerce: 24/7 customer support, B2B lead discovery, personalized outreach, UGC ad content, and post-purchase communication.",
    images: ["https://mrq02oy9yi.ufs.sh/f/MjT0Ey7Y1AFND4ZLKnzplyv6r3gcbp8teXz5di0fHO4BWjVx"],
  },
};

export default function Home() {
  return <MainPage initialLang="en" />;
}
