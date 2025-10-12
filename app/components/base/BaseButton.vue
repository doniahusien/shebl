<template>
  <button
    :class="[
      'font-din rounded-xl px-2 py-2 w-40 md:w-auto md:rounded-4xl md:px-5 md:py-4 flex items-center justify-center gap-2 ',
      classes,
    ]"
  > 
  {{ text }}
    <BaseIcon
      src="/icons/arrow-left.svg"
      wrapperClass="w-8 h-8 bg-mist-white/30"
      iconClass="w-3 h-3"
    />

   
  </button>
</template>
<script setup>
defineProps({
  text: {
    type: String,
    required: false,
  },
  classes: {
    type: String,
    default: "text-mist-white bg-btns text-xl",
  },
});
</script>
