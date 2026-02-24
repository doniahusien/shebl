<template>
  <div v-if="props.loading">
    <div class="bg-mist-white grid m-auto lg:grid-cols-3 w-full shadow-sm rounded-3xl gap-5 p-6">
      <div v-for="n in 3" :key="n">
        <BaseSkeleton type="feature" />
      </div>
    </div>
  </div>

  <div v-else class=" bg-mist-white grid m-auto md:grid-cols-3 w-full shadow-sm rounded-3xl gap-5 md:gap-0 p-4 md:p-6">
    <div
      class="flex flex-row gap-5 justify-center items-center"
      :class="{
        'md:border-l border-gray-200': n == 1 || n == 2,
      }"
      v-for="n in highlight"
      :key="n"
    >
      <BaseIcon
        :src="n.icon"
        :alt="`Highlight${n}`"
        wrapperClass="w-10 h-10 md:w-14 md:h-14 bg-cream rotate-0"
        iconClass=" w-5 h-5 md:w-8 md:h-8"
      />
      <p class="text-medium-gray text-sm font-bold md:text-base">
      {{n.value}}
      </p>
    
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  highlight: {
    type: Array,
    default: () => ([]),
  },
  loading: {
    type: Boolean,
    default: false,
  },
})
</script>
