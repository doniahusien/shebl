<template>
  <BaseOverlayImage
    :srcImg="why.image"
    classes="bg-navy-overlay rounded-3xl"
  >
    <div class="relative z-20 space-y-10 container mx-auto text-center">
      <BaseHeading :title="why.title" classes="text-4xl" />
      <BaseParagraph
        :title="why.description"
        classes="max-w-2xl mx-auto text-center text-base text-light-gray"
      />

      <WhyUsStats :features="why.features" />

      <div class="mt-14 flex justify-center">
        <BaseButton
          :text="t('whyUs.button')"
          class="bg-btns text-white font-din px-6 py-3 rounded-full transition-all duration-300"
        />
      </div>
    </div>
  </BaseOverlayImage>

<!--   <div v-else class="text-center py-10 text-gray-500">
    Loading section...
  </div> -->
</template>

<script setup>
const { t } = useI18n();

defineProps({
  why: {
    type: Object,
    required: false, 
  },
});
</script>
