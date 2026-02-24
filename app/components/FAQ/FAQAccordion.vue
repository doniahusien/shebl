<template>
  <div v-if="props.loading" class="flex flex-col gap-5 my-8">
    <BaseSkeleton type="text" />
    <BaseSkeleton type="text" />
    <BaseSkeleton type="text" />
  </div>
  <UAccordion
    v-if="safeFaq.length && !props.loading"
    :items="formattedFaq"
    multiple
    :ui="{
      label: `text-base md:text-lg font-semibold ${labelStyle}`,
      content: `text-sm md:text-base text-start ${contentStyle}`,
      trigger: 'flex justify-between py-3',
    }"
  >
    <template #default="{ item, index }">
      <div class="flex items-center gap-2 mt-10 mb-5">
        <span class="font-bold text-lg md:text-2xl" :class="labelStyle">{{ index + 1 }}.</span>
        <span>{{ item.label }}</span>
      </div>
    </template>

    <template #trailing="{ open }">
      <span class="text-2xl font-bold text-gold">
        {{ open ? '−' : '+' }}
      </span>
    </template>
  </UAccordion>

  <div v-else-if="!props.loading && !safeFaq.length" class=" py-10 text-gray-500">
    No FAQs available.
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
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
