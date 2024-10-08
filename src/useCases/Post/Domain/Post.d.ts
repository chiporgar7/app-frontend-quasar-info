export interface PostInterface {
  createPost(title: string, content: string): Promise<any>;
  getPosts(): Promise<any>;
  getMyPosts(): Promise<any>;
  deletePost(id: string): Promise<any>;
  updatePost(id: string, title: string, content: string): Promise<any>;
  exportPosts(): Promise<Blob>;
}
