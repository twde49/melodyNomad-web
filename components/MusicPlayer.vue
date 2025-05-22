<template>
  <div id="music-player">
    <button id="music-toggle" @click="toggleMusic" :aria-label="musicPlayerStore.isPlaying ? 'Pause music' : 'Play music'">
      <Icon v-if="!musicPlayerStore.isPlaying" name="mdi:play" class="icon" />
      <Icon v-else name="mdi:pause" class="icon" />
    </button>
    <audio ref="audioElement" loop>
      <source :src="musicPlayerStore.musicSrc" type="audio/mpeg">
    </audio>
  </div>
</template>

<script setup>
import { useMusicPlayerStore } from '../store/musicPlayer'
import { ref, onMounted } from 'vue'

const audioElement = ref(null)
const musicPlayerStore = useMusicPlayerStore()

// Toggle music play/pause
const toggleMusic = () => {
  musicPlayerStore.toggleMusic()
}

onMounted(() => {
  // Only execute on client-side and initialize the store
  if (typeof window !== 'undefined' && audioElement.value) {
    musicPlayerStore.initialize(audioElement.value)
  }
})
</script>

<style scoped>
#music-player {
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 1000;
}

#music-toggle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

#music-toggle:hover {
  background-color: rgba(0, 0, 0, 0.8);
  transform: scale(1.05);
}

.icon {
  width: 20px;
  height: 20px;
}
</style>
