import { PostInterface } from '../Domain/Post';

export default class CreatePost {
  constructor(private PostRepository: PostInterface) {}

  async handle(title: string, content: string): Promise<any> {
    return await this.PostRepository.createPost(title, content);
  }
}
