import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const user = ref<{ name: string; email: string } | null>(null)
  const isLoggedIn = computed(() => !!user.value)

  function login(name: string, email: string) {
    user.value = { name, email }
  }

  function logout() {
    user.value = null
  }

  return { user, isLoggedIn, login, logout }
})
