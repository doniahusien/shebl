<template>
   <UILoader v-if="pending" />
  <UIError v-else-if="error" :error="error" />
  <div v-else>
      <BaseHero
    :title="contact?.data.banner.title"
    :subtitle="contact?.data.banner.description"
    :bgImage="contact?.data.banner.image"
  />

  <div class="px-20 pt-20">
  <ContactInfo/>
  </div>
  </div>
</template>
<script setup lang="ts">
const { locale } = useI18n();
const { data: contact, pending, error } = await useAsyncData("contact", 
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