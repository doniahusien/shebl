<script setup>
const { t, tm, locale } = useI18n();
defineProps({
  showBtn:{
    type: Boolean,
    default:true

  }
})
</script>

<template>
  <section
    :class="[
      'flex flex-wrap-reverse md:flex-nowrap items-center px-5 md:px-12 bg-mist-white relative py-10 md:pt-0',
    ]"
  >
    <div class="flex flex-col flex-wrap gap-2 md:gap-5">
      <BaseHeading :title="$t('about.title')" classes="text-black text-4xl" />
      <BaseParagraph
        :title="$t('about.description')"
        classes="text-base text-soft-gray"
      />

      <AboutUsFeatures/>
      <AboutUsLegalServices />
      <div v-if="showBtn">
        <BaseButton :text="$t('about.button')" />
      </div>
    </div>
    <div :class="['relative w-[955px] md:translate-y-50 md:mb-50 h-[558px]']">
      <NuxtImg
        format="webp"
        quality="40"
        src="/images/aboutImg.svg"
        alt="Decorative Frame"
        class="object-contain w-full h-full"
      />
    </div>
  </section>
</template>
