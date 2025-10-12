<template>
  <UAccordion
    :items="faqItems"
    multiple
    :ui="{
      label: 'text-lg font-semibold text-white font-din ',
      content: 'text-base text-gray-100  font-din',
      trigger: 'flex items-center justify-between py-3',
    }"
  >
    <template #default="{ item, index }">
      <div class="flex items-center gap-2 mt-10 mb-5">
        <span class="font-bold text-white">{{ index + 1 }}.</span>
        <span>{{ item.label }}</span>
      </div>
    </template>
    <template #trailing="{ open }">
      <span class="text-white text-2xl font-bold">
        {{ open ? "−" : "+" }}
      </span>
    </template>
  </UAccordion>
</template>
<script setup>
const { t, locale } = useI18n();

const faqItems = computed(() => {
  const base = "faq.items";
  const indices = [0, 1, 2, 3];
  return indices.map((i) => ({
    label: t(`${base}[${i}].label`),
    content: t(`${base}[${i}].content`),
  }));
});
</script>
