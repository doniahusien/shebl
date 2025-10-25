<template>
    <div class="container mx-auto px-4">
  <div
    class=" grid grid-cols-1 md:grid-cols-3 items-center gap-10 "
  >
    <div class="col-span-1 rounded-2xl bg-cream">
      <NuxtImg
        :src="goals.image"
        quality="50"
        class="w-full h-full object-cover"
        alt="goals image"
      />
    </div>

    <div class="col-span-2 p-10 rounded-2xl bg-cream space-y-5">
      <BaseIcon
        :src="goals.icon"
        wrapperClass="w-16 h-16"
        iconClass="w-8 h-8"
      />

      <h2 class="text-black  font-bold text-4xl" >{{goals.title}}</h2>

      <p class="text-basic-gray text-base">{{goals.description}}</p>
    

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <p
          v-for="(item,i) in goals.features"
          :key="i"
          class="text-basic-gray text-base relative pl-4 before:content-['•'] before:absolute before:-right-3 before:text-basic-gray"
        >{{item.value}} </p>
      </div>
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
