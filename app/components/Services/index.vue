<template>
  <section class="py-10 space-y-10">
    <div class="container mx-auto space-y-10">
      <div class="space-y-2">
        <h2 class="text-black text-3xl md:text-4xl">
          {{ services.title }}
        </h2>
        <div class="w-full md:w-3/4">
          <p class="text-soft-gray md:text-base">
            {{ services.description }}
          </p>
        </div>
      </div>

      <ServicesList :services="features" />
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n();

defineProps({
  services: {
    type: Object,
    default: () => ({}),
  },
  features: {
    type: Array,
    default: () => [],
  },
});
</script>
