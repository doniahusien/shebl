<template>
  <div class="bg-mist-white">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup>
const { metaTags } = useMetaTags()

useHead(metaTags)
</script>
