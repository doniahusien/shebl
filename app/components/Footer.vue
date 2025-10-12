<template>
  <footer
    class="relative px-5 py-16 gap-10 text-white bg-cover bg-center bg-[url('/images/header4.jpg')]"
  >
    <div class="absolute inset-0 bg-[#001C34E5] z-[1]"></div>
    <UContainer class="flex flex-col gap-4 relative z-[2]">
      <div class="flex flex-row md:flex-row md:items-center gap-1">
        <UILogo classes="w-28 h-28" />
        <div class="flex flex-col max-w-md">
          <h2 class="text-2xl font-din font-bold">{{ $t("footer.title") }}</h2>
          <p class="text-sm text-light-gray">
            {{ $t("footer.description") }}
          </p>
        </div>
      </div>

      <div class="border-t border-white/20 my-2"></div>

      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        <div class="flex gap-6 text-sm text-banner-100">
          <NuxtLink to="/terms" class="hover:text-gold">{{
            $t("footer.terms")
          }}</NuxtLink>
          <NuxtLink to="/privacy" class="hover:text-gold">{{
            $t("footer.privacy")
          }}</NuxtLink>
        </div>
        <div class="flex gap-4">
          <a
            v-for="(social, index) in socialLinks"
            :key="index"
            :href="social.href"
            target="_blank"
            class="flex justify-center items-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <UIcon :name="social.icon" class="w-5 h-5 text-white" />
          </a>
        </div>
      </div>
    </UContainer>
  </footer>
</template>

<script setup>
const socialLinks = [
  { icon: "i-lucide-whatsapp", href: "#" },
  { icon: "i-lucide-twitter", href: "#" },
  { icon: "i-lucide-instagram", href: "#" },
  { icon: "i-lucide-facebook", href: "#" },
];
</script>

<style scoped>
.text-gold {
  color: #d4af37;
}
.text-banner-100 {
  color: #c8d1e0;
}
</style>
