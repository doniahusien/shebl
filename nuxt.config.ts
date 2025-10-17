import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  runtimeConfig: {
    public: {
      baseURL: 'https://shebl9.azmy.aait-d.com/api/client',
      general: "https://shebl9.azmy.aait-d.com/api"
    }
  },
  app: {
    head: {
      title: "شبل",
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo.png' },
      ],
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ]
    },
  },
  modules: ["@nuxt/image", "@nuxt/ui", [
    "@nuxtjs/i18n",
    {
      defaultLocale: "ar",
      langDir: "locales",
      lazy: true,
      locales: [
        { code: "en", file: "en.json", dir: "ltr", name: "English" },
        { code: "ar", file: "ar.json", dir: "rtl", name: "عربي" },
      ],
      detectBrowserLanguage: false,
      strategy: "prefix_except_default",
      vueI18n: "./i18n.config.ts",

    },
  ],
  ],
  css: ["@/assets/css/main.css"],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
});