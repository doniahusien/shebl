<template>
  <section class="relative flex flex-col md:flex-row justify-center items-center py-20 bg-mist-white">
    <NuxtImg
      src="/images/vision.svg"
      quality="80"
      alt="Vision"
      class="w-[300px] md:w-[560px] max-w-full"
    />

    <div
      class="md:absolute bottom-[150px] left-1/3 md:-translate-x-1/2 backdrop-blur-md bg-faded rounded-2xl shadow-md p-10 w-full md:w-[480px] text-base text-center "
    >
     <span class=" font-serif absolute right-5 top-5 text-gold opacity-60 text-5xl select-none"
        >”</span
      >

      <p class="text-base text-gray-darken font-din ">
        {{ $t("vision.description") }}
      </p>
 
       <span class=" font-serif absolute left-4 bottom-0 text-gold opacity-60 text-5xl select-none"
        >“</span
      >
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n();
</script>
