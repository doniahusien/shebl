<template>
  <div
    class="relative container mx-auto p-11 md:p-20 bg-cover bg-center bg-no-repeat flex items-center rounded-3xl overflow-hidden"
    :style="{ backgroundImage: `url('${why.image || '/images/header2.jpg'}')` }"
  >
    <div class="overlay"></div>

    <div class="relative z-20 space-y-10 w-full text-center">
      <h2 class="text-4xl font-bold">{{ why.title }}</h2>
      <p class="max-w-2xl mx-auto text-center text-base text-light-gray">
        {{ why.description }}
      </p>

      <WhyUsStats :features="why.features" />

      <div class="mt-14 flex justify-center">
        <BaseButton
          :text="t('whyUs.button')"
          class="bg-btns text-white px-6 py-3 rounded-full transition-all duration-300"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const { t } = useI18n();

defineProps({
  why: {
    type: Object,
    required: false,
    default: () => ({}),
  },
});
</script>
