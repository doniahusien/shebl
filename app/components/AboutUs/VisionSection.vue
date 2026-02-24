<template>
  <div v-if="loading" class="relative gap-5 w-full container px-6 lg:px-2 mx-auto">
    <div class="flex flex-row gap-5 w-full">
      <BaseSkeleton type="img" />
      <BaseSkeleton type="" />
    </div>
  </div>
  <section v-else class="relative container px-6 lg:px-2 mx-auto">
    <NuxtImg
      :src="vision.image"
      quality="80"
      alt="Vision"
      class="object-contain w-full max-w-full"
    />

    <div
      class="md:absolute bottom-36 left-1/3 md:-translate-x-1/2 backdrop-blur-md bg-faded rounded-2xl shadow-md p-10 w-full md:w-96 text-base text-center"
    >
      <span
        class="font-serif absolute right-5 top-5 text-gold opacity-60 text-5xl select-none"
        >”</span
      >

      <p class="text-base text-gray-darken font-din">
        {{ vision.description }}
      </p>

      <span
        class="font-serif absolute left-4 bottom-0 text-gold opacity-60 text-5xl select-none"
        >“</span
      >
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n();
defineProps({
  vision: {
    type: Object,
  },
  loading: {
    type: Boolean,
    default: false,
  },
});
</script>
