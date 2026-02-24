<template>
  <NuxtLink to="/" class="flex items-center justify-center">
    <NuxtImg quality="70" src="/images/logo.svg" alt="svg" :class="[classes]" />
  </NuxtLink>
</template>
<script setup>
defineProps({
    classes: {
        type: String,
        default:"w-10 md:w-14 "
    }
})

</script>