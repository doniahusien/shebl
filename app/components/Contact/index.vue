<script setup>
const { t } = useI18n();
const props = defineProps({
  info: {
    type: Object,
    default: () => ({}),
  },
  loading: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div v-if="props.loading">
    <section
      class="grid grid-cols-1 md:grid-cols-3 gap-3 container px-6 lg:px-2 mx-auto bg-mist-white"
    >
      <div class="col-span-2 order-2 md:order-1 space-y-6">
        <BaseSkeleton type="card" />
      </div>
      <div class="order-1 md:order-2">
        <BaseSkeleton type="img" />
      </div>
    </section>
  </div>
  <section v-else class="container px-6 lg:px-2 mx-auto space-y-12">
    <div>
      <h2 class="text-4xl lg:text-3xl text-black">{{ props.info.title }}</h2>
      <p class="text-soft-gray" v-html="props.info.description"></p>
    </div>
    <ContactList :loading="props.loading" />
  </section>
</template>
