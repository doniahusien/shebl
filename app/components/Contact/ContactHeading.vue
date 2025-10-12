<script setup>
const { t } = useI18n()
</script>
<template>
  <div>
    <BaseHeading :title="$t('contact.title')" />
    <BaseParagraph :title="$t('contact.description')" classes="text-soft-gray" />
  </div>
</template>

