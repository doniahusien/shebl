<template>
  <div
    class="font-din bg-mist-white grid m-auto md:grid-cols-3 w-full shadow-sm rounded-3xl gap-5 md:gap-0 p-4 md:p-6"
  >
    <div
      class="flex flex-row gap-5 justify-center items-center"
      :class="{
        'md:border-l border-gray-200': n == 1 || n == 2,
      }"
      v-for="n in 3"
      :key="n"
    >
      <BaseIcon
        :src="`/icons/highlight${n}.svg`"
        :alt="`Highlight${n}`"
        wrapperClass="w-10 h-10 md:w-14 md:h-14 bg-cream"
        iconClass=" w-5 h-5 md:w-8 md:h-8"
      />
      <BaseParagraph
        :title="$t(`highlight.highlight${n}`)"
        classes="text-medium-gray text-sm font-semibold md:text-base"
      />
    </div>
  </div>
</template>

<script setup>

</script>
