<script setup>
const { t } = useI18n()
defineProps({
  info:{
    type:Object
  }
})
</script>
<template>
  <div>
    <BaseHeading :title="info.title" />
    <BaseParagraph :title="info.description" classes="text-soft-gray" />
  </div>
</template>

