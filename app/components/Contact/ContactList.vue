<template>
  <div class="grid grid-cols-1 md:grid-cols-2 mt-10 gap-10">
    <ContactItem
      v-for="(item, i) in contactItems"
      :key="i"
      :value="item.value"
      :src-img="`/icons/${item.icon}.svg`"
    />
  </div>
</template>

<script setup>
const { data: info, pending, error } = await useAsyncData("info", () =>
  useGlobalFetch("/preview/social")
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
