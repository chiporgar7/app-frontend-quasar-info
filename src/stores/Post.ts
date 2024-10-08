import { defineStore } from 'pinia';
import { useProvider } from 'src/composables/Provider/useProvider';

export const usePostStore = defineStore('post', {
  state: () => ({
    posts: [],
    myPosts: []
  }),
  actions: {
    async createPost(title: string, content: string) {
      const provider = useProvider();
      const newPost: any = await provider.Post.create.handle(title, content);
      console.log(newPost);

      this.posts.unshift(newPost.data);
      this.myPosts.unshift(newPost.data);
    },

    async fetchPosts() {
      const provider = useProvider();
      this.posts = await provider.Post.get.handle();
    },

    async fetchMyPosts() {
      const provider = useProvider();
      this.myPosts = await provider.Post.getMyPosts.handle();
    },

    async updatePost(id: string, title: string, content: string) {
      const provider = useProvider();
      await provider.Post.update.handle(id, title, content);
      const updatedPost: any = this.myPosts.find((post: any) => post.id === id);
      if (updatedPost) {
        updatedPost.title = title;
        updatedPost.content = content;
      }
    },

    async deletePost(id: string) {
      const provider = useProvider();
      await provider.Post.delete.handle(id);
      this.myPosts = this.myPosts.filter((post: any) => post.id !== id);
      this.posts = this.posts.filter((post: any) => post.id !== id);
    }
  }
});
