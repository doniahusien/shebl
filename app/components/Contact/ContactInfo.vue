<template>
  <div
    class="grid grid-cols-1 gap-5 md:grid-cols-2 items-center container mx-auto"
  >
    <div class="order-2 md:order-1 flex w-full flex-col gap-2 justify-center items-center">
      <h3
        class="text-dark-gray font-bold font-ya text-4xl">
        {{ $t('contact.company_name') }}
      </h3>
      <p class="text-soft-gray">
        {{ $t('contact.company_subtitle') }}</p> 
      <ContactList  />
    </div>
    <div class="order-1 md:order-2">
      <NuxtImg
        format="webp"
        quality="50"
        src="/images/lawAbout.svg"
        alt="Frame"
        class="object-contain w-full h-full"
      />
    </div>
  </div>
</template>
<script setup>
const { t } = useI18n();
</script>
