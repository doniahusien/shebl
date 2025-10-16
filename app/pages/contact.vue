<template>
      <BaseHero
    :title="contact?.data.banner.title"
    :subtitle="contact?.data.banner.description"
    :bgImage="contact?.data.banner.image"
  />

  <div class="px-20 pt-20">
  <ContactInfo/>
  </div>
</template>
<script setup>
const { t } = useI18n();
const { data: contact, pending, error } = await useAsyncData("contact", () =>
  useGlobalFetch("/preview?banner_type=contact_banner")
);
</script>