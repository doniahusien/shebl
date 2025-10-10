<template>
<nav class="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-15 py-5 font-din bg-nav/50 backdrop-blur-md">
    <button @click="toggleLocale" class="flex items-center gap-1">
      <span>{{ locale.value === "en" ? "AR" : "EN" }}</span>
      <NuxtImg src="/icons/langIcon.svg"  alt="lang" class="w-5"/>
    </button>
    <ul class="flex gap-10">
      <li v-for="item in items" :key="item.to">
        <NuxtLink :to="item.to">
          {{ item.label }}
        </NuxtLink>
      </li>
    </ul>
    <div>
      <Logo />
    </div>
  </nav>
</template>

<script setup>
const { locale, setLocale } = useI18n();
const toggleLocale = () => setLocale(locale.value === "en" ? "ar" : "en");

const items = [
  { label: $t("nav.contact"), to: "/contact" },
  { label: $t("nav.common"), to: "/faq" },
  { label: $t("nav.services"), to: "/services" },
  { label: $t("nav.about"), to: "/about" },
];
</script>
