<template>
    <div class="overflow-x-hidden">
        <div>
            <BasicNavbar class="sticky mt-4 z-10" />
            <div class="absolute top-0">
                <div class="relative w-[100vw] h-[100vh] overflow-hidden">
                    <div
                        v-for="(card, index) in carouselCards"
                        :key="card.index"
                        class="absolute inset-0 transition-opacity duration-1000 ease-in-out"
                        :class="{ 'opacity-100': currentSlide === index, 'opacity-0': currentSlide !== index }"
                    >
                        <img
                            :src="`/${card.imageUrl}`"
                            :alt="card.title"
                            class="w-full h-full object-cover"
                        >
                    </div>
                    <div class="absolute inset-0 bg-black opacity-20"/>
                </div>
            </div>

            <div
                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
            >
                <h1
                    class="text-[86px] leading-[88px] text-white! titleFont mb-[48px]"
                >
                    Aux rythmes <br>
                    du monde
                </h1>
                <p
                    class="text-[28px] leading-[28px] text-white font-extralight mb-[64px] chivo"
                >
                    "Chaque destination a sa propre mélodie. Ecoute-la et tu
                    comprendras le coeur de ses habitants"
                </p>

                <div
                    class="inline-block relative bg-white/10 border border-white/20 rounded-lg p-4 shadow-2xl"
                >
                    <div class="flex items-center gap-4">
                        <button
                            class="bg-white/20 backdrop-blur-sm text-white font-bold py-2 px-4 rounded-lg inline-flex items-center gap-2 chivo hover:bg-white/30 transition-colors"
                            @click="isDropdownOpen = !isDropdownOpen"
                        >
                            <span>Décider de votre voyage</span>
                            <span
                                class="bg-white/10 border border-white/20 rounded-lg p-1 h-6 w-6 flex items-center justify-center"
                            >
                                <Icon
                                    name="mdi:chevron-down"
                                    size="16"
                                    class="text-white transform transition-transform duration-200"
                                    :class="{ 'rotate-180': isDropdownOpen }"
                                />
                            </span>
                        </button>

                        <div class="relative">
                            <button
                                class="bg-white/20 backdrop-blur-sm text-white font-bold py-2 px-4 rounded-lg inline-flex items-center gap-2 chivo hover:bg-white/30 transition-colors"
                                @click="dateInput?.showPicker?.()"
                            >
                                <span>{{
                                    date
                                        ? date.toLocaleDateString("fr-FR")
                                        : "Date"
                                }}</span>
                                <span
                                    class="bg-white/10 border border-white/20 rounded-lg p-1 h-6 w-6 flex items-center justify-center"
                                >
                                    <Icon
                                        name="material-symbols:calendar-month-rounded"
                                        size="16"
                                        class="text-white"
                                    />
                                </span>
                            </button>
                            <input
                                ref="dateInput"
                                type="date"
                                class="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                :value="
                                    date ? date.toISOString().split('T')[0] : ''
                                "
                                @input="
                                    (event) => {
                                        const target = event.target as HTMLInputElement | null;
                                        date = target?.value ? new Date(target.value) : null;
                                    }
                                "
                            >
                        </div>
                    </div>

                    <div
                        v-if="isDropdownOpen"
                        class="absolute z-20 mt-6 ml-20 w-max rounded-lg bg-white/10 shadow-2xl border border-white/20 focus:outline-none transition-all duration-300 ease-in-out"
                    >
                        <div
                            class="py-3"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="options-menu"
                        >
                            <a
                                v-for="card in cards"
                                :key="card.index"
                                href="#"
                                class="px-6 py-3 text-base text-white font-medium hover:bg-white/20 transition-all duration-300 ease-in-out flex items-center space-x-2 mx-2 my-1 rounded-md chivo"
                                role="menuitem"
                                @click="isDropdownOpen = false"
                            >
                                <span class="text-white/60 text-xs chivo"
                                    >0{{ card.index }}</span
                                >
                                <span class="ml-2 chivo">{{ card.title }}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        

            <div
                class="absolute bottom-8 right-10 flex flex-col items-center text-white font-bold text-xl z-20"
            >
                <template v-for="(card, index) in cards" :key="card.index">
                    <div class="relative flex items-center">
                        <span 
                            class="chivo transition-colors duration-300"
                            :class="currentSlide === index ? 'text-white text-3xl' : 'text-gray-400'"
                        >
                            0{{ card.index }}
                        </span>

                        <div 
                            v-if="currentSlide === index"
                            class="absolute left-full ml-4 w-5 h-[2px] bg-white"
                        />
                    </div>

                    <div 
                        v-if="index < cards.length - 1"
                        class="h-4 border-l border-dashed border-gray-400"
                    />
                </template>
            </div>
        </div>

        <div class="container mx-auto mt-[90vh]">
            <div class="flex items-center justify-between">
                <div class="w-1/2">
                    <h1 class="text-[48px] font-bold mb-[32px] chivo">
                        Notre concept
                    </h1>
                    <p class="text-lg text-[20px] chivo">
                        Que vous soyez musicien ou simple curieux, partez à la
                        découverte du monde à travers ses traditions musicales,
                        ses artistes et ses artisans locaux. Rejoignez-nous pour
                        voyager aux rythmes du monde et transformer chaque
                        mélodie en souvenir inoubliable.
                    </p>
                </div>
                <div class="w-7/12 mr-[-18%]">
                    <img
                        src="public/assets/img/concept1.png"
                        alt="Concept Image"
                        class="rounded-full w-full"
                    >
                </div>
            </div>

            <div class="flex items-center justify-between">
                <div class="w-7/12 ml-[-18%]">
                    <img
                        src="public/assets/img/concept2.png"
                        alt="Concept Image"
                        class="rounded-full w-full"
                    >
                </div>
                <div class="flex flex-col w-5/12 mr-[10%]">
                    <h2 class="text-lg chivo">
                        Melody Nomad, créé par Robin et Sylvain, deux amis
                        passionnés de musique et de voyages, propose des
                        expériences uniques et immersives autour des cultures
                        musicales. Forte de leurs explorations en Asie, en
                        Afrique et en Amérique Latine, ils vous invitent à des
                        séjours où la musique devient un langage universel,
                        liant les cultures et les générations.
                    </h2>
                    <button
                        class="primaryBackground w-60 h-12 hover:accent-white text-white py-2 px-4 rounded cursor-pointer mt-4 chivo"
                    >
                        Découvrir notre histoire
                    </button>
                </div>
            </div>
        </div>

        <div class="bgExploreImg py-[800px]">
            <div class="container mx-auto">
                <div class="flex items-center justify-between mb-12">
                    <h2 class="text-4xl font-bold fontTitle text-white">
                        Explorez nos voyages
                    </h2>
                    <p
                        class="py-4 px-8 border border-white rounded-md text-white chivo"
                    >
                        Mars à Novembre
                    </p>
                </div>
                <div
                    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]"
                >
                    <div v-for="card in cards" :key="card.index" class="">
                        <CardGlass
                            :image-url="card.imageUrl!"
                            :index="card.index!"
                            :title="card.title!"
                            :content="card.content!"
                        />
                    </div>
                </div>

                <div class="text-left">
                    <button
                        class="primaryBackground w-60 h-12 hover:accent-white text-white py-2 px-4 rounded cursor-pointer mt-4 chivo"
                    >
                        Voir tous nos voyages
                    </button>
                </div>
            </div>

            <div class="pt-70">
                <h2
                    class="text-[48px] titleFont font-bold text-white! text-center mb-12"
                >
                    Voyager autrement
                </h2>
                <div class="container mx-auto mt-24 flex justify-center">
                    <div
                        class="flex flex-col items-center text-center w-1/3 px-4"
                    >
                        <Icon
                            name="material-symbols:landscape-rounded"
                            size="48"
                            class="mb-4 text-white"
                        />
                        <h3
                            class="text-[32px] titleFont font-bold text-white! mb-2"
                        >
                            Immersivité unique
                        </h3>
                        <p class="text-[18px] leading-6 text-white chivo">
                            Melody Nomad vous connecte à la musique vivante à
                            travers des rencontres uniques, entre artistes
                            locaux et lieux inspirants.
                        </p>
                    </div>

                    <div class="h-64 w-[2px] bg-white mx-8 self-stretch"/>

                    <div
                        class="flex flex-col items-center text-center w-1/3 px-4"
                    >
                        <Icon
                            name="ion:accessibility"
                            size="48"
                            class="mb-4 text-white"
                        />
                        <h3
                            class="text-[32px] titleFont font-bold text-white! mb-2"
                        >
                            Accessibilité
                        </h3>
                        <p class="text-[18px] leading-6 text-white chivo">
                            Que vous soyez artiste ou simple curieux, nos
                            séjours s'adaptent à vos envies : formats flexibles,
                            confort personnalisé, liberté garantie.
                        </p>
                    </div>

                    <div class="h-64 w-[2px] bg-white mx-8 self-stretch"/>

                    <div
                        class="flex flex-col items-center text-center w-1/3 px-4"
                    >
                        <Icon
                            name="material-symbols-light:eco-rounded"
                            size="48"
                            class="mb-4 text-white"
                        />
                        <h3
                            class="text-[32px] titleFont font-bold text-white! mb-2"
                        >
                            Tourisme éthique
                        </h3>
                        <p class="text-[18px] leading-6 text-white chivo">
                            Nous créons des voyages respectueux, ancrés dans les
                            cultures locales, au service des communautés et de
                            l'environnement.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="relative mt-[-40px]" style="height: 100vh">
            <video
                class="absolute inset-0 w-full h-full object-cover"
                autoplay
                muted
                loop
            >
                <source
                    src="public/assets/videos/review.mp4"
                    type="video/mp4"
                >
                Your browser does not support the video tag.
            </video>
            <div
                class="container mx-auto flex justify-center items-center h-full relative z-10"
            />
        </div>

        <ContactZone />
        <FooterMelody />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import type { CardGlass } from "~/types/CardGlass.ts";

const isDropdownOpen = ref(false);
const date = ref<Date | null>(null);
const dateInput = ref<HTMLInputElement | null>(null);
const currentSlide = ref(0);
let carouselInterval: NodeJS.Timeout | null = null;

const cards: CardGlass[] = [
    {
        index: 1,
        title: "Vietnâm",
        content:
            "Explorez la douceur des mélodies vietnamiennes à travers des instruments uniques comme le dan bau et le dantranh.",
        imageUrl: "assets/img/vietnam.jpg",
    },
    {
        index: 2,
        title: "Sénégal",
        content:
            "Explorez la douceur des mélodies vietnamiennes à travers des instruments uniques comme le dan bau et le dantranh.",
        imageUrl: "assets/img/senegal.jpg",
    },
    {
        index: 3,
        title: "Tanzanie",
        content:
            "Explorez la douceur des mélodies vietnamiennes à travers des instruments uniques comme le dan bau et le dantranh.",
        imageUrl: "assets/img/tanzanie.jpg",
    },
    {
        index: 4,
        title: "Maroc",
        content:
            "Explorez la douceur des mélodies vietnamiennes à travers des instruments uniques comme le dan bau et le dantranh.",
        imageUrl: "assets/img/maroc.jpg",
    },
];

const carouselCards = [
  {
      index: 0,
      title: "Image 1",
      imageUrl: "assets/img/1.jpg",
  },  
  {
      index: 1,
      title: "Image HERO",
      imageUrl: "assets/img/HERO.jpg",
  },  
  {
      index: 2,
      title: "Image 3",
      imageUrl: "assets/img/3.jpg",
  },  
  {
      index: 3,
      title: "Image 4",
      imageUrl: "assets/img/4.jpg",
  },
]

onMounted(() => {
    carouselInterval = setInterval(() => {
        currentSlide.value = (currentSlide.value + 1) % cards.length;
    }, 4000);
});

onUnmounted(() => {
    if (carouselInterval) {
        clearInterval(carouselInterval);
    }
});
</script>

<style scoped>
.bgExploreImg {
    width: 100vw;
    height: 100%;
    background-image: url("public/assets/img/exploreBg.png");
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 20;
}

.bgReview {
    z-index: 10;
    width: 100vw;
    height: 110vh;
    background-image: url("public/assets/img/reviewBG.png");
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
