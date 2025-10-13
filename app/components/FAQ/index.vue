<template>
  <BaseOverlayImage
    srcImg="bg-[url('/images/header4.jpg')] p-10"
    classes="bg-navy-overlay rounded-4xl"
  >
    <div class="flex justify-between z-30 pt-5 px-0">
      <BaseHeading :title="$t('faq.title')" classes="text-white text-2xl md:text-4xl" />
      <NuxtLink to="/faq" class="cursor-pointer ">
        <BaseButton :text="$t('faq.view_all')" classes=" rounded-4xl bg-faded-white backdrop-blur-md" />
      </NuxtLink>
    </div>

    <section class="relative z-20">
      <FAQAccordion />
    </section>
  </BaseOverlayImage>
</template>

<script setup>
const { t, locale } = useI18n();
</script>
