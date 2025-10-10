<script setup lang="ts">
const {isDir}=useDir();
</script>

<template>
  <section
    :class="['min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center',
      isDir == 'rtl' ? 'justify-end text-right': 'justify-start text-left']"
    style="background-image: url('/header1.jpg')"
  >
   
    <div
      class=" z-10 flex flex-col gap-8 px-12 max-w-5xl"
    >
      <BaseSubTitle :title="$t('hero.badge')" :showIcon="true" />
      <BaseTitle :title="$t('hero.title')" />
      <BaseSubTitle :title="$t('hero.description')" />

      <div :class="['flex items-center gap-2 md:gap-4 mt-8', isDir == 'rtl' ? ' justify-end ': 'justify-start']">
        <BaseSubTitle :title="$t('hero.note')" />
        <BaseButton :text="$t('hero.button')"/>
      </div>
    </div>
  </section>
</template>