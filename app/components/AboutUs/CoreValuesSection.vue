<template>
  <div v-if="loading" class="container mx-auto px-6 lg:px-2 text-center">
    <BaseSkeleton type="card2" />
  </div>
  <section v-else class="container mx-auto px-6 lg:px-2 text-center">
    <div class="relative bg-white rounded-xl shadow-md p-10 md:p-16 mx-auto overflow-hidden">
     
      <NuxtImg
        :src="core.image"
        alt="corner image"
        class="absolute top-0 right-0 w-40 h-10 rounded-full object-cover"
      />

     
      <div class="flex justify-center mb-6">
        <BaseIcon
          :src="core.icon"
          wrapperClass="w-16 h-16"
          iconClass="w-12 h-12"
        />
      </div>
      <h2 class="text-2xl md:text-4xl text-black font-bold mb-4">
        {{ core.title }}
      </h2>
      <div class="relative mx-auto max-w-2xl">
        <span
          class="absolute font-serif -left-6 top-6 text-gold opacity-60 text-5xl select-none"
        >
          “
        </span>

        <p class="text-sm md:text-base text-medium-gray text-center px-0 md:px-5 font-bold mb-4 leading-relaxed">
          {{ core.description }}
        </p>

        <span
          class="absolute font-serif -right-6 bottom-3 text-gold opacity-60 text-5xl select-none"
        >
          ”
        </span>
      </div>
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n();

defineProps({
  core: {
    type: Object,
    required: true,
  },
  loading: {
    type: Boolean,
    default: false,
  },
});
</script>
