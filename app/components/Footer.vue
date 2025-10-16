<template>
  <footer
    class="relative px-5 py-16 gap-10 text-white bg-cover bg-center bg-[url('/images/header4.jpg')]"
  >
    <div class="absolute inset-0 bg-[#001C34E5] z-[1]"></div>
    <UContainer class="flex flex-col gap-4 relative z-[2]">
      <div class="flex flex-col md:flex-row md:items-center gap-1">
        <UILogo classes="w-16 h-16 md:w-28 md:h-28" />
        <div class="flex flex-col max-w-md">
          <h2 class="text-2xl font-din font-bold">{{ $t("footer.title") }}</h2>
          <p class="text-sm text-light-gray">
            {{ data.data.footer_description }}
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
          <NuxtLink
            v-for="(social, index) in contactItems"
            :key="index"
            :to="social.value"
            class="flex justify-center items-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <BaseIcon
              :src="social.icon"
              wrapperClass="w-8 h-8 rotate-0 "
              iconClass="w-5 h-5"
            />
          </NuxtLink>
        </div>
      </div>
    </UContainer>
  </footer>
</template>

<script setup>
/* const socialLinks = [
  { icon: "/icons/whats.svg", href: "#" },
  { icon: "/icons/x.svg", href: "#" },
  { icon: "/icons/insta.svg", href: "#" },
  { icon: "/icons/face.svg", href: "#" },
];
 */
const { data, pending, error } = await useAsyncData("data", () =>
  useGlobalFetch("/preview")
);
const { data: info } = await useAsyncData("info", () =>
  useGlobalFetch("/preview/social")
);

const contactItems = computed(() => {
  const items = info.value?.data || []

  const map = {
    whatsapp: "/icons/whats.svg",
    phone: "/icons/whats.svg", 
    x: "/icons/x.svg",
    instagram: "/icons/insta.svg",
    facebook: "/icons/face.svg",
  }

  return items
    .filter((item) => Object.keys(map).includes(item.key))
    .map((item) => {
      let value = item.value

      if (item.key === "whatsapp" || item.key === "phone") {
        const phone = value.replace(/\D/g, "")
        value = `https://wa.me/${phone}`
      }

      return {
        value,
        icon: map[item.key],
      }
    })
})



</script>

<style scoped>
.text-banner-100 {
  color: #c8d1e0;
}
</style>
