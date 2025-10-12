<template>
  <BaseHero
    :title="t('about.title')"
    :subtitle="t('about.subtitle')"
    bgImage="bg-[url('/images/aboutheader.jpg')]"
  />
  <AboutUs :showBtn="false"/>
</template>
<script setup>
const { t } = useI18n();
</script>