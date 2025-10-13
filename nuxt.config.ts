import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  app: {
    head: {
      title:"shebl",
    link: [
      { rel: 'icon', type: 'image/png', href: '/logo.png' },
    ],
  },},
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