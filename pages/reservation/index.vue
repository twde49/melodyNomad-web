<template>
    <div class="overflow-x-hidden">
        <div class="h-[100vh]">
            <BasicNavbar class="sticky mt-4 z-10" is-white />
            <div class="absolute top-0">
                <div class="relative w-[100vw] h-[100vh]">
                    <img
                        src="public/assets/img/reservation.jpg"
                        alt="Melody Nomad logo"
                        class="w-full h-full object-cover"
                    >
                    <div class="absolute inset-0 bg-black opacity-20" />
                </div>
            </div>

            <div
                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
            >
                <h1
                    class="text-[86px] leading-[88px] !text-white titleFont mb-[48px]"
                >
                    Réservation
                </h1>
                <p
                    class="text-[28px] leading-[28px] text-white font-extralight mb-[64px] chivo"
                >
                    Votre voyage musical commence ici
                </p>
            </div>
        </div>



        <div class="h-[100vh] mt-[30vh]">
            <div class="max-w-6xl w-full mx-auto px-6 py-12 my-12 border-black border-2 rounded-lg shadow-md">
                <div class="flex justify-center mb-12">
                    <div v-for="(title, index) in stepTitles" :key="index" class="flex flex-col-reverse items-center mx-8">
                        <div
                            :class="[
                                'w-12 h-12 flex items-center justify-center',
                                currentStep === index + 1 ? 'rounded-full border-2 border-[#355E3B] text-[#355E3B]' : 'text-gray-500'
                            ]"
                        >
                            <span class="text-lg font-semibold">{{ index + 1 }}</span>
                        </div>
                        <span class="mt-2 font-semibold text-center" :class="currentStep === index + 1 ? 'text-[#355E3B]' : 'text-gray-500'">
                            {{ title }}
                        </span>
                    </div>
                </div>

                <transition name="slide" mode="out-in">
                    <div v-if="currentStep === 1" key="step-1">
                        <div class="bg-[#E8ECDF] p-8 rounded-md mb-8">
                            <h2 class="text-3xl font-semibold mb-4">C'est parti !</h2>
                            <p class="text-lg">Il suffit de répondre à quelques questions pour commencer à organiser votre voyage.</p>
                        </div>

                        <div class="mb-10 px-8">
                            <h3 class="text-xl mb-4">Où en êtes-vous dans votre projet ?</h3>
                            <div
                                v-for="(option, index) in planningOptions"
                                :key="index"
                                class="mb-3"
                            >
                                <label class="flex items-center cursor-pointer">
                                    <div class="w-6 h-6 rounded-full border border-gray-400 mr-3 flex items-center justify-center">
                                        <input
                                            v-model="selectedPlanningOption"
                                            type="radio"
                                            :value="option"
                                            class="opacity-0 absolute"
                                        >
                                        <div v-if="selectedPlanningOption === option" class="w-3 h-3 rounded-full bg-gray-700" />
                                    </div>
                                    <span>{{ option }}</span>
                                </label>
                            </div>
                        </div>

                        <div class="flex justify-end px-8">
                            <button
                                :disabled="isNextStepDisabled"
                                class="bg-[#355E3B] text-white py-3 px-6 rounded disabled:opacity-50 disabled:cursor-not-allowed"
                                @click="nextStep"
                            >
                                Étape Suivant
                            </button>
                        </div>
                    </div>

                    <div v-else-if="currentStep === 2" key="step-2">
                         <div class="bg-[#E8ECDF] p-8 rounded-md mb-8">
                            <h2 class="text-3xl font-semibold mb-4">On veut en savoir plus</h2>
                            <p class="text-lg">Ces réponses nous permettront d'organiser le voyage le plus optimal pour vous</p>
                        </div>

                        <div class="grid grid-cols-2 gap-8 mb-10 px-8">
                            <div>
                                <h3 class="text-xl mb-4">Avec qui partez vous ?</h3>
                                <div
                                    v-for="(option, index) in participantOptions"
                                    :key="index"
                                    class="mb-3"
                                >
                                    <label class="flex items-center cursor-pointer">
                                        <div class="w-6 h-6 rounded-full border border-gray-400 mr-3 flex items-center justify-center">
                                            <input
                                                v-model="selectedParticipantOption"
                                                type="radio"
                                                :value="option"
                                                class="opacity-0 absolute"
                                            >
                                            <div v-if="selectedParticipantOption === option" class="w-3 h-3 rounded-full bg-gray-700" />
                                        </div>
                                        <span>{{ option }}</span>
                                    </label>
                                </div>
                            </div>

                            <div>
                                <h3 class="text-xl mb-4">Quand voulez-vous partir ?</h3>
                                <select v-model="selectedMonth" class="block w-full p-3 border border-gray-300 rounded-md mb-4 bg-[#E8ECDF]">
                                    <option disabled value="">Sélectionnez un mois</option>
                                    <option>Novembre 2026</option>
                                    <option>Mai 2025</option>
                                    <option>Juillet 2027</option>
                                    <option>Janvier 2025</option>
                                    </select>

                                <div class="flex items-center mb-4 space-x-8">
                                    <div class="flex flex-col items-start">
                                        <span class="mb-1 text-lg">Enfants</span>
                                        <select v-model="numChildren" class="block p-3 border border-gray-300 rounded-md bg-[#E8ECDF]">
                                            <option v-for="n in 10" :key="n" :value="n - 1">{{ n - 1 }}</option>
                                        </select>
                                    </div>
                                    <div class="flex flex-col items-start">
                                        <span class="mb-1 text-lg">Adultes</span>
                                        <select v-model="numAdults" class="block p-3 border border-gray-300 rounded-md bg-[#E8ECDF]">
                                            <option v-for="n in 10" :key="n" :value="n - 1">{{ n - 1 }}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="flex justify-between px-8">
                            <button
                                class="bg-[#355E3B] text-white py-3 px-6 rounded"
                                @click="prevStep"
                            >
                                Précédent
                            </button>
                            <button
                                :disabled="isNextStepDisabled"
                                class="bg-[#355E3B] text-white py-3 px-6 rounded disabled:opacity-50 disabled:cursor-not-allowed"
                                @click="nextStep"
                            >
                                Étape Suivant
                            </button>
                        </div>
                    </div>

                    <div v-else-if="currentStep === 3" key="step-3">
                        <div class="bg-[#E8ECDF] p-8 rounded-md mb-8">
                            <h2 class="text-3xl font-semibold mb-4">Vos envies de voyage</h2>
                            <p class="text-lg">Cette étape nous permet de connaître vos envies les plus importantes</p>
                        </div>

                        <div class="grid grid-cols-2 gap-8 mb-10 px-8">
                            <div>
                                <h3 class="text-xl mb-4">Pour dormir, vous préférez ?</h3>
                                <div
                                    v-for="(option, index) in lodgingOptions"
                                    :key="index"
                                    class="mb-3"
                                >
                                    <label class="flex items-center cursor-pointer">
                                        <div class="w-6 h-6 rounded-full border border-gray-400 mr-3 flex items-center justify-center">
                                            <input
                                                v-model="selectedLodgingOption"
                                                type="radio"
                                                :value="option"
                                                class="opacity-0 absolute"
                                            >
                                            <div v-if="selectedLodgingOption === option" class="w-3 h-3 rounded-full bg-gray-700" />
                                        </div>
                                        <span>{{ option }}</span>
                                    </label>
                                </div>
                            </div>
                            <div>
                                <h3 class="text-xl mb-4">Votre projet en quelques mots</h3>
                                <textarea
                                    v-model="projectDescription"
                                    class="w-full h-32 p-3 border border-gray-300 rounded-md resize-none bg-[#E8ECDF]"
                                    placeholder="Les étapes, les activités, vos goûts et non-goûts, ..."
                                ></textarea>

                                <h3 class="text-xl mb-4 mt-6">Votre budget</h3>
                                <input
                                    v-model="budget"
                                    type="text"
                                    class="w-full p-3 border border-gray-300 rounded-md bg-[#E8ECDF]"
                                    placeholder="Par personne, hors vols et assurances voyages"
                                >
                            </div>
                        </div>

                        <div class="flex justify-between px-8">
                            <button
                                class="bg-[#355E3B] text-white py-3 px-6 rounded"
                                @click="prevStep"
                            >
                                Précédent
                            </button>
                            <button
                                :disabled="isNextStepDisabled"
                                class="bg-[#355E3B] text-white py-3 px-6 rounded disabled:opacity-50 disabled:cursor-not-allowed"
                                @click="nextStep"
                            >
                                Étape Suivant
                            </button>
                        </div>
                    </div>

                    <div v-else-if="currentStep === 4" key="step-4">
                        <div class="p-8 rounded-md mb-8 text-center">
                            <div v-if="isLoggedIn">
                                <h2 class="text-3xl font-semibold mb-4 text-[#355E3B]">C'est parfait !</h2>
                                <p class="text-xl mb-6">Vous avez déjà un espace personnel.</p>
                                <NuxtLink to="/dashboard" class="bg-[#355E3B] text-white py-3 px-6 rounded text-lg font-semibold hover:bg-opacity-90 transition">
                                    Accéder à mon espace
                                </NuxtLink>
                            </div>
                            <div v-else>
                                <div class="grid grid-cols-2 gap-8 px-8">
                                    <a href="/auth?register" class="bg-[#E8ECDF] p-8 pt-8 pb-8 rounded-md flex items-center justify-center text-[#355E3B] text-2xl font-semibold">
                                        M'inscrire
                                    </a>
                                    <a href="/auth" class="bg-[#E8ECDF] p-8 pt-8 pb-8 rounded-md flex items-center justify-center text-[#355E3B] text-2xl font-semibold">
                                        Se connecter
                                    </a>
                                </div>
                            </div>
                       </div>


                        <div class="flex justify-start mt-8 px-8">
                            <button
                                class="bg-[#355E3B] text-white py-3 px-6 rounded"
                                @click="prevStep"
                            >
                                Précédent
                            </button>
                        </div>

                        <div class="mt-12 px-8">
                            <h3 class="text-2xl font-semibold mb-4">Pourquoi créer son espace personnel ?</h3>
                            <ul class="list-disc list-inside text-lg">
                                <li class="mb-2">Échange direct avec l'agence</li>
                                <li class="mb-2">Consultez vos documents, devis et paiement</li>
                                <li>Accédez à ses services directement sur l'appli mobile</li>
                            </ul>
                        </div>
                    </div>
                </transition>
            </div>
        </div>



        <FooterMelody />
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useUserStore } from '~/store/userStore';

const authStore = useUserStore();

const currentStep = ref(1);
const stepTitles = ['Planification', 'Participants et dates', 'Projet de voyage', 'Espace Personnel'];

// Step 1: Planning
const planningOptions = [
    'Je cherche des idées et des infos',
    'Je commence à planifier',
    'Je souhaite réserver prochainement'
];
const selectedPlanningOption = ref('');

// Step 2: Participants et dates
const participantOptions = [
    'Seul(e)',
    'En couple',
    'En famille',
    'Entre amis'
];
const selectedParticipantOption = ref('');
const selectedMonth = ref(''); // For "Quand voulez-vous partir ?"
const numChildren = ref(0);
const numAdults = ref(0);

// Step 3: Projet de voyage
const lodgingOptions = [
    'Être chez l\'habitant',
    'Hôtels simples',
    'Insolite',
    'Peu importe'
];
const selectedLodgingOption = ref('');
const projectDescription = ref('');
const budget = ref('');

const isLoggedIn = computed(() => authStore.isAuth());

// Computed property to check if the next step button should be disabled
const isNextStepDisabled = computed(() => {
    switch (currentStep.value) {
        case 1:
            return !selectedPlanningOption.value;
        case 2:
            return !selectedParticipantOption.value || !selectedMonth.value || (numChildren.value + numAdults.value === 0);
        case 3:
            return !selectedLodgingOption.value || !projectDescription.value || !budget.value;
        case 4:
             // Step 4 has no 'next' button, always effectively 'enabled' for this check
            return false;
        default:
            return false;
    }
});


const nextStep = () => {
    if (currentStep.value < 4 && !isNextStepDisabled.value) {
        currentStep.value++;
    }
};

const prevStep = () => {
    if (currentStep.value > 1) {
        currentStep.value--;
    }
};
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

/* Slide transition styles */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(50px); /* Start from the right */
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-50px); /* Slide out to the left */
}

.slide-enter-to,
.slide-leave-from {
    opacity: 1;
    transform: translateX(0);
}
</style>
