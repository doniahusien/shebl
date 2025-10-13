<template>
  <button
    :class="[
      'font-din cursor-pointer flex items-center justify-center gap-2 rounded-xl px-2 py-2 w-full sm:w-40 md:w-auto md:rounded-4xl md:px-5 md:py-3 flex-wrap text-center',
      classes,
    ]"
  > 
    <span
      class="flex items-center mb-2 align-middle leading-none text-center text-base sm:text-lg md:text-xl"
    >
      {{ text }}
    </span>

    <BaseIcon
    isArrow="true"
      src="/icons/arrow-left.svg"
      wrapperClass=" w-6 h-6 sm:w-8 sm:h-8 bg-mist-white/30 flex items-center justify-center"
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
