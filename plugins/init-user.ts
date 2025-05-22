import { useUserStore } from "~/store/userStore"
export default defineNuxtPlugin(() => {
  const userStore = useUserStore()
  userStore.initialize()
})
