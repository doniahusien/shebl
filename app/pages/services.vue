<template>
   <div v-if="status == 'pending'" class="mb-5">
    <BaseSkeleton type="hero" class-name="mb-8" />

    <div class="container mx-auto gap-4 mb-5 grid grid-cols-1 lg:grid-cols-3 px-6 lg:px-2">
      <BaseSkeleton type="card2" />
      <BaseSkeleton type="card2" />
      <BaseSkeleton type="card2" />
      <BaseSkeleton type="card2" />
      <BaseSkeleton type="card2" class="col-span-1 lg:col-span-2" />
    </div>
  </div>
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

