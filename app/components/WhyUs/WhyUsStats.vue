<template>
  <div class="flex flex-wrap justify-center items-center gap-18 text-center">
    <div
      v-for="(item, index) in features"
      :key="item.id || index"
      class="flex flex-col items-center relative"
    >
      <div class="relative">
        <h3 class="text-6xl font-bold text-gold">
          {{ item.value }}
        </h3>

        <div class="absolute bottom-0 right-0 translate-x-5 translate-y-1">
          <BaseIcon
            :src="item.icon"
            wrapperClass="w-8 h-8 bg-gray/70 backdrop-blur-md rounded-full flex justify-center items-center"
            iconClass="w-5 h-5"
          />
        </div>
      </div>

      <p class="text-sm mt-5 text-soft-gray text-center">{{ item.key }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  features: Array,
});
</script>
