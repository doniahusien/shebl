<template>
  <div
    :class="[
      'flex items-center justify-center rounded-full transition-transform duration-300',
      isRotate && isArrow ? 'rotate-180' : '',
      wrapperClass,
    ]"
  >
    <NuxtImg :src="src" :alt="alt" :class="['object-contain', iconClass]" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  src: String,
  alt: { type: String, default: "icon" },
  wrapperClass: { type: String, default: "" },
  iconClass: { type: String, default: "" },
  isArrow: { type: Boolean, default: false },
});

const isRotate = ref(false);

onMounted(() => {
  if (typeof document !== "undefined") {
    isRotate.value = document.dir === "ltr";
    const observer = new MutationObserver(() => {
      isRotate.value = document.dir === "ltr";
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["dir"] });
  }
});
</script>
