<template>
  <div class="flex flex-col w-[30vw] mr-[1vw] rounded-sm overflow-hidden ">
    <div class="w-full h-full overflow-hidden">
      <img :src="tripImage" :alt="tripTitle" class="w-full h-full object-cover" />
    </div>
    <div class="h-[20%] p-[5px] px-[10px] flex flex-col ">
      <div class="flex justify-between items-center mb-1">
        <div class="text-base">{{ tripTitle }}</div>
        <div class="text-sm">{{ tripDate }}</div>
      </div>
      <div>
        <a :href="tripLink" class="font-semibold text-sm underline">Accéder au voyage</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  tripImage: {
    type: String,
    required: true
  },
  tripTitle: {
    type: String,
    required: true
  },
  tripDate: {
    type: String,
    required: true
  },
  tripLink: {
    type: String,
    default: '#'
  }
})
</script>
