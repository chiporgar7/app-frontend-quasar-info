<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
// import { useAuthStore } from 'src/stores/auth';

const email = ref('');
const password = ref('');
const router = useRouter();
// const authStore = useAuthStore();

const register = async () => {
  // try {
  //   await authStore.register(email.value, password.value);
  //   router.push('/login');
  // } catch (error) {
  //   console.error('Registration failed:', error);
  // }
};
</script>

<template>
  <q-page class="flex flex-center">
    <q-card style="width: 300px">
      <q-card-section>
        <div class="text-h6">Register</div>
      </q-card-section>
      <q-card-section>
        <q-input v-model="email" label="Email" type="email" />
        <q-input v-model="password" label="Password" type="password" />
      </q-card-section>
      <q-card-actions align="right">
        <q-btn label="Register" color="primary" @click="register" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>
