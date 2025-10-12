<template>
  <section class="bg-mist-white py-16 px-2 md:px-10 text-center">
    <div class="relative bg-white rounded-xl shadow-md p-16  mx-auto overflow-hidden">
      
      <NuxtImg
        src="/images/footer.jpg"
        alt="corner image"
        class="absolute top-0 right-0 w-40 h-10 rounded-full object-cover"
      />

      <div class="flex justify-center mb-4">
        <BaseIcon
          src="/icons/highlight2.svg"
          wrapperClass="w-16 h-16"
          iconClass="w-12 h-12"
        />
      </div>

      <BaseHeading
        :title="$t('coreValues.title')"
        classes="text-3xl text-black font-bold mb-4"
      />

    
      <div class="relative max-w-3xl mx-auto">

        <span class="absolute font-serif -left-6 top-10 text-gold opacity-60 text-5xl  select-none">“</span>

        <BaseParagraph
          :title="t('coreValues.description')"
          classes="text-base text-medium-gray text-center px-5 font-bold mb-4"
        />

        <span class="absolute font-serif -right-6 bottom-5 text-gold opacity-60 text-5xl  select-none">”</span>
      </div>
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n();
</script>
