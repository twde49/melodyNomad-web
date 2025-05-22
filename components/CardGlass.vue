<template>
  <div
    class="glassmorphism-card"
    :style="{ backgroundImage: `url(${imageUrl})` }"
  >
    <div class="text-overlay">
      <strong class="title">{{ index < 10 ? '0' + index : index }}&nbsp; {{ title }}</strong>
      <p class="content">{{ content }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">

const { index, title, content, imageUrl} = defineProps<{
  index: number,
  title: string,
  content: string,
  imageUrl: string
}>()
</script>

<style scoped>
.glassmorphism-card {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  width: 280px;
  height: 200px;
  border-radius: 16px;
  overflow: hidden;

  background-size: cover;
  background-position: center;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
}

.glassmorphism-card:hover {
  background-image: none;
  background-color: transparent;
}

.text-overlay {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  color: white;

  padding: 24px;
  transition: opacity 0.3s ease;
  opacity: 0;
  height: 100%;
  width: 100%;
}

.glassmorphism-card:hover .text-overlay {
  opacity: 1;
}

.text-overlay strong.title {
  font-size: 20px;
  font-weight: 700;
  line-height: 1.2;
  opacity: 1;
  transition: none;
}

.glassmorphism-card:hover .text-overlay strong.title {
  opacity: 1;
}

.text-overlay p.content {
  font-size: 16px;
  font-weight: 300;
  line-height: 1.5;
  margin: 0;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.glassmorphism-card:hover .text-overlay p.content {
  opacity: 1;
}

.background-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}

</style>