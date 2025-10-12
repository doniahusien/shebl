<template>
  <nav
    :class="['fixed top-0 left-0 w-full z-50 flex items-center  justify-between px-15 py-5',
isScrolled?'bg-white text-medium-gray': 'bg-nav-bg backdrop-blur-md text-nav-link'
]"
  >
    <UILogo />
    <NavbarNavLinks/>
    <div class="flex justify- isSccenter gap-5">
      <UILocaleSwitcher />
      <BaseButton v-if="isScrolled" :text="$t('hero.button')" />
    </div>
  </nav>
</template>

<script setup>
const isScrolled = ref(false);
const handleScroll = () => {
  isScrolled.value = window.scrollY > 700;
};
onMounted(() => window.addEventListener("scroll", handleScroll));
onUnmounted(() => window.removeEventListener("scroll", handleScroll));
</script>
