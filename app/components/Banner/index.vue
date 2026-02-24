<script setup>
const { t } = useI18n();

const props = defineProps({
  hero: {
    type: Object,
    default: () => ({}),
  },
  loading: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div v-if="props.loading">
    <BaseSkeleton type="hero" />
  </div>

  <Transition v-else name="fade-up" mode="out-in">
    <div
      v-if="props.hero"
      class="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
      :style="{ backgroundImage: `url('${props.hero?.image || '/images/header2.jpg'}')` }"
    >
      <div class="overlay"></div>

      <div class="container  px-6 lg:px-2 relative mx-auto z-10">
        <div class="flex flex-col gap-4 md:gap-8 text-white">
          <p class="flex items-center gap-1 text-pale-gray text-sm md:text-base">
            <NuxtImg src="/icons/awardIcon.svg" class="w-10" />
            <span>{{ $t("hero.badge") }}</span>
          </p>

          <h1
            class="text-mist-white text-3xl md:text-6xl lg:text-7xl font-bold mt-3"
          >
            {{ props.hero.title }}
          </h1>

          <p class="text-silver-gray text-base md:text-xl mt-4">
            {{ props.hero.description }}
          </p>
          <div class="flex flex-wrap items-center gap-2 md:gap-4 mt-8">
            <BaseButton :text="$t('hero.button')" />
            <p class="text-soft-gray text-sm md:text-base">
              {{ $t("hero.note") }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
