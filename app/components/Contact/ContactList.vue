<template>
  <div class="w-full grid grid-cols-1 md:grid-cols-2 mt-10 gap-4">
    <ContactItem
      v-for="(item, i) in contactItems"
      :key="i"
      :value="item.value"
      :src-img="`/icons/${item.icon}.svg`"
    />
  </div>
</template>

<script setup>
const { locale } = useI18n();

const { data: info } = await useAsyncData("infoContact",
  () => useGlobalFetch("/preview/social"),
   { watch: [locale] } 
)

const contactItems = computed(() => {

  const items = info.value.data
  const map = {
    phone: "phone",
    email: "email",
    appoitnments: "appoitnments",
    address: "address",
  }

  return items
    .filter((item) => Object.keys(map).includes(item.key))
    .map((item) => ({
      value: item.value,
      icon: map[item.key],
    }))
})
</script>
