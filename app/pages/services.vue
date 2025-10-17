<template>
  <UILoader v-if="status === 'pending'" />
  <UINotFound v-if="services?.value?.status == 'fail'" />

  <template v-if="status === 'success'">

    <BaseHero
      :title="services?.data?.banner?.title"
      :subtitle="services?.data?.banner?.description"
      :bgImage="services?.data?.banner?.image"
    />

    <div class="py-22">
      <ServicesList :services="services?.data?.our_services" />
    </div>
  </template>
</template>

<script setup lang="ts">
const { locale } = useI18n();
const { data: services, status, error } = await useAsyncData("services",
  () => useGlobalFetch("/preview/our-services"),
    { watch: [locale] }
);
watch(services, (newVal) => {
  if (newVal?.data?.banner) {
    useDynamicMeta({
      description: newVal.data.banner.description,
      image: newVal.data.banner.image,
    })
  }
})
</script>
