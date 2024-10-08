import { defineStore } from 'pinia';
import { useProvider } from 'src/composables/Provider/useProvider';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token') || null,
    user: null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
  actions: {
    setToken(token: string) {
      this.token = token;
    },
    async login(email:string, password: string) {
      try {
        const provider = useProvider();
        const response = await provider.User.login.handle(email, password);
        console.log(response)
        this.token = response.token;
        if(this.token === null) this.token = ''
        localStorage.setItem('token', this.token);
      } catch (error) {
        console.log('se rompe algo')
        console.log(error)
        console.error('Error durante el inicio de sesión:', error);
        throw error;
      }
    },
    async register(name:string, email:string, password:string) {
      try {
        const provider = useProvider();
        await provider.User.register.handle(name, email, password);
      } catch (error) {
        console.error('Error durante el registro:', error);
        throw error;
      }
    },
    async logout() {
      try {
        // const provider = useProvider();
        // await provider.User.logout.handle();
        this.token = null;
        this.user = null;
        localStorage.removeItem('token');
      } catch (error) {
        console.error('Error durante el cierre de sesión:', error);
        throw error;
      }
    },
    async fetchCurrentUser() {
      try {
        const provider = useProvider();
        const response = await provider.User.getCurrentUser.handle();
        this.user = response.data;
      } catch (error) {
        console.error('Error al obtener el usuario actual:', error);
        throw error;
      }
    },
  },
});
