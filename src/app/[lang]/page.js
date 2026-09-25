import { notFound } from "next/navigation";
import MainPage from "../MainPage";

const supportedLangs = ["bg", "en", "fr"];

export async function generateStaticParams() {
  return [
    { lang: "bg" },
    { lang: "en" },
    { lang: "fr" },
  ];
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const lang = resolvedParams?.lang;

  if (!supportedLangs.includes(lang)) {
    return {};
  }

  const metadataMap = {
    en: {
      title: "AI Automation Agency for SaaS & E-commerce",
      description: "Custom AI systems that automate customer support, B2B lead discovery, outbound outreach, and UGC ad testing. Book a free 30-min diagnostic.",
      locale: "en_US",
    },
    bg: {
      title: "AI Агенция за Автоматизации за SaaS & E-commerce",
      description: "Изграждаме персонализирани AI системи за 24/7 клиентска поддръжка, lead generation, outreach и UGC реклами. Запазете безплатна диагностика.",
      locale: "bg_BG",
    },
    fr: {
      title: "Agence d'Automatisation IA pour SaaS & E-commerce",
      description: "Systèmes d'IA sur mesure pour support client 24/7, prospection B2B automatisée et création publicitaire UGC. Réservez un diagnostic gratuit.",
      locale: "fr_FR",
    },
  };

  const currentMeta = metadataMap[lang] || metadataMap.en;
  const canonicalUrl = lang === "en" ? "https://thereachsmart.net" : `https://thereachsmart.net/${lang}`;
  const fullTitle = `${currentMeta.title} | The Reach Smart`;

  return {
    title: currentMeta.title,
    description: currentMeta.description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "en": "https://thereachsmart.net",
        "bg": "https://thereachsmart.net/bg",
        "fr": "https://thereachsmart.net/fr",
        "x-default": "https://thereachsmart.net",
      },
    },
    openGraph: {
      title: fullTitle,
      description: currentMeta.description,
      url: canonicalUrl,
      locale: currentMeta.locale,
      alternateLocale: ["en_US", "bg_BG", "fr_FR"].filter((l) => l !== currentMeta.locale),
      images: [
        {
          url: "https://mrq02oy9yi.ufs.sh/f/MjT0Ey7Y1AFND4ZLKnzplyv6r3gcbp8teXz5di0fHO4BWjVx",
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: currentMeta.description,
      images: ["https://mrq02oy9yi.ufs.sh/f/MjT0Ey7Y1AFND4ZLKnzplyv6r3gcbp8teXz5di0fHO4BWjVx"],
    },
  };
}

export default async function LanguagePage({ params }) {
  const resolvedParams = await params;
  const lang = resolvedParams?.lang;

  if (!supportedLangs.includes(lang)) {
    notFound();
  }

  return <MainPage initialLang={lang} />;
}
