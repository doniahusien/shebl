<template>
  <div
    class="bg-mist-white flex flex-col md:flex-row gap-10 w-full px-10 md:px-20 mx-auto items-stretch py-10"
  >
    <div class="flex-1 rounded-2xl bg-cream">
      <NuxtImg
        :src="goals.image"
        quality="50"
        class="w-full h-full object-cover"
        alt="goals image"
      />
    </div>

    <div class="flex-[2] flex flex-col p-10 rounded-2xl bg-cream space-y-5">
      <BaseIcon
        :src="goals.icon"
        wrapperClass="w-16 h-16"
        iconClass="w-8 h-8"
      />

      <BaseHeading :title="goals.title" classes="text-black text-4xl" />

      <BaseParagraph
        :title="goals.description"
        classes="text-basic-gray text-base"
      />

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <BaseParagraph
          v-for="(item,i) in goals.features"
          :key="i"
          :title="item.value"
          classes="text-basic-gray text-base relative pl-4 before:content-['•'] before:absolute before:-right-3 before:text-basic-gray"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const { tm } = useI18n();
/* const points = ref({});

const loadPoints = () => {
  const pointList = tm("goals.points");
  if (pointList && typeof pointList === "object") {
    points.value = Object.keys(pointList);
  }
};

onMounted(() => {
  loadPoints();
});
 */

defineProps({
  goals: {
    type:Object,
  }
})

</script>
