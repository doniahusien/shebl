<template>
  <div
    class="flex flex-row w-full md:w-full h-full self-start justify-between pt-10 gap-20 md:gap-50 md:py-10 pb-20 items-center"
  >
    <div class="flex flex-col gap-2 justify-center items-center">
      <BaseHeading
        :title="$t('contact.company_name')"
        classes="text-dark-gray text-4xl"
      />
      <BaseParagraph :title="$t('contact.company_subtitle')" classes="text-soft-gray" />
      <ContactList />
    </div>
    <div :class="['hidden md:block relative -bottom-20 overflow-hidden w-1/2 h-auto']">
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
