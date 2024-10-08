<template>
  <div class="fullscreen bg-primary flex flex-center">
    <q-card class="login-card">
      <q-card-section>
        <div class="text-h6 text-center">Iniciar sesión</div>
      </q-card-section>

      <q-card-section>
        <q-form @submit.prevent="onSubmit" class="q-gutter-md">
          <q-input
            filled
            v-model="email"
            label="Correo electrónico"
            type="email"
            :rules="[(val) => !!val || 'El correo es requerido']"
          />

          <q-input
            filled
            v-model="password"
            label="Contraseña"
            :type="isPwd ? 'password' : 'text'"
            :rules="[(val) => !!val || 'La contraseña es requerida']"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>

          <div class="flex justify-between items-center">
            <q-btn label="Iniciar sesión" type="submit" color="primary" />
            <q-btn label="Registrarse" flat color="primary" to="/register" />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useNotify } from 'src/composables/Ui/useNotify';
import { useLoading } from 'src/composables/Ui/useLoading';
import { useAuthStore } from 'src/stores/AuthStore';
import { useRouter } from 'vue-router';

const router = useRouter();
const authStore = useAuthStore();
const loading = useLoading();
const notify = useNotify();
const email = ref('');
const password = ref('');
const isPwd = ref(true);

const onSubmit = async () => {
  try {
    await authStore.login(email.value, password.value);
    loading.show('Espera...');
    notify.success('Inicio de sesión exitoso');
    router.push('/');
  } catch (error) {
    notify.error('Inicio de sesión fallido');
  } finally {
    loading.hide();
  }
};
</script>

<style scoped>
.login-card {
  width: 100%;
  max-width: 400px;
  padding: 20px;
}
</style>
