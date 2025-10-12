<template>
  <div class="bg-white min-h-screen">
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup>
const { isDir } = useDir()

onMounted(() => {
  document.dir = isDir.value
})

watch(isDir, (val) => {
  document.dir = val
})
</script>
