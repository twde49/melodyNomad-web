<template>
  <div class="overflow-x-hidden">
      <div class="h-[100vh]">
          <BasicNavbar class="sticky mt-4 z-10" is-white />
          <div class="absolute top-0">
              <div class="relative w-[100vw] h-[100vh]">
                  <img
                      src="public/assets/img/contactBackground.jpg"
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
                  Contact
              </h1>
              <p
                  class="text-[28px] leading-[28px] text-white font-extralight mb-[64px] chivo"
              >
                  Écrivez-nous comme on envoie une carte postale.
              </p>
          </div>
      </div>
      
      <div class="w-[80vw] pb-40 mt-20 mb-40 flex-grow mx-auto relative bg-[url('/public/assets/img/backgroundSvgForm.svg')] bg-no-repeat bg-center bg-cover">
          <div class="p-12 rounded-lg mx-auto">
            <h1 class="text-[40px] titleFont leading-[48px] mb-[48px] text-center">
                Pour toute demande d'informations ou de personnalisation, n'hésitez pas à nous contacter en remplissant le formulaire ci-dessous
            </h1>
          <form @submit.prevent="submitForm" class="space-y-10">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label for="lastname" class="block mb-3 text-lg font-medium">Nom</label>
                <input type="text" id="lastname" placeholder="Votre nom" class="w-[37vw] p-4 border rounded-md text-left bg-[#fefefb]">
              </div>
              <div>
                <label for="firstname" class="block mb-3 text-lg font-medium">Prénom</label>
                <input type="text" id="firstname" placeholder="Votre prénom" class="w-full p-4 border rounded-md text-left bg-[#fefefb]">
              </div>
            </div>

            <div>
              <label for="email" class="block mb-3 text-lg font-medium">Adresse e-mail</label>
              <input type="email" id="email" placeholder="Entrez votre adresse e-mail" class="w-full p-4 border rounded-md text-left bg-[#fefefb]">
            </div>

            <div class="md:w-1/2">
              <label for="phone" class="block mb-3 text-lg font-medium">Téléphone</label>
              <input type="tel" id="phone" placeholder="Votre numéro de téléphone" class="w-[37vw] p-4 border rounded-md text-left bg-[#fefefb]">
            </div>

            <div class="md:w-1/2">
              <label for="subject" class="block mb-3 text-lg font-medium">Objet du message</label>
              <input type="text" id="subject" placeholder="L'organisation" class="w-[37vw] p-4 border rounded-md text-left bg-[#fefefb]">
            </div>

            <div>
              <label for="message" class="block mb-3 text-lg font-medium">Message <span class="text-red-500">*</span></label>
              <textarea id="message" rows="8" placeholder="Comment pouvons-nous aider ?" class="w-full p-4 border rounded-md text-left bg-[#fefefb]"></textarea>
            </div>

            <div class="flex items-center justify-between">
              <div class="flex items-start">
                <input id="terms" type="checkbox" class="mt-2 mr-3 w-5 h-5">
                <label for="terms" class="text-base">J'ai lu et j'accepte les conditions générales et la politique de confidentialité</label>
              </div>
              <div>
                <button type="submit" class="bg-green-800 hover:bg-green-700 text-white font-medium py-4 px-8 rounded-md text-lg">
                  Envoyer
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

    <FooterMelody />
  </div>
</template>

<script setup>
import { ref } from 'vue';

// You might need to import your footer component if it's not globally registered
// import Footer from '~/components/Footer.vue';

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  termsAccepted: false
});

const submitForm = async () => {
  // Form validation
  if (!form.value.message) {
    alert('Le message est obligatoire');
    return;
  }
  
  if (!form.value.termsAccepted) {
    alert('Veuillez accepter les conditions générales');
    return;
  }

  // Submit logic here
  console.log('Form submitted:', form.value);
  
  // You might want to add API call here to send the form data
  // await $fetch('/api/contact', { method: 'POST', body: form.value });
};
</script>
