<template>
  <div v-if="props.loading" class="grid grid-cols-1 lg:grid-cols-2 items-center mt-10 gap-4">
    <BaseSkeleton type="feature" />
    <BaseSkeleton type="feature" />
    <BaseSkeleton type="feature" />
    <BaseSkeleton type="feature" />
  </div>
  <div v-else-if="info" class="grid grid-cols-1 lg:grid-cols-2 items-center mt-10 gap-4">
 
      <div v-for="(item, i) in contactItems"
        :key="i"
        :style="{ '--stagger-index': i }"
        class="flex items-center text-sm font-semibold p-3 shadow-sm text-gray-basic gap-2 rounded-2xl bg-off-white/20"
      >
        <BaseIcon iconClass="w-5 h-5" :src="`/icons/${item.icon}.svg`" :alt="item.value" classes="rotate-0"/>
        <span>{{ item.value }}</span>
      </div>
   
  </div> 
   
</template>

<script setup>
const { locale } = useI18n();

const props = defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
});

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
