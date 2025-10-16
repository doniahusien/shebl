<template>
  <BaseHero
    :title="services.data.banner.title"
    :subtitle="services.data.banner.description"
    :bgImage="services.data.banner.image"
  />

  <div class="py-22">
    <ServicesList
      :services="services.data.our_services"
    />
 
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

const { data: services, pending, error } = await useAsyncData('services', () =>
  useGlobalFetch('/preview/our-services')
)

</script>
