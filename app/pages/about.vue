<template>
  <BaseHero
    :title="aboutBanner?.data.banner.title"
    :subtitle="aboutBanner?.data.banner.description"
    :bgImage="aboutBanner?.data.banner.image"
  />

  <AboutUs :showBtn="false" :about="about" />
  <AboutUsGoals :goals="goals" />

  <div class="py-20 bg-mist-white">
    <WhyUs :why="why" />
  </div>

  <div>
    <AboutUsCoreValuesSection :core="core" />
    <AboutUsVisionSection :vision="vision" />
  </div>
</template>

<script setup>
const { t } = useI18n();

const { data: aboutBanner, pending, error } = await useAsyncData("about", () =>
  useGlobalFetch("/preview?banner_type=about_banner")
);

const sections = computed(() => aboutBanner.value?.data?.sections || []);
const about = computed(() => sections.value.find((s) => s.type == "about"));
const goals = computed(() => sections.value.find((s) => s.type == "goals"));
const why = computed(() => sections.value.find((s) => s.type == "why_us"));
const core = computed(() => sections.value.find((s) => s.type == "core_values"));
const vision = computed(() => sections.value.find((s) => s.type == "our_vision"));
</script>
