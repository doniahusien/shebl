<template>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-4 mt-10" v-if="features">
        <div
          v-for="(feature,i) in features"
          :key="i"
          class="flex flex-row gap-5 "
        >
          <BaseIcon :src="feature.icon" iconClass="w-8 h-8" />
          <BaseParagraph
            :title="feature.value"
            classes="text-dark-gray font-bold text-sm"
          />
        </div>
      </div>
</template>
<script setup>
const { t, tm, locale } = useI18n();
defineProps({
  features: {
    type: Array,
    default:()=>[]
  }
})
/* 
const features = ref([]);

const  loadFeatures= () => {
  const featureList = tm("about.features");
  if (featureList && typeof featureList === "object") {
    features.value = Object.keys(featureList);
  }
};
onMounted(() => {
  loadFeatures();
}) */
</script>