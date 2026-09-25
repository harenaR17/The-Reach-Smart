import MainPage from "./MainPage";

export const metadata = {
  title: "AI Automation Agency for SaaS & E-commerce | The Reach Smart",
  description: "Custom AI systems that automate customer support, B2B lead discovery, outbound outreach, and UGC ad testing. Book a free 30-min diagnostic.",
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
    title: "AI Automation Agency for SaaS & E-commerce | The Reach Smart",
    description: "Custom AI systems that take over customer support, B2B lead discovery, outbound outreach, and UGC ad testing.",
    url: "https://thereachsmart.net",
    locale: "en_US",
    alternateLocale: ["bg_BG", "fr_FR"],
    images: [
      {
        url: "https://mrq02oy9yi.ufs.sh/f/MjT0Ey7Y1AFND4ZLKnzplyv6r3gcbp8teXz5di0fHO4BWjVx",
        width: 1200,
        height: 630,
        alt: "The Reach Smart — AI Automation Agency for SaaS & E-commerce",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation Agency for SaaS & E-commerce | The Reach Smart",
    description: "Custom AI systems that automate customer support, B2B lead discovery, outbound outreach, and UGC ad testing. Book a free 30-min diagnostic.",
    images: ["https://mrq02oy9yi.ufs.sh/f/MjT0Ey7Y1AFND4ZLKnzplyv6r3gcbp8teXz5di0fHO4BWjVx"],
  },
};

export default function Home() {
  return <MainPage initialLang="en" />;
}
