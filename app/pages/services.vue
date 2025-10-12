<template>
  <BaseHero
    :title="t('services.title')"
    :subtitle="t('services.subtitle')"
    bgImage= "bg-[url('/images/servicesheader.jpg')]"
  />
  <div class="py-22">
    <ServicesList />
  </div>
</template>
<script setup>
const { t } = useI18n();
</script>
