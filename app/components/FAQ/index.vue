<template>

   <div
    class="relative bg-cover bg-[url('/images/header4.jpg')] bg-center bg-no-repeat container mx-auto rounded-4xl overflow-hidden"
    >
    <div class="overlay"></div>
   <div
      class="relative z-20 flex flex-col items-center text-center w-full px-10 md:px-24 py-20"
    >
      <div
        class="flex flex-row justify-between items-center w-full gap-6 mb-10"
      >
        <h2 class="text-white font-ya text-2xl md:text-4xl">
          {{ $t('faq.title') }}
        </h2>

        <NuxtLink to="/faq">
          <BaseButton
            :text="$t('faq.view_all')"
            classes="rounded-4xl bg-faded-white backdrop-blur-md"
          />
        </NuxtLink>
      </div>

        <FAQAccordion :faq="faq" />
    </div>
  </div>
</template>

<script setup>
const { t, locale } = useI18n();
defineProps({
  faq: {
    type: Array,
        default: () => ([])
  }
})
</script>
