<template>
  <UAccordion
    v-if="safeFaq.length"
    :items="formattedFaq"
    multiple
    :ui="{
      label: `text-lg font-semibold font-din ${labelStyle}`,
      content: `text-base font-din ${contentStyle}`,
      trigger: 'flex items-center justify-between py-3',
    }"
  >
    <template #default="{ item, index }">
      <div class="flex items-center gap-2 mt-10 mb-5">
        <span :class="['font-bold text-2xl', labelStyle]">{{ index + 1 }}.</span>
        <span>{{ item.label }}</span>
      </div>
    </template>

    <template #trailing="{ open }">
      <span class="text-2xl font-bold text-gold">
        {{ open ? '−' : '+' }}
      </span>
    </template>
  </UAccordion>

  <div v-else class="text-center py-10 text-gray-500">
    No FAQs available.
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  faq: {
    type: Array,
    required: false, 
    default: () => []
  },
  labelStyle: {
    type: String,
    default: "text-white"
  },
  contentStyle: {
    type: String,
    default: "text-light-gray"
  }
});

const safeFaq = computed(() => Array.isArray(props.faq) ? props.faq : []);

const formattedFaq = computed(() =>
  safeFaq.value.map(item => ({
    label: item.question,
    content: item.answer
  }))
);
</script>
