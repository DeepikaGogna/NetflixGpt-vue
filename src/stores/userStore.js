import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    userInfo: null
  }),
  actions: {
    addUser(payload) {
      this.userInfo = payload
    },
    removeUser() {
      this.userInfo = null
    }
  }
})
