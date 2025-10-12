<template>
  <ul class="flex gap-16 font-din">
    <li v-for="item in items" :key="item.to">
      <NuxtLink :to="item.to">
        {{ item.label }}
      </NuxtLink>
    </li>
  </ul>
</template>
<script setup>

const items = [
  { label: $t("nav.contact"), to: "/contact" },
  { label: $t("nav.common"), to: "/faq" },
  { label: $t("nav.services"), to: "/services" },
  { label: $t("nav.about"), to: "/about" },
];
</script>
