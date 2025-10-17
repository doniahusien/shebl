<template>
  <button
    class="flex justify-center items-center gap-1 cursor-pointer"
  >
    <NuxtImg src="/icons/langIcon.svg" alt="lang" class="w-5" />
    <NuxtLink :to="switchPath">
      {{ t(`locale.${locale}`) }}
    </NuxtLink>
  </button>
</template>
<script setup>
const { locale,t, setLocale } = useI18n();
const switchLocalePath = useSwitchLocalePath()
const targetLocale = computed(() => locale.value === 'ar' ? 'en' : 'ar')
const switchPath = computed(() => switchLocalePath(targetLocale.value))
/* const toggleLocale = () => setLocale(locale.value === "en" ? "ar" : "en"); */
</script>
