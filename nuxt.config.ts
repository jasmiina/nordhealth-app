// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://nordcdn.net/ds/css/4.1.0/nord.min.css",
          integrity:
            "sha384-9FV4ikmPiDEn1F2NuHi9J8BThbSFNWbgombQ9SNY9Jh0H/WWC40owQakNeJL7Jeg",
          crossorigin: "anonymous",
        },
      ],
      script: [
        {
          type: "module",
          src: "https://nordcdn.net/ds/components/4.4.0/index.js",
          integrity:
            "sha384-OwSkYLIJbTWjgADB5REz7XKEHyyNB+suxkNap4Di9yt7QUOU75f62Z1iA++wyhSn",
          crossorigin: "anonymous",
        },
      ],
    },
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.startsWith("nord-"),
    },
  },
  typescript: {
    typeCheck: true,
  },
  ssr: false,
  pages: true,
});
