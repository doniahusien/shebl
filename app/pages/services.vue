<template>
  <UILoader v-if="status === 'pending'" />

 <UINotFound v-else-if="error?.statusCode === 404" />
  <UIBackError v-else-if="error?.statusCode === 500" />

  <template v-else-if="status === 'success'">
  <div class="space-y-22 pb-10">
    <BaseHero
      :title="services?.data?.banner?.title"
      :subtitle="services?.data?.banner?.description"
      :bgImage="services?.data?.banner?.image"
    />
      <ServicesList :services="services?.data?.our_services" />
  </div> 
  </template>
</template>

<script setup lang="ts">
const { locale } = useI18n();

const { data: services, status, error } = await useAsyncData<ApiResponse<ServicesResponse>>(
  "services",
  () => useGlobalFetch<ApiResponse<ServicesResponse>>("/preview/our-services"),
  { watch: [locale] }
);

watch(services, (newVal) => {
  if (newVal?.data?.banner) {
    useDynamicMeta({
      description: newVal.data.banner.description,
      image: newVal.data.banner.image,
    });
  }
});
</script>

