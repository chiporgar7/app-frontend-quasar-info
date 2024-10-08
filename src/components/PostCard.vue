<template>
  <q-card>
    <q-card-section>
      <div class="text-h6">{{ post.title }}</div>
    </q-card-section>
    <q-card-section>
      {{ post.content }}
    </q-card-section>
    <q-card-actions align="right" v-if="showButtons">
      <q-btn flat color="primary" label="Editar" @click="$emit('edit')" />
      <q-btn flat color="negative" label="Borrar" @click="$emit('delete')" />
    </q-card-actions>
  </q-card>
</template>
<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps({
  post: Object,
  showButtons: {
    type: Boolean,
    default: true,
  },
});

defineEmits(['edit', 'delete']);
</script>
