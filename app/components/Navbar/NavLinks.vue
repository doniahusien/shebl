<template>
  <ul class="hidden md:flex gap-16 font-din">
    <li v-for="item in items" :key="item.to" class="hover:text-gold transition-colors duration-300">
      <NuxtLink 
        :to="item.to"
        :class="isActiveLink(item.to) && 'text-gold font-bold border-b-2 border-gold pb-1'"
      >
        {{ item.label }}
      </NuxtLink>
    </li>
  </ul>

  <div
    v-if="isOpen"
    class="py-5 px-5 text-2xl absolute top-full left-0 bg-white text-black shadow-lg rounded min-h-screen w-full z-50 font-din"
  >
    <ul>
      <li
        v-for="item in items"
        :key="item.to"
        class="flex gap-20 hover:text-gold transition-colors duration-300"
      >
        <NuxtLink 
          :to="item.to" 
          :class="isActiveLink(item.to) && 'text-gold font-bold border-l-4 border-gold pl-4'"
          class="py-4"
        >
          {{ item.label }}
        </NuxtLink>
      </li>
    </ul>

    <div class="flex flex-col justify-center py-5 gap-5">
      <UILocaleSwitcher />
      <BaseButton :text="t('hero.button')" />
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'      
import { useLocalePath } from '#i18n'     

const route = useRoute()

defineProps({
  isOpen: {
    type: Boolean,
    default: true,
  },
})

const { t } = useI18n()
const localePath = useLocalePath()

const items = computed(() => [
  { label: t('nav.contact'), to: localePath('/contact') },
  { label: t('nav.common'), to: localePath('/faq') },
  { label: t('nav.services'), to: localePath('/services') },
  { label: t('nav.about'), to: localePath('/about') },
])

const isActiveLink = (linkPath) => {
  return route.path === linkPath
}
</script>
