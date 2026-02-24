<template>
  <div v-if="props.loading">
    <section
      class="grid grid-cols-1 md:grid-cols-3 gap-3 container px-6 lg:px-2 mx-auto bg-mist-white my-8"
    >
      <div class="col-span-2 order-2 md:order-1 space-y-6">
        <BaseSkeleton type="card" />
      </div>
      <div class="order-1 md:order-2">
        <BaseSkeleton type="img" />
      </div>
    </section>
  </div>
  <div
    v-else
    class="grid grid-cols-1 gap-5 md:grid-cols-2 items-center container px-6 lg:px-2 mx-auto my-6"
  >
    <div
      class="order-2 md:order-1 flex w-full flex-col gap-2 justify-center items-center"
    >
      <h3 class="text-dark-gray font-bold text-4xl">
        {{ $t("contact.company_name") }}
      </h3>
      <p class="text-soft-gray">
        {{ $t("contact.company_subtitle") }}
      </p>
      <ContactList />
    </div>
    <div class="order-1 md:order-2">
      <NuxtImg
        format="webp"
        quality="50"
        src="/images/lawAbout.svg"
        alt="Frame"
        class="object-contain w-full h-full"
      />
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
});
const { t } = useI18n();
</script>
