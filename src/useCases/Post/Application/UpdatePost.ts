import { PostInterface } from '../Domain/Post';

export default class UpdatePost {
  constructor(private PostRepository: PostInterface) {}

  async handle(id: string, title: string, content: string): Promise<any> {
    return await this.PostRepository.updatePost(id, title, content);
  }
}
