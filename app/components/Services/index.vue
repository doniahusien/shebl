<template>
  <section class="flex flex-col py-30 bg-mist-white">
    <div :class="['flex flex-col gap-2 mb-10 px-10 md:px-24']">
      <BaseHeading :title="services.title" classes="text-black text-3xl md:text-4xl" />
      <div class="w-3/4">
        <BaseParagraph
          :title="services.description"
          classes="text-soft-gray md:text-base"
        />
      </div>
    </div>

    <ServicesList :services="features" />
  </section>
</template>

<script setup>
const { t } = useI18n();

defineProps({
  services: {
    type: Object,
  },
  features: {
    type: Array,
  },
});
</script>
