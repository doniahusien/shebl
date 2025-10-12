<template>
  <BaseHero
    :title="t('about.title')"
    :subtitle="t('about.subtitle')"
    bgImage="bg-[url('/images/aboutheader.jpg')]"
  />
  <AboutUs :showBtn="false" />
  <AboutUsGoals />
  <div class="py-20 bg-mist-white">
    <WhyUs />
  </div>
  <div>
    <AboutUsCoreValuesSection />
    <AboutUsVisionSection />
  </div>
</template>
<script setup>
const { t } = useI18n();
</script>
