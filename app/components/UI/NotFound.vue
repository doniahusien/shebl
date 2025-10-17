<template>
  <div class="container my-20">
    <div class="flex justify-center flex-col items-center">
      <img
        width="300"
        height="300"
        src="/cuate.png"
        alt="not found icon"
        loading="lazy"
      />
      <div class="error_section">
        <h1 class="text-center font-bold text-2xl my-4 text-text">
          {{ $t("something went wrong") }}
        </h1>
        <p class="text-center max-w-[500px] text-sub">
          {{ $t("pleaseKindlyTryAgain") }}
        </p>
        <div class="flex justify-center mt-5">
          <NuxtLink :to="localePath('/')" class="base-btn mx-2">
            {{ $t("Back to home") }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const localePath = useLocalePath();
</script>
