<script setup>
const { t } = useI18n();
defineProps({
  info:{
    type: Object,
    default: () => ({})
  }
})
</script>

<template>
  <section class="flex flex-col flex-wrap md:flex-nowrap pt-20 px-5 md:px-10 gap-5">
    <ContactHeading :info="info"/>
    <ContactInfo/>
  </section>
</template>
