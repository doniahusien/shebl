<template>
  <h2 :class="[' font-ya  font-bold',classes]">
    {{ title }}
  </h2>
</template>
<script setup>
defineProps({
  title: {
    type: String,
    required: false,
  },
  classes: {
    type: String,
    default: "text-4xl lg:text-3xl text-black",
  },
});
</script>
