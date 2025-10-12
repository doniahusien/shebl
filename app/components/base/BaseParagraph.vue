<template>
  <p
    :class="[
      'font-din flex items-center gap-1',
      classes,
    ]"
  >
      <NuxtImg v-if="showIcon" src="/icons/awardIcon.svg" class="w-10" />
    <span class="font-din">{{ title }}</span>
  </p>
</template>

<script setup>

defineProps({
  title: {
    type: String,
    required: false,
  },
  showIcon: {
    type: Boolean,
    default: false,
  },
  classes: {
    type: String,
  },
});
</script>
