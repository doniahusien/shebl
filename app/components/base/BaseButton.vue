<template>
    <button
          class="bg-btns font-din rounded-xl px-2 py-2 w-40 md:w-auto md:rounded-4xl md:px-5 md:py-4 flex items-center justify-center gap-2 text-primary"
        >
          
          <NuxtImg src="/icons/arrow-left.svg" alt="arrow" class="w-5" />
          {{text}}
        </button>
</template>
<script setup>
defineProps({
    text: {
        type: String,
        required:false
    }
})
</script>