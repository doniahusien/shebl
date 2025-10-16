<script setup>
const { t } = useI18n();
defineProps({
  hero: {
    type: Object,
  }
})
</script>

<template>
  <!--  <section
    :class="['min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center']"
    style="background-image: url('/header1.jpg')"
  > -->
  <BaseOverlayImage
    :srcImg="hero.image"
    bgClass=" w-full min-h-screen pt-32 md:pt-50"
    classes="bg-banner "
  >
    <div class="z-10 flex flex-col gap-4 md:gap-8 px-5 md:px-12 max-w-5xl">
      <BaseParagraph
        :title="$t('hero.badge')"
        classes="text-pale-gray text-sm md:text-base  "
        :showIcon="true"
      />
      <BaseHeading
        :title="hero.title"
        classes="text-mist-white text-2xl md:text-6xl lg:text-7xl"
      />
      <BaseParagraph
        :title="hero.description"
        classes="text-silver-gray text-base md:text-xl"
      />

      <div :class="['flex flex-wrap items-center gap-2 md:gap-4 mt-8']">
        <BaseButton :text="$t('hero.button')" />
        <BaseParagraph
          :title="$t('hero.note')"
          classes="text-soft-gray text-sm md:text-base"
        />
      </div>
    </div>
  </BaseOverlayImage>
</template>
