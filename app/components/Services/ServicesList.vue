<template>
  <div class="container mx-auto px-4 lg:px-2 grid grid-cols-1 lg:grid-cols-3 gap-8">
    <template v-if="props.loading">
      <div v-for="n in 6" :key="n">
        <BaseSkeleton type="card2" />
      </div>
    </template>

    <template v-else>
      <ServicesCard
        v-for="(service, index) in props.services"
        :key="service.id || index"
        :title="service.title"
        :description="service.description"
        :icon="service.icon"
        :img="service.background"
        :class="[index === 3 ? 'lg:col-span-2' : '', 'w-full']"
      />
    </template>
  </div>
</template>

<script setup>
const props = defineProps({
  services: {
    type: Array,
    required: true,
    default: () => ([]),
  },
  loading: {
    type: Boolean,
    default: false,
  },
})
</script>
