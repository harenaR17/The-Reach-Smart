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
      title: "The Reach Smart — AI Automations for SaaS & E-commerce",
      description: "Reach Smart builds AI systems for SaaS and e-commerce: 24/7 customer support, B2B lead discovery, personalized outreach, UGC ad content, and post-purchase communication.",
      locale: "en_US",
    },
    bg: {
      title: "The Reach Smart — AI Автоматизации за SaaS & E-commerce",
      description: "Reach Smart изгражда AI системи за SaaS и e-commerce: поддръжка на клиенти, lead generation, персонализиран outreach, UGC рекламно съдържание и комуникация след покупка.",
      locale: "bg_BG",
    },
    fr: {
      title: "The Reach Smart — Automatisation IA pour SaaS & E-commerce",
      description: "Reach Smart conçoit des systèmes d'IA sur mesure pour SaaS et e-commerce: support client 24/7, recherche de prospects B2B, outreach personnalisé et contenu UGC.",
      locale: "fr_FR",
    },
  };

  const currentMeta = metadataMap[lang] || metadataMap.en;
  const canonicalUrl = lang === "en" ? "https://thereachsmart.net" : `https://thereachsmart.net/${lang}`;

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
      title: currentMeta.title,
      description: currentMeta.description,
      url: canonicalUrl,
      locale: currentMeta.locale,
      alternateLocale: ["en_US", "bg_BG", "fr_FR"].filter((l) => l !== currentMeta.locale),
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
