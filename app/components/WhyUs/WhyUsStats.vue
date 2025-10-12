<template>
  <div class="flex flex-wrap justify-center items-center gap-18 text-center">
    <div
      v-for="(item, index) in stats"
      :key="index"
      class="flex flex-col items-center relative"
    >
      <div class="relative inline-block">
        <h3 class="text-6xl font-bold text-gold">
          {{ $t(`whyUs.stats.${item.key}.number`) }}
        </h3>

        <BaseIcon
          :src="item.icon"
          wrapperClass="w-8 h-8 bg-gray absolute -bottom-4 -right-3 backdrop-blur-md w-8 h-8 "
          iconClass="w-5 h-5"
        />
       
      </div>

      <BaseParagraph :title="$t(`whyUs.stats.${item.key}.text`)"
      classes="text-sm mt-5 text-soft-gray text-center"/>
   
    </div>
  </div>
</template>
<script setup>
const stats = [
  { icon: "/icons/success.svg", key: "clients" },
  { icon: "/icons/like.svg", key: "satisfiedClients" },
  { icon: "/icons/lawsvg.svg", key: "years" },
  { icon: "/icons/person.svg", key: "team" },
];
</script>
