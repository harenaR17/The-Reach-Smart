export default function sitemap() {
  const baseUrl = "https://thereachsmart.net";
  const lastModified = new Date();

  const languageAlternates = {
    en: `${baseUrl}`,
    bg: `${baseUrl}/bg`,
    fr: `${baseUrl}/fr`,
  };

  return [
    // Primary English Root (https://thereachsmart.net)
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: {
        languages: languageAlternates,
      },
    },
    // Bulgarian Route (https://thereachsmart.net/bg)
    {
      url: `${baseUrl}/bg`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: languageAlternates,
      },
    },
    // French Route (https://thereachsmart.net/fr)
    {
      url: `${baseUrl}/fr`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: languageAlternates,
      },
    },
  ];
}
