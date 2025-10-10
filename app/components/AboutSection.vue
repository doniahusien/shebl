<script setup lang="ts">
const {isDir} =useDir();
</script>

<template>
  <section
    :class="['flex flex-wrap-reverse md:flex-nowrap items-center px-12 bg-secondary-200 relative pt-30 md:pt-0',isDir == 'rtl' ? 'justify-end text-right': 'flex-row-reverse justify-start text-left']"
  >
    <div
      :class="['relative w-[955px] md:translate-y-50 md:mb-50 h-[558px]',isDir == 'rtl' ? ' md:-translate-x-40':'md:translate-x-10']"
    >
      <NuxtImg
        format="webp"
        quality="50"
        src="/images/aboutImg.svg"
        alt="Decorative Frame"
        class="object-contain w-full h-full"
      />
    </div>

    <div :class="['flex flex-col flex-wrap gap-5', isDir == 'rtl' ? 'items-end' :'items-start' ] ">
      <BaseSectionTitle :title="$t('about.title')" />
      <BaseSubTitle :title="$t('about.description')" />

      <div class="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-4 mt-10">
        <BaseSubTitle
          v-for="key in Object.keys($tm('about.features'))"
          :key="key"
          :title="$t(`about.features.${key}`)"
          color="primary-100"
          :showIcon="true"
        />
      </div>
      <LegalServices />
      <BaseButton :text="$t('about.button')" class="w-36" />
    </div>
  </section>
</template>
