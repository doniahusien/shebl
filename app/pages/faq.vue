<script setup lang="ts">
const { locale } = useI18n();

const { data: faq, pending, error } = await useAsyncData("faq",
  () => useGlobalFetch("/preview/faq"),
    { watch: [locale] }
);
watch(faq, (newVal) => {
  if (newVal?.data?.banner) {
    useDynamicMeta({
      description: newVal.data.banner.description,
      image: newVal.data.banner.image,
    })
  }
})
</script>

<template>
   <UILoader v-if="pending" />
  <UIError v-else-if="error" :error="error" />
  <div v-else>
  <BaseHero
    :title="faq.data.banner.title"
    :subtitle="faq.data.banner.description"
    :bgImage="faq.data.banner.image"
  />
  <div class="text-black p-5 md:p-20">
    <FAQAccordion
      v-if="!pending && faq?.data?.faq?.length"
      :faq="faq.data.faq"
      contenStyle="text-black"
      labelStyle="text-black"
    />
  </div>
  </div>
</template>
