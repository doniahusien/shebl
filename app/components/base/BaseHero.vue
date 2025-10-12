<script setup>

const props = defineProps({
  bgImage: {
    type: String,
    required: true,
  },
 
  title: {
    type: String,
    required: true,
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
  <BaseOverlayImage
    :srcImg="`${bgImage} w-full ${height}`"
    :classes="`bg-banner ${classes}`"
  >
    <div class="flex flex-col justify-center items-center pt-50 text-center">
      <BaseHeading :title="title" classes="text-white text-6xl md:text-7xl" />
      <BaseParagraph
        v-if="subtitle"
        :title="subtitle"
        classes="text-silver-gray text-base flex items-center justify-center text-center w-full md:w-2/3 font-din mt-4"
      />
    </div>
  </BaseOverlayImage>
</template>
