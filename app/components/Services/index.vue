<template>
  <section class="py-10 space-y-10">
    <div class="container px-6 lg:px-2 mx-auto space-y-10">
      <div class="space-y-2">
        <h2 class="text-black text-3xl md:text-4xl">
          {{ props.services.title }}
        </h2>
        <div class="w-full md:w-3/4">
          <p class="text-soft-gray md:text-base">
            {{ props.services.description }}
          </p>
        </div>
      </div>

      <template v-if="props.loading">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <BaseSkeleton v-for="n in 6" :key="n" type="card2" />
        </div>
      </template>

      <template v-else>
        <ServicesList :services="props.features" />
      </template>
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n();

const props = defineProps({
  services: {
    type: Object,
    default: () => ({}),
  },
  features: {
    type: Array,
    default: () => [],
  },
  loading: {
    type: Boolean,
    default: false,
  },
});
</script>
