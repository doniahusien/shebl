<template>
  <ul class=" hidden md:flex gap-16 font-din">
    <li v-for="item in items" :key="item.to" class="hover:text-gold">
      <NuxtLink :to="item.to">
        {{ item.label }}
      </NuxtLink>
    </li>
  </ul>

  <div v-if="isOpen" class=" py-5 px-5 text-2xl absolute top-full left-0 bg-white text-black shadow-lg rounded min-h-screen w-full z-50 font-din">
   <ul>
    <li v-for="item in items" :key="item.to" class="flex gap-20 hover:text-gold ">
      <NuxtLink :to="item.to" class="py-4">
        {{ item.label }}
      </NuxtLink>
    </li>
  </ul>
   <div class="flex flex-col justify-center py-5 gap-5">
      <UILocaleSwitcher />
      <BaseButton :text="$t('hero.button')" />
    </div>
  </div>
</template>
<script setup>

defineProps({
  isOpen: {
    type: Boolean,
    default:true
  }
})
const items = [
  { label: $t("nav.contact"), to: "/contact" },
  { label: $t("nav.common"), to: "/faq" },
  { label: $t("nav.services"), to: "/services" },
  { label: $t("nav.about"), to: "/about" },
];
</script>
