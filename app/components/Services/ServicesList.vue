<template>
      <div class="w-[90%] mx-auto">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-stretch"
      >
        <ServicesCard
          v-for="(key, index) in Object.keys($tm('services.items'))"
          :key="key"
          :title="$t(`services.items.${key}.title`)"
          :description="$t(`services.items.${key}.description`)"
          :icon="`/icons/${key}.svg`"
          :class="[index === 3 ? 'lg:col-span-2' : '', 'w-full']"
        />
      </div>
    </div>
</template>