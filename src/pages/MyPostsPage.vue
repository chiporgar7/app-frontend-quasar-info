<template>
  <q-page padding>
    <div class="row q-col-gutter-md">
      <div
        v-for="post in postStore?.myPosts"
        :key="post.id"
        class="col-12 col-sm-6 col-md-4"
      >
        <PostCard
          :post="post"
          @edit="openEditModal(post)"
          @delete="confirmDelete(post.id)"
        />
      </div>
    </div>

    <q-btn
      fab
      color="primary"
      icon="add"
      class="fixed-bottom-right q-mr-md q-mb-md"
      @click="showCreateModal = true"
    />

    <PostCreate v-model="showCreateModal" />
    <PostUpdate v-model="showEditModal" :post="editingPost" />
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import PostCard from '../components/PostCard.vue';
import PostUpdate from '../components/Post/PostUpdate.vue';
import PostCreate from 'src/components/Post/PostCreate.vue';

import { useConfirmDialog } from '../composables/Ui/useConfirmDialog';
import { useNotify } from 'src/composables/Ui/useNotify';

import { usePostStore } from '../stores/Post';

const { confirm } = useConfirmDialog();
const postStore = usePostStore();
const showCreateModal = ref(false);
const showEditModal = ref(false);
const editingPost = ref(null);
const notify = useNotify();

onMounted(async () => {
  await postStore.fetchMyPosts();
});

const openEditModal = (post) => {
  editingPost.value = post;
  showEditModal.value = true;
};

const confirmDelete = async (id) => {
  const isConfirmed = await confirm({
    title: 'Confirmar eliminación',
    message: '¿Estás seguro de que quieres eliminar esta publicación?',
  });
  if (!isConfirmed) return;
  try {
    await postStore.deletePost(id);
    notify.success('Publicación eliminada exitosamente');
  } catch (error) {
    notify.error('Error al eliminar la publicación');
  }
};
</script>
