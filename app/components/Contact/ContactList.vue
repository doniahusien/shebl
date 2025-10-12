<template>
  <div class="grid grid-cols-1 md:grid-cols-2 mt-10 gap-5">
    <ContactItem
      v-for="(item, i) in contactItems"
      :key="i"
      :value="item.value"
      :src-img="`/icons/${item.icon}.svg`"
    />
  </div>
</template>

<script setup>
const { t } = useI18n()

const contactItems = ref([])

onMounted(() => {
  const base = 'contact.info'
  const indices = [0, 1, 2, 3]

  contactItems.value = indices.map((i) => ({
    value: t(`${base}[${i}].value`),
    icon: t(`${base}[${i}].icon`),
  }))
})
</script>
