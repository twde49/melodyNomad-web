<template>
    <section
    class="newsletter-signup-section relative w-full min-h-screen flex flex-col justify-between items-center text-white font-sans py-10 px-5 rounded-tl-2xl rounded-tr-2xl"
    >
        <div
            class="newsletter-signup-container relative z-10 w-[90vw] p-10 text-center mb-0 overflow-hidden rounded-xl"
        >
            <div class="newsletter-header text-center mb-8">
                <h2 class="text-5xl titleFont text-white! max-md:text-2xl">
                    Adhérez à notre newsletter
                </h2>
            </div>

            <div>
                <form
                    class="newsletter-form flex gap-4 mb-6 flex-wrap justify-center max-md:flex-col max-md:items-center"
                    @submit.prevent="handleSubmit"
                >
                    <input
                        v-model="email"
                        type="email"
                        placeholder="Entrez votre email"
                        class="p-[14px] px-5 border border-white/30 bg-white/5 text-white text-base rounded-lg w-80 h-12 placeholder-white/60 focus:bg-white/10 focus:border-white/50 outline-none"
                        required
                    />
                    <button
                        class="primaryBackground w-60 h-12 hover:accent-white text-white py-2 px-4 rounded cursor-pointer"
                        :disabled="!consentGiven"
                    >
                        S'inscrire
                    </button>
                </form>

                <div
                    class="consent-and-info flex w-[70vw] md:w-[80vw] gap-5 mt-5 flex-col justify-around md:flex-row items-center md:items-start text-center md:text-left"
                >
                    <div
                        class="privacy-consent flex mb-5 md:mb-0 w-full md:w-auto md:flex-1 md:max-w-lg items-center text-center md:text-left flex-col md:flex-row"
                    >
                        <input
                            id="consentCheckbox"
                            v-model="consentGiven"
                            type="checkbox"
                            class="consent-checkbox mb-2.5 md:mb-0 md:mr-2.5"
                            required
                        />
                        <label
                            for="consentCheckbox"
                            class="consent-label text-sm leading-normal"
                        >
                            Je consens à recevoir la newsletter de "Melody
                            Nomad" à l'adresse email indiquée.
                        </label>
                    </div>

                    <div
                        class="privacy-info w-full md:w-auto md:flex-1 md:max-w-xl text-left text-sm leading-relaxed"
                    >
                        <p class="mb-2.5">
                            Pour en savoir plus sur la gestion de vos données,
                            consultez notre
                            <NuxtLink
                                to="/politique-de-confidentialite"
                                class="privacy-link text-[#88b04b] underline transition-colors duration-300 ease-in-out hover:text-[#a0c860]"
                                >politique de confidentialité</NuxtLink
                            >.
                        </p>
                        <p>
                            Vous pouvez vous désinscrire à tout moment en
                            cliquant sur le lien de désinscription présent dans
                            nos emails.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div
            class="footer-section relative z-10 w-[90vw] p-8 lg:px-10 rounded-xl text-gray-300 text-left mt-0 bg-white/30 shadow-xl border border-white/20"
        >
            <div
                class="footer-columns flex justify-between flex-wrap gap-8 mb-8 max-md:flex-col max-md:items-center max-md:text-center"
            >
                <div
                    class="footer-column navigation flex-1 min-w-[150px] max-md:w-full max-md:min-w-0"
                >
                    <h3 class="text-white text-lg mb-4">Navigation</h3>
                    <ul class="list-none p-0">
                        <li class="mb-2">
                            <NuxtLink
                                to="/"
                                class="text-gray-300 no-underline transition-colors duration-300 ease-in-out hover:text-white"
                                >Accueil</NuxtLink
                            >
                        </li>
                        <li class="mb-2">
                            <NuxtLink
                                to="/notre-histoire"
                                class="text-gray-300 no-underline transition-colors duration-300 ease-in-out hover:text-white"
                                >Notre Histoire</NuxtLink
                            >
                        </li>
                        <li class="mb-2">
                            <NuxtLink
                                to="/nos-destinations"
                                class="text-gray-300 no-underline transition-colors duration-300 ease-in-out hover:text-white"
                                >Nos Destinations</NuxtLink
                            >
                        </li>
                        <li class="mb-2">
                            <NuxtLink
                                to="/faq"
                                class="text-gray-300 no-underline transition-colors duration-300 ease-in-out hover:text-white"
                                >FAQ</NuxtLink
                            >
                        </li>
                    </ul>
                </div>
                <div
                    class="footer-column contact flex-1 min-w-[150px] max-md:w-full max-md:min-w-0"
                >
                    <h3 class="text-white text-lg mb-4">Contact</h3>
                    <ul class="list-none p-0">
                        <li class="mb-2">
                            <NuxtLink
                                to="/mentions-legales"
                                class="text-gray-300 no-underline transition-colors duration-300 ease-in-out hover:text-white"
                                >Mentions Légales</NuxtLink
                            >
                        </li>
                        <li class="mb-2">
                            <NuxtLink
                                to="/dsv"
                                class="text-gray-300 no-underline transition-colors duration-300 ease-in-out hover:text-white"
                                >DSV</NuxtLink
                            >
                        </li>
                        <li class="mb-2">
                            <NuxtLink
                                to="/politique-de-confidentialite"
                                class="text-gray-300 no-underline transition-colors duration-300 ease-in-out hover:text-white"
                                >Politique de Confidentialité</NuxtLink
                            >
                        </li>
                        <li class="mb-2">
                            <NuxtLink
                                to="/contactez-nous"
                                class="text-gray-300 no-underline transition-colors duration-300 ease-in-out hover:text-white"
                                >Nous contacter
                                <span class="arrow ml-1 text-sm"
                                    >↗</span
                                ></NuxtLink
                            >
                        </li>
                    </ul>
                </div>
                <div
                    class="footer-column social flex gap-5 justify-end items-start flex-basis-auto min-w-0 max-md:justify-center max-md:items-center"
                >
                    <a
                        href="#"
                        aria-label="Facebook"
                        class="text-2xl text-white transition-colors duration-300 ease-in-out hover:text-[#88b04b]"
                        ><Icon name="uil:facebook-f"
                    /></a>
                    <a
                        href="#"
                        aria-label="Instagram"
                        class="text-2xl text-white transition-colors duration-300 ease-in-out hover:text-[#88b04b]"
                        ><Icon name="uil:instagram"
                    /></a>
                    <a
                        href="#"
                        aria-label="TikTok"
                        class="text-2xl text-white transition-colors duration-300 ease-in-out hover:text-[#88b04b]"
                        ><Icon name="simple-icons:tiktok"
                    /></a>
                </div>
            </div>
            <div
                class="footer-bottom border-t border-white/20 pt-5 flex justify-between flex-wrap gap-2.5 text-sm text-gray-400 max-md:flex-col max-md:text-center"
            >
                <p>CRÉÉ PAR LES GOATS</p>
                <p>© MELODY NOMAD</p>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");
const consentGiven = ref(false);

const handleSubmit = () => {
    if (email.value && consentGiven.value) {
        console.log("Email submitted:", email.value);
        console.log("Consent given:", consentGiven.value);
        alert("Merci de votre inscription !");
        email.value = "";
        consentGiven.value = false;
    } else {
        alert("Veuillez entrer votre email et accepter les conditions.");
    }
};
</script>

<style scoped>
.newsletter-signup-section {
    background-image: url("public/assets/img/background-newsletter.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.newsletter-signup-section::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
}

.consent-checkbox {
    transform: scale(1.2);
}
</style>
