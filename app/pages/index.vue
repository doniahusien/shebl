<template>
  <UILoader v-if="status === 'pending'" />
  <UINotFound v-if="home?.value?.status == 'fail'" />
  <UIBackError v-else-if="error?.value?.statusCode === 500" />

  <template v-if="status === 'success'">
    <section class="relative">
      <Banner :hero="home?.data?.banner" />
      <div class="absolute bottom-[-4rem] left-1/2 -translate-x-1/2 w-[95%] z-20">
        <HighLight :highlight="home?.data?.banner?.features" />
      </div>
    </section>
    <AboutUs :about="about" />
    <div class="bg-mist-white">
      <WhyUs :why="why" />
    </div>

    <Services :services="services" :features="services?.features" />
    <FAQ :faq="faq" />
    <Contact :info="infoData" />
  </template>
</template>
<script setup>
const { locale } = useI18n();

const { data: home, status, error } = await useAsyncData(
  "homeData",
  () => useGlobalFetch("/preview"),
  { watch: [locale] }
);

const sections = computed(() => home.value?.data?.sections || []);
const faq = computed(() => home.value?.data?.faq || []);
const about = computed(() => sections.value.find((s) => s.type == "about"));
const why = computed(() => sections.value.find((s) => s.type == "why_us"));
const services = computed(() => sections.value.find((s) => s.type == "our_services"));
const infoData = computed(() => sections.value.find((s) => s.type == "contact_info"));
watch(home, (newVal) => {
  if (newVal?.data?.banner) {
    useDynamicMeta({
      description: newVal.data.banner.description,
      image: newVal.data.banner.image,
    });
  }
});
</script>
