<script setup>
const props = defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
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
  <div v-if="props.loading">
    <BaseSkeleton type="hero" />
  </div>
  <div
    v-else
    class="relative h-100 md:min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
    :style="{ backgroundImage: `url('${bgImage || '/images/header2.jpg'}')` }"
  >
    <div class="overlay"></div>
    <div class="relative z-10 container px-6 lg:px-2 mx-auto space-y-5 text-center">
      <h2 class="text-white text-3xl md:text-7xl">
        {{ title }}
      </h2>
      <p class="text-silver-gray text-sm md:text-lg text-center">{{ subtitle }}</p>
    </div>
  </div>
</template>
