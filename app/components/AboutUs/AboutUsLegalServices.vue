<template>
  <div :class="['flex items-center gap-3 py-10 flex-row']">
    <!--     <div class="flex -space-x-3">
      <NuxtImg
        v-for="(image, i) in images"
        :key="i"
        :src="image"
        alt="legal"
        width="48"
        height="48"
        class="rounded-full border-2 border-white shadow object-cover"
        quality="70"
      />
    </div> -->
    <UAvatarGroup size="xl">
      <UAvatar v-for="(image, i) in images" :src="image" :key="i" :alt="`image${i}`" />
    </UAvatarGroup>
    <BaseParagraph :title="$t('about.footer')" classes="text-soft-gray text-base" />
  </div>
</template>

<script setup>
const images = ["/images/legal1.png", "/images/legal2.png", "/images/legal3.png"];
</script>
