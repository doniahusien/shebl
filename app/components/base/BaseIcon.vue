<template>
  <div :class="['flex items-center justify-center rounded-full', wrapperClass]">
    <NuxtImg :src="src" :alt="alt" :class="['object-contain', iconClass]" />
  </div>
</template>

<script setup>
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: "icon",
  },
  wrapperClass: {
    type: String,
    default: "",
  },
  iconClass: {
    type: String,
    default: "",
  },
});
</script>
