<template>
  <section
    :class="[
      'relative p-5 md:p-20 gap-10 text-white bg-cover bg-center w-[90%] mx-auto rounded-2xl',
      srcImg,
    ]"
  >
    <div :class="['absolute inset-0 z-[1]', classes]"></div>
    <div class="relative z-[30]">
      <slot />
    </div>
  </section>
</template>

<script setup>
defineProps({
  srcImg: {
    type: String,
    required: true,
  },
  classes: {
    type: String,
    default: '',
  },
});
</script>
