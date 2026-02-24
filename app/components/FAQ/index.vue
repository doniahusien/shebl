<template>
  <div v-if="props.loading">
    <BaseSkeleton type="card" />
  </div>

  <Transition name="fade-up">
    <div
      v-if="!props.loading"
      class="relative bg-cover bg-[url('/images/header4.jpg')] bg-center bg-no-repeat container  px-6  mx-auto rounded-4xl overflow-hidden"
    >
      <div class="overlay"></div>
      <div class="relative z-20 flex flex-col items-center text-center w-full py-20">
        <div class="flex flex-row justify-between items-center w-full gap-6 mb-10">
          <h2 class="text-white text-xl md:text-4xl">
            {{ $t("faq.title") }}
          </h2>

          <NuxtLink to="/faq">
            <BaseButton
              :text="$t('faq.view_all')"
              classes="rounded-4xl bg-faded-white backdrop-blur-md"
            />
          </NuxtLink>
        </div>

        <FAQAccordion :faq="props.faq" />
      </div>
    </div>
  </Transition>
</template>

<script setup>
const { t, locale } = useI18n();
const props = defineProps({
  faq: {
    type: Array,
    default: () => [],
  },
  loading: {
    type: Boolean,
    default: false,
  },
});
</script>
