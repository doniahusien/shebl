<script setup>
const {t}= useI18n()
</script>

<template>

    <BaseHero :title="t('faq.title')"
    :subtitle="t('faq.subtitle')"
    bgImage="bg-[url('/images/header4.jpg')]"
  />
    <div class="text-black p-20"> 
      <FAQAccordion 
      :indices="[0,1,2,3,4,5,6]"
      contenStyle="text-black" 
      labelStyle="text-black"/>
    </div>
 
</template>