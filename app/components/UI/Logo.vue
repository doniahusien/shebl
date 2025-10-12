<template>
  <NuxtLink to="/" class="flex items-center justify-center">
    <NuxtImg quality="70" src="/images/logo.svg" alt="svg" :class="[classes]" />
  </NuxtLink>
</template>
<script setup>
defineProps({
    classes: {
        type: String,
        default:"w-12 w-14"
    }
})

</script>