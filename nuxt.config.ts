import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/image", "@nuxt/ui", [
    "@nuxtjs/i18n",
    {
      defaultLocale: "ar",
      langDir: "locales",
      lazy: false,
      locales: [
        { code: "en", file: "en.json", dir: "ltr", name: "English" },
        { code: "ar", file: "ar.json", dir: "rtl", name: "عربي" },
      ],
      detectBrowserLanguage: false,
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