<template>
  <PostDialog
    v-model="showDialog"
    title="Crear Nueva Publicación"
    submit-label="Crear"
    :initial-post="initialPost"
    @submit="createPost"
  />
</template>

<script setup>
import { ref, computed } from 'vue';
import PostDialog from './PostDialog.vue';
import { usePostStore } from 'src/stores/Post';
import { useLoading } from 'src/composables/Ui/useLoading';
import { useNotify } from 'src/composables/Ui/useNotify';

const props = defineProps({
  modelValue: Boolean,
});

const emit = defineEmits(['update:modelValue']);

const postStore = usePostStore();
const loading = useLoading();
const notify = useNotify();

const showDialog = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
});

const initialPost = ref({ title: '', content: '' });

const createPost = async (post) => {
  loading.show('Creando publicación...');
  try {
    await postStore.createPost(post.title, post.content);
    notify.success('Publicación creada exitosamente');
    showDialog.value = false;
    initialPost.value = { title: '', content: '' };
  } catch (error) {
    notify.error('Error al crear la publicación');
  } finally {
    loading.hide();
  }
};
</script>
