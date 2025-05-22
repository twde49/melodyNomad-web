<template>
  <nav class="bg-transparent p-4">
  <div class="container mx-auto flex items-center justify-between">
    <div class="font-bold text-xl" :class="{'text-white': isWhite, 'text-black': !isWhite}">
        <a href="/">
            <img :src="isWhite ? '/assets/img/melody-nomad-logo-white.svg' : '/assets/img/melody-nomad-logo.svg'" alt="Melody Nomad logo" width="200">
        </a>
    </div>

    <div class="flex items-center space-x-16">
      <a href="/notre-histoire" :class="{'text-white hover:text-blue-800': isWhite, 'text-black hover:text-blue-800': !isWhite}">Notre histoire</a>
      <div class="inline-block relative">
          <button
            class="inline-flex items-center" :class="{'text-white hover:text-blue-800': isWhite, 'text-black hover:text-blue-800': !isWhite}"
            @click="isDropdownOpen = !isDropdownOpen"
          >
            <span>Décider de votre voyage</span>
            <svg class="fill-current h-4 w-4 ml-2 transform transition-transform duration-200" :class="{ 'rotate-180': isDropdownOpen }" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </button>

          <div
            v-if="isDropdownOpen"
            class="absolute z-20 mt-2 w-full rounded-lg bg-white/10 shadow-2xl border border-white/20 focus:outline-none transition-all duration-300 ease-in-out"
          >
              <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <a
                  v-for="card in cards.filter(card => card.index === 1)"
                  :key="card.index"
                  :href="`/country/${card.index}`"
                  class="px-6 py-1 text-base text-white font-medium hover:bg-white/20 transition-all duration-300 ease-in-out flex items-center space-x-2 mx-2 my-1 rounded-md"
                  role="menuitem"
                  @click="isDropdownOpen = false"
                >
                  <span class="text-white/60 text-xs">0{{ card.index }}</span>
                  <span class="ml-2">{{ card.title }}</span>
                </a>
              </div>
          </div>
        </div>
      <a href="/contact" :class="{'text-white hover:text-blue-800': isWhite, 'text-black hover:text-blue-800': !isWhite}">Contact</a>
    </div>

    <div>
        <NuxtLink :to="userStore.isAuth() ? '/dashboard' : '/auth'">
            <button class="btn primaryBackground h-12 font-bold py-2 px-4 rounded cursor-pointer transition-all duration-300 ease-in-out text-white hover:text-primary-color relative overflow-hidden fill-white-from-left-on-hover">
                {{ userStore.isAuth() ? 'Mon carnet de bord' : 'Se connecter' }}
            </button>
        </NuxtLink>
    </div>
  </div>
</nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { CardGlass } from '~/types/CardGlass.ts';
import { useUserStore } from '~/store/userStore';

const userStore = useUserStore();
const isDropdownOpen = ref(false);

const cards : CardGlass[] = [
  {
    index: 1,
    title: 'Vietnam',
    content: 'Explorez la douceur des mélodies vietnamiennes à travers des instruments uniques comme le dan bau et le dantranh.',
    imageUrl: 'assets/img/vietnam.jpg'
  },
  {
    index: 2,
    title: 'Sénégal',
    content: 'Explorez la douceur des mélodies vietnamiennes à travers des instruments uniques comme le dan bau et le dantranh.',
    imageUrl: 'assets/img/senegal.jpg'
  },
  {
    index: 3,
    title: 'Tanzanie',
    content: 'Explorez la douceur des mélodies vietnamiennes à travers des instruments uniques comme le dan bau et le dantranh.',
    imageUrl: 'assets/img/tanzanie.jpg'
  },
  {
    index: 4,
    title: 'Maroc',
    content: 'Explorez la douceur des mélodies vietnamiennes à travers des instruments uniques comme le dan bau et le dantranh.',
    imageUrl: 'assets/img/maroc.jpg'
  },
]

defineProps({
    isWhite: {
        type: Boolean,
        default: false
    }
})
</script>

<style scoped>
.btn {
  background-color: var(--primary-color);
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  font-weight: bold;
  position: relative;
  transition: all 1s;
  overflow: hidden;
  border-radius: 0.25rem;
}

.btn:hover {
    background: transparent;
    color: var(--primary-color);
}

.btn::before {
  content: "";
  position: absolute;
  height: 100%;
  width: 0%;
  top: 0;
  left: -40px;
  background-color: white;
  z-index: -1;
  transition: all 1s;
  border-radius: 2rem;
}

.btn:hover::before {
  width: 160%;
}
</style>