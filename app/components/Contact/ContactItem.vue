<template>
  <div
    class="flex items-center text-sm font-semibold p-3 w-[280px] shadow-sm text-gray-basic gap-2 rounded-2xl bg-off-white/20"
  >
    <BaseIcon iconClass="w-5 h-5" :src="srcImg" :alt="value" />
    <span>{{ value }}</span>
  </div>
</template>

<script setup>
defineProps({
  value: {
    type: String,
    required: true,
  },
  srcImg: {
    type: String,
    required: true,
  },
})
</script>
