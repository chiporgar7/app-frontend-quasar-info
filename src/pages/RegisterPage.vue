<template>
  <div class="fullscreen bg-primary flex flex-center">
    <q-card class="register-card">
      <q-card-section>
        <q-card-section>
          <div class="text-h6 text-center">Registro</div>
        </q-card-section>

        <q-form @submit="register" class="q-gutter-md">
          <q-input
            filled
            v-model="name"
            label="Nombre"
            :rules="[(val) => !!val || 'El nombre es requerido']"
          />
          <q-input
            filled
            v-model="email"
            label="Email"
            type="email"
            :rules="[(val) => !!val || 'El correo es requerido']"
          />
          <q-input
            filled
            v-model="password"
            label="Password"
            type="password"
            :rules="[(val) => !!val || 'La contraseña es requerida']"
          />
          <div class="flex justify-between items-center">
            <q-btn label="Registrarse" type="submit" color="primary" />
            <q-btn label="Iniciar sesión" flat color="primary" to="/login" />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from 'src/stores/AuthStore';
import { useNotify } from 'src/composables/Ui/useNotify';

const name = ref('');
const email = ref('');
const password = ref('');
const router = useRouter();
const authStore = useAuthStore();
const notify = useNotify();

const register = async () => {
  try {
    await authStore.register(name.value, email.value, password.value);
    notify.success('Registro exitoso. Por favor, inicie sesión.');
    router.push('/login');
  } catch (error) {
    console.error('Registration failed', error);
    notify.error('Error en el registro. Por favor, intente nuevamente.');
  }
};
</script>

<style scoped>
.register-card {
  width: 100%;
  max-width: 400px;
  padding: 20px;
}
</style>
