<template>
  <UILoader v-if="pending" />
  <UIError v-else-if="error" :error="error" />
  <div v-else>
    <BaseHero
      :title="aboutBanner?.data?.banner?.title"
      :subtitle="aboutBanner?.data?.banner?.description"
      :bgImage="aboutBanner?.data?.banner?.image"
    />

    <AboutUs :showBtn="false" :about="about" />
    <AboutUsGoals :goals="goals" />

    <div class="py-20 bg-mist-white">
      <WhyUs :why="why" v-if="why" />
    </div>

    <div>
      <AboutUsCoreValuesSection :core="core" />
      <AboutUsVisionSection :vision="vision" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { t, locale } = useI18n()

interface Banner {
  title?: string
  description?: string
  image?: string
}

interface Section {
  type: string
  [key: string]: any
}

interface AboutBannerResponse {
  data?: {
    banner?: Banner
    sections?: Section[]
  }
}

const { data: aboutBanner, pending, error } = await useAsyncData<AboutBannerResponse>(
  'aboutData',
  () => useGlobalFetch('/preview?banner_type=about_banner'),
  { watch: [locale] }
)
watch(aboutBanner, (newVal) => {
  if (newVal?.data?.banner) {
    useDynamicMeta({
      description: newVal.data.banner.description,
      image: newVal.data.banner.image,
    })
  }
})

const sections = computed<Section[]>(() => aboutBanner.value?.data?.sections || [])
const about = computed(() => sections.value.find(s => s.type === 'about'))
const goals = computed(() => sections.value.find(s => s.type === 'goals'))
const why = computed(() => sections.value.find(s => s.type === 'why_us'))
const core = computed(() => sections.value.find(s => s.type === 'core_values'))
const vision = computed(() => sections.value.find(s => s.type === 'our_vision'))
</script>
