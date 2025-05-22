// stores/user.ts
import { defineStore } from 'pinia'
import { useCookie } from '#app'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,
  }),

  actions: {
    setUser(user: any) {
      this.user = user
      this.isAuthenticated = !!user

      const userCookie = useCookie('user', { sameSite: 'lax' }) // SSR-safe
      if (user) {
        userCookie.value = user
      } else {
        userCookie.value = null
      }
    },

    initialize() {
      const userCookie = useCookie<any>('user')
      if (userCookie.value) {
        this.user = userCookie.value
        this.isAuthenticated = true
      }
    },

    logout() {
      this.user = null
      this.isAuthenticated = false
      const userCookie = useCookie('user')
      userCookie.value = null
      navigateTo('/')
    },

    setLoading(status: boolean) {
      this.isLoading = status
    },

    setError(message: string) {
      this.error = message
    },

    isAuth(): boolean {
      const userCookie = useCookie('user')
      this.isAuthenticated = !!userCookie.value
      return !!userCookie.value
    },
  },

  getters: {
    currentConnectedUser: (state) => state.user,
  },
})
