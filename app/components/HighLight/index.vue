<template>
  <div
    class="font-din bg-mist-white grid m-auto md:grid-cols-3 w-full shadow-sm rounded-3xl p-6"
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
        wrapperClass="w-14 h-14 bg-cream"
        iconClass="w-8 h-8"
      />
      <BaseParagraph
        :title="$t(`highlight.highlight${n}`)"
        classes="text-medium-gray text-base"
      />
    </div>
  </div>
</template>

<script setup>

</script>
