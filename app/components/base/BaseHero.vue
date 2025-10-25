<script setup>
const props = defineProps({
  bgImage: {
    type: String,
    required: true,
    default: "",
  },
  bgClass: {
    type: String,
    default: "",
  },

  title: {
    type: String,
    required: true,
    default: "",
  },
  subtitle: {
    type: String,
    default: "",
  },
  height: {
    type: String,
    default: "h-[550px]",
  },
  classes: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div
    class="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
    :style="{ backgroundImage: `url('${bgImage || '/images/header2.jpg'}')` }"
  >
    <div class="overlay"></div>
    <div class="relative z-10 container mx-auto space-y-5 text-center">
      <h2 class="text-white  text-6xl md:text-7xl">
        {{ title }}
      </h2>
      <p class="text-silver-gray text-lg text-center">{{ subtitle }}</p>
    </div>
  </div>
</template>
