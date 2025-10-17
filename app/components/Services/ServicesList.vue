<template>
  <div class="w-[90%] h-full mx-auto">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <ServicesCard
        v-for="(service, index) in services"
        :key="service.id || index"
        :title="service.title"
        :description="service.description"
        :icon="service.icon"
        :img="service.background"
        :class="[index === 3 ? 'lg:col-span-2' : '', 'w-full']"
      />
    </div>
  </div>
</template>

<script setup>
defineProps({
  services: {
    type: Array,
    required: true,
        default: () => ([])
  }
})
</script>
