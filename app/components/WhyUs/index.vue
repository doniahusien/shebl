<template>
  <div v-if="props.loading">
    <BaseSkeleton type="card" />
  </div>

  <div v-else
    class="relative container mx-auto px-6 lg:px-2 py-11 md:py-20 bg-cover bg-center bg-no-repeat flex items-center rounded-3xl overflow-hidden"
    :style="{ backgroundImage: `url('${props.why.image || '/images/header2.jpg'}')` }"
  >
    <div class="overlay"></div>

    <div class="relative z-20 space-y-10 w-full text-center">
      <h2 class="text-4xl font-bold">{{ props.why.title }}</h2>
      <p class="max-w-2xl mx-auto text-center text-base text-light-gray">
        {{ props.why.description }}
      </p>

      <WhyUsStats :features="props.why.features" />

      <div class="mt-14 flex justify-center">
        <BaseButton
          :text="t('whyUs.button')"
          class="bg-btns text-white px-3 py-3 rounded-full transition-all duration-300"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const { t } = useI18n();

const props = defineProps({
  why: {
    type: Object,
    required: false,
    default: () => ({}),
  },
  loading: {
    type: Boolean,
    default: false,
  },
});
</script>
