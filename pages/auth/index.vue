<template>
  <div class="auth-container">
    <div class="flip-container" :class="{ 'flipped': loginRegister === 'register' }">

      <div class="side form-side">
        <div class="back-button" @click="goBack">
          <span class="arrow">←</span>
          <span class="text">retour</span>
          <div class="line"></div>
        </div>

        <div class="logo">
          <img src="/assets/img/melody-nomad-logo.svg" alt="Melody Nomad">
          <div class="tagline">Voyagez aux rythmes du monde</div>
        </div>

        <transition name="form-transition" mode="out-in">
          <form v-if="loginRegister === 'login'" :key="loginRegister" class="form" @submit.prevent="login">
            <div v-if="error" class="error-message">{{ error }}</div>

            <div class="form-group">
              <label>Adresse e-mail</label>
              <input v-model="email" type="email" placeholder="Entrez votre adresse e-mail">
            </div>

            <div class="form-group">
              <label>Mot de passe</label>
              <input v-model="password" type="password" placeholder="Entrez votre mot de passe">
            </div>

            <button type="submit" :disabled="isLoading" class="auth-button">
              {{ isLoading ? 'Connexion...' : 'Se connecter' }}
            </button>

            <div class="account-actions">
              <div class="no-account">Je n'ai pas de compte</div>
              <div class="create-account" @click="setRegister">Créer un compte</div>
            </div>
          </form>
          <form v-else :key="loginRegister + '_register'" class="form" @submit.prevent="register">
            <div v-if="error" class="error-message">{{ error }}</div>

            <div class="name-row">
              <div class="form-group half">
                <label>Nom</label>
                <input v-model="lastName" type="text" placeholder="Votre nom">
              </div>

              <div class="form-group half">
                <label>Prénom</label>
                <input v-model="firstName" type="text" placeholder="Prénom">
              </div>
            </div>

            <div class="form-group">
              <label>Adresse e-mail</label>
              <input v-model="email" type="email" placeholder="Entrez votre adresse e-mail">
            </div>

            <div class="form-group">
              <label>Mot de passe</label>
              <input v-model="password" type="password" placeholder="Entrez votre mot de passe">
            </div>

            <button type="submit" :disabled="isLoading" class="auth-button">
              {{ isLoading ? 'Création...' : 'Créer son compte' }}
            </button>

            <div class="account-actions">
              <div class="no-account">J'ai déjà un compte</div>
              <div class="create-account" @click="setLogin">Se connecter</div>
            </div>
          </form>
        </transition>
      </div>

      <div class="vertical-divider"></div>

      <div class="side image-side">
        <transition name="image-transition" mode="out-in">
          <img
            :key="loginRegister"
            src="/assets/img/planeConnection.svg"
            alt="Plane Connection"
            class="plane-image"
          >
        </transition>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '~/store/userStore';

const router = useRouter();
const userStore = useUserStore();

const loginRegister = ref<string>('login');
const email = ref('');
const password = ref('');
const firstName = ref('');
const lastName = ref('');
const isLoading = ref(false);
const error = ref('');

onMounted(async () => {
  try {
    await fetch('/api/auth/setup');
  } catch (e) {
    console.error('Database setup error:', e);
  }

  const route = router.currentRoute.value;
  if (route.fullPath.includes('register')) {
    loginRegister.value = 'register';
  }


  userStore.initialize();
  if (userStore.isAuthenticated) {
    router.push('/dashboard');
  }
});

const setLogin = () => {
  loginRegister.value = 'login';
  error.value = '';
};

const setRegister = () => {
  loginRegister.value = 'register';
  error.value = '';
};

const goBack = () => {
  router.push('/');
};

const login = async () => {
  if (!email.value || !password.value) {
    error.value = 'Veuillez remplir tous les champs';
    return;
  }

  try {
    isLoading.value = true;
    error.value = '';

    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value
      })
    });

    const data = await response.json();

    if (data.success) {
      userStore.setUser(data.user);
      router.push('/dashboard');
    } else {
      error.value = data.message || 'Échec de connexion. Veuillez vérifier vos identifiants.';
    }
  } catch (err) {
    error.value = 'Une erreur est survenue. Veuillez réessayer.';
    console.error('Login error:', err);
  } finally {
    isLoading.value = false;
  }
};

const register = async () => {
  if (!email.value || !password.value || !firstName.value || !lastName.value) {
    error.value = 'Veuillez remplir tous les champs';
    return;
  }

  try {
    isLoading.value = true;
    error.value = '';

    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value
      })
    });

    const data = await response.json();

    if (data.success) {
      userStore.setUser(data.user);
      router.push('/dashboard');
    } else {
      error.value = data.message || 'Échec de l\'inscription. Veuillez réessayer.';
    }
  } catch (err) {
    error.value = 'Une erreur est survenue. Veuillez réessayer.';
    console.error('Registration error:', err);
  } finally {
    isLoading.value = false;
  }
};
</script>

<style scoped>
.auth-container {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: #f9f9f0;
  font-family: 'Arial', sans-serif;
}

.flip-container {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  transition: all 0.8s ease-in-out;
}

.side {
  flex: 1;
  height: 100%;
  overflow: hidden;
  transition: all 0.8s ease-in-out;
}

.form-side {
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  background-color: #f9f9f0;
  order: 1;
}

.image-side {
  background-color: #2c86d0;
  order: 2;
  position: relative;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}

.vertical-divider {
  position: absolute;
  width: 2px;
  height: 40vh;
  background-color: var(--primary-color);
  top: 50%;
  right: 50%;
  transform: translateY(-50%);
  z-index: 10;
  transition: all 0.8s ease-in-out;
}

.flipped .vertical-divider {
  right: auto;
  left: 50%;
}

.flipped .form-side {
  order: 2;
}

.flipped .image-side {
  order: 1;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}

.back-button {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  cursor: pointer;
}

.arrow {
  font-size: 1.2rem;
  margin-right: 0.5rem;
  color: #333;
}

.text {
  color: #333;
  font-size: 1rem;
}

.line {
  height: 1px;
  background-color: #333;
  width: 80px;
  margin-left: 0.5rem;
}

.logo {
  margin-bottom: 3rem;
  text-align: center;
  margin-top: 1rem;
}

.logo img {
  max-height: 60px;
}

.tagline {
  color: #333;
  font-size: 0.9rem;
  margin-top: 0.5rem;
}

.form {
  max-width: 550px;
  margin: 0 auto;
  width: 100%;
}

.name-row {
  display: flex;
  gap: 16px;
}

.form-group {
  margin-bottom: 1.5rem;
}

.half {
  flex: 1;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #333;
}

.form-group input {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  background-color: #fff;
}

.auth-button {
  background-color: #2b533b;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1rem;
  width: fit-content;
  font-weight: 500;
}

.auth-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.account-actions {
  margin-top: 3rem;
  text-align: center;
}

.no-account {
  color: #666;
  margin-bottom: 0.5rem;
}

.create-account {
  color: #333;
  text-decoration: underline;
  cursor: pointer;
}

.plane-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.error-message {
  background-color: rgba(255, 0, 0, 0.1);
  color: #d32f2f;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
  font-size: 0.9rem;
}

.form-transition-enter-active,
.form-transition-leave-active {
  transition: opacity 0.3s ease;
}

.form-transition-enter-from,
.form-transition-leave-to {
  opacity: 0;
}

.image-transition-enter-active,
.image-transition-leave-active {
  transition: all 0.5s ease;
}

.image-transition-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.image-transition-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
