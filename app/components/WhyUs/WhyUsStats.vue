<template>
  <div class="flex flex-wrap justify-center items-center gap-18 text-center">
    <div
      v-for="(item, index) in features"
      :key="item.id || index"
      class="flex flex-col items-center relative"
    >
      <div class="relative inline-block">
        <h3 class="text-6xl font-bold text-gold">
          {{ item.value }}
        </h3>

        <BaseIcon
          :src="item.icon"
          wrapperClass="w-8 h-8 bg-gray absolute -bottom-4 -right-3 backdrop-blur-md"
          iconClass="w-5 h-5"
        />
      </div>

      <BaseParagraph
        :title="item.key"
        classes="text-sm mt-5 text-soft-gray text-center"
      />
    </div>
  </div>
</template>

<script setup>
defineProps({
  features: {
    type: Array,
    required: true,
  },
});
</script>
