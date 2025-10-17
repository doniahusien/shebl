<template>
  <div
    class="relative group shadow-lg rounded-3xl p-8 transition-all duration-500 overflow-hidden cursor-pointer w-full h-[250px] hover:-translate-y-2"
  >
    <div
      class="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
      :style="{ backgroundImage: `url('${img || '/images/header2.jpg'}')` }"
    ></div>

    <div
      class="absolute inset-0 bg-navy-overlay opacity-0 group-hover:opacity-60 transition-opacity duration-500 rounded-3xl"
    ></div>

    <div class="relative z-10 flex flex-col h-full justify-between items-between gap-3">
      <!-- <NuxtImg
        v-if="icon"
        :src="icon"
        quality="70"
        alt="icon"
        class="w-16 h-16 mb-3 bg-transparent backdrop-blur-3xl transition-transform duration-500 "
      /> -->
      <BaseIcon
        :src="icon"
        wrapperClass="w-16 h-16 bg-transparent backdrop-blur-md transition-transform duration-500 "
        iconClass="w-8 h-8"
      />

      <div class="space-y-4">
        <BaseHeading
          :title="title"
          classes="text-2xl text-black font-din group-hover:text-white transition-colors duration-300"
        />

        <BaseParagraph :title="description" classes="text-soft-gray font-bold text-sm" />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
    default:""
  },
  description: {
    type: String,
    required: true,
    default:""
  },
  icon: {
    type: String,
  },
  img: {
    type:String
  }
});
</script>

<style scoped></style>
