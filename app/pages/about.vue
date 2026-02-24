<template>

  <div class="space-y-22 mb-10" >
    <BaseHero
      :title="aboutBanner?.data?.banner?.title"
      :subtitle="aboutBanner?.data?.banner?.description"
      :bgImage="aboutBanner?.data?.banner?.image"
      :loading="status == 'pending'"
    />

    <AboutUs :showBtn="false" :about="about" :loading="status === 'pending'" />
    <AboutUsGoals :goals="goals" :loading="status === 'pending'" />
    <WhyUs :why="why" v-if="why" :loading="status === 'pending'" />

    <AboutUsCoreValuesSection :core="core" :loading="status === 'pending'" />
    <AboutUsVisionSection :vision="vision" :loading="status === 'pending'" />
  </div>
</template>

<script setup lang="ts">


const { t, locale } = useI18n();

interface Banner {
  title?: string;
  description?: string;
  image?: string;
}

interface Section {
  type: string;
  [key: string]: any;
}

interface AboutBannerResponse {
  data?: {
    banner?: Banner;
    sections?: Section[];
  };
}

const { data: aboutBanner, status, error } = await useAsyncData<ApiResponse<AboutBannerResponse>>(
  "aboutData",
  () => useGlobalFetch("/preview?banner_type=about_banner"),
  { watch: [locale] }
);
watch(aboutBanner, (newVal) => {
  if (newVal?.data?.banner) {
    useDynamicMeta({
      description: newVal.data.banner.description,
      image: newVal.data.banner.image,
    });
  }
});

const sections = computed<Section[]>(() => aboutBanner.value?.data?.sections || []);
const about = computed(() => sections.value.find((s) => s.type === "about"));
const goals = computed(() => sections.value.find((s) => s.type === "goals"));
const why = computed(() => sections.value.find((s) => s.type === "why_us"));
const core = computed(() => sections.value.find((s) => s.type === "core_values"));
const vision = computed(() => sections.value.find((s) => s.type === "our_vision"));
</script>
