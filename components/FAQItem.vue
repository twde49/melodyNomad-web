<template>
  <div class="faq-item" style="max-width: 40vw;">
    <div
      class="faq-question-container cursor-pointer flex flex-col"
      @click="toggleOpen"
    >
      <div class="flex items-center justify-between">
        <p class="text-left">{{ question }}</p>
        <Icon :name="isOpen ? 'octicon:chevron-down-12' : 'heroicons:plus'" size="32" class="ml-2" :class="{ 'rotate-icon': isOpen }" />
      </div>
      <Transition name="fade">
        <div v-if="isOpen" class="faq-content flex flex-col" style="margin-top: 10px; padding: 10px;">
          <div>{{ content }}</div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
  question: string;
  content: string;
}>();

const isOpen = ref(false);

const toggleOpen = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style scoped>
.faq-question-container {
  border: 2px solid #2B4F2E;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 5px;
}

.faq-question {
  border-bottom: none;
}


.faq-question p {
  flex: 1;
  text-align: left;
}

.faq-content {
  display: block;
  overflow: hidden;
}

.faq-question .icon {
  margin-left: auto;
}

.rotate-icon {
  transform: rotate(0deg);
  transition: transform 0.4s ease;
}

.rotate-icon {
  transform: rotate(180deg);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
  overflow: hidden;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  max-height: 0;
  margin-top: 0 !important;
  padding: 0 !important;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  max-height: 1000px;
}
</style>