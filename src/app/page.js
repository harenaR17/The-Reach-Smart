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
  },
};

export default function Home() {
  return <MainPage initialLang="en" />;
}
