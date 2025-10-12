<template>
  <button @click="toggleLocale" class="flex items-center gap-1">
    <span>{{ locale == "en" ? "AR" : "EN" }}</span>
    <NuxtImg src="/icons/langIcon.svg" alt="lang" class="w-5" />
  </button>
</template>
<script setup>
const { locale, setLocale } = useI18n();
const toggleLocale = () => setLocale(locale.value === "en" ? "ar" : "en");
</script>
