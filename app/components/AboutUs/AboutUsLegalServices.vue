<template>
  <div class="container mx-auto px-4">
    <div class="flex gap-5 items-center">
      <div class="flex -space-x-3">
        <NuxtImg
          v-for="(image, i) in images"
          :key="i"
          :src="image"
          alt="legal"
          width="48"
          height="48"
          class="rounded-full border-2 border-white shadow object-cover relative z-[i]"
          quality="70"
        />
      </div>

      <p class="text-soft-gray text-base ml-4">
        {{ $t("about.footer") }}
      </p>
    </div>
  </div>
</template>

<script setup>
const images = [
  "/images/legal1.png",
  "/images/legal2.png",
  "/images/legal3.png",
];
</script>
