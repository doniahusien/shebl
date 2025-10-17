<script setup lang="ts">
const { locale } = useI18n();

const { data: faq, status, error } = await useAsyncData("faq",
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
  <UILoader v-if="status === 'pending'" />
  <UINotFound v-if="faq?.value?.status == 'fail'" />

  <template v-if="status === 'success'">
  <BaseHero
    :title="faq?.data?.banner?.title"
    :subtitle="faq?.data?.banner?.description"
    :bgImage="faq?.data?.banner?.image"
  />
  <div class="text-black p-5 md:p-20">
    <FAQAccordion
      v-if=" faq?.data?.faq?.length"
      :faq="faq?.data?.faq"
      contenStyle="text-black"
      labelStyle="text-black"
    />
  </div>
 </template>
</template>
