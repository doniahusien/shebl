<template>
  <Html :lang="locale" :dir="locale === 'ar' ? 'rtl' : 'ltr'">
    <Body :dir="locale === 'ar' ? 'rtl' : 'ltr'">
      <div class="flex min-h-screen flex-col">
        <Navbar />
        <main class="flex-1">
          <UINoInternetConnection v-if="!isOnline" />
          <div v-else class="app_wrapper animate-fade-in" id="app_wrapper">
            <slot />
          </div>
        </main>
        <Footer />
      </div>
    </Body>
  </Html>
</template>


<script setup>
const { locale } = useI18n();
const isOnline = ref(true);
useScrollAnimation();

useSeoMeta({
  ogImage: "logo.png",
  ogSiteName: locale.value === "ar" ? "شبل" : "Shebl",
  description:
    locale.value === "ar"
      ? "مكتب شبل للمحاماة يقدم خدمات قانونية متكاملة واستشارات متخصصة في جميع فروع القانون داخل المملكة وخارجها."
      : "Shebl Law Firm provides comprehensive legal services and expert consultations in all fields of law locally and internationally.",
  keywords:
    locale.value === "ar"
      ? "محامي, شبل, مكتب محاماة, استشارات قانونية, محاكم, قضايا, قانون"
      : "lawyer, Shebl, law firm, legal consultancy, cases, courts, law",
  twitterTitle: locale.value === "ar" ? "شبل للمحاماة" : "Shebl Law Firm",
  twitterDescription:
    locale.value === "ar"
      ? "خدمات قانونية احترافية مع نخبة من المحامين والمستشارين."
      : "Professional legal services with a team of expert lawyers and consultants.",
  twitterImage: "logo.png",
});

useHead({
  titleTemplate: (title) =>
    title
      ? `${title} | ${locale.value === "ar" ? "شبل للمحاماة" : "Shebl Law Firm"}`
      : locale.value === "ar"
      ? "شبل للمحاماة"
      : "Shebl Law Firm",
});


onMounted(() => {
  isOnline.value = window.navigator.onLine
  window.addEventListener('online', () => {
    isOnline.value = true
  })

  window.addEventListener('offline', () => {
    isOnline.value = false
  })
})
</script>
