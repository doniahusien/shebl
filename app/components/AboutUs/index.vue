<script setup>
const { t, tm, locale } = useI18n();
defineProps({
  showBtn: {
    type: Boolean,
    default: true,
  },
  about: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<template>
  <section
    class="grid grid-cols-1 md:grid-cols-3 items-center container mx-auto bg-mist-white"
  >
    <div class="col-span-2 order-2 md:order-1 space-y-6">
    <h2 class="text-black text-4xl font-bold">{{ $t("about.title") }}</h2>
    <p class="text-base text-soft-gray" >{{about.description}}</p>

      <AboutUsFeatures :features="about.features" />
      <AboutUsLegalServices />
      <div v-if="showBtn">
        <NuxtLink to="/about" class="cursor-pointer">
          <BaseButton :text="$t('about.button')" />
        </NuxtLink>
      </div>
    </div>
    <div class="order-1 md:order-2">
      <NuxtImg
        format="webp"
        quality="40"
        :src="about.image"
        alt="Decorative Frame"
        class="object-contain w-full h-full"
      />
    </div>
  </section>
</template>
