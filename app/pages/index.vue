<template>
  <UINotFound v-if="error?.statusCode === 404" />
  <UIBackError v-else-if="error?.statusCode === 500" />

  <template v-else>
    <section>
      <Banner :hero="home?.data?.banner" :loading="status === 'pending'" />
      <div class="relative z-10 -translate-y-16 container mx-auto px-6 lg:px-2">
        <HighLight :highlight="home?.data?.banner?.features" :loading="status === 'pending'" />
      </div>
    </section>
    <div class="space-y-28 mb-5">
      <AboutUs :about="about" :loading="status === 'pending'" />
      <WhyUs :why="why" :loading="status === 'pending'" />
      <Services :services="services" :features="services?.features" :loading="status === 'pending'" />
      <FAQ :faq="faq" :loading="status === 'pending'" />
      <Contact :info="infoData" :loading="status === 'pending'" />
    </div>
  </template>
</template>

<script setup lang="ts">
const { locale } = useI18n();

const { data: home, status, error } = await useAsyncData<ApiResponse<HomeResponse>>(
  "homeData",
  () => useGlobalFetch<ApiResponse<HomeResponse>>("/preview"),
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
