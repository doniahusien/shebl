<template>
  <button
    @click="toggleLocale"
    class="flex justify-center items-center gap-1 cursor-pointer"
  >
    <NuxtImg src="/icons/langIcon.svg" alt="lang" class="w-5" />
    <span>{{ locale == "en" ? "AR" : "EN" }}</span>
  </button>
</template>
<script setup>
const { locale, setLocale } = useI18n();
const toggleLocale = () => setLocale(locale.value === "en" ? "ar" : "en");
</script>
