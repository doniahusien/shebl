<script setup >
const { t } = useI18n();
</script>

<template>
 <!--  <section
    :class="['min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center']"
    style="background-image: url('/header1.jpg')"
  > -->
  <BaseOverlayImage
    srcImg="bg-[url('/images/header1.jpg')] w-full min-h-screen pt-50"
    classes="bg-banner "
  >
    <div class="z-10 flex flex-col gap-8 px-12 max-w-5xl">
      <BaseParagraph
        :title="$t('hero.badge')"
        classes="text-pale-gray text-base "
        :showIcon="true"
      />
      <BaseHeading
        :title="$t('hero.title')"
        classes="text-mist-white text-2xl md:text-6xl lg:text-7xl"
      />
      <BaseParagraph :title="$t('hero.description')" classes="text-silver-gray text-xl" />

      <div :class="['flex items-center gap-2 md:gap-4 mt-8']">
        <BaseButton :text="$t('hero.button')" />
        <BaseParagraph :title="$t('hero.note')" classes="text-soft-gray text-base" />
      </div>
    </div>
 </BaseOverlayImage>
</template>
