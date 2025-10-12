<template>
  <div
    class="bg-mist-white flex flex-col md:flex-row gap-10 w-full px-20 mx-auto items-stretch py-10"
  >
    <div class="flex-1 rounded-2xl bg-cream">
      <NuxtImg
        src="/images/goalsImg.svg"
        quality="50"
        class="w-full h-full object-cover"
        alt="goals image"
      />
    </div>

    <div class="flex-[2] flex flex-col p-10 rounded-2xl bg-cream space-y-5">
      <BaseIcon
        src="/icons/highlight3.svg"
        wrapperClass="w-16 h-16"
        iconClass="w-8 h-8"
      />

      <BaseHeading :title="$t('goals.title')" classes="text-black text-4xl" />

      <BaseParagraph
        :title="$t('goals.description')"
        classes="text-basic-gray text-base"
      />

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <BaseParagraph
          v-for="key in points"
          :key="key"
          :title="$t(`goals.points.${key}`)"
          classes="text-basic-gray text-base "
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const { tm } = useI18n();
const points = ref({});

const loadPoints = () => {
  const pointList = tm("goals.points");
  if (pointList && typeof pointList === "object") {
    points.value = Object.keys(pointList);
  }
};

onMounted(() => {
  loadPoints();
});
</script>
