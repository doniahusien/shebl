<template>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-4 mt-10">
        <div
          v-for="key in features"
          :key="key"
          class="flex flex-row gap-5 "
        >
          <BaseIcon src="/icons/awardIcon.svg" iconClass="w-8 h-8" />
          <BaseParagraph
            :title="$t(`about.features.${key}`)"
            classes="text-dark-gray font-bold text-sm"
          />
        </div>
      </div>
</template>
<script setup>
const { t, tm, locale } = useI18n();

const features = ref([]);

const  loadFeatures= () => {
  const featureList = tm("about.features");
  if (featureList && typeof featureList === "object") {
    features.value = Object.keys(featureList);
  }
};
onMounted(() => {
  loadFeatures();
})
</script>