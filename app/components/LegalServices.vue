<template>
  <div :class="['flex items-center gap-3 py-10',isDir=='ltr'? 'flex-row-reverse':'flex-row']" >
    <BaseSubTitle :title="$t('about.footer')" />
    <div class="flex -space-x-3">
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
    </div>
  </div>
</template>

<script setup>
const { isDir } = useDir();
const images = [
  '/images/legal1.png',
  '/images/legal2.png',
  '/images/legal3.png'
];
</script>
