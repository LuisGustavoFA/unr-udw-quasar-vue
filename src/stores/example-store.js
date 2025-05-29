import { defineStore, acceptHMRUpdate } from 'pinia'

const useStore = defineStore('appStore', {
  state: () => ({
    counter: 0,
    dado: 'dado inicial',
    user: 'usuario inicial'
  }),

  getters: {
    doubleCount: (state) => state.counter * 2
  },

  actions: {
    increment() {
      this.counter++
    },
    setUser(user) {
      this.user = user;
      sessionStorage.setItem("user", JSON.stringify(user));
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot))
}

const appStore = useStore();
let tempUser = sessionStorage.getItem('user')
if (tempUser) {
  appStore.user = JSON.parse(tempUser);
}
export {appStore};
