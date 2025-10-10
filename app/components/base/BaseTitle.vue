<template>
    <h2 class=" text-primary font-ya text-2xl font-bold  md:text-6xl lg:text-7xl">
    {{title}}  
    </h2>
</template>
<script setup>
defineProps({
  title: {
    type: String,
    required: false,
  }
});
</script>