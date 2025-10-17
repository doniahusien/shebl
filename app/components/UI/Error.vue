<template>
     <div class="text-center py-50 text-red-600">
    <p>{{ error.message }}</p>
  </div>
</template>
<script setup>
defineProps({
    error: {
        type:Object
    }
})
</script>
