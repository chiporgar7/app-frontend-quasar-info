<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title>Blog App</q-toolbar-title>
        <q-btn
          v-if="authStore.isAuthenticated"
          flat
          round
          dense
          icon="person"
        />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>Navigation</q-item-label>
        <q-item clickable to="/home" exact>
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>Inicio</q-item-section>
        </q-item>

        <q-item v-if="authStore.isAuthenticated" clickable to="/posts/me">
          <q-item-section avatar>
            <q-icon name="person" />
          </q-item-section>
          <q-item-section>Mis publicaciones</q-item-section>
        </q-item>

        <q-item v-if="!authStore.isAuthenticated" clickable to="/login">
          <q-item-section avatar>
            <q-icon name="login" />
          </q-item-section>
          <q-item-section>Login</q-item-section>
        </q-item>

        <q-item v-if="authStore.isAuthenticated" clickable @click="logout">
          <q-item-section avatar>
            <q-icon name="logout" />
          </q-item-section>
          <q-item-section>Salir</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useNotify } from 'src/composables/Ui/useNotify';
import { useAuthStore } from 'src/stores/AuthStore';

const router = useRouter();
const authStore = useAuthStore();
const notify = useNotify();

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

async function logout() {
  try {
    await authStore.logout();
    notify.success('Sesión cerrada exitosamente');
    router.push('/login');
  } catch (error) {
    notify.error('Error al cerrar sesión');
  }
}

onMounted(async () => {
  const token = localStorage.getItem('token');
  if (token) {
    authStore.setToken(token);
    return;
  }
  notify.error('Sesión expirada. Por favor, inicie sesión nuevamente.');
  router.push('/login');
});
</script>
