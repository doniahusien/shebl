<template>
    <UILoader v-if="status === 'pending'" />

 <UINotFound v-else-if="error?.statusCode === 404" />
  <UIBackError v-else-if="error?.statusCode === 500" />

  <template v-else-if="status === 'success'">
      <BaseHero
    :title="contact?.data?.banner?.title"
    :subtitle="contact?.data?.banner?.description"
    :bgImage="contact?.data?.banner?.image"
  />

  <div class="px-20 pt-20">
  <ContactInfo/>
  </div>
  </template>
</template>
<script setup lang="ts">
const { locale } = useI18n();
const { data: contact, status, error } = await useAsyncData("contact", 
  () => useGlobalFetch("/preview?banner_type=contact_banner"),
    { watch: [locale] }
);

watch(contact, (newVal) => {
  if (newVal?.data?.banner) {
    useDynamicMeta({
      description: newVal.data.banner.description,
      image: newVal.data.banner.image,
    })
  }
})
</script>