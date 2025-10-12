<template>
      <BaseHero
    :title="t('contact.title')"
    :subtitle="t('contact.description')"
    bgImage="bg-[url('/images/contactheader.jpg')]"
  />

  <div class="px-20">
  <ContactInfo/>
  </div>
</template>
<script setup>
const { t } = useI18n();
</script>