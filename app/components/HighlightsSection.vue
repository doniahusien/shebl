<template>
  <div :dir="isDir" class="font-din bg-primary grid m-auto md:grid-cols-3 w-full shadow-md rounded-3xl p-6">
    <div class="flex flex-row gap-5 justify-center items-center"
    :class="{
        'md:border-l border-gray': n ==1 || n==2 }"  v-for="n in 3" :key="n">
      <NuxtImg :src="`/icons/highlight${n}.svg`" :alt="`Highlight${n}`" class="w-12 h-auto" />
      <BaseSubTitle :title="$t(`highlight.highlight${n}`)" color="tertiary" />
    </div>     
  </div>
</template>
<script setup>
const { isDir } = useDir();
</script>
