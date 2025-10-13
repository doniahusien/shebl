<template>
  <div
    :class="[
      'flex items-center justify-center rounded-full transition-transform duration-300',
      isRotate && isArrow ? 'rotate-180' : '',
      wrapperClass,
    ]"
  >
    <!-- isRotate ? 'rotate-180' : '', -->
    <NuxtImg :src="src" :alt="alt" :class="['object-contain', iconClass]" />
  </div>
</template>

<script setup>
import { watchEffect } from "vue";

let isRotate = ref(false);

onMounted(() => {
  isRotate.value = document.dir == "ltr";
});
/* 
watch(document.dir , (newVal) => {
  isRotate.value = newVal == 'ltr'
}) */
watchEffect(() => {
  isRotate.value = document.dir == "ltr";
});

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
  isArrow: {
    type: Boolean,
    default: false,
  },
});
</script>
