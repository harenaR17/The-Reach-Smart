export default function sitemap() {
  return [
    {
      url: "https://thereachsmart.net",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          bg: "https://thereachsmart.net",
          en: "https://thereachsmart.net",
          fr: "https://thereachsmart.net",
        },
      },
    },
  ];
}
