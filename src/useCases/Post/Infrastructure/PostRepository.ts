import { PostInterface } from '../Domain/Post';
import { BaseRepository } from 'src/useCases/Shared/Repository/BaseRepository';

export class PostRepository extends BaseRepository implements PostInterface {
  createPost(title: string, content: string): Promise<any> {
    return this.request(() => this.axios.post(`${this.BASE_URL}/post`, {
      title, content
    }));
  }

  getPosts(): Promise<any> {
    return this.request(() => this.axios.get(`${this.BASE_URL}/posts`));
  }

  getMyPosts(): Promise<any> {
    return this.request(() => this.axios.get(`${this.BASE_URL}/posts/me`));
  }

  deletePost(id: string): Promise<any> {
    return this.request(() => this.axios.delete(`${this.BASE_URL}/post/${id}`));
  }

  updatePost(id: string, title: string, content: string): Promise<any> {
    return this.request(() => this.axios.put(`${this.BASE_URL}/post/${id}`, { title, content }));
  }

  exportPosts(): Promise<Blob> {
    return this.request(() => this.axios.get(`${this.BASE_URL}/posts/export`, {
      responseType: 'blob'
    }));
  }

}
