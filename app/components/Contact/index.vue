<script setup>
const { t } = useI18n();
defineProps({
  info: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<template>
  <section class="container mx-auto space-y-12">
    <div>
      <h2 class="text-4xl lg:text-3xl text-black">{{ info.title }}</h2>
      <p class="text-soft-gray">{{ info.description }}</p>
    </div>
    <ContactInfo />
  </section>
</template>
