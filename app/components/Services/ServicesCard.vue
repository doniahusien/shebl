<template>
  <div
    class="relative group bg-white shadow-lg rounded-3xl p-8 transition-all duration-500 overflow-hidden cursor-pointer w-full h-full hover:-translate-y-2"
  >
    <div
      class="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
      :style="{ backgroundImage: `url('/images/header2.jpg')` }"
    ></div>

    <div
      class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-60 transition-opacity duration-500 rounded-3xl"
    ></div>

    <div class="relative z-10 flex flex-col items-start gap-3">
      <NuxtImg
        v-if="icon"
        :src="icon"
        quality="70"
        alt="icon"
        class="w-16 h-16 mb-3 transition-transform duration-500 group-hover:scale-110"
      />
      <BaseHeading
        :title="title"
        classes="text-2xl text-black font-din group-hover:text-white transition-colors duration-300"
      />

      <BaseParagraph
        :title="description"
        classes="text-soft-gray text-sm group-hover:text-gray-100 transition-colors duration-300"
      />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
  },
});
</script>

<style scoped>
.group:hover {
  transform: translateY(-6px);
}
</style>
