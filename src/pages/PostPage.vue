<template>
  <q-page padding>
    <div class="row q-col-gutter-md">
      <ExportPosts />
      <div
        v-for="post in postStore.posts"
        :key="post.id"
        class="col-12 col-sm-6 col-md-4"
      >
        <PostCard :post="post" :show-buttons="false" />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { onMounted } from 'vue';
import PostCard from 'src/components/PostCard.vue';
import { usePostStore } from 'src/stores/Post';
import ExportPosts from 'src/components/Post/ExportPosts.vue';
const postStore = usePostStore();

onMounted(async () => {
  await postStore.fetchPosts();
});
</script>
