<template>
  <div>
    <div class=" mx-auto max-w-screen-xl">
      <div
        class="flex flex-col items-center md:flex-row gap-12"
        :class="{
          'md:flex-row-reverse': !imageOnRight,
        }"
      >
        <div class="w-full md:w-1/2 max-w-md text-center md:text-left">
          <div class="text-8xl font-bold titleFont mb-4">
            {{ number }}
          </div>
          <hr class="border-t-2 border-gray-300 my-4">
          <h2 class="text-4xl font-bold mb-4 titleFont text-gray-800">{{ title }}</h2>
          <p class="text-lg text-gray-700 leading-relaxed mb-4">
            {{ text }}
          </p>
        </div>
        <div class="w-full md:w-1/2">
          <img
            :src="imageUrl"
            :alt="title"
            class="w-full h-auto object-cover rounded-lg md:h-96 lg:h-[500px]"
            :class="imageOnRight ? 'ml-56' : 'mr-70'"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface HighlightSectionProps {
  title: string;
  text: string;
  number: string;
  imageUrl: string;
  imageOnRight: boolean;
}

defineProps<HighlightSectionProps>();
</script>
