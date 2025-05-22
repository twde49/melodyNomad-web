<template>
<div class="contact">
    <div
        class="flex justify-center items-center flex-col border-2 border-black rounded-[16px] mx-16 my-32 px-96 py-32"
    >
        <h3 v-if="!reservation" class="text-5xl mb-12 text-center titleFont font-extrabold">
            N’hésitez à pas <br />
            nous solliciter
        </h3>
        <h3 v-else class="text-5xl mb-12 text-center titleFont font-extrabold">
            N’hésitez pas à <br />
            réserver en ligne
        </h3>
        
        <button
        v-if="!reservation"
            class="primaryBackground justify-center items-center w-60 h-12 hover:accent-white text-white py-2 px-4 rounded cursor-pointer mt-4"
        >
            Contactez-nous
        </button>
        <button
        v-else
            class="primaryBackground justify-center items-center w-60 h-12 hover:accent-white text-white py-2 px-4 rounded cursor-pointer mt-4"
        >
            Réserver
        </button>
    </div>
</div>
</template>   

<script setup lang="ts">
defineProps({
    reservation: {
        type: Boolean,
        default: false,
    },
});
</script>

