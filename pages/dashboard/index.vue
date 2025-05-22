<template>
    <div class="overflow-x-hidden">
        <div class="v-[100vh]">
            <BasicNavbar class="sticky mt-4 z-10" is-white />
            <div class="absolute top-0">
                <div class="relative w-[100vw] h-[100vh]">
                    <img
                        src="public/assets/img/carnet.jpg"
                        alt="Mon carnet de bord"
                        class="w-full h-full object-cover"
                    />
                    <div class="absolute inset-0 bg-black opacity-20" />
                </div>
            </div>

            <div
                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
            >
                <h1
                    class="text-[86px] leading-[88px] text-white! titleFont mb-[48px]"
                >
                    Mon carnet <br />
                    de bord
                </h1>
                <p
                    class="text-[28px] leading-[28px] text-white font-extralight mb-[64px] chivo"
                >
                    Ici se dessinent les traces de mes voyages, de mes coups de
                    cœur partagés, les sons qui m’ont touché… et mes mots
                    laissés en écho !
                </p>
            </div>
        </div>

        <div class="relative mt-[100vh] mx-[30px]">
            <div class="flex justify-between items-center mb-[32px]">
                <h1 class="text-[48px] titleFont">
                    Mes informations personnelles
                </h1>
                <button
                    @click="userStore.logout"
                    class="rounded-[16px] bg-[#2a4435] border border-[#2a4435] p-2 flex items-center justify-center shadow-lg hover:bg-[#3a5445] transition-all"
                >
                    <Icon name="mdi:logout" size="24" class="text-white" />
                </button>
            </div>

            <div class="flex my-12 w-full justify-center">
                <div
                    class="rounded-lg shadow-md overflow-hidden flex flex-row w-[60vw]"
                >
                    <div class="bg-[#2a4435] text-white p-6 w-52">
                        <div class="mb-6">
                            <div class="text-sm opacity-80">Nom du compte</div>
                            <div class="font-bold text-xl">
                                {{ currentUser.firstName }}
                                {{ currentUser.lastName }}
                            </div>
                        </div>

                        <div class="mb-6">
                            <div class="text-sm opacity-80">Mot de passe</div>
                            <div class="font-bold">*************</div>
                        </div>

                        <div>
                            <div class="text-sm opacity-80">Adresse Mail</div>
                            <div class="font-bold">
                                {{ currentUser.email || "12B" }}
                            </div>
                        </div>
                    </div>

                    <!-- Middle section with "Melody Nomad" vertical text -->
                    <div
                        class="bg-[#2a4435] text-white py-6 px-2 flex items-center"
                    >
                        <div
                            class="transform -rotate-90 whitespace-nowrap font-bold tracking-wider"
                        >
                            Melody Nomad
                        </div>
                    </div>

                    <!-- Right side - Light section with trip info -->
                    <div class="bg-[#fffdf5] p-6 flex-grow">
                        <h2 class="text-lg font-semibold mb-4 text-[#2a4435]">
                            Informations de votre compte
                        </h2>

                        <div class="mb-8">
                            <div class="text-sm text-gray-600">
                                Dernier Voyage
                            </div>
                            <div class="flex items-center mt-2">
                                <span class="text-2xl font-bold">PAR</span>
                                <div class="mx-4 flex-grow flex items-center">
                                    <div
                                        class="h-[1px] bg-gray-400 flex-grow"
                                    />
                                    <div class="mx-2">✈️</div>
                                    <div
                                        class="h-[1px] bg-gray-400 flex-grow"
                                    />
                                </div>
                                <span class="text-2xl font-bold">HAN</span>
                            </div>
                        </div>

                        <div class="mb-8">
                            <div class="text-sm text-gray-600">Date</div>
                            <div class="font-bold text-xl">05/25</div>
                        </div>

                        <div>
                            <div class="text-sm text-gray-600">Compte</div>
                            <div class="flex items-center mt-2">
                                <span class="font-bold"
                                    >Modifier les informations</span
                                >
                                <span class="ml-2">✏️</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container mx-auto flex justify-between mt-12 px-4">
            <div
                class="rounded-3xl border border-black p-8 w-1/2 flex flex-col items-center transition-all mx-2 space-y-6"
            >
                <div
                    class="text-2xl mb-4 text-[#2a4435] underline underline-offset-8"
                >
                    Mon aventure
                </div>
                <div class="text-md text-center">
                    Voyage à travers le monde depuis 15 ans
                </div>
                <div class="text-md italic">Voyageur expérimenté</div>
                <div class="text-md text-gray-600">
                    3 voyages avec l’agence Mélody Nomade
                </div>
            </div>

            <div
                class="rounded-3xl border border-black p-8 w-1/2 flex flex-col items-center transition-all mx-2 space-y-6"
            >
                <div
                    class="text-2xl mb-4 text-[#2a4435] underline underline-offset-8"
                >
                    Mes saveurs d’ailleurs
                </div>
                <div class="text-md text-center">
                    Découvertes des cultures et paysages
                </div>
                <div class="text-md text-center">
                    Mes destinations phares : Asie et Amériques
                </div>
                <div class="text-md text-center">
                    Voyage avec 2-3 compagnons
                </div>
                <div class="text-md">Je préfère les voyages de 10 jours</div>
            </div>
        </div>

        <div class="container mx-auto px-4 mt-24">
            <div class="flex justify-start">
                <h1 class="text-[48px] titleFont mb-12">
                    Mes derniers voyages
                </h1>
            </div>
            <div class="flex overflow-x-auto mb-24 space-x-4">
                <TripCard
                    trip-image="/assets/img/firstTrip.svg"
                    trip-title="Le Vietnam (10 jours)"
                    trip-date="Mai 2023"
                />
                <TripCard
                    trip-image="/assets/img/secondTrip.svg"
                    trip-title="Le Japon (14 jours)"
                    trip-date="Juin 2023"
                />
                <TripCard
                    trip-image="/assets/img/firstTrip.svg"
                    trip-title="Le Maroc (7 jours)"
                    trip-date="Juillet 2023"
                />
            </div>
        </div>
        
        
        <div class="container mx-auto px-4">
            <div class="flex justify-start">
                <h1 class="text-[48px] titleFont mb-12">
                    Mes prochains voyages
                </h1>
            </div>
            <div class="flex overflow-x-auto mb-24 space-x-4">
                <TripCard
                    trip-image="/assets/img/firstTrip.svg"
                    trip-title="Le Maroc (7 jours)"
                    trip-date="Juillet 2023"
                />
            </div>
        </div>
        
        <section class="mb-24 flex justify-center items-center">
            <img
                src="public/assets/img/notes.svg"
                alt="notes image"
                class="w-[95vw] h-full object-cover"
            />
        </section>
        <FooterMelody />
    </div>
</template>

<script setup lang="ts">
import { useUserStore } from "~/store/userStore";
import type { User } from "~/types/User";
import { navigateTo } from "#app";

const userStore = useUserStore();

if (!userStore.currentConnectedUser) {
    navigateTo("/");
}

const currentUser = userStore.currentConnectedUser as unknown as User;
</script>
