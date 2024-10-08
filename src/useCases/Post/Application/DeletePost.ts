import { PostInterface } from '../Domain/Post';

export default class DeletePost {
  constructor(private PostRepository: PostInterface) {}

  async handle(id: string): Promise<any> {
    return await this.PostRepository.deletePost(id);
  }
}
