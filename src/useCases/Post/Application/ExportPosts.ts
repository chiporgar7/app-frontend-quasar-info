import { PostInterface } from '../Domain/Post';

export default class ExportPosts {
  constructor(private postRepository: PostInterface) {}

  async handle(): Promise<Blob> {
    return await this.postRepository.exportPosts();
  }
}
