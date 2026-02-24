<template>
  <div :class="['skeleton', className]">
    <template v-if="type === 'text'">
      <div class="container px-6 lg:px-2 mx-auto animate-pulse space-y-2">
        <div class="h-4 bg-gray-200 rounded w-3/4"></div>
        <div class="h-4 bg-gray-200 rounded w-5/6"></div>
        <div class="h-4 bg-gray-200 rounded w-2/3"></div>
      </div>
    </template>

    <template v-else-if="type === 'line'">
      <div class="animate-pulse">
        <div class="h-4 bg-gray-200 rounded w-full"></div>
      </div>
    </template>

    <template v-else-if="type === 'avatar'">
      <div class="animate-pulse flex items-center gap-2">
        <div class="w-10 h-10 rounded-full bg-gray-200"></div>
        <div class="h-4 bg-gray-200 rounded w-24"></div>
      </div>
    </template>
    <template v-else-if="type === 'img'">
      <div class="animate-pulse flex items-center gap-2">
        <div class="size-80 rounded-3xl bg-gray-200"></div>
      </div>
    </template>
    <template v-else-if="type === 'feature'">
      <div class="animate-pulse container px-6 lg:px-2 mx-auto flex items-center gap-3">
        <div class="w-10 h-10 rounded-full bg-gray-200"></div>
        <div class="h-4 bg-gray-200 rounded w-full"></div>
      </div>
    </template>
    <template v-else-if="type === 'card'">
      <div class="animate-pulse container px-6 lg:px-2 mx-auto grid gap-3">
        <div class="h-40 bg-gray-200 rounded-md"></div>
        <div class="h-6 bg-gray-200 rounded w-1/2"></div>
        <div class="h-4 bg-gray-200 rounded w-3/4"></div>
      </div>
    </template>

    <template v-else-if="type === 'card2'">
      <div class="animate-pulse">
        <div class="relative rounded-3xl p-8 bg-gray-200 w-full h-64 overflow-hidden">
          <div class="w-16 h-16 rounded-full bg-gray-300"></div>

          <div class="mt-6 space-y-3">
            <div class="h-6 bg-gray-300 rounded w-3/4"></div>
            <div class="h-4 bg-gray-300 rounded w-1/2"></div>
          </div>
        </div>
      </div>
    </template>

    <template v-else-if="type === 'hero'">
      <div class="animate-pulse">
        <div class="h-80 md:h-96 bg-gray-200 rounded-md"></div>
      </div>
    </template>

    <template v-else>
      <div class="animate-pulse container px-6 lg:px-2 mx-auto">
        <div class="h-4 bg-gray-200 rounded w-full"></div>
      </div>
    </template>
  </div>
</template>

<script setup>
defineProps({
  type: { type: String, default: "text" },
  className: { type: String, default: "" },
});
</script>

<style scoped>
.skeleton .bg-gray-200 {
  background-color: #e6e6e6;
}
</style>
