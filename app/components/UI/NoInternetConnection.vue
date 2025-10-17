<template>
    <div class="bg-gray-300 pt-40 pb-96 text-black fixed top-0 left-0 w-screen h-screen flex flex-col justify-center items-center">
        <div class=" space-y-6">
            <h3 class="font-bold text-[25px] text-center">
                {{ $t("TITLES.No internet connection") }}
            </h3>
            <img src="/connection.png" alt="connection" class="" />
            <button class="base-btn m-auto" @click="reload">
                {{ $t("BUTTONS.try again") }}
            </button>
        </div>


    </div>
</template>

<script setup>
const {t}= useI18n()
function reload(){
    location.reload();
}
</script>