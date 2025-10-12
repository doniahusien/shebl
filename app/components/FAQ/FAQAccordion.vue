<template>
  <UAccordion
    :items="faqItems"
    multiple
    :ui="{
      label: `text-lg font-semibold font-din ${labelStyle} `,
      content: `text-base font-din  ${contentStyle}`,
      trigger: 'flex items-center justify-between py-3',
    }"
  >
    <template #default="{ item, index }">
      <div class="flex items-center gap-2 mt-10 mb-5">
        <span :class="['font-bold text-2xl',labelStyle]">{{ index + 1 }}.</span>
        <span>{{ item.label }}</span>
      </div>
    </template>
    <template #trailing="{ open }">
      <span :class="[ 'text-2xl font-bold text-gold']">
        {{ open ? "−" : "+" }}
      </span>
    </template>
  </UAccordion>
</template>
<script setup>
const { t, locale } = useI18n();

const faqItems = computed(() => {
  const base = "faq.items";
  return props.indices.map((i) => ({
    label: t(`${base}[${i}].label`),
    content: t(`${base}[${i}].content`),
  }));
});
const props= defineProps({
  labelStyle: {
    type: String,
    default:'text-white'
  },
  contentStyle: {
    type: String,
    default:'text-light-gray '
  },
   indices: {
    type: Array,
    default: () => [0, 1, 2, 3], 
  },
})
</script>
