<template>
    <p :class="['font-din flex items-center gap-1 ', `text-${ color }` ,isDir == 'rtl' ? 'justify-end': 'justify-start']">
    <span class="text-base md:text-lg font-din font-semibold">{{title}}</span>
     <NuxtImg v-if="showIcon" src="/icons/awardIcon.svg" class="w-10"/>
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
    required: false,
    default: false,
  },
  color: {
    type: String,
    required: false,
    default:  "secondary",
  },
});
const { isDir } = useDir();
</script>