<script setup>
defineProps({
  title: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <h2 class="text-primary-100 font-ya text-4xl lg:text-3xl">
    {{ title }}
  </h2>
</template>
