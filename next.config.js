module.exports = {
  i18n: {
    locales: ["en-AU"],
    defaultLocale: "en-AU",
    domains: [
      {
        domain: process.env.DOMAIN,
        defaultLocale: "en-AU",
      },
    ],
  },
};
