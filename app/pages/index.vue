<template>
  <UILoader v-if="pending" />
  <UIError v-else-if="error" :error="error"/>
  <div v-else>
    <section class="relative" >
      <Banner :hero="home?.data.banner" />
      <div class="absolute bottom-[-4rem] left-1/2 -translate-x-1/2 w-[95%] z-20">
        <HighLight :highlight="home?.data.banner.features" />
      </div>
    </section>
    <AboutUs :about="about" />
    <div class="bg-mist-white">
      <WhyUs :why="why" />
    </div>

    <Services :services="services" :features="services.features" />
    <FAQ :faq="faq" />
    <Contact :info="info" />
  </div>
</template>
<script setup>
const { data: home, pending, error } = await useAsyncData("home", () =>
  useGlobalFetch("/preview")
);


const sections = computed(() => home.value?.data?.sections || []);
const faq = computed(() => home.value?.data?.faq || []);
const about = computed(() => sections.value.find((s) => s.type == "about"));
const why = computed(() => sections.value.find((s) => s.type == "why_us"));
const services = computed(() => sections.value.find((s) => s.type == "our_services"));
const info = computed(() => sections.value.find((s) => s.type == "contact_info"));
</script>
