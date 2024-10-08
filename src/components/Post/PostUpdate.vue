<template>
  <PostDialog
    v-model="showDialog"
    title="Editar Publicación"
    submit-label="Actualizar"
    :initial-post="editingPost"
    @submit="updatePost"
  />
</template>

<script setup>
import { computed } from 'vue';
import PostDialog from './PostDialog.vue';
import { usePostStore } from 'src/stores/Post';
import { useLoading } from 'src/composables/Ui/useLoading';
import { useNotify } from 'src/composables/Ui/useNotify';

const props = defineProps({
  modelValue: Boolean,
  post: Object,
});

const emit = defineEmits(['update:modelValue']);

const postStore = usePostStore();
const loading = useLoading();
const notify = useNotify();

const showDialog = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
});

const editingPost = computed(() => ({ ...props.post }));

const updatePost = async (post) => {
  loading.show('Actualizando publicación...');
  try {
    await postStore.updatePost(post.id, post.title, post.content);
    notify.success('Publicación actualizada exitosamente');
    showDialog.value = false;
  } catch (error) {
    notify.error('Error al actualizar la publicación');
  } finally {
    loading.hide();
  }
};
</script>
